---
title: Galmuri
description: Pixel font family in six cuts covering all 11,172 Hangul syllables, installed via npm or one CSS link and licensed under the OFL.
url: https://quiple.dev/font/galmuri
type: font-library
formats: six cuts — Galmuri14, 11, 11 Bold, 11 Condensed, 9 and 7 · pixel sizes from 8 to 15 · npm package and jsDelivr stylesheet · live tester with size and spacing sliders · bitmap image generator · outline version
topics: [typography-and-styles, assets]
verdict: useful
agent: []
pricing: free
licence: SIL Open Font License 1.1, stated on the page with a permissions table and the licence text linked from the repository at review. The author notes that glyphs drawn from the DS-era source are not his creation but that the outline font file is
licence_class: open-source-permissive
licences:
  fonts: open-source-permissive
reviewed: 2026-11-11
status: active
related: [fusion-pixel-font, unscii, oldschool-pc-fonts]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Galmuri

## What it is

A Korean pixel family drawn after the type used in Nintendo DS firmware and software. It has been public since 2019, and the name comes from a monospaced Korean bitmap font the author used in 2008. Every cut covers all 11,172 Hangul syllables, which is the whole practical reason to care: most pixel fonts handle Latin and then fail the moment Korean enters the string, and this one does not.

Six cuts, each drawn on its own grid and named after that grid rather than the rendered size — Galmuri14, 11, 11 Bold, 11 Condensed, 9 and 7, sized from 15px down to 8px. Coverage shrinks as the grid does: the larger cuts add kana and the 6,355 kanji of JIS X 0208, Galmuri7 keeps only 4,358 Hangul syllables.

The page is a single column: a spec line, a download from GitHub, a paragraph of history, and then a live tester with a cut selector and sliders for size and letter spacing, over an editable text box that holds Korean, Japanese and Latin lines at once.

## When to open it

Open it when a Korean interface or a game wants a pixel or bitmap look and cannot afford a Hangul fallback, or when a retro treatment has to hold up in mixed Korean and Latin copy. It is also the cheapest way to get a bitmap texture out of live text, because the same site has a generator that turns strings into bitmap font images.

## Most useful

- **Complete Hangul syllable coverage in every cut**, which is the hard requirement and the least common one.
- **A short ladder of sizes** from 8px to 15px, so a heading, a label and a caption can share a drawing.
- **One line to load it**: the jsDelivr stylesheet, or an npm install with the same CSS import.
- **A tester with real controls** — cut, size, letter spacing — rather than a static specimen image, so you can see whether a specific sentence survives at 10px.
- **A licence table written in permissions**, confirming commercial use and embedding at review, instead of leaving it to be inferred from an OFL link.
- **An outline version created separately**, for contexts where only vector fonts are accepted.

## Using it with agents

Nothing machine-readable at review: no `llms.txt`, no API, no JSON metadata. The page and the repository README are the sources, and both are worth reading in Korean if you can, since the coverage table and the legal notes exist only there. An agent can still use the jsDelivr package metadata to confirm versions and file names.

## Watch out for

- The documentation is Korean-only, so English-speaking teams are working from a translation.
- Cut names do not equal pixel sizes. Galmuri11 renders at 12px, Galmuri14 at 15px; a design that assumes otherwise lands off the pixel grid.
- Kanji coverage is limited to JIS X 0208 and shrinks in the smaller cuts, so Japanese text needs checking per cut.
- The bitmap heritage is disputed ground: the author's note explains why he believes the file and outline are his own work while the design is not copyrightable in his jurisdictions. Read it before shipping in a product where trademark risk matters.
- The tester's default specimen is a lyric with profanity. Fine as a specimen, awkward in a screenshot for a client.

## Reusable ideas

- State the pixel size next to every family name; the name alone is not the contract.
- Put a licence permissions table on the specimen page, not three links deeper.
- Let visitors edit the specimen text — every script's real test is a sentence, not an alphabet.
- Publish a companion that turns text into bitmap images for the same aesthetic.

## Related

[Fusion Pixel Font](fusion-pixel-font.md), [Unscii](unscii.md), [Oldschool PC Font Pack](oldschool-pc-fonts.md)
