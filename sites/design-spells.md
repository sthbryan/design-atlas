---
title: Design Spells
description: 337 hand-picked recordings of micro-interactions and easter eggs; llms.txt plus a Markdown homepage via Accept header.
url: https://designspells.com
type: gallery
formats: inspiration gallery
topics: [inspiration, motion]
verdict: useful
agent: [llms-txt]
pricing: free
licence: free, no account needed; funded by sponsors. Recordings show other companies' products, so they are references, not assets you can reuse
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [60fps, kinetics, microkit, 404s, minimal-gallery]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [motion](../topics/motion.md)

# Design Spells

## What it is

A hand-picked collection of short screen recordings of delightful design details: micro-interactions, easter eggs, playful animations and skeuomorphic touches from real apps and websites. Each "spell" is numbered (337 at review time) and carries a title, the app it comes from and a few tags. It is made by Chester and Duncan, who also send a biweekly newsletter of new spells.

## When to open it

When a product feels correct but flat and you want examples of small touches that give it personality: a satisfying delete confirmation, a hidden minigame, a celebratory moment after finishing a task, an unusual loading state. It is also good material for a design review or pitch about "delight".

## Most useful

- **Tag filters** such as Mobile, Desktop, Tablet, Interaction, Animation, Easter Egg, Skeuomorphic, Fun, Confetti, Transition, 3D, 404 and Dynamic Island.
- **App pages** that group every spell from one product, useful for studying how a single team (for example Apple, Opal or Transit) builds a consistent motion language.
- **Newsletter archive and RSS feed** of past issues, handy for a regular dose of references.
- **Submission by email**, so the catalogue keeps growing with community finds.

## Using it with agents

The site publishes an `llms.txt` that tells agents how to use it: request the homepage with an `Accept: text/markdown` header to receive the latest spells and tags as Markdown, filter with a `tag` query parameter, page with `skip`, and use the sitemap to enumerate every spell with its video URL and tags. There is no API, MCP or code; the file asks agents to link to spell pages and credit the site rather than describe videos they have not watched.

## Watch out for

- These are videos of behaviour, not code or implementation notes; you still have to work out the timing yourself.
- The site sits behind a bot-protection checkpoint, so plain command-line fetches may be blocked.
- The catalogue is smaller and more whimsical than systematic motion libraries; it favours surprise over everyday patterns.

## Reusable ideas

- Reward a finished action (completing an activity, a perfect score) with a brief celebration that never blocks the next step.
- Hide a small easter egg in an otherwise idle state, such as an offline screen or an empty view.
- Use skeuomorphic physical metaphors (dials, timers, cards you "crack open") for moments that deserve weight.
- Replace a confirmation dialog with an in-place animated confirmation on the control itself.
- Give voice or AI states a living visual (a pulsing orb) so waiting feels active.

## Related

[60fps](60fps.md), [Kinetics](kinetics.md), [MicroKit](microkit.md), [404s](404s.md), [Minimal Gallery](minimal-gallery.md)
