[← Atlas](../README.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# DesignMD (designmd.me)

- **URL:** https://designmd.me
- **Type:** DESIGN.md generator · CLI · agent skill · Figma plugin
- **Topics:** design-md, agents-and-prompts, typography-and-styles
- **Pricing / licence:** credits. New visitors get 4 free credits, plus 20 more on first sign-in. Packs cost $5 (50 credits), $15 (175) and $30 (375), and credits don't expire. A single-page file costs 4 credits, a multi-page crawl 8, an HTML preview 8 more, and a Figma import 12. Discover and Compare are free. Not stated for the licence of generated files (the Terms of Use are Crowdlinker's general terms). The agent skill repo is MIT.
- **Reviewed:** 2026-09-25

## What it is

DesignMD is a tool from Crowdlinker Inc. You give it a URL and it writes a DESIGN.md for that site. According to the site, it measures tokens from the page as rendered in a real browser, rather than guessing from a screenshot or reading the CSS source. When a value can't be measured, the output is meant to say so. There is also a free Discover gallery of pre-generated files for well-known sites (31 in the sitemap, such as Stripe, Linear, Vercel and GitHub).

## When to open it

- When the style you want isn't in any library and you need a file for a specific live site, including your own.
- When a landing page alone would miss tokens. The multi-page mode crawls pricing, product and other key pages and merges them.
- When you also want the tokens in Figma (as Variables and Styles) or as a shareable HTML specimen page.

## Most useful

- Discover pages show the palette, type roles, spacing, elevation and a component count, with a toggle between the visual view and the raw markdown.
- Compare puts two systems side by side (colour roles, type, shape, depth, components). The sitemap lists 300 prebuilt pairs.
- The format: YAML front matter (`name`, `colors`, `typography`, `rounded`) followed by nine numbered sections: Visual Theme & Atmosphere, Color Palette & Roles, Typography Rules, Component Stylings, Layout Principles, Depth & Elevation, Do's and Don'ts, Responsive Behavior, and Agent Prompt Guide. According to llms.txt, generated files also record provenance: which pages were read, when, and whether stylesheets were reachable.
- A benchmarks page compares multi-page and single-page extraction quality.

## Using it with agents

- CLI: install with `npm install -g @crowdlinker/designmdme`, then run `designmdme login` (browser authorisation, no API key). `designmdme stripe.com` writes `DESIGN-stripe-com.md`. Flags include `--multi-page`, `--single-page`, `--html` and `--output`, and `list` and `usage` show history and credits. Jobs run on the server and survive disconnects.
- Agent skill: `npx skills add crowdlinker/skills --skill designmdme-cli --agent claude-code -g -y`. With it, the agent can generate a reference file before it writes UI.
- The docs include snippets for `CLAUDE.md` and `.cursor/rules` that tell the agent to run the CLI and then reference the output file.
- It publishes an llms.txt that lists every page and every CLI flag. It has no MCP server.

## Watch out for

- No licence is stated for generated or Discover files. The Terms of Use reserve all rights in site content and forbid copying or adapting it without written permission, while also saying you own your "Customer Data". Treat Discover files as reference only, and don't assume you can republish them.
- The Terms forbid automated access by scrapers. Use the CLI rather than scripting the website.
- Output describes a real brand's live site. Use it to understand a style, not to clone an identity.
- Every generation costs credits. Re-generating a site that is already cached is free, according to the CLI docs.

## Reusable ideas

- Record provenance (source pages, date, whether CSS was reachable) inside your own DESIGN.md so readers know how fresh it is.
- Write "not measured" instead of inventing a value when data is missing.
- Keep a short "agent prompt guide" section at the end with ready-to-use instructions for applying the system.
- Crawl several pages, not just the homepage, when extracting tokens. Landing pages hide many components.

## Related

[designmd.supply](designmd-supply.md), [Hyperbrowser DESIGNMD](hyperbrowser-design-md.md), [TypeUI DESIGN.md Extractor](design-md-chrome.md), [getdesign.md](getdesign-md.md), [Refero Styles](refero-styles.md)
