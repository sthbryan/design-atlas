---
title: Pixel Code
description: Monospace pixel typeface built for source code, with eleven weights, programming ligatures and a contextual trick that fakes even kerning.
url: https://qwerasd205.github.io/PixelCode/
type: font-library
formats: monospace pixel font · weights 100 to 950 with italics · Latin, Greek, Cyrillic and Hebrew · box drawing, geometric shapes, dingbats, braille and Powerline glyphs · ligatures, contextual alternates, pseudo-kerning, oldstyle figures
topics: [typography-and-styles, assets]
verdict: niche
agent: []
pricing: free
licence: SIL Open Font License 1.1, from the repository at review (about 500 stars); download from GitHub releases
licence_class: open-source-permissive
licences:
  fonts: open-source-permissive
reviewed: 2026-11-11
status: active
related: [silkscreen, monogram, fusion-pixel-font]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Pixel Code

## What it is

A pixel typeface drawn for reading code rather than for decorating a poster. The design brief is legibility at a fixed grid, and the interesting part is how far the author went to keep monospace honest: most pixel monospaces widen `i` and `l` with serifs so they do not leave gaps, which costs identifiability. Pixel Code instead uses a contextual substitution to shift the `l` one pixel left after letters with a wide right bearing, closing the hole without touching the glyph's shape.

It ships a full weight range from Thin to ExtraBlack with matching italics, which is unusual for a pixel font, along with programming ligatures (`=>`, `!==`, `||`, `::`), context-aware punctuation that lifts or drops asterisks and colons depending on the case of the neighbouring letter, oldstyle figures and a straight-comma alternate. Coverage goes well beyond Latin: Greek, Cyrillic, Hebrew, box drawing, geometric shapes, dingbats, braille and Powerline symbols, with a progress-bar set for terminal prompts.

## When to open it

Open it when a code sample, a terminal-looking UI or a documentation site wants a pixel voice and the text is actually source code, or when you are designing a pixel face yourself and want to see what OpenType can do at a fixed grid.

## Most useful

- **Pseudo-kerning via a stylistic set**, an elegant answer to the oldest problem in monospace pixel type.
- **Eleven weights with italics**, so a caption and a heading can come from one family without faking bold.
- **Ligatures that are optional** — toggle `liga` off and the code is literal again.
- **Script coverage** beyond the Latin alphabet, which most pixel faces skip entirely.
- **Terminal furniture included**: box drawing, Powerline separators, progress bars, braille.
- **The reasoning is published**, so the specimen doubles as a design document.

## Using it with agents

No `llms.txt`, no API and no metadata beyond the specimen page. That page does list the OpenType features and the full glyph set, so an agent can read what is supported, but choosing a font remains a human decision.

## Watch out for

- It is a programming font. For prose at length, a pixel grid costs reading speed that the style does not repay.
- Pseudo-kerning is recommended for static text and not for editable text, where characters jump as you type. The author says so; respect it.
- Ligatures change what is on screen; in a teaching context, turn them off.
- Pixel fonts need integer sizes or they blur, so a design with fluid type has to be rethought.
- Eleven weights are generated from the regular, which is honest but means the extremes are interpolations.

## Reusable ideas

- Solve a spacing problem with an OpenType feature rather than by distorting the letterform.
- Publish the glyph set on the specimen page instead of in a PDF.
- Make every stylistic flourish togglable, and say which settings suit which use.
- Include the characters a real terminal needs: box drawing, separators, progress bars.

## Related

[Silkscreen](silkscreen.md), [monogram](monogram.md), [Fusion Pixel Font](fusion-pixel-font.md)
