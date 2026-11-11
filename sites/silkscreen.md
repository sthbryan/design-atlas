---
title: Silkscreen
description: Jason Kottke's 1999 pixel typeface for small web graphics, in four cuts plus an expanded variant, uppercase only, under the OFL.
url: https://kottke.org/plus/type/silkscreen
type: font-library
formats: four cuts — Regular, Bold, Italic and Bold Italic — plus Silkscreen Expanded · TrueType for Windows, macOS and Linux · uppercase and digits only · FAQ with the drawing rules and spacing advice
topics: [typography-and-styles, assets]
verdict: niche
agent: []
pricing: free
licence: Distributed under the Open Font License, as the page states at review; free for personal and corporate use in web, print and anything else, including modification
licence_class: open-source-permissive
licences:
  fonts: open-source-permissive
reviewed: 2026-11-11
status: active
related: [unscii, galmuri, oldschool-pc-fonts]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Silkscreen

## What it is

One of the oldest web-native pixel typefaces, drawn by Jason Kottke in 1999 with a pencil tool in Photoshop and then rebuilt by hand in Fontographer. Each character fits in a 4×5 or 5×5 pixel box, ascenders and descenders aside, and the family ships in four cuts — Regular, Bold, Italic, Bold Italic — plus a Silkscreen Expanded variant with wider spacing.

The page that documents it is a period piece and worth reading as one: an FAQ explaining why there is no lowercase, why some bold characters are barely legible, how to measure it, and what it was made with. It argues that at these sizes the drawing is nearly all constraints — "there's only so many ways that you can draw a letter that's only 25 pixels square" — which is a more useful account of small-size type than most modern specimen pages give.

Practical guidance on the page is specific: use it at multiples of 8pt, turn anti-aliasing off, set kerning and fractional widths to zero, and confirm you have a two-pixel gap between letters.

## When to open it

Open it when a small label, badge, nav item or caption needs a bitmap voice and the text is uppercase English — a status chip, a tiny footer wordmark, a retro UI. It is also a good reference when you are designing your own pixel face, because the FAQ documents the compromises instead of hiding them.

## Most useful

- **Four cuts plus an expanded variant**, which is more than most pixel fonts offer.
- **An honest account of the trade-offs**: no lowercase, no accented characters, bold cut that loses legibility on narrow glyphs.
- **Exact rendering instructions** — 8pt multiples, no anti-aliasing, no auto kerning — that turn a font into a spec.
- **The OFL and an unambiguous statement of free use**, which is rare on a page this old.
- **TrueType files for all three desktop platforms**, so the same drawing goes into a mockup and into a webpage.

## Using it with agents

No `llms.txt`, no API, no metadata file at review. The page is a static HTML document with the licence and the rendering rules in prose, and an agent can read it in full — which is enough, because there is nothing else to query. The repository-free distribution means there is no package to install through npm.

## Watch out for

- **Uppercase only.** No lowercase glyphs exist, and no extended characters either; anything but standard US keyboard punctuation will fall back or fail.
- The bold cut is deliberately left hard to read on narrow characters, and the page says so.
- It is a 1999 file. There is no variable version, no webfont subset and no updated hinting.
- The page itself is old XHTML with a membership pitch around it; the download is a zip per platform.
- Every other pixel font in the atlas has broader coverage, so this one is a stylistic choice, not a safe default.

## Reusable ideas

- Publish the rendering rules beside the download; "use at 8pt multiples" prevents most of the bad uses.
- Say what the font cannot do, in the same place you say what it can.
- Design a companion variant with different spacing rather than stretching the original.
- Keep a specimen page that still works twenty-five years later: plain HTML, one zip, no build.

## Related

[Unscii](unscii.md), [Galmuri](galmuri.md), [Oldschool PC Font Pack](oldschool-pc-fonts.md)
