---
title: CFPB Design System
description: The US Consumer Financial Protection Bureau's data visualization guidelines, public domain (CC0).
url: https://cfpb.github.io/design-system/guidelines/data-visualization-guidelines
type: guidelines
formats: guidelines
topics: [data-viz, documentation]
verdict: useful
agent: []
pricing: free
licence: The design system repository is released under CC0 1.0 (public domain dedication); the guidelines follow it.
licence_class: public-domain
reviewed: 2026-11-28
status: active
related: [gov-scot-design-system, visa-design-system, cloudscape-data-visualization]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [documentation](../topics/documentation.md)

# CFPB Design System

## What it is

The Consumer Financial Protection Bureau's design system publishes guidelines for data visualization aimed at public-facing US government pages. The data visualization page covers which charts to use for which kind of data, how many series a chart may carry before it stops being readable, and how to keep charts accessible to screen readers. The repository behind the system is CC0, so the guidance and its code are public domain.

## When to open it

Open it when a chart has to survive a public audience (high contrast, plain language, no chart-junk) or when you want a short, opinionated checklist for chart readability.

## Most useful

- **Readability rules**: limits such as at most five data types per chart, with the reason stated
- **Accessibility first**: guidance written for screen readers and low-vision users
- **CC0**: the whole system, guidance included, is public domain (at review)
- **Government voice**: plain-language explanations reusable as a starting point

## Using it with agents

There is no llms.txt, API or MCP server. The guidelines are plain Markdown-rendered pages, so an agent can fetch the data visualization page and apply the rules as a checklist. The CC0 licence means quoting and adapting the rules is fine.

## Watch out for

- Examples use US government datasets and conventions; relabel before reusing on non-US pages
- The rules are conservative on purpose; editorial and marketing contexts may allow more ink

## Reusable ideas

- State chart limits as rules with reasons ("at most five data types, so it stays readable")
- Write accessibility guidance as part of every chart pattern, not an afterthought

## Related

[Scottish Government Design System](gov-scot-design-system.md), [Visa Product Design System](visa-design-system.md), [Cloudscape Data Visualization](cloudscape-data-visualization.md)
