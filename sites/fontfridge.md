---
title: FontFridge
description: Google Fonts browser that filters by what type does — OpenType features, variable axes, writing systems, colour — with JSON catalogs for agents.
url: https://font.chingru.com
type: font-library
formats: font browser · 1,959 families · filters for features, axes, width, language and colour · grid and row previews · saved list · JSON catalogs · llms.txt
topics: [typography-and-styles, assets]
verdict: very-useful
agent: [llms-txt, api]
pricing: free
licence: The families are open-source Google Fonts, each under its own licence. The app states no licence for its own data or interface at review
licence_class: not-stated
licences:
  fonts: open-source-permissive
reviewed: 2026-11-10
status: active
related: [best-free-fonts, v-fonts, typeface-fyi]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)


# FontFridge

## What it is

A browser for the open-source Google Fonts collection that filters on what a typeface can actually do rather than on the mood words a specimen page usually offers. Alongside the familiar style and variant filters there are filters for OpenType features, variable axes, weight and width steps, writing system and colour against monochrome. A grid and row toggle changes the preview density without changing the query.

The claim behind it is that every family carries data harvested from the font binary — axes, features, metrics — plus Google's own classification scores, so a request like "a playful variable sans" or "a high-contrast serif that supports Devanagari" can be answered by filtering rather than by remembering.

## When to open it

Open it when you need a font that satisfies a technical requirement first — a variable weight or width axis, a specific OpenType feature, a writing system beyond Latin, a colour font — and only then a look. It is also the quickest way to find what a browser will actually render, since the axes come from the font file.

## Most useful

- **Filtering by capability**: features, axes, writing systems and colour, which is the opposite of the "elegant sans" browsing most font sites force.
- **Grid and row previews**, so you can compare many families at a glance and then read one closely.
- **Designer filtering**, useful when a project needs a coherent set from one hand.
- **A saved list** for keeping a shortlist across a session.
- **Published catalogs**: a slim ~2 MB JSON of every family, a 13 MB full record with per-axis ranges and named instances, a per-font JSON, and a designer index.

## Using it with agents

The best machine access of any font source reviewed here: `llms.txt` documents the JSON endpoints and works an example query, the slim catalog is small enough for a context window, the per-family records are addressable at `/catalog/<id>.json`, and there is no authentication or rate limit at review. Every family also has a stable preview URL that can be handed to a person.

## Watch out for

- It is Google Fonts only, so foundry catalogues and paid families are out of scope.
- The tags behind subjective queries are scores from Google's classification, not a curator's judgement; "playful" is a number.
- The 13 MB full catalog will flood a context window — use the slim one.
- The site's own data and interface state no licence, so the JSON is fine to query and worth checking before you redistribute it.

## Reusable ideas

- Filter type by technical capability before aesthetics; the constraint is usually the real requirement.
- Offer two catalogue sizes — one for humans with limits, one for agents — and say which to use when.
- Publish a per-item JSON endpoint beside every human page.
- Let the same query be expressed as a URL, so a result can be linked rather than described.

## Related

[Best Free Fonts](best-free-fonts.md), [V-Fonts](v-fonts.md), [Typeface.fyi](typeface-fyi.md)
