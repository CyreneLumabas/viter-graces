-- Renames the "Customize" installment plan to "Flexible" everywhere it's
-- stored as data. sales_order_installment_type is a plain varchar(50) (no
-- ENUM constraint in the schema), so this is a data-only migration - no
-- column type change is required.
--
-- Safe to run more than once (WHERE clause only ever matches the old value).
-- The backend also still accepts "customize" as an alias for "flexible" in
-- rest/v1/controllers/developer/sales-order/functions.php, so any row not
-- yet migrated keeps working correctly in the meantime.

UPDATE graces_sales_order
SET sales_order_installment_type = 'flexible'
WHERE LOWER(sales_order_installment_type) = 'customize';
