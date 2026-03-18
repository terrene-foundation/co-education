---
name: design-assessment
description: Design an assessment task aligned to specific learning outcomes that tests genuine understanding.
argument-hint: "[learning outcome or assessment context]"
---

# /design-assessment $ARGUMENTS

Design an assessment task for **$ARGUMENTS**.

## Protocol

1. **Identify the learning outcomes** this assessment must test
2. **Determine the assessment type** (exam, essay, project, portfolio, presentation, practical)
3. **Design the task** with clear instructions, conditions, and AI use policy
4. **Analyze AI-resilience**: can a language model produce a passing answer without the underlying knowledge?
5. **Draft the companion rubric** (defer to rubric-builder for complex rubrics)
6. **Save the assessment** to `03-work/`

## Next Step

After designing the assessment, recommend `/build-rubric` to create the detailed rubric, or `/audit-ai-resilience` to stress-test the design.
