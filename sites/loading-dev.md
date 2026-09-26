---
title: loading.dev
description: 27 small React 19 spinners that inherit currentColor, with a Markdown page per spinner.
url: https://loading.dev
type: js-library
formats: JS library
topics: [components, motion]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Free / MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [circle-loaders, jakub-krehel-skills, gradient-spin, loader-buttons]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# loading.dev

## What it is

loading.dev is a small React library of loading indicators by Jakub Krehel and Paul Faivret, published on npm as `loading-dev`. The site showed 27 spinners at review time. They range from classics (Classic, Ring, Arc, Bouncing dots, Wave) to more distinctive ones such as Atom, Eclipse, Gather, Morph, Snake, Swirl and Trace, each with a live preview and speed control. The GitHub README already lists two more (Compass and Radar). Every spinner takes `size`, `color` and `duration`, and some add their own options such as `easing` or stroke `cap`. The spinners are animated with CSS, respect reduced motion out of the box and need React 19. The package was first published in August 2026 and was at version 0.3.4, with about 35k weekly npm downloads and about 230 GitHub stars.

## When to open it

Open it when you need a small, polished inline spinner for a button, input, table row or toast, and want it to match your text colour rather than bringing its own palette.

## Most useful

- **27 designs** in a consistent style, from a 16 px inline arc to larger grid, dot and ring indicators
- **Inherits `currentColor`**, so spinners match the surrounding text unless you pass `color`
- **Motion contract**: `--ld-duration` and `--ld-play-state` custom properties cascade from any ancestor, so one CSS rule can slow or pause every spinner inside a section. Props override them per spinner
- **`playState`** pauses or resumes a spinner, for example once a request has finished
- **Easing options** on rotating spinners: linear, ease-in-out, or "stacked", which changes speed without ever stopping

## Using it with agents

Good. `/llms.txt` lists every spinner with a one-line description and its import name, and each spinner has a Markdown page at `/spinners/<name>/markdown` with usage for every prop. The repository includes `AGENTS.md`, `CLAUDE.md` and a `CONTEXT.md` that defines the project's vocabulary. Jakub Krehel also publishes design skills, covered separately.

## Watch out for

- Requires React 19 or later, with no fallback for React 18
- Every spinner is `aria-hidden`. The surrounding UI has to tell assistive technology that something is loading, for example with `role="status"` or `aria-busy` and a text label
- Young and pre-1.0, and the site and the README list different numbers of spinners
- Only a few styling props. Deeper changes go through `className` and your own CSS

## Reusable ideas

- Let loaders inherit `currentColor` so they fit any button or theme without extra props
- Drive animation speed and pause state through inherited CSS custom properties, so a parent can control a whole group
- Keep the spinner decorative and put the loading announcement on the element that owns the loading state
- Use eased or "stacked" rotation so a long wait feels less mechanical

## Related

[Circle Loaders](circle-loaders.md), [Jakub Krehel's skills](jakub-krehel-skills.md), [Gradient Spin](gradient-spin.md), [Loader Buttons](loader-buttons.md)
