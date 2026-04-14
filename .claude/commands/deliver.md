---
name: deliver
description: Package and deploy finalized assessments and materials to LMS or students.
argument-hint: "[project name]"
---

# /deliver

Package the finalized output and deploy to the learning management system or students.

## Workspace Resolution

1. If `$ARGUMENTS` specifies a project name, use `workspaces/$ARGUMENTS/`
2. Otherwise, use the most recently modified directory under `workspaces/` (excluding `_template/`)
3. If no workspace exists, ask the user to create one first

## Protocol

1. **Confirm review is complete** — check that 04-review/ has review findings and critical issues are resolved
2. **Package the output** — ensure 05-output/ contains finalized assessments, rubrics, and course materials
3. **Run final validation** against assessment integrity rules
4. **Pre-delivery checklist**:
   - [ ] All critical review issues resolved
   - [ ] All assessments have transparent rubrics
   - [ ] Learning outcomes are constructively aligned
   - [ ] AI-resilience has been audited
   - [ ] Instructor has approved the final versions
5. **Deliver** — format for the target platform (LMS upload, student handout, etc.)

## Approval Gate

**HARD GATE**: Instructor approves before materials go to students. Ask:

- Does this cover everything you planned for this course/module?
- Is anything here that doesn't belong?
- Is anything missing that students need?
- Are the rubrics clear enough for students to understand expectations?

## Journal Entry

Record what was delivered and to which course/cohort in `journal/`. Type: DECISION.
