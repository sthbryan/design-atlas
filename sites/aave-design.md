---
title: Aave Design & Engineering
description: Aave Labs’ engineering article pairs live glass-effect controls with a cross-browser SVG displacement and WebGL implementation.
url: https://aave.com/design
type: documentation
topics: [3d-and-shaders, motion, components]
verdict: niche
agent: []
pricing: free
licence: The public article and its examples are free to read. Aave's terms permit reasonable attributed documentation extracts for building or writing, but treat code samples as illustrative and reserve rights in the site and designs; check individual open-source licences for separately licensed components.
licence_class: proprietary-free
reviewed: 2026-09-26
status: active
related: [liquid-glass, canvas-ui, paper-shaders, shadercn]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [components](../topics/components.md)

# Aave Design & Engineering

## What it is

Aave Labs' Design & Engineering page is a small official publication. Its current feature article, [Building Glass for the Web](https://aave.com/design/building-glass-for-the-web), documents a cross-browser refractive glass effect and demonstrates it in switches, sliders, toggle groups, QR codes and a video player.

## When to open it

Open the article when evaluating a glass treatment for real web controls or when a visual prototype needs to work beyond Chromium. It is useful as an engineering-backed motion and component reference, not as a general design system or component package.

## Most useful

- The live controls show how a glass lens can act as a switch thumb, slider handle or moving selection indicator while the underlying labels remain readable.
- The parameter demo exposes lens width, height, corner radius, refraction scale, depth, curvature, chromatic fringe, blur and highlight.
- The article explains when the same displacement map feeds an SVG filter for live DOM and when a WebGL renderer is needed for canvas or video content.
- Browser-specific notes cover Safari filter caching, displacement-map work reduction and filter-size limits.

## Using it with agents

There is no published MCP, API, CLI, registry, llms.txt or skill. The article is readable in a browser. Aave's terms permit sharing reasonable attributed excerpts of documentation for building or writing, but code samples are illustrative and have no warranty.

## Watch out for

- The publication is currently a very small site with one in-depth technique article, not a broad design reference library.
- The article describes Aave's own implementation; test the effect in the browsers and content types your product supports.
- Aave's terms reserve rights in the site's designs and content. Separate open-source tools follow their own licences; do not infer a reusable licence from the article alone.

## Reusable ideas

- Keep the content visible and interactive outside the visual lens; the article's technique refracts the element's own pixels rather than making the surface a dead overlay.
- Reuse one displacement-map model across renderers, switching to WebGL where SVG filtering cannot reach the content.
- Build a family of controls around one visual effect, then tune refraction strength to the information each control must preserve.

## Related

[Liquid Glass](liquid-glass.md), [Canvas UI](canvas-ui.md), [Paper Shaders](paper-shaders.md), [shadercn](shadercn.md)
