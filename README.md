# CO for Education (COE)

Structured human-AI collaboration for university teaching. Design courses, assessments, and rubrics that account for GenAI. This is the instructor side: designing pedagogy that tests genuine understanding, not AI-reproducible answers.

**CO Specification**: v1.1 (CC BY 4.0, [Terrene Foundation](https://terrene.foundation))

## What This Is

A CO domain application for instructors designing courses and assessments in the GenAI era. COE helps you:

- Design assessments that test genuine understanding, not recall
- Build transparent, criterion-referenced rubrics
- Map learning outcomes across courses and programs
- Audit assessments for AI-reproducibility vulnerabilities
- Structure course assessment portfolios for alignment and progression

COE is the instructor-side tool. It does not help students use AI (that is [COL-F](https://github.com/terrene-foundation/co-finance)). It helps instructors design teaching that remains valid when students have access to AI.

**Other CO applications:**

| Application | Domain                | Repository                                                                           |
| ----------- | --------------------- | ------------------------------------------------------------------------------------ |
| COC         | Software development  | [kailash-coc-claude-py](https://github.com/terrene-foundation/kailash-coc-claude-py) |
| COR         | Academic research     | [co-research](https://github.com/terrene-foundation/co-research)                     |
| COL-F       | Finance education    | [co-finance](https://github.com/terrene-foundation/co-finance)   |
| COG         | Foundation governance | [co-governance](https://github.com/terrene-foundation/co-governance)                 |
| COComp      | Regulatory compliance | [co-compliance](https://github.com/terrene-foundation/co-compliance)                 |

## Quick Start

### Option A: Claude Code (CLI)

```bash
git clone https://github.com/terrene-foundation/co-education.git
cd co-education
claude
```

Then type `/start`.

### Option B: Claude Desktop Cowork (Plugin)

**What you need:**

- Claude Desktop with Cowork support
- A Claude Pro, Max, or Team subscription

**Step 1: Download COE**

Go to [github.com/terrene-foundation/co-education](https://github.com/terrene-foundation/co-education). Click the green **"Code"** button, then click **"Download ZIP"**. Unzip it and move the folder to your Documents.

**Step 2: Install the plugin**

1. Open Claude Desktop
2. Switch to the **"Cowork"** tab
3. Click **"Customize"** in the left sidebar
4. Click **"Browse plugins"**
5. Click **"Load from folder"** and navigate to the `plugin` folder inside your downloaded COE folder

**Step 3: Open and start**

1. In Cowork, click **"Open folder"** and select the COE folder
2. Type `/co-education:start` in the chat

### What happens after `/start`

The AI will introduce itself, explain the six-phase workflow (Analyze, Plan, Execute, Review, Learn, Deliver), and ask about your course or assessment project. Answer in plain language. Describe what you are teaching, what you want to assess, and what concerns you have about AI use.

## Skills

### Workflow Phases

| Skill                      | Phase | Purpose                                                                         |
| -------------------------- | ----- | ------------------------------------------------------------------------------- |
| `/co-education:start`      | --    | Orientation; explains workflow and asks about the course                        |
| `/co-education:analyze`    | 01    | Research pedagogical context, student population, institutional requirements    |
| `/co-education:plan`       | 02    | Create assessment or course design plan; stops for approval                     |
| `/co-education:execute`    | 03    | Build assessments, rubrics, materials one task at a time                        |
| `/co-education:review`     | 04    | Alignment audit, AI-resilience review, fairness check; produce finalized output |
| `/co-education:learn`      | 05    | Extract pedagogical insights into .claude/ artifacts (instructor approval)      |
| `/co-education:deliver`    | 06    | Package and deploy to LMS/students                                              |
| `/co-education:ws`         | --    | Workspace status                                                                |
| `/co-education:wrapup`     | --    | Save session notes                                                              |
| `/co-education:checkpoint` | --    | Review progress                                                                 |

### Domain-Specific Skills

| Skill                               | Purpose                                                         |
| ----------------------------------- | --------------------------------------------------------------- |
| `/co-education:design-assessment`   | Design an assessment task aligned to specific learning outcomes |
| `/co-education:build-rubric`        | Build a transparent, criterion-referenced rubric                |
| `/co-education:map-outcomes`        | Map learning outcomes across a course or program                |
| `/co-education:audit-ai-resilience` | Audit an assessment for AI-reproducibility vulnerabilities      |
| `/co-education:design-course`       | Design or restructure a course's assessment architecture        |

## Agents

| Agent                        | Purpose                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------ |
| **assessment-designer**      | Assessment task design aligned to learning outcomes and AI-resilience          |
| **rubric-builder**           | Transparent, criterion-referenced rubric construction                          |
| **learning-outcomes-mapper** | Learning outcome mapping across courses, programs, and accreditation           |
| **ai-detection-strategist**  | Strategies for assessment in the GenAI era (design-based, not detection-based) |
| **pedagogical-reviewer**     | Quality review: alignment, fairness, accessibility; never says "this is fine"  |

## Limitations of the Cowork Plugin

| Feature               | CLI (Claude Code)                     | Cowork Plugin                                                                 |
| --------------------- | ------------------------------------- | ----------------------------------------------------------------------------- |
| Guardrail enforcement | Hooks programmatically enforce rules  | Rules are advisory (hard refusals in CLAUDE.md help but are not programmatic) |
| Session memory        | `.session-notes` auto-read on startup | Manual: run `/wrapup` before closing, `/start` on next session                |
| Skill names           | `/analyze`, `/plan`, etc.             | `/co-education:analyze`, `/co-education:plan`, etc. (prefix required)         |
| Agent permissions     | Full hooks and permission modes       | No hooks or permission overrides (Cowork security restriction)                |
| File access           | Full filesystem                       | Limited to the folder opened in Cowork                                        |

## File Structure

<details>
<summary>Click to expand the full file tree</summary>

```
co-education/
  CLAUDE.md                    # Master directive
  .claude/
    agents/
      education/               # 5 education specialists
      management/              # Task tracking (todo-manager, gh-manager)
    commands/                  # CLI commands (14 commands)
    rules/                     # Guardrail rules
  plugin/                      # Cowork plugin
    .claude-plugin/plugin.json # Plugin manifest
    CLAUDE.md                  # Plugin context
    skills/                    # 14 skills (9 workflow + 5 domain-specific)
    agents/                    # Same agents, packaged for plugin
  workspaces/
    _template/                 # Workspace template
      01-research/
      02-planning/
      03-work/
      04-review/
      05-output/
      journal/
      todos/
```

</details>

## License

- **Code**: Apache 2.0
- **CO Methodology**: CC BY 4.0, Terrene Foundation

## Links

- [Terrene Foundation](https://terrene.foundation)
- [CO Specification](https://terrene.foundation/standards/co/) (CC BY 4.0)
- [CO Template](https://github.com/terrene-foundation/co-template) -- build your own CO application
