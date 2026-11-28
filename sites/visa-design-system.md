---
title: Visa Product Design System
description: Visa's chart guidance and examples for business dashboards, with llms.txt and accessibility notes.
url: https://design.visa.com/data-visualization/charts/overview/examples
type: guidelines
formats: guidelines · chart examples
topics: [data-viz, documentation]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Free to read and follow. The guidance is Visa's own; copying its charts, brand or code is not granted by the site.
licence_class: proprietary-free
reviewed: 2026-11-28
status: active
related: [cloudscape-data-visualization, cfpb-design-system, gov-scot-design-system]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [documentation](../topics/documentation.md)

# Visa Product Design System

## What it is

The Visa Product Design System's data visualization section is Visa's in-house guidance for charts, with an examples page that shows chart patterns for common business scenarios and analysis tasks. Each example pairs a visual with a short rationale, aimed at product dashboards rather than editorial graphics. The site publishes a small `llms.txt` for agents and pairs every chart with accessibility guidance.

## When to open it

Open it when building a payments, banking or fintech dashboard and you need chart choices that already fit a business context, or when you want a second opinion on chart selection from a practised design system team.

## Most useful

- **Scenario-based examples**: charts organised by the business question they answer
- **Accessibility guidance alongside**: each pattern states how to make it readable
- **llms.txt**: agents can enumerate the guidance without rendering the site
- **Restrained palette**: a coherent set of chart colours that already works together

## Using it with agents

An `llms.txt` at the design.visa.com root points at the guidance. An agent can cite the pattern names and rationales from it, then open the live pages to confirm the exact look. There is no MCP server or component API for the charts.

## Watch out for

- The guidance is Visa's property; copy the ideas, not the brand, chart code or assets
- Examples assume Visa's business scenarios; relabel and re-scale before presenting them as neutral

## Reusable ideas

- Organise chart guidance by business scenario, not by chart type
- Put an accessibility note on every chart pattern, as part of the pattern itself

## Related

[Cloudscape Data Visualization](cloudscape-data-visualization.md), [CFPB Design System](cfpb-design-system.md), [Scottish Government Design System](gov-scot-design-system.md)
