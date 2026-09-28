---
title: Departure Mono
description: Free OFL pixel monospace font by Helena Zhang with box drawing, Cyrillic and Greek.
url: https://departuremono.com
type: font-library
formats: typeface (pixel monospace)
topics: [typography-and-styles, assets]
verdict: very-useful
agent: []
pricing: free
licence: free; the font is under the SIL Open Font License and the website code is MIT (repo `rektdeckard/departure-mono`). Donations are optional.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [srcl, 8bitcn, termcn, typeface-fyi]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Departure Mono

## What it is

Departure Mono is a free monospaced pixel font designed by Helena Zhang, co-creator of Phosphor Icons; the specimen site was built with Tobias Fried. According to the site, it draws on early command-line and GUI constraints, the tiny bitmap fonts of the late 1990s and early 2000s, and film and TV sci-fi. The site is an interactive specimen with editable type samples, a mock mission-report page and a glyph map. The map covers Basic and Extended Latin, Cyrillic, Greek, punctuation and symbols, numerals, maths and currency, and graphical characters including box drawing. The latest release at review time was v1.500 (May 2025), and the repo had about 3.5k stars.

## When to open it

- When a terminal-style, dashboard, game or sci-fi interface needs a pixel face that is still readable in running text.
- When you want a free, open-licence alternative to commercial retro or bitmap monospace fonts.

## Most useful

- **Editable specimen**: type into the samples at different sizes and tracking values to judge the font before installing it.
- **Box-drawing set**: lines and corners for pseudo-graphical frames, tables and diagrams in plain text.
- **Wide script coverage** for a pixel font, including Cyrillic and Greek.
- **Installation routes**: GitHub release zip, Homebrew (`font-departure-mono`) and Nix (`departure-mono`).

## Using it with agents

There is no API, MCP server or npm package. The practical route is to self-host the web font from the release in your repo and give the agent a CSS rule to follow. Tell it to set sizes in multiples of 11px, as the README recommends for crisp pixels, and to leave letter-spacing adjustable. Because it is under the OFL, an agent can bundle the font files in a project without extra permission, as long as the licence file goes with them.

## Watch out for

- It only looks sharp at multiples of 11px; other sizes blur the pixel grid, especially in fluid type scales.
- It has one weight and style, so hierarchy has to come from size, case, colour and spacing.
- The OFL lets you bundle and modify the font, but a modified version can't keep the reserved name, and the font can't be sold on its own.
- The specimen site is a JavaScript-only app, so text-only readers see an empty page; the README is the reliable source for facts.

## Reusable ideas

- Lock a pixel font to its native grid size and build the type scale in whole multiples of it.
- Use box-drawing characters for borders and tables in monospace UIs instead of CSS lines.
- Publish an editable specimen so people can test their own copy.
- Pair a pixel display face with a plain sans for long body text.

## Related

[SRCL](srcl.md), [8bitcn](8bitcn.md), [termcn](termcn.md), [Typeface.fyi](typeface-fyi.md)
