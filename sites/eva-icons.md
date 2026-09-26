---
title: Eva Icons
description: Akveo's MIT pack of 490 outline and fill icons with a data-attribute replace script and four hover animations; unmaintained since 2020.
url: https://akveo.github.io/eva-icons/
type: icon-library
formats: icon library
topics: [icons, assets, motion]
verdict: niche
agent: []
pricing: free
licence: Free. MIT licensed, with no paid tier
licence_class: open-source-permissive
reviewed: 2026-09-25
status: stale
note: "Unmaintained: last release in March 2020 and last commit in March 2023."
related: [ionicons, bootstrap-icons, useanimations, animated-icons, iconify]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [motion](../topics/motion.md)

# Eva Icons

## What it is

Eva Icons is an open-source icon pack from Akveo, the agency behind the Nebular Angular kit and the Eva Design System. Version 1.1.3 contains 490 SVGs: 244 outline and 246 fill icons for common interface actions and objects, on a 24px canvas. It ships as SVG, PNG, an icon font and Sketch files, and as a small JavaScript library that swaps `data-eva` placeholders for inline SVG, with four built-in hover animations. The repository has about 8,800 stars. The `eva-icons` npm package gets about 75,000 downloads a month.

## When to open it

Open it for a small, friendly, rounded set covering everyday UI needs, especially on Angular projects that already use Nebular or on plain HTML pages. It suits prototypes and internal tools that want a playful hover effect without a separate animation library.

## Most useful

- **Outline and fill pairs**: almost every icon has both, named `github` and `github-outline`
- **Replace script**: add `<i data-eva="bell">` elements and call `eva.replace()` to turn them into SVGs, with fill, width, height and class options
- **Built-in animations**: `zoom`, `pulse`, `shake` and `flip`, triggered on hover, on a parent's hover, or looping
- **Offline pack**: one ZIP with SVG, PNG, font and Sketch sources for designers
- **Community wrappers**: React Native and Flutter ports are listed in the README; Nebular packages the set for Angular

## Using it with agents

There is no llms.txt, MCP server or official React component. The API is simple enough for an agent: load `eva-icons` from npm or a pinned unpkg URL, use `data-eva` attributes, and call `eva.replace()` after the markup renders. Ask it to confirm names against the `outline/svg` and `fill/svg` folders of the package, because the set is small and many common glyphs are missing.

## Watch out for

- The project looks unmaintained: the last release (1.1.3) dates from March 2020, the last commit from March 2023, and about 57 issues and pull requests are open
- The README links the unpkg script without a version. Pin one so a surprise release can't change your pages
- `eva.replace()` runs once over the DOM, so frameworks that re-render need to call it again or use a wrapper
- At under 250 distinct glyphs, you will likely need a second set for specialist icons, and mixed sets rarely match
- The homepage is a JavaScript-only single-page app, so it shows nothing without scripts

## Reusable ideas

- Offer a few named micro-animations as a data attribute, so motion is opt-in per icon
- Trigger an icon's animation from its parent's hover to make whole buttons feel responsive
- Pair every outline icon with a fill twin for active and inactive states
- Ship design-tool sources in the same download as web assets

## Related

[Ionicons](ionicons.md), [Bootstrap Icons](bootstrap-icons.md), [useAnimations](useanimations.md), [Animated Icons](animated-icons.md), [Iconify](iconify.md)
