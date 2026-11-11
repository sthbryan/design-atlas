---
title: Diagram Design
description: Agent skill that draws 45 editorial diagram types as self-contained HTML and SVG, brand-matched to your site, installed in one command.
url: https://diagramdesign.dev
type: agent-skill
formats: 45 diagram types · agent skill for Claude Code, Codex, Cursor, Copilot, Droid, Qoder and Pi · self-contained HTML with inline SVG · imports draw.io, Mermaid and Excalidraw · optional animated variants · editable template scaffold
topics: [agent-skills, agents-and-prompts, documentation]
verdict: very-useful
agent: [skill, cli]
pricing: free
licence: MIT, stated on the page and in the repository at review (about 66,000 stars). The published examples are part of the same repository
licence_class: open-source-permissive
reviewed: 2026-11-11
status: active
related: [anthropic-skills, typeui, design-sorcery]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [agents-and-prompts](../topics/agents-and-prompts.md), [documentation](../topics/documentation.md)

# Diagram Design

## What it is

A skill that teaches a coding agent to draw diagrams in an editorial register instead of the rounded-box style every generator defaults to. The premise is written on the page as a sentence worth keeping: the model already had the content, what it lacked was taste.

The taste is specified as physical rules rather than adjectives. One accent colour, pointing at the single node that matters. Hierarchy carried by type weight and grouping instead of a rainbow of fills. Every stage of a diagram answering the same three questions — intent, guardrail, outcome — so reading across a row shows the whole system. And forty-five types, each with its own construction rules: Sankey, waterfall, Wardley map, service blueprint, exploded axonometric, database schema with real SQL types, story map with a release cut line.

Output is one HTML file with inline SVG. It opens offline, has no build step and nothing to host, and the agent first reads your site's colours and fonts so the diagram arrives already branded. Point it at a draw.io, Mermaid or Excalidraw file and it redraws rather than converts, at the size and detail the destination needs. Accessibility is in the product, not the appendix: each diagram carries a title and description for screen readers, and motion is optional with static as the default.

## When to open it

Open it when a README, a deck or a pricing page needs a diagram that looks designed, or when you have a Mermaid graph that is correct and unreadable. It is also a good read on its own for anyone writing agent instructions: the skill shows how to encode a visual standard as constraints an agent can follow.

## Most useful

- **Forty-five real types**, each with its own geometry, rather than one box style restyled forty-five ways.
- **Self-contained HTML plus inline SVG**, which survives a slide deck, a docs site and a repo without a renderer.
- **Brand matching performed before drawing**, so the accent colour is yours and the diagram does not need recolouring by hand.
- **Redrawing from diagram sources** instead of importing them, which keeps the constraints of the destination.
- **One install across hosts**, from `npx skills add` to the Claude Code, Codex, Copilot and Droid plugin marketplaces.
- **A template scaffold** — copy `template.html` and edit — for the cases where asking is slower than editing.

## Using it with agents

This is the channel: it is an installable skill, so the normal route is `npx skills add cathrynlavery/diagram-design`, then ask in plain words ("make me a quadrant of Q2 projects by impact versus effort"). Saved profiles live in `~/.diagram-design/profiles/` and survive updates. There is no `llms.txt`; the site's `/llms.txt` path returns HTML, so agents learn the system from the skill itself.

## Watch out for

- The page badge said 17k+ stars at review while the repository API reported about 66,000, so quote the repository when the number matters.
- A good-looking diagram is still a claim. The type list is a taxonomy of argument structures, and picking the wrong one makes a tidy drawing say the wrong thing.
- Brand matching reads colours and fonts from a URL; a half-designed site produces a half-matched diagram.
- Everything is one HTML file, which is excellent for sharing and awkward for editing in a team: there is no round-trip with Figma.
- The skill is opinionated about restraint. If the brief asks for a dense engineering figure, its defaults will fight you.

## Reusable ideas

- Write the visual rule as a sentence an agent can apply: one accent, hierarchy by weight, no decorative fills.
- Give every diagram type its own construction rules instead of a shared template.
- Ship the artefact as one portable file with accessible text inside.
- Publish the same content drawn twice — with and without the skill — as the argument for the skill.

## Related

[Anthropic Skills](anthropic-skills.md), [TypeUI](typeui.md), [DesignSorcery](design-sorcery.md)
