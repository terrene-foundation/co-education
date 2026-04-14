---
name: deliver
description: Package and deploy assessments, rubrics, and course materials to LMS or students.
---

# /co-education:deliver

Package the finalized educational materials from `05-output/` and prepare them for deployment to the LMS or distribution to students.

## Workspace Resolution

1. If `$ARGUMENTS` specifies a project name, use `workspaces/$ARGUMENTS/`
2. Otherwise, use the most recently modified directory under `workspaces/` (excluding `_template/`)
3. If no workspace exists, ask the user to create one first

## Protocol

1. **Verify finalized output exists** in `05-output/`
2. **Confirm the deployment target** -- which LMS, which course section, which student cohort?
3. **Package the deliverables** -- format conversion for LMS upload, student-facing instructions, marking guides for tutors
4. **Pre-deployment checklist**:
   - [ ] All assessments reviewed and approved (Phase 04)
   - [ ] Rubrics are student-facing ready (clear language, no internal notes)
   - [ ] Learning outcomes are visible to students
   - [ ] Submission requirements are explicit
   - [ ] Due dates and weightings confirmed by instructor
   - [ ] Accessibility requirements met
5. **Prepare deployment package** as appropriate for the target platform

## Output

The deployment-ready package plus a summary of what was deployed and any instructor follow-up actions.

## Journal Entry

Record the deployment in `journal/` -- what was deployed, where, and any outstanding follow-up.
