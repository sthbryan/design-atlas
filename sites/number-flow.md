---
title: NumberFlow
description: "The standard animated-number component: Intl formatting, digit spins, grouping, React/Vue/Svelte/vanilla."
url: https://number-flow.barvian.me
type: js-library
formats: JS library
topics: [motion, components, typography-and-styles]
verdict: very-useful
agent: []
pricing: free
licence: Free / MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [torph, textmotion, motion-primitives, magic-ui]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md)

# NumberFlow

## What it is

NumberFlow is an animated number component by Maxwell Barvian. The creator says it was inspired by the Family wallet app. When its `value` changes, each digit spins to the new value, and characters that appear or disappear fade in and out. Formatting goes through `Intl.NumberFormat`, so currency, percent, compact notation and locales work out of the box. It is built as a custom element, with wrappers published as `@number-flow/react`, `@number-flow/vue` and `@number-flow/svelte` and the core `number-flow` package for plain TypeScript/JavaScript. It is by far the most widely used library in this group: about 7.7k GitHub stars and around 1.7 million weekly downloads of the React package when reviewed.

## When to open it

Open it for prices, counters, dashboards, countdowns, pricing toggles (monthly/annual), cart totals and stock-style readouts, anywhere a number changes while the user is looking at it.

## Most useful

- **Format props**: `format` takes standard `Intl.NumberFormatOptions`, plus `locales`, `prefix` and `suffix`
- **Timing control**: separate `transformTiming`, `spinTiming` and `opacityTiming` objects, which accept `linear()` spring curves
- **`trend`** fixes the spin direction (always up, always down, or per digit). The `continuous` plugin makes the number pass through the values in between
- **`NumberFlowGroup`** syncs neighbouring numbers that push each other around, such as a price next to its percentage change. `isolate` keeps a number out of unrelated layout shifts
- **Production details**: `respectMotionPreference` (on by default), `willChange`, a CSP `nonce` and exported style strings for hashing, and `::part()` hooks for styling
- An examples page covers inputs, countdowns, activity stats and use with Motion for React

## Using it with agents

No `llms.txt`, MCP or prompts. The docs are one clear page per framework, and the package is so widely used that most agents already know its API. Name the exact package (`@number-flow/react` and so on) and the `format` options you want.

## Watch out for

- The site lists its own limits: no scientific or engineering notation, no non-Latin digits and no right-to-left locales yet
- Backgrounds and borders on the element do not scale smoothly during transitions. The docs suggest Motion layout animations for that
- Changing the digit font size is awkward because of the masking technique. Use `tabular-nums` and tune `line-height` instead
- `::part()` styles can flash unstyled in browsers without Declarative Shadow DOM, and the docs give a feature-detection workaround
- The docs call it dependency-free, but the packages do pull in the tiny `esm-env` helper

## Reusable ideas

- Hand formatting to `Intl` and animate only the characters it produces
- Let the direction of change carry meaning (up for gains), or turn that off when it would mislead
- Animate related numbers as a group so their layout moves together
- Fade the top and bottom edges of rolling digits with a mask instead of hard clipping

## Related

[Torph](torph.md), [slot-text](textmotion.md), [Motion Primitives](motion-primitives.md), [Magic UI](magic-ui.md)
