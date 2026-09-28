---
title: Spherium
description: A WebGL globe editor for styling world maps as dot fields and exporting the result as SVG.
url: https://tryspherium.com
type: tool
formats: WebGL map generator · point patterns · SVG export
topics: [3d-and-shaders, data-viz, assets]
verdict: niche
agent: []
pricing: not-stated
licence: Beta 1.0 at review; no pricing, terms or reuse licence were stated on the public editor page.
licence_class: not-stated
reviewed: 2026-09-26
status: active
related: [dot-matrix, threejs, poly-haven]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [data-viz](../topics/data-viz.md), [assets](../topics/assets.md)

# Spherium

## What it is

Spherium is an interactive WebGL globe and vector-map generator. Its editor converts world geography into adjustable point patterns and exports the result as SVG.

## When to open it

- When a map or globe should read as a graphic object in a poster, dashboard hero or editorial illustration.
- When exploring how point shape, density and opacity change the apparent depth and legibility of a geographic form.

## Most useful

- **Quick Views**: jump to named continents to compare how the same treatment reads across different silhouettes.
- **Point patterns**: switch between circles, squares, triangles, hexagons, lines and plus marks, then adjust density from roughly 1k to 8k points.
- **Scene controls**: ordered or random distribution, foreground and background opacity, color and graticule controls help tune the map from clean outline to dense field.
- **Export**: the editor describes SVG export for use in other design tools.

## Using it with agents

No MCP, API, CLI, registry, `llms.txt` or agent guide was visible at review time. The editor is an interactive browser tool.

## Watch out for

- The page identifies the product as Beta 1.0. The highest point density can affect rendering performance.
- No pricing, terms or license was linked from the editor at review time, so treat its output and code as look-only until reuse terms are verified.
- Dense point maps can lose the shape of narrow regions; check output at its intended display size.

## Reusable ideas

- Keep point size and opacity tied to the intended scale of the final graphic.
- Use low-density settings for recognisable silhouettes and reserve dense fields for close-up or large-format output.
- Treat latitude and longitude lines as optional structure; they can compete with the primary map pattern.

## Related

[Dot Matrix](dot-matrix.md), [Three.js](threejs.md), [Poly Haven](poly-haven.md)
