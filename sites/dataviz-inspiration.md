---
title: DataViz Inspiration
description: A Pinterest-style gallery of hundreds of chart examples sorted by tool and chart type.
url: https://dataviz-inspiration.com
type: gallery
formats: chart gallery
topics: [data-viz, inspiration]
verdict: useful
agent: [llms-txt]
pricing: not-stated
licence: Not stated on the site; treat the example images as look-only.
licence_class: not-stated
reviewed: 2026-11-28
status: active
related: [dataviz-project, vega-lite-examples, python-graph-gallery]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [inspiration](../topics/inspiration.md)

# DataViz Inspiration

## What it is

DataViz Inspiration is a Pinterest-style gallery that collects hundreds of chart examples from the web. Cards are sorted by the tool that made them and by chart type, so an open question like "what does a stacked area chart look like in D3" has a set of answers to compare. The site publishes an `llms.txt` that indexes the examples for agents.

## When to open it

Open it when choosing a chart form and you want to see several real implementations of the same type side by side before committing to one. It works best as a second opinion next to a guidelines document, not a replacement for one.

## Most useful

- **Sort by tool**: see what one library does well before learning it
- **Sort by chart type**: compare the same chart across many examples
- **High card count**: hundreds of examples make it easy to spot patterns
- **llms.txt**: agents can enumerate the gallery without scraping

## Using it with agents

An `llms.txt` at the root lists the examples (200 at review, by size). An agent can point at it to cite which chart forms exist and from which tools, then open the live examples to confirm the look. There is no API or MCP server.

## Watch out for

- No stated licence: the example images belong to their sources, treat them as look-only
- The gallery mixes tools of very different production quality, so judge each example on its own merits

## Reusable ideas

- Index examples by both tool and chart type, because people ask in either vocabulary
- Ship an llms.txt with the gallery so agents can browse it without rendering

## Related

[Data Viz Project](dataviz-project.md), [Vega-Lite Examples](vega-lite-examples.md), [Python Graph Gallery](python-graph-gallery.md)
