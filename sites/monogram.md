---
title: monogram
description: CC0 monospace bitmap font five pixels wide, shipped as TTF, bitmap PNG and JSON, and a PICO-8 font, with an extended family.
url: https://datagoblin.itch.io/monogram
type: font-library
formats: monospace bitmap font, 5px wide · TTF, bitmap PNG with JSON, PICO-8 .p8 · 10 kB minimal TTF and extended family with italics · Latin, Spanish, Russian, Portuguese and Greek charsets
topics: [typography-and-styles, assets]
verdict: useful
agent: []
pricing: free
licence: Released under CC0 1.0 by the author at review, including the extended and italic files, with the download set as name-your-own-price and a thank-you pack for $5 or more
licence_class: public-domain
licences:
  fonts: public-domain
reviewed: 2026-11-11
status: active
related: [pixel-code, silkscreen, unscii]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# monogram

## What it is

A monospace bitmap font five pixels wide, drawn by datagoblin and given away under CC0. Its constraints are the design: every glyph fits the same five-pixel advance, so columns line up in a terminal, a tally table or a tile-based game without a metrics pass.

The distribution is the unusual part. The same drawing arrives as a TTF for the desktop and the browser, as a bitmap PNG with a JSON atlas for engines that want a texture, and as a PICO-8 custom font for the fantasy console. There is a minimal 10 kB TTF, an extended family with an italic subfamily, and a zip that carries the lot in version 1.1.0 at review. The page is a distribution page rather than a specimen site: screenshots of games using it, a devlog, and an active comment thread where the author answers spacing questions himself.

Its charsets go past English — Spanish, Russian, Portuguese and Greek are listed, and the extended cut is where accents live. The generator for the bitmap version is manual at review, which the author says plainly.

## When to open it

Open it when a game, a toy interface or a pixel-styled tool needs text at small sizes and must ship the same look across a native build, a web build and a console, or when you want a bitmap font with an unambiguous licence.

## Most useful

- **CC0 with no ambiguity**: no attribution, no share-alike, no reserved name, which removes the licence conversation entirely.
- **Three formats for three runtimes** from one design, which is what makes it practical in games.
- **A 10 kB TTF**, small enough to embed without a subsetting step.
- **An extended and italic family** when the base width is too tight.
- **A PICO-8 build**, for the specific audience that formats for a fantasy console.
- **The comment thread as documentation**, with the author answering questions about resolution, spacing and Godot setup.

## Using it with agents

Nothing machine-readable: no `llms.txt`, no API, and the files live behind itch.io's download flow. An agent can read the page for formats and licence wording, and can reference the TTF URL, but will need a human click for the download.

## Watch out for

- Five pixels of advance is genuinely narrow; `w` and `m` suffer, and the author explains why no bold variant is possible inside that constraint.
- The bitmap export is generated manually, so the PNG and JSON may lag the TTF after an update.
- itch.io downloads require an account interaction, which is fine for a person and friction for a build.
- The page is a shop listing: ratings, comments and a donation prompt sit around the actual font files.
- No lowercase-to-small-caps or variable axis; it is a fixed bitmap design, not a system.

## Reusable ideas

- Ship one drawing in every format the runtimes need, and say which to install where.
- Put the licence in one word — CC0 — instead of a permissions table, when it is true.
- Publish a minimal file beside the full one for people who care about bytes.
- Answer usage questions in public; the thread becomes the documentation.

## Related

[Pixel Code](pixel-code.md), [Silkscreen](silkscreen.md), [Unscii](unscii.md)
