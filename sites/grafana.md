---
title: Grafana
description: "Observability platform reference for information-dense dashboards: metrics, logs and traces composed into flexible data visualizations."
url: https://grafana.com
type: website
formats: product · observability · dashboards
topics: [data-viz, ux-patterns]
verdict: useful
agent: [api]
pricing: freemium
licence: "The core platform is open source under AGPLv3 as stated in the repository, with cloud and enterprise offerings paid and stated on the pricing page. Commercial editions and cloud terms govern hosted usage. Do not redistribute modified AGPL code outside that licence."
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [metabase, posthog]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [ux-patterns](../topics/ux-patterns.md)

# Grafana

## What it is

Grafana is an open source observability platform: metrics, logs and traces from many sources composed into dense, flexible visualizations. The product pages are a reference for presenting information-dense interfaces without apologizing for density.

## When to open it

- When a dashboard must carry a lot of series, ranges and panels and still stay readable.
- When one dashboard view must combine different signal types (metrics, traces, logs) instead of keeping them in separate tools.
- When an open source core with paid cloud and enterprise tiers needs licensing and packaging explained plainly.

## Most useful

- Panel-level control: ranges, units, thresholds and legends treated as first-class dashboard content, not chart decoration.
- The product pages lead with composition, showing many signals in one view, which is the core of the observability story.
- A free open core at review (AGPL) with paid cloud tiers, both stated without hiding the self-host path.
- Documentation organized by product areas (dashboards, alerting, explore), matching how operators actually use the system.

## Using it with agents

- Grafana exposes an HTTP API behind credentials for dashboards, queries and alerts.
- The public site and docs are the agent reference at review; live instances need an account or a self-install.

## Watch out for

- AGPL applies to the core; cloud and enterprise editions follow commercial terms, so check both before hosting for clients.
- Cloud pricing at review is stated on the pricing page; confirm live before budgeting, and note data retention tiers.
- Do not copy Grafana's dashboard UI or visuals; study the density and composition patterns instead.

## Reusable ideas

- Treat units, thresholds and legends as part of the data story, with shared conventions across panels.
- Compose different signal types into one dashboard view instead of splitting them into separate pages.
- Present an open core and paid tiers side by side with the same feature names, so readers can compare honestly.

## Related