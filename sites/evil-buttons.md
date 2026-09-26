---
title: Evil Buttons
description: 31 playful and stateful shadcn buttons, from hold-to-confirm and cooldowns to cursor-dodging joke CTAs.
url: https://www.evilbuttons.com
type: component-library
formats: component library (shadcn registry)
topics: [components, cta, motion]
verdict: niche
agent: [llms-txt, registry]
pricing: free
licence: free, Apache-2.0 / Open source
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [gradient-buttons, magic-ui, rareui, interior-dev, uiverse]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [cta](../topics/cta.md), [motion](../topics/motion.md)

# Evil Buttons

## What it is

Evil Buttons is a shadcn/ui registry of 31 animated React buttons by Radium Coders (Jay Sharma), built with Next.js, TypeScript, Tailwind CSS, Motion and Fumadocs. The theme is mischief: many buttons joke about the action they guard, while others are straightforward styled or stateful buttons. The repository started in April 2026 and had about 180 GitHub stars at review time.

## When to open it

When a landing page, portfolio, game or internal tool can take a playful CTA, or when you need a well-behaved stateful button such as copy, hold to confirm, cooldown or morphing status, and don't mind trimming the jokes.

## Most useful

- **Useful stateful buttons**: HoldButton and HoldConfirmButton (press and hold to confirm, with abort feedback), MorphStatusButton (idle, loading, success and error in place without layout shift), CooldownButton (a radial timer that blocks double submits), CopyButton, RevealButton for hidden values, and CommandButton, which binds a global keyboard shortcut
- **Visual styles**: Aqua, chrome, brutalist, 3D, dither, glitch, shiny, minimal, grid, a cinema-ticket button and a magnetic "sticky" button
- **Joke buttons**: TrollButton runs away from the cursor, DoubtButton asks for more and more confirmation, CaptchaButton makes you pass an emoji puzzle, SlideToDetonate, DontPressButton, and AshBurstButton, which burns into ash with Matter.js physics
- **Docs per component** with previews, variants, a props table and accessibility notes (pointer capture, holding Space or Enter, `aria-live` states)

## Using it with agents

`@evilbuttons` is in the shadcn public registry index, so `npx shadcn@latest add @evilbuttons/<name>` works, and the full manifest is at `/r/index.json`. Docs pages have a "Copy Markdown" button, and there is a short `/llms.txt`. The repository contains `AGENTS.md` and `CLAUDE.md` for contributors.

## Watch out for

- `llms.txt` is out of date: it mentions icons, logos and scroll bars that are not in the current 31-item index. Use `/r/index.json` as the source of truth
- The joke buttons deliberately get in the user's way; keep them for games, easter eggs and demos, never for real checkout, consent or account flows
- Apache-2.0 rather than MIT: keep the licence and any NOTICE text when you redistribute the source
- Check each item's dependencies before installing: most need Motion, and AshBurstButton also pulls in Matter.js

## Reusable ideas

- Make the hold duration match the stakes: short for dismissing, long for wiping an account
- Lock a button behind a visible cooldown instead of silently ignoring repeat clicks
- Morph one button through its states instead of swapping in separate components
- Use humour in empty or low-stakes moments, not on the main path

## Related

[Gradient Buttons](gradient-buttons.md), [Magic UI](magic-ui.md), [Rare UI](rareui.md), [interior.dev](interior-dev.md), [Uiverse](uiverse.md)
