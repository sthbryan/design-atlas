---
title: Fontshare
description: 100 free families from Indian Type Foundry with a CSS/JSON API; 64 are proprietary with strict no-modify terms.
url: https://www.fontshare.com
type: font-library
formats: font library · CSS API
topics: [typography-and-styles, assets]
verdict: very-useful
agent: [api]
pricing: free
licence: "Free for personal and commercial use / two licences: 64 families under the proprietary ITF Free Font License (FFL v2.0, dated 17 Aug 2026), 36 under the SIL Open Font License"
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [fontsource, velvetyne, klim, typeface-fyi]
---
[← Atlas](../README.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Fontshare

## What it is

Fontshare is a free font service run and paid for by the Indian Type Foundry (ITF), a commercial foundry based in Ahmedabad. Its public API lists 100 Latin-script families with 926 styles, and 82 of those families include variable fonts. There are two kinds. The 64 "Closed Source" fonts, such as Satoshi, General Sans, Clash Display, Cabinet Grotesk, Switzer and Zodiak, were drawn by ITF's paid staff designers and are only available on Fontshare. The 36 "Open Source" fonts, such as Poppins, Manrope, Space Grotesk and JetBrains Mono, are OFL fonts from other publishers that Fontshare checks, fixes and hosts. The site also offers 59 curated font pairs.

## When to open it

Open it when you want a free display or text face that doesn't look like the usual Google Fonts picks, for a landing page, brand or portfolio. Before you commit, check which of the two licences applies, because the closed-source licence has real limits.

## Most useful

- **Download kit**: OTF for desktop, TTF, WOFF and WOFF2 for web, and a variable font when the family has one
- **CSS API**: one `<link>` to `api.fontshare.com/v2/css?f[]=slug@400,700&display=swap` returns ready `@font-face` rules served from `cdn.fontshare.com`
- **JSON catalogue**: `api.fontshare.com/v2/fonts` lists every family with category, designers, licence type, OpenType features, axes and styles
- **Pairs page**: tested heading and body combinations
- **Privacy**: according to the FAQ, the API only logs the referring domain and request counts, not personal data

## Using it with agents

There is no llms.txt or MCP server, but the API is easy for an agent to use. It can query the JSON list, filter on `license_type` (`itf_ffl` or `sil_ofl`), and write the CSS link or a self-hosted `@font-face` block. Tell the agent to keep the original WOFF2 files untouched for FFL fonts, and never to subset or convert them in a build step. For open-source fonts, the normal OFL rules apply.

## Watch out for

- The FFL forbids any change to the font files, including subsetting, format conversion and renaming. That rules out tools like glyphhanger or font subsetting plugins for these fonts
- You may not pass FFL font files to clients, freelancers, agencies or printers. Each of them has to download the fonts from Fontshare. Sharing inside your own organisation is allowed according to the FAQ
- You can't offer an FFL font as a selectable font in a SaaS product, design tool or template editor, even if users can't download the file
- Self-hosting is allowed and recommended. The API comes with no guarantee and can be changed or switched off without notice
- Logos made with the fonts can be registered as trademarks. The licence falls under Indian law, and disputes go to courts in Ahmedabad
- Only Latin-script languages are covered for now (the FAQ lists 134)

## Reusable ideas

- Put the licence type on every font card and in the API, so the most important fact is always visible
- Offer the same fonts as a CSS link and as a download kit, and say clearly which one updates on its own
- Publish curated pairings next to the catalogue, not in a separate blog post
- Write the FAQ answers for each licence type side by side

## Related

[Fontsource](fontsource.md), [Velvetyne](velvetyne.md), [Klim Type Foundry](klim.md), [Typeface.fyi](typeface-fyi.md)
