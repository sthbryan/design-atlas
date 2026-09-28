---
title: ForgeUI
description: Animated SaaS components, blocks and templates via the @forgeui shadcn namespace; free code has a no-redistribution licence, Pro is $99 one-time.
url: https://forgeui.in
type: component-registry
formats: component library · blocks · templates (shadcn registry, freemium)
topics: [components, motion, landing-pages]
verdict: useful
agent: [registry, prompts]
pricing: freemium
licence: freemium. The free components sit in a public repo (`AmanShakya0018/forgeui`) under a custom licence that allows personal, commercial and client use but forbids repackaging or redistributing the code as a kit. ForgeUI Pro costs a one-time $99 (shown as reduced from $169 at review) for lifetime access; its terms allow unlimited personal and client projects, forbid resale, sharing or competing kits, and say all sales are final with no refunds
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [aceternity-ui, shadcnblocks, magic-ui, shadcn-ui, gsap]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md)

# ForgeUI

## What it is

ForgeUI is a React, Tailwind CSS, Motion and GSAP kit by Aman Shakya for SaaS and product sites. It mixes free animated components with a paid tier of blocks, illustrations and full templates. According to the site, Pro holds more than 250 blocks, components and illustrations plus 10 full Next.js templates; the public registry exposed 24 free components at review, and the sitemap listed 68 component pages. The changelog shows steady additions through April 2026.

## When to open it

- When a SaaS landing page or dashboard needs animated "product story" cards (an onboarding checklist, a notification centre, a file-to-CSV pipeline) rather than abstract effects.
- When you want paid, ready-made full templates for SaaS, dashboard, portfolio or docs sites and can accept a restrictive licence.

## Most useful

- **Free animated components**: an animated form, OTP input and tabs, text morph, reveal and shimmer effects, a vault lock, a notification centre, stats and security cards, and several abstract background scenes.
- **Blocks** (mostly Pro): heroes, headers, features, pricing, FAQs, testimonials, stats, logo clouds, contact, auth, CTA, footers and eight 404 pages.
- **Illustrations**: animated UI vignettes (code panels, chat drafts, sign-up counters) for feature sections.
- **Templates**: four SaaS landing pages, three dashboards, a chat dashboard, a portfolio and a docs site.

## Using it with agents

Items install through the shadcn CLI with the `@forgeui` namespace, which is listed in the official shadcn registry directory (for example `npx shadcn@latest add @forgeui/animated-form`). Free items need no token; Pro items need a personal API token sent as a bearer header from `.env.local`. The CLI docs include a ready-made setup prompt to paste into a coding agent. There was no `llms.txt` at review.

## Watch out for

- The free code is not MIT: you may use and modify it, but not republish it in another library, template or marketplace.
- Pro is non-refundable and tied to one token; the docs warn that shared tokens are monitored and can get an account terminated.
- The number shown next to "Components" in the header (193 at review) appears to be the GitHub star count, not the size of the catalogue.
- Many blocks lean on GSAP as well as Motion, which adds weight to a page.

## Reusable ideas

- Tell the feature story with a small animated mock of the product doing the job, not with a stock icon.
- Put the free and paid items behind one registry namespace and gate only the paid ones with a token.
- Give agents a copy-paste setup prompt that includes the token-safety rules as well as the install steps.

## Related

[Aceternity UI](aceternity-ui.md), [shadcnblocks](shadcnblocks.md), [Magic UI](magic-ui.md), [shadcn/ui](shadcn-ui.md), [GSAP](gsap.md)
