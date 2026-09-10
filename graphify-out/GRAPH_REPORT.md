# Graph Report - viter-graces  (2026-09-10)

## Corpus Check
- 522 files · ~462,979 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1736 nodes · 5166 edges · 302 communities (268 shown, 34 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 454 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8c7d11a8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StoreContext.jsx
- isEmptyItem
- CreatePassword.jsx
- MobileResponsiveList.jsx
- returnError
- core/functions.php
- SMTP
- PHPMailer
- ActivityLogDetailsModal.jsx
- logError
- checkQuery
- useDarkMode
- sales-order/functions.php
- ReportSalesOrder
- checkExistence
- Products
- ProductOwner
- User
- Suppliers
- Customer
- Role
- useQueryData
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
- getResultData
- config.jsx
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
- InfiniteSubTable.jsx
- apiVersion
- suppliers/functions.php
- purchase-order/functions.php
- .setOAuth

## God Nodes (most connected - your core abstractions)
1. `logError()` - 284 edges
2. `checkQuery()` - 147 edges
3. `isEmptyItem()` - 124 edges
4. `PHPMailer` - 116 edges
5. `StoreContext` - 110 edges
6. `setError()` - 66 edges
7. `setMessage()` - 63 edges
8. `useQueryData()` - 62 edges
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

## Communities (302 total, 34 thin omitted)

### Community 0 - "StoreContext.jsx"
Cohesion: 0.09
Nodes (72): App(), InputPhotoUpload(), AmountRangeFilter(), DateRangeFilter(), dateRangeLabel(), MultiRangeAmountFilter(), MultiRangeDateFilter(), nextRangeId() (+64 more)

### Community 1 - "isEmptyItem"
Cohesion: 0.09
Nodes (76): ExportCSVButton(), ModalButton(), InputCheckbox(), InputRadioButton(), DefaultInputSelectTagArray(), InputSalesOrderSelectTagArray(), InputSelectArray(), InputSelectArrayWithOptions() (+68 more)

### Community 2 - "CreatePassword.jsx"
Cohesion: 0.09
Nodes (38): LogoFull(), LogoFullSm(), InputLogin(), ButtonSpinner(), FetchingSpinner(), ScreenSpinner(), devNavUrl, isDemoMode (+30 more)

### Community 3 - "MobileResponsiveList.jsx"
Cohesion: 0.07
Nodes (51): ActionButton(), CloseButton(), ExportModal(), AmountsWithPesoSign(), AmountWithPesoSign(), Pills(), ExportProgressWidget(), ActionButtonMobile() (+43 more)

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

### Community 9 - "logError"
Cohesion: 0.06
Nodes (3): logError(), Returns, SalesOrder

### Community 10 - "checkQuery"
Cohesion: 0.09
Nodes (39): checkReadExpensesPerMonth(), checkReadExpensesPerWeek(), checkReadExpensesPerYear(), checkReadSalesPerMonth(), checkReadSalesPerWeek(), checkReadSalesPerYear(), checkReadAllAP(), checkReadAllAR() (+31 more)

### Community 11 - "useDarkMode"
Cohesion: 0.17
Nodes (15): dashboardData, DashboardOverview(), salesData, GraphTooltip(), PesoSign(), ProfitLossChart(), profitLossData, SalesVsExpensesVsProfit() (+7 more)

### Community 12 - "sales-order/functions.php"
Cohesion: 0.08
Nodes (29): checkCreateInstallment(), checkCreateMovementStock(), checkCreateSalesJornal(), checkCreateSalesJournalRemoved(), checkDeleteById(), checkDeleteInstallment(), checkDeleteinstallmentById(), checkDeleteSalesJournal() (+21 more)

### Community 14 - "checkExistence"
Cohesion: 0.08
Nodes (18): checkReadAllLocation(), isUserAccountAssociated(), checkReadAllLowStock(), checkReadByUserIdLowStock(), checkReadCountLowStock(), isUserAccountAssociated(), isAssociatedWithOtherModule(), isUserAccountAssociated() (+10 more)

### Community 23 - "useQueryData"
Cohesion: 0.15
Nodes (20): InputPurchaseOrderSelectTagArray(), InputSelectCustomerArray(), InputSelectTagArray(), SearchableSelectFilter(), SearchableSelectModalFilter(), StatCard(), OverviewSalesCustomer(), DashboardExpensesToday() (+12 more)

### Community 25 - "product-owner/functions.php"
Cohesion: 0.19
Nodes (12): checkReadByProductOwner(), checkReadByProductOwnerLimit(), checkReadByReceivedBy(), checkUpdateActivityLog(), checkUpdateProducts(), checkUpdatePurchaseOrder(), checkUpdateReturnProduct(), checkUpdateSalesOrder() (+4 more)

### Community 27 - "products/functions.php"
Cohesion: 0.17
Nodes (9): checkCreateMovementStock(), checkDeleteMovementStock(), checkReadAllActive(), checkReadAllActiveByName(), checkReadAllCategory(), checkReadAllSku(), checkReadAllThatHaveStock(), checkReadAllUnit() (+1 more)

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

### Community 42 - "getResultData"
Cohesion: 0.23
Nodes (11): applyCreditMemoForCollection(), applyOrderPaymentEffects(), checkCreateSalesJornal(), checkReadAllSales(), checkReadLastSalesJournal(), checkUpdateSales(), applyCreditMemoToReturns(), checkReadQuery() (+3 more)

### Community 43 - "config.jsx"
Cohesion: 0.11
Nodes (20): LoadImages(), TableSpinner(), devBaseImgUrl, devBaseUrl, devKey, devWebUrl, googleHDViewLink, googleThumbnailLink (+12 more)

### Community 292 - "InfiniteSubTable.jsx"
Cohesion: 0.16
Nodes (15): AddButton(), DateFormat(), SearchBar(), ActiveFilterTagBar(), chipKey(), chipLabel(), wordDate(), InfinitePerTabs() (+7 more)

### Community 293 - "apiVersion"
Cohesion: 0.30
Nodes (6): FinanceStats(), SearchableSelectFilterProductOwner(), NoData(), ServerError(), TableLoading(), apiVersion

### Community 294 - "suppliers/functions.php"
Cohesion: 0.25
Nodes (7): checkAssociatedInPurchaseOrderById(), checkCreateProduct(), checkDeleteSupplierProduct(), checkReadSupplierInModal(), checkUpdateProductSupplier(), isUserAccountAssociated(), updateConnectedMenu()

### Community 295 - "purchase-order/functions.php"
Cohesion: 0.29
Nodes (4): checkDeleteById(), checkItemsBelongToSupplier(), checkReadExpensesToday(), isUserAccountAssociated()

## Knowledge Gaps
- **25 isolated node(s):** `{ defineConfig }`, `salesData`, `dashboardData`, `profitLossData`, `urlPath` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **34 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `logError()` connect `logError` to `returnError`, `core/functions.php`, `ReportSalesOrder`, `Products`, `ProductOwner`, `User`, `Suppliers`, `Customer`, `Role`, `SuppliersProduct`, `SuppliersPurchaseOrder`, `AccountReceivable`, `StockMovement`, `ActivityLog`, `Overview`, `StockOverview`, `SuppliersPurchaseMovement`, `AccountPayable`, `CashSales`, `Expenses`, `FinanceReturns`, `SalesJournal`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Why does `checkQuery()` connect `checkQuery` to `user/functions.php`, `activity-log/functions.php`, `customer/functions.php`, `suppliers/functions.php`, `developer/returns/functions.php`, `purchase-order/functions.php`, `core/functions.php`, `getResultData`, `sales-order/functions.php`, `checkExistence`, `purchase-order-movement/functions.php`, `account-payable/functions.php`, `product-owner/functions.php`, `products/functions.php`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Why does `returnError()` connect `returnError` to `SuppliersPurchaseMovement`, `core/functions.php`, `purchase-order/functions.php`, `logError`, `AccountReceivable`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Are the 283 inferred relationships involving `logError()` (e.g. with `.create()` and `.delete()`) actually correct?**
  _`logError()` has 283 INFERRED edges - model-reasoned connections that need verification._
- **Are the 118 inferred relationships involving `checkQuery()` (e.g. with `checkCreateOtherSupplier()` and `checkCreateWalkInCustomer()`) actually correct?**
  _`checkQuery()` has 118 INFERRED edges - model-reasoned connections that need verification._
- **What connects `{ defineConfig }`, `salesData`, `dashboardData` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `StoreContext.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09471899224806202 - nodes in this community are weakly interconnected._