---
title: Rolling Number
description: Interruptible rolling digits and split-flap text for DOM, React and Solid, with llms.txt and Markdown docs.
url: https://rolling.kitlangton.dev
type: js-library
formats: JS library
topics: [motion, components, typography-and-styles]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Free / MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [number-flow, textmotion, torph, rareui]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md)

# Rolling Number

## What it is

Rolling Number is a small TypeScript library by Kit Langton for animated number changes. When the value changes, the digits roll to the new value, and a new change can interrupt a roll without the digits jumping. The package is `@kitlangton/rolling-number`. It has a DOM core with no runtime dependencies, plus thin React (18 and 19) and Solid adapters. Formatting uses `Intl.NumberFormat` and accepts `bigint`. The docs name NumberFlow as the inspiration and the benchmark target, and say no code was copied. The site is an interactive playground with prices, large integers, typography controls, locale switching and a reduced-motion toggle. At review time the project was three weeks old: version 0.4.1, about 130 GitHub stars and about 3.5k weekly npm downloads.

## When to open it

Open it for live counters, balances, prices, timers and status labels where a number or short word changes in front of the user, especially when updates come quickly and can interrupt each other. It is also worth a look if you want a split-flap departure-board effect.

## Most useful

- **Interruptible rolls**: a new target starts from each digit's current position and velocity instead of queuing animations
- **`RollingText`**: animates labels either directly glyph to glyph or on alphabet wheels, and a `mode="flap"` gives real split-flap cards with a hinge, for numbers too
- **Options**: `duration`, `direction` (auto, up, down), `stagger` (outward, start, end), opt-in `motionBlur`, and `pauseOffscreen`, which is on by default
- **Styling hooks**: a `data-rn-trend` attribute for colouring by direction in CSS, and custom properties for blur strength, edge fade, mask and flap crease
- **Performance notes**: spring motion is sampled into CSS `linear()` easing, so no JavaScript frame loop runs during playback. A published benchmark compares it with NumberFlow and states its limits

## Using it with agents

Good. The site serves `/llms.txt`, the full README as `/index.md`, and returns Markdown when a request sends `Accept: text/markdown`. The repository has an `AGENTS.md` plus design-vocabulary and research notes. Give the agent the scoped package name: the docs warn that the unscoped `rolling-number` package on npm is a different project.

## Watch out for

- Very new, with frequent pre-1.0 releases, so expect API changes
- Rolling works only for Latin digits in left-to-right layouts. RTL, non-Latin digits, compact or scientific notation, NaN and infinity show as plain static text
- A parent with `overflow: hidden` can cut off outgoing digits when the number gets shorter. Reserve width with `min-width` if nearby layout must stay still
- There is no live region by default. Add `aria-live` yourself if screen readers should hear updates
- Split-flap mode needs an opaque background behind the digits

## Reusable ideas

- Expose the direction of change as a data attribute so CSS can style gains and losses
- Stagger newly added digits outward from the ones already on screen, all within a fraction of the duration
- Blur fast-moving digits vertically and keep settled ones sharp
- Pause off-screen counters but keep their text up to date

## Related

[NumberFlow](number-flow.md), [slot-text](textmotion.md), [Torph](torph.md), [Rare UI](rareui.md)
