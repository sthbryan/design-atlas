---
title: Pajamas Design System
description: GitLab's design system docs, which switch colour mode and five theme variants live, so the palette is proved rather than described.
url: https://design.gitlab.com
type: design-system
formats: design system · component and pattern documentation · brand guidelines · design tokens · theme variants
topics: [components, documentation]
verdict: useful
agent: []
pricing: free
licence: The documentation site states no licence of its own at review. GitLab publishes its component package @gitlab/ui under MIT (140.0.1 at review)
licence_class: open-source-permissive
reviewed: 2026-11-10
status: active
related: [nord-design-system, primer, carbon-design-system]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md)


# Pajamas Design System

## What it is

GitLab's design system, published as a documentation site rather than a component gallery. The first thing that stands out is a control in the header: an appearance switch for Light, Dark and Auto, next to a theme selector with Default, Indigo, Blue, Green, Red and Gray. Changing either one repaints the documentation you are reading. That turns the colour documentation into a live claim — you can read the token rules and then see a whole theme applied a click later.

The navigation follows the way the company thinks: a Brand group (introduction, messaging, brand voice, style and formatting, logo, logomark, branded lockups) sits above the design material, and only then do colour and the rest of the system begin. Brand and interface are in one place, in that order.

## When to open it

Open it when a design system has to support more than one brand or theme and you want to see how to publish that honestly, or when you are writing colour documentation and need a pattern for showing tokens under real conditions instead of as swatches on a white page.

## Most useful

- **Theme and colour-mode switching in the docs chrome**, which makes every page a test of the palette.
- **Brand guidelines as the first group of a design system**, not a separate microsite.
- **Colour documented by intent** — surface, border, text, feedback — alongside the palette itself.
- **A visible split between design decisions and implementation**, with components documented as part of the larger system rather than as a catalogue of widgets.

## Using it with agents

No usable agent channel at review. There is no `llms.txt`: that path redirects to GitLab's OAuth sign-in and ends at a login form, so an automated reader gets a redirect loop rather than text. The page is otherwise ordinary static HTML and can be read by fetching the rendered pages directly.

## Watch out for

- The site is documentation for a large enterprise product; its density and its long navigation reflect GitLab's surface area, not a general-purpose template.
- `llms.txt` looks present if you only check for a 200 after following redirects — check the final URL, or an agent will believe a login form is an index.
- The licence of the documentation and the licence of the component package are not the same thing: `@gitlab/ui` is MIT, the written guidance carries no stated licence at review.
- Theme switching is a feature of the docs, not necessarily of the product.

## Reusable ideas

- Put the appearance and theme switches in the documentation header and let visitors test the palette on the docs.
- Keep brand guidelines inside the design system, as its first group.
- Document colour by the job it does, with the palette as a second view.
- Name themes plainly (Default, Indigo, Blue, Green, Red, Gray) instead of inventing brand names for each.

## Related

[Nord Design System](nord-design-system.md), [Primer](primer.md), [Carbon Design System](carbon-design-system.md)
