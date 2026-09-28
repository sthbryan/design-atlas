---
title: Amicro
description: Big MIT shadcn registry of loaders, card fans, carousels and micro-interactions; young and changing fast.
url: https://amicro.vercel.app
type: component-library
formats: component library (shadcn registry, CLI)
topics: [motion, components]
verdict: useful
agent: [cli, registry]
pricing: free
licence: free; MIT (copyright Syed Subhan Uddin), sponsorship via Polar
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [transitions-dev, circle-loaders, microkit, motion-primitives, amacro]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md)

# Amicro

## What it is

A fast-growing collection of React micro-interactions and small animated components by Syed Subhan (@SubhanHQ), built with Motion and Tailwind CSS. At review time its sitemap listed 35 buttons, 9 card-spread layouts, 3 carousels, 7 monochrome charts and 12 dithered charts, plus pages for loaders, text animations, CSS animations and 3D. Its shadcn registry index held about 169 items, most of them loaders and spinners, alongside entrance transitions, hover effects, hooks and spring presets. The GitHub repository, created in July 2026, had about 2.5k stars; the README says the site layout comes from transitions.dev and credits its author.

## When to open it

When you need a quick loader, a fanned stack of cards, a cover-flow carousel or a small entrance transition and would rather copy one file than adopt a whole library.

## Most useful

- **Card layouts**: arcs of five or seven cards, a corner fan, a radial wheel, a cascade, a scattered "dealt hand" and perforated stamp cards, plus a cover-flow and a Time Machine style depth stack with a scrubber.
- **Loaders**: well over a hundred spinners, dot, bar and ring loaders, including imitations of familiar system indicators (a Siri-style wave, a Face ID scan, a Dynamic Island shape).
- **Entrance and hover primitives**: fade, slide, scale and blur reveals, word and character staggers, tilt cards, magnetic and glow buttons, a spotlight and a cursor trail.
- **Hooks and presets**: scroll progress, mouse position, stagger, reduced motion, web haptics and shared spring presets.
- **Charts**: small monochrome and dithered chart styles (donut, heatmap, uptime, funnel and others) for dashboard accents.

## Using it with agents

Components install through the shadcn CLI from `https://amicro.vercel.app/r/<name>.json`, or through the project's own CLI (`npx @subhanhq/amicro@latest init`, then `add <name>`), which covers the card layouts too. The site has a "Skills" page, but it points to the transitions.dev agent skill rather than an Amicro skill. No `llms.txt` was published.

## Watch out for

- The README's suggested `@amicro` namespace mapping pointed at a GitHub path that returned 404 for sample items; the site's `/r/` URLs worked.
- The npm CLI had only two releases and low weekly downloads at review time; the project is weeks old and changes quickly.
- Several loaders mimic Apple interface elements by name and look; avoid them where that could read as imitation of a platform.
- Registry items depend on `framer-motion`, so check that you are not mixing it with the newer `motion` package unintentionally.

## Reusable ideas

- Fan a small set of cards into an arc on hover to preview a collection.
- Scrub a stack of cards through depth with a timeline control.
- Use a dithered chart as a decorative, low-fidelity dashboard accent.
- Pair a loading spinner with a light haptic tick on supported devices.
- Keep one shared file of spring presets and import it everywhere.

## Related

[Transitions.dev](transitions-dev.md), [Circle Loaders](circle-loaders.md), [MicroKit](microkit.md), [Motion Primitives](motion-primitives.md), [Amacro](amacro.md)
