---
title: useAnimations
description: 87 free micro-animated icons (SVG + Lottie) and a React package; attribution required, licence inconsistent.
url: https://useanimations.com
type: icon-library
formats: icon library · animated icons
topics: [icons, assets, motion]
verdict: niche
agent: []
pricing: free
licence: Free / CC BY 4.0 with extra restrictions (attribution required, no redistribution or resale in templates); npm package metadata says MIT
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [animated-icons, iconoir, circle-loaders, 3dicons]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [motion](../topics/motion.md)

# useAnimations

## What it is

useAnimations is a small, free set of micro-animated interface icons made by Patrik Svoboda. The line style follows Feather Icons and is drawn on a 32px grid. The site shows 87 animations grouped into alerts, notifications, navigation, actions, content, forms, media, loading, social logos and a few extras. Each one plays on click, on hover or in a loop. Every download is a zip with SVG and editable Lottie JSON files. The companion React package, `react-useanimations`, bundles 79 of them as components.

## When to open it

Open it when a small UI needs a handful of state-changing icons: a burger menu that turns into a close icon, a heart that fills, a play/pause toggle, a checkbox that ticks, or a loading spinner. It works best as a quick source of stroke-style micro-interactions that match a Feather-based icon set.

## Most useful

- **Toggle animations**: menu ↔ close, play ↔ pause, lock ↔ unlock, visibility on/off, and a checkbox, radio and toggle set for forms
- **SVG + Lottie per icon**: the JSON can be edited in After Effects with Bodymovin, or played with lottie-web, lottie-ios or lottie-android
- **`react-useanimations`**: import one animation at a time so the bundle only carries what you use. Props cover `size`, `strokeColor`, `speed`, `reverse`, `autoplay` and `loop`, and a render prop lets you wrap the animation in your own `<button>`
- **Feather-compatible look**: sits cleanly beside static Feather or Lucide icons

## Using it with agents

An agent can install `react-useanimations` from npm (it depends on `lottie-web`) and wire controlled icons with `reverse` bound to state, as the README shows for checkboxes and radios. For other frameworks, give the agent the downloaded Lottie JSON and have it load the file with lottie-web. There is no llms.txt, MCP server or API. The icon list lives in the package's `lib/` folder, which is the easiest way for an agent to check that a name exists.

## Watch out for

- The licence text is inconsistent. It cites CC BY 4.0 but adds bans on redistribution and on use in resold templates, which CC BY does not normally allow. The npm package is tagged MIT while the repository licence file holds the CC BY text. Read it as "attribution required, no resale" and link back to useanimations.com
- Maintenance is slow. The last npm release was in December 2022 and the repository was last updated in 2024
- The set is small (under 100 icons) and only in one stroke style, so it won't cover a full product icon system
- Each icon pulls in lottie-web at runtime, which is heavy if you only need one or two simple transitions a CSS/SVG animation could handle

## Reusable ideas

- Pair every two-state control (menu, play, bookmark, like) with an animation that runs forward and back instead of swapping two static icons
- Label each preview with its trigger ("click", "hover", "loop") so users know how to test it
- Let callers import each animation on its own so the bundle stays small
- Offer a render prop so the animation can sit inside the product's own accessible button

## Related

[Animated Icons](animated-icons.md), [Iconoir](iconoir.md), [Circle Loaders](circle-loaders.md), [3dicons](3dicons.md)
