---
title: AI UX Playground
description: A practical AI-interface reference with named patterns, live interaction demos, product teardowns, and agent skills.
url: https://aiuxplayground.com/
type: pattern-library
formats: AI UX pattern library · interactive examples · product teardowns · prompts · agent skills · llms.txt
topics: [ai-interfaces, ux-patterns, agent-skills]
verdict: very-useful
agent: [llms-txt, skill]
pricing: free
licence: Free to browse without an account. No site-wide licence for its written material, screenshots, patterns, or demo code was stated at review; individual skills may have their own source licences.
licence_class: not-stated
reviewed: 2026-09-26
status: active
related: [anthropic-design-plugin, accesslint-skills, ui-ux-pro-max]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [ux-patterns](../topics/ux-patterns.md), [agent-skills](../topics/agent-skills.md)

# AI UX Playground

## What it is

AI UX Playground is a reference for designing interfaces around chat, generative tools, and agent actions. Its pattern pages combine a concise use case, interactive demo, state and failure guidance, and examples from shipped products. The site also collects comparative teardowns, frameworks, prompts, workflows, and agent skills.

## When to open it

Open [Patterns](https://aiuxplayground.com/patterns/) when designing a specific AI interaction and you need to see its controls and edge states in context. The [Human in the loop demo](https://aiuxplayground.com/pattern/human-in-the-loop/) is a good starting example: its approval card shows the message, audience size, reason for the gate, and edit, reject, and send actions together. Use the [teardowns](https://aiuxplayground.com/teardowns) to compare how real products handle tasks such as composer controls, citations, or confirmation before an action.

## Most useful

- Pattern pages include runnable UI examples, states, rules, anti-patterns, and references to related product teardowns.
- The interface makes a useful distinction between recurring patterns and walkthroughs of particular shipped products.
- Topics span agent permissions and approval, chat input and output, onboarding, voice, memory, and generated UI, so the catalog can be approached by the interaction problem.

## Using it with agents

The [llms.txt](https://aiuxplayground.com/llms.txt) maps the site's primary sections and stable example URLs. The [skills catalog](https://aiuxplayground.com/skills) offers downloadable `SKILL.md` workflows and explains installation; source ownership and licences vary by skill, so inspect each source before reusing its contents. Pattern pages also include a copyable implementation prompt for coding agents, which can be used as a brief after checking the visible demo and its edge cases.

## Watch out for

- The patterns are design references, not a substitute for testing with a product's users, risk model, and actual capabilities.
- Product screenshots and behaviours can change. Check the teardown's update date and open the live product before treating a detail as current.
- The site is free to read, but that does not grant a blanket right to republish its screenshots, prose, demo code, or third-party skill files.

## Reusable ideas

- Show the full consequence of an AI action in the approval surface: the action, target, content, and impact should be inspectable before confirmation.
- Model an interaction as states and transitions, including edit, cancellation, failure, and recovery, rather than polishing only its happy path.
- Pair each pattern with both a working demonstration and a real product example so teams can compare a design rule with a shipped implementation.

## Related

[Anthropic Design Plugin](anthropic-design-plugin.md), [AccessLint Skills](accesslint-skills.md), [UI UX Pro Max](ui-ux-pro-max.md)
