---
title: Devicon
description: MIT set of language and dev-tool logos as SVG and a font, made for tech-stack rows.
url: https://devicon.dev
type: icon-library
formats: developer logo library · icon font
topics: [icons, assets]
verdict: useful
agent: []
pricing: free
licence: Free. The project is MIT (created by Konpa in 2014, now community-maintained). The logos themselves belong to their owners, and the site asks users to follow each brand's policy
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [simple-icons, thesvg, shieldcn, iconoir]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Devicon

## What it is

Devicon is a set of logos for programming languages, frameworks, databases, design tools and dev services, maintained on GitHub as `devicons/devicon` (about 11,800 stars at review). The latest release, v2.17.0 from July 2025, has 578 icons. The `develop` branch has 650, so recent additions such as Linear and Claude are not in a release yet. Each logo comes in up to six versions: original (colour), plain (single colour), line, and a wordmark of each. At review the set held 1,863 SVG files on a 128×128 viewBox. A web font built with IcoMoon covers the plain and line versions. The npm package gets about 276,000 downloads a month. The picker site runs on AngularJS 1.2.

## When to open it

Open it for a "tech stack" or "skills" row on a portfolio, README, docs site or job page, where you want languages and tools to share a look. The line and plain versions keep a long row calm, and the original versions work when you want brand colour.

## Most useful

- **Icon font**: one CSS link, then `<i class="devicon-react-original colored">`. Size it with `font-size` like text
- **SVG by URL**: `cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/<name>/<name>-<version>.svg`
- **Picker**: choose an icon and version on the site and copy the `<link>`, `<i>`, `<img>` or inline `<svg>` snippet
- **`devicon.json`**: names, alternative names, tags, available versions and brand colour for every icon
- **Wordmark aliases**: many icons include the product name, useful when the logo alone is not recognisable

## Using it with agents

There is no MCP, llms.txt or component package, but naming is regular enough for agents: `<name>-<version>` for SVG files and `devicon-<name>-<version>` for font classes. Ask the agent to check `devicon.json` for the icon name and its available versions first, because not every icon has plain, line or wordmark versions. Tell it to pin a version tag instead of `@latest` in production.

## Watch out for

- Releases lag behind the repository. More than a year had passed since the last tag at review, and about 70 icons existed only on `develop`
- Versions are uneven: only 145 icons have a line version, and the font includes only the versions marked for it
- The site says it is up to you to use each logo within its owner's brand policy; Devicon grants no trademark rights
- The 128-unit grid and varied logo shapes mean optical sizes differ; add padding or a fixed box when aligning a row
- About 460 issues and 30 pull requests were open at review, so requests can take a while

## Reusable ideas

- Offer colour, single-colour and outline versions of each logo so a stack row can match the page's tone
- Ship logos as both a font and SVG files so authors can pick class names or image tags
- Keep one JSON manifest with aliases and available versions, and build the picker from it
- Show the exact snippet for each delivery method next to the chosen icon

## Related

[Simple Icons](simple-icons.md), [theSVG](thesvg.md), [shieldcn](shieldcn.md), [Iconoir](iconoir.md)
