---
title: Scale
description: Eleven-step colour scale generator where dark and light ends rotate hue and saturation separately, and the URL holds the state.
url: https://hihayk.github.io/scale
type: tool
formats: colour scale generator · 11 generated steps · independent dark and light hue and saturation · copy colours or SVG · shareable URL state
topics: [color]
verdict: useful
agent: []
pricing: free
licence: No licence is stated on the page at review
licence_class: not-stated
reviewed: 2026-11-10
status: active
related: [colorbox, poline, oklch]
---
[← Atlas](../site/home.md) · Topics: [color](../topics/color.md)


# Scale

## What it is

A single-purpose tool that grew out of one good observation: a colour ramp is not one hue getting lighter. Scale starts from a base colour — given as hex or as RGB sliders — and generates eleven steps, but the dark end and the light end each get their own controls. Dark colours have an amount, a darkness, a hue angle and a saturation; light colours have an amount, a lightness, a hue angle and a saturation. With the defaults shown at review, the darker end rotates the hue by −51 degrees at 14 percent saturation while the lighter end goes +67 degrees at 20 percent, which is why the ramp reads as a family of related colours rather than a single washed-out hue.

The state lives in the URL fragment, encoded as a short slash-separated sequence, so any scale you make can be linked, bookmarked or pasted into an issue.

## When to open it

Open it when you need a surface ramp — card backgrounds, borders, hover states, an accent that has to work at both extremes — and the naive lightness steps look dead at the ends. Also a good reference when you are specifying a token ramp and need to argue that the dark end should shift hue.

## Most useful

- **Separate controls for the dark and light halves**, which is the idea worth stealing even if you never use the tool.
- **Eleven steps**, a sensible default for a full ramp from near-black to near-white.
- **Copy colours and copy SVG**, so the output can go into CSS or into a design deliverable.
- **Randomise all and randomise colour**, useful for exploring hue pairs you would not have tried.
- **URL-encoded state**, making a scale a shareable artefact rather than a screenshot.

## Using it with agents

No `llms.txt` or API at review. The interface is a client-side app, so an automated reader gets almost no text; the one machine-readable part is the URL format, which encodes every parameter and can be generated or parsed.

## Watch out for

- Hue rotation that pleases the eye can break contrast; this tool does not check ratios.
- Eleven steps is a lot of tokens for a small system; most products need five or six and a couple of accents.
- The generated values are sRGB hex, so wide-gamut displays get no benefit.
- No licence is stated for the code.

## Reusable ideas

- Give the dark end and the light end of a ramp different hue rotations; the result looks drawn rather than computed.
- Encode tool state in the URL so results are linkable.
- Ship a copy-as-SVG action next to copy-as-values; designers and developers need different things.
- Default to eleven steps but let the number of dark and light colours be set independently.

## Related

[ColorBox](colorbox.md), [Poline](poline.md), [OKLCH](oklch.md)
