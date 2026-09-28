---
title: Design.md Store
description: 51 free brand-inspired DESIGN.md packs plus clear docs on the Google DESIGN.md format; strict reuse terms.
url: https://designmd-store.com
type: style-library
formats: style library · format documentation
topics: [design-md, typography-and-styles, documentation]
verdict: useful
agent: [llms-txt]
pricing: freemium
licence: the 51 packs are free (the Terms say downloading may require registration). A Pro subscription is mentioned, but no price is published. The Terms grant a non-exclusive, non-transferable licence for personal and commercial projects. They forbid reselling or sublicensing packs, republishing the raw files on other platforms without permission, and removing copyright notices.
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [getdesign-md, designmd, refero-styles, designmd-supply, typeui]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [typography-and-styles](../topics/typography-and-styles.md), [documentation](../topics/documentation.md)

# Design.md Store

## What it is

Design.md Store is a library of 51 DESIGN.md "packs", each an unofficial take on a well-known brand's public design (Stripe, Apple, IKEA, Netflix, Duolingo, The New York Times...). The packs are grouped into categories such as Finance, Retail, Gaming and Editorial. It also hosts a documentation section that explains the Google Labs DESIGN.md format, which the site describes as Apache 2.0. The team behind it is not named.

## When to open it

- When you want a brand-inspired file from outside the usual dev-tool set, such as retail, media, travel or food brands.
- When you want to learn the format itself: front matter fields, token types, component tokens, standard sections and naming.
- When you want to lint or export a DESIGN.md and need a readable guide to the official CLI.

## Most useful

- Each pack page lists the version, line count, number of colour tokens, type roles, components and spacing tokens, plus tags and a live preview.
- The format docs describe YAML front matter (`name`, `version`, `colors`, `typography`, `spacing`, `rounded`, `components`) with `{spacing.md}`-style references, followed by eight standard sections: Overview, Colors, Typography, Spacing, Components, Do's and Don'ts, Accessibility, and Motion.
- Best-practice pages cover writing for AI, semantic token naming and versioning.
- The CLI reference covers `@google/design.md` (lint with seven rules including WCAG AA contrast, diff, export to DTCG `tokens.json` or Tailwind, and spec), according to the site's docs.

## Using it with agents

Download a pack and place it in the project root. Then reference it with `@DESIGN.md` in Cursor, or paste it as system context in other tools. The docs include guides for Claude Code, Cursor, Figma and Tokens Studio. The site publishes an llms.txt listing every pack and doc page, but it has no CLI or MCP of its own, and its REST API page says no API exists yet.

## Watch out for

- The licence is stricter than MIT. You can use a pack in any project, but you can't host copies of the raw files elsewhere, so link to the site instead of re-sharing files.
- The packs imitate real brands. The site calls them unofficial and unaffiliated, so keep logos and brand assets out of your product.
- The Terms forbid automated mass retrieval, even though robots.txt allows AI crawlers. Download by hand.
- Nothing is said about how the packs are made, beyond "extracted and processed" design traits of public sites. The Pro tier is announced but not described.

## Reusable ideas

- Include Accessibility and Motion as standard sections in your own DESIGN.md, not optional extras.
- Show quick stats on each spec (token counts, component count, line count) so readers can judge its depth before opening it.
- Lint the spec in CI (valid YAML, resolvable references, contrast) so it stays trustworthy as it changes.
- Explain in the prose when and why to use each token, instead of repeating the hex values from the front matter.

## Related

[getdesign.md](getdesign-md.md), [DESIGN.md](designmd.md), [Refero Styles](refero-styles.md), [designmd.supply](designmd-supply.md), [TypeUI](typeui.md)
