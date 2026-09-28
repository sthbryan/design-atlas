---
title: microcharts
description: MIT React charts sized for sentences, tables and KPI cards, with a catalog and seven live example apps.
url: https://microcharts.dev
type: component-library
formats: React chart components · 106 SVG microcharts · seven live example apps
topics: [data-viz, components, ai-interfaces]
verdict: useful
agent: [mcp, llms-txt]
pricing: free
licence: The React package is free and MIT; the repository links from the site. The MCP package is separately published for local agent use.
licence_class: open-source-permissive
reviewed: 2026-09-27
status: active
related: [evil-charts, dataviz-project, flourish]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md)

# microcharts

## What it is

microcharts is a React library of word-sized SVG charts. The catalog groups 106 types by the questions they answer, from trends and comparisons to status and uncertainty, and shows each mark at its intended compact size.

## When to open it

Open the [chart catalog](https://microcharts.dev/charts) when a visualization needs to sit inside a sentence, table cell or KPI card. Use [Examples](https://microcharts.dev/examples) to see those marks inside complete interfaces rather than evaluating them as isolated components.

## Most useful

- The catalog is searchable and grouped by decision, so you can compare compact chart forms by purpose instead of browsing only by chart name.
- The home page shows the same sparkline in prose, a table, a KPI card and a printed report. This makes the scale and supporting text part of the design reference.
- The seven example apps demonstrate different visual treatments. [Pulse](https://microcharts-pulse.pages.dev/) uses a pale analytics dashboard with a dark navigation rail, fine rules and small charts in metric cards; [Dispatch](https://microcharts-dispatch.pages.dev/) places charts inline in an editorial layout, while [Shipyard](https://microcharts-shipyard.pages.dev/) uses monochrome marks in a service console.
- The live previews let you compare accent colours and styles such as editorial, mono, print and e-ink across the same data.

## Using it with agents

The site publishes [`llms.txt`](https://microcharts.dev/llms.txt), an agent setup guide, and an MCP package (`@microcharts/mcp`) with tools for finding a chart type, retrieving its props and rendering SVG. Its docs describe the package as MIT and free; the visual catalog and demos work in a browser without installing anything.

## Watch out for

- These marks are designed for roughly word-size placements and omit axes and legends. Use a full chart library when readers need to inspect a broader chart surface.
- The examples are demonstrations of the library, not independent product references. Some charts are highly specialized; check the question each mark answers before adopting its shape.
- The chart code is MIT, but example-app content and media are separate from the package licence.

## Reusable ideas

- Put a compact chart beside the sentence or metric it explains, with the value and trend readable without a legend.
- Let a catalog filter by the decision a chart supports, then link each entry to a live, correctly sized preview.
- Show one data series across prose, cards and tables to reveal whether the visualization still reads in each context.

## Related

[Evil Charts](evil-charts.md), [Data Viz Project](dataviz-project.md), [Flourish](flourish.md)
