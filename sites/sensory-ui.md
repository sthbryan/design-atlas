---
title: sensory-ui
description: Sound-enabled versions of 24 shadcn components with 17 semantic roles and nine synthesised packs.
url: https://www.sensory-ui.com
type: component-library
formats: component library (shadcn registry)
topics: [sound, components]
verdict: useful
agent: [registry]
pricing: free
licence: free, MIT / Open source
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [soundcn, cuelume, web-kits-audio, uisfx, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [sound](../topics/sound.md), [components](../topics/components.md)

# sensory-ui

## What it is

sensory-ui adds sound to shadcn/ui components, built by Satyam Vyas. It ships as sound-enabled versions of 24 shadcn components (accordion, alert dialog, button, carousel, checkbox, command, dialog, drawer, dropdown menu, select, sheet, sidebar, slider, switch, tabs, toggle and more), each taking one extra `sound` prop. All sounds are synthesised live with the Web Audio API across 9 sound packs (soft, aero, arcade, organic, glass, industrial, minimal, retro, crisp), and the site gives about 26 kB gzipped as the total size. It is labelled "v1 · Early Preview", and the repository had about 290 GitHub stars at review time.

## When to open it

When a product already uses shadcn/ui and you want consistent audio feedback across dialogs, menus, tabs, toasts and form controls without wiring sound into each component by hand. It also helps as a reference for mapping interface events to sounds.

## Most useful

- **17 semantic roles in 5 categories**: interaction (tap, subtle, toggle, confirm), overlay (open, close, expand, collapse), navigation (forward, backward, tab), notification (info, success, warning, error) and hero (complete, milestone), each with a stated duration range
- **Central config** in `sensory.config.js`: global kill switch, master volume, active pack, per-category toggles, a reduced-motion setting, and overrides that map any role to your own audio file
- **Celebratory sounds off by default**: the long hero cues have to be turned on explicitly
- **`usePlaySound` hook** for elements that are not covered by a patched component
- **Live showcase** where you can switch packs and try every component

## Using it with agents

Everything installs with the shadcn CLI straight from the GitHub repository: `npx shadcn@latest add SatyamVyas04/sensory-ui/sensory-ui` for the whole set, or `.../sensory-ui-core` and `.../sensory-ui-<name>` for parts. The role names make good vocabulary for an agent prompt ("use `overlay.open` for every dialog"). There is no `llms.txt`, agent guide or MCP server, so point the agent at the README.

## Watch out for

- Needs Next.js 13.4+ and an initialised shadcn/ui project. The components install into their own folder, so imports have to be switched from your existing shadcn components
- The `/components` and `/examples` links on the site returned 404 at review time; the README is the real documentation
- By default it mutes sound when `prefers-reduced-motion` is set, which may not be what users expect; the `reducedMotion` option controls this
- The component count varies: 24 on the site, 25 in the README once the core package is included

## Reusable ideas

- Name sounds by role and category, not by timbre, so a pack switch changes every sound at once
- Make a sound's length match how much the action matters: ticks for toggles, sweeps for navigation, chimes for milestones
- Leave celebratory sounds off by default and let teams opt in
- Offer per-category mutes alongside a global switch

## Related

[soundcn](soundcn.md), [Cuelume](cuelume.md), [@web-kits/audio](web-kits-audio.md), [UI SFX](uisfx.md), [shadcn/ui](shadcn-ui.md)
