---
title: Ditherland
description: Browser editor for dithering images and video, plus an animated generator with pixel, palette and tone-curve controls.
url: https://ditherland.leobecker.com
type: tool
formats: image editor · video effects · animated pattern generator
topics: [assets, color]
verdict: useful
agent: []
pricing: not-stated
licence: not stated; no repository or reuse terms were linked from the reviewed interface.
licence_class: not-stated
reviewed: 2026-09-27
status: active
related: [ditther, dotforge, dither-kit]
---
[← Atlas](../README.md) · Topics: [assets](../topics/assets.md), [color](../topics/color.md)

# Ditherland

## What it is

Ditherland is a browser based image and video effects editor with a separate procedural generator. The image view loads a sample artwork on first visit and renders an editable preview. At review, its controls offered three algorithms (Bayer, Floyd–Steinberg and Atkinson), five matrix levels, two to four colours, native/2K/4K output, palettes, tone curve, brightness, contrast, scale and cut points. The generator makes animated pixel fields with selectable Blob, Sparkle and Slide motion.

## When to open it

- Give a photograph, illustration or short video a limited-colour print, game-pixel or ordered-dither treatment.
- Explore how matrix size, algorithm and palette change the texture before building a similar effect.
- Generate a looping dithered field for a decorative visual, then check the export at the intended size.

## Most useful

- **Image controls**: swap among three dithering algorithms and five matrix levels (at review), choose two to four colours and select a named palette.
- **Tone shaping**: add or drag points on the tone curve and adjust brightness, contrast, scale and colour cut points.
- **Generator**: switch to a live procedural canvas, choose one of three animation patterns and adjust its speed and palette.
- **Video mode**: the interface provides a separate video workflow alongside still images; check processing and export behaviour with your own clip before relying on it.

## Using it with agents

No MCP, CLI, API, agent guide or downloadable source repository was linked from the reviewed interface. An agent can still inspect the visible controls and use them as a design reference, but the implementation and permission to reuse it are not published there.

## Watch out for

- No licence or terms for the tool or generated output were stated in the reviewed page; treat it as look-only until the creator clarifies reuse rights.
- The generator is a decorative texture tool rather than a data visualization. Preserve an accessible text or semantic alternative if an effect carries information.
- High resolution output and video workflows can have different processing costs and browser limits; test the actual target file and device.

## Reusable ideas

- Keep the effect preview large beside compact, grouped controls so every change can be judged immediately.
- Offer recognizable algorithms and matrix sizes as presets, then leave palette and tone controls available for tuning.
- Separate still, video and procedural workflows while keeping the shared look controls easy to find.

## Related

[Ditther](ditther.md), [DotForge](dotforge.md), [Dither Kit](dither-kit.md)
