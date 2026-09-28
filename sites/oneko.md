---
title: Oneko
description: Cursor-chasing pixel cat for React via shadcn, with llms.txt and an agent prompt; sprite art not relicensed.
url: https://oneko.dhrv.pw
type: component-library
formats: component (shadcn registry item)
topics: [motion, components]
verdict: niche
agent: [llms-txt, registry, prompts]
pricing: free
licence: free; code MIT, but the bundled sprite art keeps its original owners' terms
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [evil-buttons, 404s, fancy-components]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md)

# Oneko

## What it is

A React port of the classic oneko desktop toy by Dhruv Suthar (dhrv): a tiny pixel-art cat that chases your cursor, grooms, naps and occasionally thinks out loud in a speech bubble. It installs as a shadcn registry item that copies the component, hooks, a 10 fps animation engine and 24 bundled coats into your project. It is based on adryd325's oneko.js, and the coats come from the original X11 oneko and community sprite sets, credited in a skins file. The site pairs a playground, a studio for customising the cat and copying its settings, and a long guide. The GitHub repository had about 20 stars at review time.

## When to open it

When a personal site, portfolio, docs page or 404 needs a small, charming easter egg, and you want it configurable rather than a pasted script.

## Most useful

- **Behaviour controls**: speed, follow distance, idle delay, nap toggle, random "zoomies" and a pixel laser-pointer cursor.
- **Coats**: 24 skins, hue rotation, scale, opacity and support for your own 8 by 4 sprite sheet.
- **Bubbles**: custom thoughts (a single line or a random pool), placement, chattiness and cooldown.
- **Zones and favourites**: keep-out areas the cat avoids and favourite spots it wanders to.
- **Persistence and events**: remembers its position and nap between visits, and exposes state changes for your own UI.
- **Optional sounds**: meows and purrs as separate files you copy from the repository; not bundled by the registry.

## Using it with agents

Install with `npx shadcn@latest add https://oneko.dhrv.pw/r/oneko.json`. The site is well prepared for agents: an `llms.txt` with an integration checklist, the full guide as `docs.md` and `llms-full.txt`, Markdown served for `Accept: text/markdown` requests, and a ready-made agent prompt inside the guide. It also documents the Next.js App Router pattern (a client wrapper with a no-SSR dynamic import).

## Watch out for

- The MIT licence covers the code only; the guide asks you to keep the artwork credits and read the per-skin notes before redistributing.
- Skins are embedded as data URLs, so a strict Content Security Policy must allow `data:` images.
- Sound is on by default in the component; set `meow={false}` unless you add the audio files.
- A cursor-chasing sprite can distract or cover content; offer a way to pause it and keep it off busy workflows.

## Reusable ideas

- Hide a small companion on a 404 page that reacts to the pointer.
- Let a decorative sprite avoid marked keep-out zones such as forms and buttons.
- Remember where a playful element was left so it greets returning visitors in place.
- Give a mascot a pool of short thoughts in the brand's voice instead of fixed text.
- Freeze all playful motion when the user prefers reduced motion.

## Related

[Evil Buttons](evil-buttons.md), [404s](404s.md), [Fancy Components](fancy-components.md)
