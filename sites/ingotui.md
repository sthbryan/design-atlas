---
title: Ingot UI
description: 2,724 dashboard components across nine design systems for React, Figma and AI agents, with MCP and CLI access.
url: https://ingotui.com
type: component-library
formats: component library · Figma systems · MCP server · CLI
topics: [components, data-viz, ai-interfaces]
verdict: useful
agent: [mcp, cli, llms-txt]
pricing: freemium
licence: "Free tier for personal, learning and non-commercial projects, with 30 components in code, 15 templates and a 50-call-a-day MCP server. Pro is $39 a year for one person; Lifetime was $49 in its launch deal against a $99 list price at review. The licence page governs commercial use."
licence_class: not-stated
reviewed: 2026-11-26
status: active
related: [shadcn-ui, tremor, aicanvas]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [data-viz](../topics/data-viz.md), [ai-interfaces](../topics/ai-interfaces.md)

# Ingot UI

## What it is

Ingot UI (formerly Foundry UI) is a library of dashboard design systems for founders and developers: 2,724 components across nine systems at review, most with React 19 and Tailwind CSS v4 code. It also covers 402 charts and 16,395 icons, with 15 free templates.

## When to open it

Open it when you are building a dashboard and want a complete system (components, charts, icons) rather than a single component, especially if your agent should assemble it.

## Most useful

- **Whole systems, not parts**: nine design systems so a dashboard can stay internally consistent.
- **Charts and icons included**: 402 chart components and a large icon set sit in the same library.
- **Agent paths**: an MCP server (50 calls a day on the free tier), a CLI and an `llms.txt` cover how an agent browses and installs.

## Using it with agents

The MCP server and CLI are the main agent channels, with the `llms.txt` describing the library. Free templates are the no-account starting point.

## Watch out for

- The free tier is explicitly non-commercial, and paid tiers cover one person; confirm both before shipping.
- Nine systems is a lot of surface; pick one system and stay in it.

## Reusable ideas

- Bundle components, charts and icons as one system so dashboards never mix vocabularies.
- Offer MCP, CLI and a text index side by side so every kind of agent has a door in.

## Related

[shadcn/ui](shadcn-ui.md), [Tremor](tremor.md), [AI Canvas](aicanvas.md)
