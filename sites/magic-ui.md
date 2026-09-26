---
title: Magic UI
description: 150+ animated React and Tailwind components and effects that install like shadcn/ui, positioned as its companion.
url: https://magicui.design
type: component-library
formats: animated component library
topics: [components, motion, cta]
verdict: very-useful
agent: [registry]
pricing: freemium
licence: free and open source (repo `magicuidesign/magicui` on GitHub); a paid "Magic UI Pro" tier with extra landing-page blocks and templates
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [aceternity-ui, motion-primitives, shadcn-ui, 21st-dev, cta-gallery]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [cta](../topics/cta.md)

# Magic UI

## What it is

A library of 150+ animated components and effects (a figure stated by the site itself), built with React, TypeScript, Tailwind CSS and Motion, positioned as a "companion" to shadcn/ui: same design principles, same install flow.

## When to open it

When you already use shadcn/ui as a base and want to add animated effects (particles, animated text, backgrounds) without changing your install flow or component conventions.

## Most useful

A catalog of effects (floating 3D particles, animated text, among others) organized as a browsable showcase. On the Pro tier, 50+ complete landing-page blocks and templates (a figure stated by the site).

## Using it with agents

It installs the same way as shadcn/ui, so it inherits compatibility with shadcn's CLI and MCP: init with `pnpm dlx shadcn@latest init` and add components with `pnpm dlx shadcn@latest add @magicui/<component>` (e.g. `@magicui/globe`). No dedicated MCP server or `llms.txt` for Magic UI itself was found during this review.

## Watch out for

Its docs reference Next.js as the baseline framework, and it brings Motion as an animation dependency: check bundle impact if many animated components are used at once. The "Pro" side is paid; the line between free and paid isn't always obvious until you check each block's detail page.

## Reusable ideas

- Reuse the same install convention (shadcn's CLI) so a third-party library feels native to the project
- Split "components" (free, granular) from "blocks/templates" (paid, full-page) as a business model
- Catalog visual effects by technique (particles, text, background) rather than only by use case

## Related

[Aceternity UI](aceternity-ui.md), [Motion Primitives](motion-primitives.md), [shadcn/ui](shadcn-ui.md), [21st.dev](21st-dev.md), [CTA Gallery](cta-gallery.md)
