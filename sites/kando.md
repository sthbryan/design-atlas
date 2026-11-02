---
title: Kando
description: Cross-platform pie menu whose page argues for radial selection, gesture memory and a dedicated menu per application.
url: https://kando.menu
type: website
formats: radial menu app · gesture recognition · nested menus · per-application menus · themes, icon sets and sound themes
topics: [navigation, ux-patterns]
verdict: useful
agent: []
pricing: free
licence: Free and described as open source without a licence named on the page at review; the source is on GitHub and development is supported through donations
licence_class: not-stated
reviewed: 2026-11-02
status: active
related: [menubarx, hiddenbar]
---
[← Atlas](../site/home.md) · Topics: [navigation](../topics/navigation.md), [ux-patterns](../topics/ux-patterns.md)


# Kando

## What it is

Kando is a pie menu: hold a trigger and a radial menu opens at the cursor, and you pick an item by throwing the pointer in its direction. The page is written as a sequence of short sections, each opening with a claim in bold — fast, precise, efficient, beautiful, flexible, fun, free — and then one paragraph of justification. The most interesting claim is about targeting: the whole screen becomes the click target, so you do not aim at small buttons.

## When to open it

Open it when you are designing a radial or gesture-driven selector and need an argument for why direction beats distance, or when you want a reference for a page that explains an unfamiliar interaction without a video.

## Most useful

- **Direction over distance**: selection by angle, with gesture recognition carrying into nested submenus — the reason a radial menu scales deeper than a dropdown.
- **Input-agnostic framing**: mouse, stylus, touch or controller, stated before any feature.
- **Per-application menus**: a different menu depending on the focused window, which is where a power-user tool earns its place.
- **Theme surface beyond colour**: menu themes, icon sets and sound themes, so the whole feel is replaceable.
- **Progressive mastery framing**: muscle memory as the skill being learned, with items that become faster with repetition.

## Using it with agents

No `llms.txt`, MCP server or API was found at review. Configuration lives in the app, and the documentation is a separate site, so an agent can read the docs but cannot drive the menu.

## Watch out for

- Radial menus are polarising: unlabelled positions are hard to learn and bad for discoverability, which the page does not address.
- The page says open source without naming a licence, so reuse has to be checked in the repository.
- Achievements and gamification are mentioned as motivation; for a professional tool that is a taste decision, not a feature.
- The sections are formulaic ("Kando is fast. / Kando is precise."), which makes the page easy to skim and thin to read.
- A video carries most of the demonstration, so the mechanism is hard to grasp from text alone.

## Reusable ideas

- Argue for an interaction by naming the constraint it removes: here, aiming.
- Support several input devices from the same pattern.
- Swap the menu by context (frontmost application) rather than adding more items.
- Let themes cover icons and sound, not only colour.

## Related

[MenubarX](menubarx.md), [Hidden Bar](hiddenbar.md)
