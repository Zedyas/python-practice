# Level signal: data-path map is solid, mechanism-words are still black boxes

The learner reports the high-level **data path is understood**, but the load-bearing *mechanism*
terms are still fuzzy: **CDC, reconciliation, SCD2, idempotency, masking**. Self-described level
on these: "still a bit basic." They also asked whether they should be reading the source docs on
each term.

**Implication for teaching:** calibrate term lessons to genuine-beginner — lead with a one-sentence
definition + one tiny worked example on `shop_seed.sql` + "what breaks without it" + an interview
one-liner. Do NOT send them to read whole doc chapters cold; the rule (now stated in Lesson 0002 §00)
is *learn it here first, read the linked doc section second, alongside.* This addresses the
"basic-but-fuzzy" state directly — fuzziness came from facing reference depth without a hook.

Addressed by [[0002-five-words]]. Floor unchanged on SQL/Python (still solid — see [[0001-starting-point]]).
