---
title: Eldora UI
description: MIT animated landing-page components, text effects, device mockups and blocks, installed via the @eldoraui shadcn namespace, with llms.txt.
url: https://www.eldoraui.site
type: component-registry
formats: component library · blocks · device mockups (shadcn registry)
topics: [components, motion, landing-pages]
verdict: useful
agent: [llms-txt, registry]
pricing: free
licence: free; MIT (repo `karthikmudunuri/eldoraui`). No paid tier found
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [magic-ui, aceternity-ui, shadcn-ui, motion-primitives, syntax-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md)

# Eldora UI

## What it is

Eldora UI is a set of animated landing-page pieces for React, TypeScript, Tailwind CSS and Motion, made by Karthik Mudunuri and pitched as a companion to shadcn/ui. The homepage claims more than 150 components and effects; the public registry at review time held 39 components, 16 blocks and 58 example files, so the headline figure seems to count variants and demos. The repo had about 2k GitHub stars, with the last commits in March 2026.

## When to open it

- When a marketing page needs one or two eye-catching moments (a spinning globe, an animated logo timeline, an OTP card that types itself) rather than a full app kit.
- When you need a browser or device frame to show product screenshots in a hero.

## Most useful

- **Text effects**: about a dozen entrance animations such as blur-in, letter pull-up, wavy text, font-weight shifts and a dock-style hover.
- **Feature cards**: an animated integrations grid, a Clerk-style OTP demo, GitHub-style inline comments, a terminal and a testimonial slider.
- **Backgrounds**: a hacker/matrix field, a light-beam effect and an animated grid pattern.
- **Mockups**: SVG frames for Safari, a generic browser, iPhone 17 Pro, iPad and MacBook Pro.
- **Blocks**: headers, logo clouds, features, testimonials, pricing, CTA and footer sections, plus a portfolio template on the docs.

## Using it with agents

Installation mirrors shadcn/ui: run `shadcn init`, then add items with the `@eldoraui` namespace (for example `npx shadcn@latest add @eldoraui/map`). The namespace is listed in the official shadcn registry directory, so the shadcn MCP server can browse it. `/llms.txt` lists every component with a link to its docs page and example source on GitHub, and docs pages have a "Copy Page" button. The repo also ships an `AGENTS.md`.

## Watch out for

- The counts do not line up (150+ on the homepage versus 39 components in `llms.txt`); expect fewer distinct pieces than advertised.
- Some item names are misspelled (`testimonal-slider`, `seperate-away-text`), and the names stick once installed.
- The portfolio template page describes a changelog template in its body, so check the preview before downloading.
- Several effects are decorative and animation-heavy; check reduced-motion handling before shipping them.

## Reusable ideas

- Ship device and browser frames as components so screenshots stay crisp and themeable instead of being flat images.
- Animate a real product flow (a code arriving, a comment appearing) inside a feature card instead of using an abstract illustration.
- Publish an `llms.txt` that pairs every component with its example file so agents can see real usage.

## Related

[Magic UI](magic-ui.md), [Aceternity UI](aceternity-ui.md), [shadcn/ui](shadcn-ui.md), [Motion Primitives](motion-primitives.md), [Syntax UI](syntax-ui.md)
