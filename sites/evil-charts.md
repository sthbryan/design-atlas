---
title: Evil Charts
description: Animated shadcn chart components on Recharts or ECharts, with llms.txt, a skill and an MCP server.
url: https://evilcharts.com
type: component-library
formats: component library (shadcn registry)
topics: [data-viz, components, motion, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, registry, skill]
pricing: free
licence: Free / MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, tremor, evil-buttons, number-flow, mapcn]
---
[← Atlas](../README.md) · Topics: [data-viz](../topics/data-viz.md), [components](../topics/components.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Evil Charts

## What it is

Evil Charts is a set of animated, opinionated chart components for React and shadcn/ui, made by Gurbinder (who describes himself on the site as a design engineer at Axiom). Its argument is that most products ship chart-library defaults, so it offers designed charts instead. Each chart comes in two versions with the same compound API and the same config object: one on Recharts (SVG in the DOM) and one on Apache ECharts (Canvas by default, SVG if you ask for it). Both use Motion for their entrance animations. It covers eight chart families (area, line, bar, composed, pie, radial, radar and Sankey), plus shared parts: tooltip, legend, dots, a zoom brush and patterned backgrounds. At review time the registry held about 280 items, most of them example variants. The MIT-licensed repository started in July 2025 and had about 3k GitHub stars.

## When to open it

Open it when a dashboard or marketing page needs charts that look designed rather than default, and you already use shadcn/ui and Tailwind. Use the ECharts versions when a chart has to handle long time series or frequent live updates.

## Most useful

- **Variants per chart**: gradient, hatched, dotted, duotone and striped fills; step, bump and monotone curves; stacked, percent and expanded types; glowing strokes; animated dashed lines; built-in loading states
- **Chart config**: one object holds the label, light and dark colours and icon for each series, and it is shared by both engines, so theme switching is a class change
- **Background patterns**: about a dozen, such as dots, grid, cross-hatch, diagonal lines and checkers
- **Bar blocks**: ready-made designs such as isometric, monospace, hover-trace and grid bars, plus example dashboard pieces (latency, portfolio, budget, pipeline Sankey)
- **Per-chart engine choice**: one dashboard can mix Recharts and ECharts charts

## Using it with agents

Strong agent support. Charts install through the shadcn CLI as `@evilcharts/<engine>-<chart>` (for example `recharts-area-chart`), and `@evilcharts` is in the shadcn registry index. The site serves `/llms.txt`, `/llms-full.txt`, a Markdown version of every docs page, an installable `skill.md` and a remote MCP server at `/mcp` with `search_docs` and `read_doc` tools. The repository includes `AGENTS.md` and `CLAUDE.md`.

## Watch out for

- The agent resources disagree with the docs. `llms.txt` lists only the Recharts pages, and the skill says only Recharts is installable, but the docs and registry also offer ECharts versions. Tell the agent which engine you want
- Every chart pulls in `motion` as well as `recharts` or `echarts`, which adds weight to a dashboard
- Charts are copied into your project as source, so later fixes have to be merged by hand
- One main maintainer, and a young project that is still changing fast

## Reusable ideas

- Put light and dark series colours in one config object and compile them to CSS variables, so the theme can change without re-rendering
- Build charts from composable parts (grid, legend, extra series) rather than a long list of props
- Show a loading state inside the chart frame instead of an empty box
- Use textures (hatching, dots) as well as colour so series stay distinct in greyscale

## Related

[shadcn/ui](shadcn-ui.md), [Tremor](tremor.md), [Evil Buttons](evil-buttons.md), [NumberFlow](number-flow.md), [mapcn](mapcn.md)
