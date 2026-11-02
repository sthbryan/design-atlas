---
title: Sent
description: Developer-tool landing page for one SMS, WhatsApp and RCS API, with a cost estimator and a per-country rate sheet instead of plan cards.
url: https://www.sent.dm
type: website
formats: marketing site · interactive cost estimator · 232-destination rate sheet · API reference and npm SDK
topics: [landing-pages, documentation]
verdict: niche
agent: [api]
pricing: paid
licence: Pay as you go at $0.0150 per contacted person per month, plus carrier fees passed through at cost, so a thousand US messages came to an estimated $19.70 at review. Enterprise agreements with a monthly minimum exist. The site and service are proprietary; the `@sentdm/sentdm` client on npm is published for use with the service
licence_class: proprietary-paid
reviewed: 2026-11-02
status: active
related: [saas-landing-page, landing-gallery, v0]
---
[← Atlas](../site/home.md) · Topics: [landing-pages](../topics/landing-pages.md), [documentation](../topics/documentation.md)


# Sent

## What it is

Sent is an API that sends messages over SMS, WhatsApp and RCS behind one interface and one template, picking a route and falling back across channels when delivery fails. The product matters less here than the page: it is a developer-tool marketing site that replaces the usual three-card pricing block with a calculator. You set the number of people messaged and the monthly volume, split a share across routing, use case or channel, and the page returns an estimated monthly total with the platform fee and message cost separated. Below it sits a 232-destination rate sheet loaded from its pricing database on the day you read it, with the load date printed underneath.

## When to open it

Open it when you are designing the pricing section of an infrastructure or API product and the price genuinely depends on usage you cannot reduce to three tiers. It is also a good example of how far a developer landing page can go on concrete numbers instead of adjectives.

## Most useful

- **The estimator**: two inputs and a share slider produce a breakdown — platform fee, message cost, pass-throughs — with the arithmetic shown line by line.
- **Published rates**: 232 destinations with a best rate each, plus a separate section for leased numbers, short codes and sender registration, so the one-off costs are not hidden in the per-message price.
- **Stated load date** on the rate sheet, which tells you how fresh the numbers are.
- **A code sample in the hero**, with the install command and a short request that is traceable to a delivery path: route selected, sent, delivered.
- **An FAQ that answers the pricing questions** — what counts as a contact, what the platform fee covers, why a fallback route is billed instead of the failed attempt.

## Using it with agents

The site publishes no `llms.txt` at review, but the API is documented, an npm client exists, and there is an API reference. An agent can read the reference to understand the request shape, but sending messages spends money and needs an account, so treat the API as an integration rather than a design reference. The pricing pages are the part worth reading as prose.

## Watch out for

- The estimator is explicitly an estimate: it uses published pass-through rates and a destination mix you supply, and the page says real costs move with carrier, availability and fallback route.
- Some of the marketing copy is written for developers who already know the domain, and abbreviations are used without expansion.
- Traffic to RCS and WhatsApp depends on registrations and template approvals, which the landing page mentions only in passing.
- The page is a vendor selling its own routing; the comparison to "a fixed single-channel rate" is not benchmarked.
- Customer logos and partner badges (Meta, Google, GSMA, CTIA) describe partnerships, not endorsements of any particular result.

## Reusable ideas

- Let the reader price their own usage on the page instead of picking a plan and hoping.
- Show the fee decomposition next to the total, so the number can be audited.
- Print when a live rate table was loaded; freshness is part of the claim.
- Move one-off costs out of the per-unit price into their own short section.
- Show a request travelling through its states, not a static code block.

## Related

[SaaS Landing Page](saas-landing-page.md), [Landing.Gallery](landing-gallery.md), [v0](v0.md)
