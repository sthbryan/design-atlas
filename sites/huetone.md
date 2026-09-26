---
title: Huetone
description: LCH/OKLCH palette editor that lines up tone steps across hues, with WCAG and APCA readouts.
url: https://huetone.ardov.me
type: tool
formats: tool
topics: [color, typography-and-styles]
verdict: useful
agent: []
pricing: free
licence: Free / MIT (source on GitHub)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [ramps, oklch, color-review, dialkit]
---
[← Atlas](../README.md) · Topics: [color](../topics/color.md), [typography-and-styles](../topics/typography-and-styles.md)

# Huetone

## What it is

Huetone is a browser app by Alexey Ardov for building colour systems where contrast is predictable. A palette is a grid: each row is a hue and each column is a tone, and every swatch is edited in lightness, chroma and hue rather than RGB. Charts under the grid plot L, C and H across the row, so uneven steps are easy to spot. You can switch between CIE LCH and OKLCH. Ardov credits a 2019 Stripe article on accessible colour systems as the starting point. The code is TypeScript with React and chroma.js, and the colour conversion maths comes from the CSS working group's reference code. It is MIT-licensed on GitHub (about 450 stars). The last commit was in November 2023.

## When to open it

Open it when you already have a palette, or want to build one, and need every step in a ramp to sit at a matching lightness across hues. This way a "blue 600" and a "red 600" pass the same contrast checks. It also works well for checking a design system's existing scale before you add new hues.

## Most useful

- **Contrast readouts per swatch**: each selected colour shows its WCAG 2 ratio and its APCA value against the first tone in its row, against white and against black
- **Fourteen preset palettes** to study or fork, including Tailwind, Radix (light and dark), IBM, Stripe, GitHub, Ant Design, Chakra UI and USWDS
- **Equalise actions**: make hue or lightness even along a row or column, and an action that nudges out-of-gamut LCH values back into displayable sRGB
- **Greyscale preview**: hold `B` to see the palette without hue and check that lightness alone carries the hierarchy
- **Keyboard editing**: `L`, `C` or `H` plus the arrow keys changes one channel, and modifier keys move or duplicate rows and columns
- **Exports**: a hex JSON palette you can edit and paste back in, CSS custom properties, a token JSON for the Tokens Studio Figma plugin, and a shareable palette link

## Using it with agents

There is no API, MCP server or llms.txt, and the app only renders with JavaScript. The useful handoff is the output: copy the CSS variables or token JSON into the repo and let the agent wire them into the theme. The hex JSON is plain data, so an agent can also write a draft palette in that shape for you to paste into Huetone and tune by eye.

## Watch out for

- The app has not been updated since late 2023. It still works, but expect no new features or fixes
- The APCA readout uses a WCAG 3 working-draft algorithm, and the credits say it may change. Treat WCAG 2 as the compliance bar
- Palettes are saved in the browser's local storage, so clearing site data loses them. Export or copy a link first
- It edits and checks palettes, but it does not generate a full ramp from one brand colour

## Reusable ideas

- Line up the same tone step across all hues so contrast rules can be written once per step, not per colour
- Graph lightness, chroma and hue along a ramp so a bumpy scale shows up as a bumpy line
- Offer a greyscale toggle so designers can test whether hierarchy survives without colour
- Show contrast against the page background and against pure white and black side by side

## Related

[Ramps](ramps.md), [OKLCH](oklch.md), [Color.review](color-review.md), [DialKit](dialkit.md)
