---
title: Wakamai Fondue
description: Drop in a font to see its OpenType features, variable axes and glyphs, then get ready-made CSS, all in-browser.
url: https://wakamaifondue.com
type: tool
formats: tool · font inspector
topics: [typography-and-styles, assets]
verdict: useful
agent: [cli]
pricing: free
licence: Free, no account / site and engine Apache-2.0 on GitHub; the older CLI package is ISC; the fonts you inspect keep their own licences
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [fontsource, utopia, typeface-fyi, css-text-effects]
---
[← Atlas](../README.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Wakamai Fondue

## What it is

Wakamai Fondue (say it aloud: "what can my font do") is a web tool by Dutch developer Roel Nieskens (PixelAmbacht). You drop a font file on it, and it shows what the font contains and writes the CSS you need to use those features on the web. Everything runs in your browser, and the site says the font is never uploaded to a server. The report has up to seven sections, depending on the font: summary (outline format, hinting, variable, colour), a type tester, colour-font layers, variable axes and named instances, OpenType layout features, the full character set, and a generated stylesheet. The site uses Vue 3 and Vite. The parsing engine is built on Pomax's lib-font, and the code is open in the Wakamai-Fondue GitHub organisation.

## When to open it

Open it when you have a font file and need to know what it can actually do before you design with it or write CSS: which OpenType features it has (small caps, tabular or old-style numbers, stylistic sets, fractions), which axes and ranges a variable font offers, and which characters and languages it covers. It's also useful to check a licensed or downloaded font before you build a type scale around it.

## Most useful

- **Feature list with live preview**: every layout feature in the font, shown on sample text you can switch on and off
- **Generated stylesheet**: one class per feature. It uses CSS variables to get around the problem where `font-feature-settings` values override each other when inherited, so classes can be combined. Options include a namespace, variable-instance classes, fallbacks and on-by-default features
- **Variable font panel**: every axis with its range and default, plus the named instances
- **Character grid**: every glyph in the font, so you can check coverage for a language
- **Three ways to load a font**: drop a file, pick an installed font (in browsers with the Local Font Access API, mainly Chromium ones), or pass a `?url=` link
- **"Try in Wakamai Fondue" button**: foundries can add a link or a small script (`try-in-wf.js`) so visitors can open a font in the tool, with custom sample text

## Using it with agents

The website is for people and has no API, llms.txt or MCP server. For scripts there is `@wakamai-fondue/cli` on npm, which prints a font's details as JSON (`--json`) or writes its CSS (`--css`). It is still at version 1.0.1 and hasn't changed since 2021, so test it before you rely on it. In practice, the easiest path is to run the site yourself, download the stylesheet, and give the agent the feature classes and axis ranges as design tokens. That's better than letting it guess from a screenshot which features exist.

## Watch out for

- The newer engine is not published on npm. The site installs it straight from a Git commit
- The report only shows what the font's tables declare. A feature can be present but badly designed, and missing language data doesn't prove a language is unsupported
- Loading by URL only works if the server hosting the font allows cross-origin requests
- Inspecting a font gives you no right to use it. Some commercial licences also forbid modifying or converting the files, so don't change them based on what the tool shows

## Reusable ideas

- Process user files locally and say so plainly, so people trust the tool with paid fonts
- Turn a technical inspection into CSS people can use straight away, not just a table
- Let other sites link into the tool with a URL parameter or a small drop-in script
- Pick a name that explains what the tool does once you read it aloud

## Related

[Fontsource](fontsource.md), [Utopia](utopia.md), [Typeface.fyi](typeface-fyi.md), [CSS Text Effects](css-text-effects.md)
