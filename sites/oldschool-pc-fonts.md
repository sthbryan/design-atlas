---
title: Oldschool PC Font Pack
description: The classic PC bitmap and text-mode typefaces, packaged as modern font files with a font index, readme and showcase.
url: https://int10h.org/oldschool-pc-fonts
type: font-library
formats: font collection · font index with specimens · readme and technical notes · showcase page
topics: [typography-and-styles, assets]
verdict: useful
agent: []
pricing: free
licence: Free to use under CC BY-SA 4.0, as stated on the site at review; the pack asks for attribution and share-alike, and its files are conversions of typefaces from hardware and DOS-era software
licence_class: cc-attribution
reviewed: 2026-11-10
status: active
related: [unscii, v-fonts, best-free-fonts]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)


# Oldschool PC Font Pack

## What it is

A collection of the typefaces people actually looked at for fifteen years: the 8×8 and 8×16 character sets from IBM PCs and compatibles, the text-mode fonts of early operating systems, the bitmap faces from DOS applications. They are repackaged as font files you can install today, and the site's structure is that of an archive rather than a shop — home, font index, readme, showcase.

The value is documentary. Every one of these faces was drawn inside a character grid, usually with a single pixel for a stroke, which is a constraint most contemporary type has never faced. Browsing the index is a lesson in how much hierarchy you can build with one weight and 256 cells.

## When to open it

Open it when a brief needs an authentic pixel or terminal voice rather than a modern "retro" pastiche, when you are designing a monospaced interface and want to see how much was solved with a fixed cell, or when you need to identify a face from an old screenshot.

## Most useful

- **A font index with specimens**, so faces can be compared without installing them all.
- **A readme that documents provenance**, which matters when you are reviving a face from hardware.
- **A showcase page**, useful for judging a bitmap face at the sizes it was designed for.
- **Complete character sets**, including box-drawing and block elements, which is where most modern pixel fonts fall short.

## Using it with agents

No `llms.txt`, API or MCP server at review. The site is static and readable as text, so an agent can list the faces and their metadata, but the specimens are images.

## Watch out for

- CC BY-SA is a share-alike licence: derivatives carry the same terms, which can conflict with a proprietary product's font licensing.
- Bitmap faces are only correct at integer multiples; scaled or anti-aliased they lose the whole point.
- These are revivals of others' designs, so provenance and licence are the first things to check before shipping.
- Pixel type at small sizes is an accessibility risk; do not use it for body copy.

## Reusable ideas

- Ship a readme with provenance when you republish historical material.
- Show a font index with specimens rather than a download list.
- Remember box-drawing and block glyphs when building a monospaced face; interfaces need them.
- Design inside the cell first, not around it.

## Related

[Unscii](unscii.md), [V-Fonts](v-fonts.md), [Best Free Fonts](best-free-fonts.md)
