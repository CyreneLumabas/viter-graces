<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/products/Products.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new Products($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    $val->filters = [];
    
    // Get the requested type
    $type = isset($_GET['type']) ? $_GET['type'] : '';

    switch ($type) {

        case 'sku':
            $query = checkReadAllSku($val);
            break;

        case 'category':
            $query = checkReadAllCategory($val);
            break;

        case 'unit':
            $query = checkReadAllUnit($val);
            break;

        default:
            http_response_code(400);

            echo json_encode([
                'status' => 400,
                'message' => 'Invalid type. Use sku, category, or unit.'
            ]);

            exit;
    }

    http_response_code(200);

    getQueriedData($query);

    exit;
}

checkAccess();
