# Lake / lakehouse / warehouse — distinction worked out and corrected

The learner pushed through this three-way distinction over several rounds and arrived at the correct
mental model. Two misconceptions surfaced and were corrected, both worth remembering as predictors
of related stumbles:

1. **"Lakehouse has a schema, but loosely."** Corrected: a table-format table has a *strict, enforced*
   schema (as strict as a warehouse). What's flexible is the *system* can hold both strict tables and
   loose files — not that schemas are fuzzy.
2. **"The lake part = bronze; add formatting, then transform."** Corrected: table format (lake vs
   lakehouse, a storage-tech axis) is *orthogonal* to bronze→silver→gold (medallion refinement, a
   transformation axis). "Bronze" is not "the lake part"; the cheap-files substrate underlies all layers.

**The landed distinction:** lake→lakehouse jump = add the metadata/table layer over files; lakehouse→
warehouse jump = *open files you own (any engine reads)* vs *proprietary vendor-managed storage (only
its engine reads)*. Both lakehouse and warehouse have strict tables — "strict tables" is NOT the
differentiator.

**Implication:** the learner reasons well when given precise definitions and pushes until the model is
clean — keep correcting imprecise framings explicitly rather than letting "close enough" stand. Captured
into [[0004-store-vocab]] §03 and the glossary (canonical wording). Storage concepts on the spine's Store
stage are now solid.
