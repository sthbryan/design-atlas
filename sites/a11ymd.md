---
title: A11Y.md
description: Accessibility guidance for coding agents, presented as a concise visual guide with concrete interface examples and setup steps.
url: https://fecarrico.github.io/a11ymd/en/
type: agent-skill
formats: Markdown standard · WCAG 2.2 guidance · agent setup guide
topics: [agent-skills, ux-patterns]
verdict: useful
agent: [llms-txt]
pricing: free
licence: The A11Y.md repository states MIT; the website describes the project as open source.
licence_class: open-source-permissive
reviewed: 2026-09-30
status: active
related: [uswds, ui-playbook]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [ux-patterns](../topics/ux-patterns.md)

# A11Y.md

## What it is

A11Y.md is an accessibility standard designed to be read by coding assistants. Its English site explains how to point an agent at the Markdown source, choose among three compliance profiles, and use the guidance during implementation or review. The repository publishes the standard as an MIT-licensed Markdown file.

## When to open it

- When accessibility requirements need to be present while an agent designs or implements a screen.
- When a designer, QA tester or product manager wants role-specific prompts for asking an AI to review an interface.
- When looking for a polished way to explain a technical standard with examples, setup steps and an evidence trail.

## Most useful

The site moves from the problem statement to a visible before-and-after example, then into a numbered quick start and a description of how the reference material is loaded. The “fake button” example makes the semantic difference concrete. The guide also links to a [showcase of real examples](https://github.com/fecarrico/A11Y.md/blob/main/docs/en/showcase4humans.md), a [setup guide](https://github.com/fecarrico/A11Y.md/wiki/Setup-and-Integration), and the project's [evidence and research wiki](https://github.com/fecarrico/A11Y.md/wiki/Evidence-and-Research).

## Using it with agents

The project publishes an agent guide as [A11Y.md](https://raw.githubusercontent.com/fecarrico/A11Y.md/main/docs/en/A11Y.md). The setup instructions show how to point a tool's rules file to that source; the site also provides role-specific prompts for designers, QA and product. No separate MCP or API was listed on the reviewed pages.

## Watch out for

- The site's claims about its benchmark and automated checks are project-reported evidence; automated tests do not replace the human screen-reader validation the site itself calls for.
- The README says native-platform guidance is still under construction; its mature examples focus on web interfaces.
- Read the standard and linked source materials before adopting the rules for a project.

## Reusable ideas

- Pair each rule set with a short example that shows its effect in markup.
- Let readers choose a clearly named compliance profile before applying a long checklist.
- Separate automated evidence from validation that requires a person.

## Related

[U.S. Web Design System](uswds.md), [UI Playbook](ui-playbook.md)
