---
title: SSGOI
description: Page transitions for any router, named as a small vocabulary — zoom, drill, sheet, fade — with real apps rebuilt to demonstrate each.
url: https://ssgoi.dev
type: js-library
formats: framework-agnostic library · React, Svelte, Vue, Solid, Angular and Qwik · Web Animations API · docs · live app rewrites · llms.txt
topics: [motion, navigation]
verdict: useful
agent: [llms-txt]
pricing: free
licence: MIT, as stated in the package metadata and the site's structured data at review (ssgoi 2.0.0)
licence_class: open-source-permissive
reviewed: 2026-11-10
status: active
related: [number-flow, animate-ui, animista]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [navigation](../topics/navigation.md)


# SSGOI

## What it is

A library for transitions between pages, built on the Web Animations API and explicitly aimed above what the View Transitions API can do. The home page is a demo in itself: a device preview with a Mobile and Web toggle, and beside it four words — zoom, drill, fade, sheet — that name the available transition axes. Selecting one runs it in the preview, so the taxonomy is learned by watching rather than by reading.

Under that sits the argument, which is a good one for anyone designing navigation: what changes between two screens is a relationship — a list opening into a detail view (drill), a panel sliding over the page (sheet), an image growing into a hero (zoom) — and each relationship has a motion that belongs to it.

## When to open it

Open it when an app or a marketing site needs transitions between routes and you want a vocabulary for them instead of an invented animation per page, or when you are writing motion guidance and need examples that are tied to navigation structure rather than to components.

## Most useful

- **Four named axes** — zoom, drill, fade, sheet — a small enough set to remember and specific enough to mean something.
- **A device toggle in the demo**, so the same transition can be judged at touch and pointer widths.
- **Real apps rebuilt as examples**, which is a stronger test than a synthetic pair of screens.
- **Framework coverage as a claim, not an afterthought**: React, Svelte, Vue, Solid, Angular and Qwik, with routing kept independent.
- **Web Animations API underneath**, so it works where View Transitions do not and can be interrupted mid-flight.

## Using it with agents

`llms.txt` resolves at review, so an agent can read the API and the axes without parsing the demo. No MCP server or registry was found. Because the library is framework-agnostic and MIT, an agent can also read the package source for the exact easing and durations.

## Watch out for

- Page transitions are easy to over-apply; four axes do not mean every route needs one.
- The demos are prototypes of other companies' apps, useful as references rather than as code.
- Motion that reads well on a phone can feel sluggish on a desktop router, which is why the device toggle exists — use it.
- The site is small and the documentation is young, so expect the API surface to move.

## Reusable ideas

- Name transitions by the relationship they express, and keep the list short.
- Put a mobile and a desktop preview side by side, with a toggle, for anything motion-related.
- Demonstrate on real products rather than generic screens; recognition does the explaining.
- Keep routing out of the library and the library out of the router.

## Related

[NumberFlow](number-flow.md), [Animate UI](animate-ui.md), [Animista](animista.md)
