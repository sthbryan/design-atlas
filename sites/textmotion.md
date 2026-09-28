---
title: slot-text
description: Tiny slot-machine text roll for buttons, statuses and counters; copy-ready usage doc for agents.
url: https://textmotion.dev
type: js-library
formats: JS library
topics: [motion, typography-and-styles, components]
verdict: niche
agent: [llms-txt]
pricing: free
licence: Free / MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [torph, number-flow, css-text-effects, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [typography-and-styles](../topics/typography-and-styles.md), [components](../topics/components.md)

# slot-text

## What it is

slot-text, published at textmotion.dev, is a small text-roll animation by Daniel Belyi. It splits a label into characters or words and puts each one in a clipped cell. When the text changes, the old face slides out of its cell as the new one slides in, one cell after another from left to right, a bit like a slot machine or a split-flap board. It uses CSS transforms only, with no canvas and no timeline library. It has no runtime dependencies and needs roughly 1 kB of CSS. The core has a vanilla API, with subpath adapters for React, Vue, Solid and Svelte. It was at 0.3.4 when reviewed, first published in June 2026, and got about 22k npm downloads a week.

## When to open it

Open it for short, changing labels where a playful mechanical feel fits: copy buttons, save states, status pills ("Operational" / "Deploying"), counters and command text. It is not meant for paragraphs or display headlines.

## Most useful

- **Tiny API**: `slotText(el, "Save")` returns a controller with `set()`, `flash()` (roll to a value and back on its own) and `destroy()`. Frameworks get a `SlotText` component or directive
- **`rollBy: "word"`** keeps each word whole, which preserves kerning, ligatures and joined scripts
- **`skipUnchanged`** rolls only the characters that changed, useful for live numbers like requests per second
- **Handles rapid calls**: by default a new call cuts off the roll in progress. With `interrupt: false` the current roll finishes and only the latest call plays after it
- **Tuning**: direction, stagger, duration, exit offset, easing, bounce, and a `chromatic()` helper that gives each cell its own colour
- Grapheme-aware splitting through `Intl.Segmenter`, so emoji and combining marks stay intact

## Using it with agents

The site's "llms.txt" button copies a Markdown usage doc to your clipboard: install steps, per-framework snippets, the API and the full options type. There is no `/llms.txt` file at the root (it returned 404 when reviewed). Paste that doc into your agent's context, or point the agent at the npm README.

## Watch out for

- The site is branded textmotion.dev, but the package, repo and imports are all `slot-text`
- Character mode loses kerning and ligatures, and shows joined scripts such as Arabic or Devanagari as isolated letters. Use word mode for those
- Import `slot-text/style.css` once, or the text changes without rolling. Very tall display fonts can clip at the mask
- The 0.3.4 source has no reduced-motion check or ARIA handling (the site footer mentions both, so check newer releases). Add a reduced-motion fallback and keep an accessible label on the element yourself

## Reusable ideas

- Clip each character in its own cell so it can roll without moving the layout around it
- Roll up for progress and down for undo or reset, so direction carries meaning
- Use a "flash" state for brief confirmations that revert on their own
- Queue the latest target instead of stacking animations when users click repeatedly

## Related

[Torph](torph.md), [NumberFlow](number-flow.md), [CSS Text Effects](css-text-effects.md), [Motion Primitives](motion-primitives.md)
