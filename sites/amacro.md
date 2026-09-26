---
title: Amacro
description: 86 full-screen theme and page reveal effects on View Transitions, delivered as copyable CSS snippets.
url: https://amacro.vercel.app
type: tool
formats: snippet playground
topics: [motion, components]
verdict: niche
agent: []
pricing: free
licence: free; the README shows an MIT badge, but no LICENSE file was in the repository at review time
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [amicro, transitions-dev, 60fps, animejs]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md)

# Amacro

## What it is

Amacro Transitions is a playground of full-screen reveal effects for switching between light and dark themes (and, by extension, between page states), made by Syed Subhan, who also builds Amicro. Each effect runs on the browser's View Transitions API, using CSS masks, clip paths or transforms on the old and new snapshots, with a few GSAP-driven overlays. At review time the source defined 86 effects in three tiers: 17 "Basic", 41 "Hard" and 28 "Crazy". The site is a Vite and React app; the GitHub repository was created in August 2026 and had a handful of stars.

## When to open it

When you want the theme toggle or a page switch to feel like a moment, such as a circle expanding from the click point or blinds sweeping across, and you are happy to copy CSS rather than install a package.

## Most useful

- **Basic**: fades, grow and shrink, push, pop and directional covers.
- **Hard**: circular reveals from the cursor or the centre, star, diamond and corner wipes, blinds, shutters, stepped boxes and directional bar sweeps.
- **Crazy**: liquid and blob expansions, vortex, pixel storm and lattice, ripples, curls, wobbles, and a few reveals masked through animated GIFs.
- **Speed toggle**: a slow "showcase" mode (about 1.2 s) for studying an effect and a quicker "optimal" mode (about 0.5 s) closer to production timing.
- **Code drawer**: each effect opens a panel with the CSS keyframes (and GSAP logic where used) to copy.

## Using it with agents

There is no npm package, registry, CLI or `llms.txt`. The practical route is to copy an effect's CSS from the drawer, or point an agent at `constants.ts` in the GitHub repository (`Subhan-code/Amacro`), where every effect is defined as a named CSS string with a description and category.

## Watch out for

- It is not a React component library; you wire `document.startViewTransition` into your own toggle.
- View Transitions and registered custom properties are not supported everywhere; plan a plain fallback.
- Many effect names match those of the older Hover.css library, and the GIF-masked effects rely on third-party images; check provenance before shipping those.
- Licence terms rest on a README badge only.
- Full-screen reveals can be heavy for motion-sensitive users; respect `prefers-reduced-motion`.

## Reusable ideas

- Grow the new theme out of a circle centred on the toggle the user just pressed.
- Offer a long preview duration while designing and a short one in production.
- Define transitions as named CSS strings with a category so they can be browsed and swapped.
- Reserve the loudest reveals for rare moments such as first load, not every navigation.

## Related

[Amicro](amicro.md), [Transitions.dev](transitions-dev.md), [60fps](60fps.md), [Anime.js](animejs.md)
