---
title: Unslop
description: Claude skill that turns vibecoded, AI-looking UI into a designed interface, CC-BY-4.0 with 21,785 stars.
url: https://github.com/heydamir/unslop
type: agent-skill
formats: Claude skill · UI redesign workflow
topics: [agent-skills, ai-interfaces]
verdict: very-useful
agent: [skill]
pricing: free
licence: The GitHub repository (heydamir/unslop) carries a CC-BY-4.0 licence at review (21,785 stars), so it can be reused with attribution.
licence_class: cc-attribution
reviewed: 2026-11-26
status: active
related: [no-ai-slop, stop-slop, vercel-web-design-guidelines]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [ai-interfaces](../topics/ai-interfaces.md)

# Unslop

## What it is

Unslop is a Claude skill that turns vibecoded, AI-looking UI into a designed interface: a workflow for taking a generated page and giving it real hierarchy, typography and finish. The repository carries a CC-BY-4.0 licence with 21,785 stars at review.

## When to open it

Open it when an agent has already produced a page that looks generated and you want a skill that redesigns it instead of rebuilding from scratch.

## Most useful

- **Redesign, not regenerate**: it works on the existing output, which is the common case.
- **Skill-shaped**: installs into Claude as a skill, so it applies inside the session.
- **Open licence**: CC-BY-4.0, so teams can adapt it with attribution.

## Using it with agents

The skill installs into Claude Code; the repository is the source of truth for the workflow.

## Watch out for

- A skill steers the redesign; you still need to review the rendered result.
- CC-BY-4.0 requires attribution when you redistribute it.

## Reusable ideas

- Treat the de-slopping pass as its own skill so it can run after any generator.
- Publish the workflow openly so it becomes a shared baseline for agent UI.

## Related

[No AI Slop](no-ai-slop.md), [Stop Slop](stop-slop.md), [Vercel Web Design Guidelines](vercel-web-design-guidelines.md)
