# Problem Types in Exams

Exams typically include four types of questions: calculations, conceptual, case analysis, and essays. Each type demands a different approach. Knowing what each type tests and how to structure your answer is half the battle.

## Calculation Problems

### What They Test

Your ability to apply formulas correctly, set up problems with the right inputs, and arrive at a numerically correct answer.

### Strategy: The Five-Step Method

1. **State the formula**: Write the relevant formula before plugging in numbers. This earns partial credit even if your arithmetic is wrong.
2. **Define variables**: List what each variable represents and its value from the problem.
3. **Substitute**: Plug the values into the formula. Show every substitution.
4. **Compute**: Carry out the arithmetic step by step.
5. **Interpret**: State what the answer means in context. "The standard deviation is 4.2, meaning the typical data point is 4.2 units away from the mean."

### Worked Example

**Question**: A dataset has values {2, 4, 4, 6, 8, 10}. What is the sample standard deviation?

**Answer**:

Step 1 -- Formula: s = sqrt[ sum(x_i - x_bar)^2 / (n - 1) ]

Step 2 -- Variables: n = 6; x_bar = (2+4+4+6+8+10)/6 = 34/6 ≈ 5.667

Step 3 -- Deviations squared:

- (2 - 5.667)^2 = 13.44
- (4 - 5.667)^2 = 2.78 (twice)
- (6 - 5.667)^2 = 0.11
- (8 - 5.667)^2 = 5.44
- (10 - 5.667)^2 = 18.78

Step 4 -- Sum = 13.44 + 2.78 + 2.78 + 0.11 + 5.44 + 18.78 = 43.33; s = sqrt(43.33 / 5) = sqrt(8.667) ≈ **2.94**

Step 5 -- Interpretation: The typical value in this dataset is about 2.94 units from the mean of 5.67.

### Common Calculation Errors

| Error                                              | Example                                   | Fix                                                              |
| -------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| Dividing by n instead of (n-1) for sample variance | s^2 = sum/6 instead of sum/5              | Check whether the problem asks for population or sample variance |
| Mismatching units                                  | Mixing rates per day with totals per year | Convert all inputs to the same unit before substituting          |
| Forgetting to square deviations                    | Summing raw deviations (always zero)      | Always square before summing                                     |
| Rounding too early                                 | Rounding intermediate steps               | Keep 4+ decimal places until the final answer                    |
| Wrong sign or direction                            | Treating a decrease as positive           | Re-read the sign convention the question specifies               |

## Conceptual Questions

### What They Test

Your understanding of the concepts and theories in the subject, and the reasoning behind them -- not just formulas but the ideas that make them work.

### Strategy

1. **Define the concept**: Start with a clear, concise definition
2. **Explain the intuition**: Why does this concept exist? What problem does it solve?
3. **Give an example**: Illustrate with a concrete scenario
4. **State limitations or assumptions**: Show deeper understanding

### Worked Example

**Question**: Explain why a larger sample size reduces estimation uncertainty.

**Answer**:

**Definition**: Sample size is the number of observations used to estimate a population parameter. Estimation uncertainty -- measured by the standard error -- describes how much the estimate is likely to vary from the true value.

**Intuition**: Each additional observation provides more information about the population. With more observations, extreme individual values average out, so the sample mean fluctuates less around the true mean. The standard error formula makes this precise: SE = sigma / sqrt(n). Doubling n reduces the standard error by a factor of sqrt(2) ≈ 1.41.

**Example**: Estimating the average height of students in a university. A sample of 10 students might give a mean of 172 cm or 168 cm depending on who happens to be selected. A sample of 1,000 students will consistently give a mean much closer to the true population average because extreme individual heights cancel out.

**Limitation**: A larger sample reduces random error but cannot correct systematic bias. If the sample is drawn only from one department, increasing n does not make it representative of the whole university.

### Conceptual Question Pitfalls

- **Vague answers**: "A larger sample is more accurate." This lacks specificity. _How_ does it reduce uncertainty? _What kind_ of uncertainty?
- **Formula-only answers**: Writing SE = sigma / sqrt(n) without explaining the intuition. Formulas support conceptual answers; they do not replace them.
- **Missing limitations**: Every concept has boundaries. Mentioning them demonstrates deeper understanding.

## Case Analysis Questions

### What They Test

Your ability to apply course frameworks and tools to a realistic scenario, weigh trade-offs, and make a recommendation.

### Strategy: The STAR Framework

1. **Situation**: Summarize the key facts of the case (2-3 sentences)
2. **Task**: Identify the decision or problem to be solved
3. **Analysis**: Apply relevant frameworks, models, and calculations
4. **Recommendation**: State a specific, actionable recommendation supported by your analysis

### Worked Example

**Question**: A study measures the test scores of two groups of students: Group A used a new teaching method (n=30, mean=78, SD=8) and Group B used the traditional method (n=30, mean=74, SD=9). Should the institution adopt the new teaching method? What further evidence would strengthen the conclusion?

**Answer**:

**Situation**: Two groups of equal size were taught by different methods and then assessed. The new method group scored 4 points higher on average.

**Task**: Determine whether the observed difference is meaningful and whether the institution should act on it.

**Analysis**:

- Observed difference = 78 - 74 = 4 points
- Pooled SE of the difference ≈ sqrt((8^2 + 9^2)/30) ≈ sqrt(4.83) ≈ 2.20
- Effect size (Cohen's d) ≈ 4 / 8.5 ≈ 0.47 (medium effect)
- The difference is approximately 1.8 standard errors, suggesting it is unlikely to be purely by chance, though a formal significance test would confirm this

**Recommendation**: The evidence is suggestive but not conclusive on its own. The 4-point difference represents a medium effect size -- meaningful in educational terms. However, the institution should verify with a formal hypothesis test and, ideally, a replication study before full adoption. The new method shows enough promise to warrant a larger pilot.

### Case Question Tips

- Always quantify when possible -- numbers strengthen arguments
- Acknowledge risks and assumptions
- State your recommendation clearly (do not hedge excessively)
- Consider multiple stakeholders if relevant

## Essay Questions

### What They Test

Your ability to construct a coherent, well-supported argument about a topic in the subject, drawing on theory, evidence, and critical thinking.

### Strategy: The Three-Part Essay

1. **Introduction** (1 paragraph): State your thesis -- the main argument you will defend
2. **Body** (2-4 paragraphs): Present supporting arguments with evidence. Address counterarguments.
3. **Conclusion** (1 paragraph): Restate your thesis and summarize why the evidence supports it

### Worked Example

**Question**: "Correlation implies causation." Discuss.

**Introduction**: "The claim that correlation implies causation is one of the most common errors in reasoning from data. While a correlation between two variables is a necessary condition for a causal relationship, it is far from sufficient. Spurious correlations, confounding variables, and reverse causation can all produce strong correlations where no direct causal link exists."

**Body paragraph 1** (evidence for the error being common): "Numerous widely-cited examples illustrate the problem. Ice cream sales and drowning rates are strongly positively correlated -- not because ice cream causes drowning, but because both increase in summer. Any analysis that stopped at the correlation would recommend reducing ice cream sales as a drowning-prevention strategy, an absurd conclusion that highlights the stakes of confusing correlation with causation."

**Body paragraph 2** (when correlation is informative): "Correlation is not useless for causal inference. Under certain conditions -- controlled experiments with random assignment, or observational studies with carefully chosen instrumental variables -- a correlation can provide strong evidence of causation. The distinction is not that correlations are always uninformative, but that they require additional structural assumptions before a causal claim is warranted."

**Body paragraph 3** (reconciliation): "The practitioner's rule is: treat correlation as a prompt to investigate, not a conclusion. A strong correlation motivates a causal hypothesis. Testing that hypothesis requires ruling out confounders, verifying temporal ordering (cause must precede effect), and ideally replicating the finding across different populations and methods."

**Conclusion**: "In summary, correlation is a starting point for causal investigation, not its destination. The claim that correlation implies causation is false as a general rule, but correlation remains an essential empirical signal when interpreted within a sound analytical framework."

### Essay Question Tips

- Take a position (but acknowledge the other side)
- Cite specific studies or examples (even approximate citations demonstrate familiarity with the literature)
- Structure your answer clearly with topic sentences
- Manage time -- for a 30-minute essay, spend 5 minutes planning, 20 minutes writing, 5 minutes reviewing

## Common Mistakes

1. **Not showing work on calculations**: Even if your final answer is correct, you may lose marks if you do not show intermediate steps. If your final answer is wrong, showing work earns partial credit.

2. **Answering a different question**: Read the question carefully. "Explain" means describe the concept. "Evaluate" means assess whether something is good or bad. "Compare" means identify similarities and differences. "Calculate" means produce a number.

3. **Running out of time**: Allocate time at the start of the exam. If a section is worth 40% of marks, spend 40% of your time on it. Move on from a question you are stuck on -- come back later.

4. **Writing everything you know instead of answering the question**: A focused, well-structured answer that directly addresses the question is better than a brain dump of everything related to the topic.

5. **Not interpreting calculation results**: A bare number without interpretation misses easy marks. State what the number means in the context of the problem.

6. **Ignoring mark allocation**: If a question is worth 2 marks, a two-sentence answer is appropriate. If it is worth 20 marks, you need a structured, detailed response.

## Key References

- Dunlosky, J. et al. (2013). "Improving Students' Learning With Effective Learning Techniques." _Psychological Science in the Public Interest_, 14(1), 4-58.
- Brown, P.C., Roediger, H.L. & McDaniel, M.A. (2014). _Make It Stick: The Science of Successful Learning_. Harvard University Press.
