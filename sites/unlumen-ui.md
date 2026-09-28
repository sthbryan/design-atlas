---
title: unlumen UI
description: "Animated React registry forked from Animate UI, with motion primitives, copyable components and a paid Pro set."
url: https://ui.unlumen.com
type: component-registry
formats: animated component registry (shadcn) with a paid Pro tier
topics: [components, motion, navigation]
verdict: useful
agent: [llms-txt, registry]
pricing: freemium
licence: public code and registry items under MIT (repo `leovvx/unlumen-ui-docs`); Pro is $119 one-time (listed down from $149), $69 a year, or $430 for a five-seat Studio licence, with no refunds and no reselling or redistribution as a standalone product
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [animate-ui, skiper-ui, cult-ui, motion-primitives, smooth-ui, kokonut-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [navigation](../topics/navigation.md)

# unlumen UI

## What it is

An animated React component registry built with TypeScript, Tailwind CSS and Motion by a solo maker, Léo Wicki. Its docs say plainly that it is forked from Animate UI and follows shadcn/ui patterns, and a credits page lists both. The registry index had 235 entries at review: 42 low-level animation primitives (text effects, buttons, tilt, magnetic, shine, sliding numbers), about 94 components and blocks, plus demos and hooks. The public docs repo started in July 2026; paid components sit in a separate private repository.

## When to open it

When you want refined navigation and interface motion rather than big hero effects: expanding and floating navbars, gooey menus, animated tabs and slide menus, a command menu, a dock, progressive blur, or page transitions. The primitives are useful building blocks on their own.

## Most useful

- **[Theme Switch](https://unlumen-ui-docs.vercel.app/docs/ui/unlumen/theme-switch)**: the docs' dark preview places a small moon control in a quiet stage. Clicking it animates the sun/moon swap and uses a circular View Transition reveal from the pointer position; the page documents an instant-change fallback when that API is unavailable.
- Navigation pieces: expandable navbar, floating navbar, gooey navbar menu, motion tabs and slide menus (several are Pro)
- Free interface details such as an Apple-style switch, animated digits, scramble text, shimmer skeleton, file tree and GitHub contribution graph
- Motion primitives for text (typing, rolling, morphing, splitting) and effects (blur, fade, zoom, particles, theme toggler)
- Two sidebar layouts and small animated view-switch icons

## Using it with agents

A short `/llms.txt` points to the installation page, the component list and pricing. Components install through an `@unlumen-ui` namespace added to `components.json`; Pro items use the same registry with a licence key passed in the URL from an environment variable. Of the non-primitive components, 27 returned 401 without a key at review, so an agent needs to know which items are free before trying to add them.

## Watch out for

- Licence chain: the primitives come from Animate UI, whose repo licence is MIT with the Commons Clause, while unlumen labels its public code plain MIT; check both before redistributing
- Counts differ: the pricing page claims 80 components and "new drops monthly", which is hard to match against the registry
- Pro terms allow unlimited projects but no refunds; the annual plan stops new downloads when it lapses

## Reusable ideas

- Tie a theme transition's reveal origin to the toggle's click position, and keep a non-animated fallback when View Transitions are unavailable.
- Credit the project you forked in both the introduction and a dedicated credits page
- Put free and paid components in one registry and gate paid ones with a key, so the install command is the same
- Ship low-level motion primitives next to finished components so people can rebuild variants

## Related

[Animate UI](animate-ui.md), [Skiper UI](skiper-ui.md), [Cult UI](cult-ui.md), [Motion Primitives](motion-primitives.md), [Smooth UI](smooth-ui.md), [Kokonut UI](kokonut-ui.md)
