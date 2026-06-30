# Data Engineering / Migration / Analytics Engineering Resources

Curated, high-trust sources. These are the ones already vetted across the study docs; knowledge
in lessons should be drawn from here, not from parametric guesses.

## Knowledge

### Spine / architecture (the whole stack)
- [Book: _Fundamentals of Data Engineering_ — Reis & Housley (O'Reilly)]
  The data-engineering lifecycle (5 stages) + undercurrents — i.e. the Spine. **Use for:**
  the cross-cutting scaffold, architecture-survey framing. Primary source for Lesson 0001.
- [Book: _Designing Data-Intensive Applications_ — Kleppmann, Ch. 1–6, 9]
  **Use for:** consistency, partitioning, replication, CAP/PACELC trade-offs you'll be pressed on.

### Modeling (Transform)
- [Kimball Group — Dimensional Modeling Techniques (free index)](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/)
  **Use for:** declare-the-grain, star schema, SCD types — the vocabulary interviewers use.
- [Book: _The Data Warehouse Toolkit_ — Kimball & Ross, Ch. 1–3]
  **Use for:** the one modeling book if you read one.

### Analytics engineering (dbt)
- [dbt Labs — dbt Fundamentals course (free)](https://learn.getdbt.com/) — run locally vs DuckDB.
- [dbt Labs — "How we structure our dbt projects"](https://docs.getdbt.com/best-practices/how-we-structure/1-guide-overview)
  **Use for:** the staging→intermediate→marts answer interviewers expect.
- [dbt docs — Incremental models, Snapshots, Materializations](https://docs.getdbt.com/docs/build/incremental-models)
  **Use for:** the most-tested advanced mechanics (SCD2, incremental strategies).

### Migration & reconciliation (the differentiator)
- [Datafold — data diffing & validating migrations](https://www.datafold.com/blog)
  **Use for:** the clearest practitioner reconciliation strategy (count → checksum → row-diff).
- [Martin Fowler — StranglerFigApplication & ParallelChange](https://martinfowler.com/bliki/StranglerFigApplication.html)
  **Use for:** migration-safety patterns, reframed for data.
- [Debezium docs — CDC overview](https://debezium.io/documentation/reference/stable/index.html)
  **Use for:** log-based CDC vocabulary without running it.

### Quality & observability
- [Monte Carlo — "5 Pillars of Data Observability"](https://www.montecarlodata.com/blog-data-observability/)
  **Use for:** the pillars framing, from the team that coined it.
- [Great Expectations docs](https://docs.greatexpectations.io/) — **Use for:** the suite/checkpoint object model.
- [Chad Sanderson — Data Contracts essays](https://dataproducts.substack.com/)
  **Use for:** producer-side enforcement / the failed-build contract idea.

### Cloud / platform (BigQuery module)
- [Google Cloud — "BigQuery explained" blog series](https://cloud.google.com/blog/products/data-analytics/new-blog-series-bigquery-explained-overview)
  **Use for:** storage/slots, partitioning & clustering, bytes-scanned cost thinking.

### Orchestration
- [Dagster docs — Software-Defined Assets + dagster-dbt](https://docs.dagster.io/) — asset-centric hands-on.
- [Astronomer / Airflow — Core Concepts](https://www.astronomer.io/docs/learn/) — incumbent task-centric vocabulary.

## Wisdom (Communities)
- [r/dataengineering](https://reddit.com/r/dataengineering) — high-signal; **use for:** design critique, tool trade-offs, interview reality-checks.
- [dbt Community Slack](https://www.getdbt.com/community/join-the-community) — **use for:** modeling/dbt questions from practitioners.
- [Locally Optimistic (Slack/blog)](https://locallyoptimistic.com/) — analytics-leadership community; **use for:** consulting-delivery and stakeholder questions.

> Not yet confirmed whether the learner wants to actively join any community — propose, don't assume.

## Gaps
- No single vetted source yet for the **consulting-delivery / engagement** half (discovery,
  scoping, deliverables) beyond the in-house Concepts chapter. Find one when that becomes a focus.
