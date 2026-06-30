-- ============================================================================
-- Eigenbasis Lab · the "shop" dataset
-- The single canonical dataset used by every worked example in
-- Data_Consulting_Concepts_and_Readings.html.
--
-- Load it once, then run any example in the book against it:
--     duckdb shop.db < shop_seed.sql        # creates a persistent shop.db
--   or, inside a DuckDB session:
--     .read shop_seed.sql
--
-- A tiny online store: who bought what, when. Three tables, a handful of rows —
-- small on purpose so you can verify every query by eye.
-- ============================================================================

DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
  customer_id INTEGER,      -- natural (business) key
  name        VARCHAR,
  email       VARCHAR,      -- PII, used in the governance examples
  state       VARCHAR
);
INSERT INTO customers VALUES
  (1, 'Amy',  'amy@x.com',  'TX'),
  (2, 'Ben',  'ben@x.com',  'NY'),
  (3, 'Cara', 'cara@x.com', 'TX');

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  product_id INTEGER,       -- natural key
  name       VARCHAR,
  category   VARCHAR,
  unit_price DECIMAL(10,2)
);
INSERT INTO products VALUES
  (10, 'Mug',      'Kitchen', 12.00),
  (11, 'Notebook', 'Office',   6.50),
  (12, 'Lamp',     'Home',    28.00);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  order_id    INTEGER,      -- grain: one row per order line
  customer_id INTEGER,      -- FK -> customers.customer_id
  product_id  INTEGER,      -- FK -> products.product_id
  qty         INTEGER,
  order_date  DATE,
  status      VARCHAR       -- 'paid' | 'refunded' | 'pending'
);
INSERT INTO orders VALUES
  (1000, 1, 10, 2, DATE '2026-06-01', 'paid'),
  (1001, 1, 11, 1, DATE '2026-06-01', 'paid'),
  (1002, 2, 12, 1, DATE '2026-06-02', 'refunded'),
  (1003, 3, 10, 4, DATE '2026-06-02', 'paid');

-- Sanity check (expected: 3 customers, 3 products, 4 orders; paid revenue = 78.50)
--   SELECT (SELECT count(*) FROM customers) AS customers,
--          (SELECT count(*) FROM products)  AS products,
--          (SELECT count(*) FROM orders)    AS orders;
