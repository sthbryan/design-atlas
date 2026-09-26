[← Atlas](../README.md) · Topics: [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md)

# emailcn

- **URL:** https://emailcn.run
- **Type:** email component library (shadcn registry)
- **Topics:** components, typography-and-styles
- **Pricing / licence:** free; MIT (repo `shadcn-labs/emailcn`); React Email, MJML React and JSX Email are also MIT
- **Reviewed:** 2026-09-25

## What it is

A shadcn-style registry of email sections and complete email templates, written three times over: once each for React Email, MJML React and JSX Email. It is part of the Shadcn Labs family by Aniket Pawar, which says it is not affiliated with shadcn. At review time each renderer had 72 components, about 23 full email blocks and 14 themes, plus font helpers, and the repository had about 290 stars.

## When to open it

When you need transactional or marketing emails that survive real mail clients, inside a React codebase, and you would rather start from tested table-based sections than fight Outlook from a blank file.

## Most useful

- **Marketing sections**: heroes, headers, footers, CTAs in several layouts (background image, image strip, collage, avatars), bento grids, blog and podcast cards, coupons, pricing, stats, team, testimonials, timelines and FAQs.
- **Ecommerce sections**: product lists and detail layouts, category previews, shopping cart, order summaries and reviews.
- **UI elements**: buttons, containers, data tables, grids, pills, progress bars, avatars and spacing, all rendered with email-safe markup.
- **Blocks**: ready emails for sign-in and verification, notifications, newsletters, team invites, receipts and onboarding.
- **Themes**: one token shape shared by all three renderers, turned into a Tailwind config for React Email and JSX Email and applied directly for MJML.

## Using it with agents

Register `@emailcn` in `components.json`, then add items by renderer, for example `npx shadcn@latest add @emailcn/react-email/<name>`; the namespace is in shadcn's public registry directory. The site has `llms.txt` and a large `llms-full.txt`, and its MCP page points to the standard shadcn MCP server. Unlike its sibling sites, the `/.well-known` agent-skill file returned a 404 at review time.

## Watch out for

- Most themes are named after brands (Airbnb, Apple, Stripe, Nike, Slack, Linear and others). They imitate a look; do not ship them as those companies' mail.
- MJML React had slightly fewer blocks and helper files than the other two renderers.
- The site also serves from `emailcn.vercel.app`, the host listed in shadcn's directory; both hosts answered at review time.
- Young project (repository created April 2026) with a single core maintainer.

## Reusable ideas

- Keep one set of design tokens and compile it per renderer instead of theming each email by hand.
- Ship email pieces as sections that compose inside your own `Html` and `Body` shell.
- Offer the same template in several engines so teams can switch renderers without a redesign.
- Pair each theme with a matching font helper, so fallback stacks are chosen once.

## Related

[pdfcn](pdfcn.md), [ogimagecn](ogimagecn.md), [termcn](termcn.md), [shadcn/ui](shadcn-ui.md), [CTA Gallery](cta-gallery.md)
