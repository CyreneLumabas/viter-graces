# Graph Report - viter-graces  (2026-09-09)

## Corpus Check
- 513 files · ~449,814 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1681 nodes · 4956 edges · 292 communities (257 shown, 35 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 446 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5a67e547`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StoreContext.jsx
- isEmptyItem
- config.jsx
- MobileResponsiveList.jsx
- returnError
- core/functions.php
- SMTP
- PHPMailer
- ActivityLogDetailsModal.jsx
- logError
- checkQuery
- App.jsx
- sales-order/functions.php
- ReportSalesOrder
- checkExistence
- Products
- ProductOwner
- User
- Suppliers
- Customer
- Role
- Returns
- SuppliersProduct
- product-owner/functions.php
- SuppliersPurchaseOrder
- products/functions.php
- AccountReceivable
- StockMovement
- ActivityLog
- Overview
- StockOverview
- user/functions.php
- SuppliersPurchaseMovement
- activity-log/functions.php
- customer/functions.php
- developer/returns/functions.php
- Response
- AccountPayable
- account-receivable/functions.php
- role/functions.php
- CashSales
- Expenses
- FinanceReturns
- SalesJournal
- purchase-order-movement/functions.php
- Encryption
- account-payable/functions.php
- CLAUDE.md
- cypress.config.cjs
- accounts-payable-filters.cy.js
- expenses-filters.cy.js
- movement-history.cy.js
- expenses-report.cy.js
- sales-reports.cy.js
- Dotenv\Dotenv

## God Nodes (most connected - your core abstractions)
1. `logError()` - 280 edges
2. `checkQuery()` - 144 edges
3. `isEmptyItem()` - 122 edges
4. `PHPMailer` - 116 edges
5. `StoreContext` - 110 edges
6. `setError()` - 66 edges
7. `setMessage()` - 63 edges
8. `useQueryData()` - 61 edges
9. `queryData()` - 58 edges
10. `ProductOwnerId()` - 58 edges

## Surprising Connections (you probably didn't know these)
- `checkReadByLimit()` --calls--> `checkQuery()`  [INFERRED]
  rest/v1/controllers/developer/activity-log/functions.php → rest/v1/core/functions.php
- `checkCreateWalkInCustomer()` --calls--> `checkQuery()`  [INFERRED]
  rest/v1/controllers/developer/activity-log/functions.php → rest/v1/core/functions.php
- `checkCreateOtherSupplier()` --calls--> `checkQuery()`  [INFERRED]
  rest/v1/controllers/developer/activity-log/functions.php → rest/v1/core/functions.php
- `isUserAccountAssociated()` --calls--> `checkExistence()`  [INFERRED]
  rest/v1/controllers/developer/customer/functions.php → rest/v1/core/functions.php
- `checkReadAllOverdueBalance()` --calls--> `checkQuery()`  [INFERRED]
  rest/v1/controllers/developer/customer/functions.php → rest/v1/core/functions.php

## Import Cycles
- 4-file cycle: `src/layout/mobile-responsive/ActivityLogMobileResponsive.jsx -> src/pages/developer/reports/activity-log/ActivityLog.jsx -> src/layout/table/InfiniteTable.jsx -> src/layout/mobile-responsive/MobileResponsiveList.jsx -> src/layout/mobile-responsive/ActivityLogMobileResponsive.jsx`

## Communities (292 total, 35 thin omitted)

### Community 0 - "StoreContext.jsx"
Cohesion: 0.07
Nodes (86): AddButton(), DateFormat(), FinanceStats(), InputRadioButton(), InputPurchaseOrderSelectTagArray(), InputSelect(), InputSelectCustomerArray(), InputSelectTagArray() (+78 more)

### Community 1 - "isEmptyItem"
Cohesion: 0.09
Nodes (81): ExportCSVButton(), ModalButton(), InputCheckbox(), InputPhotoUpload(), DefaultInputSelectTagArray(), InputSalesOrderSelectTagArray(), InputSelectArray(), InputSelectArrayWithOptions() (+73 more)

### Community 2 - "config.jsx"
Cohesion: 0.06
Nodes (55): LogoFull(), LogoFullSm(), InputLogin(), LoadImages(), ButtonSpinner(), FetchingSpinner(), ScreenSpinner(), TableSpinner() (+47 more)

### Community 3 - "MobileResponsiveList.jsx"
Cohesion: 0.08
Nodes (46): ActionButton(), AmountsWithPesoSign(), AmountWithPesoSign(), Pills(), ActionButtonMobile(), ActionButtonSubTable(), variantsStatus(), ActivityLogMobileResponsive() (+38 more)

### Community 4 - "returnError"
Cohesion: 0.06
Nodes (46): Aws\Exception\AwsException, Aws\S3\S3Client, Google\Client, Google\Service\Drive, Database, checkDbConnection(), returnError(), checkDeleteGoogleDriveApiFiles() (+38 more)

### Community 5 - "core/functions.php"
Cohesion: 0.04
Nodes (41): Firebase\JWT\JWT, checkActive(), checkApprove(), checkDecline(), checkDelete(), checkFilterByStatus(), checkFilterByStatusAndSearch(), checkFilterDate() (+33 more)

### Community 6 - "SMTP"
Cohesion: 0.07
Nodes (8): Exception, SMTP, sendEmail(), getHtmlResetPassword(), getHtmlVerifyAccount(), getHtmlVerifyEmail(), sendEmail(), sendEmailVerify()

### Community 8 - "ActivityLogDetailsModal.jsx"
Cohesion: 0.10
Nodes (42): ActivityLogDetailsModal(), ArrayOfObjectsCards(), BOOLEAN_LIKE_VALUES, BooleanPill(), buildReturnSummary(), canonicalizeKey(), cleanEntries(), DetailValue() (+34 more)

### Community 10 - "checkQuery"
Cohesion: 0.09
Nodes (39): checkReadExpensesPerMonth(), checkReadExpensesPerWeek(), checkReadExpensesPerYear(), checkReadSalesPerMonth(), checkReadSalesPerWeek(), checkReadSalesPerYear(), checkReadAllAP(), checkReadAllAR() (+31 more)

### Community 11 - "App.jsx"
Cohesion: 0.09
Nodes (28): App(), CloseButton(), dashboardData, DashboardOverview(), salesData, GraphTooltip(), ExportModal(), PesoSign() (+20 more)

### Community 12 - "sales-order/functions.php"
Cohesion: 0.07
Nodes (35): applyCreditMemoForCollection(), applyCreditMemoToReturns(), checkCreateInstallment(), checkCreateMovementStock(), checkCreateSalesJornal(), checkCreateSalesJournalRemoved(), checkDeleteById(), checkDeleteInstallment() (+27 more)

### Community 14 - "checkExistence"
Cohesion: 0.06
Nodes (23): isUserAccountAssociated(), checkReadAllLowStock(), checkReadByUserIdLowStock(), checkReadCountLowStock(), isUserAccountAssociated(), isUserAccountAssociated(), checkAssociatedInPurchaseOrderById(), checkCreateProduct() (+15 more)

### Community 25 - "product-owner/functions.php"
Cohesion: 0.19
Nodes (12): checkReadByProductOwner(), checkReadByProductOwnerLimit(), checkReadByReceivedBy(), checkUpdateActivityLog(), checkUpdateProducts(), checkUpdatePurchaseOrder(), checkUpdateReturnProduct(), checkUpdateSalesOrder() (+4 more)

### Community 27 - "products/functions.php"
Cohesion: 0.17
Nodes (9): checkCreateMovementStock(), checkDeleteMovementStock(), checkReadAllActive(), checkReadAllActiveByName(), checkReadAllCategory(), checkReadAllThatHaveStock(), isAssociatedWithOtherModule(), isUserAccountAssociated() (+1 more)

### Community 34 - "user/functions.php"
Cohesion: 0.33
Nodes (7): checkAssociatedByActivityLog(), checkAssociatedByMenu(), checkAssociatedByProducts(), checkResetPasswordByEmail(), checkUpdateActivityLog(), checkUpdateProducts(), updateConnectedMenu()

### Community 36 - "activity-log/functions.php"
Cohesion: 0.29
Nodes (6): checkCreateOtherSupplier(), checkCreateWalkInCustomer(), checkReadByLimit(), createActivityLog(), createActivityLogWithPhp(), checkCreate()

### Community 37 - "customer/functions.php"
Cohesion: 0.25
Nodes (5): checkReadAllActive(), checkReadAllOpenBalance(), checkReadAllOverdueBalance(), checkReadWalkInCustomer(), isUserAccountAssociated()

### Community 39 - "developer/returns/functions.php"
Cohesion: 0.29
Nodes (4): checkCreateMovementStock(), checkReadAllActiveByName(), checkReadAllThatHaveStock(), isUserAccountAssociated()

### Community 42 - "account-receivable/functions.php"
Cohesion: 0.40
Nodes (4): checkCreateSalesJornal(), checkReadAllSales(), checkReadLastSalesJournal(), checkUpdateSales()

### Community 43 - "role/functions.php"
Cohesion: 0.50
Nodes (3): checkUpdateUserAccountRole(), isUserAccountAssociated(), updateConnectedMenu()

## Knowledge Gaps
- **23 isolated node(s):** `{ defineConfig }`, `salesData`, `dashboardData`, `profitLossData`, `urlPath` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **35 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `logError()` connect `logError` to `returnError`, `core/functions.php`, `ReportSalesOrder`, `Products`, `ProductOwner`, `User`, `Suppliers`, `Customer`, `Role`, `Returns`, `SuppliersProduct`, `SuppliersPurchaseOrder`, `AccountReceivable`, `StockMovement`, `ActivityLog`, `Overview`, `StockOverview`, `SuppliersPurchaseMovement`, `AccountPayable`, `CashSales`, `Expenses`, `FinanceReturns`, `SalesJournal`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Why does `checkQuery()` connect `checkQuery` to `user/functions.php`, `activity-log/functions.php`, `customer/functions.php`, `core/functions.php`, `developer/returns/functions.php`, `account-receivable/functions.php`, `role/functions.php`, `sales-order/functions.php`, `checkExistence`, `purchase-order-movement/functions.php`, `account-payable/functions.php`, `product-owner/functions.php`, `products/functions.php`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Why does `returnError()` connect `returnError` to `SuppliersPurchaseMovement`, `core/functions.php`, `logError`, `checkExistence`, `AccountReceivable`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Are the 279 inferred relationships involving `logError()` (e.g. with `.create()` and `.delete()`) actually correct?**
  _`logError()` has 279 INFERRED edges - model-reasoned connections that need verification._
- **Are the 115 inferred relationships involving `checkQuery()` (e.g. with `checkCreateOtherSupplier()` and `checkCreateWalkInCustomer()`) actually correct?**
  _`checkQuery()` has 115 INFERRED edges - model-reasoned connections that need verification._
- **What connects `{ defineConfig }`, `salesData`, `dashboardData` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `StoreContext.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07301935012778386 - nodes in this community are weakly interconnected._