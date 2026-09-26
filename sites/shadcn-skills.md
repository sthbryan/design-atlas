---
title: Shadcn Labs Skills
description: "Six MIT skills: launch a shadcn registry, generate, audit and extend SVG icon sets, Tailwind-to-StyleX."
url: https://www.skills.sh/shadcn-labs/skills
type: agent-skill-collection
formats: agent skill collection
topics: [agent-skills, icons, components]
verdict: useful
agent: [skill]
pricing: free
licence: "free; MIT (repo `shadcn-labs/skills`, about 24 stars, last push 2026-09-24). skills.sh counted 133 installs in total at review: `tailwind-to-stylex` 49, `launch-shadcn-registry` 33, `mastra-file-agents` 18, and 11 each for the three icon skills."
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-labs, startercn, iconoir, shadcn-ui, anthropic-skills]
---
[← Atlas](../README.md) · Topics: [agent-skills](../topics/agent-skills.md), [icons](../topics/icons.md), [components](../topics/components.md)

# Shadcn Labs Skills

## What it is

This is the skills repo of Shadcn Labs, the group behind termcn, pdfcn and other shadcn-style registries. It holds six skills in four groups. `launch-shadcn-registry` checks a custom registry's `registry.json`, prepares pull requests to directories (the official shadcn list, registry.directory, awesome-shadcn-ui, free-for-dev, awesome-ai-devtools, shadcntemplates), and drafts launch posts for Reddit, X, Dev.to and Hacker News. The three icon skills make, audit and extend SVG icon sets against a fixed spec, using Python scripts that need only the standard library. `tailwind-to-stylex` moves Tailwind classes to StyleX. `mastra-file-agents` moves Mastra agents into one folder per agent. Only the first is about shadcn itself.

## When to open it

- When you have built a shadcn registry and want an agent to handle the tedious listing and announcement work.
- When a product needs original icons that look like one family, or an existing set has drifted and needs an audit.
- When you need to add icons to Lucide, Heroicons or Phosphor that match the originals.

## Most useful

- **icon-set-generator**: fixes stroke, grid, optical size and shared parts before drawing, then validates the batch and builds a preview page.
- **icon-set-audit**: reports drift, divergent repeated parts, near-duplicates and size outliers in priority order.
- **icon-set-extend**: infers the spec from existing files so new icons blend in.
- **launch-shadcn-registry**: a profile schema plus a five-phase checklist from preflight checks to post-launch follow-up.
- **tailwind-to-stylex**: resolves each utility to CSS before rewriting it as `stylex.create` styles.

## Using it with agents

Install everything with `npx skills add shadcn-labs/skills`, or pick one with `--skill <name>`. The skills follow the Agent Skills format, so they work in Claude Code, Cursor, Codex and other supporting agents. Each has a `SKILL.md`, reference files and an `evals` folder, and the icon and launch skills also ship scripts. The launch skill needs network access, `curl`, `git` and a logged-in `gh`, and it says to open pull requests only after the user approves.

## Watch out for

- Install counts are very low, so these have seen little outside testing.
- The launch skill opens PRs and drafts public posts. Keep a human check on anything it sends, and follow each directory's own submission rules.
- The Python scripts are large (the audit script is about 47 KB). Read them before running them on a big repo.
- The repo also holds internal helper skills under `.agents/` that are not part of the published set.

## Reusable ideas

- Freeze an icon style spec (grid, stroke, gaps, recurring parts) before drawing anything, then validate against it.
- Treat an icon library as a set of reused parts, so audits can find shapes that should match but don't.
- Turn a launch checklist into a data profile plus one step per target, so the same facts feed every directory.
- Make a migration skill resolve each utility to real CSS first, instead of mapping class names by pattern.

## Related

[Shadcn Labs](shadcn-labs.md), [startercn](startercn.md), [Iconoir](iconoir.md), [shadcn/ui](shadcn-ui.md), [Anthropic Skills](anthropic-skills.md)
