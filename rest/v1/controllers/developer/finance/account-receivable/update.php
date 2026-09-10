<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new AccountReceivable($conn);
$valActivity = new ActivityLog($conn);
$valReturns = new Returns($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("id", $_GET)) {
    // check data
    checkPayload($data);
    // get data

    $val->installment_payment_aid = $_GET['id'];
    $val->installment_payment_is_paid = 0;
    // Row's full due amount - was never being read from the payload, so the
    // is_paid check below always compared against 0, marking every payment
    // (partial or full) as fully paid.
    $val->installment_payment_amount = $data["installment_payment_amount"];
    $val->installment_payment_paid_amount = $data["installment_payment_paid_amount"];
    $val->installment_payment_received_id = $data["installment_payment_received_id"];
    $val->installment_payment_received_name = $data["installment_payment_received_name"];
    $val->installment_payment_code_number = $data["installment_payment_code_number"];
    $val->installment_payment_method = $data["installment_payment_method"];
    $val->installment_payment_updated = date("Y-m-d H:i:s");
    $val->sales_order_updated = date("Y-m-d H:i:s");

    if ((float)$val->installment_payment_amount <= (float)$val->installment_payment_paid_amount) {
        $val->installment_payment_is_paid = 1;
    }

    checkId($val->installment_payment_aid);
    // update

    applyOrderPaymentEffects($val, $data, $valReturns);

    $query = checkUpdate($val);
    $val->lastInsertedId = $data["installment_payment_aid"];
    // Journal entry reflects only THIS transaction's amount, not the row's
    // cumulative paid total (see note above on installment_payment_new_amount).
    $val->sales_order_paid_amount = (float)($data["installment_payment_new_amount"] ?? 0);
    checkCreateSalesJornal($val);
    createActivityLog($valActivity, $data);
    returnSuccess($val, "Account Receivable", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
