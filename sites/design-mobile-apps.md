---
title: design-mobile-apps (Sleek)
description: REST client for Sleek's paid mobile-screen generator, with handoff to HTML, React Native or SwiftUI.
url: https://github.com/designed-by-ai/skills
type: agent-skill
formats: agent skill · REST client for the hosted Sleek mobile design tool
topics: [agent-skills, components, icons]
verdict: niche
agent: [api, skill]
pricing: paid
licence: "the skill is MIT, © 2026 Sleek. Using it needs a sleek.design account: free accounts get one-time trial credits (about one design run), and ongoing use needs Pro at $49.99 a month or $30 a month billed yearly (20,000 AI credits a month, about 650 screens, per the skill). The repo had 6 stars at review, but skills.sh counted about 437k installs."
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [superdesign-skill, huashu-design, kombai, screenshot-to-code, ui-skills]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [components](../topics/components.md), [icons](../topics/icons.md)

# design-mobile-apps (Sleek)

## What it is

design-mobile-apps is a single `SKILL.md` (about 32 KB) that teaches an agent to use the API of Sleek (sleek.design), an AI tool that designs mobile app screens. The agent creates a project, sends one plain-language message describing the app, polls the run, and takes screenshots of each new or changed screen. When you want the design in code, it fetches each screen's HTML. Sleek's own servers do the designing. The skill covers the handoff to an HTML prototype, React Native or SwiftUI. The `designed-by-ai/skills` repo was created in September 2026 and is a copy of Sleek's official `sleekdotdesign/agent-skills` (about 580 stars). The two differ only in the skill name (`design-mobile-apps` here, `sleek-design-mobile-apps` there), and the README still points to the Sleek repo.

## When to open it

- When you want a few polished mobile screens from a sentence, and you are happy to pay for a hosted generator.
- When you already design in Sleek and want your agent to implement those screens faithfully in React Native or SwiftUI.
- As a model of an API skill that works: scopes, polling, idempotency and error handling are all written down.

## Most useful

- **Style direction paragraph**: when the user gives any taste signal, the agent writes one opinionated paragraph covering mood, colour logic, type, layout, component style, imagery and one or two distinctive details. It carries the character in colour, type and imagery, not in unusual navigation.
- **Reference catalogue**: `GET /api/v1/references` lists curated style references, and passing a `referenceId` seeds a project's whole style guide.
- **Show every screen**: a run is done only when the user has seen a screenshot of each screen it created or changed. The agent reviews its own work with `fullHeight: true`, and it checks the HTML before claiming anything is missing.
- **Implementation rules**: treat the HTML as the build reference and the screenshot as the visual target, keep the exact Iconify icons (Solar, Hugeicons, Material Symbols, MDI), reuse the Google Fonts from the `<link>` tags, and restyle the app's real navigation too.
- **Device-flow login**: the user approves a code in the browser, so they never paste a raw API key.

## Using it with agents

Install with `npx skills add designed-by-ai/skills`, or use the official source with `npx skills add sleekdotdesign/agent-skills -s sleek-design-mobile-apps`. It reads `SLEEK_API_KEY`, or gets a key through the device flow. It triggers when you ask to design a mobile app or screens, mention Sleek projects, or ask to implement a Sleek design. It produces screenshots saved in the project, a live editor link, and screen HTML written straight to disk.

## Watch out for

- Prefer Sleek's official repo. This copy comes from an organisation with an empty profile, and its 437k installs on skills.sh are far more than its 6 stars suggest.
- Your prompts, reference image URLs and screen content go to sleek.design. Every request sends a `source` value naming your agent, which the editor displays.
- The front matter says network access is limited to sleek.design, but the icon step fetches SVGs from `api.iconify.design`.
- There are no design rules of its own beyond the style paragraph. Taste comes from Sleek's models, so other skills' anti-slop checks do not apply to what it returns.
- Only one run can be active per project. Each variation needs its own project.

## Reusable ideas

- Pass the user's taste as one opinionated paragraph, not as a list of adjectives.
- Keep the screenshot for the user and a full-height capture for the agent's own review.
- Confirm a negative claim ("this is missing") against a second source before acting on it.
- State prices plainly before any payment step, including the cheaper yearly option.

## Related

[Superdesign](superdesign-skill.md), [Huashu Design](huashu-design.md), [Kombai](kombai.md), [Screenshot to Code](screenshot-to-code.md), [UI Skills](ui-skills.md)
