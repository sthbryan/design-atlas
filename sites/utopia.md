---
title: Utopia
description: Free calculators that turn two type and spacing scales into fluid CSS clamp() tokens, with npm packages.
url: https://utopia.fyi
type: tool
formats: tool · calculators
topics: [typography-and-styles, landing-pages]
verdict: very-useful
agent: []
pricing: free
licence: Free, no account / site licence not stated; `utopia-core` and `utopia-core-scss` declare ISC in package.json, `postcss-utopia` is MIT
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [fontsource, wakamai-fondue, design-system-checklist, css-text-effects]
---
[← Atlas](../README.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [landing-pages](../topics/landing-pages.md)

# Utopia

## What it is

Utopia is a set of free calculators and articles about fluid responsive design, made by designer James Gilyead and developer Trys Mudford with support from the agency Clearleft. The idea: you set a type scale and a spacing scale for a small screen and for a large screen, and the browser interpolates between them with CSS `clamp()`, so you don't need breakpoints for size. The site has four calculators (type, space, grid and a general clamp calculator), about 20 blog posts split into designer and developer views, a showcase and a merch shop. It says itself that it is a way of working, not a framework, and there is nothing to install.

## When to open it

Open it when you set up the type and spacing tokens for a new site or design system and want headings, body text, gaps and padding to scale smoothly from phone to desktop. It also helps when a designer and a developer need to agree on one scale that both the Figma file and the CSS use.

## Most useful

- **Type calculator**: min and max viewport width, base size and ratio for each end (presets from 1.067 to 2), plus how many steps up and down. It outputs `--step-0`, `--step-1`… custom properties as `clamp()` values, with table, graph and visualiser views
- **Space calculator**: T-shirt sized spaces (`--space-3xs` to `--space-3xl`) as multiples of the base size, plus "one-up" and custom pairs such as `--space-s-l` that change more steeply between viewports
- **Grid calculator**: gutter and container width built from the space tokens, with a deliberately minimal `.u-container` / `.u-grid` starting point
- **Output options**: CSS, SCSS or PostCSS; clamp or older CSS locks; relative to the viewport or to a container; custom prefix
- **Shareable config**: the whole setup lives in the URL, and the generated CSS includes that link as a comment so you can reopen and change it later
- **Figma support**: according to the blog, there are Figma plugins, a kickstarter file and export to Figma variables

## Using it with agents

There is no llms.txt, MCP server or API endpoint. What an agent can use is the generated CSS (paste the `:root` block into the project and ask the agent to use only `var(--step-n)` and `var(--space-x)` for sizes) or the npm packages. `utopia-core` exposes `calculateTypeScale()` and `calculateSpaceScale()` in JS/TS and gets about 24,000 downloads a month, `utopia-core-scss` does the same in Sass, and `postcss-utopia` writes readable `clamp()` at build time. Keep the `@link` comment so a person can open the same scale in the browser.

## Watch out for

- Fluid type that relies on `vw` can break the WCAG rule that text must zoom to 200%. `utopia-core` returns a `wcagViolation` range for steps that fail, so check it before you pick very steep scales
- Container-relative output only works if you set `container-type` on a parent. Without it the units fall back to the small viewport
- The `utopia-core` README still says full docs are coming, the package was last published in 2024, and the repos have no LICENSE file (the licence is only in package.json)
- The site gives no licence or terms for its own content or code

## Reusable ideas

- Define two sizes of each token (at min and max width) and let `clamp()` fill in everything between
- Name spacing like T-shirt sizes and add "pair" tokens for spaces that should change more than the base scale
- Put the whole calculator state in the URL and print that URL at the top of the output
- Split learning material into a designer's view and a developer's view of the same idea

## Related

[Fontsource](fontsource.md), [Wakamai Fondue](wakamai-fondue.md), [Design System Checklist](design-system-checklist.md), [CSS Text Effects](css-text-effects.md)
