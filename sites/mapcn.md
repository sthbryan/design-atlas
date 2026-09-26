---
title: mapcn
description: Map components distributed as a shadcn/ui registry, with a "copy prompt for your agent" button.
url: https://mapcn.dev
type: component-library
formats: map component library (shadcn registry)
topics: [components, agents-and-prompts]
verdict: useful
agent: [registry, prompts]
pricing: free
licence: free and open source (repo `AnmolSaini16/mapcn` on GitHub)
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [shadcn-ui, uiable, 21st-dev, component-gallery]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# mapcn

## What it is

A library of ready-to-use map components, built on MapLibre GL and Tailwind CSS, distributed as a shadcn/ui registry: the code is copied into the project instead of installed as a closed package.

## When to open it

When a project needs an interactive map (routes, markers, clustering, GeoJSON) matching the same visual conventions as the rest of the shadcn components, without wiring up the MapLibre integration from scratch.

## Most useful

Components for a base map, controls, markers, popups, routes, arcs, GeoJSON support and clustering. Requires Tailwind CSS and shadcn/ui already set up in the project; installed with `pnpm dlx shadcn@latest add @mapcn/map` (or the npm/yarn/bun equivalent), a command that also installs `maplibre-gl` automatically.

## Using it with agents

It includes a "Copy prompt for your agent" button meant to hand component context straight to a coding agent; no dedicated MCP server was found during this review.

## Watch out for

Since code is copied instead of relying on a versioned package, mapcn updates don't arrive automatically: you need to re-run the command or manually merge changes. If you need to self-host MapLibre's Web Worker, you must manually copy it into the public folder and update the worker URL.

## Reusable ideas

- Extend shadcn's registry model to a specific domain (maps) instead of only generic UI components
- A "copy prompt for your agent" button as a cheap way to hand an agent context without exposing a full MCP
- Explicitly document the point where a developer can "drop down" to the raw map instance when the component isn't enough

## Related

[shadcn-ui](shadcn-ui.md), [uiable](uiable.md), [21st-dev](21st-dev.md), [component-gallery](component-gallery.md)
