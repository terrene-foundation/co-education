---
name: analyze
description: Research and understand the problem space. Gather information, identify constraints, map the landscape.
argument-hint: "[topic or question]"
---

# /analyze $ARGUMENTS

Research and analyze **$ARGUMENTS** thoroughly.

## Protocol

1. **Find the active workspace** by checking `workspaces/` for the most recently modified project
2. **Read the project brief** if one exists in the workspace
3. **Research the topic**: gather relevant information, identify key sources, map competing approaches
4. **Identify constraints**: what limits apply? What standards must be met?
5. **Document findings** in `01-analyze/`
6. **Create `specs/`** (MUST — before vet) — see `rules/specs-authority.md`. Create `specs/_index.md` plus one spec file per major educational domain area (e.g., `learning-outcomes.md`, `assessment-architecture.md`, `student-population.md`, `institutional-context.md`). Each spec file MUST be detailed enough to be the authority on its topic. For each requirement in the brief, confirm a corresponding spec section exists — missing mappings are BLOCKING.

## Brief-Claim Verification (when the brief carries ≥3 discrete claims)

`/analyze` is where parallel brief-claim verification runs. When the brief or its source material carries **≥3 discrete claims** (counts, paths, named artifacts, root-cause or "X currently does Y" assertions), apply `rules/delegation-orchestration.md` §2 ("Parallel Brief-Claim Verification") — the canonical requirement and BLOCKED list. Launch parallel verification agents — one per claim cluster, each delegated in plain language to a verification-capable agent from this repo's roster (e.g. `deep-analyst` or `research-assistant`): "Independently re-read every source this claim cluster cites; report each claim TRUE / FALSE / UNCLEAR with citations." Record each verdict in `01-analyze/`, then reconcile corrections into the analysis output BEFORE `/plan`, so `/plan` sizes against verified reality. Single-agent analysis on a ≥3-claim brief is BLOCKED.

## Output

Save a structured analysis to `01-analyze/analysis-[topic-slug].md`:

```markdown
# Analysis: $ARGUMENTS
Date: [today]

## Key Findings
[What you discovered]

## Sources and References
[Where the information comes from]

## Constraints and Considerations
[What limits or standards apply]

## Recommendations
[What the human should consider for the next phase]
```

## Next Step

After analysis, recommend `/plan` to create a structured plan based on findings.
