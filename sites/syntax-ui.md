---
title: Syntax UI
description: MIT copy-paste Tailwind and Framer Motion buttons, loaders, blocks and effects; mostly dormant, with some docs pages erroring at review.
url: https://syntaxui.com
type: component-library
formats: component library (copy-paste)
topics: [components, motion, landing-pages]
verdict: niche
agent: []
pricing: freemium
licence: free library under MIT (repo `syntaxUI/syntaxui`); a separate SyntaxUI Pro sells premium blocks and templates with "lifetime access", but its price and licence terms did not render without JavaScript at review
licence_class: mixed
reviewed: 2026-09-25
status: stale
note: "Mostly dormant: no real activity since November 2024 apart from a May 2026 dependency fix."
related: [uiverse, magic-ui, eldora-ui, motion-dev]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md)

# Syntax UI

## What it is

SyntaxUI is a copy-paste collection of Tailwind CSS and Framer Motion snippets for React, built in public by Ansub. It groups small interactive pieces into components, blocks, animations and effects, and each page shows a live preview with a code tab. The repo had just under 1k GitHub stars; apart from a dependency security fix in May 2026, the last real activity was in November 2024.

## When to open it

- When you want a single playful detail (a magnetic button, a text ticker, a confetti burst) to paste into an existing Tailwind page.
- When you are looking for small, dependency-light starting points rather than a system with tokens and a CLI.

## Most useful

- **Buttons**: the largest group, around 14 variants including shimmer, border-glow, magnetic, neubrutalist and text-reveal styles.
- **Loaders**: the other big set, close to 20 spinners and progress indicators.
- **Tabs, toggles and a stepper**: small controls with animated indicators.
- **Blocks**: banners, feature grids, footers, logo clouds, pricing and testimonial sections.
- **Effects**: background grids and patterns, a gradient generator, image fades, a skewed infinite scroll and emoji confetti.

## Using it with agents

There is no `llms.txt`, registry or CLI; the only route is copying code from a page or reading the source in the GitHub repo. An agent can work from the repo's `src` folder, where each showcase lives as its own file.

## Watch out for

- Several docs pages (the introduction, text, loaders and gradients) returned HTTP 500 errors during this review, so parts of the site were unusable.
- The credits file says some components come from other makers and Hero Patterns; check those origins if attribution matters to you.
- Pro pricing and licence could not be read without a browser; confirm the terms before buying.
- Framer Motion is required for most pieces, even small ones.

## Reusable ideas

- Keep a public credits file that names who made or inspired each component.
- Group snippets by what they do on a page (buttons, loaders, effects) instead of by technology.
- Offer a live playground so people can combine pieces before copying them.

## Related

[Uiverse](uiverse.md), [Magic UI](magic-ui.md), [Eldora UI](eldora-ui.md), [Motion](motion-dev.md)
