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
licence: "89 free components are MIT per the project's GitHub repository, and the free set includes a DESIGN.md, four agent skills and an MCP server. Core is $199 once and Pro $299 once, each for one named developer or designer, under a commercial licence at review; Pro adds 55 blocks with 285 screens across both Figma files."
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [shadcn-ui, twentyfirst-ui, beamline-ui]
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

The free set alone includes an MCP server, a DESIGN.md and four skills (setup, screen, token check), and `llms.txt` indexes the whole library. `npx -y wunderui-mcp` is the MCP entry point, and `npx skills add wunder-ui/wunderui` installs the skills.

## Watch out for

- Only the 89 free components are MIT; blocks, templates, charts, data grids and the rest of the motion effects need Core or Pro, and each paid licence covers one named person.
- A paid system is a commitment: check the commercial licence before designing a product around it.

## Reusable ideas

- Keep component names and props identical across Figma and code so agents need no translation layer.
- Ship a DESIGN.md and skills alongside components, so the agent knows the rules, not only the parts.


## Related

[shadcn/ui](shadcn-ui.md), [Twentyfirst UI](twentyfirst-ui.md), [Beamline UI](beamline-ui.md)
