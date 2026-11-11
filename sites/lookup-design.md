---
title: lookup.design
description: Hand-indexed library of UI screenshots from named brands, searchable by component — hero, card, navigation — with a free tier and no filters by style.
url: https://lookup.design
type: gallery
formats: 900+ screenshots at review · 40+ brands · component tags such as hero, card, navigation, filters and footer · search with stable query URLs · grid and list views · newsletter
topics: [inspiration, components]
verdict: useful
agent: []
pricing: free
licence: No licence is stated at review. The Terms & Conditions route renders an empty page, so the screenshots should be treated as look-only
licence_class: not-stated
reviewed: 2026-11-11
status: active
related: [mobbin, refero, collected]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [components](../topics/components.md)

# lookup.design

## What it is

A small, hand-labelled library of interface screenshots taken from real products. The home page is a search box and a row of components — blogpost, blog, hero, filters, checkbox, searchbar, card, banner, footer, navigation — and selecting one lands on a results grid at `/search?query=<component>` where each thumbnail is captioned with the brand it came from: Stripe, Mapbox, Adobe, HashiCorp, Campaign Monitor, Lattice, Clay, Zenefits.

The value is the labelling. Every entry was named and categorised by hand, so "show me hero sections" returns hero sections rather than a mood, and the counts are modest enough to scan: 900+ images and 40+ brands at review, with about a hundred added a month. There is a grid and a list view, and an Open image action that gives you the screenshot on its own.

## When to open it

Open it when you need to see how a dozen real companies solved one specific component and you have about ten minutes, or when you are writing guidance for a component and want examples that are recognisably professional rather than invented. It is much weaker for research that needs a date, a platform, a design system or a live URL.

## Most useful

- **Component-first navigation**, which matches how the work is actually asked for: a hero, a card, a filter row.
- **Stable, guessable search URLs** — `/search?query=card` — so a link can go straight into a brief or a ticket.
- **Brand names attached to every thumbnail**, so an example can be traced to the real product.
- **A grid and a list view**, which suits both scanning and reading a single frame.
- **Small enough to finish.** A few hundred entries means you can see the whole set for a component instead of scrolling indefinitely.

## Using it with agents

Nothing machine-readable: no `llms.txt` at review, no API, no JSON. The search URLs are readable and stable, so an agent can fetch a results page and read the brand names and the count, but the screenshots themselves carry the design and a text agent cannot use them. Plan on a human or a vision-capable step for anything visual.

## Watch out for

- The Terms & Conditions link leads to a route that renders an empty page, so the reuse terms are unknown and the images should not be republished.
- There is no date on the screenshots and no link to the live site, so a "current" example may be several redesigns old.
- Selection is limited to 40+ brands, which is a thin sample of the web and a narrow taste: SaaS marketing, mostly.
- Only a free tier exists at review, so the library's future depends on one person and a sponsor slot.
- It is a screenshot archive, not an interaction reference: nothing here shows motion, states or responsiveness.

## Reusable ideas

- Index by component and let the query be the navigation.
- Caption every thumbnail with the product it came from; a screenshot without a source is a rumour.
- Make the filtered view a real URL, not client state.
- Keep a library small enough that a section can be seen to the end.

## Related

[Mobbin](mobbin.md), [Refero](refero.md), [Collected](collected.md)
