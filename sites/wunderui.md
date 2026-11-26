---
title: WunderUI
description: Agentic React and Figma design system with 194 components, 285 screens, 181 motion effects, MCP, skills and DESIGN.md.
url: https://wunderui.com/
type: design-system
formats: React components · Figma kit · Figma-matched props · MCP server · agent skills · DESIGN.md
topics: [components, motion, agents-and-prompts, data-viz]
verdict: very-useful
agent: [mcp, cli, skill, llms-txt, registry]
pricing: freemium
licence: 89 free components are MIT per the project's GitHub repository; Core is $199 once and Pro $299 once under a commercial licence at review. The paid tiers cover block and template source, the full skill set and the agents.
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [shadcn-ui, compass-design-system, beamline-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md), [data-viz](../topics/data-viz.md)

# WunderUI

## What it is

WunderUI is a React and Figma design system built to be driven by agents: 194 components in named groups (elements, forms, AI and agents, charts, data and tables, navigation), 55 blocks and 285 screens, 181 motion effects and 211 Figma components at review. Component names and props match between Figma and React, so an agent can carry a design across both.

## When to open it

Open it when you want a dashboard or product UI where the agent has a documented component vocabulary, a DESIGN.md and skills, instead of improvising a design each time.

## Most useful

- **Figma parity by name**: the same component names and props in both files, which removes a translation step.
- **Charts and AI pieces included**: 28 chart components and a group of AI and agent components.
- **Agent surface**: MCP (11 tools), a CLI, 12 skills, DESIGN.md, llms.txt and a registry, all documented.

## Using it with agents

The MCP server (`npx -y wunderui-mcp`), CLI adds, installable skills and a DESIGN.md are the agent channels; `llms.txt` indexes it all.

## Watch out for

- Only the 89 free components are MIT; blocks, templates and the full skill set need Core or Pro.
- A paid system is a commitment: check the commercial licence before designing a product around it.

## Reusable ideas

- Keep component names and props identical across Figma and code so agents need no translation layer.
- Ship a DESIGN.md and skills alongside components, so the agent knows the rules, not only the parts.


## Related

[shadcn/ui](shadcn-ui.md), [Compass Design System](compass-design-system.md), [Beamline UI](beamline-ui.md)
