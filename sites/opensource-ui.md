---
title: Opensource UI
description: MIT React and Tailwind catalogue of about 190 copy-paste pieces, including device mockups and widgets, with llms.txt and an agent skill.
url: https://opensourceui.in
type: component-library
formats: copy-paste component library with device mockups and an agent skill
topics: [components, assets]
verdict: useful
agent: [llms-txt, skill]
pricing: free
licence: Free. MIT (repo `bidyut10/opensourceui`, about 680 GitHub stars at review); the site sells sponsor placements only
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, kokonut-ui, uiverse, cult-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [assets](../topics/assets.md)

# Opensource UI

## What it is

Opensource UI is a free React and Next.js component catalogue by Bidyut Kundu, started in June 2026. It claims more than 200 components in 30 categories; the sitemap listed about 190 component pages at review. Categories range from buttons, inputs, OTP fields, dropdowns and tables to widgets, wallets, travel cards, social cards, audio players and a set of Apple-style device frames (iPhone, MacBook, iPad, Apple Watch, iPod and a browser window). The stack is Next.js 16, React 19, TypeScript and Tailwind CSS v4, with `clsx` and `tailwind-merge` for class merging and Lucide plus hand-drawn SVG icons. It deliberately avoids Radix, shadcn/ui or any other base library, and the demo site is light-only by design.

## When to open it

Open it when you need a self-contained piece you can paste and restyle without adopting a system: a device mockup for a landing page, a clock or step-count widget, a pricing card or a quiet form. The neutral "paper white" look suits dashboards and marketing pages that want restraint over flash.

## Most useful

- **Device mockups**: six frames you can drop screenshots or live UI into, useful for hero sections and app store style pages
- **Widgets**: about 27 small tiles such as clocks, a compass, heart rate, sleep score, flight arrival and a pomodoro timer, all with realistic demo data
- **Forms and inputs**: login and sign-up layouts, OTP fields and inputs with border-based focus and visible error text
- **Search with fallbacks**: the catalogue search suggests popular demos instead of showing an empty result

## Using it with agents

The site publishes an `llms.txt` with the catalogue size, URL patterns and FAQ. The repository ships an agent skill at `skills/opensource-ui/` (a `SKILL.md` plus catalogue, design and implementation references) and an `AGENTS.md`, meant to be pointed at from Cursor, Claude Code, Codex and similar tools. There is no CLI, shadcn registry or MCP server: an agent reads the source from the repo or the component page and copies it in.

## Watch out for

- Counts differ between the site copy (200+) and the sitemap (about 190 pages), so treat the headline number loosely
- Components are copied by hand, so updates never reach your project automatically
- The house style bans `sm:` breakpoints and colored focus rings; mixing its files with another kit may need cleanup
- A young, single-maintainer project funded by sponsor placements

## Reusable ideas

- Ship a written design brief (tokens, radii, focus rules, banned patterns) with the component files so agents stay on style
- Offer device frames as ordinary components rather than static images, so real UI can sit inside them
- Replace empty search results with a few popular examples

## Related

[shadcn/ui](shadcn-ui.md), [Kokonut UI](kokonut-ui.md), [Uiverse](uiverse.md), [Cult UI](cult-ui.md)
