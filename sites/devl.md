---
title: devl
description: Sean Brydon's 158 SaaS screens and blocks built on coss-ui, each installable from a shadcn registry.
url: https://devl.dev
type: component-library
formats: product-UI block collection with a shadcn registry
topics: [components, ux-patterns, agents-and-prompts]
verdict: useful
agent: [registry]
pricing: free
licence: free; devl's own licence is not stated. The underlying coss-ui components are MIT (they live in an MIT-licensed folder of Cal.com's otherwise AGPL-3.0 coss repository)
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [shadcn-ui, kibo-ui, interior-dev, evil-buttons]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# devl

## What it is

devl.dev is "Sean's scratch pad": about two years of UI experiments by Sean Brydon, a Cal.com engineer, built on coss-ui (Cal.com's Tailwind v4 and Base UI component library). At review time it listed 158 designs in 18 folders, 29 of them marked work in progress. Despite the lab framing, most pieces are full product screens and blocks for a fictional SaaS rather than tiny widgets, mixed with some raw CSS, shader, SVG and canvas touches.

## When to open it

When you are building the unglamorous parts of a SaaS app (settings, empty states, tables, auth, billing) on a shadcn-style stack and want a polished, consistent starting screen instead of a blank page.

## Most useful

- **App scaffolding**: 12 layouts (app shells, rails, two- and three-pane splits, focus mode, canvas tools) and 14 auth and onboarding screens, including OTP, two-factor and magic-link states.
- **States people forget**: 10 empty states (inbox zero, no results, offline, maintenance, 404), six toasts and banners with undo and retry, and six tours and coachmarks.
- **Data views**: dashboards, sortable tables, filter toolbars and chips, pure-SVG charts (funnel, cohort heatmap, gauges) and calendars with timezone planning.
- **Collaboration**: timelines, audit trails, changelogs, deploy history, and comment threads with mention popovers.
- **Keyboard browsing**: arrow keys move between designs, `r` jumps to a random one, `t` toggles theme and `c` opens the code.

## Using it with agents

Strong fit. Every design is a shadcn registry item at `/r/<folder>/<design>.json`, installable with `npx shadcn@latest add https://devl.dev/r/<folder>/<design>.json` after registering the `@coss` registry. Items bundle all their files (screen, shell, helpers, theme palettes) and declare `@coss/*` registry dependencies and npm packages such as lucide-react, so an agent can install and adapt a whole screen. There is no index file or `llms.txt` (both return 404), so hand the agent the exact item URL from the site.

## Watch out for

- No licence is published for the designs themselves; ask before redistributing them.
- Items can be large (the login screen alone ships eight files) and assume coss-ui primitives, not stock shadcn/ui.
- Demo content is branded for a fictional product, and some profile demos call the public GitHub API and a third-party contributions API at runtime.
- The site also promotes the author's Orbit starter kit and Cal.com.

## Reusable ideas

- Organise a component site like a file tree ("158 files, 18 folders") with ⌘K search.
- Give every design a random-jump key so visitors discover more of the catalogue.
- Ship empty, error and offline states as first-class blocks, not afterthoughts.
- Package a screen with its layout shell and theme files so it works on first install.

## Related

[shadcn/ui](shadcn-ui.md), [Kibo UI](kibo-ui.md), [interior.dev](interior-dev.md), [Evil Buttons](evil-buttons.md)
