# Thesis Structure

A well-structured thesis or research paper follows a standard format that guides the reader from the research question to the conclusion. Each section has a specific purpose, and knowing what belongs where is half the battle of writing well.

## Why Structure Matters

A strong argument buried in a poorly structured paper will not convince anyone. Structure is not just cosmetic -- it is a thinking tool. Organizing your paper into clear sections forces you to separate your question from your method, your results from your interpretation, and your claims from your evidence. Reviewers and professors expect this structure, and deviating from it without reason signals inexperience.

Think of structure as the skeleton of your paper: it holds everything together and determines the shape of the final product.

## The Standard Structure

### 1. Title

The title should convey the research question and key finding in as few words as possible.

**Good title**: "Does Peer Feedback Improve Revision Quality? Evidence from Undergraduate Writing Courses, 2018-2023"

**Weak title**: "A Study of Peer Feedback"

**Formula for a strong title**: [Key variable/relationship] + [Context/sample] + [Optional: time period or method]

### 2. Abstract

A self-contained summary of the entire paper in 150-300 words.

**Structure**: Background (1-2 sentences) --> Research question (1 sentence) --> Method (1-2 sentences) --> Key finding (1-2 sentences) --> Implication (1 sentence).

**Worked Example**:

> "This paper examines whether structured peer feedback improves revision quality among undergraduate writers in a first-year composition course. Using a pre-post design with a matched comparison group, we test whether students who receive trained peer feedback revise more substantively than those who receive only instructor feedback. We find that structured peer feedback is associated with a statistically significant 18% increase in substantive revision across drafts, controlling for prior writing ability, assignment type, and class size. These results support the value of trained peer review as a pedagogical tool and suggest that feedback structure matters more than feedback source. The findings have implications for writing course design and the role of peer interaction in developing revision habits."

### 3. Introduction

The introduction sets up the entire paper. It should accomplish four things:

1. **Motivate the topic**: Why should anyone care? What is the real-world significance?
2. **State the research question**: What specific question are you answering?
3. **Preview your approach**: How did you investigate this question?
4. **Summarize your findings**: What did you find? (Yes, give away the ending.)

**Length**: 1-3 pages for an undergraduate paper; 3-5 pages for a graduate thesis.

**Common mistake**: Writing the introduction as a literature review. The introduction should mention only the most essential prior studies -- save the detailed review for the next section.

**Tip**: Open with a concrete real-world hook that makes the stakes of your question visible. For example: "In 2022, an estimated 40% of first-generation university students reported leaving their degree without completing a required writing course -- yet almost no research has tracked what distinguishes those who persist from those who withdraw. This raises a fundamental question: does early feedback quality affect long-term engagement?"

### 4. Literature Review

See the separate [literature-review.md](literature-review.md) file for detailed guidance.

**Purpose**: Show what has been done before, identify the gap your research fills, and position your contribution.

**Length**: 3-8 pages for an undergraduate paper; 10-25 pages for a graduate thesis.

### 5. Methodology

See the separate [methodology-section.md](methodology-section.md) file for detailed guidance.

**Purpose**: Describe your data, sample, variables, and analytical approach in enough detail that another researcher could replicate your study.

**Length**: 3-6 pages.

### 6. Results

Present your findings without interpretation (interpretation belongs in the Discussion).

**Structure**:

1. Descriptive statistics (summary table of key variables)
2. Main results (regression tables, test statistics)
3. Robustness checks (alternative specifications that confirm or challenge your main finding)

**Reporting conventions**:

- Report coefficients with standard errors or t-statistics
- Use asterisks for significance levels: \* p < 0.10, ** p < 0.05, \*** p < 0.01
- Always report R-squared and number of observations
- Include practical magnitude, not just statistical significance ("a one-standard-deviation increase in feedback rounds is associated with a 1.4 percentage point improvement in revision score")

**Common mistake**: Interpreting results in this section. "The coefficient is 0.023" belongs here. "This suggests that feedback timing matters more than frequency" belongs in the Discussion.

### 7. Discussion

Interpret your results and connect them to the broader literature.

**Structure**:

1. What do your results mean? Connect findings to your hypotheses
2. How do they compare to prior studies? Consistent or contradictory?
3. What are the limitations? (Every study has them -- acknowledge them honestly)
4. What are the implications? For theory, for practice, for policy?

**Tip**: Discuss practical significance, not just statistical significance. A coefficient that is statistically significant at p < 0.01 but represents a negligible real-world effect is not meaningful for practitioners. Always translate statistical results into terms a reader in your field can act on.

### 8. Conclusion

Summarize the paper in one page. State:

1. What you did
2. What you found
3. Why it matters
4. What future research could explore

**Do not** introduce new arguments, data, or citations in the conclusion.

### 9. References

See [../15-citation-guide/](../15-citation-guide/SKILL.md) for formatting details.

### 10. Appendices (Optional)

Place supplementary material here: additional tables, derivations, variable definitions, robustness checks that did not fit in the main text.

## Structural Considerations Across Disciplines

### Hypothesis Development

In empirical research, hypotheses should be:

- **Testable**: Can be confirmed or rejected with data
- **Grounded in theory**: Derived from an established model or prior literature
- **Directional**: State the expected sign or direction of the relationship

**Example**:

> "H1: Students who receive structured peer feedback produce drafts with more substantive revisions than students who receive unstructured feedback."
> "H2: The magnitude of the revision improvement is positively related to the number of trained feedback rounds completed."

### Data and Sample Description

Always include:

- Source of data (survey, experiment, archive, observation, or secondary dataset)
- Sample period and frequency
- Sample selection criteria and any exclusions
- Number of observations and participants or units
- Potential sampling bias considerations

### Endogeneity and Confounding

In empirical research, almost every relationship could be confounded -- causation could run both ways, or a third variable could drive both outcomes. Your paper should:

- Acknowledge the confounding or endogeneity concern
- Discuss what approach you use to address it (randomized assignment, instrumental variables, natural experiments, fixed effects, difference-in-differences, or matched comparison groups)
- Be honest about limitations that remain

## Common Mistakes

1. **Writing the paper in order**: Write the Introduction and Conclusion last. Start with the Methodology and Results -- these are the most concrete sections.

2. **Burying the contribution**: State your contribution clearly in the Introduction. Do not make the reader guess why your paper matters.

3. **Literature review as annotated bibliography**: A literature review organizes themes and identifies gaps -- it does not summarize papers one by one.

4. **Results without practical interpretation**: "Beta = 0.18 (p < 0.01)" means nothing without context. Always translate statistical results into practical magnitude in terms meaningful to your field.

5. **Ignoring limitations**: Every study has limitations. Acknowledging them demonstrates maturity and strengthens (not weakens) your paper.

6. **Conclusion that introduces new material**: The conclusion summarizes; it does not present new arguments or evidence.

## Key References

- Cochrane, J.H. (2005). "Writing Tips for PhD Students." Manuscript, University of Chicago.
- Swales, J.M. & Feak, C.B. (2012). _Academic Writing for Graduate Students_, 3rd ed., University of Michigan Press.
- Creswell, J.W. & Creswell, J.D. (2018). _Research Design: Qualitative, Quantitative, and Mixed Methods Approaches_, 5th ed., SAGE.
