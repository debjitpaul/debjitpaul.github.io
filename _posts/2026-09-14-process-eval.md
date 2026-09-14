---
layout: post
title: "When the Answer Is Not Enough: Why Process Evaluation Matters for AI Agents"
date: 2026-09-14
description: "As AI agents become increasingly capable, evaluating only their final answers may not be enough. We need to understand the processes that produce those answers."
tags:
  agents process-evaluation agentic-ai deep-research deepsynth evaluation
categories:
  research
featured: true
thumbnail: /assets/img/process_evaluation_thumbnail.jpg
---


# When the Answer Is Not Enough

AI agents are getting better at planning, using tools, and completing complex, multi-step tasks. But as Yoshua Bengio has recently argued, more capable agents may also become more skilled at exploiting imperfections in the objectives and evaluations we give them. [1]

That observation raises a simple but uncomfortable question:

**What if an agent gives the right answer, but gets there the wrong way?**

## The Problem

Most agent benchmarks are built around a single question: *was the final answer correct?*

That's an easy signal to measure, but it hides a lot. An agent can skip required steps, rely on outdated or memorized information, hallucinate a tool call, or simply take a shortcut — and still land on the correct answer. From the outside, a lucky guess and a careful investigation look identical.

In our work on **Process Evaluation for Agentic Systems**, we argue that evaluating an agent means looking at more than *what* it produces — it means looking at *how* it gets there. [2] As agents get better at optimizing for the objectives we hand them, this distinction only becomes more important: an agent motivated purely by outcome accuracy has every incentive to find the cheapest path to a correct-looking answer, whether or not that path is trustworthy.

## Why Process Matters

Consider a research agent asked to answer a question by consulting several sources.

If it produces the correct answer, we'd typically call the run successful. But what if it never actually read the sources it was supposed to consult? What if it fabricated a tool call, or simply relied on a memorized answer instead of doing the research the task required?

The final answer alone can't tell us any of this.

**A correct outcome does not necessarily imply a reliable process.**

Process evaluation gives us another lens: Did the agent follow the steps the task actually required? Did it use the right tools, at the right time? Did it gather and verify the evidence it was supposed to rely on — or arrive at the right place by accident?

## From Reasoning to Agents

This question builds directly on our earlier work on reasoning faithfulness. In *Making Reasoning Matter*, we asked whether the reasoning a language model produces actually contributes to its final prediction — or whether it's a plausible-looking story generated after the fact. [3]

With agents, the same question gets harder to answer, because there's more surface area for it to hide in. We're no longer evaluating a single chain of reasoning; we're evaluating an entire trajectory — searching, reading, invoking tools, reasoning, and deciding — any part of which can be unfaithful to the final answer it produces.

## DEEPSYNTH

This is exactly what makes process evaluation central to **DEEPSYNTH**, our benchmark for deep information synthesis.

DEEPSYNTH requires agents to gather and synthesize information across multiple sources, rather than simply retrieving a single fact. [4] That design choice makes the process unusually visible: an agent that reaches the correct synthesis through careful, verifiable evidence-gathering is a fundamentally different — and fundamentally more trustworthy — system than one that reaches the same conclusion through a shortcut. Outcome accuracy alone would treat these two agents as equivalent; process evaluation is what lets us tell them apart.

As agents become more autonomous, I expect this distinction to matter more, not less.

**We shouldn't only ask whether an agent succeeded. We should ask whether it succeeded for the right reasons.**

## The Bigger Picture

The goal of process evaluation isn't to prescribe one correct trajectory for every task. Good agents should be free to find different paths to the same solution — rigid step-by-step matching would just trade one narrow metric for another.

What we actually need is the ability to identify the **critical behaviors that make an agent's success trustworthy** — the steps that, if skipped or faked, should make us doubt the answer even when it happens to be right.

Put simply:

> A correct answer tells us that an agent succeeded once.
> A reliable process tells us it can succeed again — and gives us a way to understand when, and why, it fails.

As agents take on more autonomy, evaluating *how* they get to an answer may end up mattering just as much as evaluating the answer itself.

---

## References

**[1]** Yoshua Bengio. *Why are AI agents lying, cheating and coordinating?* [Link](https://yoshuabengio.org/en/blog/why-are-ai-agents-lying-cheating-and-coordinating)

**[2]** Debjit Paul et al. *Process Evaluation for Agentic Systems.* Findings of EACL 2026. [Paper](https://aclanthology.org/2026.findings-eacl.140.pdf)

**[3]** Debjit Paul, Robert West, Antoine Bosselut, and Boi Faltings. *Making Reasoning Matter: Measuring and Improving Faithfulness of Chain-of-Thought Reasoning.* [Paper](https://arxiv.org/abs/2402.13950)

**[4]** Debjit Paul et al. *DEEPSYNTH: Benchmark for Deep Information Synthesis.* [Project Page](https://agentdeepsynthesis.github.io/deepsynth.github.io/)
