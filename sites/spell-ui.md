---
title: Spell UI
description: Small, refined MIT set strong on text reveal animations, playful buttons and light-ray backgrounds.
url: https://spell.sh
type: component-registry
formats: animated component registry (shadcn)
topics: [components, motion, typography-and-styles]
verdict: useful
agent: [llms-txt, registry]
pricing: free
licence: free; component source under MIT (repo `xxtomm/spell-ui`); the site's terms state that the website, branding and docs design are not covered; optional monthly sponsorships
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [motion-primitives, css-text-effects, magic-ui, shadcn-ui, smooth-ui, animate-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [typography-and-styles](../topics/typography-and-styles.md)

# Spell UI

## What it is

A small, carefully finished set of React and Tailwind CSS components for marketing pages, made by tomm (`@tomm_ui` on X). It takes shadcn/ui as its model and adds more motion and personality. The registry held 33 components at the time of review, spread across text animations, buttons, inputs, backgrounds, loaders and a few showcase pieces (a perspective book, a Spotify card, an embedded tweet, a QR code, a tilt card).

## When to open it

When a landing page needs one refined detail rather than a new library: a headline that reveals word by word, a signature that draws itself, a button with a satisfying press, a soft light-ray background.

## Most useful

- The text animation group (10 items): blur reveal, shimmer, highlight, slide-up, staggered words, gradient wave, randomised text, a text marquee and a handwritten signature effect
- Buttons with character (pop, flow, rich and copy buttons)
- Inputs with small surprises, such as an exploding input, a label input and an animated checkbox
- A WebGL light-rays background and an animated gradient for hero sections

## Using it with agents

Components install with the shadcn CLI under the `@spell` namespace, e.g. `pnpm dlx shadcn@latest add @spell/pop-button`; the namespace is in shadcn's registry directory and the docs' MCP page sets up the shadcn MCP server. Docs pages can be fetched as Markdown by adding `.md` to the URL, though these return the raw MDX source with demo imports rather than resolved code. There is no `llms.txt`, and the registry index is at `/r/registry.json`.

## Watch out for

- Some components bring heavier dependencies: the light-rays background needs three.js, the signature needs opentype.js, and the Spotify card fetches track data through the `spotify-url-info` package
- The introduction speaks of components, blocks and templates, but only components were published during this review
- The site has Google or GitHub sign-in for accounts and sponsorships; the public registry installs without it

## Reusable ideas

- Treat typography motion as its own category, with many small, composable reveal effects
- Keep a library small and polished instead of racing to hundreds of items
- Offer each docs page as Markdown so agents can read the source of a component page directly

## Related

[Motion Primitives](motion-primitives.md), [CSS Text Effects](css-text-effects.md), [Magic UI](magic-ui.md), [shadcn/ui](shadcn-ui.md), [Smooth UI](smooth-ui.md), [Animate UI](animate-ui.md)
