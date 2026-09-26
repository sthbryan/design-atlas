---
title: OKLCH
description: Evil Martians' OKLCH picker and converter with P3/Rec. 2020 gamut views and sRGB fallbacks.
url: https://oklch.com
type: tool
formats: tool
topics: [color, typography-and-styles]
verdict: very-useful
agent: []
pricing: free
licence: Free / MIT (source on GitHub)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [huetone, ramps, color-review, dialkit]
---
[← Atlas](../README.md) · Topics: [color](../topics/color.md), [typography-and-styles](../topics/typography-and-styles.md)

# OKLCH

## What it is

OKLCH (the OKLCH Color Picker & Converter) is a picker and converter for the OKLCH colour space, which CSS now supports natively. It is made at Evil Martians by Andrey Sitnik and Roman Shamin. You set lightness, chroma, hue and alpha on sliders. Next to them are 2D charts of each pair of channels, with the sRGB, Display P3 and Rec. 2020 gamut edges drawn in, plus an optional 3D model of the colour space. Paste a HEX, RGB or HSL value and it converts to OKLCH. It also gives the closest sRGB fallback, found by lowering chroma. A sister site, lch.oklch.com, does the same for CIE LCH. The source is on GitHub (about 2,000 stars) with an MIT licence file, and it was still being updated in September 2026.

## When to open it

Open it when you move a codebase from hex or HSL to `oklch()`, choose wide-gamut P3 colours with a safe sRGB fallback, or want to see why two colours with the same HSL lightness don't look equally light. The site also links to Evil Martians' article on moving CSS from RGB and HSL to OKLCH.

## Most useful

- **Paste-to-convert**: HEX, RGB or HSL in; OKLCH out, plus formats such as Lab, LCH, OKLab, linear RGB and P3
- **Gamut overlays**: toggles for P3 and Rec. 2020 show which colours only exist on modern screens
- **Fallback output**: the nearest sRGB colour for browsers or screens that can't show the chosen one
- **Linkable colours**: the URL hash holds `l,c,h,a`, so any colour can be shared as a link
- **Figma note**: a pointer on using the result in Figma with a P3 colour profile
- **Harmonizer link**: a companion Evil Martians tool for building palettes with OKLCH and APCA

## Using it with agents

There is no API, MCP server or llms.txt. The site is a single-colour tool, and agents can already write `oklch()` values, so its main job is checking them. Paste a value an agent produced to see whether it is out of gamut and what its sRGB fallback is. Adding an `oklch.com/#l,c,h,a` link to a PR or design note lets reviewers open the exact colour.

## Watch out for

- It picks one colour at a time. It does not build ramps or tokens, so pair it with a palette tool
- High-chroma OKLCH values can fall outside sRGB. Always ship the fallback, or check with `@media (color-gamut: p3)`
- It converts and previews, but has no contrast checking of its own. Use the Harmonizer or a contrast tool for that
- The 3D view uses WebGL and can be heavy on low-end devices

## Reusable ideas

- Draw gamut boundaries on a picker so people can see when a colour won't survive on common screens
- Always pair a wide-gamut colour with a computed fallback, not a hand-picked one
- Keep a tool's current state in the URL hash so any result can be linked
- Explain a new colour format next to the tool that uses it, not on a separate page

## Related

[Huetone](huetone.md), [Ramps](ramps.md), [Color.review](color-review.md), [DialKit](dialkit.md)
