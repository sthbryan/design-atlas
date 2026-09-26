---
title: Ramps
description: One brand hex becomes OKLCH ramps and light/dark semantic tokens with enforced AA/AAA, via llms.txt and a JSON API.
url: https://www.ramps.studio
type: tool
formats: tool · API
topics: [color, typography-and-styles, agents-and-prompts]
verdict: very-useful
agent: [llms-txt, api, prompts]
pricing: free
licence: Free, no account or key / MIT (source on GitHub)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [huetone, oklch, color-review, dialkit, uisfx]
---
[← Atlas](../README.md) · Topics: [color](../topics/color.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Ramps

## What it is

Ramps (Ramps Studio) turns one brand colour into a full design-system palette. It builds eight OKLCH ramps of eleven steps each (50 to 950): primary, two accents, a neutral tinted toward the brand hue, and success, warning, error and info. Status hues are shifted away from the brand hue when they would clash. On top of the ramps it resolves 44 semantic tokens (20 in basic mode) for light and dark, such as `bg-canvas`, `text-on-brand` and `ring-focus`. Everything comes from the query string, so the same link always gives the same colours and nothing is stored. It is made by Ryan Reid, open source under MIT, and is part of a small "Studio Tools" family alongside Springs (motion), Beeps (UI sounds) and Depths (shadows). The repository was created in August 2026.

## When to open it

Open it when a project has a brand colour and nothing else, and you want a complete, dark-mode-ready token set in one step. It's also good when you want an agent to fetch real palette values instead of making up hex codes.

## Most useful

- **Enforced contrast**: choose AA (4.5:1) or AAA (7:1) and foreground tokens move along their ramp until they pass. If needed, action fills darken too, but page surfaces never do. Each token reports its measured WCAG 2.1 ratio
- **Accent schemes**: complementary, analogous, triadic, split or monochromatic, with optional pinned accent hexes and a "bold" setting for muted brands
- **Exports**: CSS variables under `:root` and `.dark`, a Tailwind v4 `@theme` block, Figma variables as W3C DTCG JSON (one file per mode) and plain JSON
- **Per-row checkboxes**: drop ramps or tokens from the export without breaking the contrast maths behind the rest
- **Notation switch**: show and export values as OKLCH, hex, RGB or HSL

## Using it with agents

This is one of the most agent-ready colour tools around. `/llms.txt` documents every parameter and token name. `https://www.ramps.studio/api/palette?b=<hex>` returns JSON, and any page link with `?b=` returns the palette as plain text without JavaScript. The export dialog can also copy a prompt that points an agent at the exact palette. Ask the agent to use the semantic tokens, keep the returned hex values as they are, and pair each fill with its `text-on-*` token.

## Watch out for

- It is new and small (a few GitHub stars at review time), so check the output and pin the values you ship
- The generated ramps follow a fixed lightness curve. A brand that needs hand-tuned steps will still need manual edits
- Contrast is WCAG 2.1 only. `text-disabled` is deliberately below the minimum, and in light mode the raised surface matches the base surface, so separate it with a shadow
- No terms page is published beyond the MIT licence on the repository

## Reusable ideas

- Make a tool's whole state a pure function of the URL, so links are shareable, cacheable and easy for agents to build
- Serve the same data as HTML for people, and as plain text and JSON for agents
- Report the measured ratio on every token so an accessibility claim can be checked, not just trusted
- Resolve semantic tokens per mode instead of asking teams to map dark mode by hand

## Related

[Huetone](huetone.md), [OKLCH](oklch.md), [Color.review](color-review.md), [DialKit](dialkit.md), [UI SFX](uisfx.md)
