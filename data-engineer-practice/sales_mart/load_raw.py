import duckdb

con = duckdb.connect("warehouse.duckdb")
con.execute("INSTALL tpch; LOAD tpch;")
con.execute("CALL dbgen(sf=0.1);")       # generates orders, customer, etc.
con.execute("CREATE SCHEMA IF NOT EXISTS raw;")

# copy the two tables we'll model into our raw schema
con.execute("CREATE OR REPLACE TABLE raw.orders    AS SELECT * FROM orders;")
con.execute("CREATE OR REPLACE TABLE raw.customer  AS SELECT * FROM customer;")

print("orders:", con.execute("SELECT COUNT(*) FROM raw.orders").fetchone()[0])
print("customers:", con.execute("SELECT COUNT(*) FROM raw.customer").fetchone()[0])
con.close()
