---
title: Design Atlas
description: Reviewed design references for building websites and interfaces, organized around the work you need to do.
pageClass: atlas-home
aside: false
---

<div class="atlas-home-intro">
  <h1>Design references for the work in front of you</h1>
  <p>Design Atlas is a reviewed guide to websites, interface patterns, component libraries and creative tools. Find a useful reference, understand its tradeoffs, then inspect the live work before you borrow an idea.</p>
</div>

<div class="atlas-home-paths">
  <a class="atlas-home-path" href="/topics/">
    <strong>Browse by topic</strong>
    <span>Start from the kind of page, system or interaction you are building.</span>
  </a>
  <a class="atlas-home-path" href="/sites/">
    <strong>Search all sites</strong>
    <span>Filter reviewed references by topic, verdict, agent channel or review date.</span>
  </a>
</div>

## Choose a starting point

<ul class="atlas-home-guide">
  <li><a href="/topics/inspiration">Explore visual directions</a><span>Galleries and live sites to study before setting a style.</span></li>
  <li><a href="/topics/landing-pages">Build a launch or marketing page</a><span>Page structures, examples and calls to action.</span></li>
  <li><a href="/topics/components">Shape an interface or design system</a><span>Component libraries, patterns and implementation details.</span></li>
  <li><a href="/topics/agent-skills">Give a coding agent a design workflow</a><span>Skills and tools for research, implementation and review.</span></li>
</ul>

## Install the agent skills

Design Atlas includes two skills: `design-atlas` finds references and `design-atlas-ui` turns them into a design direction and working interface.

Install both with `npx skills` for any [supported coding agent](https://github.com/vercel-labs/skills):

```sh
npx skills add sthbryan/design-atlas
```

Use `--agent codex` to target Codex, or `--skill design-atlas` to install only the reference skill. Claude Code can also use its plugin marketplace:

```text
/plugin marketplace add sthbryan/design-atlas
/plugin install design-atlas@design-atlas
```

[Read how the skills work](../README.md#agent-skills).

## Use a reference well

Open a site page to check its verdict, licence and agent channels before using it. For visual work, visit a few individual sites and inspect their current pages; the atlas records what was reviewed, but the live site is the evidence.

Find the full [README](../README.md), [contribution guide](../CONTRIBUTING.md) and website [design system](DESIGN.md). Agents can start with the machine-readable [llms.txt](https://github.com/sthbryan/design-atlas/blob/main/llms.txt) or [sites.json](https://github.com/sthbryan/design-atlas/blob/main/sites.json).
