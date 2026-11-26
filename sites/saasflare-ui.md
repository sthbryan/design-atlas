---
title: Saasflare UI
description: MIT React and Tailwind v4 library with 135 animated components, 20 palettes, an MCP server and llms.txt.
url: https://ui.saasflare.io/
type: component-library
formats: React components · Tailwind v4 · shadcn registry · MCP server
topics: [components, color, agents-and-prompts]
verdict: useful
agent: [mcp, registry, llms-txt]
pricing: free
licence: MIT, stated on the site and in the project's GitHub repository at review.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [shadcn-ui, twentyfirst-ui, kibo-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [color](../topics/color.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Saasflare UI

## What it is

Saasflare UI is a React and Tailwind v4 component library: 135 components at review, animated and accessible by default, themeable across 20 palettes, installed individually through a shadcn-compatible registry. The site frames it as components your AI already understands, with the MCP server and `llms.txt` built in.

## When to open it

Open it when you want a permissively licensed component set with many palettes and an agent-native install path.

## Most useful

- **20 palettes**: recolour a whole product from tokens instead of restyling components.
- **Individual installs**: registry entries per component, so you take only what you use.
- **Agent surface**: an MCP server with recommendation and install-command tools, plus `llms.txt`.

## Using it with agents

The MCP server, `llms.txt` and `llms-full.txt`, a machine-readable registry and the CLI flow are the agent channels.

## Watch out for

- Some docs pages still quote an older component count (117), so the number moves.
- A palette is not a brand: pick one and tune it before shipping.

## Reusable ideas

- Recommend a component for a use case over MCP, then return the exact install command.
- Ship many palettes so a product can stand apart without new components.


## Related

[shadcn/ui](shadcn-ui.md), [Twentyfirst UI](twentyfirst-ui.md), [Kibo UI](kibo-ui.md)
