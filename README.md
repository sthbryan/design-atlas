# Design Atlas

A curated wiki of reviewed references for websites and UI: galleries, component libraries, design systems and asset packs. Each page explains what a source is useful for and how it works with coding agents.

## Browse the atlas

- Start with a [topic hub](topics/), then open shortlisted [site pages](sites/) for details and reusable ideas.
- Use [`llms.txt`](llms.txt) or [`sites.json`](sites.json) to filter every site's metadata before reading pages. `agent: none` means no published integration; an agent can still browse the site.
- For visual work, ask the agent to inspect a few live examples in a browser before choosing a direction. Atlas pages are references, not visual proof of the current sites.

See [AGENTS.md](AGENTS.md) for the full reading workflow and [CONTRIBUTING.md](CONTRIBUTING.md) to add or update sources.

## Topics

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

## Agent skills

The [`skills/`](skills/) directory contains two installable skills in the open Agent Skills format:

- [`design-atlas`](skills/design-atlas/SKILL.md) finds reviewed sources and prepares reference briefs with licensing caveats.
- [`design-atlas-ui`](skills/design-atlas-ui/SKILL.md) uses live examples to guide, build or review a UI and check it with rendered evidence.

Install both with the [skills CLI](https://github.com/vercel-labs/skills) for any compatible agent. The CLI detects available agents; add `--agent <name>` to choose a target, or `--skill <name>` to install one skill:

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

The [VitePress site](site/home.md) uses the existing Markdown pages and serves this README at `/readme`. Its full site list and topic list are generated pages. Run the site locally with Bun:

```sh
bun install
bun run site:dev
bun run site:build
bun run site:preview
```

Bun 1.4.2 runs the scripts; Node 20 or later runs their underlying code. The dev server and preview bind to `127.0.0.1`. The build writes to the ignored `site/.vitepress/dist/` directory and checks links. Static assets live in `public/`; the visual identity is documented in [`site/DESIGN.md`](site/DESIGN.md) and validated by `bun run check`.

## Contributing

Follow [`CONTRIBUTING.md`](CONTRIBUTING.md) to add, update or remove a site. In short, copy [`TEMPLATE.md`](TEMPLATE.md) to `sites/<slug>.md`, fill in its frontmatter and seven sections, then run `bun run build` and `bun run check`. Generated indexes and related links are maintained by the build; don't edit them by hand.

## Licence

- Markdown content, including site pages, topic hubs, `site/DESIGN.md` and this README, is under [CC BY 4.0](LICENSE). Credit “Design Atlas contributors” and link to this repository when reusing it.
- Scripts and skills are under the [MIT licence](LICENSE-CODE). Each skill has its own `LICENSE`, because installers copy skill folders individually. Generated catalog references inside `skills/design-atlas/` remain CC BY 4.0.
- Site names, logos, trademarks, quotes and each reviewed site's content remain subject to their owners' rights and the site's own licence.
