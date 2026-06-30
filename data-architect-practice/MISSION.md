# Mission: Data Engineering / Migration / Analytics Engineering & Platform Modernization

## Why
Become genuinely interview-ready for data engineer / analytics engineer / data architect
roles — able to walk any "design X" prompt with defensible trade-offs — while building real,
deeply-understood delivery capability for Eigenbasis Lab consulting engagements (migration,
modernization, governance). Reusable assets (e.g. the reconciliation harness) must be earned
by building them the hard way first, then understanding *why* the clean version works — never
accepted as black boxes.

## Success looks like
- Draw the reference modern-data-stack diagram from memory and place any topic on it.
- Whiteboard the migration lifecycle + reconciliation ladder, and explain how each check
  catches a specific failure class (truncation, timezone, collation, rounding).
- Stand up and explain the Olist migration lab end-to-end: Postgres → warehouse → dbt
  (staging→marts, SCD2, incremental) → quality tests → reconciliation → orchestration → BI.
- Answer the high-frequency design prompts using the answer-shape loop
  (requirements → assumptions → grain → design → trade-offs → failure → cost).
- Explain every reusable asset's internals — having first built a rough version by hand.

## Constraints
- Primary outcome: interview-readiness; conceptual depth underneath it; consulting delivery
  weighted but secondary.
- Learning style: build it ugly (rough Python scripts) FIRST, then meet the reusable asset
  and understand its design.
- Readings reviewed *alongside* practice, not before it.
- macOS, local-first: uv, DuckDB, dbt-duckdb, Dagster; GCP/BigQuery only where cloud is the point.
- Verify every SQL example in DuckDB against `shop_seed.sql` before teaching it.

## Out of scope (for now)
- SQL syntax help and Python language help — already solid, do NOT re-teach.
- Deep cloud-vendor certification material beyond the one BigQuery modernization module.
- Streaming as a production specialty (vocabulary-level only).
