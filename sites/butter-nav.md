---
title: Butter Nav
description: Mega-menu that is one card morphing between menus, with a full rebuild prompt; no licence published.
url: https://butter-nav.vercel.app
type: component-library
formats: component (shadcn registry item)
topics: [navigation, motion, components]
verdict: useful
agent: [registry, prompts]
pricing: free
licence: free to install; licence not stated on the site or in the registry item
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [navbar-gallery, rareui, transitions-dev, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [navigation](../topics/navigation.md), [motion](../topics/motion.md), [components](../topics/components.md)

# Butter Nav

## What it is

A single-component registry for a floating navbar whose mega-menu is one shared card. Instead of opening a separate dropdown per item, the card changes its width, height and horizontal position as you move between triggers, the panel contents cross-fade in the direction of travel, and a highlight pill slides behind the links. It is one React 18+ file (about 800 lines) styled with Tailwind, with no runtime dependencies beyond `clsx` and `tailwind-merge` for the `cn()` helper. The page credits an "Accord" Figma spec for the layout, Linear's site for the motion and Vercel's design language for the styling. The maker is not named.

## When to open it

When a marketing or product site needs a mega-menu that feels calm and continuous rather than a row of popovers flicking open and shut, and you want a worked reference for how that morph is timed.

## Most useful

- **Config-driven API**: items without a menu render as links; items with one get a panel made of card columns, link columns and an optional footer strip with a badge and CTA. Brand, secondary links, a CTA pill and a `linkComponent` slot (for `next/link`) are props.
- **Tunable timing**: open delay (90 ms), close grace period (170 ms) and morph duration (460 ms) are exposed, plus sticky and close-on-scroll toggles.
- **Keyboard support**: arrow-down opens and focuses the first link, Tab walks into the panel, Escape closes and returns focus to the trigger.
- **Motion notes**: the page explains the mechanics, such as keeping every panel mounted and invisible so its size can be measured, and an invisible bridge under the bar so diagonal pointer paths do not close the menu.
- **Light and dark** themes and a mobile sheet below the `md` breakpoint from the same config.

## Using it with agents

Install with the shadcn CLI from `https://butter-nav.vercel.app/r/butter-nav.json`, or register an `@butter` namespace. A "Copy prompt" button serves a long Markdown brief (`/prompt.md`) that spells out colours, sizes, shadows, curves and behaviour, so an agent can rebuild the component inside another design system rather than copying the file.

## Watch out for

- No licence, repository or author is published, so reuse terms are unclear; ask before shipping it in commercial work.
- It is a single component, not a library, and the registry item's author field carries the demo's dummy brand name.
- The prompt hard-codes one visual language (neutral greys, Geist); expect to translate its values to your tokens.

## Reusable ideas

- Morph one menu surface between sizes instead of swapping separate dropdowns.
- Slide panel contents in from the side the pointer is travelling toward.
- Add a short hover-intent delay on first open but switch instantly between open menus.
- Bridge the gap under a nav bar so a diagonal mouse path does not dismiss the menu.
- Measure hidden panels up front so the animation never waits on layout.

## Related

[Navbar Gallery](navbar-gallery.md), [Rare UI](rareui.md), [Transitions.dev](transitions-dev.md), [Motion Primitives](motion-primitives.md)
