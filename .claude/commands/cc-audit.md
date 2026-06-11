---
name: cc-audit
description: "Audit CC artifacts for quality, completeness, effectiveness, and token efficiency"
---

# CC Artifact Audit

## What This Does

Systematically reviews all Claude Code artifacts (agents, skills, rules, commands, hooks) for quality across four dimensions: competency, completeness, effectiveness, and token efficiency.

## Your Role

Specify scope: audit everything, or target a specific artifact type or file.

## Workflow

1. **Scope determination**: If no scope specified, audit all artifact types. Otherwise focus on the requested scope.

2. **Inventory**: List all artifacts in scope with file paths and line counts.

3. **Audit each artifact** using the claude-code-architect agent's four-dimension framework:
   - **Competency**: Does it know what it claims? Are instructions precise?
   - **Completeness**: Are there gaps? Edge cases? Missing handoffs?
   - **Effectiveness**: Does it produce reliable behavior? Is the output format specified?
   - **Token Efficiency**: Is it lean? Path-scoped? No redundancy?

4. **Cross-reference check**: Verify all referenced artifacts exist. Flag orphans and broken links.

5. **Token budget analysis**: Calculate baseline per-turn token cost (CLAUDE.md + global rules + agent descriptions).

6. **Report**: Produce findings sorted by severity (CRITICAL → HIGH → NOTE) with specific fix recommendations.

## Composition Precedence

The mechanical checks (steps 4–5: cross-references, line/size limits, token budget), the four-dimension judgment (step 3), and any adversarial effectiveness test run on an artifact are NOT a flat list of equal findings — they **compose** into one verdict with a fixed precedence. Two signal classes are **load-bearing**; LLM judgment **corroborates**.

- **Structural signal (load-bearing)**: any mechanical-check RED — a cross-reference that does not resolve, an over-limit line count, an empty or malformed frontmatter field. Each is CRITICAL **regardless of LLM-dimension judgment**.
- **Adversarial signal (load-bearing)**: where an adversarial effectiveness test is run on an in-scope artifact and fails, that failure is CRITICAL **regardless of LLM-dimension judgment**.
- **LLM judgment (corroborating)**: surfaced at reviewer-judged NOTE/HIGH. Additive on top of the load-bearing signals — it catches what they miss, but it is NEVER auto-cleared and NEVER used to override them.

```markdown
# DO — structural signal wins:

The cross-reference check flags a dangling reference in agent X.
LLM read of X: "reads clean, well-scoped, no issues."
→ Verdict: CRITICAL (the dangling ref). The LLM read is recorded as
corroboration, not as a clearance.

# DO NOT — LLM judgment overriding a structural red:

An over-limit line count on rule Y is downgraded to NOTE because
"the rule is obviously fine on reading and the overage is harmless."
→ A structural RED is CRITICAL. An LLM "looks fine" can NEVER clear it.
```

**Why**: Mechanical checks exist to catch silent failures — the class of defect an LLM read misses by construction (a key that parses as no-frontmatter still "reads fine"). If a confident LLM judgment could downgrade a structural RED, the audit's deterministic backbone becomes advisory and the silent-failure class reopens. Precedence is one-directional: structure and adversarial proof gate the verdict; judgment enriches it.

## Agent Teams

| Function                     | Agent                    |
| ---------------------------- | ------------------------ |
| Audit execution              | claude-code-architect    |
| Standards compliance         | gold-standards-validator |
| Cross-reference verification | intermediate-reviewer    |

## Completion Evidence

- Audit report with dimension scores for each artifact
- Token budget summary
- Prioritized fix list with CRITICAL/HIGH/NOTE severity
