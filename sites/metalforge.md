---
title: MetalForge
description: Live GPU-effect editor and gallery that previews shader looks and exports tuned code for SwiftUI, React Native, Android and web.
url: https://metalforge.xyz
type: tool
formats: WebGPU and WebGL effects · Metal and SwiftUI export · Skia, AGSL and web variants
topics: [3d-and-shaders, motion, assets]
verdict: useful
agent: []
pricing: freemium
licence: The editor and previews are free. Pro is €9.99/month or €29 one-time at review and unlocks generated files and runnable projects. Its terms license generated effects for personal or commercial inclusion inside an app, but prohibit sharing or reselling the generated shader source; the site's own code is proprietary.
licence_class: proprietary-paid
reviewed: 2026-09-26
status: active
related: [canvas-ui, paper-shaders, shadercn, orbkit, abstract-by-wannathis]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [assets](../topics/assets.md)

# MetalForge

## What it is

MetalForge is a gallery and browser editor for animated GPU effects. The home page displays live previews in a dark, filterable grid, with categories for website, 3D, glass, backgrounds, orbs, logo and photo, buttons, cards, loaders, progress and characters. Its editor exposes effect parameters and exports platform-specific code.

## When to open it

Use it to explore a shader treatment visually, tune its parameters in a live preview, or compare how an effect might translate between Apple platforms, React Native, Android and web. It is especially useful for decorative motion and shader-driven interface details.

## Most useful

- The home grid links to distinct examples such as [Liquid Heart](https://metalforge.xyz/hearts/liquid), [Shatter button](https://metalforge.xyz/buttons/shatter), [Tide loader](https://metalforge.xyz/loaders/tide) and [Cumulus](https://metalforge.xyz/cumulus).
- Effects can be filtered by use rather than implementation, including Glass, Backgrounds, Buttons, Cards and Loaders.
- The editor provides shareable parameterized URLs, so a tuned appearance can be revisited before export.
- Pro can generate a real `.metal` file and SwiftUI view, plus supported Skia, AGSL and web versions and runnable sample projects.

## Using it with agents

There is no published MCP, API, CLI, registry, llms.txt or skill. A browser can inspect previews and shareable configurations. Code export is a Pro feature.

## Watch out for

- The free tier previews effects but does not export code; Pro costs €9.99/month or €29 once at review.
- Generated shader templates remain MetalForge's property. Its terms allow generated code in personal and commercial apps without attribution, but prohibit publishing or redistributing the shader source or selling the effect by itself.
- MetalForge's own source code is not open source; the licences page covers third-party dependencies only.
- Check performance and reduced-motion behavior in the target product; a full-quality desktop preview does not demonstrate a mobile performance budget.

## Reusable ideas

- Organize effects by the UI job they serve—background, control, loader or character—so a designer can begin with the interaction need.
- Keep the preview connected to adjustable parameters and a shareable URL, making visual exploration reproducible.
- Offer a single effect as a family of related platform outputs while keeping each platform's native implementation visible.

## Related

[Canvas UI](canvas-ui.md), [Paper Shaders](paper-shaders.md), [shadercn](shadercn.md), [Orbkit](orbkit.md), [Abstract by Wannathis](abstract-by-wannathis.md)
