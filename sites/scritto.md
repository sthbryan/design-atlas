---
title: Scritto
description: MIT web component that animates only the characters that change in any string.
url: https://scrit.to
type: js-library
formats: JS library
topics: [motion, typography-and-styles]
verdict: useful
agent: []
pricing: free
licence: free; MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [number-flow, torph, textmotion, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [typography-and-styles](../topics/typography-and-styles.md)

# Scritto

## What it is

Scritto is a small text-transition library by Jace (@JaceThings) that brings the feel of SwiftUI's numeric text transition to the web. When a value changes, it diffs the old and new strings, keeps the characters that survive, slides them to their new positions and rolls only the changed characters out and in. It works on arbitrary strings (prices, statuses, labels, emoji), not just digits. The core is a framework-free web component (`<scritto-text>`, about 11.5 KB gzipped, zero runtime dependencies) with thin bindings for React, Vue, Svelte and Solid. At review time the packages were at 0.1.0 with roughly 8k weekly npm downloads each for core and React, and the repository, created in August 2026, had about 80 stars.

## When to open it

When a counter, price, token total, plan name or status label updates in place and you want the change to be noticed without a jarring swap or a full re-render of the line.

## Most useful

- **Any-string diffing**: shared prefixes, suffixes and runs in the middle all stay put, which the README notes goes beyond SwiftUI's behaviour.
- **`<scritto-flow>`**: wrap a sentence around the value so neighbouring words slide and rewrap smoothly when the value changes width.
- **Per-glyph options**: stagger, blur, scale, trend direction, optional bounce and edge fading only where a leaving glyph would collide with something.
- **Grapheme-aware**: emoji sequences, combining marks, CJK and right-to-left text are kept intact.
- **Accessibility**: honours reduced motion by default and keeps the real value as plain text for assistive tech while the animated glyphs are hidden from it.
- **Playground and wiki** for trying options and reading the full API.

## Using it with agents

Install from npm (`@scritto/core`, or `@scritto/react`, `/vue`, `/svelte`, `/solid`). There is no registry, CLI, `llms.txt` or prompt; the README on GitHub is thorough and is the best thing to hand an agent, since it spells out the API and the limits below.

## Watch out for

- Each glyph is its own span, so ligatures and kerning are off inside a value, and a value only wraps between words.
- Updating faster than the roll duration stacks outgoing copies; shorten the duration rather than updating more often.
- It relies on `Intl.Segmenter`, the Web Animations API, CSS masks and `linear()` easing without polyfills.
- Very new (0.1.0); expect API changes.

## Reusable ideas

- Animate only the characters that change in a live number, and hold the rest still.
- Let surrounding copy glide as a value grows or shrinks instead of snapping.
- Set the first value without motion and animate only later updates.
- Blur and fade glyphs slightly as they roll to soften fast-changing figures.

## Related

[NumberFlow](number-flow.md), [Torph](torph.md), [slot-text](textmotion.md), [Motion Primitives](motion-primitives.md)
