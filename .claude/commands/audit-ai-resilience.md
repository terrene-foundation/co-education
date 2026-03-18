---
name: audit-ai-resilience
description: Audit an assessment for AI-reproducibility vulnerabilities and recommend design improvements.
argument-hint: "[assessment name or file]"
---

# /audit-ai-resilience $ARGUMENTS

Audit **$ARGUMENTS** for AI-reproducibility vulnerabilities.

## Protocol

1. **Read the assessment specification** from `03-work/`
2. **Simulate AI completion**: imagine submitting the assessment prompt to a language model
3. **Score the AI output** against the rubric
4. **Identify vulnerability points**: which rubric criteria does the AI satisfy?
5. **Recommend modifications** that increase AI-resilience without sacrificing pedagogical value
6. **Save the audit** to `04-review/`
