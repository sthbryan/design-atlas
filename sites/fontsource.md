---
title: Fontsource
description: 2,100 open fonts packaged for self-hosting through npm, plus llms.txt, a read-only API and a versioned CDN.
url: https://fontsource.org
type: font-library
formats: font library · npm packages · API
topics: [typography-and-styles, assets]
verdict: very-useful
agent: [llms-txt, api, prompts]
pricing: free
licence: Free / tooling MIT; each font keeps its own licence (2,056 of 2,100 families SIL OFL 1.1, 36 Apache-2.0, 5 Ubuntu Font Licence, a few CC0, MIT or Unlicense)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [fontshare, utopia, wakamai-fondue, typeface-fyi]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Fontsource

## What it is

Fontsource packages open-source fonts as one npm package per family, so you can self-host them like any other dependency instead of loading them from Google's servers. Its API lists 2,100 families: 1,980 from Google Fonts and 120 from other open sources, 570 of them with variable versions. It also packages Material Icons and Material Symbols. The project is open source on GitHub (MIT, about 6,100 stars) and is mostly maintained by one developer, Ayuhito, who asks API users to sponsor it on GitHub Sponsors. The website is a searchable catalogue with a type tester and a setup page for each font, plus docs, framework guides and two in-browser font tools.

## When to open it

Open it whenever a project needs a Google or other open font and you want the files in your own bundle: to keep versions fixed, to avoid third-party requests for privacy or GDPR reasons, or for offline and PWA use. It's also a quick way to check a family's weights, subsets and licence before you install it.

## Most useful

- **Two package lines**: `@fontsource/<id>` for static weights and `@fontsource-variable/<id>` for variable fonts. You import only the weights, styles or language subsets you need. `@fontsource-variable/inter` alone gets about 14 million downloads a month
- **Framework guides**: Next.js, Vite, SvelteKit, Vue, Angular, Remix, Qwik, Storybook and Webpack, plus links to Astro, Nuxt, MUI and others that document Fontsource themselves
- **Sass mixins**: generate your own `@font-face` rules with custom paths, display settings and subsets
- **Versioned CDN**: jsDelivr serves stylesheets and font files by exact version (`cdn.jsdelivr.net/fontsource/css/open-sans@5.2.7/index.css`) for cases where npm isn't an option
- **Read-only API**: font list, per-family metadata, variable axis registry, download stats and package versions at `api.fontsource.org/v1`
- **Browser tools**: a font converter (TTF, OTF, WOFF, WOFF2) and a web font optimiser that subsets to WOFF2 with matching CSS, both run locally

## Using it with agents

Fontsource is built with agents in mind. It publishes `/llms.txt`, a full `/llms-full.txt`, and a Markdown copy of every docs page (add `.md` to the URL). A docs page also gives example prompts for Cursor, Claude and similar tools. Tell the agent to install the variable package when one exists, import it once at the app entry point, and use the exact `font-family` name from the font's page. The API lets the agent check that a family, weight or subset really exists instead of guessing.

## Watch out for

- The MIT licence covers only the packaging code. Each font keeps its own licence, listed in its package README. Most are OFL, but check the few that aren't
- Variable fonts use a different family name, such as `"Inter Variable"`, so a CSS rule written for the static name will quietly fall back to another font
- Strict TypeScript setups may reject the side-effect CSS imports. The FAQ explains how to add a small declaration file to fix this
- The API allows up to 2,500 requests per 10 seconds, and heavy constant use can get you banned for a while
- Google Fonts updates reach Fontsource through new package versions, so pinned projects won't get fixes until you upgrade

## Reusable ideas

- Publish each asset as its own versioned package so it can be locked, audited and tree-shaken
- Offer both "bundle it" and "CDN with an exact version" paths, and say which one you recommend
- Publish llms.txt, a full text dump and a Markdown twin of every docs page
- Show the licence and subset list on each item's page before the install command

## Related

[Fontshare](fontshare.md), [Utopia](utopia.md), [Wakamai Fondue](wakamai-fondue.md), [Typeface.fyi](typeface-fyi.md)
