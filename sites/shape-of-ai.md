---
title: The Shape of AI
description: Emily Campbell's 57 AI UX patterns in six groups, each with trade-offs and real product examples; CC BY-NC-SA.
url: https://www.shapeof.ai
type: pattern-library
formats: pattern library (AI UX)
topics: [ai-interfaces, ux-patterns, inspiration]
verdict: very-useful
agent: []
pricing: free
licence: free to read; the footer marks the content CC BY-NC-SA (share with credit, non-commercial, same licence). Free newsletter and Slack community.
licence_class: cc-noncommercial
reviewed: 2026-09-25
status: active
related: [prompt-kit, component-gallery, mcpcn, agentcn]
---
[← Atlas](../README.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [ux-patterns](../topics/ux-patterns.md), [inspiration](../topics/inspiration.md)

# The Shape of AI

## What it is

The Shape of AI is a catalogue of interaction patterns for AI features, curated and written by designer Emily Campbell. It holds 57 patterns in six groups: Wayfinders (getting a first prompt started), Prompt actions (what users ask the AI to do), Tuners (refining context and inputs), Governors (human oversight), Trust builders (honesty about data and limits) and Identifiers (how the AI presents itself). Each pattern page has a description, the forms it takes, design considerations, related patterns and annotated screenshots from real products such as ChatGPT, Perplexity, Notion, Granola, Lovable and v0. The site is built on Webflow. A "UI Library" with hundreds more real-world examples is advertised as coming soon.

## When to open it

At the start of designing any AI feature, before picking components: to name the pattern you need, see how shipping products handle it, and check the trade-offs. It is also a good checklist when reviewing an assistant or agent UI for missing oversight and trust features.

## Most useful

- **Governors**: Action plan, Stream of Thought, Controls, Verification, Branches, Draft mode, Cost estimates and Memory, covering how people stay in charge of agentic work.
- **Trust builders**: Caveat, Consent, Data ownership, Disclosure, Footprints, Incognito mode and Watermark.
- **Wayfinders**: Initial CTA, Suggestions, Templates, Example gallery, Randomize and Follow up for the blank-prompt problem.
- **Identifiers**: Avatar, Color, Iconography, Name and Personality, useful when deciding how visibly "AI" a feature should look.
- **Cross-links**: every pattern names the related ones (for example Citations with Summary and Footprints), which makes it easy to design a whole flow.

## Using it with agents

There is no `llms.txt`, API or MCP, and no downloadable data. Pattern pages are plain server-rendered HTML, so you can paste a page's link or text into an agent as design guidance. Keep the non-commercial licence in mind if you store its text in a shared prompt library.

## Watch out for

- CC BY-NC-SA rules out reusing the text or screenshots in commercial material and requires the same licence on derivatives; write your own guidance from it rather than copying.
- The screenshots show other companies' products and will date quickly as those products change.
- It describes patterns only; there is no code, and no component library is attached.
- The footer copyright reads 2025, so check individual pages for how recent the examples are.

## Reusable ideas

- Show the plan before acting, then keep plan, execution log and evidence as three separate, linked views.
- Treat each agent step as a visible state: queued, running, waiting for approval, failed, retried, done.
- Match how much reasoning you show to the task: little for quick chat, full traces for long or costly jobs.
- Point citations at the exact passage or timestamp, show title and site to help scanning, and say clearly when a source is missing.
- Give the AI a consistent identifier (name, colour, icon) so users always know which content it produced.

## Related

[Prompt Kit](prompt-kit.md), [The Component Gallery](component-gallery.md), [mcpcn](mcpcn.md), [agentcn](agentcn.md)
