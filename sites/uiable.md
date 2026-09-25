[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# UIAble

- **URL:** https://uiable.com
- **Type:** component, block and template library
- **Topics:** components, documentation, agents and prompts
- **Pricing / licence:** free MIT-licensed community tier, no account required; paid Pro tier is a one-time purchase with lifetime access (no subscription), with a 70% launch discount stated by the site
- **Reviewed:** 2026-09-25

## What it is

A UI system built on shadcn/ui's principles and on Base UI primitives, with production-ready components, blocks and templates. The site states more than 790 components, more than 390 blocks, 7 templates and 2 dashboards.

## When to open it

When you need full page blocks (e-commerce sections, team, statistics, onboarding) in addition to standalone components, and want everything to share the same visual base as shadcn/ui.

## Most useful

A wide range of blocks by domain: hero, bento grids, e-commerce, team, statistics, authentication (including OTP inputs), deployment selectors, transaction interfaces. A command palette to find components quickly, plus light/dark mode support. Stack: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui and Framer Motion for animation.

## Using it with agents

The site mentions connecting your own agent to the Figma MCP for design-to-code flows; no dedicated MCP server or CLI for UIAble itself was found during this review.

## Watch out for

Only the "community" tier is MIT and free: most of the fuller blocks, templates and dashboards sit behind the paid Pro tier. Since it depends on Framer Motion on top of shadcn/ui, watch the final bundle weight if many animated blocks are used at once.

## Reusable ideas

- Split the catalog into components (atoms), blocks (full sections) and templates (whole pages), each with its own level of "already assembled"
- Use a command palette to navigate a large catalog instead of relying only on categories
- Publish a free MIT "community" layer as an entry point before the paid tier

## Related

[shadcn-ui](shadcn-ui.md), [aceternity-ui](aceternity-ui.md), [magic-ui](magic-ui.md), [designmd](designmd.md), [component-gallery](component-gallery.md)
