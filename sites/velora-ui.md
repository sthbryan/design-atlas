---
title: Velora UI
description: New MIT set of 100 animated shadcn components, 31 blocks and a free landing template, each with size and dependency counts.
url: https://velora.colorlib.com
type: component-library
formats: component library · shadcn registry · landing template
topics: [components, landing-pages, motion]
verdict: useful
agent: [llms-txt, registry]
pricing: free
licence: free. Every component, block and the multi-page landing template are MIT in `ColorlibHQ/velora-ui` (32 stars at review). A $99 lifetime Pro tier with niche templates, extra section variants and a Figma file was marked "coming soon" and ran as a waitlist
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [aceternity-ui, magic-ui, ui-layouts, spectrum-ui, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [motion](../topics/motion.md)

# Velora UI

## What it is

Velora UI is a young library of animated React components and landing sections from Colorlib, built with Next.js 16, Tailwind CSS 4, shadcn/ui and Motion. At review it had 100 components, 31 free blocks and a complete SaaS landing template that includes blog, auth, changelog, contact and 404 pages. The components cover backgrounds (aurora, beams, flickering grid, meteors, vortex, retro grid), text effects (flip words, hyper text, number ticker, morphing text), loaders, overlays, cursors, carousels and navigation. The blocks cover hero, feature, pricing, testimonial, CTA, logo-cloud, FAQ, navbar, footer and login or sign-up sections. Each component lists its gzipped size and dependency count. The site says every one respects reduced-motion settings and works in both Base UI and Radix shadcn projects.

## When to open it

When you like the look of the popular animated effect libraries but want a free, MIT version with the size and dependency cost shown up front. It also helps when you want a finished landing site to start from rather than loose sections.

## Most useful

- **Backgrounds**: many zero-dependency canvas or SVG backdrops under 3 KB gzipped.
- **Blocks**: 31 sections installable in one command, each bringing the components it uses.
- **Landing template**: the free multi-page SaaS site with an MDX blog and changelog.
- **Themes**: brand presets that restyle every effect by swapping seven CSS variables.
- **Accessibility notes**: a native `<dialog>` modal, keyboard-operable tabs and a carousel with a visible pause button.

## Using it with agents

Install any item with `npx shadcn@latest add https://velora.colorlib.com/r/<name>.json`. The changelog also describes an `@velora` namespace, but it was not in the official shadcn directory at review, so it has to be added to `components.json` by hand. An `llms.txt` lists every component with its size, dependencies and install command. An `llms-full.txt` adds props, accessibility notes and a working example for each one, which is enough for an agent to choose and wire a component without opening the site.

## Watch out for

- Very new: the first release was in June 2026, and five versions were dated the day of review.
- Many names match effects from Aceternity UI and Magic UI. The site offers its own comparison pages with both, so read them as the maker's view.
- Pro features are promises until the tier ships.

## Reusable ideas

- Print gzipped size and dependency count next to every component, so cost is part of the choice.
- Let a block install pull in its component dependencies, so one command gives a working section.
- Drive every effect from a small set of brand variables, so a rebrand is a copy of seven values.

## Related

[Aceternity UI](aceternity-ui.md), [Magic UI](magic-ui.md), [UI Layouts](ui-layouts.md), [Spectrum UI](spectrum-ui.md), [shadcn/ui](shadcn-ui.md)
