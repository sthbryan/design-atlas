---
title: "Libraries.dev: Thinking orbs"
description: MIT React loading orbs with nine AI "thinking" states, copy-prompt buttons and an installable agent skill.
url: https://libraries.dev/orbs
type: js-library
formats: JavaScript library (React), part of the Libraries.dev collection
topics: [motion, components, agents-and-prompts, ai-interfaces]
verdict: useful
agent: [prompts, skill]
pricing: freemium
licence: "`thinking-orbs` is MIT and free on npm; Libraries Pro ($9/mo solo, $39/mo for a 5-seat team, or lifetime $149 / $499) adds the Studio, Pro presets, the Pro agent skill and a commercial licence for Pro content"
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [reactbits, magic-ui, rareui, liquid-glass, circle-loaders]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [ai-interfaces](../topics/ai-interfaces.md)

# Libraries.dev: Thinking orbs

## What it is

Thinking orbs are small animated loading indicators meant for AI and agent interfaces: a dotted sphere that shows what the model is doing while you wait. The package ships nine states named after verbs (working, searching, solving, listening, connecting, weaving, composing, breathing, shaping), each a different animation, drawn on a plain 2D canvas rather than WebGL. Note that these are status indicators, not full-page backgrounds.

Libraries.dev is the parent site by Jakub Antalik (orbs co-made with Alexandr Brinza), a set of seven React effect packages for AI-era interfaces: `border-beam` (a glow travelling a border), `thinking-orbs`, `bot-avatars`, `liquid-gooey` (merging liquid shapes), `voice-glow` (sound-reactive input glow), `metal-fx` (liquid-metal ring) and `img-fx` (a WebGL image-generation loader). According to the site they have over 2.3 million installs combined.

## When to open it

When a chat, copilot or agent UI needs a waiting state that says more than a spinner, for example distinguishing "searching" from "writing". The wider collection is worth a look for prompt inputs, voice buttons and image placeholders in the same kind of product.

## Most useful

- **Two tuned sizes** (64 px for avatar scale, 20 px for inline text) that are separate designs rather than one scaled drawing.
- **Automatic theme**: monochrome ink that follows a `data-theme` attribute or `dark` class on an ancestor, then the OS preference.
- **Accessibility and performance defaults**: an `img` role with a per-state label, a static frame under reduced motion, and automatic pausing when off-screen or when the tab is hidden.
- **Live playground** with Preview, Install and Usage tabs for React, plus React Native and SwiftUI ports that currently install from the repository.

## Using it with agents

Every library page has a Copy prompt button that packs the install line, usage and all props with your current settings. A free skill installs with `npx skills add Jakubantalik/Libraries.dev` and offers commands to list the libraries, scan a project for places they fit (read-only) and install the best match wired to real app state. A Pro skill adds natural-language tuning ("calmer, slower orb") within each library's ranges.

## Watch out for

- React 18+ only for the npm package; the native ports are not on npm yet.
- Site copy is inconsistent about whether there are five or seven libraries, because Voice and Bot avatars were added later; check the repository for the current list.
- Studio exports and Pro presets are licensed per plan, while the npm packages themselves stay MIT and need no Pro at runtime.

## Reusable ideas

- Give AI waiting states distinct animations per activity so users can tell searching from composing at a glance.
- Design small and large variants of an indicator separately instead of scaling one down.
- Resolve theme from the host app (attribute, class, then OS preference) so drop-in effects never clash.
- Pause canvas animations off-screen and share one clock so many instances stay in sync and cheap.
- Ship a copy-prompt button that includes the user's current settings, not just generic docs.

## Related

[React Bits](reactbits.md), [Magic UI](magic-ui.md), [Rare UI](rareui.md), [Liquid Glass](liquid-glass.md), [Circle Loaders](circle-loaders.md)
