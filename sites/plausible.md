---
title: Plausible Analytics
description: "Privacy-first web analytics: a pageview slider for pricing, a compact one-page dashboard and an AGPL self-hosted edition."
url: https://plausible.io
type: website
formats: product · analytics · pricing by traffic
topics: [data-viz, ux-patterns]
verdict: useful
agent: []
pricing: freemium
licence: "Cloud plans are paid subscriptions priced by monthly pageviews, with a 30-day free trial and no free cloud tier at review. The self-hosted Community Edition is AGPLv3, stated on the site and in the repository, and any use of it must respect that licence. Cloud plan prices and the trial terms are stated on the pricing page."
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [fathom, posthog]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [ux-patterns](../topics/ux-patterns.md)

# Plausible Analytics

## What it is

Plausible is a privacy-friendly alternative to Google Analytics that positions itself around one idea: useful traffic numbers without cookies or consent banners. The hosted Cloud service is paid by monthly pageviews, while the Community Edition runs on your own server under the AGPL. The marketing site is built around those two paths, cloud for speed, self-hosted for control.

## When to open it

- When a small site needs a dashboard that fits on one screen, with no funnel builders or menu layers to learn.
- When pricing must scale with traffic, and the pricing page should make that obvious in seconds.
- When the team wants an open source exit: the same product, self-hosted under AGPL.

## Most useful

- The pricing page turns a variable bill into a friendly control: a pageviews slider with the plan price updating as you drag, plus a monthly/yearly switch.
- The product story leads with the absence of surveillance, so the design carries the argument instead of a feature checklist.
- The dashboard itself is a study in restraint: essential metrics first, context beside, no clutter.
- The open source page separates Cloud from Community Edition in a plain comparison, so self-hosters know exactly what they give up.

## Using it with agents

- No agent channel is declared at review: no MCP server, llms.txt, CLI or API docs page linked from the site at review.
- The Community Edition is AGPL, so any code an agent writes for self-hosting must stay inside that licence.

## Watch out for

- Cloud pricing rises with pageviews, so a growing site should re-check its tier before committing. Prices at review are per the pricing page, confirm them live.
- The Community Edition excludes some premium features (funnels, SSO, e-commerce goals) at review, so compare the cloud feature list before choosing self-hosting.
- EU hosting and GDPR posture are stated on the data policy page; read it before making compliance claims for a client.

## Reusable ideas

- Price by usage with a single slider that shows the resulting price immediately, instead of a table of tiers to parse.
- Sell the absence of a feature (no cookies, no banners) as the headline, then support it with one screen of proof.
- Publish a plain Cloud versus self-host comparison so open source readers know the trade-offs without digging through docs.

## Related