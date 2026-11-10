---
title: ColorBox
description: Palette generator built on OKLCH and OKLAB, checking WCAG contrast as you edit and exporting CSS, Tailwind, Figma tokens or JSON.
url: https://colorbox.io
type: tool
formats: palette generator · OKLCH and OKLAB interpolation · live WCAG 2.1 contrast · export CSS, Tailwind, Figma tokens and JSON · Figma plugin · AI guide
topics: [color, documentation]
verdict: very-useful
agent: [llms-txt]
pricing: free
licence: Described as free and browser-based at review; no licence for the tool's own code is stated on the pages read
licence_class: not-stated
reviewed: 2026-11-10
status: active
related: [oklch, hihayk-scale, poline]
---
[← Atlas](../site/home.md) · Topics: [color](../topics/color.md), [documentation](../topics/documentation.md)


# ColorBox

## What it is

A palette generator with an unusual starting position: it interpolates in OKLCH and OKLAB, the perceptually uniform spaces, instead of in HSL. The practical consequence is that a ramp of a single hue stays even in apparent lightness, which is exactly what a UI palette needs and what an HSL ramp fails to deliver — the yellow step always looking much lighter than the blue one.

Around that core the tool is a working surface rather than a demo: import and export, copy, a configuration panel, live WCAG 2.1 contrast checks against the palette as you edit, and export targets for CSS, Tailwind, Figma tokens and JSON.

## When to open it

Open it at the start of a project, before colours are chosen, when you need a ramp that will pass contrast rather than one that looks fine as swatches. Also open it when you have to hand tokens to both a designer and a developer, since the same palette leaves as Figma tokens and as CSS variables.

## Most useful

- **Perceptual interpolation**, so a ten-step ramp has no surprise light in the middle.
- **Contrast checked while editing**, which turns accessibility from a later audit into a constraint you feel.
- **Four export formats** — CSS, Tailwind config, Figma tokens, JSON — so the palette is portable into the tools each side of the team already uses.
- **Explanatory pages beside the tool**: OKLCH versus HSL, why perceptual uniformity matters, and an AI guide for using it with assistants.
- **A Figma plugin**, for teams that start in the design tool rather than the browser.

## Using it with agents

`llms.txt` resolves and describes the tool, its core features and the individual documentation pages, including the AI guide. That gives an agent the vocabulary of the tool and the export shapes, though the palette maths itself happens in the browser, so an agent should generate values with a library and use this to check them.

## Watch out for

- Perceptual uniformity fixes the *evenness* of a ramp; it does not fix hue harmony across a whole palette.
- WCAG 2.1 checking does not cover APCA or the newer contrast guidance, so the pass mark is only as strict as the older standard.
- Exported tokens still need naming decisions, which is where most palettes actually fail.
- No licence is stated for the tool's own code, so export the values, not the implementation.

## Reusable ideas

- Interpolate in a perceptual space and the ramp stops needing manual correction.
- Show contrast ratios in the editor rather than in a separate checker.
- Offer the same palette in the format each role already uses.
- Publish a short page explaining the maths; it is the difference between a toy and a tool people trust.

## Related

[OKLCH](oklch.md), [Scale](hihayk-scale.md), [Poline](poline.md)
