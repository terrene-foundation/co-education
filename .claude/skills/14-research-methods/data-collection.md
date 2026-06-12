# Data Collection

Empirical research across every discipline requires data. Knowing where to find data, what each source covers, and how to cite it properly is a foundational research skill.

## Why Data Collection Matters

The quality of your research is bounded by the quality of your data. Using the wrong source, misunderstanding variable definitions, or failing to account for data quirks (survivorship bias, look-ahead bias, backfill bias) can invalidate your entire study.

## Major General-Purpose Data Sources

### Government and National Statistics Offices

**Access**: Typically free via agency websites
**Coverage**: Official statistics on population, economy, labor, health, education, environment, and more

National statistics offices (e.g., a country's central statistics bureau) publish authoritative administrative and survey data. Coverage varies by country but generally includes:

| Data Type                   | Examples                                  | Use For                                           |
| --------------------------- | ----------------------------------------- | ------------------------------------------------- |
| Population and demographics | Census microdata, vital records           | Social science, public health, education research |
| Labor and employment        | Employment surveys, wage data             | Labor economics, policy analysis                  |
| Prices and output           | Consumer price indices, national accounts | Macroeconomic analysis, inflation adjustment      |
| Health and education        | Administrative records, program data      | Public policy, program evaluation                 |
| Environment                 | Emissions registries, weather records     | Environmental science, climate research           |

**How to cite**: "Data obtained from [Agency Name], [Dataset name], [URL], accessed [date]."

### Open Government Data Portals

**Access**: Free (e.g., data.gov, data.europa.eu, and equivalents in most countries)
**Coverage**: Cross-agency collections of machine-readable datasets

Most national and regional governments operate open data portals that aggregate datasets from multiple agencies. These are good starting points when you do not yet know which specific agency holds the data you need.

**How to cite**: "Data from [Portal name], [Dataset title], accessed [date] at [URL]."

### World Bank Open Data

**Provider**: The World Bank
**Access**: Free (data.worldbank.org)
**Coverage**: Development indicators for 200+ countries, 1960-present

**Key indicators**:

- GDP per capita and growth rates
- Inflation and price indices
- Education enrollment and completion
- Health outcomes (mortality, disease burden)
- Governance and rule-of-law indices
- Access to infrastructure and services

**How to cite**: "Data from World Bank, World Development Indicators database, [indicator name], accessed [date]."

### United Nations Data (UNdata)

**Provider**: United Nations Statistics Division
**Access**: Free (data.un.org)
**Coverage**: Demographic, social, economic, and environmental statistics across member states

**Key datasets**:

- Demographic Yearbook: births, deaths, migration, population structure
- National Accounts Statistics: GDP, expenditure, production
- Energy Statistics: production, consumption, supply by source
- Environment Statistics: freshwater, biodiversity, waste

**How to cite**: "Data from UNdata, [Dataset name], United Nations Statistics Division, accessed [date]."

### OECD Data

**Provider**: Organisation for Economic Co-operation and Development
**Access**: Free for most datasets (data.oecd.org)
**Coverage**: Comparable cross-country data for OECD and partner countries

**Key datasets**:

- Health at a Glance: health system performance, outcomes
- Education at a Glance: enrolment, attainment, expenditure
- PISA: student assessment outcomes across countries
- Labour Force Statistics: employment, unemployment, hours worked
- Environmental indicators: greenhouse gases, water, biodiversity

**How to cite**: "Data from OECD, [Dataset name], accessed [date], doi:[DOI if available]."

### Institutional Repositories and Disciplinary Archives

**Access**: Free or via university subscription depending on the archive
**Coverage**: Varies by discipline; typically includes curated datasets from published research

Most academic disciplines maintain data archives where researchers deposit datasets alongside published studies:

| Discipline            | Example Archives                 | Content                                                    |
| --------------------- | -------------------------------- | ---------------------------------------------------------- |
| Social sciences       | ICPSR, UK Data Service           | Survey data, administrative records, experimental data     |
| Political science     | Harvard Dataverse, GESIS         | Cross-national surveys, election data, legislative records |
| Public health         | IPUMS Health Surveys, CDC WONDER | Health interview and examination surveys                   |
| Education             | NCES, PISA data portal           | Student assessments, longitudinal cohort studies           |
| Environmental science | PANGAEA, ICOS                    | Earth observation, oceanographic, atmospheric data         |
| Experimental sciences | OSF, Zenodo                      | Replication datasets, lab experiment records               |

**How to cite**: Follow the repository's preferred citation format; most generate citations automatically. Always include the persistent identifier (DOI or handle).

### Survey Microdata

**Access**: Public-use files free; restricted-access files via data enclaves or approved projects
**Coverage**: Individual-level responses to structured questionnaires

Large-scale surveys generate microdata — individual records rather than aggregate statistics. Examples include labor-force surveys, household income and expenditure surveys, health examination surveys, and academic achievement assessments. Microdata enable subgroup analyses that aggregate tables cannot support.

**Note on restricted data**: Some microdata contain information that could identify respondents and are available only through secure enclaves or formal data-access agreements. Plan for the application timeline (weeks to months) early in your project.

**How to cite**: "Data from [Survey name], [Wave/year], [Organization], [Access mode], accessed [date]."

### APIs and Programmatic Data Access

Many repositories and agencies expose data via application programming interfaces (APIs) — structured access points that allow you to request specific variables, geographies, and time periods without downloading entire databases.

**Key considerations when using APIs**:

- Rate limits (maximum requests per time period)
- Terms of use and attribution requirements
- Version stability (API endpoints can change; pin the version you used)
- Documentation of the query parameters used (part of your reproducibility record)

**How to cite**: "Data retrieved via [API name], [version/endpoint], [Organization], on [date]. Query parameters: [describe or link to query script]."

## Data Quality Considerations

### Survivorship Bias

**Problem**: A dataset may include only entities that persisted to the end of the observation window, excluding those that dropped out, failed, or were otherwise removed.

**Impact**: Overstates average outcomes for surviving units (those that did not survive typically had below-average outcomes before exiting).

**Solution**: Confirm whether the archive includes complete records for all entities that entered the sample — including those that exited mid-period. Obtain exit records or attrition-flagging variables where available. Document any known attrition in your methodology section.

### Look-Ahead Bias

**Problem**: Using information in your analysis that was not publicly available at the time the outcome occurred.

**Impact**: Inflates apparent predictability of outcomes or events. Results that look strong in the analysis may not have been achievable in practice because the "predictor" was not yet observable.

**Solution**: When using administrative or registry data merged with outcome data, lag predictors by the realistic reporting delay. Use point-in-time snapshots of data when archives support them. Document the temporal relationship between your predictors and outcomes explicitly.

### Backfill Bias

**Problem**: When new records are added to a database, their historical data may be entered retroactively — but only for entities that survived long enough to be included.

**Impact**: Similar to survivorship bias — inflates historical averages because records for failed or discontinued entities are not backfilled.

**Solution**: Use "as-reported" data rather than revised or restated data where the archive distinguishes them. Note when your database was accessed and what revision state the data represent.

### Non-Response and Coverage Bias

**Problem**: Survey respondents differ systematically from non-respondents; administrative records cover only the population that interacts with the relevant institution.

**Impact**: Estimates may not generalize to the target population.

**Solution**: Examine response rates, use survey weights where provided, and acknowledge coverage gaps in the limitations section.

## Worked Example: Constructing a Research Dataset

**Research question**: Does access to early childhood education programs improve primary school readiness outcomes?

**Step 1: Identify needed data**

- Outcome measure: school readiness assessment scores (from a national education survey or administrative school enrollment data)
- Program participation: enrollment records from the relevant government program (from an administrative registry or household survey)
- Control variables: household income level, caregiver education, urban/rural location, child age (from a linked household survey or census)

**Step 2: Specify sample**

- Period: three cohorts of children reaching school-entry age over a five-year window
- Universe: all children in the target age range residing in the study region
- Exclusions: children with missing baseline assessments (document the exclusion and test whether excluded cases differ from included ones)
- Merge: link program participation records to outcome records using a consistent individual identifier; document the linkage method and any unmatched cases

**Step 3: Data citation paragraph**

> "We construct our analysis sample from two administrative sources. School readiness assessment data are from the [Assessment Program Name], administered by the [Ministry/Agency] and accessed under data-sharing agreement [reference number] on [date]. Early childhood program enrollment records are from the [Program Name] administrative registry, provided by [Agency] for cohort years [years]. We link the two sources using the national education identifier, retaining all children with a valid match. Unmatched records (N = [n], [x]% of the potential sample) are excluded; a balance check confirms no significant differences on observable baseline characteristics between matched and unmatched cases (see Appendix Table A1)."

## Common Mistakes

1. **Not specifying the exact source and access date**: "Data from a government survey" is insufficient. Specify the survey name, wave, access mode, and date. Different waves of the same survey can have substantially different coverage or variable definitions.

2. **Ignoring attrition and non-response**: Using only complete cases without examining whether incomplete cases differ systematically biases your results. Always characterize attrition and test for differential dropout.

3. **Confusing similarly named variables**: Many datasets contain variables with nearly identical names that differ in important ways (e.g., gross versus net income, total versus completed years of education). Always verify variable definitions in the codebook before using them.

4. **Temporal mismatch between predictors and outcomes**: Merging predictor and outcome records from different time points without accounting for realistic reporting lags or policy implementation timelines introduces look-ahead contamination. Document the date each variable was recorded.

5. **Not documenting sample construction**: Your methodology section must explain every step from raw source files to the final analysis sample, including all filters, exclusions, and linkage decisions with the counts at each step.

6. **Using convenience data without understanding its limitations**: Openly available datasets that are easy to access (public-use survey files, scraped web data, pre-packaged research datasets) may have been processed or weighted in ways that affect your analysis. Read the technical documentation before treating any variable as face-value.

## Key References

- Shadish, W.R., Cook, T.D., & Campbell, D.T. (2002). _Experimental and Quasi-Experimental Designs for Generalized Causal Inference_. Houghton Mifflin. (Chapters on data sources and threats to validity)
- King, G., Keohane, R.O., & Verba, S. (1994). _Designing Social Inquiry: Scientific Inference in Qualitative Research_. Princeton University Press. (Chapter 2 on data and inference)
- Groves, R.M., et al. (2009). _Survey Methodology_ (2nd ed.). Wiley. (Coverage and non-response error)
- Wilkinson, M.D., et al. (2016). "The FAIR Guiding Principles for scientific data management and stewardship." _Scientific Data_, 3, 160018. (FAIR: Findable, Accessible, Interoperable, Reusable)
