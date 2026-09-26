---
title: shadcnblocks
description: 2,000+ paid shadcn marketing and app blocks in Radix, Base UI and React Aria builds, via CLI or MCP.
url: https://www.shadcnblocks.com
type: component-registry
formats: component registry (shadcn/ui) · blocks · templates · Figma kit
topics: [components, landing-pages, agents-and-prompts]
verdict: very-useful
agent: [registry]
pricing: freemium
licence: freemium. A small set of free blocks (some need a free login); lifetime plans at $149 (Pro), $299 (Premium) and $399 (Elite) at review, plus a Team licence for up to 10 people. Paid code is under a proprietary licence (see Watch out for). The older free repo `shadcnblocks/shadcn-ui-blocks` is MIT plus a Commons Clause (about 400 stars, last push October 2025).
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [shadcn-ui, kibo-ui, shadcn-studio, blocks-so, shoogle, 21st-dev]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# shadcnblocks

## What it is

shadcnblocks is a commercial library of page sections and components for shadcn/ui and Tailwind, run by Rob Austin (@ausrobdev) since 2023. At review the header counted 2,028 blocks, 2,104 components, 49 pages, 20 templates (about $79 each on their own) and 14 themes. Hero (285) and feature (313) blocks are the biggest groups. There are also pricing, bento, testimonial, about, contact, integration and e-commerce sections, and app pieces such as data tables, chart groups, dashboards and application shells. Every block is published in three builds: Radix UI, Base UI and React Aria (the React Aria one is in beta). The shadcn CLI picks the build from the style in your `components.json`. The same organisation now hosts Kibo UI, and a Vue port lives on a separate site.

## When to open it

When a marketing or SaaS page needs many finished sections quickly and you are happy to pay for them. The catalogue is large enough to compare ten versions of a pricing table or hero before you choose. Also when a team wants the same blocks in Figma and in code, since the paid Figma kit links its 579 block designs to the source.

## Most useful

- **Marketing blocks**: hero, feature, bento, pricing, testimonial and CTA sections, each in several layouts.
- **App blocks**: data tables, chart groups, application shells and a 139-page admin kit for Next.js.
- **Themes**: 14 CSS-variable themes (some named after well-known brands) that restyle every block at once.
- **Page Builder**: arrange blocks in the browser, then install the whole page with the CLI.
- **CMS starters**: Payload and Sanity boilerplates that use the blocks as editable page sections.

## Using it with agents

Add the `@shadcnblocks` namespace to `components.json` and install with `npx shadcn add @shadcnblocks/<block>`. Free blocks need nothing more. Pro blocks need an API key sent as an auth header, read from `SHADCNBLOCKS_API_KEY`. The registry is listed in the official shadcn directory, so the shadcn MCP server can browse and install blocks when an agent asks for a section. There is also an extension for VS Code, Cursor and Windsurf. No `llms.txt` was published (the URL returned 404).

## Watch out for

- The paid licence forbids using the code in website builders, in an AI generator trained on the blocks, or in any tool that lets end users generate sites or apps. It also bans republishing blocks in public repos or on marketplaces such as 21st.dev. That rules out many agent-product uses, so read it before you build a tool on top.
- Once the API key header is in `components.json`, the CLI needs the variable set even for free blocks.
- The counts change often, and the directory entry still gives older figures (1,429 blocks).
- The site says it is not affiliated with shadcn/ui.

## Reusable ideas

- Ship one block id with several primitive builds, and let the consumer's config choose which one they get.
- Put a paid registry behind a bearer token in an environment variable, so the CLI and MCP work the same for paid users.
- Pair each code block with a Figma frame of the same name, so design and code stay in step.
- Group sections by page job (hero, pricing, proof) so people browse by intent, not by component type.

## Related

[shadcn/ui](shadcn-ui.md), [Kibo UI](kibo-ui.md), [Shadcn Studio](shadcn-studio.md), [blocks.so](blocks-so.md), [Shoogle](shoogle.md), [21st.dev](21st-dev.md)
