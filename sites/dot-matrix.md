---
title: Dot Matrix
description: 90 dot-grid loading animations as a shadcn registry, with a props playground; licence is restrictive.
url: https://dotmatrix.zzzzshawn.cloud
type: component-registry
formats: loader component registry (shadcn)
topics: [components, motion]
verdict: useful
agent: [registry]
pricing: free
licence: free to use; the site calls it "free and open-source", but the repo (`zzzzshawn/matrix`) carries a custom proprietary licence. It allows use in commercial and non-commercial products but forbids redistributing the components as a standalone or bundled component library, or selling them.
licence_class: source-available
reviewed: 2026-09-26
status: active
related: [circle-loaders, shadcn-ui, 8bitcn, dither-kit]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Dot Matrix

## What it is

Dot Matrix is a registry of animated loading indicators drawn as grids of dots, like an LED panel or an old pager display. It is made by a developer who goes by "shawn" (@zzzzshawn) and is built with React, TypeScript and Tailwind for shadcn-style projects. The homepage says 55+ loaders, but at review time the public registry had 90: 20 each of square, circular, triangle and 3×3 variants, 10 hexagonal ones, and an "all" bundle. It was at v1.5.0, and the repo, started in April 2026, had about 600 stars.

## When to open it

- When a spinner feels generic and you want a loading state with some character that still fits a minimal UI.
- When you want a set of loaders in one visual language across buttons, empty states and full-page waits.

## Most useful

- **[Loader gallery](https://dotmatrix.zzzzshawn.cloud)**: the dark page arranges live dot animations in a compact card grid, with eight color presets above it. The examples range from Neon Drift and Pulse Ladder to Core Spiral, Tri Orbit, Radar Arc and Braille Beat; compare their silhouettes and pacing before picking one.
- **[Square loader playground](https://dotmatrix.zzzzshawn.cloud/playground?loader=dotm-square-1)**: tune size, dot size, speed, opacity levels, pattern and colour preset, then copy the resulting JSX props.
- **Manual setup**: a shared core component, hooks file and CSS file you paste once, after which any loader's source can be copied by hand.
- **Showcase**: short videos of the loaders used in real products.

## Using it with agents

Add `"@dotmatrix": "https://dotmatrix.zzzzshawn.cloud/r/{name}.json"` to `components.json`, then run `npx shadcn@latest add @dotmatrix/dotm-square-3`, or `@dotmatrix/all` for the full set. The registry index at `/r/registry.json` lists every item, so an agent can pick one by name and shape. Each loader takes props like `size`, `dotSize` and `speed`, respects reduced-motion settings, and accepts an `aria-label`. There is no llms.txt or MCP server.

## Watch out for

- The licence is the big one: you can use the loaders in your app, but you can't republish them in your own component library, registry or kit.
- Loaders depend on `dotmatrix-loader.css`; if the CLI does not inject it, import it in your global CSS or the animation won't run.
- The published count (55+) and the registry count (90) disagree, so trust the registry.
- Each item installs the shared core and hooks files, so check for conflicts if you rename or edit them.

## Reusable ideas

- Keep a family visually coherent through a shared dot grid while varying the geometry and travel path; the gallery makes those differences easy to scan.
- Build loaders from one shared dot-grid engine and vary only the pattern, so a whole family stays consistent.
- Put the loader next to the action it describes, such as inside the save button, rather than covering the page.
- Offer a playground that outputs ready-to-paste props instead of asking people to read the prop docs.
- Give every loader a memorable name so teams can refer to it in design reviews.

## Related

[Circle Loaders](circle-loaders.md), [shadcn/ui](shadcn-ui.md), [8bitcn](8bitcn.md), [Dither Kit](dither-kit.md)
