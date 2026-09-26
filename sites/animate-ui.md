---
title: Animate UI
description: Animated Radix/Base UI/Headless UI primitives, styled components and 260 animated Lucide icons via the shadcn CLI.
url: https://animate-ui.com
type: component-registry
formats: animated component registry (shadcn)
topics: [components, motion, icons]
verdict: useful
agent: [llms-txt, registry]
pricing: free
licence: free; the README and badge say MIT, but the repo's `LICENSE.md` is "MIT + Commons Clause" (use in any product, but you may not sell or redistribute the components themselves)
licence_class: source-available
reviewed: 2026-09-25
status: active
related: [shadcn-ui, magic-ui, motion-primitives, animated-icons, useanimations, smooth-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [icons](../topics/icons.md)

# Animate UI

## What it is

An open "component distribution" by the developer Skyleen: animated React pieces built with TypeScript, Tailwind CSS and Motion, delivered through the shadcn registry rather than an npm package. It is organised in three layers: animated primitives (its own, plus ports of Radix UI, Base UI and Headless UI behaviours), styled components built on those primitives, and a set of animated Lucide icons.

## When to open it

When you want the behaviour of accessible headless primitives (dialogs, tabs, accordions, radios) with motion already wired in, and you want to keep the shadcn file layout. Also when you need animated versions of Lucide icons that match an existing icon set.

## Most useful

- A public registry of about 580 items at the time of review: roughly 160 primitives and components, 260 animated icons, a handful of shared hooks and the demos
- The same primitive offered in more than one flavour (Radix, Base UI, Headless UI), so you can match the headless library already in your project
- Small standalone effects such as a sliding number counter, text effects, animated buttons and backgrounds
- An accessibility page that explains how to respect reduced-motion preferences through Motion's global config

## Using it with agents

Components install with the shadcn CLI under the `@animate-ui` namespace, e.g. `npx shadcn@latest add @animate-ui/primitives-texts-sliding-number`, and the namespace is listed in shadcn's registry directory. The docs' MCP page simply points to the shadcn MCP server (`npx shadcn@latest mcp init --client claude`). There is no `/llms.txt`, but `/llms-full.txt` bundles every docs page as Markdown, and each page has a "Copy Markdown" button.

## Watch out for

- The licence mismatch: treat it as Commons Clause, not plain MIT, if you plan to ship a kit or template that bundles these components
- Activity has slowed: the last commit on GitHub was on 2025-12-31 and the docs still show December 2025 dates; blocks, templates and a pricing page appear only as roadmap items
- Registry item names are long (`primitives-radix-…`, `components-base-…`), so check the docs for the exact name before asking an agent to install one

## Reusable ideas

- Separate animated behaviour (primitive) from visual styling (component) so either can be swapped
- Port one animation contract across several headless libraries instead of picking one
- Ship icons, primitives and components from the same registry so a single namespace covers all three

## Related

[shadcn/ui](shadcn-ui.md), [Magic UI](magic-ui.md), [Motion Primitives](motion-primitives.md), [Animated Icons](animated-icons.md), [useAnimations](useanimations.md), [Smooth UI](smooth-ui.md)
