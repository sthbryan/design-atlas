---
title: Atmos
description: OKLCH palette workspace with shade, gamut and contrast tools for building UI color systems.
url: https://atmos.style
type: tool
formats: color palette workspace · OKLCH/LCH playground · contrast tools
topics: [color, typography-and-styles]
verdict: very-useful
agent: []
pricing: freemium
licence: Free trial with paid Pro and lifetime plans. The service terms reserve rights to the service and do not state a separate licence for palettes or site materials.
licence_class: proprietary-paid
reviewed: 2026-09-26
status: active
related: [oklch, huetone, ramps, color-review]
---
[← Atlas](../site/home.md) · Topics: [color](../topics/color.md), [typography-and-styles](../topics/typography-and-styles.md)

# Atmos

## What it is

Atmos is a browser color workspace for making interface palettes. The public Playground combines an editable color scale with OKLCH and sRGB controls, contrast checks, vision simulation and luminance views. Its color generator, shade generator and wheel are separate tools. A 14-day trial exposes Pro features; ongoing Pro and lifetime plans are paid, with the exact amount shown in the live pricing flow.

## When to open it

- When a brand color needs a usable UI scale with controlled lightness and chroma steps; try the [OKLCH Playground](https://atmos.style/playground).
- When comparing palette contrast or appearance under common color-vision simulations.
- When you want to inspect how hue shifts and gamut limits affect a generated ramp.

## Most useful

- **[OKLCH Playground](https://atmos.style/playground)**: the visible demo has Primary, Success, Danger and Neutral families, each with 800, 600, 400 and 200 steps. Selecting a swatch opens numeric lightness, chroma and hue controls alongside two charts of the palette values.
- **Contrast and vision tools**: test color pairs and simulate vision differences while the palette remains in view.
- **Shade generator**: make a tonal family from a seed, then check the ramp in the same workspace.
- **Gamut selection**: switch between sRGB, Display P3 and a wider gamut when judging whether a color is practical for a target display.

## Using it with agents

There is no published MCP, API, CLI, registry, skill or llms.txt. An agent can use the public demo as a visual check for a proposed palette, but saving projects and the full workspace require an account. The terms prohibit automated account registration.

## Watch out for

- The public Playground is a product preview; editing and persistence are gated by the paid workspace.
- An OKLCH ramp still needs explicit contrast checks for actual text and control states. A visually even scale is not itself an accessibility pass.
- Atmos's terms do not grant rights to reproduce its interface or other service materials. Treat its own UI as look-only and use only your own or cleared colors.

## Reusable ideas

- Put the numeric OKLCH controls, palette swatches and ramp charts in one editing loop so a change can be judged both as a value and as a system.
- Make contrast and vision simulation available beside the editable palette rather than on a separate checker page.
- Show gamut choices near the color values so display limitations stay visible during palette work.

## Related

[OKLCH](oklch.md), [Huetone](huetone.md), [Ramps](ramps.md), [Color.review](color-review.md)
