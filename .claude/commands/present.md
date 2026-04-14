---
name: present
description: Create structured presentations with speaker notes and data visualization.
argument-hint: "[presentation topic]"
---

# /present $ARGUMENTS

Create a presentation from research or draft content.

## Workspace Resolution

1. If `$ARGUMENTS` specifies a project, use `workspaces/$ARGUMENTS/`
2. Otherwise, use most recently modified under `workspaces/` (excluding `_template/`)

## Protocol

1. **Determine scope** — what's the audience, time limit, key message?
2. **Create slide outline** — title, key points per slide, visual suggestions
3. **Write speaker notes** — what to say for each slide (not just what's on the slide)
4. **Suggest data visualizations** — charts, diagrams, or images that support the argument
5. **Add delivery tips** — pacing, emphasis points, audience engagement
6. **Save to `03-drafts/`**

## Output

Presentation outline with speaker notes saved to `03-drafts/presentation-[topic-slug].md`.
