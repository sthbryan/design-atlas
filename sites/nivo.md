---
title: nivo
description: React chart components built on D3, with a gallery that shows about thirty chart types, each documented and themable.
url: https://nivo.rocks
type: js-library
formats: React chart components · per-chart galleries · SVG and canvas variants · theme object
topics: [data-viz, components]
verdict: useful
agent: []
pricing: free
licence: MIT, per the plouc/nivo repository, which had 14,127 stars at review; the `@nivo/core` package was at 0.99.0 then. Last push at review was July 2026.
licence_class: open-source-permissive
reviewed: 2026-10-29
status: active
related: [evil-charts, tremor, d3]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [components](../topics/components.md)


# nivo

## What it is

nivo is a set of React components that draw charts with D3. Instead of one generic chart component with a `type` prop, it ships a component per chart — bar, line, pie, treemap, sankey, heatmap and around two dozen more — each with its own props and its own page of examples. The homepage is a full-bleed grid of those charts in bright colour on a coral background, which reads as a catalogue of forms rather than a product pitch.

## When to open it

- A React app needs a chart that is more interesting than a bar or a line, and you want it as a component rather than as a hand-built SVG.
- You need a form nivo already covers: sunburst, icicle, circle packing, chord, parallel coordinates, marimekko, swarmplot, waffle, bullet, calendar, choropleth.
- You want to see what a chart type looks like before deciding, without wiring an example first.

## Most useful

- **A component per chart type**: the library covers bar, line area and bump, stream, pie, radar, radial bar, polar bar, sunburst, treemap, icicle, circle packing, heatmap, calendar, choropleth, geomap, network, sankey, chord, funnel, marimekko, parallel coordinates, boxplot, bullet, scatterplot, swarmplot, waffle, voronoi and a time range.
- **Per-chart documentation**: each page carries several worked examples with code and a props table, which is enough to build the chart without reading the source.
- **Theming as data**: a theme object controls fonts, tooltips, legends, grids and axis styles, so charts can inherit a product's type and colour without CSS overrides.
- **Motion on transitions**: charts animate when data changes, which is often the difference between a dashboard that reads as static and one that shows what just moved.
- **Responsive wrappers**: the `Responsive*` variants size themselves to their container, which saves the usual resize-observer boilerplate.

## Using it with agents

No agent channel was published at review: no `llms.txt`, no MCP server. The per-chart props tables are the useful pages for an agent, and they are static HTML, so a fetch works; the homepage gallery itself is mostly canvas-rendered previews and tells an agent little.

## Watch out for

- It is a React library, ported from D3's primitives. Teams on Vue, Svelte or plain HTML get nothing from it.
- Thirty chart types is a lot of surface. Every chart you adopt is another component to theme, test and keep accessible, so pick two or three.
- The less common forms — chord, parallel coordinates, marimekko — look impressive and are hard to read. Use them only when the data shape demands it.
- Accessibility is not automatic: a canvas chart needs a text alternative, and nivo's SVG output needs titles, labels and keyboard access added by hand.
- The package was at a 0.x version at review and the last push was in July, so pin the version and read the release notes before upgrading.
- The gallery's aspect ratios are generous. A treemap or a sunburst in a 300px card in a dense dashboard is a different design problem.

## Reusable ideas

- One component per chart type, with a name a designer can say out loud, beats a single component with a type union.
- Show every chart at the same size in one grid, so the catalogue is comparable at a glance.
- Make theming a single object that carries fonts, colours and tooltip styling, instead of a stylesheet per chart.
- Give every chart page several examples rather than one: the second and third reveal the props that matter.

## Related

[Evil Charts](evil-charts.md), [Tremor](tremor.md), [D3](d3.md)
