---
title: Anima
description: UX design agent that turns Figma files, URLs or prompts into production-ready front-end code with brand context.
url: https://www.animaapp.com/
type: ai-builder
formats: design-to-code · UX design agent · MCP server · agent skill
topics: [ai-interfaces, agents-and-prompts, components]
verdict: useful
agent: [mcp, skill, llms-txt]
pricing: freemium
licence: A hosted commercial product with a free plan and paid tiers; no open licence for the service was found at review.
licence_class: not-stated
reviewed: 2026-11-26
status: active
related: [stitch, croqui, kite]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [agents-and-prompts](../topics/agents-and-prompts.md), [components](../topics/components.md)

# Anima

## What it is

Anima is a design-to-code product that has moved to a UX design agent: give it a Figma file, a URL or a prompt, and it generates production-ready front-end code using your brand, design system and visual language. The agent can explore and publish apps, not only convert frames.

## When to open it

Open it when you already have Figma work or a live site and want runnable code that respects your system, rather than a fresh design.

## Most useful

- **Three inputs**: Figma files, URLs and prompts in the same workflow.
- **Brand context**: the agent is told the design system before it generates.
- **Agent wiring**: an MCP server, a `SKILL.md` and an `llms.txt`.

## Using it with agents

Anima publishes an MCP server and a skill for agents, with `llms.txt` describing the product; the 2026 update targets agent-driven design and publishing.

## Watch out for

- It is a hosted commercial product with usage limits on the free plan.
- Generated code still needs review for accessibility and for fitting your component library.

## Reusable ideas

- Feed the design system as context before generating, rather than fixing output afterwards.
- Accept a URL as an input, since many teams start from a live site, not a file.


## Related

[Google Stitch](stitch.md), [Croqui](croqui.md), [Kite](kite.md)
