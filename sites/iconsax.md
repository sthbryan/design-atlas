---
title: Iconsax
description: Vuesax's six-style icon library with 40k+ icons, a free no-auth MCP server, a web component and a Pro sync CLI.
url: https://app.iconsax.io
type: icon-library
formats: icon library · MCP server · web component
topics: [icons, assets, agents-and-prompts]
verdict: useful
agent: [mcp, cli]
pricing: freemium
licence: Freemium. Free icons use a proprietary free licence (commercial use allowed, no redistribution or resale). Premium is sold as monthly, annual or lifetime Pro plans and per-seat Team plans; prices load only inside the app and were not stated on any page we could read
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [hugeicons, boxicons, iconify, icons-download, ionicons]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Iconsax

## What it is

Iconsax is the icon library of the Vuesax team (Lusaxweb), now in its second version as a web app, a Figma plugin and a Framer plugin. Each base icon comes in six styles (Linear, Outline, Bold, Bulk, Two-tone, Broken) and two terminations (straight and rounded), on a 24×24 grid. According to its docs, the library holds more than 40,000 icons including more than 6,000 free ones, plus more than 1,000 animated Premium icons as Lottie JSON and GIF. The homepage gives different totals (44,000+ premium, 7,000+ free). Icon generation with paid AI credits is announced but marked as coming soon.

## When to open it

Open it when a product wants one icon family with several expressive styles, such as Bulk or Two-tone for feature highlights and Linear for navigation, with the same shapes in Figma and in code. The free tier alone covers common UI needs if the proprietary terms are acceptable.

## Most useful

- **Hosted MCP server**: `https://app.iconsax.io/api/mcp` works with no account for free icons, with tools to search, fetch SVG, return React, Vue or HTML code, and list categories
- **Pro MCP tools**: a Bearer key (`ix_pro_…`) unlocks search and code output across the full Premium library
- **`iconsax` npm web component**: `<iconsax-icon name type size color>` works in any framework, with free icons bundled
- **`npx iconsax sync`**: scans your source for Pro icons, fetches them into a committed JSON file and keeps them working after a subscription ends (300 new icons a day per key)
- **Figma plugin**: search, replace and restyle icons on the canvas, with projects for Premium users

## Using it with agents

Iconsax is one of the few icon sets with an official MCP server that needs no install or sign-up. Add the URL to Claude, Cursor or any HTTP MCP client, then ask for an icon by name, style and target framework. Keep Pro keys in environment variables or client config and out of the repository. The docs say `iconsax sync` also reads the key from `IX_PRO_KEY`. There is no llms.txt, and `/llms.txt` returns the app's HTML shell instead.

## Watch out for

- The free licence is not open source: loose icon files may not be redistributed, even in modified form
- The docs disagree on attribution. The licence pages say none is needed except in sold or shared kits and templates, while the icon library page asks free users to credit Iconsax
- Kits and templates may include at most 500 Premium icons, with mandatory attribution
- Counts differ between pages (40,000+, 44,000+, 50,000; 6,000+, 7,000+, 1,200+ free names in the npm docs)
- Popular packages such as `iconsax-react` are community wrappers of the older v1 set. Their MIT tag covers the code, not the icons
- Several footer links on iconsax.io pointed to `localhost` at review, a sign the marketing site is not closely checked

## Reusable ideas

- Serve a no-auth MCP endpoint for the free tier so agents can fetch real icons instead of inventing paths
- Resolve paid assets at build time into a committed file, so production never calls the vendor
- Build styles from two axes (fill treatment and line ending) to multiply variants while keeping shapes identical
- Offer framework-ready code from the same tool that returns raw SVG

## Related

[Hugeicons](hugeicons.md), [Boxicons](boxicons.md), [Iconify](iconify.md), [Icons.download](icons-download.md), [Ionicons](ionicons.md)
