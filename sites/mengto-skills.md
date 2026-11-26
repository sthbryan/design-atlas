---
title: MengTo Skills
description: "MIT collection of agent skills for UI work: design-first prompting, Three.js scenes, capture and prompt workflows."
url: https://github.com/MengTo/Skills
type: agent-skill-collection
formats: agent skills · prompt library · reference gallery
topics: [agent-skills, agents-and-prompts]
verdict: useful
agent: [skill]
pricing: free
licence: MIT, stated in the repository LICENSE.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [typeui, design-md-chrome, agents-kit]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# MengTo Skills

## What it is

MengTo Skills is an MIT collection of agent skills for designers and builders using Codex, Claude, Cursor and other agents. At review the library holds about 20 Codex workflow skills plus design-first UI prompting skills: turning references into prompts, capturing daily UI inspiration, generating landing pages, and building playable Three.js scenes. Each skill is a portable folder with a lean `SKILL.md`, optional references, and demos.

## When to open it

- When a UI brief needs to become a specified prompt before any code is written (goal, format, layout, type, colour, constraints).
- When you want a reusable capture loop: browse, capture, study a reference, generate a prompt pack.
- When a project needs Three.js or interaction ideas as procedural skills rather than one-off answers.

## Most useful

- Design-first UI prompting: structure the prompt around goal, format, layout, typography, colour and constraints, and generate alternatives before iterating.
- Reference-to-prompt skills: screen recordings and HTML pages become detailed, reusable prompts.
- Procedural skill contract: steps, patterns and guardrails, with `demo/index.html` and `demo/PROMPT.md` where visuals help.
- Philosophy baked in: prompts are versioned assets, stored as files, not one-off chat text.

## Using it with agents

- Skill: load the relevant `SKILL.md` before acting (Codex), reference it from `CLAUDE.md` (Claude Code), or point Cursor rules at the skill folder.
- The repo documents per-agent support (Codex, Claude Code, Cursor) and keeps repo behaviour in `AGENTS.md`, browser work in the Codex browser.
- No MCP server or CLI is published; the skill folders themselves are the installable unit.

## Watch out for

- The collection is broad and fast-moving (about 179 commits at review), so browse the current library rather than relying on counts here.
- Skills label their own demos as fictional where applicable; treat demo inputs as examples, not real project data.
- MIT covers the skill text. Reference sites shown inside skills keep their own terms.

## Reusable ideas

- Keep `SKILL.md` lean and procedural, with links-only references, so the agent loads steps instead of encyclopaedia.
- Ship a runnable demo and a minimal prompt per skill, so the contract is testable.
- Generate alternatives before iterating on one direction, rather than rerolling a single prompt.

## Related

[TypeUI](typeui.md), [TypeUI DESIGN.md Extractor](design-md-chrome.md), [Agents Kit](agents-kit.md)
