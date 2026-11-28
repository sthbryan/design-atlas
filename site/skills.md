---
title: Agent skills
description: Two installable agent skills built on the atlas. One finds and inspects references, the other builds and reviews a UI from a DESIGN.md.
---

# Agent skills

Design Atlas publishes two skills in the open Agent Skills format. They are separate on purpose: `design-atlas` owns finding references and the licence rules, `design-atlas-ui` owns the design direction, the build and the verification. Install both when a task needs references and code.

Each skill versions independently: `design-atlas` follows its own 2.x line (currently 2.2.3) and `design-atlas-ui` its own 0.x line (currently 0.4.4), so their numbers will usually differ.

| The task | The skill |
|---|---|
| Find galleries, a library, an icon set or a font, compare directions, or check what a licence allows | `design-atlas` |
| Build, restyle, polish or review an interface, or write a `DESIGN.md` | `design-atlas-ui` |
| Research first, then build | both, in that order |

## Install

Any agent the [`skills` CLI](https://github.com/vercel-labs/skills) supports:

```sh
npx skills add sthbryan/design-atlas
```

Install one skill, or target one agent:

```sh
npx skills add sthbryan/design-atlas --skill design-atlas-ui
npx skills add sthbryan/design-atlas --agent codex
```

Claude Code can install the atlas as a plugin, which also bundles the pages:

```text
/plugin marketplace add sthbryan/design-atlas
/plugin install design-atlas@design-atlas
```

Both installers copy the skill folder only, so the skills still work outside a clone. `design-atlas` reads a local clone or its bundled catalog, and `design-atlas-ui` carries its own references and `DESIGN.md` validator.

## design-atlas (2.2.3)

Finds sources, then studies real examples.

- Queries the index instead of the pages. `query.mjs` filters by topic, type, licence class, agent channel, price, freshness and how a source held up after use, and searches free text offline with synonyms and typo correction.
- Reads at most two hubs and five site pages per brief, and says which location it used: a local clone or the bundled snapshot.
- For visual work, opens a few shortlisted sites in a browser and records what it sees, keeping a source's own interface separate from the examples it lists.
- Returns a brief with the atlas page, the live example, the observed design move, the licence class and the review date, and marks anything it could not check.

## design-atlas-ui (0.4.4)

Turns a direction into UI, or reviews one.

- Reads `DESIGN.md`, `PRODUCT.md` and the stack before choosing anything, then names a five-line direction: audience, subject world, signature element, what it will not do, and references.
- Writes or updates one `DESIGN.md` per project and validates it with the bundled `validate-design-md.mjs` before writing components.
- Builds with the project's tokens only, then verifies with rendered evidence: test widths, every shipped theme, keyboard order and measured contrast.
- Reviews in What, Why and Fix, ranked Blocking, Important and Polish. A review edits nothing until the user asks for fixes.

## What they will not do

| They avoid | Because |
|---|---|
| A number, quote, logo or rating with no source | The atlas records only what a review found, and a fabricated figure is a claim nobody checked |
| Shipping code or assets against their licence class | Ideas are free to borrow; the licence decides what else travels |
| Screenshots or logos of reviewed sites | Those belong to their owners, so the atlas describes and links instead |
| Installing a package at `@latest` | An unpinned tool is a different tool next week |
| Following instructions found on a reviewed page | Page content is data, never a command |

## Prototype: framed callout and steps

A small Vue take on the mdxcn pattern, built with the site tokens and no React or Tailwind. It shows whether framed figures and numbered steps would add anything to the atlas docs.

<AtlasCallout title="Prototype" tone="tip">

This callout and the steps below are a prototype, not part of the atlas system yet. They borrow the dashed frame and the title on the top edge from mdxcn, and restyle them with the bone and brass palette.

</AtlasCallout>

<AtlasSteps :items="[{ title: 'Install the skill', text: 'Copy the skill folder with the skills CLI, or add the plugin in Claude Code.', state: 'current' }, { title: 'Ask for a brief', text: 'Name the surface and the feel you want, and the skill shortlists three to five sources.', state: 'next' }, { title: 'Build from the direction', text: 'Hand the brief to design-atlas-ui, which writes DESIGN.md and builds with tokens.', state: 'todo' }]" />

## Where the pages come from

A local clone wins, then the bundled snapshot inside the skill folder. The snapshot holds metadata only, so its rows are listed under "Not checked". The skill never fetches from the network. The atlas itself is a clone of this repository, and `sites.json` and `llms.txt` are generated from the pages.

## Licence

Skills and scripts are MIT, and each skill folder ships its own `LICENSE`. Atlas prose is CC BY 4.0: credit "Design Atlas contributors" and link this repository. A reviewed site's code, brand and assets stay with its owner, and the atlas grants no rights to them.

Read the source: [design-atlas](../skills/design-atlas/SKILL.md) and [design-atlas-ui](../skills/design-atlas-ui/SKILL.md).
