---
title: Color
description: OKLCH pickers, palette and token generators, and contrast checkers.
order: 14
---
[← Atlas](../README.md)

# Color

Colour tools for interfaces: OKLCH pickers, palette and token generators, contrast checkers and references for dark-first design.

## Start here

- [Ramps](../sites/ramps.md) — one brand hex becomes eight OKLCH ramps and light/dark semantic tokens with enforced AA or AAA contrast; MIT, with `llms.txt` and a keyless JSON API.
- [Huetone (stale)](../sites/huetone.md) — an LCH/OKLCH grid editor for lining up tone steps across hues, with WCAG 2 and APCA readouts on every swatch.
- [OKLCH](../sites/oklch.md) — Evil Martians' picker and converter with sRGB, P3 and Rec. 2020 gamut edges and a computed sRGB fallback.
- [Color.review](../sites/color-review.md) — the fastest visual check for one text and background pair, with pass/fail lines drawn on the picker.

## All sources

<!-- atlas:sources:start -->
- [Anthropic Skills](../sites/anthropic-skills.md) — Anthropic's frontend-design anti-default skill plus canvas-design, theme-factory and brand-guidelines, all Apache-2.0.
- [Color.review](../sites/color-review.md) — WCAG 2.1 contrast checker with pass/fail lines on the picker and shareable pair links.
- [daisyUI](../sites/daisyui.md) — MIT Tailwind plugin of semantic component classes and 35 themes; llms.txt doubles as a skill, paid Blueprint MCP.
- [Dark Mode Design](../sites/dark-mode-design.md) — About 380 dark-by-default websites, hand-picked since 2020; plain paginated grid, no filters.
- [Design DNA](../sites/design-dna.md) — Turns references into a three-part JSON profile (tokens, style, WebGL effects), with measured colours and a ΔE verify loop.
- [extract-design-system](../sites/extract-design-system.md) — Pulls colours, fonts, spacing, radii and shadows from a public URL into starter tokens.json and tokens.css, with a CI audit.
- [Fffuel](../sites/fffuel.md) — About 65 free SVG generators for grainy gradients, blobs, noise and patterns, plus simple palette tools.
- [Gradient Spin](../sites/gradient-spin.md) — A tiny React grid spinner swept by an OKLab-blended gradient wave, in four patterns.
- [Huetone (stale)](../sites/huetone.md) — LCH/OKLCH palette editor that lines up tone steps across hues, with WCAG and APCA readouts.
- [Icon Museum](../sites/icon-museum.md) — A hand-picked archive of 245 crafted iOS app icons with copyable palettes, designer credits and redesign history.
- [Jakub Krehel's skills](../sites/jakub-krehel-skills.md) — Eleven modular skills that review with evidence and polish UI, typography, colour, layout, accessibility and copy.
- [OKLCH](../sites/oklch.md) — Evil Martians' OKLCH picker and converter with P3/Rec. 2020 gamut views and sRGB fallbacks.
- [Radix](../sites/radix.md) — WorkOS-maintained primitives, Themes, 15px icons and the 12-step Radix Colors system.
- [Ramps](../sites/ramps.md) — One brand hex becomes OKLCH ramps and light/dark semantic tokens with enforced AA/AAA, via llms.txt and a JSON API.
- [Shadcn Studio](../sites/shadcn-studio.md) — ThemeSelection's shadcn suite: blocks, templates, theme generator, Figma kit and an MCP; strict site licence.
- [StyleSeed](../sites/styleseed.md) — 23-skill engine that locks decisions in STYLESEED.md, builds OKLCH palettes from one colour, and scores UI to 80 or above.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Line up the same tone step across every hue so a "blue 600" and a "red 600" pass the same checks, and contrast rules can be written once per step (Huetone).
- Plot lightness, chroma and hue along each ramp so an uneven scale shows up as a bumpy line, and test in greyscale that hierarchy survives without hue (Huetone).
- Enforce contrast while generating tokens, and report the measured ratio on every token so the claim can be checked (Ramps).
- Resolve semantic tokens per mode instead of mapping dark mode by hand, and pair each fill with its `text-on-*` token (Ramps).
- Pair every wide-gamut colour with a computed sRGB fallback, not a hand-picked one (OKLCH).
- Draw pass/fail boundaries on the picker itself so people see how far a failing colour has to move (Color.review).
- Keep a tool's state in the URL so a colour, a pair or a whole palette can be linked from a PR or design note (OKLCH, Color.review, Ramps).
- Serve the same palette as HTML for people and as plain text or JSON for agents, so they fetch real values instead of inventing hex codes (Ramps).
- For a dark palette, measure a few reference sites (background shade, text colour, number of accents) and hand the agent those values rather than a vague mood (Dark Mode Design).

## Pitfalls

- Most colour tools have no API, MCP or `llms.txt` (Huetone, OKLCH, Color.review, Fffuel); Ramps is the exception. Usually the handoff is the exported CSS variables or token JSON.
- Treat WCAG 2 as the compliance bar. Huetone's APCA readout uses a working-draft algorithm that may change, and Ramps and Color.review measure WCAG 2.1 only.
- High-chroma OKLCH values can fall outside sRGB; always ship the fallback or gate the colour with `@media (color-gamut: p3)` (OKLCH).
- Generated ramps follow a fixed lightness curve, so hand-tuned brands still need edits. In Ramps, `text-disabled` sits below the minimum on purpose and the light-mode raised surface matches the base, so separate it with a shadow.
- Huetone keeps palettes in local storage and hasn't been updated since November 2023; export or copy a link before clearing site data.
- Fffuel lets you use generated images commercially but not redistribute them, so they can't go into templates or asset kits you ship.
- A reference site that looks readable isn't proof of contrast; check dark palettes against WCAG (Dark Mode Design). Color.review publishes no terms or privacy page and loads Google Analytics.

## Related topics

- [Typography and styles](typography-and-styles.md)
- [DESIGN.md files](design-md.md)
- [Assets](assets.md)
- [Inspiration](inspiration.md)
