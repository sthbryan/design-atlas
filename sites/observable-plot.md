---
title: Observable Plot
description: Concise JavaScript library for legible exploratory charts built from layered marks, scales and facets.
url: https://observablehq.com/plot
type: js-library
formats: charting library · npm package · CDN
topics: [data-viz]
verdict: very-useful
agent: []
pricing: free
licence: ISC for the library, stated in the repository. Observable's hosted collaboration plans are separate.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [deckgl, threejs, component-gallery]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md)

# Observable Plot

## What it is

Observable Plot is a concise JavaScript library for exploratory visualization of tabular data, from the Observable team. At review the repository shows about 5,400 stars and a last push in November 2026. Charts are built by composing marks, scales, transforms and facets, with a documented API and examples for vanilla HTML, React, Vue and Node.

## When to open it

- When a chart needs to be legible and layered (bars, dots, lines) without building every mark and scale from scratch.
- When data exploration happens in Observable notebooks and the same chart should ship in an app.
- When comparisons need facets or transforms rather than hand-positioned groups.

## Most useful

- Layered mark composition: bars, dots, lines and rules combined in one declarative plot.
- Scales, transforms and facets that clarify comparisons without custom layout code.
- Runs in notebooks by default, via CDN in vanilla HTML, from npm in apps, and server-side for SVG or PNG output.
- Type inference on import (`d3.autoType`) so CSV data plots with minimal coercion code.

## Using it with agents

- No agent channel (MCP, llms.txt, CLI, registry, API, prompts or skill) is published at review; the documented API and examples are the reading path.
- Install with `npm install @observablehq/plot` (or pnpm/yarn) and import specific symbols such as `barY` and `groupX` to keep bundles small.

## Watch out for

- Observable's hosted plans (private notebooks, collaboration, database connections) are separate from the open-source library.
- Plot is opinionated about declarative composition. Highly bespoke chart interactions may need D3 directly.
- Version and star counts are at review figures.

## Reusable ideas

- Compose charts from layered marks with shared scales, so one familiar pattern covers many chart types.
- Use facets and transforms to encode comparisons, instead of hard-coding grouped positions.
- Ship the same chart definition to notebooks and production by keeping it framework-neutral.

## Related

[deck.gl](deckgl.md), [Three.js](threejs.md), [The Component Gallery](component-gallery.md)
