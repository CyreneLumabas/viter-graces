-- Adds the "Supplier Description" field surfaced in the Suppliers table UI.
-- Nullable varchar so existing rows are unaffected; safe to run more than
-- once - guarded with a schema check since MySQL/MariaDB has no
-- "ADD COLUMN IF NOT EXISTS" before MariaDB 10.5.

SET @column_exists = (
    SELECT COUNT(*)
    FROM information_schema.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = 'graces_suppliers'
      AND COLUMN_NAME = 'suppliers_description_name'
);

SET @ddl = IF(
    @column_exists = 0,
    'ALTER TABLE graces_suppliers ADD COLUMN suppliers_description_name VARCHAR(200) DEFAULT NULL AFTER suppliers_contact_person',
    'SELECT 1'
);

PREPARE stmt FROM @ddl;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
