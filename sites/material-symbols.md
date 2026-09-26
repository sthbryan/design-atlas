---
title: Material Symbols
description: "Google's Apache 2.0 variable icon font: about 3,900 symbols in three styles with fill, weight, grade and optical size axes."
url: https://fonts.google.com/icons
type: icon-library
formats: icon library
topics: [icons, assets, typography-and-styles]
verdict: very-useful
agent: []
pricing: free
licence: Free. Apache License 2.0, as stated in Google's developer docs and the GitHub repository
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [iconify, phosphor, tabler-icons, fontsource]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [typography-and-styles](../topics/typography-and-styles.md)

# Material Symbols

## What it is

Material Symbols is Google's current icon set, introduced in April 2022 and built as variable fonts first. It comes in three styles, Outlined, Rounded and Sharp, and each style has four variable axes: fill (0 to 1), weight (100 to 700), grade (finer thickness control than weight, with little effect on size) and optical size (20 to 48). Google's own pages give different totals ("over 2,500" in one place, "3,800+" in another); the public icon metadata listed about 3,900 symbols at review. The older Material Icons set (about 2,160 icons in five static styles) is still browsable on the same page but no longer updated. Source files live in `google/material-design-icons` on GitHub (about 54,000 stars at review).

## When to open it

Open Material Symbols for Android and Material Design products, for Google Workspace-style admin tools, and whenever you want one icon to animate or change state through font axes rather than swapping files. It is also a very broad general-purpose set when the Material look is acceptable.

## Most useful

- **Icon browser on Google Fonts**: search, pick a style, adjust the axes live, then take the embed code or download SVG and PNG files for web, Android and iOS
- **Google Fonts CSS API**: load a style with `family=Material+Symbols+Outlined` and write icons as text ligatures such as `home`
- **Subsetting with `icon_names`**: pass an alphabetised, comma-separated list of names and the font shrinks to a few kilobytes instead of loading the whole set
- **Axes in CSS**: `font-variation-settings` can switch fill for selected states or animate it on interaction
- **Community npm packages**: `material-symbols` and `@material-design-icons/svg` by an outside maintainer, auto-published from the upstream repo (about 1.9 million monthly downloads for `material-symbols` at review)

## Using it with agents

There is no llms.txt, MCP server or official npm package, but agents handle it well because it is just a font URL and text names. Ask the agent to build the Google Fonts URL with only the axes you need, add `icon_names` for the icons actually used, and include `display=block`. For bundled apps, point it at the community `material-symbols` package or at SVGs from the repository, and have it check names on the icon browser, since ligature names must match exactly.

## Watch out for

- Loading every axis range for a style is heavy: Google's docs quote a 7.9 MB font payload, against a few kilobytes for a small `icon_names` subset
- Without `display=block` the ligature words (such as `settings`) flash as text before the font arrives
- Google has not published npm packages since v3 in 2016. The popular packages come from a community maintainer, and the repository says Google does not check them
- Google does not accept icon pull requests, only requests as issues, and third-party logos are excluded for legal reasons
- Material Icons is frozen, so newer glyphs exist only in Material Symbols. Migrate rather than loading both fonts side by side

## Reusable ideas

- Treat fill, weight and optical size as font axes so state changes can animate instead of swapping assets
- Let the URL request only the icons a page uses, so an icon font stays small
- Match icon weight and grade to the text beside them so symbols and labels look equally heavy
- Keep a legacy set available but frozen, with a clear note that new work should use the successor

## Related

[Iconify](iconify.md), [Phosphor](phosphor.md), [Tabler Icons](tabler-icons.md), [Fontsource](fontsource.md)
