[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [inspiration](../topics/inspiration.md)

# Aceternity UI

- **URL:** https://ui.aceternity.com
- **Type:** React component library for landing pages
- **Topics:** components, motion, inspiration
- **Pricing / licence:** free core; a one-time-payment "All-Access Pass" for lifetime access to premium blocks and templates, with commercial use allowed and its own refund policy
- **Reviewed:** 2026-09-25

## What it is

A library of components, blocks and templates for landing pages, built with React, Tailwind CSS and Framer Motion. The site states more than 200 production-ready components and blocks, and mentions being used by people at companies like Google, Microsoft or SpaceX (a claim and figure stated by the site itself).

## When to open it

When a project needs eye-catching visual effects (animated backgrounds, bento grids, shaders) for a landing page or product page, rather than flat application components.

## Most useful

Categories with several variants each: heroes, feature sections, bento grids, logo clouds, shaders, background effects, cards, navbars, footers, pricing and testimonials. Three ways to consume it: copy-paste the code from the site, install via npm, or use its own CLI for scaffolding.

## Using it with agents

The site mentions connecting your own agent to an Aceternity UI MCP server to build components automatically; the exact setup details couldn't be verified because the specific docs page returned a 404 during this review.

## Watch out for

It depends on Framer Motion, a heavier dependency than plain CSS: watch bundle size if many animated components are used at once. The more elaborate blocks and templates (large bento grids, shaders) sit behind the paid tier; the free tier only covers basic components and blocks.

## Reusable ideas

- Showcase several variants of the same visual pattern as a reference gallery before picking a style
- Isolate "expensive" effects (shaders, particles) into separate components and only load them where they pay off
- Offer installation at three levels (copy, npm, CLI) depending on how much control the developer wants

## Related

[magic-ui](magic-ui.md), [motion-primitives](motion-primitives.md), [shadcn-ui](shadcn-ui.md), [reactbits](reactbits.md), [kinetics](kinetics.md)
