---
title: Nex UI
description: About 100 shadcn-style React and Tailwind components including 23 charts; MIT claimed without a LICENSE file and the CLI registry is empty.
url: https://www.nexui.dev
type: component-library
formats: shadcn-style component library with its own CLI
topics: [components, data-viz]
verdict: niche
agent: []
pricing: free
licence: Free. The site and the npm package `@jessin/nexui` say MIT, but the repository (`jessinsam/nexui`, 6 GitHub stars at review) has no LICENSE file and the site's LICENSE link returned 404
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [shadcn-ui, tremor, evil-charts, shadcn-studio]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [data-viz](../topics/data-viz.md)

# Nex UI

## What it is

NexUI is a React and Tailwind CSS component collection by Jessin Sam that openly follows the shadcn/ui copy-and-own model. The components page showed 102 entries in 17 categories at review: auth flows, calendars, carousels, dropdowns, search, toggles, palettes, data views, forms, chat, loaders, inputs, display, feedback, navigation, mobile buttons and, the largest group, 23 charts. Each card has a live preview and a Code tab you can copy. The repository README says the project is linked to a v0 project, with v0 pushing commits, and all visible activity dates from March 2026.

## When to open it

Open it for a quick look at dark-mode-ready product pieces, especially the chart set and the multi-step sign-up flows, when you are happy to copy a file by hand and tidy it up.

## Most useful

- **Charts**: 23 chart cards, the deepest category and the main reason to look
- **Auth**: sign-in, sign-up with password strength hints, and a two-step account type picker
- **Inputs beyond shadcn defaults**: phone, tag, number and OTP inputs, a range slider, a color picker and a view switcher
- **Framework notes**: the installation guide lists Next.js, Vite, Remix, Astro, React Router v7 and (experimental) TanStack Start

## Using it with agents

The docs describe a CLI (`npx @jessin/nexui@latest init`, `add`, `search`, `list`) that reads components from `nexui.dev/api/registry`. At review that endpoint returned an empty component list, and the CLI docs list only 57 names against 102 on the site, so do not rely on the CLI. There is no `llms.txt`, shadcn registry or MCP server; copy-paste from the Code tab is the working path.

## Watch out for

- The licence claim is not backed by a LICENSE file in the repository
- The public repo holds the website code rather than a clean per-component source tree, and has not changed since March 2026
- The home page gives "100+" and "50+" components in different places, and the CLI lists 57
- A sign-up page exists, but there is nothing documented that an account unlocks
- Demo cards include invented testimonial quotes as sample content; strip them before shipping

## Reusable ideas

- Offer both a CLI and a Code tab so people without the tool can still copy a component
- Publish a framework support table with an explicit "experimental" status
- Group charts as a first-class category rather than hiding them under data display

## Related

[shadcn/ui](shadcn-ui.md), [Tremor](tremor.md), [Evil Charts](evil-charts.md), [Shadcn Studio](shadcn-studio.md)
