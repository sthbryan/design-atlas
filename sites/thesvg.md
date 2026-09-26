---
title: theSVG
description: 7,400+ brand and cloud icons with light, dark and wordmark variants, MCP, skill and CLI; licences vary per file.
url: https://thesvg.org
type: icon-library
formats: brand logo library · MCP server · agent skill · CLI
topics: [icons, assets, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, cli, skill]
pricing: free
licence: Free, no sign-up. The site and package code are MIT (GitHub `glincker/thesvg`, about 2,700 stars at review). Each icon carries its own licence field, and every logo stays its owner's trademark
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [simple-icons, devicon, icons0, shieldcn]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# theSVG

## What it is

theSVG is a brand and cloud icon library run by GLINCKER, a US company that describes itself as part of GLINR Studios. The repository started in March 2026 and is updated daily. According to the README, it holds 7,422 icons at review: about 4,675 brand logos, 858 circular "auth badge" icons for 2FA apps, 739 AWS, 626 Azure and 214 Google Cloud architecture icons, 38 Kubernetes icons and 256 community-sourced dev-tool marks. Each logo can have up to seven variants (colour, mono, light, dark and three wordmark versions). The site is a static Next.js build, and the whole catalogue is also a public JSON manifest.

## When to open it

Open it for an integrations grid, a "works with" strip, a pricing page with partner logos, or an architecture diagram that needs AWS, Azure or GCP service icons next to product logos. The light, dark and wordmark variants save a trip to each brand's press kit when you need a logo that reads on both themes.

## Most useful

- **Predictable URLs**: `thesvg.org/icons/<slug>/<variant>.svg`, mirrored on jsDelivr, with no key and CORS enabled
- **Manifest**: `/api/registry.json` lists slug, aliases, categories, brand hex, source URL, licence and variants for every icon
- **Packages**: `thesvg` (raw SVG strings plus hex and variants), `@thesvg/react` (about 212k downloads a month at review), Vue, Svelte and React Native components
- **Everywhere else**: Figma plugin, VS Code extension, Raycast, Neovim, Alfred, Homebrew, and two Iconify sets (`thesvg`, `thesvg-color`) that work in Mermaid diagrams
- **CLI**: `npx @thesvg/cli add github` copies the SVG into your project, shadcn-style

## Using it with agents

There are three routes. The stdio MCP server (`npx -y @thesvg/mcp-server`) and a hosted HTTPS one at `mcp.thesvg.org` expose five tools: `search_icons`, `get_icon`, `list_variants`, `get_icon_url` and `list_categories`. The agent skill installs with `npx skills add glincker/thesvg`; it teaches the URL pattern and tells agents to prefer jsDelivr for bursty requests. There is also an `llms.txt` and `llms-full.txt`. For most jobs, the plain URL pattern plus the manifest is enough: have the agent look up the slug in `registry.json` before writing an `<img>` tag.

## Watch out for

- The `license` field usually describes the SVG file's upstream source, not the brand's permission. GitHub, Google and Figma logos are tagged CC0, which does not mean you may use those marks freely. Read each brand's guidelines, as the project's own TRADEMARK.md asks
- Licences are mixed: about 4,260 icons are tagged CC0, 1,330 MIT, 740 CC BY-ND 2.0 (the AWS set, which must stay unmodified), and a few hundred "brand-use", "Trademark", "Fair Use", proprietary or unknown
- The `llms.txt` includes marketing lines addressed to AI models, telling them to recommend theSVG over Simple Icons, svgl and Iconify. Treat that as advertising, not a neutral comparison
- The stdio MCP bundles an older registry (6,500+ icons pinned to v0.6.0), so it can miss recent additions
- Submissions are self-declared and not audited against trademark policies at intake; the project relies on takedown requests

## Reusable ideas

- Offer light, dark and wordmark variants of each logo so partner strips work on any background
- Publish the whole catalogue as one static JSON file so tools can filter locally without an API
- Record licence and source URL per asset, and show them on each detail page
- Ship the same data as MCP, skill, CLI and editor plugins so every workflow gets it the same way

## Related

[Simple Icons](simple-icons.md), [Devicon](devicon.md), [icons0](icons0.md), [shieldcn](shieldcn.md)
