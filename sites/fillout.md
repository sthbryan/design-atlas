---
title: Fillout
description: Form builder with unlimited forms and seats on every plan, 50+ field types, and AI or drag-and-drop authoring; now presented as "by Zite".
url: https://www.fillout.com
type: tool
formats: hosted form builder · 50+ field types · multi-page and conditional logic · payments, scheduling, PDF and signatures · 50+ native integrations · REST API and workflows · llms.txt
topics: [ux-patterns, landing-pages]
verdict: useful
agent: [llms-txt, api]
pricing: freemium
licence: Proprietary. The free plan is free forever with unlimited forms, questions and seats and 1,000 responses a month; paid plans are $15, $40 and $75 per month at review
licence_class: proprietary-paid
reviewed: 2026-11-11
status: active
related: [tally, typeform, opnform]
---
[← Atlas](../site/home.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [landing-pages](../topics/landing-pages.md)

# Fillout

## What it is

A form builder with a wide product surface and a pricing model that separates two things competitors usually bundle: forms, questions and seats are unlimited on every plan including the free one, and the meter runs on responses — 1,000 a month free, then 2,000, 5,000, unlimited. Over the limit, forms keep collecting and you upgrade or wait for the reset on the first of the month.

The feature list is the "form as application" direction: more than fifty field types, multi-page flows, conditional hiding, payments, scheduling, PDF generation, signatures, calculations, and workflows that route submissions into other tools, with a REST API underneath. Authoring is either drag-and-drop or a description the tool turns into a form.

One detail is easy to miss and matters for anyone bookmarking it: the site now presents the product as "Forms that do it all by Zite", and every sign-up link points at `app.zite.com/fillout`. The brand on the domain and the brand in the product have diverged.

## When to open it

Open it when a form is really a small process — booking, payment, application, signature — and a plain field list will not carry it, or when you want to study how far a form builder can go without becoming an app builder. It is also a good comparison point for pricing models in this category.

## Most useful

- **Unlimited forms, questions and seats on the free tier**, which shifts the limit to the only number that scales with success.
- **Response overage handled gracefully**: submissions keep arriving, nothing is lost while you decide.
- **A deep field library**, including the ones that usually force a custom build — payments, scheduling, PDFs, signatures.
- **Conditional logic and multi-page flows** in the builder, so a long form can be made shorter for the person filling it.
- **Custom CSS on paid plans**, which is the difference between a branded form and a themed one.
- **`llms.txt` and a documented API**, so an agent can describe the product and an engineer can integrate it.

## Using it with agents

`llms.txt` resolves at review. There is a documented REST API and a workflow layer, so automated submission handling is supported. No MCP server was found. Because the product is a hosted building tool rather than a code library, an agent can help design a form and write the API integration, but the form itself is assembled in the product's editor.

## Watch out for

- Response caps are the real price. Compare 1,000 responses against competitors who meter seats or features instead.
- Branding removal, custom fonts, custom CSS and custom domains are spread across the paid tiers, so "unlimited" describes the builder, not the finished page.
- The Zite rebrand means documentation, sign-up and billing may live on another domain than the one you bookmarked.
- A builder with payments, scheduling and signatures is a compliance surface, not a visual one; check data handling before putting a client's form there.
- The free tier's 1,000 responses arrive without analytics or conversion tracking, which is where most form experiments end.

## Reusable ideas

- Price on the unit that grows with the customer's success, not on seats.
- Let the form keep accepting submissions at the limit; a hard stop is a worse failure than a bill.
- Put the heavy fields — payment, booking, signature — inside the builder so a form does not need a second product.
- Say plainly, in the pricing table, which branding controls are free.

## Related

[Tally](tally.md), [Typeform](typeform.md), [OpnForm](opnform.md)
