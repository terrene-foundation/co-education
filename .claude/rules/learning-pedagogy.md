---
paths:
  - "workspaces/**"
---

# Learning & Pedagogy Rules

## Scope

These rules apply to all educational content, curriculum files, lesson plans, exercises, tutorials, and instructional materials (`**/curriculum/**`, `**/lessons/**`, `**/tutorials/**`, `**/exercises/**`, `**/*lesson*`, `**/*tutorial*`, `**/*curriculum*`, `**/*exercise*`). They apply regardless of subject domain — science, history, mathematics, language, or any other field.

## MUST Rules

### 1. Use Progressive Difficulty

All educational content MUST follow a progressive difficulty structure: beginner, then intermediate, then advanced. Each level MUST build on the previous one.

**Correct Structure**:

```
Module: Cell Biology
  - Beginner: What is a cell? (Basic structure — membrane, nucleus, cytoplasm)
  - Intermediate: How cells work (Respiration, protein synthesis, cell division)
  - Advanced: Cell regulation (Gene expression, signaling pathways, apoptosis)
```

**Incorrect Structure**:

```
Module: Cell Biology
  - Lesson 1: Apoptosis signaling cascades    # Jumps to advanced immediately
  - Lesson 2: What is a cell membrane?        # Basics after advanced — disorienting
```

**Enforced by**: intermediate-reviewer
**Violation**: HIGH priority fix

### 2. Include Worked Examples Before Exercises

Every new concept MUST include at least one fully worked example before presenting exercises for the learner to attempt independently.

**Correct Pattern**:

```markdown
## Calculating Average Speed

Average speed measures how much distance is covered per unit of time.

**Formula**: speed = distance ÷ time

### Worked Example

A cyclist travels 45 km in 3 hours.

speed = 45 km ÷ 3 h = 15 km/h

The cyclist's average speed is 15 km/h.

### Exercise

Calculate the average speed of a runner who covers 10 km in 50 minutes.
```

**Incorrect Pattern**:

```markdown
## Calculating Average Speed

Formula: speed = distance ÷ time

### Exercise

Calculate the average speed of a runner who covers 10 km in 50 minutes.
```

(No worked example — learner must figure out the formula application alone.)

**Enforced by**: intermediate-reviewer
**Violation**: HIGH priority fix

### 3. Explain "Why" Not Just "How"

All instructional content MUST explain the motivation and reasoning behind a concept, not just the mechanical steps.

**Correct**:

```markdown
## Why We Use Scientific Notation

Very large and very small numbers appear across science — the mass of a proton
(0.0000000000000000000000000016726 kg) and the distance to a nearby star
(40,000,000,000,000 km) are both unwieldy to write and compare. Scientific notation
converts any number to a compact form (a × 10^n) so it can be read, compared, and
used in calculations without transcription errors.
```

**Incorrect**:

```markdown
## Scientific Notation

To convert a number to scientific notation, move the decimal point until one
non-zero digit remains to its left, then multiply by 10 raised to the number
of places you moved.
```

(Tells the learner what to do, but not why they would want to.)

**Enforced by**: intermediate-reviewer
**Violation**: HIGH priority fix

### 4. Connect New Concepts to Prerequisites

Every lesson MUST explicitly state its prerequisites and reference how new material relates to previously covered topics.

**Correct**:

```markdown
## Lesson: Reading a Primary Source

### Prerequisites

- [Lesson 2: What Is a Primary Source?](/lessons/02-primary-sources) — you should be comfortable distinguishing primary from secondary sources
- [Lesson 4: Historical Context](/lessons/04-context) — understanding how to situate a document in its time and place

### Connection to Prior Learning

In Lesson 2, you learned what makes a source "primary" — created at the time of the
events it records. In Lesson 4, you learned to ask: what was happening when this
was written? Reading a primary source combines both skills: you evaluate what the
author recorded AND why the context shapes what they noticed, emphasized, or omitted.
```

**Enforced by**: intermediate-reviewer
**Violation**: HIGH priority fix

### 5. Use Real-World Analogies

Complex abstract concepts MUST include at least one real-world analogy to anchor unfamiliar ideas in familiar experience.

**Examples of Good Analogies**:

```markdown
**Natural selection** is like a filter that keeps letting certain coins through while
blocking others. Traits that help an organism survive and reproduce pass to the
next generation; traits that hinder survival are filtered out over time.

**Exponential growth** works like a snowball rolling downhill — it starts small, but as
it rolls it picks up more snow, and the bigger it gets, the faster it grows.

**Osmosis** is like a crowd where only small people can squeeze through a turnstile.
Water molecules (small) pass through the cell membrane freely; larger dissolved
particles cannot, so water flows toward where the crowd is most concentrated.

**Opportunity cost** is like choosing between two events on the same evening. Whatever
you pick, what you give up — the enjoyment of the other event — is the real cost of
your choice, even though no money changes hands.
```

**Enforced by**: intermediate-reviewer
**Violation**: HIGH priority fix

### 6. Use Bloom's Taxonomy for Learning Objectives

All lessons and modules MUST define learning objectives using Bloom's Taxonomy verbs to ensure coverage across cognitive levels.

**Bloom's Taxonomy Reference** (lowest to highest cognitive level):

| Level             | Description                       | Verbs to Use                              | Example                                                                   |
| ----------------- | --------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------- |
| **1. Remember**   | Recall facts and basic concepts   | Define, list, identify, name, state       | "Define what a cell membrane is"                                          |
| **2. Understand** | Explain ideas or concepts         | Explain, describe, summarize, interpret   | "Explain why natural selection favors heritable variation"                |
| **3. Apply**      | Use information in new situations | Calculate, compute, implement, solve      | "Calculate the mean and standard deviation for a data set"                |
| **4. Analyze**    | Draw connections among ideas      | Compare, contrast, differentiate, examine | "Compare the arguments made by two primary sources on the same event"     |
| **5. Evaluate**   | Justify a decision or position    | Assess, critique, judge, recommend        | "Evaluate whether a proposed research design controls for confounding"    |
| **6. Create**     | Produce new or original work      | Design, construct, develop, formulate     | "Design an experiment to test a hypothesis about plant growth conditions" |

**Correct**:

```markdown
## Module 4: Evolution by Natural Selection

### Learning Objectives

By the end of this module, you will be able to:

- **Define** natural selection and the four conditions required for it to occur (Remember)
- **Explain** why heritable variation is essential for evolutionary change (Understand)
- **Calculate** allele frequencies across generations using the Hardy-Weinberg equation (Apply)
- **Compare** natural selection, genetic drift, and gene flow as mechanisms of evolution (Analyze)
- **Evaluate** the evidence for natural selection in a given population study (Evaluate)
- **Design** an observational study to detect natural selection in a wild population (Create)
```

**Incorrect**:

```markdown
## Module 4: Evolution by Natural Selection

### Learning Objectives

- Learn about natural selection
- Understand evolution
- Do evolution problems
```

(Vague, unmeasurable, does not progress through cognitive levels.)

**Enforced by**: intermediate-reviewer
**Violation**: HIGH priority fix

## MUST NOT Rules

### 1. No Jargon Without Definition

MUST NOT use domain-specific or technical jargon without immediately defining it on first use.

**Detection Patterns**:

```
"Identify the phenotype and genotype of each offspring in the cross."
# What is a phenotype? What is a genotype? First-time learners won't know.
```

**Correct Alternative**:

```
"Identify the phenotype (the observable trait, such as flower color) and genotype
(the underlying combination of alleles, such as Tt or tt) of each offspring in the cross."
```

On subsequent uses within the same lesson, the short term alone is acceptable after the first definition.

**Consequence**: HIGH priority fix

### 2. No Skipping Foundational Concepts

MUST NOT present advanced techniques without ensuring the foundational concepts they depend on have been covered or are explicitly listed as prerequisites.

**Detection Patterns**:

```
# Teaching Monte Carlo simulation without first covering:
# - Random variables and probability distributions
# - Expected value and variance
# - The concept of simulation / sampling
```

**Consequence**: HIGH priority fix — add prerequisite coverage or explicit prerequisite links

### 3. No Advanced Topics Without Prerequisites Noted

MUST NOT introduce advanced material without clearly noting what the learner must already know.

**Detection Patterns**:

```markdown
## Bayesian Inference

We update our prior beliefs using Bayes' theorem: P(H|E) = P(E|H) × P(H) / P(E)

Let's apply it to a medical testing scenario:
```

(Assumes knowledge of conditional probability, prior/posterior distributions, and likelihood — none referenced.)

**Correct Alternative**:

```markdown
## Bayesian Inference

### Prerequisites

- Module 6: Probability Basics (events, sample spaces, probability rules)
- Module 7: Conditional Probability (P(A|B) notation and its meaning)
- Module 8: Probability Distributions (discrete and continuous distributions)

### What You'll Learn

This lesson brings together the probability tools from Modules 6-8 to build a
principled method for updating beliefs when new evidence arrives...
```

**Consequence**: HIGH priority fix

## Content Structure Guidelines

Every educational module SHOULD follow this structure:

1. **Title and Learning Objectives** (Bloom's taxonomy verbs)
2. **Prerequisites** (with links to prior modules)
3. **Motivation** (why this matters — real-world context)
4. **Concept Explanation** (with analogies)
5. **Worked Example** (step-by-step with commentary)
6. **Key Takeaways** (concise summary)
7. **Exercises** (progressive difficulty: practice, then challenge)
8. **Further Reading** (optional, for learners who want to go deeper)

## Exceptions

Pedagogy exceptions require:

1. Documentation of the target audience's assumed knowledge level
2. Justification for deviating from progressive structure (e.g., reference material intended for lookup, not sequential learning)
3. Approval from intermediate-reviewer
