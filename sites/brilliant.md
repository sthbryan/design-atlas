---
title: Brilliant
description: Figma-class vector canvas where agents edit the same file, with a free MCP server and a $0 plan.
url: https://brilliant.design/
type: design-workspace
formats: vector design canvas · components and variants · MCP server · code export
topics: [ai-interfaces, components, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt]
pricing: freemium
licence: A hosted commercial service; the pricing page was gated to scripts at review, so the licence for exported files should be read in its terms.
licence_class: proprietary-paid
reviewed: 2026-11-26
status: active
related: [kite, figma, penpot]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Brilliant

## What it is

Brilliant is a 2D vector design tool where humans and AI agents work on the same canvas: frames and auto layout, vector editing, components and variants, materials and shaders, design systems, a built-in chat and bring-your-own-agent over a free MCP server. It frames itself as a Figma-class editor rather than a mockup generator.

## When to open it

Open it when you want an agent to produce editable design files a designer can keep working in, without moving to code immediately.

## Most useful

- **Agents on the real canvas**: MCP work edits native layers, not images.
- **Design systems in the file**: tokens and components the agent can read and reuse.
- **Code export and Figma import**: the file travels in and out.

## Using it with agents

The MCP server is free, with documented setup for Claude Code, Cursor, VS Code and Codex; an `llms.txt` was published at review.

## Watch out for

- Paid plans gate private projects and built-in AI, so the free plan's limits matter.
- The pricing page did not render for automated checks, so confirm current prices and licence terms in the app.

## Reusable ideas

- Let an agent and a human edit one layer tree, so agent output never needs redrawing.
- Make the MCP server free and charge for collaboration and built-in models.


## Related

[Kite](kite.md), [Figma](figma.md), [Penpot](penpot.md)
