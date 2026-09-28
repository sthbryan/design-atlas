---
title: Vessa
description: Paid hosted brand guidelines with motion tokens, a public brand.json and llms.txt per brand, and an OAuth MCP.
url: https://vessa.design
type: tool
formats: tool · brand guideline builder · MCP
topics: [design-md, agents-and-prompts, typography-and-styles, motion]
verdict: useful
agent: [mcp, llms-txt]
pricing: freemium
licence: "Building is free. You pay once per brand when you publish: €19.50 (a launch price, down from €39) or €97.50 for five brands, plus VAT. Prices are halved in some regions, there is no subscription, and refunds are available within 14 days. Per the Terms, you keep ownership of what you upload, you are responsible for font licences, and German law applies. No licence is given for reusing other people's published guidelines."
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [getdesign-md, designmd, refero-styles, open-design, dialkit]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md), [motion](../topics/motion.md)

# Vessa

## What it is

Vessa is a hosted editor for brand guidelines that you publish as a web page instead of a PDF. It is made by Good Fella Studio GmbH, a small studio in Vienna that also makes Annnimate, and the site is built with Nuxt. Every guideline uses the same nine sections: intro, logo, color, typography, motion, voice, moodboard, applications and assets. Colour swatches copy their hex value on click, and motion is documented as real easing curves and durations that play on the page. An AI drafting step can read colours, fonts and the logo from an existing site to fill in a first version. The public gallery has ten published brands.

## When to open it

- When you are handing a brand to a client or developer and want a link that stays current, not a PDF that goes out of date.
- When the brand has a motion language and you need to hand over exact easing and duration values.
- When you want an agent to read a brand's colours, type and voice as structured data before it builds UI.

## Most useful

- **`brand.json` on every published guideline**: at `/brand/<slug>/brand.json` there is a versioned JSON file (`vessa.brand` v1) with the palette (hex, RGB, CMYK, role, usage share), gradients, type families and scale, logo files and clear space, motion easings, durations and stagger, and voice do's and don'ts.
- **`llms.txt` per brand**: at `/brand/<slug>/llms.txt`, a markdown version of the same guideline.
- **Motion as tokens**: named durations (micro, UI, reveal) and a stagger value that a developer can copy as CSS or GSAP.
- **Password protection** for private guidelines. Protected pages are also hidden from search engines.
- **Gallery write-ups** that point out what each brand does well, such as a single typeface for everything or a detailed voice section.

## Using it with agents

- Reading is open: point the agent at a published brand's `brand.json` or `llms.txt`. No login is needed.
- Writing goes through an MCP server at `https://vessa.design/mcp` with OAuth sign-in (`claude mcp add --transport http vessa https://vessa.design/mcp`). The agent can list and read brands, edit all nine sections, read colours and fonts from a URL, add assets and publish. By design it cannot buy, delete or change a published URL.

## Watch out for

- Guidelines only live at `vessa.design/brand/<slug>`. Custom domains are not supported, and the FAQ says so plainly.
- The editor is paid per brand at publish time, and the Terms still describe a pre-launch referral programme, so expect prices and features to change.
- The `brand.json` format is Vessa's own, not the Google DESIGN.md spec. Convert it before using it with tools that expect DESIGN.md.
- Uploading a font does not license it for the web. That stays your responsibility.

## Reusable ideas

- Publish a machine-readable twin (`brand.json` and `llms.txt`) next to every human-readable style guide.
- Document motion as named durations, easing curves and stagger, not as adjectives.
- Record each colour's role and rough share of the palette, not just its value.
- Use the same fixed section order for every brand so readers and agents know where to look.

## Related

[getdesign.md](getdesign-md.md), [DESIGN.md](designmd.md), [Refero Styles](refero-styles.md), [OpenDesign](open-design.md), [DialKit](dialkit.md)
