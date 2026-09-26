---
title: Aura
description: AI landing-page builder with templates, components, assets, a ~725-file DESIGN.md library and a remote MCP.
url: https://aura.build
type: ai-builder
formats: AI website builder · template, component and asset library · DESIGN.md library · MCP
topics: [agents-and-prompts, design-md, components, assets]
verdict: useful
agent: [mcp]
pricing: freemium
licence: the Free plan has no AI prompts, 2 pages per project and personal use only, but you can remix free templates, export HTML and copy their DESIGN.md and prompts. Paid plans (3-day trial with 20 prompts, card required) are Pro $25, Max $50 and Ultra $100 per month, half that billed yearly, plus Elite in the comparison table. These add commercial use, Figma export and Pro templates. Extra credits are sold as one-off packs (for example 200 for $50). The terms say you keep the rights to content you post but grant Aura a licence to use and display it. No per-item licence is stated for community DESIGN.md files.
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [neuform, designmd, refero-styles, 21st-dev, vibeprompts, open-design]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [components](../topics/components.md), [assets](../topics/assets.md)

# Aura

## What it is

A design-first AI builder from Meng To's Design+Code (operated by DESIGNCODE IO PTE. LTD., Singapore). It generates landing pages and sites as plain HTML, Tailwind and vanilla JS, lets you edit them visually, and publishes them with CMS and SEO controls. Around the builder sit large public catalogues of templates, components, assets, prompt skills and a DESIGN.md library. The site claims 189,000 users.

## When to open it

- When you want a polished marketing page quickly and plan to export the HTML or hand it to Figma rather than build it inside an app framework.
- When you want to browse DESIGN.md files attached to real, previewable pages, not just markdown on its own.
- When you'd like your coding agent to search a design catalogue or push a local project into a visual editor.

## Most useful

- The DESIGN.md library (roughly 725 system pages in the sitemap). Each system shows Google-style YAML front matter (`version`, `name`, `description`, `colors` roles, `typography` tokens such as `display-lg`/`body-md`/`label-md`, `spacing`, `rounded`, `components`). After that come prose sections: Overview, Composition, Colors, Typography, Layout, Components, Motion, WebGL & Effects and Guardrails, along with visual cards and the HTML reference it was drawn from. Many are imported from Neuform's featured templates, with the author credited.
- You can add a DESIGN.md by uploading one, generating it from a website or template, or importing it from Aura templates.
- `@` references in prompts pull templates, components or snippets in as context (up to about 100,000 characters, according to the pricing FAQ).
- A `/llms.txt` summary of the product.

## Using it with agents

Aura MCP is a remote server at `https://mcp.aura.build/mcp` (streamable HTTP, browser OAuth), with setup commands for Codex, Claude Code and Cursor. It can search the catalogue, read and update Canvas work, import HTML or React projects, and validate and publish specific revisions. Billing, domains and shell access are kept out of it. Without MCP, copy a system's DESIGN.md into your repo. "Add to Prompt" inside Aura is marked Pro.

## Watch out for

- Commercial use needs a paid plan, and copying DESIGN.md or prompts from Pro templates also needs one.
- Community systems are often derived from a single page (a footer or a hero), so they can be narrower than a full product design system. Their descriptions are auto-generated.
- Its DESIGN.md files add a Composition section and a WebGL & Effects section and have no Do's and Don'ts section, so they don't follow Google's section order exactly the way [DESIGN.md](designmd.md) files tend to.
- The terms give no explicit output or template licence, so check before reselling anything derived from another creator's template.

## Reusable ideas

- Keep every DESIGN.md next to the HTML it was derived from, so the agent has both the rules and a concrete reference.
- Add a Guardrails section with rules like "don't flatten this into a generic card grid" or "don't swap the color mode" to keep an agent from drifting to defaults.
- Scope an MCP integration tightly: catalogue search and project revisions only, with explicit revision IDs so an agent can't silently overwrite newer work.

## Related

[Neuform](neuform.md), [DESIGN.md](designmd.md), [Refero Styles](refero-styles.md), [21st.dev](21st-dev.md), [VibePrompts](vibeprompts.md), [OpenDesign](open-design.md)
