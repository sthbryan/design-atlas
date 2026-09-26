---
title: Tremor
description: Copy-paste React and Tailwind dashboard components, spark charts and 300+ free blocks, now owned by Vercel.
url: https://tremor.so
type: component-library
formats: component library
topics: [data-viz, components, landing-pages]
verdict: very-useful
agent: []
pricing: free
licence: Free. Components are Apache-2.0, blocks and templates, once sold, are now free under MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [evil-charts, shadcn-ui, kibo-ui, carbon-design-system]
---
[← Atlas](../README.md) · Topics: [data-viz](../topics/data-viz.md), [components](../topics/components.md), [landing-pages](../topics/landing-pages.md)

# Tremor

## What it is

Tremor is a React and Tailwind CSS library for charts and dashboards, from Tremor Labs. Vercel announced it had acquired Tremor in January 2025. The current version, which the docs call "Tremor Raw", is copy-and-paste: you add each component's source to your project, as with shadcn/ui. It is built on Recharts for charts and Radix UI for interactive parts, and needs React 18.2+ and Tailwind CSS v4. The site lists more than 35 components. Visualisations: area, bar, combo, line and donut charts, bar list, category bar, progress bar, progress circle, spark charts and tracker. Inputs: date and date-range pickers, select, slider, radio cards and others. UI: card, table, tabs, dialog, drawer, toast and others. A separate site, Tremor Blocks, offers 300+ dashboard blocks and several full templates (dashboard, SaaS marketing site, database, insights, planner, solar), all now free and open source.

## When to open it

Open it when you are building an analytics or admin screen and want restrained, consistent dashboard parts: KPI cards, filters, date ranges, tables and small charts that already match. The blocks are a quick way to lay out a whole overview page.

## Most useful

- **Micro visualisations**: spark charts, bar lists, category bars, trackers (uptime-style strips) and progress circles, which most chart libraries do not have
- **Filter inputs** built for data screens: date-range picker, range slider, grouped and multi-select
- **`chartUtils` and focus helpers**, which keep colours and focus rings consistent across components
- **Tremor Blocks**: 300+ blocks and complete Next.js templates, with source on GitHub
- **Figma UI kit**, free on Figma Community

## Using it with agents

No `llms.txt`, MCP or shadcn-style registry was found (`/llms.txt` and `/r/registry.json` return 404). Agents copy code from the docs pages or from the GitHub repositories. The older `@tremor/react` npm package (v3, last released January 2025) is still downloaded heavily and is well known to models, so say which version you want. Otherwise an agent may mix the old props API with the copy-paste components.

## Watch out for

- Development has slowed since the acquisition: the main repository's last code change was in April 2025 (the Tailwind v4 update), and later commits only remove tooling
- Two generations with different APIs and docs: Tremor Raw on tremor.so and the legacy npm package on npm.tremor.so
- The site's terms of service restrict reuse of site content to personal or internal use. The code licences are in the GitHub repositories, so reuse the code from there
- The Vite install guide was still marked "Updating Soon"

## Reusable ideas

- Pair every headline number with a small trend view (spark chart or delta badge) instead of a full chart
- Use a tracker strip of coloured cells to show status history such as uptime
- Break a total into proportions with a single category bar rather than a pie chart
- Give dashboards a real filter bar (date range plus facets) above the charts it controls

## Related

[Evil Charts](evil-charts.md), [shadcn/ui](shadcn-ui.md), [Kibo UI](kibo-ui.md), [Carbon Design System](carbon-design-system.md)
