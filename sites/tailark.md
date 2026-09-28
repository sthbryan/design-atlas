---
title: Tailark
description: shadcn registry of marketing blocks, full pages and illustrations; free MIT kits plus a paid Quartz kit, in Base UI and Radix builds.
url: https://tailark.com
type: component-registry
formats: component registry (shadcn/ui) · marketing blocks · full pages · illustrations
topics: [components, landing-pages]
verdict: very-useful
agent: [registry, prompts]
pricing: freemium
licence: "freemium. The free kits (Dusk, Mist and Veil) are MIT in the `tailark/blocks` repo (about 2.3k stars at review). The paid Quartz kit is a one-time purchase: $249 (Essentials), $299 (Complete) and $499 (Team, 10 members) at review. The pricing FAQ allows paid blocks in unlimited client projects, but Quartz may not be forked, redistributed or repackaged as another kit"
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [shadcnblocks, shadcn-ui, blocks-so, shadcn-studio, spectrum-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md)

# Tailark

## What it is

Tailark is a shadcn/ui registry of marketing-site sections, full pages and decorative illustrations, built with Next.js and Tailwind by Méschac Irung. There are two namespaces. `@tailark-oss` serves the free kits and needs no account; at review its registry index held 259 items, including 150 blocks and 10 pages. `@tailark` serves the paid Quartz kit behind an API key. Quartz comes in several visual styles (Dark, Grid 1, Grid 2 and Libre) and covers hero, feature, pricing, testimonial, logo-cloud, FAQ, footer and auth sections. It also has whole pages: product, solution, about, brand, contact, wall of love, blog and legal. Every item ships in two builds, Base UI (the default) and Radix UI.

## When to open it

When a SaaS or startup site needs calm, well-spaced sections that already match each other, and you want to install them into a shadcn project rather than copy markup. The free kits are enough for a full landing page. Quartz is worth a look when you also need the secondary pages that templates usually skip, such as legal, brand or customer-story pages.

## Most useful

- **Dusk kit (free)**: 10 landing pages and 39 blocks, rebuilt in July 2026 according to the changelog.
- **Mist and Veil kits (free)**: section sets for hero, features, pricing, stats, team, integrations, comparison tables, login and sign-up.
- **Quartz pages (paid)**: legal index and document pages driven by MDX, contact-sales layouts, wall-of-love pages and brand-guideline pages with logo downloads.
- **Illustrations**: decorative TSX components for bento and feature cards, so there are no image files to manage.
- **Snippets**: variant sets of core pieces such as buttons, shown in several layouts and states.

## Using it with agents

Add the namespace to `components.json` and install by name, for example `npx shadcn@latest add @tailark-oss/dusk-hero-section-one`. The UI base is picked by URL path (`/r/` for Base UI, `/r/radix/` for Radix). Paid items need an API key from the dashboard. The docs include a setup prompt generator that writes an AI prompt or a ready `components.json` for your plan, kit and base. `@tailark` is listed in the official shadcn directory, so the shadcn MCP server can find it. The free `@tailark-oss` namespace has to be added to `components.json` by hand. No `llms.txt` was published (404 at review).

## Watch out for

- The two namespaces changed meaning in July 2026 (`@tailark` now means paid Quartz), so older tutorials may point at the wrong one.
- The paid licence terms live only in the pricing FAQ. There is no separate licence or terms page (both returned 404).
- The shadcn directory's health check marked the `@tailark` entry as degraded at review because sampled items failed validation (it points at the keyed namespace).
- Account sharing is not allowed, and the free-kit exception for derived kits does not cover Quartz.

## Reusable ideas

- Split a registry into a public namespace and a keyed namespace, so free and paid installs use the same command.
- Ship decorative illustrations as components, so a feature card needs no asset pipeline.
- Offer the pages a real company needs after launch (legal, brand, contact sales), not just the landing page.
- Generate the project setup from a short form (plan, kit, base) instead of long written instructions.

## Related

[shadcnblocks](shadcnblocks.md), [shadcn/ui](shadcn-ui.md), [blocks.so](blocks-so.md), [Shadcn Studio](shadcn-studio.md), [Spectrum UI](spectrum-ui.md)
