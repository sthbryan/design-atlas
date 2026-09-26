---
title: visualize (display.dev)
description: Brand-aware HTML reports, decks and dashboards, checked by named bans and deterministic detectors.
url: https://github.com/display-dev/visualize
type: agent-skill
formats: agent skill · artifact templates · design-system packages · deterministic detectors
topics: [agent-skills, design-md, documentation, typography-and-styles]
verdict: very-useful
agent: [skill]
pricing: free
licence: "free. MIT, © 2026 display.dev, with exceptions listed in `NOTICES.md`: `reference/color.md` adapts CC BY 4.0 and Apache-2.0 material, `explore-system.md` adapts Apache-2.0 material from Impeccable, and the bundled tools (axe-core, Puppeteer, jq and others) keep their own licences. About 67 stars and about 60 skills.sh installs at review. v0.7.0, released 2026-09-16."
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [impeccable, hallmark, designmd, huashu-design, interface-design]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [documentation](../topics/documentation.md), [typography-and-styles](../topics/typography-and-styles.md)

# visualize (display.dev)

## What it is

visualize is display.dev's skill for the HTML files agents make for people to read: reports, plans, diagrams, dashboards, slide decks, RFCs, runbooks and similar. Its goal is that each file looks like it belongs to your brand and is laid out for its content, not the default Inter-and-purple-gradient look. The skill is large, at about 30 MB and 800 files. It holds 35 templates in seven groups, about 40 in-house style references (Clean, Editorial, Terminal, Swiss, Riso and others), 63 styles modelled on real brands, 32 reference files, and scripts that include `detect.mjs`, `palette.mjs`, a browser contrast checker and a diagram geometry checker. The `SKILL.md` is 237 lines. The docs link in the repo description returned a 404 at review.

## When to open it

- When your agent produces reports, plans or dashboards as HTML and they all look the same.
- When you want a brand profile captured once and applied to every artifact the agent makes.
- When you want deterministic checks (slop, accessibility, metadata, diagram overlap) on agent-made HTML, not only a model's opinion.

## Most useful

- **Seven absolute bans**, each with a rewrite: gradient text, side-stripe callouts, the three-card feature grid, the hero-metric block, an icon tile before every heading, "Ship faster. Build smarter." style triplets, and footers that credit the AI. `bolder`, `quieter`, `animate` and `polish` refuse to run on a file with three or more bans and send it to `simplify`.
- **Shape gate**: before any code, the agent shows the mode, template, sections, the organising idea, colour roles described as jobs, and the phone layout, then waits for your approval. A brief the agent wrote itself doesn't count.
- **Model-specific corrections**: lists of Codex and Gemini habits to undo, such as a 12–16 px card radius, display tracking no tighter than −0.04em, and no crude SVG illustrations.
- **Universal laws**: if an iteration changes more than 40% of the file, it has misfired. A clean detector run is not proof that the work is done. Judge the first two phone screens as finished work.
- **`teach`**: writes `DESIGN.md` in Google Stitch format, plus `PRODUCT.md` and `tokens.css`.
- **Dashboard contract**: every KPI has a unit, a trend and a baseline, and trend colours follow the metric's direction (lower latency is green).

## Using it with agents

Install with `npx skills add display-dev/visualize --skill visualize`, which works in Claude Code, Cursor, Codex, OpenCode, Hermes and Pi. Run `/visualize teach` once, then `/visualize <topic-or-path>`, `explore artifact`, `explore system`, the five refine verbs, `review` (detectors plus model judgment, no edits) and `publish`. Other hosts trigger it from phrases such as "create a plan" or "polish this report". It produces one self-contained HTML file with tokens for light, dark and OS-dark themes.

## Watch out for

- `publish` sends the file to display.dev. Without an account, the fallback script posts it anonymously to a public link that lasts 30 days and can be claimed. It adds an `X-Client-Source` attribution header, and the reference tells the agent not to mention this or the PostHog analytics to you.
- Image generation can call OpenAI or Google with your own key, but only when you pick that route explicitly.
- The 63 brand-style systems use real company names. Don't present their output as official.
- It is heavy (vendored Puppeteer and jq binaries). The shape gate adds a round-trip to every new artifact.
- Much of it comes from Impeccable (verbs, bans, `PRODUCT.md` with `DESIGN.md`), so running both duplicates rules.
- It is built for standalone documents, not product UI inside a codebase.

## Reusable ideas

- Write each ban as a card: the pattern, what counts as a match, why it's banned, the rewrite and a detector ID.
- Before sketching, name the defaults every AI version of this artifact would use, then justify each departure.
- Stop an iteration that rewrites far more than it was asked to.
- Keep a `NOTICES.md` that lists every adapted source with its licence.

## Related

[Impeccable](impeccable.md), [Hallmark](hallmark.md), [DESIGN.md](designmd.md), [Huashu Design](huashu-design.md), [Interface Design](interface-design.md)
