---
title: Boxicons
description: Rounded UI icons with a free core, paid Pro packs and weights, framework packages, a CLI and a SKILL.md for coding agents.
url: https://boxicons.com
type: icon-library
formats: icon library · CLI · agent skill file
topics: [icons, assets, agents-and-prompts]
verdict: useful
agent: [cli, skill]
pricing: freemium
licence: Freemium. The free docs put icons under CC 4.0, fonts under SIL OFL 1.1 and code under MIT, while GitHub and the npm packages say MIT. Pro is $39 a year for one user, $99 for up to 8 seats and $249 for up to 30, under a proprietary licence
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [bootstrap-icons, iconsax, hugeicons, iconify, simple-icons]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Boxicons

## What it is

Boxicons is a long-running open-source icon set that relaunched as version 3 in February 2026 with a paid Pro tier. The repository moved from `atisawd/boxicons` to `box-icons/boxicons` (about 3,200 stars at review). The free core holds 1,884 outline (Basic) icons, a matching Filled set and 295 brand logos on a 24×24 grid. According to the site, Pro raises the total past 50,000 across five packs (Basic, Filled, Duotone, Duotone Solid, Duotone Mix), three styles (regular, rounded, sharp) and three weights. The site banner already announces a v4.

## When to open it

Open it when you want a friendly, rounded UI set with a matching filled twin and brand logos in one family, or when a project already uses the older v2 `bx` classes. Pro makes sense only if you need the duotone packs or several weights.

## Most useful

- **Framework packages**: `@boxicons/react`, `@boxicons/vue`, `@boxicons/svelte` and `@boxicons/js`, tree-shakeable, with `pack`, `size`, `flip`, `rotate` and `removePadding` props
- **Icon fonts on a CDN**: versioned stylesheets at `cdn.boxicons.com`, with `bx`, `bxf` and `bxl` class prefixes for outline, filled and brands
- **Font helpers**: CSS classes for rotation, flipping, borders, pulled icons and simple animations
- **Figma and Framer plugins**: colour, padding, flip and rotation controls inside the design tool
- **Legacy site**: `v2.boxicons.com` keeps the old catalogue for projects that have not migrated

## Using it with agents

The `@boxicons/core` package includes a `SKILL.md` written for coding assistants. It lists the version, every free icon name, the install commands and naming rules (kebab-case files become PascalCase components, and names that start with a digit get an `Icon` prefix). The interactive `npx @boxicons/cli` offers to copy it into `.cursor/skills/boxicons/`. Other agents can read it from `node_modules/@boxicons/core/SKILL.md`. There is no MCP server or llms.txt.

## Watch out for

- Two generations live side by side. The npm package `boxicons` (about 240,000 downloads a month) is still v2.1.4 from 2022, with different class names, while the new `@boxicons/*` packages are far less used so far
- The licence story is inconsistent: the docs say CC 4.0 for icons, while the repository and npm list MIT. Keep attribution to be safe
- Pro terms forbid using Pro icons in open-source projects, public kits or templates for third-party platforms, and in AI training data. Seats are capped per plan
- The CLI writes your Pro API key into `.npmrc`, so keep that file out of public repositories
- Much of the site pushes sign-up and Pro, so check the free filter when browsing

## Reusable ideas

- Ship a `SKILL.md` with a full name catalogue inside the core package so agents stop guessing icon names
- Encode pack, style and weight in package names so installs stay small and predictable
- Keep the previous major version online at its own subdomain while users migrate
- Give icon-font users helper classes for rotation, flipping and animation, not only glyphs

## Related

[Bootstrap Icons](bootstrap-icons.md), [Iconsax](iconsax.md), [Hugeicons](hugeicons.md), [Iconify](iconify.md), [Simple Icons](simple-icons.md)
