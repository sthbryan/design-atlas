---
title: Croqui
description: Design canvas for coding agents where every frame is a real React file, reviewed and approved in place.
url: https://croqui.dev/
type: design-workspace
formats: React screens on a canvas · MCP server · review annotations · Claude Code plugin
topics: [ai-interfaces, agents-and-prompts, components]
verdict: useful
agent: [mcp, skill, llms-txt]
pricing: freemium
licence: A hosted commercial service; no open licence for the service was stated at review. Check terms before relying on it for client work.
licence_class: not-stated
reviewed: 2026-11-26
status: active
related: [kite, brilliant, stitch]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [agents-and-prompts](../topics/agents-and-prompts.md), [components](../topics/components.md)

# Croqui

## What it is

Croqui is a design canvas for coding agents: the agent writes real React screens (`.tsx`, using your components), each frame renders live, and the people reviewing pin notes the agent resolves before the screen is approved. There is no built-in model; you connect the agent you already use.

## When to open it

Open it when design review is the bottleneck between an agent and a shipped screen, and you want approval to happen on the real code.

## Most useful

- **Real React, not mockups**: what you approve is the component that ships.
- **Pin-and-resolve review**: notes become agent tasks with a visible end state.
- **MCP plus a Claude Code plugin**: an agent connects once and works in place.

## Using it with agents

An MCP server, a Claude Code plugin with skills and an `llms.txt` are published; the site is explicit that it supplies no model of its own.

## Watch out for

- The free plan is limited and paid tiers start at $29 a month at review.
- No open licence for the service was stated, so confirm terms for client work.

## Reusable ideas

- Render the agent's real code in the review surface so approval cannot drift from the build.
- Turn review comments into tasks with a resolving state, instead of a chat thread.


## Related

[Kite](kite.md), [Brilliant](brilliant.md), [Google Stitch](stitch.md)
