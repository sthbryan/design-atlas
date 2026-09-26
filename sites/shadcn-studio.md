---
title: Shadcn Studio
description: "ThemeSelection's shadcn suite: blocks, templates, theme generator, Figma kit and an MCP; strict site licence."
url: https://shadcnstudio.com
type: component-registry
formats: component registry (shadcn/ui) · blocks · theme generator · MCP server · Figma kit
topics: [components, landing-pages, color, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt, registry]
pricing: freemium
licence: "freemium. The open-source set is MIT with a Commons Clause and a non-compete added on the site's licence page (the repo `shadcnstudio/shadcn-studio` itself carries a plain MIT file; about 1.9k stars). Paid one-time plans at review: Basic $99, Pro $199, Team $449 (15 seats), Enterprise $849, shown as discounts on higher list prices."
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [shadcn-ui, shadcnblocks, kibo-ui, blocks-so, magic-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [color](../topics/color.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Shadcn Studio

## What it is

Shadcn Studio is a shadcn/ui product line made by ThemeSelection (the support email and the "Hire Us" link both point to themeselection.com). It bundles several things: an open-source set of component variants, over 1,000 blocks, over 100 pages and over 25 templates. On top of that come a theme generator, 150+ animated illustrations built with Motion, a Figma UI kit, a Figma-to-code plugin, a drag-and-drop page builder, an IDE extension and an MCP server. Blocks come in Radix UI and Base UI versions. The site says over 1,600 creators and teams use it.

## When to open it

When you want one paid vendor for components, marketing blocks, admin templates, a theme and a matching Figma file. The free theme generator is also worth opening on its own, to tune shadcn CSS variables for colour, radius and fonts in light and dark mode before you export them.

## Most useful

- **Theme generator**: edit shadcn tokens live, start from preset themes, and copy the CSS variables.
- **Marketing and e-commerce blocks**: hero, features, pricing, about, blog, integrations and product sections.
- **Illustrations**: animated compositions (orbits, beams, card stacks, marquees, text effects) themed to your tokens.
- **Templates**: SaaS, mobile-app, LMS and AI-chat starters on Next.js or Astro.
- **Figma kit and plugin**: variables and slots that match the code, plus a plugin that turns frames into shadcn code.

## Using it with agents

Install from the `@shadcn-studio` registry with the shadcn CLI. It is listed in the official directory, and the URL includes `{style}` so it can serve Radix or Base UI builds. The site publishes a long `llms.txt` that indexes its pages and docs. The MCP server is the npm package `shadcn-studio-mcp` (MIT), which runs locally with an API key and email from your account. It has four slash commands: `/cui` builds from an existing block, `/rui` refines one, `/iui` generates a new design (Pro only), and `/ftc` installs the blocks it finds in a Figma frame through the Figma MCP. The free tier of the MCP is described as less creative.

## Watch out for

- The licence bans website builders, AI tools trained on the resources, ports to other frameworks, redistributed UI kits and competing products. This applies even to the "free" code under the added Commons Clause.
- The repo licence file and the site's licence terms do not match; follow the stricter site terms.
- The Figma-to-code flow depends on keeping the original block frame names. The docs themselves warn that the agent may skip content edits on long pages.
- Prices and struck-through "list" prices change often.

## Reusable ideas

- Ship a theme generator next to the components, so a brand's tokens are set once and every block follows.
- Name Figma frames after registry ids, so an agent can map a mockup straight to install commands.
- Split agent commands by intent (reuse, refine, invent, import) instead of using one open prompt.
- Serve style-specific builds from one registry URL pattern.

## Related

[shadcn/ui](shadcn-ui.md), [shadcnblocks](shadcnblocks.md), [Kibo UI](kibo-ui.md), [blocks.so](blocks-so.md), [Magic UI](magic-ui.md)
