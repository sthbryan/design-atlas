---
title: Great UI
description: 50 Motion and Tailwind components strong on page and theme transitions; the badge says MIT but the licence bars redistribution.
url: https://www.great-ui.com
type: component-registry
formats: animated component registry (shadcn)
topics: [components, motion]
verdict: niche
agent: [registry]
pricing: free
licence: free for personal and commercial projects under a custom "Great UI Custom License Agreement" that forbids reselling or republishing the components as a kit, template or derivative library; the README badge says MIT, which does not match the licence file
licence_class: source-available
reviewed: 2026-09-25
status: active
related: [transitions-dev, reactbits, aceternity-ui, skiper-ui, animate-ui, magic-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Great UI

## What it is

A copy-paste library of animated React components built with TypeScript, Tailwind CSS v4 and Motion by a solo developer, Saurabh Sharma. The registry held 50 items at review. Its most distinctive group is transitions: 11 page transitions (curtain, venetian blinds, sine wave, pixel swipe, cross blur and others) and 4 ways to animate a light and dark theme switch. The rest covers scroll-driven text, social profile cards, device mockups and small UI pieces. The repo started in July 2026, had about 230 stars at review, and ships new components every week or so according to its changelog. Blocks are marked "coming soon".

## When to open it

When you want a route change or theme toggle to feel like an event, for example a curtain wipe between pages or a circular reveal when dark mode turns on. It is also a quick source of scroll-reveal text effects for a portfolio.

## Most useful

- Page transitions, from a simple staggered wipe to a canvas-drawn pixel swipe with dithered edges
- Theme transition providers (circular, split, swipe, blur fade) that animate the switch instead of snapping
- Scroll text effects: text on a path, word focus, blur reveal, split-line fly-in
- A pixel-to-ASCII image effect and a scrambled install-command snippet

## Using it with agents

A standard shadcn index lives at `/r/registry.json`, with a description per item, and components install by URL with `npx shadcn@latest add https://www.great-ui.com/r/<slug>.json`. There is no `llms.txt`. Component pages render in the browser only, so an agent should read the registry JSON instead of scraping the docs.

## Watch out for

- Licence mismatch: the README badge shows MIT, but the `LICENSE` file is a custom agreement that bans redistributing the code as a UI library or template
- Some components are named after other libraries or brands (an "aceternity" button, LinkedIn, Facebook and Instagram cards); check trademarks before shipping look-alikes
- A one-person project a few months old; APIs may change between weekly releases

## Reusable ideas

- Treat the theme switch as a transition worth designing, not an instant swap
- Offer several page-transition styles behind one API so a site can change its mood without new plumbing
- Generate a per-component Markdown summary (install, dependencies, usage, props) from the same metadata as the docs

## Related

[Transitions.dev](transitions-dev.md), [React Bits](reactbits.md), [Aceternity UI](aceternity-ui.md), [Skiper UI](skiper-ui.md), [Animate UI](animate-ui.md), [Magic UI](magic-ui.md)
