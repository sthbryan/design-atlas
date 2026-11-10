---
title: Poline
description: Palette library that draws lines between anchor colours over polar HSL coordinates, with a playground to shape the result.
url: https://meodai.github.io/poline
type: js-library
formats: TypeScript library · dependency-free function · interactive playground · anchors and polar HSL maths · palette export
topics: [color]
verdict: useful
agent: []
pricing: free
licence: No licence is read on the page at review; check the repository before shipping it
licence_class: not-stated
reviewed: 2026-11-10
status: active
related: [colorbox, hihayk-scale, oklch]
---
[← Atlas](../site/home.md) · Topics: [color](../topics/color.md)


# Poline

## What it is

A palette generator built on a different mental model from the usual hue-plus-lightness grid: you place anchor colours, and the library draws a line between them through polar HSL coordinates, then samples along that line. The page describes the function honestly — lightweight, dependency-free, written in TypeScript — and calls the output "esoteric", which is fair: the results are less even than an OKLCH ramp and more characterful.

The playground is the explanation. Anchors sit on a polar field, lines connect them, and a strip of sampled colours updates as you move things, so the relationship between the geometry and the palette is visible while you work.

## When to open it

Open it when you want a palette with a point of view for a brand or an illustration, rather than a UI ramp that has to stay neutral, or when you need to generate many related palettes programmatically and want a small deterministic function instead of an opinionated design tool.

## Most useful

- **Anchors as the input**, which is closer to how a designer thinks than a hue wheel plus a saturation slider.
- **Polar coordinates for hue and saturation**, so an interpolation can travel around the colour wheel and change vividness on the way.
- **A dependency-free function**, easy to drop into a build step or a token pipeline.
- **A playground that shows the geometry**, making the output predictable rather than lucky.

## Using it with agents

No `llms.txt` or MCP server at review. The library is small and typed, so an agent can read its source or types directly, and the function signature is the interface — better than a documentation page that can drift.

## Watch out for

- Palettes generated this way are not contrast-checked; run the output through a checker before using it for text.
- "Esoteric" is a warning as much as a description: some results will be unusable for UI and fine for illustration.
- HSL maths is not perceptually uniform, so a line between two anchors can dip in apparent lightness.
- The licence is not stated on the page reviewed; confirm it in the repository before adopting.

## Reusable ideas

- Let people place anchors and interpolate between them; it is a faster path to a characteristic palette than tweaking swatches.
- Show the underlying geometry beside the result, so the tool teaches its own model.
- Keep the generator a pure function, separate from the interface that wraps it.
- Name your output honestly — "esoteric" sets the right expectation.

## Related

[ColorBox](colorbox.md), [Scale](hihayk-scale.md), [OKLCH](oklch.md)
