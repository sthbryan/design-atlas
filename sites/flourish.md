---
title: Flourish
description: An interactive data storytelling editor and gallery of working charts, maps and stories to study or adapt.
url: https://flourish.studio/
type: tool
formats: interactive chart and story editor · example gallery · MCP connector
topics: [data-viz, inspiration]
verdict: very-useful
agent: [mcp]
pricing: freemium
licence: Free accounts can use the service while the account remains active; free publishing includes attribution. At review, paid plans add features such as attribution removal, exports, branding and team controls. Flourish owns its templates and service content; downloaded projects may be published unmodified under an irrevocable, non-exclusive licence. Published projects require visible credit and a link to Flourish.
licence_class: proprietary-paid
reviewed: 2026-09-26
status: active
related: [dataviz-project, evil-charts]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [inspiration](../topics/inspiration.md)

# Flourish

## What it is

Flourish is a browser editor for interactive charts, maps and data stories. Its [examples gallery](https://flourish.studio/examples/) is also a visual reference: examples can be searched and filtered by industry and purpose, then previewed or duplicated into an account.

## When to open it

- When you want to inspect a chart as a working interactive, rather than as a static screenshot.
- When comparing presentation patterns for maps, time-based data, hierarchies, comparison or scrollytelling.
- When choosing between a one-chart view and a sequence of coordinated views for a data story.

## Most useful

- Open [Hierarchy](https://public.flourish.studio/visualisation/8141497/) to study the nested treemap: area communicates hierarchy while muted colours separate parent groups. Hover the rectangles to inspect the interaction.
- In the [examples gallery](https://flourish.studio/examples/), try the **Purpose** filters such as **Change over time**, **Maps & Spatial**, **Hierarchy** and **Storytelling & Engagement**. The cards show the finished composition before you open its preview.
- The free tier includes public publishing and the full template range; it is useful for learning the visual language and testing example interactions.

## Using it with agents

The official [Flourish Connector](https://flourish.studio/product/mcp-connector/) exposes an MCP server at `https://app.flourish.studio/mcp`. The help center lists Codex, Claude Code, Cursor and other MCP clients. A Flourish account and an AI client are required; the Connector is available to all Flourish users, and AI usage is billed by the chosen AI tool rather than by Flourish credits. The agent can return an editable visualization link, which you can inspect and refine in the editor.

## Watch out for

- Treat public examples as visual references. Flourish's terms say it owns its templates and service materials; public projects require visible “Created with Flourish” credit and a link, and public work can be adapted by other users.
- The free plan publishes with attribution. Presenter is provided through Canva Business or Enterprise; Publisher and Enterprise pricing is sales-led rather than a public fixed price at review.
- If you use the Connector with data, the selected AI tool processes that data, and a transformed dataset can contain errors. Check the values and permissions before publishing.

## Reusable ideas

- Pair a clear chart title with a direct preview instead of making visitors infer the visualization from a template name.
- Let a viewer explore by hovering, filtering or stepping through time, while keeping the underlying labels legible.
- Make the path from a discoverable example to an editable copy explicit.

## Related

[Data Viz Project](dataviz-project.md), [Evil Charts](evil-charts.md)
