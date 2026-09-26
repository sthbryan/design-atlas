---
title: Inkword
description: Turns one word into a small editable SVG editorial drawing in six fixed styles; private beta.
url: https://inkword.app
type: tool
formats: tool · AI illustration generator
topics: [assets, inspiration]
verdict: niche
agent: [llms-txt]
pricing: freemium
licence: Private beta, free for approved testers (20 drawings) / planned packs of $9 for 60 or $19 for 150 drawings, one-off / beta terms allow use in your own work, no resale; commercial licence "to come"
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [craftwork, 3dicons, fffuel, drawably]
---
[← Atlas](../README.md) · Topics: [assets](../topics/assets.md), [inspiration](../topics/inspiration.md)

# Inkword

## What it is

Inkword turns one word or a short phrase (up to 30 characters) into a small editorial illustration. According to the site, Anthropic's Claude reads the word, chooses a visual metaphor and writes the coordinates of each shape, and Inkword's own renderer then inks the strokes in the browser so the drawing appears line by line. There are six written style systems. The live homepage lists Cut Paper, Riso, Doodle, Figures, Blueprint and Linocut. The site says each style was tuned over more than 1,400 test drawings and 400 blind side-by-side picks. A typical drawing has around seven marks and weighs under 25 KB as SVG. It is a one-person product by Sumit Bedi, currently in a hand-approved private beta.

## When to open it

Open it when an article header, newsletter issue, slide or empty state needs a simple conceptual drawing, and you want a whole set to share one house style rather than a different look on every prompt. It suits blogs, docs and decks more than product marketing that needs detailed scenes.

## Most useful

- **One word in, one drawing out**: no long prompt to write. Abstract ideas get interpreted as a metaphor, and objects come out as a recognisable subject
- **Consistent series**: the same style gives matching drawings across a whole blog or deck
- **Editable vector**: SVG you can open in Figma or Illustrator, with colour, position, size and rotation editable per mark in the app
- **Animated exports**: the stroke-by-stroke drawing can be saved as a GIF, and the homepage also mentions Lottie
- **Examples page**: shows drawings placed in a blog post, slide, newsletter, empty state and docs page

## Using it with agents

There is an `llms.txt`, but it only describes the product. There is no API, MCP server or CLI, and the terms forbid automating the service. Make the drawings yourself, commit the SVGs to the repo, and let an agent place them or recolour them to your palette, which is easy because each drawing is only a handful of paths.

## Watch out for

- Access is approved by hand, a few people at a time, and the beta can change, pause or end without notice
- The licence is provisional. During the beta you may use drawings in your own posts, decks, documents and newsletters, but reselling them as stock or packs is not allowed. Commercial terms will only be published with the paid release
- The terms say drawings are AI-made and not guaranteed unique, so someone else may get a similar one from the same word
- The `llms.txt` lists Geometric and Ink among the six styles while the homepage shows Doodle and Figures, so check the app for the current set
- Free downloads carry a small mark. Clean PNG and SVG are Pro features after the beta
- Terms are governed by the laws of India, and your word is sent to Anthropic's API to make each drawing

## Reusable ideas

- Write a style down as rules (palette, allowed marks, what to leave out) so every output matches, instead of relying on one long prompt
- Let a model decide composition as coordinates and keep the rendering deterministic in your own code
- Show generated assets in realistic contexts (article, slide, empty state) rather than on a blank canvas
- Keep illustrations to a handful of marks so they stay light and easy to recolour

## Related

[Craftwork](craftwork.md), [3dicons](3dicons.md), [Fffuel](fffuel.md), [Drawably](drawably.md)
