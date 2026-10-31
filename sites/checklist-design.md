---
title: Checklist Design
description: 138 design checklists by screen, component and flow, plus an agent skill that reviews a screenshot against the matching list.
url: https://www.checklist.design
type: pattern-library
formats: checklists · agent skill · Figma skill and plugin · copy or export to Notion, Linear, Jira and others
topics: [ux-patterns, cta, footers, error-pages]
verdict: very-useful
agent: [skill]
pricing: free
licence: "The skill repository Checklist-Design/skills is MIT (about 70 stars at review). The checklists themselves have no terms page — /terms and /about both return 404 while /privacy resolves — so treat the text as read-and-use-in-your-own-words rather than as licensed content. The Figma plugin's price is not stated on the site."
licence_class: mixed
licences:
  code: open-source-permissive
reviewed: 2026-10-30
status: active
related: [good-ui, cta-gallery, footer-design, 404s]
---
[← Atlas](../site/home.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [cta](../topics/cta.md), [footers](../topics/footers.md), [error-pages](../topics/error-pages.md)


# Checklist Design

## What it is

Checklist Design is George Hatzis's library of design checklists, one per thing you build. At review it listed 138 of them in five groups: mobile app, web app, website, design system and flows. Each checklist is a short, ordered list of items with a note on the ones that need explaining. A website footer has 13 items (width, contrast against the body, link destinations, legal and compliance links, logo, grouped categories, socials, app downloads, trust badges, back to top, contact methods, partner logos, payment methods). A design-system button has 5 (base style, shape, variants, copy, states). A website 404 has 5 (logo, title, description, links to other pages, illustration and visual flair). Flows cover the moments that break: submitting a form, showing an input error, resetting a password, cancelling a subscription.

## When to open it

When you are about to ship a screen and want a second pair of eyes on the boring parts — which is where most of the items are. The footer and 404 lists in particular turn a "make it nicer" conversation into a fixed set of decisions, and the form and input-error flows cover the states that demos skip.

## Most useful

- **Footer** (`/website/footer`): 13 items, including the two that get forgotten — regulatory badges and accepted payment methods.
- **Button** (`/design-system/button`): base style, shape, variants, copy and states, with the note that generic labels are only acceptable when the surrounding context says what will happen.
- **404** (`/website/404`): logo, title, description, pathways back and room for personality.
- **Empty state** (`/web-app/empty-state`) and the **submitting a form** and **showing input error** flows, which is where the CTA work actually lands.
- **Export**: copy the list as plain text, or push it to Notion, Linear, GitHub, Jira, Confluence, Google Docs, Asana, ClickUp, Trello or a Slack canvas.
- **Search** across all 138, plus a refresh button that swaps the lists it suggests when you do not know what to look at.

## Using it with agents

The site ships a skill at `/skill`, mirrored in the MIT repository `Checklist-Design/skills` and listed on skills.sh, plus a Figma skill and plugin. The skill carries the published checklists, so it reads the catalogue locally and picks the ones that apply to a screenshot or a running local page instead of fetching anything. It has two modes: `audit`, which walks the matching checklist item by item and reports present, partial or missing, and `critique`, which gives an opinion, including what already works. One practical detail: the pages are client-rendered, so a plain fetch returns an almost empty document — an agent needs a browser or the skill, not `curl`.

## Watch out for

- `/about` and `/terms` return 404 at review, so there is no stated licence for the checklist text and no page describing who runs it.
- Each item is a considered opinion, not a finding: nothing cites research, and the lists are short by design, so they check coverage, not quality.
- The page is ad-supported; the Mobbin and Rectangles blocks are sponsors, and the Mobbin block is itself an upsell.
- The Figma plugin ("AI powered design reviews") is promoted on the homepage without a price, so assume it may be a paid extra.
- Coverage is uneven: a footer gets 13 items, a button gets 5.

## Reusable ideas

- Publish one checklist per artefact, with a fixed number of items, instead of one giant audit document.
- Put the checklist in the tool the team already uses — Notion, Jira, Linear — rather than asking them to open your site.
- Ship the same catalogue as an agent skill so the review happens where the work happens, and keep it in a public repository so the lists can be diffed.
- Separate "audit" (coverage against a list) from "critique" (judgement), because merging them produces vague feedback.

## Related

[Good UI](good-ui.md), [CTA Gallery](cta-gallery.md), [Footer Design](footer-design.md), [404s](404s.md)
