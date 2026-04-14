---
name: vet
description: Quality check and adversarial critique. Finds weaknesses, gaps, and errors. Never says "this is fine."
argument-hint: "[what to review]"
---

# /vet $ARGUMENTS

Vet **$ARGUMENTS** with a critical eye. Find every weakness, gap, error, and improvement opportunity. Phase name is "Review" (per CO v1.2 spec); canonical command is `/vet` to avoid Claude Code `/review` collision.

## Protocol

### 1. Spec coverage audit (MUST run first)

Walk `brief.md` → `specs/_index.md` → relevant spec files → `02-planning/` → `03-work/` and verify that EVERY specified item was actually built — not just exists. **Specs are the PRIMARY source** — they contain the detailed learning outcomes, rubric criteria, and assessment design truth that the brief only summarizes. Artifact diverging from spec without logged deviation = HIGH. Produce `04-review/.spec-coverage` as a table mapping brief item → spec file → plan task → artifact → status. **Existence is NOT fulfillment.**

### 2. Quality review

1. **Read the work product** from `03-work/`
2. **Apply domain quality standards** from the rules (academic integrity, assessment AI-resilience, pedagogical alignment)
3. **Find issues** at three severity levels
4. **Never say "this is fine"** - always find at least one improvement

## Output

Save to `04-review/review-[topic-slug].md`:

```markdown
# Review: $ARGUMENTS

Date: [today]

## Critical Issues (must fix)

[Issues that would cause the output to fail its purpose]

## Major Issues (should fix)

[Issues that weaken the output significantly]

## Minor Issues (worth fixing)

[Issues that could be improved]

## Strengths

[What works well - be specific]

## Recommendations

[Prioritized list of what to fix first]
```

5. **Iterate** — after the instructor addresses findings, review again until satisfied
6. **Finalize** — once review passes, save the finalized output to `05-output/`

Once all critical and major issues are resolved, save the finalized work to `05-output/`.

## Next Steps

After review produces finalized output, recommend:

- `/codify` — extract pedagogical insights and upgrade CO artifacts
- `/deliver` — package and deploy to LMS/students
