---
title: Fusion Pixel Font
description: Open pixel family in 8, 10 and 12px with pan-Latin and CJK coverage, built from six sources and shipped in eleven file formats.
url: https://fusion-pixel-font.takwolf.com
type: font-library
formats: 8px, 10px and 12px cuts · monospaced and proportional widths · 38,213 characters in the 12px proportional build at review · TTF, OTF, WOFF, WOFF2, BDF, OTB, PCF, dfont and ms.bitmap.ttf · language-specific glyph variants · browser playground
topics: [typography-and-styles, assets]
verdict: useful
agent: []
pricing: free
licence: The fonts are SIL Open Font License 1.1 and the build tooling is MIT, as stated in the repository at review. Six upstream bitmap fonts supply the CJK glyphs, each OFL-1.1 or a licence the project treats as compatible
licence_class: open-source-permissive
licences:
  fonts: open-source-permissive
  code: open-source-permissive
reviewed: 2026-11-11
status: active
related: [unscii, galmuri, oldschool-pc-fonts]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Fusion Pixel Font

## What it is

A pixel font family for the scripts that pixel fonts normally give up on. It is assembled — "stitched" is the project's own word — from the Ark Pixel Font as the base for 10px and 12px metrics, with glyphs filled in from Misaki, MisekiBitmap, BoutiqueBitmap 7×7 and 9×9, Cubic 11 and Galmuri to reach pan-Latin, kana, Hangul and Han in the same grid. Two width modes: monospaced, where every glyph is exactly half or full width so columns line up, and proportional, where spacing is natural and the project recommends it for ordinary typesetting.

The numbers are the interesting part. The 12px proportional build at review holds 38,213 characters against Unicode 18.0.0, but the documentation publishes completion per Unicode block instead of a single claim: Basic Latin, Latin-1 and Latin Extended-A are complete, Latin Extended-B sits near 61%, Greek and Coptic 73%, Cyrillic about 60%, and general punctuation under half — which is a more honest profile than most font pages manage.

## When to open it

Open it when a retro or game-like interface has to be bilingual, or when a pixel look has to survive Chinese, Japanese or Korean text without falling back to a system font at the point where the illusion breaks. It is also the sensible choice when you want a bitmap font that still ships as WOFF2, so the same file works in a browser and in a build pipeline.

## Most useful

- **Three sizes and two widths from one family**, so a 12px heading and an 8px badge can come from the same drawing.
- **Eleven file formats** per cut at review — TTF, OTF, WOFF, WOFF2, BDF, OTB, PCF, dfont, ms.bitmap.ttf and zipped variants — which is what makes it usable in terminals, emulators and game engines, not only on the web.
- **Per-block coverage documentation** that names what is missing, so a decision about a Korean or Greek UI can be checked before it is made.
- **A playground** that renders sample strings in every cut without a download.
- **Language-specific glyph builds**, for text that has to look locally correct rather than generically CJK.
- **Python build tooling** in the repository, so a subset or a custom variant can be generated rather than requested.

## Using it with agents

No `llms.txt` and no API at review. What does help an agent is the set of `info-<size>-<width>.md` files in the repository, one per cut, which give version, character total and a table of completion by Unicode block. An agent can fetch those and answer "does this cover Hangul syllables" or "what is missing in Cyrillic" from the source instead of guessing from the specimen.

## Watch out for

- Pixel glyphs only look right at integer multiples of their design size; scaling a 12px cut to 13px destroys the drawing.
- The monospaced mode is a compromise, not a neutral default: the project says glyph design space is squeezed, complex characters get fewer good solutions, and mixed Latin and CJK text can sit visually high.
- The family is described as a stopgap for the Ark Pixel Font, so its future is tied to a project that is still in progress.
- OFL-1.1 applies, including the reserved font name; renaming rules matter if you modify and redistribute.
- Stitched sources mean stitching seams: some blocks were drawn by different hands at different sizes and a careful eye will find the joins.

## Reusable ideas

- Publish coverage per Unicode block and let the reader decide, instead of claiming full support.
- Ship monospaced and proportional cuts of the same drawing and say which to prefer.
- Build once, export every format the platforms actually load.
- Offer a playground with the real strings a user would type, not lorem ipsum and not only the Latin alphabet.

## Related

[Unscii](unscii.md), [Galmuri](galmuri.md), [Oldschool PC Font Pack](oldschool-pc-fonts.md)
