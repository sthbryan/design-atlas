---
title: Reverse UI
description: 68 animated React feature illustrations and shader effects for SaaS pages; 19 free, the rest a one-time paid licence. MUI and Emotion.
url: https://reverseui.com
type: component-library
formats: freemium animated component library (copy-paste)
topics: [components, motion, 3d-and-shaders]
verdict: useful
agent: []
pricing: freemium
licence: 19 components free with commercial use; the full set is a one-time purchase, $39 for one developer or $175 for up to 20 (discounted from listed $100 and $350 at review). The licence covers personal and commercial projects per the FAQ; no separate licence text is published
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [magic-ui, aceternity-ui, skiper-ui, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Reverse UI

## What it is

Reverse UI is a paid collection of animated React components made by the team behind the software development agency MajiLabs, which the site promotes on every component page. At review it listed 68 components, released steadily since May 2024, with new ones most months in 2026. They lean towards the kind of hero and feature illustrations seen on developer-tool marketing sites: a rotating globe, a radar, dithered waves and logos, particle fields and vortices, a light tunnel, a fingerprint scan, a MacBook keyboard, a retro terminal, a logs explorer, role-based access and multifactor authentication diagrams, plus smaller pieces like a dock, a radial menu, exclusion tabs, a star rating and text effects. Components are built with React and Framer Motion and styled with MUI and Emotion; the component pages mark the Tailwind variant as "soon".

## When to open it

Open it when a SaaS or developer-tool landing page needs a polished animated illustration of a feature (security, sync, collaboration, logs) rather than a static screenshot. The free tier is enough to judge the quality.

## Most useful

- **Feature illustrations**: bot protection, cloud syncing, invoice tracking and realtime collaboration scenes that explain a product idea in motion
- **Shader and dither effects**: dots shaders, holographic mist, grid shimmer and dithered logos
- **Playgrounds**: each component page lets you change props live and see the result before copying
- **Credits**: many entries name the site or designer they were inspired by (for example Vercel, Supabase, Clerk or Emil Kowalski)

## Using it with agents

There is no CLI, shadcn registry, `llms.txt` (404 at review) or MCP server. You copy the snippet from the site, and paying customers get an invite to a private GitHub repository. An agent can adapt a pasted snippet but cannot browse or install the catalogue.

## Watch out for

- The current code targets MUI and Emotion, which is a poor fit for Tailwind-only projects until the promised Tailwind versions arrive, even though the FAQ describes both as available
- The terms of the paid licence are only summarised in the FAQ; there is no licence page, terms page or named company behind the purchase
- Several pieces are close recreations of other companies' marketing visuals, which can look derivative on your own site
- Paid source lives in a private repo, so access depends on the account staying active

## Reusable ideas

- Explain an abstract feature (permissions, sync, bot defence) with a small looping animated diagram
- Add a live prop playground to each component page
- Label every component with its inspiration source

## Related

[Magic UI](magic-ui.md), [Aceternity UI](aceternity-ui.md), [Skiper UI](skiper-ui.md), [Motion Primitives](motion-primitives.md)
