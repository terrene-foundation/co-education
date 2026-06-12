# Bloom's Taxonomy for Education

Bloom's taxonomy provides a hierarchy of cognitive skills that learners develop as they progress from novice to expert. Applying this framework ensures that curricula build systematically from basic recall to sophisticated analysis and original creation.

## The Six Levels

### Level 1: Remember

**Cognitive goal**: Recall facts, terms, and definitions from memory.

**Examples**:

- Define key terms and core concepts in a subject area
- List the components of a foundational model or framework
- Name the main categories within a discipline
- Recall a central formula or principle
- State the difference between two related concepts

**Assessment types**: Multiple choice, matching, fill-in-the-blank, flashcards.

**Example question**: "Which of the following best defines [concept X]? (a) ... (b) ... (c) ... (d) ..."

**Common pitfall**: Spending too much time at this level. Many courses never get past definitions. Learners need to move beyond memorization quickly.

### Level 2: Understand

**Cognitive goal**: Explain ideas, summarize concepts, translate between representations.

**Examples**:

- Explain why a key principle produces a particular outcome
- Describe how one variable relates to another within a system
- Summarize the relationship between two core concepts
- Interpret a data visualization or diagram
- Paraphrase a central concept in your own words

**Assessment types**: Short answer, explain-in-your-own-words, concept mapping, true/false with justification.

**Example question**: "In your own words, explain why [phenomenon X] occurs when [condition Y] changes. Use an analogy if helpful."

**Common pitfall**: Confusing "understand" with "remember." If a learner can recite a definition but cannot explain _why_ it holds, they are still at Level 1.

### Level 3: Apply

**Cognitive goal**: Use knowledge to solve problems, perform calculations, execute procedures.

**Examples**:

- Apply a framework or method to a new case or scenario
- Compute a quantity from given data using a learned procedure
- Build a basic model or plan for a specified situation
- Use a rule or heuristic to make a decision in context
- Work through a structured problem step by step

```python
# Apply: Use a learned formula to solve a specific problem
def apply_formula(input_value, parameter):
    """
    Apply the relevant formula to calculate an output.

    Learning objective: Students can use the formula
    to determine the result for a given set of inputs.
    """
    if input_value <= 0 or parameter <= 0:
        raise ValueError("Inputs must be positive")
    return (input_value / parameter) ** (1 / parameter) - 1

# Exercise: Given the following data, calculate the result
# using the formula. What does the output tell you?
result = apply_formula(18_500, 7)
print(f"Result: {result:.2%}")
```

**Assessment types**: Calculation exercises, worked problems, structured case exercises, code-along exercises.

**Example exercise**: "Given the following data for [subject area], apply the method you learned to compute [measure] for each case."

### Level 4: Analyze

**Cognitive goal**: Break down complex situations, compare alternatives, identify patterns, distinguish components.

**Examples**:

- Compare two approaches or strategies using relevant criteria
- Analyze a complex situation by decomposing it into contributing factors
- Distinguish between correlation and causation in data
- Identify the assumptions behind a model and evaluate their validity
- Evaluate competing explanations for an observed pattern

```python
import numpy as np

# Analyze: Compare two approaches on multiple dimensions
def analyze_approaches(results_a, results_b):
    """
    Analyze two approaches across multiple dimensions.

    Learning objective: Students can compare options using
    multiple criteria rather than a single metric.
    """
    comparison = {}

    for name, results in [("Approach A", results_a), ("Approach B", results_b)]:
        mean_result = np.mean(results)
        variability = np.std(results)
        trend = np.mean(np.diff(results))

        comparison[name] = {
            "Mean": f"{mean_result:.2f}",
            "Variability": f"{variability:.2f}",
            "Trend": f"{trend:.2f}",
        }

    return comparison

# Exercise: Which approach is "better"? The answer depends on
# what the analyst values — higher average, lower variability,
# or a positive trend. This is the analytical skill.
```

**Assessment types**: Case studies, comparative analysis, data interpretation exercises, written analysis with evidence.

**Example exercise**: "You are given two approaches to [problem]. Approach A achieves outcome X with characteristic Y. Approach B achieves outcome P with characteristic Q. Analyze which approach performs better on a given criterion, and explain under what circumstances a practitioner might prefer each one."

### Level 5: Evaluate

**Cognitive goal**: Make judgments, critique arguments, assess validity, justify decisions.

**Examples**:

- Evaluate whether a specific argument or claim is well-supported by evidence
- Critique a study or analysis for potential biases or limitations
- Assess whether a recommendation is appropriate for a specific context
- Judge the credibility of a source's claims
- Evaluate the trade-offs of competing approaches to a problem

**Assessment types**: Critique assignments, peer review, debate exercises, decision justification essays.

**Example exercise**: "An article claims that [method X] 'consistently outperforms alternatives by a large margin.' The evidence shown covers a short period with favorable conditions. Write a 300-word critique evaluating this claim. Consider: (1) Is the evidence period sufficient? (2) What biases might be present? (3) What information is missing? (4) What additional evidence would you need?"

**Common pitfall**: Skipping to evaluation without building the analytical foundation. Learners cannot evaluate competing approaches if they cannot first analyze the evidence.

### Level 6: Create

**Cognitive goal**: Design, construct, produce original work by combining elements in new ways.

**Examples**:

- Design a plan or solution for a specific goal and context
- Create an original argument, model, or framework
- Build an analytical tool or system for a defined purpose
- Develop a proposal or recommendation grounded in evidence
- Construct a novel approach by synthesizing ideas across sources

```python
# Create: Design a goal-based plan or allocation
def design_plan(
    context_factor, priority_level, time_horizon, goals
):
    """
    Create a plan based on a given profile and goals.

    Learning objective: Students synthesize knowledge of
    constraints, priorities, and time horizon to create a
    coherent, justified plan.

    Note: This is an educational exercise.
    """
    # Base allocation (illustrative rule of thumb)
    base = max(20, min(90, 110 - context_factor))

    # Adjust for priority level (scale: 1=conservative, 5=ambitious)
    priority_adjustment = (priority_level - 3) * 5
    primary_pct = max(20, min(90, base + priority_adjustment))

    # Adjust for time horizon
    if time_horizon < 3:
        primary_pct = min(primary_pct, 30)
    elif time_horizon < 5:
        primary_pct = min(primary_pct, 50)

    secondary_pct = 100 - primary_pct

    allocation = {
        "Primary Component A": round(primary_pct * 0.50),
        "Primary Component B": round(primary_pct * 0.30),
        "Primary Component C": round(primary_pct * 0.20),
        "Secondary Component A": round(secondary_pct * 0.60),
        "Secondary Component B": round(secondary_pct * 0.25),
        "Secondary Component C": round(secondary_pct * 0.15),
    }

    return allocation

# Exercise: Create plans for three different profiles
# and justify your allocation decisions.
```

**Assessment types**: Design projects, written plans, model building, strategy design and defense, capstone projects.

**Example capstone**: "Design a complete plan for a hypothetical scenario (specify the context, constraints, and goals). Your plan should include: an allocation or structure, a rationale for each decision, a timeline or schedule, a monitoring approach, and a written justification for each choice."

## Progression Pattern

```
Remember    -> Define the key concept
Understand  -> Explain what the concept means and why it matters
Apply       -> Use the concept to solve a specific problem
Analyze     -> Compare the concept's role across different cases
Evaluate    -> Assess whether a given application is well-justified
Create      -> Build an original model or plan using the concept
```

## Mapping Bloom's to Module Design

| Module Component     | Primary Bloom's Level | Example                  |
| -------------------- | --------------------- | ------------------------ |
| Concept introduction | Remember, Understand  | Video lecture, reading   |
| Worked examples      | Apply                 | Instructor-led problems  |
| Practice exercises   | Apply, Analyze        | Problem sets             |
| Case studies         | Analyze, Evaluate     | Real-world scenarios     |
| Discussion prompts   | Evaluate              | Peer discussion          |
| Capstone project     | Create                | Design and defend a plan |

## Common Pitfalls in Education Design

1. **Stuck at Remember/Understand**: Many courses teach definitions and theory but never progress to application. Learners leave "knowing about" a subject but unable to _do_ anything with that knowledge.

2. **Jumping to Create without foundations**: Asking learners to design original solutions before they can apply core methods or analyze relevant evidence.

3. **Testing at a lower level than teaching**: Teaching at the Analyze level but testing only at Remember (multiple choice on definitions).

4. **Ignoring the affective domain**: Learning decisions often involve motivation, confidence, and prior beliefs. Behavioral and psychological concepts should be woven into every level.

## Cross-References

- See **[curriculum-patterns](curriculum-patterns.md)** for sequencing modules that build through Bloom's levels
- See **[assessment-design](assessment-design.md)** for assessment types matched to each Bloom's level
- See **[gamification](gamification.md)** for engagement strategies at each cognitive level
