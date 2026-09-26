---
title: Skiper UI
description: Numbered, polished recreations of well-known designers' interactions; small free subset, murky licence.
url: https://skiper-ui.com
type: component-registry
formats: animated component registry (shadcn), freemium
topics: [components, motion]
verdict: niche
agent: [registry]
pricing: freemium
licence: 'a free subset plus one-time plans: Premium $129 and Exclusive $549 (the latter adding a Figma file and site templates marked "coming soon"); no clear open-source licence, and the FAQ limits commercial use (see below)'
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [rareui, devouring-details, emil-kowalski-skills, aceternity-ui, motion-primitives, cult-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Skiper UI

## What it is

A collection of "uncommon" animated components for Next.js and shadcn/ui, designed and built by a solo maker who goes by gxuri. According to its FAQ, the components are recreations of interactions made popular by well-known designers and design engineers, and the site credits people such as Emil Kowalski, Rauno Freiberg, Benji Taylor and Manu Arora. Components are numbered rather than named (`skiper1`, `skiper40` …) and grouped into collections.

## When to open it

When you want to study or borrow the feel of a signature interaction you have seen on a designer's portfolio, as a working React file. Better as a reference for motion craft than as a base library.

## Most useful

- A large showcase of polished, one-off interactions, each previewable in the browser, with icons flagging scroll-triggered and premium pieces
- A free subset of 37 components in the public registry index at the time of review
- The pricing page claims more than 100 premium components (older page metadata says 73+), with new collections added over time

## Using it with agents

Free components install with the shadcn CLI through the `@skiper-ui` namespace, e.g. `npx shadcn add @skiper-ui/skiper40`, and the namespace is listed in shadcn's registry directory, so the shadcn MCP server can reach it. Pro components use the same registry with a licence key sent as a bearer token from an environment variable. There is no `llms.txt`, and numeric names give an agent nothing to search by, so pick the component yourself first.

## Watch out for

- Licence is murky: the registry metadata says MIT, the site terms forbid copying or republishing its material, and the FAQ asks commercial users to learn from each component and rework it into their own system rather than ship it as-is
- The "recreated" framing means some pieces mirror other people's published work; check the original author's terms before shipping a close copy
- Components target Next.js (the one inspected imports `next/link`) and depend on Framer Motion

## Reusable ideas

- Credit the designers whose work inspired the collection, openly on the home page
- Deliver paid registry items through the standard shadcn CLI with a licence key header instead of a custom installer
- Mark each preview with a small symbol legend (scroll-triggered, premium, source available) so visitors know how to interact with it

## Related

[Rare UI](rareui.md), [Devouring Details](devouring-details.md), [Emil Kowalski's skills](emil-kowalski-skills.md), [Aceternity UI](aceternity-ui.md), [Motion Primitives](motion-primitives.md), [Cult UI](cult-ui.md)
