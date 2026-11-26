---
title: Google Stitch
description: Google's AI interface design tool with a canvas, design-to-code output, an MCP server and an Apache-licensed skills repo.
url: https://stitch.google.com/
type: ai-builder
formats: AI UI generation · design canvas · design-to-code · MCP server
topics: [ai-interfaces, components, agents-and-prompts]
verdict: useful
agent: [mcp, skill, llms-txt]
pricing: not-stated
licence: The product's own terms were not stated in the pages checked; the companion skills repository (google-labs-code/stitch-skills) is Apache-2.0 at review.
licence_class: not-stated
reviewed: 2026-11-26
status: active
related: [kite, brilliant, croqui]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Google Stitch

## What it is

Stitch is Google's AI interface design tool: describe a screen, get high-fidelity UI, iterate on a canvas, then move to code. Google launched it in May 2025 and later added the AI-native canvas; the companion skills repository supports Codex, Gemini CLI, Claude Code, Cursor and Antigravity.

## When to open it

Open it when you want multiple UI directions from a prompt quickly, then hand the chosen one to an agent for implementation.

## Most useful

- **Canvas iteration**: generated screens are editable, not one-shot images.
- **Design to code**: the output leaves as code rather than a picture.
- **MCP and skills**: a Stitch MCP server plus an Apache-2.0 skills repository.

## Using it with agents

The Stitch MCP server connects the tool to agents, and `stitch-skills` (Apache-2.0, 13,030 stars at review) gives them the working instructions.

## Watch out for

- No pricing or product licence was stated on the pages checked, so confirm terms before commercial use.
- Generated UI default habits are exactly what a design review has to catch.

## Reusable ideas

- Pair a generation canvas with an installable skills repository, so agents can drive the tool.
- Keep generated screens editable, so iteration happens on the design, not on prompts.


## Related

[Kite](kite.md), [Brilliant](brilliant.md), [Croqui](croqui.md)
