---
title: HyperUI
description: Free MIT copy-paste Tailwind v4 snippets (about 540 with dark variants) for apps, marketing and a neobrutalism set, plus small tools.
url: https://www.hyperui.dev
type: component-library
formats: copy-paste Tailwind CSS snippet collection with small browser tools
topics: [components, landing-pages]
verdict: useful
agent: []
pricing: free
licence: free; MIT (repo `markmead/hyperui`, about 12.2k GitHub stars at review); no paid tier
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [meraki-ui, uiverse, flowbite, preline]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md)

# HyperUI

## What it is

HyperUI is Mark Mead's collection of free Tailwind CSS v4 snippets, and there is nothing to install: you copy the HTML. The site (built with Astro) groups them into three sets. At review there were 34 application categories (about 295 snippets, including 22 chart examples, tables, forms, side menus and steps), 22 marketing categories (about 171 snippets: announcements, banners, blog cards, carts, CTAs, contact forms, footers, headers, pricing, product cards) and a neobrutalism set of 11 categories (about 74 snippets). The counts include separate dark-mode versions of most snippets. A templates section combines snippets into five full-page starting points (analytics dashboard, portfolio, SaaS landing page, storefront, support inbox), and the site is clear they are not production-ready.

## When to open it

Open it when you want clean, framework-free Tailwind markup for a marketing page or admin screen and will add behaviour yourself. The neobrutalism set is handy when a project wants that thick-border, hard-shadow style without designing it from scratch.

## Most useful

- **Marketing sections**: headers, footers, pricing, CTAs and product cards that paste straight into a landing page
- **Application pieces**: tables, pagination, steps, stats and chart layouts for dashboards
- **Neobrutalism set**: buttons, cards, inputs, alerts and progress bars in one consistent style
- **Tools**: a beta dark-mode generator that adds `dark:` variants to pasted Tailwind HTML, and a typography mapper from design-handoff pixel values to Tailwind classes

## Using it with agents

There is no `llms.txt` (404 at review), no MCP server, no registry and no CLI; the README says so and asks you to copy and paste. Agents can still read the snippet source from the GitHub repo, and the plain HTML is easy for a model to adapt. A sister site, HyperUX (`js.hyperui.dev`), is an experimental set of Alpine.js interaction patterns (dialog, combobox, command palette, dropdown).

## Watch out for

- Snippets are static markup; menus, modals and accordions often rely on `<details>` or need your own JavaScript
- Several tools (config builder, contrast checker) were still marked "coming soon" at review
- Everything depends on one maintainer

## Reusable ideas

- Ship a dark version next to each light snippet instead of relying on users to write `dark:` classes
- Present full-page templates honestly as starting points that still need content, logic and accessibility work
- Add a style-specific set (like neobrutalism) to a general library to give it a clear visual direction

## Related

[Meraki UI](meraki-ui.md), [Uiverse](uiverse.md), [Flowbite](flowbite.md), [Preline UI](preline.md)
