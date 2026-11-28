---
title: Vega-Lite Examples
description: "The official Vega-Lite example gallery: single-file specs for statistical graphics, one per chart form."
url: https://vega.github.io/vega-lite/examples
type: gallery
formats: chart gallery · grammar examples
topics: [data-viz]
verdict: useful
agent: []
pricing: free
licence: Vega-Lite is released under the BSD 3-Clause licence; the gallery pages and their example specs follow the project licence.
licence_class: open-source-permissive
reviewed: 2026-11-28
status: active
related: [python-graph-gallery, dataviz-project, ant-design-charts]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md)

# Vega-Lite Examples

## What it is

The Vega-Lite example gallery is the official showcase of Vega-Lite, a high-level grammar of interactive graphics comparable to ggplot or Tableau. Each example is a single declarative specification (mappings from data fields to visual encodings) rendered live, with the spec visible next to the chart. The gallery covers basic chart forms (bars, lines, points, areas) and advanced combinations (layering, faceting, selection and brushing), one spec per idea.

## When to open it

Open it when building statistical graphics in Vega-Lite and you want a runnable starting point for a chart form, or when comparing how a form is specified declaratively instead of with imperative drawing code.

## Most useful

- **Runnable specs**: every example is a complete Vega-Lite specification you can copy and edit
- **Form-first organisation**: the gallery is a vocabulary of chart forms, each illustrated minimally
- **Live interaction**: selections, brushes and tooltips work in the examples, not just in prose
- **BSD-licensed**: the library and its examples are free to reuse under BSD 3-Clause

## Using it with agents

There is no llms.txt, API or MCP server. The examples are the integration: an agent can copy a spec from the gallery, swap in the project's data fields, and adjust encodings. The specs are JSON-in-Markdown, so no rendering pipeline is needed to quote them.

## Watch out for

- Examples use demo datasets; replace the data fields and keep the encoding structure
- Vega-Lite compiles to Vega, so performance-sensitive scenes may need the compiled output tuned, not just the grammar

## Reusable ideas

- One minimal runnable example per chart form, with the spec shown beside the chart
- Express chart choice as field-to-encoding mappings, so the reader adapts the spec instead of redrawing

## Related

[Python Graph Gallery](python-graph-gallery.md), [Data Viz Project](dataviz-project.md), [Ant Design Charts](ant-design-charts.md)
