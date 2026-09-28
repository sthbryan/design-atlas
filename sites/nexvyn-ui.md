---
title: Nexvyn UI
description: 40 MIT spring-physics components for shadcn projects, from gooey dropdowns to eye-tracking password fields, via the @nexvyn namespace.
url: https://ui.nexvyn.dev
type: component-registry
formats: animated component registry (shadcn)
topics: [components, motion]
verdict: useful
agent: [registry]
pricing: free
licence: free under MIT (repo `Nexvyn/Nexvyn-ui`) for all installable components; the site's own diagram sources are CC BY-NC 4.0 and are not shipped through the registry
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [rune-icons, animate-ui, motion-primitives, fluid-functionalism, smooth-ui, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Nexvyn UI

## What it is

A shadcn registry of animated components from Nexvyn, the small team that also makes Rune Icons. The README describes springs instead of fixed durations, motion used to explain state changes rather than decorate, and components written from scratch. It is built with Next.js 16, React 19, Tailwind CSS v4, Motion and Radix primitives, and inherits your existing shadcn theme. The registry held 40 components at review: 25 numbered showcase pieces, a basic set of form controls, and a few illustration and device mockups. The repo started in September 2025 and had about 220 stars at review.

## When to open it

When a shadcn app needs a few interactions that feel physical: a dropdown that morphs out of its trigger, a sidebar marker that springs between items, a scroll indicator with tick marks, a split ratio slider. The basic set is handy when you want the same motion language on checkboxes, selects and switches.

## Most useful

- Gooey dropdown and morph nav, where the trigger shape flows into the panel
- A petal-style colour picker and a ratio slider with a draggable divider
- A password input whose eye icon follows the cursor and blinks
- Newer AI-leaning pieces (AI input, adaptive actions, message input) and phone and laptop mockups

## Using it with agents

No `llms.txt`, but the registry is standard: `/r/registry.json` indexes every item with a description, and components install with `npx shadcn@latest add @nexvyn/goo-dropdown` after adding the `@nexvyn` namespace to `components.json`, or by full URL. An MCP page explains pointing the shadcn MCP server at the registry and suggests plain-language prompts. Most items need only `motion`; one pulls in `pdfjs-dist`.

## Watch out for

- The site is client-rendered and splits headings into single letters, so scraped text comes out garbled; use the registry JSON for descriptions
- The changelog notes mobile warning banners on some previews, so a few pieces are desktop-first
- Only 40 components, and the changelog still shows a single 0.1.0 entry from July 2026 while the repo keeps changing

## Reusable ideas

- State a short motion philosophy in the README and design every component to it
- Offer a basic form-control set in the same motion language as the showpieces
- Keep documentation-only assets under a separate licence and out of the registry payload

## Related

[Rune Icons](rune-icons.md), [Animate UI](animate-ui.md), [Motion Primitives](motion-primitives.md), [Fluid Functionalism](fluid-functionalism.md), [Smooth UI](smooth-ui.md), [shadcn/ui](shadcn-ui.md)
