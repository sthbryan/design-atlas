[← Atlas](../README.md) · Topics: [design-md](../topics/design-md.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Hyperbrowser DESIGNMD

- **URL:** https://design-md.hyperbrowser.ai
- **Type:** DESIGN.md generator (URL → file) · open-source example app
- **Topics:** design-md, typography-and-styles, agents-and-prompts
- **Pricing / licence:** the tool itself is free but needs your own Hyperbrowser API key. Hyperbrowser bills in credits (its docs list Fetch at 1 credit ≈ $0.001 per page; any extra charge for the branding format isn't stated). The source lives in `hyperbrowserai/hyperbrowser-app-examples` (about 1.9k stars), which has no licence file. No licence or terms are stated for the generated DESIGN.md.
- **Reviewed:** 2026-09-25

## What it is

A small single-page tool from Hyperbrowser, a cloud-browser company, that turns any domain into a DESIGN.md. You paste a URL. The app calls Hyperbrowser's `web.fetch` with only the `branding` output format, which loads the page in a cloud browser and combines DOM analysis with an LLM pass. It then formats the returned brand profile into a DESIGN.md that it says targets Google's open DESIGN.md spec. It doubles as a demo of that API.

## When to open it

- When you already have a Hyperbrowser key and want a quick, single-call starting file for a brand's colors and fonts.
- When you want to study a minimal, readable implementation of "branding JSON → DESIGN.md" before building your own generator.

## Most useful

- Output format: YAML front matter (`name`, a `colors` map of roles, and `typography` with `heading` and `body` font families), followed by the sections Overview, Colors, Typography (font roles, sizes, weights, detected usage) and Brand Identity (logo, favicon, Open Graph image, tone, energy, target audience, style, framework, component library).
- A live preview with swatches and font samples, a warning when color confidence is low, and copy and download actions (`<domain>.md`).
- Share paths like `/stripe.com` re-run automatically once a key is stored.
- The key stays in the browser's localStorage. The app sends it with each request to its own API route, which calls Hyperbrowser server-side.

## Using it with agents

Download the file, drop it in your project root as `DESIGN.md` and point your agent at it. For automation, skip the UI: the README shows the same `client.web.fetch({ url, outputs: { formats: ["branding"] } })` call through `@hyperbrowser/sdk`, and the example app is a Next.js project you can run yourself. There's no MCP server or CLI specific to this tool.

## Watch out for

- The output is thin next to [DesignMD.cc](designmd-cc.md), [Refero Styles](refero-styles.md) or [DESIGN.md](designmd.md): there are no spacing, radius, elevation, component, do/don't or responsive sections, so you'll have to write those yourself.
- It's labelled as automated extraction, and colors can fall back to generic values such as link blue, so check them against the live site.
- There's no licence on the source repo and no terms for the output. Treat extracted brand values as reference, not as assets you're free to redistribute.
- The README gives the live URL as `designmd.hyperbrowser.ai`, but the working host at review was `design-md.hyperbrowser.ai`.

## Reusable ideas

- Keep generation to a single step: one structured extraction call, then a deterministic formatter, with no second LLM pass to drift.
- Put a confidence flag next to extracted tokens so readers know which values to double-check.
- Make a generated spec shareable by domain path (`/example.com`) so a team can link straight to a brand's file.

## Related

[DesignMD.cc](designmd-cc.md), [TypeUI DESIGN.md Extractor](design-md-chrome.md), [DESIGN.md](designmd.md), [Refero Styles](refero-styles.md), [getdesign.md](getdesign-md.md)
