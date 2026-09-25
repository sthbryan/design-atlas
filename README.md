# Design Atlas

A curated set of references for building websites and UI — galleries, component libraries, design systems and asset packs, each reviewed for what it's good for and how well it plugs into an AI coding agent. Written to be read by people and by agents alike.

## How to use

- Browse by topic (below) to find the sites relevant to what you're building right now.
- Open a single site page for its full picture: what it is, when to reach for it, and how to hand it to an agent.
- Copy a page's "Reusable ideas" straight into a design brief instead of re-deriving them from scratch.
- Point a coding agent at one site page, or at a whole topic hub, when you want it to work from curated references instead of guessing.
- Check "Agent-ready" in the sites table below before assuming a site exposes an MCP server, CLI, or a copyable prompt.

## Topics

- [Inspiration](topics/inspiration.md) — galleries of real interfaces and sites to look at before designing your own.
- [Navigation](topics/navigation.md) — navbars, menus and wayfinding patterns.
- [Footers](topics/footers.md) — footer structure, density and content patterns.
- [CTA](topics/cta.md) — calls-to-action: buttons, forms, modals and conversion copy.
- [Error pages](topics/error-pages.md) — 404s and other dead-end pages worth turning into a moment.
- [Components](topics/components.md) — component libraries, registries and design systems.
- [Documentation](topics/documentation.md) — how sites document components and style, for humans and agents.
- [Motion](topics/motion.md) — animation libraries and motion patterns.
- [Typography and styles](topics/typography-and-styles.md) — type treatments and whole visual styles/design tokens.
- [Assets](topics/assets.md) — icons, illustrations and store-listing visuals.
- [Agents and prompts](topics/agents-and-prompts.md) — sites built to be consumed directly by coding agents (MCP, llms.txt, CLIs, prompts).

## All sites

| Site | Type | Topics | Verdict | Agent-ready |
|---|---|---|---|---|
| [3dicons](sites/3dicons.md) | Asset library | assets, components | useful | No |
| [Circle Loaders](sites/circle-loaders.md) | Asset library | components, motion, assets | niche | No |
| [Kitbitz](sites/kitbitz.md) | Asset library | assets, components | useful | No |
| [Uiverse](sites/uiverse.md) | Component gallery | components, inspiration | useful | No |
| [Aceternity UI](sites/aceternity-ui.md) | Component library | components, motion, inspiration | very useful | Yes |
| [CSS Text Effects](sites/css-text-effects.md) | Component library | typography-and-styles, motion | useful | Yes |
| [Magic UI](sites/magic-ui.md) | Component library | components, motion, cta | very useful | Yes |
| [mapcn](sites/mapcn.md) | Component library | components, agents-and-prompts | useful | Yes |
| [MicroKit](sites/microkit.md) | Component library | components, motion | useful | No |
| [Motion Primitives](sites/motion-primitives.md) | Component library | motion, components, typography-and-styles | useful | Yes |
| [React Bits](sites/reactbits.md) | Component library | components, motion, agents-and-prompts | very useful | Yes |
| [shadcn/ui](sites/shadcn-ui.md) | Component library | components, documentation, agents-and-prompts | very useful | Yes |
| [UIAble](sites/uiable.md) | Component library | components, documentation, agents-and-prompts | very useful | No |
| [21st.dev](sites/21st-dev.md) | Component registry | components, agents-and-prompts, inspiration | very useful | Yes |
| [Astryx](sites/astryx.md) | Design system | components, documentation | very useful | Yes |
| [Kobra](sites/kobra.md) | Design system | components, agents-and-prompts | useful | Yes |
| [Designeer](sites/designeer.md) | Directory | inspiration, components, assets | useful | No |
| [The Component Gallery](sites/component-gallery.md) | Documentation | components, documentation | very useful | No |
| [Gradient Buttons](sites/gradient-buttons.md) | Gallery | components, typography-and-styles | niche | No |
| [404s](sites/404s.md) | Inspiration gallery | error-pages, inspiration | niche | No |
| [AppShot Gallery](sites/appshot-gallery.md) | Inspiration gallery | inspiration, assets | niche | No |
| [CTA Gallery](sites/cta-gallery.md) | Inspiration gallery | cta, inspiration | niche | No |
| [Footer Design](sites/footer-design.md) | Inspiration gallery | footers, inspiration | niche | No |
| [Kage](sites/kage.md) | Inspiration gallery | inspiration, agents-and-prompts, components | very useful | Yes |
| [Minimal Gallery](sites/minimal-gallery.md) | Inspiration gallery | inspiration, typography-and-styles | useful | No |
| [Navbar Gallery](sites/navbar-gallery.md) | Inspiration gallery | navigation, inspiration | niche | No |
| [Anime.js](sites/animejs.md) | JS library | motion, components, documentation | useful | No |
| [Kinetics](sites/kinetics.md) | JS library | motion, components | useful | Yes |
| [Liquid Glass](sites/liquid-glass.md) | JS library | motion, components | niche | No |
| [VibePrompts](sites/vibeprompts.md) | Prompt library | agents-and-prompts, components, cta | useful | Yes |
| [DESIGN.md](sites/designmd.md) | Style library | documentation, agents-and-prompts, typography-and-styles | very useful | Yes |
| [Refero Styles](sites/refero-styles.md) | Style library | documentation, agents-and-prompts, typography-and-styles | very useful | Yes |
| [Scrolltide](sites/scrolltide.md) | Template library | motion, agents-and-prompts, inspiration | useful | Yes |

## Adding a site

1. Copy `TEMPLATE.md` to `sites/<slug>.md` and fill it in.
2. Add a breadcrumb line at the top linking back to `../README.md` and to the relevant `../topics/<slug>.md` hubs.
3. Add a row to the "All sites" table above, and link the page from every topic hub it belongs to (its "Start here" or "All sources" list).
4. Keep facts verifiable (pricing, licence, stated numbers) and write ideas in your own words — no copied prose. Note the licence explicitly whenever it restricts reuse.
