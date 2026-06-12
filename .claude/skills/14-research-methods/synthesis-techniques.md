# Synthesis Techniques

Synthesis is the process of combining findings from multiple sources to build a coherent understanding of a topic. It goes beyond summarizing individual studies -- it identifies patterns, contradictions, and gaps across the body of evidence.

## Why Synthesis Matters

A literature review that summarizes papers one by one is an annotated bibliography, not a synthesis. True synthesis identifies what the collective body of evidence tells us, where studies disagree and why, and what questions remain unanswered. This is the foundation for justifying your own research contribution.

## Thematic Analysis

The most common synthesis technique in academic literature reviews. Studies are grouped by theme rather than by author or chronology.

### How to Conduct Thematic Analysis

**Step 1: Code your sources**. As you read each paper, tag it with themes.

| Source           | Themes                              | Key Finding                                                                               |
| ---------------- | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| Bandura (1977)   | Learning, self-efficacy             | Self-belief in one's capacity to perform mediates behavior change                         |
| Schunk (1989)    | Self-efficacy, academic achievement | Self-efficacy predicts persistence and performance in students                            |
| Pajares (1996)   | Self-efficacy, writing              | Writing self-efficacy is a stronger predictor of writing performance than general ability |
| Zimmerman (2000) | Self-regulation, motivation         | Self-regulated learning integrates self-efficacy with goal-setting and strategy use       |

**Step 2: Group by theme**. Cluster related findings together.

Theme 1: Theoretical foundations of self-efficacy
Theme 2: Self-efficacy and academic performance
Theme 3: Self-efficacy and writing
Theme 4: Self-efficacy within broader self-regulation models

**Step 3: Write thematic paragraphs**. Each paragraph addresses one theme and synthesizes multiple sources.

### Worked Example: Thematic Paragraph

> "Self-efficacy -- a learner's belief in their capacity to perform a specific task -- has emerged as one of the most consistent predictors of academic outcomes. First theorized by Bandura (1977) as a domain-specific cognitive mechanism, the construct has since been applied to mathematics achievement (Schunk, 1989), writing performance (Pajares, 1996), and broader self-regulated learning (Zimmerman, 2000). Across disciplines and age groups, higher self-efficacy is associated with greater effort, persistence in the face of difficulty, and ultimately stronger performance. Two main theoretical accounts compete: social-cognitive models treat self-efficacy as a proximal predictor of behavior, shaped by mastery experiences and social modeling (Bandura, 1977), while integrative self-regulation models treat it as one component of a wider motivational system that also includes goal orientation and metacognitive strategy (Zimmerman, 2000). The boundary conditions of these accounts -- particularly how self-efficacy interacts with task difficulty and feedback -- remain an active area of debate."

**Notice**: This paragraph synthesizes four studies into a coherent narrative about a single theme, identifies competing accounts, and notes the unresolved nature of the debate.

## Meta-Analysis

A quantitative synthesis that statistically combines results from multiple studies to estimate an overall effect size.

### When to Use Meta-Analysis

- When multiple studies have estimated the same relationship (e.g., the effect of class size on student achievement)
- When you want to determine whether an effect is robust across studies
- When you want to explain why effect sizes differ across studies (moderator analysis)

### Basic Meta-Analysis Steps

**Step 1**: Collect effect sizes (regression coefficients, correlation coefficients, or standardized mean differences) from each study.

**Step 2**: Weight each study by precision (typically the inverse of its variance).

> **Weighted Average Effect = sum(w_i x ES_i) / sum(w_i)**

Where w_i = 1 / Var(ES_i) and ES_i = effect size from study i.

**Step 3**: Test for heterogeneity using the Q-statistic or I^2.

> **I^2 = [(Q - df) / Q] x 100%**

I^2 > 75% indicates substantial heterogeneity -- the studies are not measuring the same effect.

**Step 4**: If heterogeneity exists, conduct moderator analysis to explain why effect sizes vary (e.g., differences in sample period, country, or methodology).

### Worked Example: Meta-Analysis of Feedback Effects on Learning

| Study        | d (effect size) | Sample Size | SE   | Weight (w) |
| ------------ | --------------- | ----------- | ---- | ---------- |
| Smith (2015) | 0.52            | 500         | 0.09 | 123.5      |
| Jones (2017) | 0.31            | 1,200       | 0.06 | 277.8      |
| Chen (2020)  | 0.74            | 200         | 0.14 | 51.0       |
| Brown (2022) | 0.45            | 800         | 0.07 | 204.1      |

Weighted average = (123.5 x 0.52 + 277.8 x 0.31 + 51.0 x 0.74 + 204.1 x 0.45) / (123.5 + 277.8 + 51.0 + 204.1)

= (64.2 + 86.1 + 37.7 + 91.8) / 656.4

= 279.8 / 656.4 = **d ≈ 0.43**

**Interpretation**: Across four studies, feedback has a moderate positive effect on learning outcomes (d = 0.43), weighted by study precision.

## Systematic Reviews

A rigorous, transparent, and replicable approach to identifying and synthesizing all relevant studies on a topic.

### Steps in a Systematic Review

1. **Define the research question**: Use the PICO framework (Population, Intervention, Comparison, Outcome):
   - Population: Secondary school students in OECD countries
   - Intervention: Formative feedback (instructor-provided, during learning)
   - Comparison: No feedback or summative-only feedback
   - Outcome: Academic achievement (standardized test scores or course grades)

2. **Develop a search protocol**: Define databases (Web of Science, Scopus, SSRN), search terms, and inclusion/exclusion criteria before searching.

3. **Search systematically**: Run the same search across all databases and record the results.

4. **Screen and select**: Apply inclusion criteria. Use a PRISMA flow diagram to show how you went from initial search results to final included studies.

5. **Extract data**: Record key information from each included study in a standardized table.

6. **Synthesize**: Use thematic analysis, meta-analysis, or both.

7. **Assess quality**: Evaluate the methodological quality of each study.

### PRISMA Flow Diagram

```
Records identified through database searching (n = 850)
    |
    v
Records after duplicates removed (n = 620)
    |
    v
Records screened by title/abstract (n = 620)
    |
    v
Records excluded (n = 480)
    |
    v
Full-text articles assessed for eligibility (n = 140)
    |
    v
Full-text articles excluded with reasons (n = 95)
    |
    v
Studies included in synthesis (n = 45)
```

## Framework for Organizing Literature

A synthesis framework helps you structure your review around the relationships between concepts.

### Concept Matrix

Map studies onto the concepts they address.

|                           | Motivation | Self-Efficacy | Feedback | Achievement |
| ------------------------- | ---------- | ------------- | -------- | ----------- |
| Bandura (1977)            |            | X             |          | X           |
| Hattie & Timperley (2007) |            |               | X        | X           |
| Ryan & Deci (2000)        | X          |               |          | X           |
| Zimmerman (2000)          | X          | X             | X        |             |

This matrix reveals:

- Which intersections are well-studied (motivation and achievement)
- Which intersections are under-studied (self-efficacy and feedback together)
- Which concepts are central (achievement appears in many studies)

### Funnel Map

Organize from broad to narrow:

1. **Field level**: Broad theoretical landscape (major paradigms, foundational debates)
2. **Domain level**: Domain-specific patterns (particular populations, settings, or contexts)
3. **Study-type level**: Methodological approaches (experimental, observational, qualitative)
4. **Variable level**: Specific constructs or relationships your study examines
5. **Your study**: Where your research fits

## Common Mistakes

1. **Listing instead of synthesizing**: "Smith found X. Jones found Y. Brown found Z." This is a list, not a synthesis. Identify the pattern across all three.

2. **Ignoring contradictory evidence**: Cherry-picking studies that support your view and ignoring those that do not. A good synthesis addresses conflicting evidence and explains why studies disagree.

3. **Treating all studies as equally valid**: A study with 50 observations and no control variables is not as convincing as one with 50,000 observations and robust methodology. Weight your synthesis by study quality.

4. **No framework**: Dumping all studies into one section without organizing by theme, method, or time period. Use a concept matrix or thematic structure.

5. **Confusing narrative review with systematic review**: A narrative review is informal and potentially biased. A systematic review follows a predefined protocol. Be clear about which you are conducting.

6. **Forgetting to state the synthesis conclusion**: After reviewing 20 studies on a theme, explicitly state what the collective evidence tells us: "Taken together, these studies suggest that..."

## Key References

- Tranfield, D., Denyer, D. & Smart, P. (2003). "Towards a Methodology for Developing Evidence-Informed Management Knowledge by Means of Systematic Review." _British Journal of Management_, 14(3), 207-222.
- Borenstein, M., Hedges, L.V., Higgins, J.P.T. & Rothstein, H.R. (2021). _Introduction to Meta-Analysis_, 2nd ed., Wiley.
- Webster, J. & Watson, R.T. (2002). "Analyzing the Past to Prepare for the Future: Writing a Literature Review." _MIS Quarterly_, 26(2), xiii-xxiii.
- Moher, D. et al. (2009). "Preferred Reporting Items for Systematic Reviews and Meta-Analyses: The PRISMA Statement." _PLoS Medicine_, 6(7), e1000097.
