---
title: Easy UI
description: Free Next.js templates and about 20 shadcn-installable components; MIT but thinly maintained, with template demos offline at review.
url: https://www.easyui.pro
type: template-library
formats: free template gallery plus a small shadcn registry of components
topics: [components, landing-pages]
verdict: niche
agent: [registry]
pricing: free
licence: Free core under MIT (repo `DarkInventor/easy-ui`, about 610 GitHub stars at review); a separate paid "Premium" tier was advertised but its site was offline at review
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, magic-ui, shadcnblocks, kokonut-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md)

# Easy UI

## What it is

Easy UI is a collection of Next.js website templates and animated components by Kathan Mehta, first published in June 2024. The templates page lists about 30 starters (landing pages, a documentation site built on Fumadocs, portfolios, a waitlist page, a newsletter, a chatbot shell, a notes app and themed variants), filterable by category and difficulty. Separately, the components section documents about 20 pieces: animated beams and badges, several decorative buttons, feature and pixel cards, a reaction bar, a confetti poll, a tilt card, a transaction list, a file upload, a hexagon hero, a command search and glitch or highlighter text. The stack is React, TypeScript, Tailwind CSS, shadcn/ui and Framer Motion.

## When to open it

Open it for a quick look at simple starter layouts, or when one of its small animated components (a sparkle button, a confetti poll) fits a landing page. It is not the place for a maintained, growing library.

## Most useful

- **Component registry**: each component page gives a `npx shadcn@latest add` command pointing at a JSON file under `easyui.pro/components-json/`, and those files resolved at review
- **Credits on components**: pages name the designer or repo that inspired each piece
- **Template repo**: the free templates live in the MIT repository, so you can read or fork them even when a demo is down

## Using it with agents

The per-component shadcn registry URLs are the only machine-readable entry point, and an agent can install from them directly. There is no `llms.txt` (404 at review), no registry index, no MCP server and no documentation beyond the component pages.

## Watch out for

- Every "Live Preview" demo tested at review (hosted on Vercel) returned HTTP 402 "deployment disabled", as did `premium.easyui.pro` and `mvp.easyui.pro`
- The on-site pricing page is a template with placeholder feature lists, not real plans
- Repository activity is thin: the last changes were a February 2026 security patch for React Server Components and small fixes in 2025
- Home-page testimonials and a savings calculator are marketing copy; judge the code directly

## Reusable ideas

- Link each component to the work that inspired it
- Let visitors filter templates by difficulty as well as category
- Publish every component as a standalone registry JSON so it installs without a package

## Related

[shadcn/ui](shadcn-ui.md), [Magic UI](magic-ui.md), [shadcnblocks](shadcnblocks.md), [Kokonut UI](kokonut-ui.md)
