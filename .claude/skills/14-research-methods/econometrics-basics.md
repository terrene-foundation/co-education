# Econometrics Basics

Econometrics applies statistical methods to observational and experimental data. It is the primary tool for testing hypotheses in empirical research — from whether an educational intervention improves test scores, to whether a policy change affects health outcomes, to whether a management practice influences organizational performance.

## Why Quantitative Methods Matter for Researchers

Theories generate testable predictions. An intervention hypothesis predicts that treated participants will show measurably different outcomes than untreated ones. A structural hypothesis predicts that observable conditions will correlate with measurable results. Econometrics provides the tools to test these predictions with real data.

## Ordinary Least Squares (OLS) Regression

OLS is the foundation of quantitative empirical research. It estimates the linear relationship between a dependent variable (what you are trying to explain) and one or more independent variables (the explanatory factors).

### The Model

> **Y*i = beta_0 + beta_1 x X*(1,i) + beta*2 x X*(2,i) + ... + beta*k x X*(k,i) + epsilon_i**

Where:

- Y_i = Dependent variable for observation i
- X\_(j,i) = Independent variable j for observation i
- beta_0 = Intercept (the value of Y when all X's are zero)
- beta_j = Slope coefficient (the change in Y for a one-unit change in X_j, holding all other X's constant)
- epsilon_i = Error term (everything that affects Y but is not captured by the X's)

### OLS Estimator

OLS minimizes the sum of squared residuals:

> **min sum of (Y_i - Y_hat_i)^2**

The resulting coefficient estimates (in matrix notation):

> **beta_hat = (X'X)^(-1) X'Y**

### Worked Example: Single Regression

**Question**: Is class size related to student test scores?

Model: Score_i = beta_0 + beta_1 x ClassSize_i + epsilon_i

**Regression output**:

| Variable  | Coefficient | Std. Error | t-statistic | p-value |
| --------- | ----------- | ---------- | ----------- | ------- |
| Intercept | 82.5        | 1.8        | 45.8        | <0.001  |
| ClassSize | -0.35       | 0.09       | -3.89       | <0.001  |

**Interpretation**: A one-student increase in class size is associated with a 0.35-point decrease in test scores, controlling for nothing else. This is consistent with the well-documented "class-size effect" — smaller classes tend to produce higher average scores.

### OLS Assumptions (Gauss-Markov)

For OLS estimates to be BLUE (Best Linear Unbiased Estimator):

1. **Linearity**: The relationship between Y and X is linear in parameters
2. **No perfect multicollinearity**: No independent variable is a perfect linear function of another
3. **Exogeneity**: E(epsilon | X) = 0 -- the error term is uncorrelated with the regressors
4. **Homoscedasticity**: Var(epsilon | X) = sigma^2 -- constant error variance
5. **No autocorrelation**: Cov(epsilon_i, epsilon_j) = 0 for i != j
6. **Normality** (for inference): Errors are normally distributed (needed for t-tests and F-tests in small samples)

## Hypothesis Testing

### t-Test for Individual Coefficients

Tests whether a single coefficient is statistically different from zero (or another hypothesized value).

> **t = (beta_hat - beta_0) / SE(beta_hat)**

Where beta_0 is the hypothesized value (usually 0) and SE is the standard error of the coefficient.

**Decision rule**: Reject H_0 if |t| > t_critical (approximately 1.96 for 95% confidence with large samples).

### Significance Levels

| Symbol | p-value  | Interpretation                       |
| ------ | -------- | ------------------------------------ |
| \*     | p < 0.10 | Marginally significant               |
| \*\*   | p < 0.05 | Significant (conventional threshold) |
| \*\*\* | p < 0.01 | Highly significant                   |

**Important**: Statistical significance does not imply practical significance. A coefficient of 0.0001 can be statistically significant with a large enough sample but substantively meaningless.

### F-Test for Joint Significance

Tests whether a group of coefficients are jointly different from zero.

> **F = [(R^2_unrestricted - R^2_restricted) / q] / [(1 - R^2_unrestricted) / (n - k - 1)]**

Where q = number of restrictions, n = observations, k = regressors.

## R-Squared (R^2)

The proportion of variation in Y explained by the model.

> **R^2 = 1 - (SS_residual / SS_total) = 1 - [sum(Y_i - Y_hat_i)^2 / sum(Y_i - Y_bar)^2]**

**Interpretation**: R^2 = 0.25 means the model explains 25% of the variation in Y.

### Adjusted R-Squared

Penalizes for adding more variables (prevents overfitting).

> **R^2_adj = 1 - [(1 - R^2)(n - 1) / (n - k - 1)]**

**Typical R^2 values by research context**:

- Cross-sectional individual-level outcomes: 0.02-0.20 (explaining individual variation is hard)
- Survey-based attitude scales with many predictors: 0.30-0.60
- Aggregate-level panel data: 0.50-0.90

**Low R^2 does not mean the model is useless**: In cross-sectional studies, even R^2 of 0.05 can be substantively important if the associated effect size is meaningful for the population affected.

## Common Econometric Problems

### Multicollinearity

**Problem**: Two or more independent variables are highly correlated, making it difficult to isolate their individual effects.

**Detection**:

- Variance Inflation Factor (VIF): VIF > 10 indicates serious multicollinearity

> **VIF_j = 1 / (1 - R^2_j)**

where R^2_j is from regressing X_j on all other independent variables.

- High pairwise correlations (> 0.8) in the correlation matrix

**Solutions**: Drop one of the correlated variables, use principal component analysis, or accept wider standard errors if both variables are theoretically important.

### Heteroscedasticity

**Problem**: The variance of the error term is not constant across observations. Common when the units of analysis vary substantially in size or intensity (e.g., larger schools or organizations tend to have larger residuals).

**Detection**: Breusch-Pagan test or White test.

**Consequence**: OLS coefficients are still unbiased, but standard errors are wrong -- leading to incorrect t-statistics and p-values.

**Solution**: Use heteroscedasticity-robust standard errors (White standard errors):

> **Robust SE = sqrt(diagonal elements of (X'X)^(-1) X' diag(e_i^2) X (X'X)^(-1))**

In practice: report robust standard errors as a baseline in cross-sectional research.

### Autocorrelation

**Problem**: Error terms are correlated across observations. Common in time-series data (today's measurement is related to yesterday's) or in clustered data (students within the same classroom are more similar to each other than to students in other classrooms).

**Detection**: Durbin-Watson test (for first-order autocorrelation).

> **DW = sum from t=2 to T of: (e*t - e*(t-1))^2 / sum from t=1 to T of: e_t^2**

DW near 2: no autocorrelation. DW near 0: positive autocorrelation. DW near 4: negative autocorrelation.

**Solution**: Newey-West standard errors (HAC -- Heteroscedasticity and Autocorrelation Consistent) for time series; clustered standard errors for grouped data.

### Endogeneity

**Problem**: The independent variable is correlated with the error term, violating the exogeneity assumption. This means your OLS estimate is biased.

**Three sources**:

1. **Omitted variable bias**: A variable that affects both X and Y is not included
2. **Reverse causality**: Y affects X (e.g., does a treatment affect outcomes, or do pre-existing outcomes affect who receives the treatment?)
3. **Measurement error**: Your proxy for X contains noise that is correlated with Y

**Solutions**:

- **Instrumental Variables (IV/2SLS)**: Find a variable (instrument) that affects X but does not directly affect Y
- **Fixed Effects**: Control for time-invariant unobserved heterogeneity
- **Difference-in-Differences**: Exploit a natural experiment
- **Regression Discontinuity**: Exploit a cutoff that creates quasi-random assignment

## Event Studies

A methodology for measuring outcomes before and after a well-defined event, commonly used in policy evaluation, program assessment, and any research where a discrete change occurs at a known point in time.

### The Method

1. **Define the event**: Policy change, program launch, treatment date, intervention
2. **Define the event window**: The period around the event during which outcomes are measured
3. **Estimate expected outcomes**: Using a baseline model over a pre-event estimation window

> **Y_it = alpha_i + beta_i x Z_t + epsilon_it** (estimated over the estimation window)

4. **Calculate residual outcomes**: AR_it = Y_it - (alpha_hat + beta_hat x Z_t) over the event window
5. **Aggregate**: Cumulative Abnormal Outcome (CAO) = sum of residuals over the event window
6. **Test significance**: t-statistic = CAO / SE(CAO)

### Worked Example: Event Study

**Event**: Policy intervention announced on Day 0 that changes a measured outcome.

Estimation window: Day -250 to Day -20 (pre-event baseline).
Baseline model estimates: alpha = 0.80, beta = 0.5

| Day | Actual Outcome | Baseline Factor | Expected Outcome | Residual |
| --- | -------------- | --------------- | ---------------- | -------- |
| -1  | 82.5           | 0.4             | 81.0             | 1.5      |
| 0   | 86.2           | 0.3             | 81.0             | 5.2      |
| +1  | 83.1           | -0.2            | 80.0             | 3.1      |

CAO[-1,+1] = 1.5 + 5.2 + 3.1 = **9.8 units**

If SE(CAO) = 2.3 units, then t = 9.8 / 2.3 = **4.26** (highly significant).

**Interpretation**: The measured outcome responded positively to the intervention, with a cumulative residual of 9.8 units over three periods relative to the pre-event baseline.

## Common Mistakes

1. **Not using robust standard errors**: In most applied research, heteroscedasticity is the norm. Use White or clustered standard errors as appropriate to your data structure.

2. **Ignoring endogeneity**: Most interesting causal relationships involve some degree of endogeneity. At minimum, discuss the concern and what you have done to address it.

3. **Confusing statistical and practical significance**: Report both. A coefficient of 0.001 with t = 5.0 is statistically significant but may be substantively trivial.

4. **Data mining without correction**: Testing 100 variables and reporting the 5 that are significant will produce false positives. Use Bonferroni correction or pre-registered hypotheses and out-of-sample testing.

5. **Misinterpreting R-squared**: A low R^2 does not mean the regression is useless. In cross-sectional studies, explaining even a small fraction of individual-level variance can represent an important population-level effect.

6. **Choosing the wrong event window**: Too narrow misses the full effect; too wide includes confounding events. Justify your choice and test robustness with alternative windows.

## Key References

- Wooldridge, J.M. (2020). _Introductory Econometrics: A Modern Approach_, 7th ed., Cengage. Chapters 1-8.
- Angrist, J.D. & Pischke, J.S. (2009). _Mostly Harmless Econometrics_, Princeton University Press.
- Angrist, J.D. & Pischke, J.S. (2015). _Mastering 'Metrics: The Path from Cause to Effect_, Princeton University Press.
- MacKinlay, A.C. (1997). "Event Studies in Economics and Finance." _Journal of Economic Literature_, 35(1), 13-39. (Canonical event-study methodology reference, applicable across domains.)
- Imbens, G.W. & Wooldridge, J.M. (2009). "Recent Developments in the Econometrics of Program Evaluation." _Journal of Economic Literature_, 47(1), 5-86.
