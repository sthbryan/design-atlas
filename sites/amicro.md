---
title: Amicro
description: 170+ MIT React micro-interactions on a shadcn registry, with short stated easings, reduced-motion respected and an llms.txt.
url: https://amicro.dev/
type: component-library
formats: component library · shadcn-compatible registry · own CLI · llms.txt
topics: [motion, components, agents-and-prompts]
verdict: useful
agent: [registry, cli, llms-txt]
pricing: free
licence: MIT (copyright Syed Subhan Uddin), stated in the project's repository at review; sponsorship runs through Polar, and the site lists the library under the Vercel OSS Program.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [transitions-dev, circle-loaders, microkit, motion-primitives, amacro]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)


# Amicro

## What it is

A collection of React micro-interactions and small animated components by Syed Subhan (@SubhanHQ), built with Motion and Tailwind CSS v4. The site counts 160+ components and its `llms.txt` says 170+, spread over buttons, card spreads, carousels, loaders, monochrome and dithered charts, text animations, morphing icons and 3D pieces. The GitHub repository, created in July 2026, had 2,862 stars at review; its README credits transitions.dev for the site layout.

## When to open it

When you need a quick loader, a fanned stack of cards, a cover-flow carousel or a small entrance transition and would rather copy one file than adopt a whole library.

## Most useful

- **Card layouts**: arcs of five or seven cards, a corner fan, a radial wheel, a cascade, a scattered "dealt hand" and perforated stamp cards, plus a cover-flow and a Time Machine style depth stack with a scrubber.
- **Loaders**: well over a hundred spinners, dot, bar and ring loaders, including imitations of familiar system indicators (a Siri-style wave, a Face ID scan, a Dynamic Island shape).
- **Entrance and hover primitives**: fade, slide, scale and blur reveals, word and character staggers, tilt cards, magnetic and glow buttons, a spotlight and a cursor trail.
- **Hooks and presets**: scroll progress, mouse position, stagger, reduced motion, web haptics and shared spring presets.
- **Stated motion defaults**: one easing curve, `[0.16, 1, 0.3, 1]`, at 200–350ms, with `prefers-reduced-motion` respected across the set.
- **Charts**: small monochrome and dithered chart styles (donut, heatmap, uptime, funnel and others) for dashboard accents.

## Using it with agents

Components install through the shadcn CLI from the registry at `https://amicro.dev/r/<name>.json`, which answers 200, or with `npx shadcn@latest add @amicro/<component>`. The project's own CLI still exists (`npx @subhanhq/amicro@latest init`, then `add <name>`) but had two releases and has not been published since July 2026. An `llms.txt` now documents the stack, the install command and the motion defaults.

## Watch out for

- The whole site, `llms.txt` included, sits behind a Vercel Security Checkpoint: a real browser passes it, but `curl` or Node requests get the checkpoint page or a 429, so an agent cannot read the docs without a browser session.
- The npm CLI is behind the registry: prefer the shadcn registry unless you need the card layouts the CLI covers.
- The old `amicro.vercel.app` address no longer serves the site directly and answers through the same checkpoint.
- Several loaders mimic Apple interface elements by name and look; avoid them where that could read as imitation of a platform.
- The project is months old and changes quickly, so copy the components you need instead of tracking the repo.

## Reusable ideas

- Fan a small set of cards into an arc on hover to preview a collection.
- Scrub a stack of cards through depth with a timeline control.
- Use a dithered chart as a decorative, low-fidelity dashboard accent.
- Pair a loading spinner with a light haptic tick on supported devices.
- Keep one shared file of spring presets, and one easing and duration range, so a hundred separate effects still feel like one product.

## Related

[Transitions.dev](transitions-dev.md), [Circle Loaders](circle-loaders.md), [MicroKit](microkit.md), [Motion Primitives](motion-primitives.md), [Amacro](amacro.md)
