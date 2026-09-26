---
title: Preline UI
description: Tailwind components with headless JS plugins under MIT plus Fair Use terms; agent skills, block prompts, paid hosted MCP.
url: https://preline.co
type: component-library
formats: Tailwind CSS component library with headless JS plugins, Pro blocks and a hosted MCP server
topics: [components, landing-pages, agents-and-prompts]
verdict: very-useful
agent: [mcp, prompts, skill]
pricing: freemium
licence: the open-source library is free under a dual licence, MIT plus the "Preline UI Fair Use License" (repo `htmlstreamofficial/preline`, about 6.4k GitHub stars at review). Preline Pro is a one-time lifetime licence at $249 (single developer) or $459 (up to 15 developers), with a custom Enterprise tier. The hosted MCP server is included with Pro until 1 January 2027 and needs a subscription after that
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [flyonui, flowbite, daisyui, headless-ui, hyperui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Preline UI

## What it is

Preline UI is made by Preline Labs (the Htmlstream team). It pairs Tailwind CSS markup with a set of accessible, unstyled JavaScript plugins (`npm i preline`, version 5.0.0 at review). The plugins cover dropdowns, overlays, tabs, accordions, advanced select, combobox, datatables, tree view, stepper, file upload and more, written in TypeScript. According to the site there are 640+ free components, 972 blocks (220+ of them free) and 1,612 components and blocks in total. It also has free and premium templates for dashboards, websites and e-commerce, a Figma design system, animated SVG icons, and integration guides for React, Vue, Next.js, Laravel, Django and Rails.

## When to open it

Open it when you need dashboard or app screens (tables, settings pages, admin layouts) in plain HTML with Tailwind, and want working interactive behaviour without committing to a React component library. The Pro blocks are aimed at teams shipping a lot of admin and e-commerce UI.

## Most useful

- **Headless plugins** that add behaviour to any Tailwind markup, framework-agnostic
- **Dashboard blocks and templates**: admin shells, project tables, user profiles and product pages
- **Themes** built on semantic design-token classes, with an option to output plain utilities
- **Figma design system** free, with components, variables and styles matching the code

## Using it with agents

Preline has invested heavily here. `npx skills add htmlstreamofficial/preline` installs Agent Skills, and block pages carry copyable "AI Prompts" with context and a checklist. There is a prompting guide and setup pages for many coding tools. The MCP server (`https://mcp.preline.co`, Streamable HTTP) is hosted, read-only and needs a bearer API key, so it is not available to open-source-only users. There is no `llms.txt` (404 at review).

## Watch out for

- The Fair Use terms ban building products that compete with Preline and require attribution on derivative templates or themes, which is stricter than plain MIT
- Pro is not licensed for open-source projects, and redistributing Pro code or using it in generators is prohibited
- MCP access will become a separate paid subscription after the launch period, even for lifetime Pro buyers

## Reusable ideas

- Separate behaviour (headless JS plugins) from styling so the same scripts serve many visual designs
- Attach a ready-made agent prompt to each block, with a source reference and a checklist
- Let the generator output either token classes or raw utilities to match the user's project

## Related

[FlyonUI](flyonui.md), [Flowbite](flowbite.md), [daisyUI](daisyui.md), [Headless UI](headless-ui.md), [HyperUI](hyperui.md)
