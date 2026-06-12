# Data Visualization

Choosing the right chart for your data is as important as the analysis itself. A well-chosen visualization makes patterns obvious; a poorly chosen one hides them. This guide covers the chart types most commonly needed in academic and professional presentations, when to use each, and the most common mistakes.

## Why Data Visualization Matters

Presentations are data-rich. Survey results, experimental outcomes, category breakdowns, and comparative measures all benefit from visual representation. A clear chart can convey in five seconds what a table of numbers takes five minutes to parse.

## Choosing the Right Chart

### The Decision Framework

| What You Want to Show                  | Best Chart Type                       |
| -------------------------------------- | ------------------------------------- |
| **Trend over time**                    | Line chart                            |
| **Comparison across categories**       | Bar chart (horizontal or vertical)    |
| **Composition / parts of a whole**     | Stacked bar, pie (limited), waterfall |
| **Relationship between two variables** | Scatter plot                          |
| **Distribution of values**             | Histogram, box plot                   |
| **Change decomposition**               | Waterfall chart                       |
| **Range / uncertainty**                | Fan chart, confidence bands           |
| **Geographical patterns**              | Choropleth / heat map                 |

## Chart Types

### Line Chart (Time Series)

**Best for**: Tracking a measure over time — survey scores across semesters, experimental results across trials, outcome measures over a study period.

**Design principles**:

- X-axis = time, Y-axis = value
- Use consistent time intervals
- Label axes clearly with units
- Include a title that states the insight, not just the topic
- Limit to 4-5 lines maximum; beyond that, use small multiples

**Good title**: "Student satisfaction scores rose 18 points after the curriculum revision in Year 2"
**Bad title**: "Satisfaction Scores"

**Tip**: When comparing series that start at very different absolute values, normalize to a common starting point (index to 100) so the audience can read relative change rather than raw magnitude.

### Bar Chart

**Best for**: Comparing values across categories (survey response rates by group, outcome measures by condition, scores across cohorts).

**Design principles**:

- Order bars by value (largest to smallest) unless there is a natural order (chronological, geographical)
- Use horizontal bars when category labels are long
- Start the Y-axis at zero (truncating exaggerates differences)
- Use a single color for all bars unless highlighting a specific bar

**Application**: Mean scores by experimental condition, response rates by demographic group, performance across categories.

### Scatter Plot

**Best for**: Showing the relationship between two continuous variables (study hours vs. exam score, class size vs. pass rate, intervention dosage vs. outcome).

**Design principles**:

- Each point represents one observation
- Add a trend line (regression line) to show the relationship
- Label notable outliers
- Include R-squared if showing a regression relationship

**Application**: Effect-size plots comparing two measures across studies, dose-response relationships, predictor-outcome scatter in a regression analysis.

### Waterfall Chart

**Best for**: Showing how a starting value changes through a series of additions and subtractions (score attribution, contribution breakdown, change decomposition).

**Design principles**:

- Start with the initial value on the left
- Show additions as upward bars (green) and subtractions as downward bars (red)
- End with the final value on the right
- Label each bar with its value

**Application**:

- Decomposing a composite outcome into contributing factors
- Showing how a baseline measure shifts across stages of an intervention
- Attributing a change in aggregate results to individual components

### Worked Example: Outcome Attribution Waterfall

Starting value: Overall course score = 72%

| Component              | Contribution |
| ---------------------- | ------------ |
| Lecture attendance     | +4.2%        |
| Assignment completion  | +3.8%        |
| Peer collaboration     | +1.5%        |
| Late submissions       | -2.1%        |
| Technical difficulties | -0.9%        |
| **Adjusted baseline**  | **65%**      |
| **Net improvement**    | **+7%**      |

This is ideal for a waterfall chart: the audience sees exactly where the improvement came from and what held it back.

### Histogram

**Best for**: Showing the distribution of a continuous variable — response times, test scores, measurement values, or any continuous outcome.

**Design principles**:

- Choose bin widths that reveal the shape without being too granular or too coarse
- Show the normal distribution overlay when testing for normality
- Mark the mean and key percentiles

**Application**: Distribution of exam scores across a cohort, response-time distributions in a psychology study, distribution of outcomes from a simulation.

### Box Plot

**Best for**: Comparing distributions across categories.

**Shows**: Median, quartiles (Q1, Q3), whiskers (typically 1.5 x IQR), and outliers.

**Application**: Comparing score distributions across instructional groups, comparing variability across experimental conditions, visualizing spread within categories.

## Design Principles for All Charts

### 1. Data-Ink Ratio

Maximize the proportion of ink devoted to data. Remove:

- Unnecessary gridlines (keep only light horizontal gridlines)
- 3D effects (always)
- Decorative backgrounds
- Redundant legends (label lines directly instead)
- Borders and boxes around the chart

### 2. Direct Labeling

Label data series directly on the chart rather than using a separate legend. This eliminates the back-and-forth between chart and legend.

### 3. Consistent Color Coding

Assign colors meaningfully and maintain them throughout your presentation:

- Same category = same color on every chart
- Use intuitive colors where convention exists (red for negative, green for positive)
- Use color saturation to indicate magnitude

### 4. Annotation

Add text annotations to highlight the insight. Call out key events, turning points, or notable values directly on the chart.

**Example**: On a time series of student outcomes, annotate "Curriculum redesign implemented" at the point where the trend changes direction.

### 5. Source Attribution

Every chart must include a data source line at the bottom: "Source: Course records, Spring 2026" or "Source: Author's calculations using publicly available survey data."

## Common Mistakes

1. **Truncated Y-axis on bar charts**: Starting the Y-axis at 50 instead of 0 makes a difference of 52 vs. 55 look enormous. Always start bar charts at zero.

2. **Pie charts for more than 4-5 categories**: Humans are bad at comparing angles. If you have more than 5 categories, use a horizontal bar chart instead.

3. **3D charts**: Never use 3D effects. They distort proportions, add visual noise, and make values harder to read.

4. **Dual Y-axes**: Two Y-axes on the same chart can be misleading because the scales are arbitrary. If you must use dual axes, clearly label both and use distinct visual styles (e.g., bars for one, line for the other).

5. **Chartjunk**: Clip art, decorative images, excessive color, gradient fills. Every visual element should represent data.

6. **Not telling the audience what to see**: Showing a complex chart without guiding the audience's attention. Always tell them what to look at: "As you can see in the upper right, the trend reverses after 2018."

## Key References

- Tufte, E.R. (2001). _The Visual Display of Quantitative Information_. 2nd ed. Graphics Press.
- Schwabish, J. (2021). _Better Data Visualizations: A Guide for Scholars, Researchers, and Wonks_. Columbia University Press.
- Knaflic, C.N. (2015). _Storytelling with Data: A Data Visualization Guide for Business Professionals_. Wiley.
- Few, S. (2012). _Show Me the Numbers: Designing Tables and Graphs to Enlighten_. 2nd ed. Analytics Press.
