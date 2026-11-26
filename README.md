# Design Atlas

**Find the reference, borrow the pattern, build your own design.**

Design Atlas is a curated wiki of reviewed references for websites and UI: galleries, component libraries, design systems, icon sets, fonts and creative tools. Each entry says what the source is good for, how it works with coding agents, and what its licence allows. The atlas exists so an agent can study a few real designs, name the patterns worth borrowing, and turn them into a direction for something new.

[Website](https://atlas.justcallmebryan.com/) · [Agent skills](site/skills.md) · [Contributing](CONTRIBUTING.md) · [License](LICENSE)

## Why

Agents guess interfaces from screenshots. The atlas replaces the guess with reviewed material: a verdict, licence class, agent channels and review date on every source, topic hubs that shortlist the best entry points, exported `DESIGN.md` style files that describe how a look is built, and machine-readable indexes that an agent can filter before reading anything.

Inspiration is the normal case. Borrowing structure, hierarchy, rhythm, type scale, spacing, colour roles and motion timing needs no permission. Licence only becomes a filter when the user will paste someone's code, assets or fonts into a product.

## Browse the atlas

Start with a topic hub, then open the shortlisted site pages. Use the indexes to filter before reading:

```sh
grep 'topics: [^;]*motion' llms.txt
jq '.sites[] | select(.licence_class == "open-source-permissive") | .path' sites.json
node skills/design-atlas/scripts/query.mjs --search "editorial portfolio with oversized serif" --type gallery,website
```

`agent: none` means no published integration; an agent can still browse the site. For visual work, inspect a few live examples in a browser before choosing a direction. Atlas pages record what was reviewed; the live site is the evidence.

The `styles/` folder holds a curated set of exported `DESIGN.md` files with their source URLs, indexed by `styles/index.json`. The full catalogue of 1,343 styles is indexed inside the `design-atlas` skill at `skills/design-atlas/references/styles-index.json`, so the skill works with no corpus on disk.

| Looking for | Start with |
|---|---|
| Site or product inspiration | [Inspiration](topics/inspiration.md), [Typography and styles](topics/typography-and-styles.md) |
| Marketing pages | [Landing pages](topics/landing-pages.md), [CTA](topics/cta.md) |
| Components and documentation | [Components](topics/components.md), [Documentation](topics/documentation.md) |
| Motion and 3D | [Motion](topics/motion.md), [3D and shaders](topics/3d-and-shaders.md) |
| Icons, type, illustration and sound | [Icons](topics/icons.md), [Assets](topics/assets.md), [Sound](topics/sound.md) |
| UX and screen behavior | [UX patterns](topics/ux-patterns.md), [AI interfaces](topics/ai-interfaces.md), [Navigation](topics/navigation.md), [Footers](topics/footers.md), [Error pages](topics/error-pages.md) |
| Color and tokens | [Color](topics/color.md), [DESIGN.md files](topics/design-md.md) |
| Charts and dashboards | [Data viz](topics/data-viz.md) |
| Agent workflows | [Agent skills](topics/agent-skills.md), [Agents and prompts](topics/agents-and-prompts.md) |

See [AGENTS.md](AGENTS.md) for the full reading workflow.

## Agent skills

Two installable skills in the open Agent Skills format:

- [`design-atlas`](skills/design-atlas/SKILL.md) (2.0.1) studies real designs and exported style files and turns three to five of them into one visual direction. It queries the index, reads hubs, inspects live examples, pulls the style files for the shortlist and writes a brief with a five-line direction. Licence is a footnote, not a gate.
- [`design-atlas-ui`](skills/design-atlas-ui/SKILL.md) (0.4.0) builds and reviews UI from that direction: it writes a short-form `DESIGN.md` by default, builds with tokens only, and verifies with rendered evidence.

Install both with the [skills CLI](https://github.com/vercel-labs/skills) for any compatible agent. Add `--agent <name>` to choose a target, or `--skill <name>` to install one skill:

```sh
npx skills add sthbryan/design-atlas
npx skills add sthbryan/design-atlas --agent codex
```

Claude Code can also install the atlas as a plugin from its marketplace:

```text
/plugin marketplace add sthbryan/design-atlas
/plugin install design-atlas@design-atlas
```

The plugin includes the atlas pages. The skills CLI installs the skill folders without the full wiki, so `design-atlas` uses raw GitHub or its bundled catalog when the atlas is not present locally.

## Website

The [VitePress site](site/home.md) uses the existing Markdown pages and serves this README at `/readme`. The site follows the system theme automatically, with no switch. Run it locally with Bun:

```sh
bun install
bun run site:dev
bun run site:build
bun run site:preview
```

Bun 1.4.2 runs the scripts; Node 20 or later runs their underlying code. The dev server and preview bind to `127.0.0.1`. The build writes to the ignored `site/.vitepress/dist/` directory and checks links. Static assets live in `public/`; the visual identity is documented in [`site/DESIGN.md`](site/DESIGN.md) and validated by `bun run check`.

## Development

```sh
bun install
bun run build     # regenerate the indexes from the pages
bun run check     # build check plus tests, link checks and DESIGN.md validation
bun run evals     # validate eval definitions and smoke checks, with and without the skill
bun run site:build
```

A weekly workflow fetches every listed `url`, writes `url-health.json` (the report behind `query.mjs --link`) and opens a pull request with it; run `bun run check:urls` to refresh it yourself.

## Contributing

Follow [`CONTRIBUTING.md`](CONTRIBUTING.md) to add, update or remove a site. In short, copy [`TEMPLATE.md`](TEMPLATE.md) to `sites/<slug>.md`, fill in its frontmatter and seven sections, then run `bun run build` and `bun run check`. Generated indexes and related links are maintained by the build; don't edit them by hand.

## Licence

- Markdown content, including site pages, topic hubs, `site/DESIGN.md` and this README, is under [CC BY 4.0](LICENSE). Credit “Design Atlas contributors” and link to this repository when reusing it.
- Scripts and skills are under the [MIT licence](LICENSE-CODE). Each skill has its own `LICENSE`, because installers copy skill folders individually. Generated catalog references inside `skills/design-atlas/` remain CC BY 4.0.
- Site names, logos, trademarks, quotes and each reviewed site's content remain subject to their owners' rights and the site's own licence.
