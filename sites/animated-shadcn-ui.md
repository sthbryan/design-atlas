---
title: Animated shadcn/ui
description: Alpha MIT set of stock shadcn/ui components with Motion added, installed via its own CLI or npm package.
url: https://shadcn-animated.vercel.app
type: component-library
formats: component library (npm package and CLI)
topics: [components, motion]
verdict: niche
agent: [cli]
pricing: free
licence: free; MIT (repo `sopo/shadcn-animated`, npm package `shadcn-animated`)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, base-ui, animate-ui, motion-dev, motion-primitives]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Animated shadcn/ui

## What it is

Animated shadcn/ui (styled "shadcn animated") is a hand-made set of stock shadcn/ui components with Motion animation added, labelled alpha on the site. It builds on the Base UI flavour of shadcn and is maintained by GitHub user sopo. At review the docs covered nine components (accordion, button, checkbox, collapsible, FAB menu, hover image, radio group, switch and tabs), with hover card, select and sheet already in the source. The repo was created in August 2026, had about 20 stars, and had several commits the day before review; npm showed version 1.7.0 and about 1.5k downloads in the previous month.

## When to open it

- When you want your existing shadcn/ui controls to gain subtle, consistent motion without switching to a different component API.
- When you need a quick reference for how much animation a plain accordion, checkbox or switch can carry before it becomes distracting.

## Most useful

- **Drop-in replacements**: the same names and props as shadcn/ui, so an import swap is usually enough.
- **FAB menu**: a floating action button that fans out a short list of actions.
- **Hover image**: a link or text that reveals an image preview on hover.
- **Form controls**: checkbox, radio group and switch with animated state changes, built on Base UI and Motion.

## Using it with agents

Install one component with the project's own CLI, `npx shadcn-animated add button`, which copies the source into your project and installs its dependencies, or add the whole package with `npm i shadcn-animated` and import from it. There is no shadcn registry JSON, no namespace in the shadcn directory and no `llms.txt`, so agents have to use the CLI or read the source in `packages/ui/src/components`.

## Watch out for

- Alpha and very new: a handful of components, a single maintainer and a fast release pace, so expect breaking changes.
- It targets the Base UI version of shadcn/ui; projects on the Radix version may need adjustments.
- The npm package lists `@vercel/analytics` and CLI tooling as runtime dependencies, which adds weight if you import the whole package rather than copying files.

## Reusable ideas

- Keep the component API identical to shadcn/ui so motion is an upgrade you can undo, not a migration.
- Add motion to state changes (checked, open, selected) first, before decorative entrances.
- Offer both a copy-in CLI and a package import for people with different ownership preferences.

## Related

[shadcn/ui](shadcn-ui.md), [Base UI](base-ui.md), [Animate UI](animate-ui.md), [Motion](motion-dev.md), [Motion Primitives](motion-primitives.md)
