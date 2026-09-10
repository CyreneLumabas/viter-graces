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
// check data
checkPayload($data);

// Records one ad-hoc installment payment (date + amount + method) for a
// Customize-type sales order - the Accounts Receivable equivalent of the
// Sales Order modal's monthly/weekly schedule generation, entered one row
// at a time instead of up front.
$now = date("Y-m-d H:i:s");

$val->installment_payment_code_id = 0;
$val->installment_payment_code = 'sales-order';
$val->installment_payment_is_paid = 1;
$val->installment_payment_due_date = !empty($data['installment_payment_due_date'])
    ? $data['installment_payment_due_date']
    : null;
$val->installment_payment_code_number = $data['sales_order_number'];
$val->installment_payment_amount = $data['installment_payment_paid_amount'];
$val->installment_payment_paid_amount = $data['installment_payment_paid_amount'];
$val->installment_payment_method = $data['installment_payment_method'];
$val->installment_payment_customer_id = $data['sales_order_customer_id'];
$val->installment_payment_customer_name = $data['sales_order_customer_name'];
$val->installment_payment_received_id = $data['installment_payment_received_id'];
$val->installment_payment_received_name = $data['installment_payment_received_name'];
$val->installment_payment_created = $now;
$val->installment_payment_updated = $now;
$val->sales_order_updated = $now;

$query = $val->createInstallmentPayment();
checkQuery($query, "There's a problem processing your request. (Create Installment Payment)");

$val->lastInsertedId = $val->connection->lastInsertId();

applyOrderPaymentEffects($val, $data, $valReturns);

// Journal entry reflects only THIS payment's amount.
$val->sales_order_paid_amount = (float)($data["installment_payment_new_amount"] ?? 0);
checkCreateSalesJornal($val);
createActivityLog($valActivity, $data);
returnSuccess($val, "Account Receivable", $query);
