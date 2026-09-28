---
title: Site of Sites
description: Wix gallery of about 600 sites with a pure-blue serif display on white, 16:9 screenshot tiles and four crossable tag axes.
url: https://www.siteofsites.co
type: gallery
formats: curated website gallery · collections · agency directory · design glossary · events calendar · Wix MCP server · llms.txt
topics: [inspiration, typography-and-styles, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt]
pricing: free
licence: Free to browse and free to submit. The terms are Wix.com Ltd's boilerplate (the site runs on Wix) and say submissions are free, that the editors may accept, decline or remove a site at their discretion, and that submitting authorises them to show screenshots and screen recordings of your site here and on their social accounts. Nothing is stated about reusing the screenshots or the collection
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [best-website-gallery, minimal-gallery, awwwards, siteinspire, a1-gallery]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Site of Sites

## What it is

Site of Sites is a curated gallery of live websites, and its own design is a two-part trick: one saturated colour used at display size, and screenshots that do the rest. At review the page measured a white ground, near-black text, and a single accent, a pure blue of rgb(4, 0, 216), reserved almost entirely for large serif headings. Body text is Wix Helvetica at 16px on a 1.3 line height, so the blue serif arrives as a large, quiet contrast rather than as decoration. The index counted 596 entries, and the gallery shows them as 695 by 387 tiles, an exact 16:9 crop, with AVIF screenshots at roughly 2x and a fade-in as each one enters.

## When to open it

Open it when you want to see a lot of recent sites quickly and the constraint is a platform, a sector or a look: the filters cross industry, type, style and platform, so a dark, big-type shop is a few clicks away. Open it also as a reference for how much a single accent colour and a strict tile ratio can carry a gallery page, since underneath it is Wix, and the design holds without custom code.

## Most useful

- **The accent rule**: rgb(4, 0, 216) appears at 66px, 45px and 13px but never as a large fill, so the page reads as white with blue type
- **A serif display against a sans body**: headings are set in an extra-bold serif (Nanum Myeongjo ExtraBold) at 66px on a 70px line, while everything else is Wix Helvetica, giving an editorial voice without a second body face
- **Label typography**: small caps-style section labels at 13px in rgb(117, 117, 117) with 1.3px tracking, which is what separates the filter chrome from the content
- **A hard 16:9 grid**: 695 by 387 tiles, `object-fit: cover`, with the screenshot as the whole card and the title, date and tags placed under it at 13px
- **Four crossable tag axes** (industry, type, style, platform) drawn from a controlled list on the submit form, including Minimal, Big Type, Retro, Dark, Illustrative, Grid, Monochrome, Text-effects, Custom cursor, Animated gallery, Mode switching, 3D elements, Scrollitelling, Hover animation, Shaped masks and Creative coding
- **Platform tags** on nearly every entry, which the older award galleries do not offer as a filter

## Using it with agents

The site publishes `llms.txt` and runs a Wix site MCP at `https://www.siteofsites.co/_api/mcp`, which answered a `tools/list` call at review. Its tools belong to Wix's site assistant, so they search and change the Wix site rather than returning design facts; do not point them at this site just to look up references. A more faithful route for design work is the DOM, because the measured values above can be read straight from a browser: `helvetica-w01-roman` for body copy, the serif stack on headings, rgb(4, 0, 216) for the accent, and 13px with 1.3px tracking for labels. `robots.txt` allows crawling and the sitemap index carries a `lastmod` per section, so new entries can be followed by diffing one small file.

## Watch out for

- It is a Wix build, so the markup carries Wix wrappers and image components; copying its structure into a codebase is worse than copying its rules
- The single accent works because it is used sparingly. Using rgb(4, 0, 216) for buttons, links and headings together would lose the whole effect
- Card information lives under a cover-cropped screenshot, so designs that only work in their own viewport get flattened
- Screenshots come from the submitter, and nothing states what you may reuse
- Update rhythm differs by section: at review websites and collections had changed within days, while the glossary had not changed since December 2025 and the events page since February 2026
- The footer still reads 2025, and the 596-entry gallery is the part worth returning for

## Reusable ideas

- Keep one accent colour and let size, not hue variety, create the hierarchy
- Pair a heavy serif for headings with a neutral sans for everything else, instead of a second sans
- Track small labels by about 0.1em so they read as chrome, then use the untracked face for content
- Pick one card ratio (16:9 here) and crop every screenshot to it, so a grid never looks ragged
- Serve screenshots at 2x in a modern format and let them fade in, so a heavy grid still feels fast
- Ask submitters to choose from closed tag lists rather than typing free text, which is what makes the filters worth using

## Related

[Best Website Gallery](best-website-gallery.md), [Minimal Gallery](minimal-gallery.md), [Awwwards](awwwards.md), [Siteinspire](siteinspire.md), [A1](a1-gallery.md)
