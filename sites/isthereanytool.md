---
title: isthereanytool
description: About 1,700 design, craft and AI tools in 19 categories, each with pricing, a why-notable note and a confidence rating; full catalogue in llms-full.txt.
url: https://www.isthereanytool.app
type: directory
formats: directory · best-of and comparison guides · llms.txt and llms-full.txt
topics: [components, agents-and-prompts, assets]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Free to browse, no account. No terms or licence for the catalogue text published at review. Sponsor slots are sold as one-month placements, paid once through Dodo Payments and labelled as sponsored
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [designeer, shoogle, mcpcn, desengs, designeng-tools]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [assets](../topics/assets.md)

# isthereanytool

## What it is

isthereanytool.app is a large directory of design, craft and AI tools, pitched at lesser-known options rather than the obvious names. Each tool has its own page with a short description, a note on why it stands out, what it's best for, pricing detail, platforms, where the tip came from (for example Product Hunt or a subreddit) and a High, Medium or Low confidence rating. Alongside the catalogue it publishes best-of lists, head-to-head comparisons, role-based stacks and a glossary. Its moderation policy says the operator researches and writes most listings, and that public requests go through a private review queue. The operator isn't named.

## When to open it

- When you need an alternative to a mainstream tool and want to see its pricing and platform at a glance.
- When you want a wide sweep of UI kits and component libraries (300 at review) or design-to-code and MCP tools in one place.
- When you want an agent to shortlist tools from a structured catalogue rather than from web search.

## Most useful

- **Size**: 1,741 tools in 19 categories on the home page, 1,705 in `llms-full.txt` at review. The largest categories are UI Kits & Components (300), UI & Product (211), Agents & MCP (146), Make & Ship (137), Visual Design (131) and Motion (109).
- **Pricing labels** in the full catalogue: Freemium 672, Open Source 406, Free 257, Paid 256, with a few usage-based or unknown.
- **Confidence**: 1,260 High, 379 Medium, 66 Low at review, which is a useful signal of how well each entry was checked.
- **Guides**: best-of pages (icon libraries, component libraries, design-to-code), comparisons such as Figma vs Penpot, and "tools for design engineers" style stacks.

## Using it with agents

`/llms.txt` lists every category with counts and links, and `/llms-full.txt` (about 700 KB) holds every tool's fields as plain text: URL, vendor, pricing, description, why notable, best for, platforms, confidence and categories. An agent can grep it for a category and pricing ("Open Source" plus "UI Kits & Components"), then check the vendor site before installing. `robots.txt` openly allows AI crawlers. There is no MCP server or public API; `/api/` is disallowed.

## Watch out for

- The two counts disagree (1,741 against 1,705), so the full file may lag the live site.
- "Why notable" notes are editorial and informal, and sometimes cite Reddit sentiment; treat them as leads, not reviews.
- A paid sponsor rail runs across the top of every page, and paid category slots also exist; the policy says payment doesn't buy catalogue placement.
- The catalogue is wide (launch sites, Mac utilities, AI writing), so filter by category before you trust a best-of list.

## Reusable ideas

- A per-entry confidence rating tells readers how far to trust a listing without hiding it.
- Publishing the whole catalogue as one flat text file makes a directory easy for agents to use without scraping.
- Recording where each tip came from (a forum, a launch site) lets readers weigh it.

## Related

[Designeer](designeer.md), [Shoogle](shoogle.md), [mcpcn](mcpcn.md), [DesEngs](desengs.md), [DesignEng](designeng-tools.md)
