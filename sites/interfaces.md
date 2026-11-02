---
title: Interfaces
description: Design-engineering magazine whose issues pair writing on type, motion and colour with interactive demos, source code and agent skills.
url: https://interfaces.dev
type: documentation
formats: monthly magazine issues · interactive demos · source code · copyable Markdown · agent skills
topics: [typography-and-styles, motion, ux-patterns]
verdict: very-useful
agent: [llms-txt, skill, prompts]
pricing: paid
licence: Subscription, with the price not shown on the public page at review. Reading the archive, the resources library, the agent skills and the private community all sit behind it. The site's own design and text are proprietary; code in the demos is published for readers to copy
licence_class: proprietary-paid
reviewed: 2026-11-02
status: active
related: [vercel-web-design-guidelines, figma]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [motion](../topics/motion.md), [ux-patterns](../topics/ux-patterns.md)


# Interfaces

## What it is

A design-engineering magazine by Jakub Krehel, published monthly, built around one argument: the difference between a good interface and a great one is a heap of small decisions. Each issue is its own page rather than a post in a feed, and each pairs an essay with interactive demos, code and measurable comparisons. The public home page is itself the demonstration — a specimen layout with a live gutter and type-size readout, an `oklch()` pair for the background and foreground, a serif face at 32px labelled with its name, and do-not/recommended pairs annotated with the actual pixel values, such as a 20px inset against a 12px one.

## When to open it

Open it when a UI is built and feels slightly wrong, and you want a measured answer rather than an opinion. The current issues visible at review cover building an animated sign-in dialog, a typography manual for the web, OKLCH colour, and a checklist of details that make interfaces feel polished.

## Most useful

- **Side-by-side with numbers**: comparisons carry the values that separate them ("12px" against "20px", "Show values" toggled on), which turns taste into something you can implement.
- **Demos you can drag**: a border-radius or inset control changes the example while you watch, so the principle is learned by moving a slider.
- **Source code with the demo**, including the motion transitions — the sign-in issue ships `AnimatePresence` snippets with opacity, scale and blur values.
- **Typographic specimens**: glyph ranges, figures, the actual face and its weight, set at real display sizes.
- **Copy as Markdown**, so an issue can be handed to an agent after you have read it.

## Using it with agents

This is one of the few design publications built with agents in mind. Issues can be copied as Markdown for a model to read afterwards, and the site distributes agent skills — `/make-interfaces-feel-better`, `/better-ui`, `/better-typography`, `/better-colors` — plus a review skill that reports typography, colour, layout, accessibility and copy. A prompt console on the sales page shows the intended loop: ask why a dropdown feels slow, get a rule ("animate transform, not height, and keep it under 200ms") with the skill that enforces it.

## Watch out for

- The archive is paid and the price is not shown before you subscribe, so judge the free home page carefully before committing.
- The framing is one practitioner's strong opinion, with demos chosen to prove it. Useful, but not a survey of alternatives.
- Many lessons assume React and a motion library; the principles transfer, the snippets do not.
- Agent skills here encode the author's rules, so they will push an agent toward his defaults.
- Demo values are tuned for the demo's own type scale; copying pixel numbers between projects is not the point.

## Reusable ideas

- Give every comparison its measured values and a toggle to reveal them.
- Make each issue a bespoke page with its own interaction, so the medium argues for the content.
- Publish the same lesson as text, demo, code and an agent skill, so the reader can choose a channel.
- Put the type specimen on the home page: face, weight, size, glyph range.

## Related

[Vercel Web Design Guidelines](vercel-web-design-guidelines.md), [Figma](figma.md)
