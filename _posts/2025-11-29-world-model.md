---
layout: post
title: "What Children Know That AI Doesn't: Learning Through Experience, Not Text (!Work in Progress!)"
date: 2025-09-30
description: "Jean Piaget revealed how children construct understanding through action, surprise, and adaptation. His insights expose fundamental gaps in current AI—systems that predict words, not reality."
tags: [cognitive-development, piaget, ai-reasoning, world-models, experiential-learning]
categories: [research, ai-theory]
featured: true
thumbnail: /assets/img/piaget_ai_thumbnail.jpg
---

A toddler drops a toy. It falls. They drop it again. By the third time, they predict the fall before releasing. Drop a helium balloon, and watch their delighted confusion—it floats upward instead. This simple interaction contains a profound lesson: the child is building a causal model of gravity through direct experience, learning from genuine surprise when reality violates predictions.

Now consider GPT-4. It has "read" millions of descriptions of falling objects and can generate fluent text: "when you drop something, it falls due to gravity." But it has never experienced releasing an object, never felt acceleration, never been surprised by a balloon floating. It predicts what _would be said_ about dropping objects, not what _would actually happen_.

This distinction—between linguistic pattern matching and genuine causal understanding grounded in experience—reveals why current AI, despite impressive capabilities, lacks true intelligence. Jean Piaget's theory of cognitive development offers a framework for understanding what's missing.

## Piaget's Core Insight: Knowledge is Constructed Through Experience

Swiss psychologist Jean Piaget (1896-1980) made a revolutionary claim: children don't passively absorb knowledge. They actively **construct** understanding through interaction with the world.[^1] Knowledge isn't transmitted—it's built by the learner through experience, experimentation, and adaptation.

This has immediate implications for AI. Current machine learning follows a transmission model: massive datasets encode patterns, models absorb them through optimization. But a child doesn't need millions of examples to understand gravity—they construct the concept through dozens of hands-on experiments, generalizing from minimal data by building causal models, not memorizing correlations.

### Schemas: Testable Mental Models

Piaget introduced **schemas**—organized patterns representing our understanding of the world.[^2] A schema isn't stored knowledge; it's an active framework for interpreting experiences, making predictions, and recognizing when reality violates expectations.

A child's schema for "dog" includes: four legs, fur, barks. When they encounter a cat, their dog schema fails to predict its behavior (meows, acts aloof), triggering learning. The schema is **testable against reality**.

Modern AI has representations—word embeddings, neural activations—but these lack causal structure, predictive power, and testability. They capture statistical patterns, not causal understanding.

### Two Modes of Learning: Assimilation and Accommodation

**Assimilation**: Fitting new experiences into existing schemas. Seeing a new dog breed: "that's also a dog."

**Accommodation**: Restructuring schemas when experiences don't fit. Meeting a cat: the child must split their schema—dogs AND cats, both with four legs but different behaviors.[^3]

Most neural networks only assimilate—fitting new data within existing capacity. When truly novel information arrives, they fail catastrophically, overfit, or suffer catastrophic forgetting. Few AI systems have mechanisms for graceful accommodation—recognizing when their world model is fundamentally wrong and restructuring it while preserving valuable knowledge.

## The Four Stages: From Action to Abstraction

Piaget proposed that cognitive development progresses through four distinct, universal stages, each characterized by fundamentally different ways of thinking and interacting with the world.[^4]

### Stage 1: Sensorimotor (0-2 years)

Children learn through direct sensory experience and motor action.[^5] Key achievement: object permanence—things exist even when unseen. This requires repeated experimentation, sensorimotor feedback, and surprise learning. Infants master causality and object permanence by manipulating their surroundings and learning from the consequences.[^6]

**For AI**: This is the embodiment problem. Systems trained on text or static images lack sensorimotor grounding, action-consequence loops, and physical intuition. They reason about physics they've never experienced.

### Stage 2: Preoperational (2-7 years)

Symbolic thinking emerges—using words to represent objects not present.[^7] But limitations remain: difficulty reversing operations mentally, focusing on one aspect while ignoring others (centration), inability to take others' perspectives (egocentrism).

**For AI**: This is where LLMs operate. They manipulate symbols fluently but show systematic limitations—sensitivity to surface features, difficulty with logical reversibility, brittle performance when prompts change slightly.

### Stage 3: Concrete Operational (7-11 years)

Logical reasoning develops—but only with concrete, tangible examples.[^8] Children can classify hierarchically, understand conservation (quantity remains constant despite changes in appearance), reverse operations mentally. But they struggle with abstract concepts and hypothetical reasoning.

**For AI**: Current systems rarely reach this stage. LLMs sometimes simulate logical inference through pattern matching but lack stable, consistent logical frameworks.

### Stage 4: Formal Operational (12+ years)

Abstract reasoning, hypothesis testing, scientific thinking.[^9] Understanding abstract concepts, reasoning about hypotheticals, thinking about thinking (metacognition).

**For AI**: The unreached goal. Even frontier systems show brittle, domain-specific reasoning that doesn't transfer robustly.

## Three Critical Gaps

### Gap 1: Experience vs. Description

**Piaget**: Knowledge comes from acting on the world and observing consequences. A child learns "hot" by experiencing heat, connecting sensation to cause. Cognitive development emerges from the interaction between the child's actions and the environment's responses.[^10]

**Current AI**: Learns from descriptions of others' experiences. An LLM has read "fire is hot" millions of times but never experienced heat. It predicts what people _say_ about heat, not what heat actually _feels like_ or _causes_.

As Alan Turing observed, true machine intelligence requires **"machines that can learn from experience, where experience means things that actually happened."**[^11] Current LLMs lack this experiential grounding—they absorb descriptions, not reality.

### Gap 2: Predicting Reality vs. Predicting Words

**World Models predict what will happen in reality**. A child's world model: "If I release this, it will fall." This prediction is tested against reality. When surprised (balloon floats), the model updates.

**LLMs predict what would be said about reality**. They model P(next words | previous words), not P(outcomes | actions). When their linguistic prediction is wrong, they receive no feedback from reality—only more text descriptions, which themselves might be incorrect.

Consider:

```
Child: "If I let go, this will fall"
→ Action: Releases object
→ Reality: Object falls
→ Update: Prediction confirmed

LLM: "Objects fall when dropped"
→ Action: None
→ Reality: No interaction
→ Update: Only from more text
```

The LLM's knowledge is untested and untestable against physical reality.

### Gap 3: Learning from Surprise

**Piaget's deepest insight**: Children learn most when reality violates predictions. The balloon floats (violating gravity schema), ice melts (violating object permanence), the friendly dog bites (violating behavioral schema). Surprise triggers accommodation—the unexpected outcome signals "my model is wrong."[^12]

**Current AI cannot be genuinely surprised by reality**. LLMs never interact with the physical world. When deployed, if predictions are wrong, they receive no reality-based feedback—only human corrections encoded as more text. When an LLM confidently predicts something physically impossible, reality never corrects it.

This is perhaps the most critical limitation: **without the ability to be surprised by reality, AI cannot truly learn from experience**.

## What This Means for Building Better AI

Piaget's framework suggests several principles:

**Start with embodiment**: Intelligence should be grounded in sensorimotor experience before abstract reasoning. Train agents in physical environments with action-consequence feedback.

**Enable genuine surprise**: Systems need to form explicit predictions about reality, test them through action, recognize failures, and use surprise as a learning signal.

**Support accommodation**: Systems need structured representations that can be updated incrementally or restructured fundamentally, avoiding catastrophic forgetting.

**Progress through stages**: Follow Piaget's progression—sensorimotor grounding, then symbolic representation, concrete logic, and finally abstract reasoning. Skipping stages creates surface-level capabilities with fundamental limitations.

## Current Work and Future Directions

Recent research begins incorporating these principles. Del Ser et al. (2025) propose a framework integrating six key areas essential for enabling AI systems to develop structured, adaptive representations inspired by Piaget's cognitive development theory:[^13]

1. **Physics-informed learning**: Embedding physical laws and constraints
2. **Neurosymbolic AI**: Combining neural pattern recognition with symbolic reasoning
3. **Causal inference**: Modeling interventions and counterfactuals
4. **Open-world machine learning**: Handling novelty and continual learning
5. **Human-in-the-loop**: Guided development with human feedback
6. **Responsible AI**: Ethical constraints and safety considerations

These directions address Piagetian concerns: grounding in physical reality, structured causal representations, accommodation mechanisms, and experiential learning loops. But much work remains in building systems that genuinely construct knowledge through experience rather than absorbing patterns from text.

## Conclusion: The Hard Truth About Intelligence

Current AI development optimizes for benchmark performance and scaling—bigger models, more data. But Piaget's framework reveals this approach's limitations:

**Quantity of text data ≠ Quality of experiential learning**

A child constructs rich causal understanding from limited but highly informative experiences—each grounded in reality, tied to action and consequence, testable through prediction and surprise. Training on trillions of text tokens provides vast linguistic patterns but no sensorimotor grounding, no action-consequence loops, no reality-based surprise.

The challenge isn't primarily technical—it's philosophical. We want AI to be precocious, to skip development stages and emerge fully formed. But intelligence doesn't work that way. Piaget demonstrated that genuine understanding is built slowly through countless interactions, mistakes, accommodation, and gradual construction of ever-more-sophisticated schemas.[^14]

If we want AI that truly understands reality rather than mimicking descriptions of it, we must let it learn through genuine experience: hands-on interaction, prediction, surprise, and patient construction of causal models grounded in reality itself.

As Turing recognized and Piaget formalized: **machines that truly think must learn from experience—from things that actually happen, not just from reading about what happened**.

---

## References

[^1]: Piaget, J. (1954). _The Construction of Reality in the Child_. Basic Books. [Original work published 1937]
[^2]: Piaget, J. (1952). _The Origins of Intelligence in Children_. International Universities Press.
[^3]: Piaget, J. (1970). _Genetic Epistemology_. Columbia University Press.
[^4]: Piaget, J. (1936). _The Origins of Intelligence in the Child_. Routledge & Kegan Paul. (See also: Simply Psychology. (2025). "Piaget's Theory and Stages of Cognitive Development." Retrieved from https://www.simplypsychology.org/piaget.html)
[^5]: Piaget, J., & Inhelder, B. (1969). _The Psychology of the Child_. Basic Books.
[^6]: National Center for Biotechnology Information. (2023). "Cognitive Development." _StatPearls_. Retrieved from https://www.ncbi.nlm.nih.gov/books/NBK537095/
[^7]: Piaget, J. (1959). _The Language and Thought of the Child_ (3rd ed.). Routledge & Kegan Paul.
[^8]: Piaget, J., & Inhelder, B. (1956). _The Child's Conception of Space_. Routledge & Kegan Paul.
[^9]: Inhelder, B., & Piaget, J. (1958). _The Growth of Logical Thinking from Childhood to Adolescence_. Basic Books.
[^10]: Piaget, J. (1970). _Piaget's Theory_. In P. H. Mussen (Ed.), _Carmichael's Manual of Child Psychology_ (Vol. 1, pp. 703-732). Wiley.
[^11]: Turing, A. M. (1950). "Computing Machinery and Intelligence." _Mind_, 59(236), 433-460.
[^12]: Piaget, J. (1985). _The Equilibration of Cognitive Structures: The Central Problem of Intellectual Development_. University of Chicago Press.
[^13]: Del Ser, J., Lobo, J. L., Müller, H., & Holzinger, A. (2025). "World Models in Artificial Intelligence: Sensing, Learning, and Reasoning Like a Child." _arXiv preprint arXiv:2503.15168_. Retrieved from https://arxiv.org/abs/2503.15168
[^14]: Flavell, J. H. (1963). _The Developmental Psychology of Jean Piaget_. Van Nostrand.

### Additional Reading

- Boden, M. A. (1979). _Piaget_. Fontana/Collins.
- Brainerd, C. J. (1978). _Piaget's Theory of Intelligence_. Prentice-Hall.
- Ginsburg, H., & Opper, S. (1988). _Piaget's Theory of Intellectual Development_ (3rd ed.). Prentice-Hall.
- Lake, B. M., Ullman, T. D., Tenenbaum, J. B., & Gershman, S. J. (2017). "Building machines that learn and think like people." _Behavioral and Brain Sciences_, 40, e253.
- Marcus, G. (2018). "Deep Learning: A Critical Appraisal." _arXiv preprint arXiv:1801.00631_.
- Wikipedia contributors. (2025). "Piaget's theory of cognitive development." _Wikipedia, The Free Encyclopedia_. Retrieved from https://en.wikipedia.org/wiki/Piaget's_theory_of_cognitive_development
