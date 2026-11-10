---
title: Unscii
description: Bitmapped Unicode fonts in 8×8 and 8×16 cells, built for character-cell art, terminals and programming at fixed sizes.
url: https://viznut.fi/unscii
type: font-library
formats: bitmapped Unicode fonts · unscii-8 (8×8) and unscii-16 (8×16) · alternative 8-pixel styles · several export formats · showcase
topics: [typography-and-styles, assets]
verdict: useful
agent: []
pricing: free
licence: The site states that the variants are in the public domain, with one following the licence of Unifont, which needs checking per variant before use
licence_class: mixed
reviewed: 2026-11-10
status: active
related: [oldschool-pc-fonts, v-fonts, best-free-fonts]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)


# Unscii

## What it is

A family of bitmapped Unicode fonts built on classic system faces, and unusually explicit about its purpose: it tries to support character-cell art well while staying usable in a terminal and for programming. The two main variants are unscii-8, with eight by eight pixels per glyph, and unscii-16 at eight by sixteen, with several alternative styles for the smaller one.

That combination is rare and technically interesting: Unicode coverage in a fixed cell means text, box-drawing, block elements and symbols all line up on the same grid, which is what you need to draw a diagram inside a terminal or a code comment.

## When to open it

Open it when you are drawing in a character grid — ASCII diagrams, box art, terminal UIs — or when a project needs a display face that is exactly aligned at a given pixel size. Also useful as a reference for how far a fixed cell can be pushed before it breaks for prose.

## Most useful

- **Two cell sizes with the same coverage**, so a layout can switch density without changing alignment.
- **Character-cell art treated as a first-class requirement**, not an accident of box-drawing glyphs.
- **Alternative styles for the 8×8 variant**, giving some typographic range inside one constraint.
- **Multiple font formats**, including bitmap-native ones, which matters for terminals and emulators.

## Using it with agents

No `llms.txt` or API at review. The page is static text with technical notes, which an agent can read and quote reliably, and the font files themselves are the interface.

## Watch out for

- Public domain applies per variant; the Unifont-derived one carries its own terms, so check before redistributing.
- Bitmap fonts are crisp only at their design size or integer multiples; anything else needs hinting you do not have.
- Unicode coverage is broad but not complete, and PCF versions drop characters that the other formats keep.
- Eight pixels is not enough for most scripts; this is a Latin-and-symbols tool, not a global one.

## Reusable ideas

- Publish two densities of the same design so layouts can switch without losing the grid.
- State the intended use — art, terminal, code — instead of claiming general fitness.
- Keep a technical readme that explains format limitations honestly.
- Treat alignment between text and line-art glyphs as a design requirement.

## Related

[Oldschool PC Font Pack](oldschool-pc-fonts.md), [V-Fonts](v-fonts.md), [Best Free Fonts](best-free-fonts.md)
