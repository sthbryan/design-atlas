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
- [CTA Gallery](../sites/cta-gallery.md) — buttons, forms and modals pulled from real sites, with a copywriting-tips resource alongside.
- [Evil Buttons](../sites/evil-buttons.md) — 31 shadcn buttons, from useful hold-to-confirm, cooldown and morphing-status buttons to joke CTAs that dodge the cursor; Apache-2.0.
- [Good UI](../sites/good-ui.md) — 141 conversion patterns from 642 shared A/B tests, such as repeating the CTA on long pages or a sticky CTA on mobile; effect sizes are members-only.
- [Magic UI](../sites/magic-ui.md) — animated component library often used to add motion to CTAs and buttons.
- [Sections.wtf](../sites/sections-wtf.md) — CTA, subscribe, pricing and form sections recorded as video, so you see how each block enters and responds.
- [Supahero](../sites/supahero.md) — about 570 real hero sections, useful for judging headline length, CTA count and what sits above the fold.
- [VibePrompts](../sites/vibeprompts.md) — prompts for CTA-related sections such as pricing, contact and onboarding.
- [VibeUI](../sites/vibeui.md) — 92 layout-only prompts, including CTA banners, hero variants with inline email forms and pricing tables, meant to be paired with a style screenshot.
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
