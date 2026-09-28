# Design Atlas

A curated set of references for building websites and UI — galleries, component libraries, design systems and asset packs, each reviewed for what it's good for and how well it plugs into an AI coding agent. Written to be read by people and by agents alike.

## How to use

- Browse by topic to find the sites relevant to what you're building right now.
- Open a single site page for its full picture: what it is, when to reach for it, and how to hand it to an agent.
- Use a page's "Reusable ideas" to narrow the search, then inspect real examples before choosing a visual direction.
- Point a coding agent at one site page or topic hub. For visual work, have it open a few individual sites in its browser, inspect desktop and narrow screenshots, and adapt the useful design moves to your project.
- Check the `agent` field before assuming a site exposes an MCP server, `llms.txt`, CLI, registry, API, copyable prompts or an agent skill. `[]` means no such integration; the agent may still inspect the public site in a browser.
- Start an agent from [llms.txt](llms.txt) or [sites.json](sites.json), which carry every page's metadata. [AGENTS.md](AGENTS.md) explains how to read and edit the atlas.

## What's in the repository

| Path | What it holds |
|---|---|
| [`sites/`](sites) | One reviewed page per site, with YAML frontmatter and seven fixed sections |
| [`topics/`](topics) | Topic hubs: a "Start here" shortlist, every source tagged with that topic, then patterns and pitfalls across them |
| [`llms.txt`](llms.txt) | One line per site with its filterable fields, for agents that read text |
| [`sites.json`](sites.json) | The same metadata as JSON, for agents that read structured data |
| [`skills/`](skills) | Two installable agent skills built on the atlas |
| [`site/DESIGN.md`](site/DESIGN.md) | The atlas website's own visual identity, as a DESIGN.md file |
| [`design-md/`](design-md) | A library of original DESIGN.md files to copy into your own projects |
| [`scripts/`](scripts) | `build.mjs`, which generates every index and validates the DESIGN.md files, and the tests |
| [`TEMPLATE.md`](TEMPLATE.md) | The frontmatter fields and sections every site page uses |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How sites are added, reviewed and removed, and the writing rules |
| [`AGENTS.md`](AGENTS.md) | How coding agents should read and edit this repository |

## Where to start

The hubs are organised by what you are trying to build, not by category:

| If you are working on | Open |
|---|---|
| The overall look of a site or product | [Inspiration](topics/inspiration.md), [Typography and styles](topics/typography-and-styles.md) |
| A launch or marketing page | [Landing pages](topics/landing-pages.md), [CTA](topics/cta.md) |
| Components, or a design system of your own | [Components](topics/components.md), [Documentation](topics/documentation.md) |
| Motion, or a page that has to scroll well | [Motion](topics/motion.md), [3D and shaders](topics/3d-and-shaders.md) |
| Icons, typefaces, illustration or sound | [Icons](topics/icons.md), [Assets](topics/assets.md), [Sound](topics/sound.md) |
| How a screen should behave | [UX patterns](topics/ux-patterns.md), [AI interfaces](topics/ai-interfaces.md), [Navigation](topics/navigation.md), [Footers](topics/footers.md), [Error pages](topics/error-pages.md) |
| Colour and design tokens | [Color](topics/color.md), [DESIGN.md files](topics/design-md.md) |
| Charts or dashboards | [Data viz](topics/data-viz.md) |
| Making an agent behave like a designer | [Agent skills](topics/agent-skills.md), [Agents and prompts](topics/agents-and-prompts.md) |

## Skills

Two agent skills ship with the atlas in [`skills/`](skills). They use the open Agent Skills format, so they work in Claude Code and in other agents that read `SKILL.md`.

| Skill | What it does |
|---|---|
| [design-atlas](skills/design-atlas/SKILL.md) | Shortlists reviewed sources and, for visual requests, opens individual examples in a browser before writing a brief with observed design moves and licence caveats. The atlas index works offline. |
| [design-atlas-ui](skills/design-atlas-ui/SKILL.md) | Studies live examples when setting a new visual direction, records the adapted decisions in the project's DESIGN.md, then builds or reviews the UI and checks the result with rendered evidence. |

How they relate: `design-atlas` owns references, briefs and the licence rules. `design-atlas-ui` owns the DESIGN.md workflow, the visual rules and verification, and asks `design-atlas` for references. Install both; each still works alone.

For example, a request for a brutalist landing page should lead from the atlas to a style gallery, then to a few actual sites. The agent should inspect their layouts and interactions in a browser, record the example URLs and screenshots it used, and explain which design decisions suit your own content. If no browser is available, it must mark visual claims as unverified.

Install both skills for any agent the [skills CLI](https://github.com/vercel-labs/skills) supports, or one of them with `--skill`:

```sh
npx skills add sthbryan/design-atlas
npx skills add sthbryan/design-atlas --skill design-atlas
```

In Claude Code, install them as a plugin. The skills then run as `/design-atlas:design-atlas` and `/design-atlas:design-atlas-ui`:

```text
/plugin marketplace add sthbryan/design-atlas
/plugin install design-atlas@design-atlas
```

A plugin install carries the whole atlas, so `design-atlas` reads the site pages directly. The skills CLI copies only the skill folder, so `design-atlas` then uses raw GitHub or its bundled catalog, which `npm run build` regenerates from the same data as `sites.json`.

## DESIGN.md files

The atlas writes its own DESIGN.md files, in the format the `design-atlas-ui` skill reads: exact tokens for light and dark, type, spacing, motion and components, with the reasons behind them and every contrast pair computed. [site/DESIGN.md](site/DESIGN.md) is the identity for the atlas website and the reference example. [`design-md/`](design-md/README.md) holds the style library, with its index, the licence (CC BY 4.0, credit line included) and how to copy a file into your project. `npm run check` validates every one of them, and `node scripts/design-md.mjs path/to/DESIGN.md` checks any file against the same format. The `design-atlas-ui` skill ships the same validator, so an installed skill can check a project's DESIGN.md without the atlas.

## How the indexes work

`npm run build` generates `llms.txt`, `sites.json`, the hub source lists, each page's breadcrumb and "Related" line, the three reference files inside `skills/design-atlas/references/`, and the copy of the DESIGN.md validator inside `skills/design-atlas-ui/scripts/`. Nothing generated is edited by hand, and `npm run check` fails if any of it is stale.

The indexes are meant to be filtered, never read whole. A full read of `llms.txt` costs tens of thousands of tokens and `sites.json` several times that, while a filtered query costs a few hundred:

```sh
# sites tagged with motion, that an agent can actually call
grep -E 'topics: [^;]*(motion|3d-and-shaders)' llms.txt | grep -v 'agent: none'

# permissive licences, with an MCP server
jq -r '.sites[] | select(.licence_class=="open-source-permissive" and (.agent|index("mcp"))) | .path' sites.json
```

## Adding a site

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add, update or remove a site, the frontmatter fields and their allowed values, and the review and writing rules. In short: copy `TEMPLATE.md` to `sites/<slug>.md`, fill in the frontmatter and sections, then run `npm run build` and `npm run check`. The hub source lists, `llms.txt` and `sites.json` are generated, so don't edit them by hand.

## Licence

- Content (the site pages, topic hubs, the DESIGN.md files, this README and the other Markdown files) is licensed under [CC BY 4.0](LICENSE). Credit "Design Atlas contributors" and link back to this repository when you reuse it.
- Code (`scripts/`) and the agent skills in `skills/` are licensed under the [MIT licence](LICENSE-CODE). Each skill folder carries its own `LICENSE` file, because installers copy only that folder. The generated `catalog.json`, `hub-map.md` and `search-index.json` inside `skills/design-atlas/references/` are atlas content under CC BY 4.0.
- Site names, logos and trademarks belong to their owners. Short quotes stay with their original authors, and the licence of every reviewed site still applies to that site's own code, assets and text.
