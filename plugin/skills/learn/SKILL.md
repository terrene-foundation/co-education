---
name: learn
description: Extract pedagogical insights from the completed project into .claude/ artifacts. Requires instructor approval.
---

# /co-education:learn

Extract reusable pedagogical knowledge from this project into CO artifacts (.claude/ directory).

## Workspace Resolution

1. If `$ARGUMENTS` specifies a project name, use `workspaces/$ARGUMENTS/`
2. Otherwise, use the most recently modified directory under `workspaces/` (excluding `_template/`)
3. If no workspace exists, ask the user to create one first

## Protocol

1. **Review the completed work** in `05-output/` and `journal/`
2. **Identify reusable patterns** -- assessment designs that worked, rubric structures that proved effective, AI-resilience strategies that held up
3. **Propose artifact updates** -- suggest specific changes to rules, agents, or skills in `.claude/`
4. **Get instructor approval** for each proposed artifact change before making it
5. **Apply approved changes** to `.claude/` files

## What to look for

- Assessment patterns that proved AI-resilient
- Rubric structures that produced consistent grading
- Alignment patterns between outcomes, activities, and assessments
- Common student misconceptions that should inform future assessment design
- Institutional constraints that recur across projects

## Instructor Approval Required

Every artifact change must be explicitly approved by the instructor before applying. Present each proposed change with:

- What will change
- Why (what teaching experience motivated it)
- The specific edit

## Journal Entry

Record what knowledge was extracted and what artifacts were updated in `journal/`.
