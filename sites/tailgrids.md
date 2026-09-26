---
title: TailGrids
description: React and Tailwind library with blocks, Figma system, CLI, MCP server, llms.txt and a design.md; MIT core, paid Pro blocks.
url: https://tailgrids.com
type: component-library
formats: component library (React + Tailwind) · UI blocks · templates · Figma design system · CLI · MCP server
topics: [components, landing-pages, design-md]
verdict: useful
agent: [mcp, llms-txt, cli, registry]
pricing: freemium
licence: freemium. The core components and about 70 free blocks are MIT in `tailgrids/tailgrids` (about 1.6k stars at review). Pro is a one-time payment. The default view showed $199 for one user and $349 for a five-person team at review, each as a discount on a higher listed price, with a separate Figma-only plan. The Pro licence (October 2025) allows unlimited commercial and client projects and removing credits. It forbids reselling or sublicensing, and using the components in website builders or UI generators
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [float-ui, shadcn-ui, shadcnblocks, kibo-ui, tailark]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [design-md](../topics/design-md.md)

# TailGrids

## What it is

TailGrids is a React and Tailwind CSS component library with a matching Figma design system, made by GrayGrids and first published in 2021. Version 3 is a React rewrite. Older v2.3 and v1.1 docs are still linked. At review the docs had about 50 core components, including date, time and number fields, a command palette, charts, a sidebar and a resizable panel. Blocks are grouped as Application, Marketing, E-commerce, Dashboard and AI. The Marketing group has about, navbar, footer, brands, CTA, features, hero and newsletter sections. The site counts 600+ components, blocks and templates in total, free and paid combined.

## When to open it

When you want a conventional, tidy product look (light canvas, one blue accent, 8px radius) with the same parts in React and Figma, so design and code stay in step. The free tier covers a basic marketing page and app shell. Pro adds most of the dashboard, e-commerce and AI-app blocks.

## Most useful

- **Core components**: a full form set with calendar and range calendar, plus menubar, context menu, hover card and toast.
- **Marketing blocks**: hero, feature, CTA, brand-logo and newsletter sections.
- **Application blocks**: mega menu, paywall, cookie banner, search modal, file upload and 404 layouts.
- **Figma system**: variables for light and dark mode that mirror the code tokens (paid).
- **Icons**: 240+ free SVG icons for React.

## Using it with agents

Unusually complete. `npx @tailgrids/cli@latest init` sets up dependencies, config and base styles, and `@tailgrids` is listed in the shadcn directory. There is an MCP server (`npx -y @tailgrids/mcp@latest`, MIT), with one-click installs for VS Code, Cursor, Windsurf and Antigravity. An `llms.txt` indexes every component and block, and a `design.md` file describes the v3 style in agent-readable form: colour, type, spacing, radius and shadow tokens, plus component specs.

## Watch out for

- The ban on use in website builders and UI generators covers Pro code, which rules out some agent products.
- The shadcn directory's health check marked the TailGrids registry as degraded at review because sampled items failed validation. Prefer the project's own CLI.
- The homepage calls the 600+ items "free" in one place and "free and pro" in another. Most blocks are Pro.
- The `/docs/cli` link in `llms.txt` returned 404 at review.

## Reusable ideas

- Publish a `design.md` next to the component docs, so an agent learns the style as well as the API.
- Keep Figma variables and CSS tokens named the same, so a design change maps straight to code.
- Sort blocks by product type (marketing, app, e-commerce, dashboard, AI) as well as by section.

## Related

[Float UI](float-ui.md), [shadcn/ui](shadcn-ui.md), [shadcnblocks](shadcnblocks.md), [Kibo UI](kibo-ui.md), [Tailark](tailark.md)
