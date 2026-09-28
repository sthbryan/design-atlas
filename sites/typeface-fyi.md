---
title: Typeface.fyi
description: Chrome extension that identifies any web font, its metrics, where it's served from and its foundry.
url: https://typeface.fyi
type: browser-extension
formats: tool · Chrome extension
topics: [typography-and-styles, inspiration]
verdict: niche
agent: []
pricing: free
licence: Free on the Chrome Web Store / proprietary ("all rights reserved"); fonts it identifies keep their own licences
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [css-text-effects, refero-styles, designmd, minimal-gallery]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [inspiration](../topics/inspiration.md)

# Typeface.fyi

## What it is

Typeface.fyi is the landing page for "Typeface", a small Chrome extension by Vlad Muslakov that tells you which font a web page uses. Click the toolbar icon, hover any text, and a small popup shows the font family, size, weight, style, colour, line height and letter spacing. It also shows where the font is served from (Google Fonts, Adobe Fonts or self-hosted) and, when the name matches its built-in list, the independent foundry behind it. You can nudge size, leading, tracking and colour on the live page to test changes, and they reset when you close it. The landing page is itself a live demo, with sample paragraphs and the inspector popup over them. It does not host, sell or pair fonts.

## When to open it

Open it while browsing reference sites, when you want to know what typeface and settings make a page's text work, and whether that font is free (Google Fonts), part of an Adobe subscription, or a paid foundry font you'd need to license.

## Most useful

- **Hover-to-inspect**: family name plus computed size, weight, line height, letter spacing and colour in one popup
- **Source detection**: checks `@font-face` rules to tell Google Fonts, Adobe Fonts and self-hosted files apart
- **Foundry lookup**: a bundled list of independent foundries puts a name to many commercial typefaces
- **Live tweaking**: change size, leading, tracking and colour right on the page before you write a type scale
- **Privacy**: according to its policy, all inspection runs locally, with no backend, analytics or stored data

## Using it with agents

There's no API, MCP server or llms.txt. It's a tool for a person. Use it to collect the real family names and metrics from a reference site, then give the agent those values (for example family, weight, size, line height and tracking for headings and body) as design tokens or a `DESIGN.md` section, instead of asking it to guess the font from a screenshot.

## Watch out for

- It only runs in Chrome (and needs access to the pages you inspect). There is no Firefox or Safari version
- It is an early release (0.1.x, a few hundred users when reviewed) with no public source code
- Knowing a font's name doesn't give you the right to use it. Google Fonts are mostly under the SIL Open Font License, Adobe Fonts need an active subscription, and foundry fonts need a web licence bought from the foundry
- It reads computed CSS, so fallback fonts, variable-font axes and heavily renamed self-hosted files can give misleading names

## Reusable ideas

- Make the landing page a working demo of the product instead of screenshots
- Show where a font comes from next to its name, because the source is the quickest hint about licensing
- Let people try temporary type changes on a real page before writing tokens
- State plainly what an extension reads and that nothing leaves the browser

## Related

[CSS Text Effects](css-text-effects.md), [Refero Styles](refero-styles.md), [DESIGN.md](designmd.md), [Minimal Gallery](minimal-gallery.md)
