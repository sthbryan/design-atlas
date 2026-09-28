---
title: Ninna UI
description: MIT React library on npm with CSS-only oklch theme presets, Radix internals, 92 free blocks and a strong llms.txt import map.
url: https://www.ninna-ui.dev
type: component-library
formats: npm component library (12 packages) · copy-paste blocks · project CLI
topics: [components, landing-pages]
verdict: useful
agent: [llms-txt, cli]
pricing: free
licence: free and open source under MIT (repo `ninna-ui/ninna-ui`); the 92 blocks are labelled free "during launch", which leaves room for a later paid tier
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, radix, coss-ui, re-ui, shadcnblocks, oklch]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md)

# Ninna UI

## What it is

A React 19 component library that you install from npm rather than copy into your project. It is split into 12 tree-shakeable `@ninna-ui/*` packages (primitives, forms, feedback, layout, overlays, navigation, data display, code block and so on) and, according to its `llms.txt`, holds 69 components at version 0.6.0. Accessibility comes from Radix primitives wrapped behind its own API, styling from Tailwind CSS v4, and theming from plain CSS: one import picks one of five presets built on oklch colours, with dark mode handled in CSS and no theme provider. The site also offers 92 copy-paste blocks in nine groups (auth, app UI, dashboards, e-commerce, marketing, AI interfaces and others). The GitHub repo started in February 2026 and is maintained by one person.

## When to open it

When you want a packaged, versioned library in the Chakra or Mantine mould but styled with Tailwind v4 and themed without JavaScript. The blocks are worth a look for app screens such as settings pages, OTP and magic-link sign-in flows, and dashboards.

## Most useful

- CSS-only theming: swap the whole palette by changing one stylesheet import, with `data-slot` attributes (98 of them, per `llms.txt`) for targeted overrides
- An exact import map that says which package exports each component, which avoids wrong-package imports
- App-oriented blocks: multi-step password reset, magic-link sign-in with resend countdown, pricing tables, profile pages
- `npx @ninna-ui/cli init` to scaffold a Next.js, Vite or React Router v7 project

## Using it with agents

Better prepared than most small libraries. `/llms.txt` gives agents rules first (pin the version, import only from the listed package, read the common-mistakes list), then the full import map; `/llms-full.txt` (about 1.2 MB) adds the generated API reference. A ready-made rules file at `/ninna-ui-rules.md` is meant to go into `AGENTS.md` or `.cursorrules`, and `/.well-known/ai` describes the site's endpoints. There is no shadcn registry, because components ship as npm packages.

## Watch out for

- Young and small: about 23 GitHub stars, one maintainer, and roughly 500 monthly npm downloads of the primitives package at review
- Counts drift across the site (69 components in most places, 67 in one stats panel)
- Much of the site is comparison and listicle pages aimed at search traffic; judge it on the docs, not the marketing claims

## Reusable ideas

- Put a "how agents should use this library" rule list at the top of `llms.txt`, before the reference material
- Publish a drop-in rules file for `AGENTS.md` alongside the docs
- Drive theming entirely through CSS custom properties so theme changes cost no hydration

## Related

[shadcn/ui](shadcn-ui.md), [Radix](radix.md), [coss ui](coss-ui.md), [Re UI](re-ui.md), [shadcnblocks](shadcnblocks.md), [OKLCH](oklch.md)
