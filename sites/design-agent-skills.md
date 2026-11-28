---
title: Design Agent Skills
description: A small curated repository of design skills written for AI coding agents, MIT-licensed.
url: https://github.com/podo/design-agent-skills
type: agent-skill-collection
formats: agent skill collection
topics: [agent-skills, agents-and-prompts]
verdict: useful
agent: [skill]
pricing: free
licence: The repository is released under the MIT licence.
licence_class: open-source-permissive
reviewed: 2026-11-28
status: active
related: [awesome-design-skills, anthropic-skills, accesslint-skills]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Design Agent Skills

## What it is

Design Agent Skills is a small curated repository of design skills written for AI coding agents, maintained by podo and released under MIT. It gathers skill folders (each a SKILL.md plus its supporting files) that teach an agent a specific design task, from review to generation. The collection is young and small compared with the large awesome lists, which makes it a quieter shortlist.

## When to open it

Open it when you want a handful of installable design skills without wading through a large catalogue, or when you are comparing how different authors structure a skill folder.

## Most useful

- **Installable skills**: real SKILL.md folders your agent can load directly
- **MIT licence**: free to use, copy and adapt
- **Small surface**: a shortlist, not a catalogue of hundreds

## Using it with agents

The skills are the product: copy a skill folder into the agent's skills directory (or clone the repo and point the agent at it), and the agent gains the task the skill describes. There is no MCP server or API wrapper; the skill files are plain Markdown and scripts.

## Watch out for

- Young repository (a few dozen stars at review), so check the last commit before depending on it
- Each skill's quality is its author's; the MIT licence covers the repo, not a guarantee of accuracy

## Reusable ideas

- Ship skills as folders with one frontmatter file each, so installation is a copy
- Keep curation small and deliberate, so every entry earns its place

## Related

[Awesome Design Skills](awesome-design-skills.md), [Anthropic Skills](anthropic-skills.md), [AccessLint Skills](accesslint-skills.md)
