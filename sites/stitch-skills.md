---
title: Stitch Skills
description: Google Labs' Stitch skills and source of the "Stitch format"; three DESIGN.md writers with different layouts.
url: https://github.com/google-labs-code/stitch-skills
type: agent-skill-collection
formats: agent skill collection · plugin marketplace (Codex, Claude Code, Cursor)
topics: [agent-skills, design-md, typography-and-styles]
verdict: useful
agent: [skill]
pricing: free
licence: free skills. Apache-2.0 (repo `LICENSE`). About 8.4k GitHub stars at review; on skills.sh `design-md` has 62.6k installs and `taste-design` 18.5k. Most skills need a Google Stitch account and its MCP server set up with your own credentials; the upload script sends a Stitch API key. The README says it is not an officially supported Google product.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [designmd, getdesign-md, designmd-store, impeccable, extract-design-system]
---
[← Atlas](../README.md) · Topics: [agent-skills](../topics/agent-skills.md), [design-md](../topics/design-md.md), [typography-and-styles](../topics/typography-and-styles.md)

# Stitch Skills

## What it is

Stitch Skills is Google Labs' set of agent skills for Stitch, Google's AI screen designer. It holds 16 skills in three plugins. `stitch-design` covers work inside Stitch: generate screens, extract a DESIGN.md from source code, snapshot a running app to static HTML, upload assets, and push a design system into a project. `stitch-build` turns Stitch screens into React, React Native, a Vite dashboard or a Remotion walkthrough video, and adds a general shadcn/ui skill. `stitch-utilities` holds the DESIGN.md writers (`design-md` and `taste-design`), a prompt enhancer, a `SITE.md` writer, and `stitch-loop`, which builds a multi-page site one page at a time. Several atlas tools say they follow the "Stitch format". These skills are the source of it, and they turn out to use three different layouts.

## When to open it

- When you use Stitch and want an agent to read and write your projects through its MCP server.
- When you want to see where the DESIGN.md convention came from, and how Google's own skills write one.
- When you want a DESIGN.md from an existing codebase without running the app (`extract-design-md`).

## Most useful

- **`design-md`**: reads a Stitch project's screens, HTML and theme, then writes five numbered sections: Visual Theme & Atmosphere, Color Palette & Roles, Typography Rules, Component Stylings, Layout Principles. It has no YAML block. Every colour gets an evocative name, a hex value and a role, and Tailwind values are rewritten as physical descriptions ("pill-shaped" rather than `rounded-full`).
- **`extract-design-md`**: reads stylesheets, Tailwind config and theme files for React, Vue, Svelte, Angular or plain CSS, and writes `.stitch/DESIGN.md`. YAML front matter (`name`, `colors`, `typography`, `rounded`, `spacing`) is mandatory. Its bundled example uses the Google-spec body (Brand & Style through Components), while its own template lists six numbered sections ending in notes for Stitch generation.
- **`taste-design`**: reads like a port of the Taste skill's anti-slop rules into a seven-section DESIGN.md that adds Motion & Interaction and a banned list. Its defaults are creativity 9, variance 8, motion 6 and density 5. The rules include at most one accent under 80% saturation, no Inter, no pure black, no centred hero once variance is above 4, no three equal cards, and no invented metrics.
- **`stitch-loop`** and **`site-md`**: a baton file plus a `SITE.md` "constitution" keep a multi-page build consistent across agent runs.

## Using it with agents

Install everything with `npx plugins add google-labs-code/stitch-skills --scope project --target claude-code` (or `--target cursor`), through the Codex marketplace (`codex plugin marketplace add google-labs-code/stitch-skills`), or pick skills with `npx skills add google-labs-code/stitch-skills`. OpenCode needs a manual copy, and skills named `stitch::…` must be renamed first. Set up the Stitch MCP server before anything else. The skills trigger on requests that name Stitch, a Stitch project ID or DESIGN.md. `extract-design-md` also triggers on "what does this app look like?". They produce DESIGN.md, `SITE.md` and component code in `.stitch/` or your source tree.

## Watch out for

- Project HTML and screenshots are downloaded from Stitch URLs, and uploads go to `stitch.googleapis.com` with your API key. Design data leaves your machine.
- The three DESIGN.md layouts in one repo don't match. Only `extract-design-md` writes YAML, so tools that expect the spec's front matter won't parse the other two.
- `taste-design` conflicts with other skills: it bans Inter and pure black while the `extract-design-md` example uses both, and it asks for looping micro-motion on every active component, against `frontend-design`'s advice to spend motion on one orchestrated moment.
- Skills depend on each other (manage-design-system hands off to design-md), so installing them one at a time can break a workflow.
- Tool names differ between agents (`web_fetch` against `webfetch`), and some skills pin `allowed-tools` to Stitch MCP prefixes.

## Reusable ideas

- Describe every colour as a name, a hex value and a job, and describe radius and shadows in words a designer would use.
- Keep a project "constitution" file (`SITE.md`) and a baton file, so each run of an agent loop knows what came before.
- Make structured front matter mandatory, and say that leaving it out means the skill was used wrongly.
- Read design intent from the source (theme files, CSS variables, comments) when the app can't be built.

## Related

[DESIGN.md](designmd.md), [getdesign.md](getdesign-md.md), [Design.md Store](designmd-store.md), [Impeccable](impeccable.md), [extract-design-system](extract-design-system.md)
