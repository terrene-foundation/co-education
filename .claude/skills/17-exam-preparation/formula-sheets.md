# Creating Effective Formula Sheets

A formula sheet is not a miniature textbook. It is a quick-reference tool designed for rapid lookup during an exam (if allowed) or as a study consolidation exercise. The act of creating a formula sheet -- selecting, organizing, and connecting formulas -- is itself one of the most effective study techniques.

## Why Formula Sheet Creation Matters

Even if your exam does not permit a formula sheet, the process of creating one forces you to:

1. Identify the most important formulas (prioritization)
2. Understand how formulas relate to each other (connections)
3. Recognize which formulas you know well and which you do not (self-assessment)
4. Organize knowledge into a retrievable structure (encoding)

## Principles of Effective Formula Sheets

### 1. Group by Topic, Not by Chapter

Organize formulas by conceptual category, not by the order they appeared in lectures. During an exam, you think "I need a formula for this type of problem," not "I need something from Week 7."

**Good grouping example** (for a subject with quantitative content):

- Descriptive statistics
- Probability and distributions
- Estimation and inference
- Rates and ratios
- Growth and change

### 2. Show Relationships Between Formulas

Formulas do not exist in isolation. Show how they connect.

**Example: a family of related formulas**:

```
Mean = sum(x_i) / n                [simple average]
  |
  +--> Weighted Mean = sum(w_i x_i) / sum(w_i)    [weights applied]
  |
  +--> Variance = sum((x_i - mean)^2) / n          [spread around the mean]
          |
          +--> Standard Deviation = sqrt(Variance)  [same units as the data]
```

This visual shows that variance and standard deviation both measure spread relative to the mean, and that the standard deviation is simply the square root of the variance.

### 3. Define Every Variable

A formula is useless during an exam if you cannot remember what the variables mean.

**Bad**:

> z = (x - mu) / sigma

**Good**:

> **z-score = (x - mu) / sigma**
> x = observed value, mu = population mean, sigma = population standard deviation
> Positive z = above average; negative z = below average

### 4. Include Units and Sign Conventions

**Example for a rate-of-change formula**:

> rate = (new value - old value) / old value
> Old value is in the **denominator** (never zero)
> Result is a **proportion** (multiply by 100 for a percentage)
> Negative result = decrease; positive result = increase

### 5. Add One-Line Intuition

A brief plain-language note helps you remember what the formula does, especially under exam pressure.

**Example**:

> **Standard error = sigma / sqrt(n)**
> _"How much does the sample mean typically vary from the true mean? Less variation with a larger sample."_

### 6. Note Common Pitfalls

Flag the most common errors directly on the formula sheet.

**Example**:

> **Sample variance: s^2 = sum((x_i - x_bar)^2) / (n - 1)**
> WARNING: Divide by (n - 1), NOT n, for an unbiased sample estimate.
> WARNING: Square the deviations before summing -- do not sum first, then square.

## Template: One-Page Formula Sheet Structure

The exact formulas will depend on your subject. The structure below works for any quantitative course.

### Descriptive Statistics

- Mean, median, mode
- Variance and standard deviation (population and sample forms)
- Range, interquartile range
- z-score standardization

### Probability

- Basic probability rules (addition, multiplication, complement)
- Conditional probability
- Bayes' theorem (if applicable)
- Expected value: E(X) = sum(x_i \* p_i)

### Common Distributions

- Key parameters for each distribution used in the course
- Mean and variance formulas for each
- When each distribution applies

### Estimation and Inference

- Confidence interval formula: estimate +/- (critical value) x (standard error)
- Hypothesis test statistic: (estimate - null value) / standard error
- Degrees of freedom for each test type

### Growth and Rates

- Percentage change: (new - old) / old
- Compounding: value_n = value_0 x (1 + r)^n
- Rule of 72: doubling time = 72 / r (%) for rough estimates

## Process for Building Your Own Formula Sheet

### Step 1: Gather All Formulas

Go through every chapter, lecture, and problem set. Write down every formula you encountered.

### Step 2: Categorize

Sort into topic groups. Look for formulas that are special cases of others.

### Step 3: Prioritize

For a one-page formula sheet, you cannot include everything. Ask:

- Which formulas appear most frequently on past exams?
- Which formulas can I derive from others? (Include the base formula, leave out the derived one.)
- Which formulas do I struggle to remember? (These need to be on the sheet.)

### Step 4: Add Context

For each formula, add variable definitions, units, common pitfalls, and a one-line intuition.

### Step 5: Test It

Take a practice exam using only your formula sheet. Can you find what you need quickly? Is anything missing? Is anything redundant?

## Common Mistakes

1. **Including too much**: A cluttered formula sheet is as useless as no formula sheet. You need to find the right formula in 10 seconds under exam pressure. White space and clear organization matter.

2. **Copying formulas without understanding them**: If you do not understand a formula, having it on your sheet will not help. You will not know when to use it or what to plug in.

3. **Not including variable definitions**: Under exam stress, you may forget what a variable means. Always define every variable.

4. **Missing the connections**: Isolated formulas are harder to recall. Show how they relate to each other.

5. **Not practicing with the formula sheet**: Build your sheet early enough to test it on practice problems. Revise it based on what works.

6. **Forgetting sign conventions and units**: Many formulas have critical sign conventions or require inputs in a specific form (decimal vs. percentage, absolute vs. relative). Flag these directly on the sheet.

## Key References

- See [../19-formula-reference/](../19-formula-reference/SKILL.md) for complete formula reference sheets organized by course.
- Brown, P.C., Roediger, H.L. & McDaniel, M.A. (2014). _Make It Stick: The Science of Successful Learning_. Harvard University Press.
- Dunlosky, J. et al. (2013). "Improving Students' Learning With Effective Learning Techniques." _Psychological Science in the Public Interest_, 14(1), 4-58.
