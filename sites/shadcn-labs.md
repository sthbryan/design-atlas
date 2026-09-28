---
title: Shadcn Labs
description: "Index of the independent Shadcn Labs registries: termcn, pdfcn, emailcn, ogimagecn, shadercn and more."
url: https://www.shadcn-labs.com
type: directory
formats: open-source organisation · hub of shadcn-style registries
topics: [components, agents-and-prompts, documentation]
verdict: useful
agent: []
pricing: free
licence: free. The project repos under the `shadcn-labs` GitHub organisation are MIT (the "awesome" agent lists are CC0-1.0). Sponsorship slots are offered at $499 a month.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [startercn, shadcn-skills, termcn, pdfcn, emailcn, ogimagecn, framecn, agentcn, mcpcn, editorcn, shadercn]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [documentation](../topics/documentation.md)

# Shadcn Labs

## What it is

Shadcn Labs is an independent group, based in Mumbai, that builds open-source registries applying the shadcn/ui "copy the source" model to areas beyond everyday web components. It was founded by Aniket Pawar, and Abdullah Mukadam maintains editorcn. The home page lists the projects: termcn (terminal UIs), framecn (video), ogimagecn (Open Graph images), agentcn (agent recipes), mcpcn (MCP/ChatGPT app UI), emailcn, pdfcn, editorcn (rich text), shadercn, a StyleX port of shadcn called shadcn-cssinjs, the startercn registry template and a skills repo. The GitHub organisation was created in April 2026 and had 24 public repos at review. pdfcn (about 2.2k stars) and termcn (about 1.2k) are the largest. The site says it is not affiliated with or endorsed by shadcn.

## When to open it

When you need a shadcn-style component set for something other than a web page, such as email, PDF, terminal, video or OG images. This is the index that links them all. It is also useful for tracking one team's releases across a dozen related registries.

## Most useful

- **Project list**: one line per registry, each naming the underlying engine (Ink, Satori, React Email, Tiptap, TypeGPU and others).
- **startercn**: the group's public template for starting a registry, with docs and agent files included.
- **skills**: agent skills for launching a registry, plus icon-set and styling-migration skills.
- **Open issues page**: gathers issues from every project (143 at review), with good-first-issue labels for new contributors.
- **Community links**: Discord, Reddit, X and Bluesky.

## Using it with agents

The hub page has no `llms.txt` (404) and no agent tooling of its own. The value is in the projects. Each one is a shadcn-compatible registry that you install with `npx shadcn add`, and several publish their own agent docs. The skills repo installs with `npx skills add shadcn-labs/skills`.

## Watch out for

- The projects are young (all started in 2026) and differ a lot in maturity. Several have only tens to low hundreds of stars.
- The name looks official but is not; do not treat these as shadcn/ui first-party packages.
- Some projects wrap third-party engines with their own licences or paid tiers (framecn, for example, runs on Editframe, which is free only for very small organisations). Check each engine's terms as well as the MIT wrapper.

## Reusable ideas

- Take a proven distribution model (registry plus CLI) into new areas one project at a time, with the same naming pattern.
- Publish a registry template, so docs, landing pages and agent files can look the same across projects.
- Name the underlying engine next to each project, so people know what they are really depending on.
- Collect open issues across repos on one page to make contributing easier.

## Related

[startercn](startercn.md), [Shadcn Labs Skills](shadcn-skills.md), [termcn](termcn.md), [pdfcn](pdfcn.md), [emailcn](emailcn.md), [ogimagecn](ogimagecn.md), [framecn](framecn.md), [agentcn](agentcn.md), [mcpcn](mcpcn.md), [editorcn](editorcn.md), [shadercn](shadercn.md)
