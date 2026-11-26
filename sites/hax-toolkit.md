---
title: HAX Toolkit
description: Interactive library connecting Microsoft's 18 Guidelines for Human-AI Interaction to patterns and examples.
url: https://www.microsoft.com/en-us/haxtoolkit/library/pattern
type: guidelines
formats: guidelines · pattern library · examples
topics: [ux-patterns, ai-interfaces]
verdict: useful
agent: []
pricing: free
licence: Not stated on the pages reviewed at review; treat the content as a reference, not a reusable asset.
licence_class: not-stated
reviewed: 2026-11-26
status: active
related: [laws-of-ux, agents-kit, designmd]
---
[← Atlas](../site/home.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [ai-interfaces](../topics/ai-interfaces.md)

# HAX Toolkit

## What it is

The HAX (Human-AI eXperience) Toolkit design library is Microsoft's interactive collection of the 18 Guidelines for Human-AI Interaction, each connected to design patterns and product examples. It covers how AI should communicate uncertainty, support correction, and keep people in control, rather than how a chat bubble should look.

## When to open it

- When an AI feature needs trust, correction or uncertainty decisions and the team wants a principled starting point.
- When user intent is ambiguous and you need guidance on clarifying before acting.
- When feedback loops (explicit, partial, non-disruptive) are part of the design, not an afterthought.

## Most useful

- 18 guidelines with patterns per guideline, for example disambiguate-before-acting (G10), local and global explanations (G11), and feedforward (G16).
- Pattern entries that show the guideline applied in real products, so the principle has a concrete shape.
- Guidance on precision: match the level of precision in UI communication to system performance (G2).
- The library is free to browse, with no account or paywall at review.

## Using it with agents

- No agent channel (MCP, llms.txt, CLI, registry, API, prompts or skill) is published at review; the interactive library itself is the reading path.
- The guidelines work well as design-review criteria in prompts: cite the guideline number when an agent should apply a pattern.

## Watch out for

- No reuse licence was found on the pages reviewed at review, so describe patterns in your own words instead of copying text.
- The content is from 2022 at the oldest page dates; the field has moved, so cross-check newer AI UX sources for recent patterns.
- Guidelines are principles, not visual treatments. Pair them with a component or pattern library when building.

## Reusable ideas

- Number guidelines and patterns (G10, Pattern 10A) so reviews and prompts can cite them precisely.
- When intent is uncertain, ask a targeted clarifying question or offer likely interpretations before acting.
- Convey the consequences of an action before the user takes it, not only after (feedforward).

## Related

[Laws of UX](laws-of-ux.md), [Agents Kit](agents-kit.md), [DESIGN.md](designmd.md)
