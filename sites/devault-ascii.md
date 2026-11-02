---
title: Devault ASCII
description: Browser generator that redraws an image or video as ASCII, braille, halftone dots or dither, with CRT-style finishing controls and a hold-to-compare toggle.
url: https://devault-ascii.pages.dev
type: tool
formats: image and video to ASCII · braille, halftone and dither modes · live finish controls · browser export
topics: [assets, inspiration]
verdict: useful
agent: []
pricing: free
licence: Free to use in the browser; exporting needs a free account and produces no watermark, per the page at review. No licence for the generated artwork is stated, and paid tiers were not visible
licence_class: proprietary-free
reviewed: 2026-11-02
status: active
related: [ascii-studio, ditherland, halftone-maker]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [inspiration](../topics/inspiration.md)


# Devault ASCII

## What it is

An in-browser generator that converts an image or a video into character-based artwork: ASCII, braille, halftone dots, dither or brick mosaics. What makes it a design reference rather than a toy is the finishing panel — palette or original colour, edge outlines, glow, brightness, scanlines, CRT curvature, chromatic aberration, film grain and flicker — and the fact that the picture redraws live as you move a control. There is also a hold-to-compare gesture that swaps back to the source while pressed.

## When to open it

Open it when a hero image, a section divider or a poster needs a print or terminal texture, and you want to test a treatment fast instead of writing a shader. The live controls make it a way to find out which of these effects actually earns its place.

## Most useful

- **Five output modes** that read differently: characters, braille dots, halftone, dither and brick mosaic.
- **A real finishing stack**: outlines, glow, scanlines, curvature, aberration, grain, flicker — the vocabulary of a CRT treatment.
- **Live redraw**, so a control's effect is evaluated while moving, not after an export.
- **Hold to compare**, a small interaction worth stealing: press and the source returns.
- **Video input**, which is rare in ASCII tools and turns the effect into motion.

## Using it with agents

No `llms.txt`, MCP server or API was found at review. The generator is client-side and account-gated only at export, so an agent can read the page but cannot render. Treat it as a human exploration tool and reimplement the chosen treatment in code.

## Watch out for

- The page exposes only the finishing panel in the text it serves; the mode selector sits behind JavaScript.
- Export needs an account, and the licence for what you generate is not stated.
- Effects stack quickly and the result stops reading as ASCII; restraint is on the user.
- Scanlines and aberration are fashion, and they date a design fast.
- Nothing here produces editable vector output; it is raster or characters.

## Reusable ideas

- Let effects apply live to the actual content, not a sample.
- Put a hold-to-compare gesture on any destructive-looking filter.
- Offer several output primitives (characters, dots, dither, mosaic) rather than presets of one.
- Keep finishing controls separate from the render mode.

## Related

[ASCII Studio](ascii-studio.md), [Ditherland](ditherland.md), [Halftone Maker](halftone-maker.md)
