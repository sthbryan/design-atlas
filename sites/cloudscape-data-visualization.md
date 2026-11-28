---
title: Cloudscape Data Visualization
description: "Amazon's data-vis pattern page: charts for cloud consoles, an open-source system and a full llms.txt."
url: https://cloudscape.design/patterns/general/data-vis
type: guidelines
formats: guidelines · pattern
topics: [data-viz, documentation]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Free and open source. The Cloudscape components repository is released under the Apache-2.0 licence.
licence_class: open-source-permissive
reviewed: 2026-11-28
status: active
related: [visa-design-system, cfpb-design-system, gov-scot-design-system]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [documentation](../topics/documentation.md)

# Cloudscape Data Visualization

## What it is

Cloudscape is Amazon's open-source design system for cloud consoles, and its data visualization pattern page collects the chart patterns used across AWS services: dashboards, metrics, resource views and time series, each with what it is for and when to choose another form. The components behind the patterns are a React library in an Apache-2.0 repository, and the documentation site publishes a full `llms.txt` (about 60 KB at review) covering the whole system.

## When to open it

Open it when building an infrastructure or SaaS console where charts are dense and need to stay consistent, or when comparing how a large design system documents chart choice, guidance and code together.

## Most useful

- **Console-grade patterns**: charts designed for operational data, not storytelling
- **Guidance with the component**: each pattern states its purpose and the alternatives
- **Apache-2.0 code**: the components can be reused in commercial products
- **Complete llms.txt**: the docs are fully enumerable by agents without scraping

## Using it with agents

The `llms.txt` at cloudscape.design is the agent entry point: it links every docs page, so an agent can pick the data-vis pages and quote the guidance. For implementation, the Apache-2.0 React components are the code path, and the docs show their props in place.

## Watch out for

- Patterns assume a console layout with side navigation and dense tables; adapt the density for marketing surfaces
- Follow the pattern's stated purpose: the page is explicit about when a form is wrong

## Reusable ideas

- Document each chart with its purpose and the form to use instead when it fails
- Publish the whole docs surface as llms.txt so agents never scrape the HTML

## Related

[Visa Product Design System](visa-design-system.md), [CFPB Design System](cfpb-design-system.md), [Scottish Government Design System](gov-scot-design-system.md)
