<?php
/**
 * One-off data repair: restore return_product_resolution_type = 'credit memo'
 * on graces_return_product rows that were silently blanked out by a since-
 * fixed bug in applyCreditMemoToReturns() / applyCreditMemoForCollection()
 * (rest/v1/controllers/developer/sales-order/functions.php and
 * rest/v1/controllers/developer/finance/account-receivable/functions.php).
 *
 * Those two functions call checkUpdate() on a Returns object to record how
 * much of a credit-memo return has been consumed by a sales order, but only
 * ever set return_product_aid / _status / _paid_amount / _updated on it.
 * Returns::update() writes return_product_resolution_type and
 * _refund_method on every call, so any property not set on the object goes
 * into those columns as null - wiping out "credit memo" the first time a
 * sales order consumed any of that return's balance. Once resolution_type
 * no longer read 'credit memo', the return silently dropped out of every
 * query that finds a customer's available credit (they all filter on
 * return_product_resolution_type = 'credit memo'), even though the return
 * itself was still marked "processed" - which is exactly the symptom this
 * script repairs.
 *
 * Detection: a corrupted row is a processed return with a blank
 * resolution_type whose return_product_updated timestamp exactly matches a
 * graces_activity_log entry for a "credit memo"-paid sales order (create or
 * update) for the same customer - that timestamp coincidence only happens
 * via the buggy consumption path, since both writes happen in the same
 * request at the same date("Y-m-d H:i:s") call. Safe to re-run: once a row
 * is repaired it no longer matches the "blank resolution_type" filter.
 *
 * Usage: php rest/v1/scripts/backfill-credit-memo-resolution-type.php [--dry-run]
 */

require __DIR__ . '/../core/env.php';
require __DIR__ . '/../core/Database.php';

$dryRun = in_array('--dry-run', $argv, true);

$conn = Database::connectDb();

$sql = "select r.return_product_aid, r.return_product_number, ";
$sql .= "r.return_product_customer_id, r.return_product_customer_name, ";
$sql .= "r.return_product_amount, r.return_product_updated ";
$sql .= "from graces_return_product r ";
$sql .= "where r.return_product_status = 'processed' ";
$sql .= "and (r.return_product_resolution_type is null or r.return_product_resolution_type = '') ";
$sql .= "and r.return_product_updated <> r.return_product_created ";
$sql .= "and exists ( ";
$sql .= "    select 1 from graces_activity_log a ";
$sql .= "    where a.activity_log_menu = 'sales-order' ";
$sql .= "    and a.activity_log_created = r.return_product_updated ";
// sales_order_credit_memo is the delta actually applied via
// applyCreditMemoToReturns()/applyCreditMemoForCollection() - it's set
// whenever an order uses ANY amount of credit memo, even a partial one
// alongside cash/check/etc under "multiple payment", so payment_method
// alone isn't a reliable signal.
$sql .= "    and JSON_EXTRACT(a.activity_log_description, '$[0].values.sales_order_customer_id') = r.return_product_customer_id ";
$sql .= "    and CAST(JSON_UNQUOTE(JSON_EXTRACT(a.activity_log_description, '$[0].values.sales_order_credit_memo')) AS DECIMAL(12,2)) > 0 ";
$sql .= ") ";

$candidates = $conn->query($sql)->fetchAll();

if (empty($candidates)) {
    echo "No corrupted credit-memo returns found.\n";
    exit(0);
}

echo "Found " . count($candidates) . " return(s) to repair:\n";

$update = $conn->prepare(
    "update graces_return_product set return_product_resolution_type = 'credit memo' " .
    "where return_product_aid = :aid"
);

foreach ($candidates as $row) {
    printf(
        "  %s (aid %d) - %s - amount %.2f, updated %s\n",
        $row['return_product_number'],
        $row['return_product_aid'],
        $row['return_product_customer_name'],
        $row['return_product_amount'],
        $row['return_product_updated']
    );

    if (!$dryRun) {
        $update->execute(['aid' => $row['return_product_aid']]);
    }
}

echo $dryRun
    ? "\nDry run - no changes written. Re-run without --dry-run to apply.\n"
    : "\nDone - resolution_type restored to 'credit memo' on the row(s) above.\n";
