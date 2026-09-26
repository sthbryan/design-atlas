---
title: CTA
description: "calls-to-action: buttons, forms, modals and conversion copy."
order: 5
---
[← Atlas](../README.md)

# CTA

Calls-to-action — buttons, forms, modals and the copy around them that's meant to convert.

## Start here

- [CTA Gallery](../sites/cta-gallery.md) — a dedicated CTA gallery, classified by business function (purchase, download, newsletter).
- [VibePrompts](../sites/vibeprompts.md) — ready-made prompts for CTA-adjacent sections (pricing, hero, forms) to paste into an agent.
- [Magic UI](../sites/magic-ui.md) — animated buttons and effects that install like shadcn/ui, useful for CTA polish.
- [Good UI](../sites/good-ui.md) — conversion patterns tied to shared A/B tests, for checking whether a CTA change has won or lost elsewhere before you try it.

## All sources

<!-- atlas:sources:start -->
- [CTA Gallery](../sites/cta-gallery.md) — Calls-to-action pulled from real sites and classified by business function, with copywriting tips alongside.
- [Evil Buttons](../sites/evil-buttons.md) — 31 playful and stateful shadcn buttons, from hold-to-confirm and cooldowns to cursor-dodging joke CTAs.
- [Good UI](../sites/good-ui.md) — 141 conversion patterns backed by 642 shared A/B tests; the effect sizes are paywalled.
- [Loader Buttons](../sites/loader-buttons.md) — 25 experimental loading-state buttons in WebGL, SVG, Canvas and CSS; no licence published.
- [Magic UI](../sites/magic-ui.md) — 150+ animated React and Tailwind components and effects that install like shadcn/ui, positioned as its companion.
- [Sections.wtf](../sites/sections-wtf.md) — About 280 single landing-page sections recorded as video, filterable across 22 section types.
- [Supahero](../sites/supahero.md) — About 570 real website hero sections on one page, searchable by name but with no filters.
- [VibePrompts](../sites/vibeprompts.md) — Library of prompts organised by page section (pricing, hero, forms) to paste into any AI assistant.
- [VibeUI](../sites/vibeui.md) — 92 copyable layout-only prompts in 15 section types, each paired with a style screenshot.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Classify CTAs by business function (purchase, download, newsletter, subscription), not just by visual shape, to match the actual goal.
- Pair a visual CTA gallery with a "how to write it" resource so copy judgment travels with the pattern.
- Keep a personal library of reusable "section prompts" organized by CTA type, as a versionable spec layer.
- Offer a free template or resource as a visitor incentive alongside the gallery itself.
- Read hero sections as a set: most combine one headline, one supporting line, one primary CTA and one strong visual (Supahero).
- Give the agent the section's structure and its visual style as separate inputs, a layout prompt plus a reference screenshot, instead of asking it to guess both (VibeUI).
- Check a CTA idea's track record, losing tests included, and refer to patterns by stable number and name in briefs and tickets (Good UI).
- Put a visible cooldown on a submit button instead of silently ignoring repeat clicks, and make a hold-to-confirm last longer as the stakes rise (Evil Buttons).

## Pitfalls

- Copy shown in a reference gallery belongs to the original brand — use it as a tone reference, never verbatim.
- Sponsored templates are often mixed into an organic gallery; check the licence on anything you intend to reuse commercially.
- Prompt-generated CTA copy and markup vary by model — review accessibility and consistency the same way you would any generated code.
- Short layout prompts set the skeleton only; spacing, states, accessibility and responsiveness are left to the model (VibeUI).
- A gallery without filters or tags means long scrolling to find a relevant hero; pick two or three close matches and move on (Supahero).
- Joke buttons that dodge the cursor or demand extra confirmation belong in games and easter eggs, never in checkout, consent or account flows (Evil Buttons).
- Good UI's win rates are members-only and licensed per user; don't paste them into shared prompts or files, and remember a win elsewhere is a probability, not a promise.

## Related topics

- [Inspiration](inspiration.md)
- [Components](components.md)
- [Navigation](navigation.md)
- [Landing pages](landing-pages.md)
- [UX patterns](ux-patterns.md)
