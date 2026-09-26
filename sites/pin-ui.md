---
title: Pin UI
description: Six playful React components rebuilt from Pinterest interface shots, installed by shadcn URL; MIT per the site terms, brand new.
url: https://www.pinui.xyz
type: component-registry
formats: component registry (shadcn) with a waitlist
topics: [components, motion]
verdict: niche
agent: [registry]
pricing: free
licence: the terms page says every component is MIT (the Pin UI name and demo photos excepted); the GitHub repo itself has no licence file
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [skiper-ui, rareui, uiverse, cult-ui, nexvyn-ui, great-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Pin UI

## What it is

A one-person project by Rachit Thakur that takes interface designs pinned on Pinterest and rebuilds them as working React components. It launched in September 2026 and had six components at review: 3D chips that press in, an OTP field whose eggs crack on a wrong code, a people picker with gooey toggles, a block-based session countdown, a balance card with a liquid currency switch, and a product card that opens into a drag-to-confirm checkout. The site promises three new ones a week and runs a waitlist. It is built with Next.js 16, React 19, TypeScript and Motion.

## When to open it

When you want a characterful, finished micro-interaction for a consumer or fintech screen (checkout, balance, OTP) and would rather start from working code than a Dribbble shot.

## Most useful

- The egg-cracking OTP input, a memorable take on error feedback
- A drag-to-confirm checkout inside a product card
- A plain CSS file per component, with light and dark variants for three of the six

## Using it with agents

Each component is a shadcn registry item, installed with `npx shadcn@latest add "https://www.pinui.xyz/r/<slug>.json"`; it writes the component and its CSS into `components/pinui/`, and the only dependency is Motion. A registry index sits at `/r/registry.json`. There is no `llms.txt` and no namespace.

## Watch out for

- The source designs are other people's Pinterest pins, and neither the home page nor the registry items credit the original designers; the MIT grant covers Pin UI's code, not the underlying visual design
- The licence is stated only on the terms page; the repo has no `LICENSE` file
- Six components from a project a week old, with a component-index page that returned 404 at review

## Reusable ideas

- Keep a public board of source references, as Pin UI does on Pinterest, and link each component to its pin
- Give error states a small story (the cracking egg) instead of a red outline
- Put a component's CSS in its own file so it installs cleanly without Tailwind changes

## Related

[Skiper UI](skiper-ui.md), [Rare UI](rareui.md), [Uiverse](uiverse.md), [Cult UI](cult-ui.md), [Nexvyn UI](nexvyn-ui.md), [Great UI](great-ui.md)
