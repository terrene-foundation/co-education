# Methodology Section

The methodology section describes how you conducted your research in enough detail that another researcher could replicate your study. This typically means specifying your data sources, sample construction, variable definitions, and analytical approach.

## Why the Methodology Section Matters

Your results are only as credible as your method. A reader who does not understand your methodology cannot evaluate your findings. The methodology section is also where reviewers focus most of their scrutiny -- if your method is flawed, your conclusions are unreliable regardless of how impressive the results look.

Think of it as a recipe: someone should be able to follow your instructions and produce the same dish.

## Quantitative vs. Qualitative Research

### Quantitative

Uses numerical data and statistical analysis to test hypotheses.

**Examples**: Randomized controlled experiments, survey-based regression analysis, quasi-experimental designs, longitudinal studies, time-series analysis.

**When to use**: When you have a testable hypothesis and access to numerical data (test scores, response rates, behavioral measures, administrative records).

### Qualitative

Uses non-numerical data (interviews, case studies, textual analysis) to explore phenomena.

**Examples**: Semi-structured interview analysis, thematic coding of documents, ethnographic observation, case studies of institutional change.

**When to use**: When exploring new phenomena where quantitative data is limited, or when seeking deeper understanding of motivations, processes, and meanings.

### Mixed Methods

Combines both approaches -- for instance, using interviews to develop hypotheses that are then tested quantitatively, or using statistical patterns to identify cases for in-depth qualitative investigation.

## Data Sources

### Types of Data Sources

| Source Type                              | Coverage                                             | Access                                            | Best For                                            |
| ---------------------------------------- | ---------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------- |
| **Institutional administrative records** | Records from schools, hospitals, government agencies | Restricted; institutional data-sharing agreements | Studies of outcomes in defined populations          |
| **National survey datasets**             | Population-level survey data                         | Public/restricted (varies by country)             | Cross-sectional and longitudinal population studies |
| **Experimental data**                    | Lab or field experiment records                      | Researcher-collected                              | Causal inference on specific interventions          |
| **Published databases**                  | Aggregated secondary data                            | Open or subscription                              | Meta-analyses, cross-context comparisons            |
| **Qualitative archives**                 | Interview transcripts, documents, fieldnotes         | Project-specific                                  | In-depth case and discourse studies                 |

### Citing Data Sources

Always specify:

1. The dataset name and provider
2. The specific version, wave, or file used
3. The date of data access or collection
4. Any filters or selection criteria applied

**Example**: "Reading assessment scores are drawn from the school district's anonymized student records, accessed under a data-use agreement on March 3, 2026. We include all students enrolled in grades 3–8 from the 2018–19 through 2022–23 academic years."

## Sample Selection

### Describing Your Sample

Explain every step of sample construction clearly:

1. **Starting universe**: Where did you begin?
2. **Inclusion criteria**: What units (participants, observations, cases) did you keep?
3. **Exclusion criteria**: What did you remove, and why?
4. **Final sample**: How many observations remain?

### Worked Example: Sample Construction

> "We begin with all students enrolled in grades 3–8 in the district during the study period (initial universe: 42,317 student-year observations). We exclude students with fewer than 80% attendance, as their outcome data are likely unreliable (remaining: 38,904). We further exclude students who transferred mid-year and therefore lacked a complete pre-test record (remaining: 37,612). Our final analytic sample consists of 37,612 student-year observations from 9,428 unique students."

**Present this as a table**:

| Filter                                           | Observations Dropped | Remaining |
| ------------------------------------------------ | -------------------- | --------- |
| All enrolled students, grades 3–8, study period  | --                   | 42,317    |
| Exclude <80% attendance                          | 3,413                | 38,904    |
| Exclude mid-year transfers with missing pre-test | 1,292                | 37,612    |

### Common Sample Issues

- **Survivorship bias**: Only including units that remained in the dataset through the end of the study. Use full enrollment or registration records to include those who dropped out or left.
- **Look-ahead bias**: Using information that was not available at the time of the decision being studied. Ensure administrative data reflects what was known when each decision was made.
- **Selection bias**: Your sample may not be representative of the broader population. Discuss who is included and excluded and what that means for generalizability.

## Variable Definitions

### Dependent Variable

State precisely what you are measuring and how.

**Example**: "Our dependent variable is the student's end-of-year standardized reading score, expressed as a standardized z-score within each grade level and year to allow comparisons across cohorts."

### Independent Variables

Define each variable with its formula and data source.

**Example**:

> "We define the following independent variables:
>
> - **Treatment**: Binary indicator equal to 1 if the student's classroom used the intervention curriculum during the study year
> - **Prior achievement**: Standardized score on the previous year's reading assessment
> - **Class size**: Number of students enrolled in the student's assigned classroom as of October census
> - **Experience**: Years of teaching experience of the student's classroom teacher"

### Control Variables

Explain why each control variable is included -- it should control for an alternative explanation.

**Example**: "We control for prior achievement because students with higher baseline skills may learn at different rates regardless of intervention assignment, which could confound the estimated treatment effect (Bloom, Hill, Black, & Lipsey, 2008)."

## Statistical Models

### Specify the Model

Write out the regression equation explicitly.

> **Score_i = alpha + beta_1 x Treatment_i + beta_2 x PriorScore_i + beta_3 x ClassSize_i + beta_4 x Experience_i + epsilon_i**

### Explain Your Choices

- **Why this model?** (OLS, logit, multilevel model, difference-in-differences -- justify the choice)
- **Fixed effects**: Do you include unit fixed effects? Time fixed effects? Clustering levels? Why?
- **Standard errors**: How are they clustered? (By classroom? By school? By cohort?)
- **Identification**: What is your identification strategy for causal claims?

### Common Quantitative Approaches

| Method                            | When to Use                                      | Key Assumption                                    |
| --------------------------------- | ------------------------------------------------ | ------------------------------------------------- |
| **OLS regression**                | Continuous outcome, testing associations         | Linearity and exogeneity of regressors            |
| **Multilevel model**              | Units nested within groups (students in schools) | Independence across higher-level units            |
| **Difference-in-differences**     | Natural experiment with treatment/control groups | Parallel pre-treatment trends                     |
| **Regression discontinuity**      | Cutoff-based assignment rule                     | Continuity of potential outcomes at the threshold |
| **Instrumental variables (2SLS)** | Addressing endogeneity                           | Valid instrument (relevant and excludable)        |
| **Logit/probit**                  | Binary dependent variable                        | Correct distributional assumption                 |
| **Interrupted time series**       | Longitudinal data with a discrete policy change  | Stable trend in the absence of the intervention   |

## Limitations

Every methodology has limitations. Acknowledging them demonstrates intellectual honesty and strengthens your paper.

### Common Limitations

1. **Endogeneity**: "We cannot fully rule out reverse causality. While we use prior-year measures to reduce this concern, the possibility remains that unobserved student or family characteristics drive both program participation and outcomes."

2. **Generalizability**: "Our sample is drawn from a single urban district. Results may not generalize to rural settings or districts with different student population characteristics or resource levels."

3. **Data limitations**: "We use annual administrative records, which may mask within-year variation. Higher-frequency data could reveal dynamics not captured in our analysis."

4. **Measurement error**: "Our proxy for instructional quality (teacher experience) is an imperfect measure. More direct observation instruments, such as structured classroom observations, may capture different or more relevant dimensions of teaching practice."

## Common Mistakes

1. **Insufficient detail**: "We ran a regression" is not a methodology. Specify the model, variables, estimation approach, and how standard errors are handled.

2. **No justification for choices**: Every methodological choice should be justified. Why this model? Why these controls? Why this sample period or population?

3. **Ignoring threats to validity**: In most fields, the most important relationships are potentially confounded. At minimum, acknowledge the concern; ideally, address it with a clear identification strategy.

4. **Not reporting robustness checks**: Readers want to know if your results survive alternative specifications (different controls, different time periods, different variable definitions, or alternative samples).

5. **Vague variable definitions**: "We control for ability" -- measured how? A standardized test score? A teacher rating? The choice matters.

6. **Missing sample construction details**: Not explaining how you went from the raw data to your final analytic sample. Include a sample selection table.

## Key References

- Angrist, J.D. & Pischke, J.S. (2009). _Mostly Harmless Econometrics_, Princeton University Press.
- Wooldridge, J.M. (2020). _Introductory Econometrics: A Modern Approach_, 7th ed., Cengage.
- Shadish, W.R., Cook, T.D., & Campbell, D.T. (2002). _Experimental and Quasi-Experimental Designs for Generalized Causal Inference_, Houghton Mifflin.
- Creswell, J.W. & Creswell, J.D. (2018). _Research Design: Qualitative, Quantitative, and Mixed Methods Approaches_, 5th ed., SAGE.
