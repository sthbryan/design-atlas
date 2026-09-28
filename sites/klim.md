---
title: Klim Type Foundry
description: Premium New Zealand foundry (Söhne, Tiempos) with reference-grade essays and use-based licensing from USD 60.
url: https://klim.co.nz
type: font-library
formats: type foundry · specimens
topics: [typography-and-styles, inspiration]
verdict: useful
agent: []
pricing: paid
licence: Paid, proprietary EULAs / from USD 60 for the first style (each extra style costs less, families and collections cost less per style); one-off fees, no expiry; tiers by users, page views, MAUs, impressions or devices; free test fonts for internal evaluation only
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [fontshare, velvetyne, typeface-fyi, refero-styles]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [inspiration](../topics/inspiration.md)

# Klim Type Foundry

## What it is

Klim is an independent type foundry founded in 2005 by Kris Sowersby in Wellington, New Zealand. It has a small team of type designers and font engineers. Its retail catalogue has 26 families, including Söhne, Tiempos, Founders Grotesk, National 2, Untitled, Domaine, Signifier, Calibre, Epicene and The Future. It also shows ten custom typefaces made for clients, among them PayPal Sans. According to the about page, Klim has also drawn type for the Financial Times and National Geographic, and some of its fonts have shipped with macOS since Catalina 10.15.4. The site is a Gatsby build with a shop, fonts-in-use pages, interviews and a blog.

## When to open it

Open it as a benchmark for how a serious type specimen and licensing site should look, when you want to understand the history behind a style of typeface, or when a brand needs a premium face and has the budget for it. It's also where you'll find out what a well-known face like Söhne or Tiempos costs and allows before anyone designs a product around it.

## Most useful

- **"Design information" essays**: long, footnoted essays by Sowersby on each family (the Söhne one runs to 3,834 words) that explain the historical models and the design choices
- **Collection pages**: glyph counts, kerning notes, language support, OpenType features, a PDF specimen and fonts-in-use examples for each family
- **Licence overview**: one page that matches common jobs (logo, website, email marketing, mobile app, TV ad, OEM device) to the right licence, with columns for modify, embed and share
- **Test fonts**: one free download containing every retail font, for trying fonts inside your company
- **Upgrade path**: from your account, move an order from one style to the family or collection, or to a higher user or traffic tier

## Using it with agents

There is no API, llms.txt or MCP server. The fonts are proprietary, so the agent's job is to use them correctly. After purchase, give it the WOFF2 files and the licensed domain. Ask it to write `@font-face` rules that keep the files as they are and to set a metric-matched fallback. Test fonts must never end up in shipped code, so for prototypes tell the agent to use a free stand-in and swap in the real font later.

## Watch out for

- Every Klim licence is proprietary and priced by use. A web licence counts page views or unique users per domain, an app licence counts MAUs or downloads, and moving the font into a new medium needs a new licence
- Web licences allow only the WOFF2 files Klim supplies, served with `@font-face` on the domain in your receipt. Converting to other formats is banned, and subsetting is allowed only to reduce file size, without support from Klim
- The standard web and app licences exclude products where end users create their own output, such as editors or customisers. Those need a separate agreement
- Test fonts are for internal use only. No commercial use, no modification and no sharing outside your organisation
- Desktop licences now allow sharing with contractors and agencies, but only if the licence covers every user

## Reusable ideas

- Pair each typeface with a long essay about its history and design, not just a sample paragraph
- Explain licensing by use case first, then link to the full legal text
- Offer one free test download of the whole catalogue with clear limits on use
- Show proof from real use (fonts in use, awards, interviews) next to the shop

## Related

[Fontshare](fontshare.md), [Velvetyne](velvetyne.md), [Typeface.fyi](typeface-fyi.md), [Refero Styles](refero-styles.md)
