---
title: MetalForge
description: Gallery and live editor for shader animations, with SwiftUI, React Native and web outputs and an MCP beta.
url: https://metalforge.xyz
type: tool
formats: WebGPU and WebGL effects · SwiftUI, React Native and web outputs · MCP beta
topics: [3d-and-shaders, motion, assets]
verdict: useful
agent: [mcp]
pricing: freemium
licence: The editor and previews are free. Pro is €9.99/month or €80/year at review (the listed yearly price was discounted from €120) and unlocks code downloads and MCP beta. Terms allow generated snippets in personal or commercial apps, but prohibit sharing or reselling the shader source; site code is proprietary.
licence_class: proprietary-paid
reviewed: 2026-09-29
status: active
related: [canvas-ui, paper-shaders, shadercn, orbkit, abstract-by-wannathis]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [assets](../topics/assets.md)

# MetalForge

## What it is

MetalForge is a gallery and browser editor for shader animations. At review its homepage listed effects filtered by Website, 3D, Glass, Backgrounds, Orbs, Logo & Photo, Buttons, Cards, Loaders, Progress and Characters. A dark, filterable gallery links to individual effects, whose editor exposes parameters and previews for SwiftUI, React Native and web.

## When to open it

Use it to explore a shader treatment visually, tune its parameters in a live preview, or compare how an effect might translate between Apple platforms, React Native, Android and web. It is especially useful for decorative motion and shader-driven interface details.

## Most useful

- The home grid links to distinct examples such as [Liquid Heart](https://metalforge.xyz/hearts/liquid), [Shatter button](https://metalforge.xyz/buttons/shatter), [Tide loader](https://metalforge.xyz/loaders/tide) and [Cumulus](https://metalforge.xyz/cumulus).
- Effects can be filtered by use rather than implementation, including Glass, Backgrounds, Buttons, Cards and Loaders.
- The editor provides shareable parameterized URLs, so a tuned appearance can be revisited before export.
- Pro can download the generated effect code for supported platforms. The current pricing page lists SwiftUI, React Native and web.
- The homepage now promotes an MCP beta for connecting an AI to these effects; the link leads to account sign-in.

## Using it with agents

MetalForge advertises an MCP beta from the homepage and pricing page. Access leads to sign-in and is included with Pro; the MCP configuration and tool details were not publicly visible without an account. A browser can inspect the gallery and shareable effect URLs.

## Watch out for

- The free tier previews effects but does not export code; Pro costs €9.99/month or €80/year at review. The terms say the yearly price is currently discounted from €120 and may change.
- Generated shader templates remain MetalForge's property. Its terms allow generated code in personal and commercial apps without attribution, but prohibit publishing or redistributing the shader source or selling the effect by itself.
- MetalForge's own source code is not open source; the licences page covers third-party dependencies only.
- Check performance and reduced-motion behavior in the target product; a full-quality desktop preview does not demonstrate a mobile performance budget.

## Reusable ideas

- Organize effects by the UI job they serve—background, control, loader or character—so a designer can begin with the interaction need.
- Keep the preview connected to adjustable parameters and a shareable URL, making visual exploration reproducible.
- Offer a single effect as a family of related platform outputs while keeping each platform's native implementation visible.

## Related

[Canvas UI](canvas-ui.md), [Paper Shaders](paper-shaders.md), [shadercn](shadercn.md), [Orbkit](orbkit.md), [Abstract by Wannathis](abstract-by-wannathis.md)
