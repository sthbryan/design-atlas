---
title: Open Props
description: Sub-atomic CSS custom properties for colour, type, spacing, shadows and easing, importable from a CDN as plain CSS.
url: https://open-props.style
type: style-library
formats: CSS custom properties · CDN and npm · design tokens JSON · Figma and Style Dictionary sync · normalise stylesheet
topics: [color, typography-and-styles]
verdict: useful
agent: []
pricing: free
licence: MIT, per the argyleink/open-props repository, which had 5,558 stars at review; the site showed version 1.7.23 then.
licence_class: open-source-permissive
reviewed: 2026-10-29
status: active
related: [utopia, oklch, radix]
---
[← Atlas](../site/home.md) · Topics: [color](../topics/color.md), [typography-and-styles](../topics/typography-and-styles.md)


# Open Props

## What it is

Open Props is a library of CSS custom properties, described by its author as sub-atomic styles: not components, not utility classes, just named values for colour, gradients, shadows, aspect ratios, typography, easings, animations, sizes, borders, z-indexes and named media queries. You import one stylesheet from a CDN or npm and then write ordinary CSS against variables such as `--radius-2`, `--size-fluid-3`, `--shadow-2` or `--font-size-fluid-1`. There is no build step and no framework requirement.

## When to open it

- You are starting a small project and want a coherent set of tokens without adopting a design system or a CSS framework.
- You want fluid type and spacing scales that are already tuned, rather than three media queries per section.
- You are writing a DESIGN.md or a token layer and want a reference for naming and for sensible step values.

## Most useful

- **Fluid scales**: `--size-fluid-*` and `--font-size-fluid-*` interpolate between viewport sizes, which removes the usual clamp-and-hope typography work.
- **Named media queries**: `--motionOK`, along with the other named conditions, turn `prefers-reduced-motion` into a readable media query instead of a string repeated across files.
- **Shadows and gradients as tokens**: numbered shadow steps and gradient presets that behave consistently across surfaces.
- **Low specificity by design**: the properties are applied inside `:where()`, so a single class on your own component still wins without `!important`.
- **Token exports**: the repository publishes `open-props.tokens.json`, a Figma token sync file and a Style Dictionary file, so the same values can drive design and code.
- **Build variants**: a prefixed build (`--op-*`), a Shadow DOM variant using `:host`, and a version without `:where()` for older browsers.
- **A normalise stylesheet**: opt-in base styles, in light and dark, for projects that want a reset without a framework.

## Using it with agents

No agent channel was published at review: no `llms.txt`, no MCP server. The variables are the interface, and they are guessable, which helps an agent: `--size-3`, `--radius-2`, `--shadow-3` follow a numeric scale. Tell an agent the scale exists and it will usually use it instead of inventing pixel values.

## Watch out for

- It is a vocabulary, not a design. Two projects using Open Props can look nothing alike, and a page built only from defaults will read as generic.
- The scale is opinionated. If your brand has an eight-point grid with different steps, you will spend the first day mapping one onto the other, and the mismatch shows at the edges.
- The fluid sizes are viewport-based. A card in a narrow sidebar inherits the page's fluid size, which is not what container-based scaling would give you.
- It is a stylesheet, so it applies globally. In a design system with its own tokens, importing it wholesale produces two naming schemes.
- The project moves slowly, which is fine for tokens and less fine if you expect new component-level features.

## Reusable ideas

- Name values by role and step (`--size-3`, `--shadow-2`) so markup reads consistently and can be grepped.
- Apply token defaults inside `:where()` so consumers override without specificity wars.
- Publish the same tokens as JSON for Figma and Style Dictionary, rather than keeping a second copy in the design tool.
- Offer a prefixed build; token collisions are the usual reason a team cannot adopt someone else's variables.

## Related

[Utopia](utopia.md), [OKLCH](oklch.md), [Radix](radix.md)
