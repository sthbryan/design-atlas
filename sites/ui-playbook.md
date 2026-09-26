---
title: UI Playbook
description: Rauno Freiberg's nine component "plays" listing the states, traps and ARIA rules each one needs.
url: https://uiplaybook.dev
type: guidelines
formats: guidelines
topics: [components, ux-patterns, documentation]
verdict: useful
agent: []
pricing: free
licence: Free, no account. The GitHub repo (`raunofreiberg/ui-playbook`) is MIT (© 2020 Rauno Freiberg). The author accepts donations through Buy Me a Coffee.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: stale
related: [component-gallery, inclusive-components, design-system-checklist, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md), [documentation](../topics/documentation.md)

# UI Playbook

## What it is

UI Playbook is a short reference by designer and engineer Rauno Freiberg, started in 2020 after he found that design systems implemented the same component in very different ways. Each "play" is one page on one component: what it is for, which states it needs, how it should respond to screen size and input, best practices, implementation traps and the WAI-ARIA requirements. There are nine plays: tooltip, button, select, notification, text field, avatar, checkbox, motion and popover. The site is Next.js with MDX, and every play has a live example built with Reach UI and react-spring.

## When to open it

- Before building one of those nine components yourself, to make sure no state is missing.
- When reviewing a component in a pull request and you want a short list of what "done" means.
- When you need a quick reason not to use a clickable `div` or remove focus outlines.

## Most useful

- **State lists**: the button play goes through hover, active, focus, disabled and loading. For loading it adds that the button must not change size while the spinner shows.
- **Responsive notes**: raise touch targets to at least 44 px, following the WCAG target-size guidance.
- **Implementation traps**: link-styled buttons through an `as` prop, why nested buttons are invalid HTML, and what you must add back by hand if you fall back to a `div`.
- **Accessibility**: each play links to the matching WAI-ARIA Authoring Practices pattern for keyboard behaviour and roles.
- **Motion play**: three short principles (predictable, purposeful, playful) with small demos.

## Using it with agents

There is no llms.txt (404), MCP, CLI or export. The plays are plain MDX files in `src/pages/play/` in the repo, so the easiest route is to give the agent the raw GitHub URL of the play you need and ask it to check its component against every state listed there.

## Watch out for

- It is small and no longer updated: nine plays, and the repo was last pushed in January 2023. The homepage says 10 components and shows an "upcoming" slot.
- The examples use React 16, Next 9 and Reach UI, which are old. Take the checklists, not the code.
- The homepage has a newsletter sign-up form. You do not need it to read anything.

## Reusable ideas

- Document every component with the same headings (purpose, states, responsive, best practices, implementation, accessibility, resources) so gaps are easy to spot.
- Treat "loading" as a state that must not change the component's size.
- Keep a short list of "never do this" implementation traps next to the correct pattern.
- Link each component to its WAI-ARIA pattern instead of rewriting the spec.

## Related

[The Component Gallery](component-gallery.md), [Inclusive Components](inclusive-components.md), [Design System Checklist](design-system-checklist.md), [shadcn/ui](shadcn-ui.md)
