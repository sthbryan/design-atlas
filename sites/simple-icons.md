---
title: Simple Icons
description: The standard CC0 set of 3,461 one-colour brand logos, with official hex colours and a colour CDN.
url: https://simpleicons.org
type: icon-library
formats: brand logo library
topics: [icons, assets]
verdict: very-useful
agent: []
pricing: free
licence: "Free. The project is released under CC0 1.0, but the disclaimer says that does not make every icon CC0: some carry their own licence, and all remain their owners' trademarks"
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [thesvg, devicon, shieldcn, icons0]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Simple Icons

## What it is

Simple Icons is the long-running community collection of single-colour brand logos, started in 2012 and maintained on GitHub (`simple-icons/simple-icons`, about 25,900 stars at review). Release 16.32.0 (20 September 2026) holds 3,461 icons. Each one is a single path on a 24×24 viewBox, paired with the brand's official hex colour, a source link, aliases, and where known a licence and a link to brand guidelines. The `simple-icons` npm package gets about 4 million downloads a month. The website is a Rust app compiled to WebAssembly, so it needs JavaScript to load.

## When to open it

Open it when you want brand marks that all look alike: monochrome, the same size and weight, and easy to tint. It is the default choice for social links in footers, tech-stack rows in READMEs, login buttons and badges. For full-colour logos or wordmarks, look elsewhere.

## Most useful

- **npm**: `import { siGithub } from 'simple-icons'` returns title, slug, hex, source, SVG string, raw path and, where available, guidelines and licence
- **Colour CDN**: `cdn.simpleicons.org/<slug>/<colour>/<dark-colour>` returns a tinted SVG, with an optional auto-sized viewbox
- **Version-pinned CDN**: jsDelivr or unpkg with `simple-icons@v16` so a later removal can't break the page
- **Other targets**: a Packagist package for PHP, an icon font, and a long list of community wrappers (React, Vue, Svelte, Iconify and more)
- **Brand colour data**: the hex values alone are handy for tinting cards or charts in brand colours

## Using it with agents

There is no official MCP or llms.txt, but the data is predictable enough for agents. Slugs are lowercase brand names with symbols spelled out (`dotnet`, `nodedotjs`), and component names are `si` plus the capitalised slug. Ask the agent to check the slug in `data/simple-icons.json` from the npm package before using it, and to use the colour CDN or the package's `path` so the icon inherits your brand colours.

## Watch out for

- Trademark rules apply on top of the file licence. Only 836 icons link to brand guidelines and 223 have licence data at review, and a missing entry does not mean there are no rules
- Brands can ask for removal. Icons are dropped in major releases, so `@latest` URLs can suddenly 404; pin a major version
- Scope is strict: a brand must pass a popularity test based on web traffic rank before it is added, so small or new products are often missing
- Several big names are missing: Microsoft, LinkedIn, Adobe, Slack, AWS and OpenAI were all absent at review. Check the list before planning a logo wall around it

## Reusable ideas

- Store the official hex colour next to each mark so the logo and its accent always match
- Keep one grid, one colour and one path per icon so any mix of logos sits evenly in a row
- Track licence and guidelines as structured data fields, and state clearly when they are missing
- Publish a formal removal process for rights holders instead of handling it case by case

## Related

[theSVG](thesvg.md), [Devicon](devicon.md), [shieldcn](shieldcn.md), [icons0](icons0.md)
