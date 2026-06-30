# Teaching Notes — preferences & working memory

## How this learner wants to be taught
- **Definitions + code over analogies.** Lead with the precise definition and a runnable
  snippet, not an everyday metaphor. (Confirmed style from prior docs.)
- **No SQL or Python refreshers.** They are solid on both. Never spend lesson budget teaching
  language mechanics — spend it on the data-engineering idea.
- **Build the hard way first.** For any reusable asset (reconciliation harness, macros,
  contracts), have them write a rough by-hand version first, then reveal the clean asset and
  explain *why* its design exists. They explicitly reject black-box acceptance.
- **Readings ride alongside practice**, not as a prerequisite gate.
- **Interview-shaped.** Tie lessons to the design prompts and the answer-shape loop; surface
  the "what an interviewer is really testing" angle.

## Verification discipline
- Canonical dataset: `shop_seed.sql` (tiny "shop": customers/products/orders). Verify every
  SQL example in DuckDB against it before putting it in a lesson.
- Drills live in their own file (existing `Data_Consulting_Drills.html`); keep self-checks in
  lessons light and tie heavier drilling back to that doc.

## Workspace conventions
- Shared look comes from `assets/lesson.css` (palette lifted from the existing study HTML so
  lessons read as one course). Reuse it; don't restyle per lesson.
- Self-check widgets: `assets/quiz.js` (`.recall` cards + `.mcq` multiple-choice). MCQ options
  should be equal length so formatting leaks no answer.
- Lessons → `lessons/NNNN-slug.html`; compressed references → `reference/`.

## Structural decision — vocabulary (learner-requested 2026-06-23)
The learner doesn't know most of the curriculum jargon and wants term coverage broader than any
single lesson. Structure:
- **`reference/01-glossary.html` = breadth.** The canonical master glossary, every term, grouped by
  spine area, one-line def + "what breaks." Skim-anytime safety net. Lessons ADHERE to its wording.
- **Interactive "vocab lessons" = depth, one area at a time.** Same card format as 0002 (def + tiny
  shop-data example + what breaks + retrieval MCQs). Keep each batch small (working memory).
- Pattern: when entering a spine stage, open with its vocab lesson, then go deep on the hard ideas.

## Vocab-lesson series — area coverage status
- [x] 0002 — Ingest + cross-cutting starter (CDC, reconciliation, SCD2, idempotency, masking)
- [x] 0003 — Bedrock (OLTP↔OLAP, row↔columnar, normalization, ACID, grain, surrogate key). CAP/PACELC/consistency deferred to an Architecture vocab lesson.
- [x] 0004 — Store/Platform (storage÷compute, MPP, lake/warehouse/lakehouse, table formats, partitioning, clustering, bytes scanned)
- Learner endorsed walking the vocab series in **pipeline order**. Next: Transform vocab.
- [x] 0005 — The grain, deep-dive (healthcare claims: header/line/member-month hierarchy, double-count fan-out, grain=PK, atomic grain, → fact tables: additive/semi/non-additive, transaction/periodic/accumulating, star schema). Verified in DuckDB on inline claims fixture.
- Spine recall demonstrated from memory (see LR 0003) — 0001 is learned, not just covered.
- [ ] Store/Platform (storage÷compute, MPP, warehouse/lake/lakehouse, table formats, partitioning, clustering, bytes scanned) — learner named partitioning/clustering
- [x] 0006 — Transform vocab (materializations view/table/incremental/ephemeral, star vs snowflake, conformed/role-playing/degenerate dims, SCD 1/2/3). Claims-star fixture verified in DuckDB. Fact types live in 0005 §06.
- [x] 0007 — Transform deep: dbt project structure (ELT, staging→int→marts, ref/source/DAG, claims-star assembly) + the surrogate-key/SCD2 fact-wiring trap (store member_key resolved at event time). Verified in DuckDB.
- **Learner wants Transform covered THOROUGHLY before moving to Quality.** Remaining Transform deep-dives offered (their pick next): (1) incremental strategies deep — append/merge/insert_overwrite, unique_key, late-arriving, full-refresh; (2) hard modeling shapes — bridge/many-to-many, factless facts; (3) modeling styles — Kimball vs Data Vault vs One Big Table.
- [ ] Quality (7 dimensions, 5 pillars, contracts, generic vs singular tests)
- [ ] Governance (RBAC, ABAC, RLS, masking, tokenization, lineage, MDM) — learner named RBAC/ABAC
- [ ] Orchestration (DAG, task vs asset-centric, sensors/schedules, backfill)
- [ ] Serve/BI + Architecture (semantic layer, live vs extract; answer-shape, CAP applied)

## Open threads / candidate deep lessons
- Migration ladder built rough-Python-first (the differentiator) — high priority per mission.

## Reusable real-world example bank
- **Healthcare claims** is the learner's chosen worked domain for grain (Lesson 0005) and a strong vein for Transform: member/eligibility (dim), claim header, claim line (atomic), member-month (PMPM snapshot). Reuse it across Transform lessons for continuity.
