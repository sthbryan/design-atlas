---
title: OriginKit
description: An interactive component catalogue for shader, cursor, animation and other high-impact web effects, with live parameter controls.
url: https://originkit.dev/
type: component-library
formats: interactive component catalogue · live property editor · MCP server
topics: [components, 3d-and-shaders, motion]
verdict: useful
agent: [mcp]
pricing: freemium
licence: Free, Pro and Ultimate tiers are listed at review. The terms restrict redistribution of components and templates; check their current conditions before reuse.
licence_class: source-available
reviewed: 2026-09-27
status: active
related: [componentry, shadcn-ui, godly]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md)

# OriginKit

## What it is

OriginKit is a browsable library of interactive React effects, including backgrounds, cursor treatments, animation, text, buttons and loaders. Individual entries combine a live canvas with controls for changing the effect.

## When to open it

Use it when a page needs a bold cursor, shader, particle or animated background treatment and you want to see its parameters before deciding whether it fits.

## Most useful

- The home catalogue groups components by effect category. Open a card to move from the collection into its interactive editor.
- **[Cursor Ring Field](https://originkit.dev/components/cursor-ring-field?preset=base)** renders bright cyan and green particles in a ring on a dark canvas. A side panel exposes background and colour, density, dot size, speed, camera distance and ring settings.
- The editor separates a large preview from parameter controls and related component cards. Change one setting at a time to see how density, colour and motion alter the visual weight.

## Using it with agents

OriginKit documents an [MCP server](https://mcp.originkit.dev) with component metadata and property schemas. The MCP gives an agent a path to find entries and their adjustable options; the browser remains useful for checking the rendered result.

## Watch out for

- The free plan has a limited catalogue and daily copy limits; paid Pro and Ultimate plans are listed on the [pricing page](https://originkit.dev/pricing). Current prices can change.
- The terms restrict redistribution of components and templates. Read the current terms for the intended use before shipping copied code.
- Shader and particle previews can be visually heavy. Test performance and reduced-motion behavior at the target viewport and device.

## Reusable ideas

- Keep a visual effect preview large enough to judge composition, then expose its parameters in a neighboring control panel.
- Group controls by visual role—palette, density, scale, speed and camera—so exploration follows how a designer thinks about the result.
- A compact related-effects rail makes it easy to compare nearby treatments without losing the active preview.

## Related

[Componentry](componentry.md), [shadcn/ui](shadcn-ui.md), [Godly](godly.md)
