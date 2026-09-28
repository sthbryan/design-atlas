---
title: UIWTF
description: Rauno Freiberg's seven classic experiments (command menu, copy source, link preview, minimap), each with a rationale.
url: https://uiw.tf
type: gallery
formats: experimental interaction-pattern showcase, demo-only
topics: [inspiration, ux-patterns, navigation]
verdict: niche
agent: []
pricing: free
licence: free to view; no licence is stated and no source repository is linked
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [ui-playbook, devouring-details, design-spells, uilabs]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [ux-patterns](../topics/ux-patterns.md), [navigation](../topics/navigation.md)

# UIWTF

## What it is

UIWTF is a small "laboratory" of interface ideas by designer and engineer Rauno Freiberg. At review time it had seven working experiments plus one marked work in progress (browser history), each on its own page with a short video, a live demo and a written rationale for why the pattern could exist. The build is an early Next.js site and the set has not grown in years.

## When to open it

When you are designing power-user or documentation features and want thought-through arguments, not just visuals, for patterns like a command menu, keyboard-driven copying or in-page navigation aids.

## Most useful

- **⌘K menu**: a global command palette, framed as a discoverability tool rather than a power-user extra, with a two-finger tap fallback on mobile.
- **Copy source**: hover or focus a documentation example and press ⌘C to copy its code.
- **Inspect component**: a debug flag on layout primitives (Stack, Grid) that shades nesting levels and prints spacing values.
- **Link preview**: hover a link to see a screenshot of its destination, captured at build time.
- **Component menu**: a replacement context menu with actions that know which component and source file you clicked.
- **Quick links and minimap**: a keyboard menu of every link on the page, and a live bird's-eye page map using the Firefox-only CSS `element()` function.

## Using it with agents

No code, `llms.txt`, registry or API. Each experiment page is a compact spec (behaviour, trigger key, rationale), so paste the description of the pattern you want into your agent and have it implement it with your stack. For the inspect idea, Freiberg's separate open-source inspx project (MIT) is the closest real code.

## Watch out for

- Tiny and dormant: treat it as a classic reference, not a growing catalogue.
- The minimap relies on a CSS feature only Firefox supports.
- Keyboard shortcuts such as ⌘C and ⇧> can clash with browser or OS defaults; test them before shipping.

## Reusable ideas

- Pitch a command menu as onboarding help: new users can search for actions they cannot find.
- Make documentation examples copyable from the keyboard on hover or focus.
- Give layout components a debug mode that visualises whitespace.
- Pre-render link previews at build time instead of fetching them live.

## Related

[UI Playbook](ui-playbook.md), [Devouring Details](devouring-details.md), [Design Spells](design-spells.md), [UI Labs](uilabs.md)
