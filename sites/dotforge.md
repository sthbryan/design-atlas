---
title: DotForge
description: Browser tool with 51 animated effects, dither patterns and post-FX; exports PNG, video or an HTML embed.
url: https://dotforge.vercel.app
type: tool
formats: tool · animated dither generator
topics: [assets, motion, typography-and-styles]
verdict: useful
agent: []
pricing: free
licence: "free, with no account; licence and terms for exported visuals or embed code: Not stated"
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [tooooools, ascii-studio, efecto, paper-shaders, dither-kit]
---
[← Atlas](../README.md) · Topics: [assets](../topics/assets.md), [motion](../topics/motion.md), [typography-and-styles](../topics/typography-and-styles.md)

# DotForge

## What it is

DotForge is a browser tool, in beta, for making looping dithered animations without writing shader code. It was built by the designer Kailash (@kail_designs), who announced it on X in March 2026. The app is plain JavaScript drawing on 2D canvases, hosted on Vercel. According to its scripts it has 51 animation effects: 30 procedural fields rendered through a dither pass (swirls, plasma, tunnels, topographic lines, metaballs, aurora) and 21 drawn effects such as dot tunnels, wire terrain, constellations, text waves and pixel sorting. On top of that come 27 post-processing filters.

## When to open it

- When you need an animated hero background, a loading visual, a social clip or a poster texture with a lo-fi, printed-screen look.
- When you want to explore a dither aesthetic quickly before committing to a shader or a Paper-style library.

## Most useful

- **Dither patterns**: Bayer 4×4 and 8×8, halftone, blue noise, crosshatch, diamond, spiral, ASCII and custom ASCII, with threshold, spread, pixel size and randomness controls.
- **Colour and motion**: foreground, background and accent colours, blend modes and palettes, speed, intensity, scale and an FPS limit.
- **Text and 3D**: type your own text into the text effects and rotate or auto-spin 3D scenes.
- **Post FX**: bloom, chromatic aberration, film grain, scanlines, CRT phosphor and curvature, glitch, posterise, light leaks, god rays and more.
- **Export**: PNG at preset or custom sizes, 5–15 second WebM or MP4 recordings, and a self-contained HTML embed (a canvas plus an inline script).

## Using it with agents

There is no API, MCP server, llms.txt or package. The useful hand-off is the HTML embed: copy it and let an agent turn it into a React component, adjust the colours to your tokens, or pause it for reduced-motion users. Exported videos and PNGs can be committed as ordinary assets.

## Watch out for

- The embed runs its animation loop on the main thread with a 2D canvas, so large sizes can be heavy on low-end devices; test performance and add a reduced-motion fallback.
- Video export records the live canvas, so the tab must stay in the foreground until it finishes.
- The layout is built for desktop or tablet; phones get a warning screen.
- The bug and feature form posts your text, browser user agent and current effect to a Google Apps Script endpoint.
- No licence is published. Treat the embed code as the author's until they say otherwise, and prefer exported media for commercial work.

## Reusable ideas

- Split the render into two stages (a greyscale field, then a dither pass) so any procedural effect can be dithered.
- Keep a "surprise me" preset button so newcomers see good results before touching any sliders.
- Export animations as a single self-contained snippet with no dependencies.
- Keep the post-effects stack separate from the base effect so looks can be mixed and saved as presets.

## Related

[Tooooools](tooooools.md), [ASCII Studio](ascii-studio.md), [Efecto](efecto.md), [Paper Shaders](paper-shaders.md), [Dither Kit](dither-kit.md)
