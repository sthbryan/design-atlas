---
title: Tooooools
description: "Free lo-fi effects for photos and video: dithering, stippling, halftone, CRT, ASCII, with SVG export."
url: https://www.tooooools.app
type: tool
formats: tool · image and video effects
topics: [assets, typography-and-styles]
verdict: useful
agent: []
pricing: free
licence: free, no sign-up; the About page says output may be used for personal and commercial work and attribution is optional. Voluntary crypto donations; no uptime guarantee.
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [dotforge, ascii-studio, efecto, fffuel]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [typography-and-styles](../topics/typography-and-styles.md)

# Tooooools

## What it is

Tooooools (with exactly six o's) is a free browser toolkit by the designer Daniil Sukhovskoy for giving images and short videos a lo-fi, graphic-print treatment. You upload a JPG, PNG or MP4, pick an effect, tune it and export. It is built with p5.js (plus p5.js-svg for vector output), and its CRT effect uses a WebGL shader. The public changelog runs from September 2024 to an ASCII effect added in September 2025. The "More effects" link goes to Effect.app, a separate WebGL effects product with an account and paid plans.

## When to open it

- When you need dithered, stippled, halftone or ASCII versions of a photo for a poster, hero, avatar set or social post.
- When you want vector (SVG) output from a photo that you can recolour or animate later.

## Most useful

- **Dithering**: Floyd–Steinberg, Bayer and random patterns, pixel size, threshold and a colour mode.
- **Stippling and dots**: regular or Ben-Day grids at any angle, with minimum and maximum dot sizes.
- **Other effects**: patterns, edge, distort, displace, bevel, recolour, scatter, cellular automata, gradients and a CRT effect with monitor, TV and LCD modes and bloom.
- **ASCII**: columns, rows, character set and optional borders, copied as text to the clipboard.
- **Animate**: "slide" and "stack" tools that turn a set of uploaded images into an orbiting or stacked-card animation for 9:16, 3:4, 1:1 or 16:9 frames.
- **Pre-processing**: blur, grain, gamma and black and white points before the effect is applied.

## Using it with agents

There is no API, MCP server, llms.txt or package. Make the asset by hand, commit the PNG, SVG or video to the repo, and let the agent reference it. SVG exports (for stippling, dots, edge and dithering) are the most agent-friendly, because an agent can recolour or trim the markup directly.

## Watch out for

- Where processing happens and what happens to uploads are not stated; the page loads Google Analytics and Tag Manager, so avoid sensitive images.
- Video support covers only some effects, and the CRT shader does not support video yet, according to the changelog.
- The About page says the site may break or go offline at times, so keep your source files and settings.
- SVG exports from dense stippling or dithering can hold thousands of shapes; simplify them before shipping them inline.

## Reusable ideas

- Offer a small pre-processing panel (levels, blur, grain) before the effect, since most bad dithering comes from a flat source image.
- Export vector output for effects built from shapes, so the result can be scaled and recoloured later.
- Keep one keyboard shortcut to open files and one to export across every tool.
- Keep a dated changelog page, even for a one-person side project.

## Related

[DotForge](dotforge.md), [ASCII Studio](ascii-studio.md), [Efecto](efecto.md), [Fffuel](fffuel.md)
