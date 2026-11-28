---
title: Ant Design Charts
description: "The AntV chart gallery: React components and examples for dashboards, free and MIT-licensed (at review)."
url: https://ant-design-charts.antgroup.com/en/examples
type: gallery
formats: chart gallery · React component library
topics: [data-viz, components]
verdict: useful
agent: []
pricing: free
licence: Free to use. The AntV libraries behind the gallery (G2, X6 and friends) are released under the MIT licence.
licence_class: open-source-permissive
reviewed: 2026-11-28
status: active
related: [vega-lite-examples, python-graph-gallery, ant-design]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [components](../topics/components.md)

# Ant Design Charts

## What it is

Ant Design Charts is the example gallery of the AntV visualization component library for React, maintained by Ant Group. The gallery pages show working chart components (bars, lines, areas, gauges, sparklines and dashboard-oriented compositions) with the code that produces them, organised so a reader can find a form and see its variants. The underlying libraries (G2 for graphics, X6 for diagramming) are MIT-licensed open source, and the design language matches Ant Design.

## When to open it

Open it when building React dashboards with Ant Design and you need a chart component that fits the system visually, or when you want a reference for chart composition inside an enterprise console.

## Most useful

- **React-native examples**: components, not just static pictures, with copyable code
- **Dashboard patterns**: compositions aimed at admin consoles rather than marketing pages
- **MIT libraries**: G2 and X6 are permissive, so the code can ship in commercial products
- **Integrated with Ant Design**: charts that sit naturally beside Ant Design components

## Using it with agents

There is no llms.txt, API or MCP server. The examples are plain pages with code blocks, so an agent can fetch one, adapt the data, and lift the component structure. The G2 API docs on the same site describe the chart options in detail.

## Watch out for

- The gallery mixes examples from several AntV libraries; confirm which package a snippet belongs to before installing
- Enterprise-console aesthetics suit dense dashboards; simplify before reusing on a marketing page

## Reusable ideas

- Present chart examples as components with code, not as isolated images
- Keep the chart set visually consistent with the surrounding component library

## Related

[Vega-Lite Examples](vega-lite-examples.md), [Python Graph Gallery](python-graph-gallery.md), [Ant Design](ant-design.md)
