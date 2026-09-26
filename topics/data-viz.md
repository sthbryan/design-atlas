---
title: Data viz
description: chart components, dashboard blocks and small data displays for product UI.
order: 21
---
[← Atlas](../README.md)

# Data viz

Chart components, dashboard building blocks and small data displays (spark charts, bar lists, status strips) for analytics screens, reports and marketing pages. Animated numbers and counters live under [Motion](motion.md); map components live under [Components](components.md).

## Start here

- [Evil Charts](../sites/evil-charts.md) — designed, animated shadcn charts with the same API on Recharts or ECharts, plus `llms.txt`, a skill and an MCP server for agents.
- [Tremor](../sites/tremor.md) — the dashboard side: KPI cards, spark charts, bar lists, trackers and filter inputs that already match, and 300+ free blocks.

## All sources

<!-- atlas:sources:start -->
- [beUI](../sites/beui.md) — MIT motion components, agent UI and charts with llms.txt, JSON API, agent skill and hosted MCP; paid Pro adds blocks and templates.
- [Evil Charts](../sites/evil-charts.md) — Animated shadcn chart components on Recharts or ECharts, with llms.txt, a skill and an MCP server.
- [Nex UI](../sites/nex-ui.md) — About 100 shadcn-style React and Tailwind components including 23 charts; MIT claimed without a LICENSE file and the CLI registry is empty.
- [Tremor](../sites/tremor.md) — Copy-paste React and Tailwind dashboard components, spark charts and 300+ free blocks, now owned by Vercel.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Keep each series' label, light and dark colours and icon in one config object, compiled to CSS variables, so switching theme is a class change rather than a re-render (Evil Charts).
- Build charts from composable parts (grid, axes, legend, tooltip, extra series) instead of one component with a long list of props, and keep that API stable so a visual style can change without relearning charts (Evil Charts, Dither Kit).
- Tell series apart with texture (hatching, dots, stripes) as well as colour, so a chart still reads in greyscale and for colour-blind viewers (Evil Charts, Dither Kit).
- Pair every headline number with a small trend view, such as a spark chart or a delta badge, instead of a full chart (Tremor).
- Use a single category bar to show proportions of a total, and a strip of coloured cells for status history such as uptime (Tremor).
- Put a real filter bar (date range plus facets) above the charts it controls (Tremor).
- Show a loading state inside the chart frame instead of an empty box (Evil Charts).
- Choose the rendering engine per chart: SVG for small, styled charts, Canvas for long time series and frequent live updates (Evil Charts).

## Pitfalls

- Copy-paste charts become your code: upstream fixes have to be merged by hand (Evil Charts). A CLI with a lockfile and a diff command helps (Dither Kit).
- Entrance animations cost bundle weight: every Evil Charts chart pulls in Motion on top of Recharts or ECharts, and Dither Kit's shared engine brings Motion and two d3 modules.
- Canvas-drawn charts give screen readers nothing by default; add a text summary or a data table next to each one (Dither Kit).
- Agent resources can lag the docs: Evil Charts' `llms.txt` and skill describe only the Recharts versions, although ECharts versions exist. Tell the agent which engine you want.
- Two generations of one library confuse agents: Tremor's legacy `@tremor/react` package and its copy-paste components have different APIs, and models know the old one well, so name the version.
- Fixed palettes need edits before brand colours fit (Dither Kit's seven named hues).
- Young, single-maintainer projects change fast, and a slowed one can stall: Tremor's main repository had no code changes after April 2025 at review.

## Related topics

- [Components](components.md)
- [Motion](motion.md)
- [Color](color.md)
- [Landing pages](landing-pages.md)
