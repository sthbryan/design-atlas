---
title: Dither Kit
description: Dithered canvas charts (area, bar, pie, radar) with a Recharts-style API and a single Markdown docs file.
url: https://www.tripwire.sh/dither-kit
type: component-registry
formats: chart and component registry (shadcn) · CLI
topics: [components, typography-and-styles]
verdict: useful
agent: [llms-txt, cli, registry]
pricing: free
licence: free; the repo `Boring-Software-Inc/dither-kit` declares MIT in `package.json` but had no LICENSE file at review time; the `@dither-kit/cli` npm package is MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, 8bitcn, termcn, dotforge]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md)

# Dither Kit

## What it is

Dither Kit is a small shadcn-compatible set of charts and UI pieces that paint ordered-dither fills on a canvas instead of flat colour. It lives on tripwire.sh, the site of Tripwire, a GitHub moderation tool in closed beta, and is published by the same GitHub organisation, Boring Software Inc. The API copies the Recharts style (a data array, a config object, and series, axes, legend and tooltip as children), but it does not use Recharts; it draws with a shared canvas engine built on d3-scale, d3-shape and Motion. The site credits Evil Charts as its inspiration. The repo was created in July 2026 and had about 110 stars at review time.

## When to open it

- When a dashboard, landing page or report should have a textured, printed or retro-screen look instead of the usual smooth gradients.
- When you already use shadcn chart patterns and want a drop-in visual alternative.

## Most useful

- **Charts**: area, line (shipped inside the area item), bar (grouped, stacked, percent), pie and donut, radar and a tiny sparkline.
- **Fill variants**: gradient, dotted, hatched or solid per series, plus a "bloom" glow setting from off to a soft aura.
- **Interaction**: entrance animations with replay, a gliding scrub tooltip, clickable legends that toggle series, and selection.
- **Extras without the chart engine**: a generative mirrored pixel avatar seeded by a name, a dithered native button and a dithered background wash.

## Using it with agents

The whole API reference is a single Markdown file at `/dither-kit.md`, which an agent can read in one fetch. Install with `npx @dither-kit/cli add area-chart` (or `add dither-kit` for everything); the CLI writes a lockfile and adds `update` and `diff` commands. You can also use the plain shadcn CLI with `https://tripwire.sh/r/<item>.json`, the GitHub shorthand, or a `@dither-kit` namespace in `components.json`. There is no MCP server or llms.txt.

## Watch out for

- The colour palette is fixed to seven named hues (green, blue, purple, pink, orange, red, grey), so brand colours need edits to `palette.ts`.
- Canvas-drawn charts give screen readers nothing by default; add a text summary or data table next to each one.
- It is very young (version 0.1.x, one burst of commits in July 2026) and the missing LICENSE file leaves the terms a little unclear.
- Every chart pulls in the shared core engine and its dependencies (Motion, two d3 modules), which is heavier than the "tiny" label suggests.

## Reusable ideas

- Use hatch and dot fills to tell series apart without relying only on colour.
- Keep a Recharts-like composition API so teams can switch visual styles without relearning charts.
- Seed avatars from a name so the same user always gets the same generated face.
- Ship a lockfile-aware CLI on top of a shadcn registry so copied components can still be diffed against upstream.

## Related

[shadcn/ui](shadcn-ui.md), [8bitcn](8bitcn.md), [termcn](termcn.md), [DotForge](dotforge.md)
