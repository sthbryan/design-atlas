[← Atlas](../README.md)

# Components

Component libraries, registries and design systems for building UI — from single copy-paste snippets to full production design systems.

## Start here

- [shadcn/ui](../sites/shadcn-ui.md) — the de-facto foundation other libraries in this atlas build on top of; copy-the-code model, agent-ready.
- [The Component Gallery](../sites/component-gallery.md) — compare how dozens of mature design systems name and structure the same component before designing your own.
- [Astryx](../sites/astryx.md) — a comprehensive production system with strong accessibility hooks and a sophisticated table component.
- [React Bits](../sites/reactbits.md) — hundreds of animated components with an `llms.txt` index for agents.

## All sources

- [21st.dev](../sites/21st-dev.md) — community registry of 12,000+ React/Tailwind components with an MCP server.
- [3dicons](../sites/3dicons.md) — 1,500+ CC0 3D icons, also usable as decorative UI elements.
- [Aceternity UI](../sites/aceternity-ui.md) — 200+ landing-page components and effects (React, Tailwind, Framer Motion).
- [Anime.js](../sites/animejs.md) — JS animation engine often used to bring components to life.
- [Astryx](../sites/astryx.md) — Meta's React design system with rich form controls and a plugin-based table.
- [Aura](../sites/aura.md) — AI landing-page builder whose public component and template catalogue exports as plain HTML and Tailwind.
- [Circle Loaders](../sites/circle-loaders.md) — 24 standalone SVG loading spinners.
- [Collect UI](../sites/collect-ui.md) — inspiration filed by UI element (dropdown, date picker, OTP input, sidebar) across 150+ categories.
- [The Component Gallery](../sites/component-gallery.md) — reference aggregator of 60 components across 95 design systems.
- [Designeer](../sites/designeer.md) — directory that indexes headless, pre-styled and motion-focused component libraries.
- [Gradient Buttons](../sites/gradient-buttons.md) — a gallery of copy-paste CSS gradient buttons.
- [Iconoir](../sites/iconoir.md) — 1,671 MIT icons as tree-shakeable React, Vue and React Native components with a shared provider.
- [Kage](../sites/kage.md) — inspiration turned into agent-ready prompts, browsable by component.
- [Kinetics](../sites/kinetics.md) — 153 spring-physics interaction effects in CSS, React and prompt form.
- [Kitbitz](../sites/kitbitz.md) — 2,000+ hand-drawn illustrations usable as component-adjacent assets.
- [Kobra](../sites/kobra.md) — a component system purpose-built for AI/agent product interfaces.
- [Libraries.dev: Thinking orbs](../sites/libraries-dev-orbs.md) — MIT React loading orbs with nine AI activity states, for chat and agent UIs.
- [Liquid Glass](../sites/liquid-glass.md) — a DOM-manipulation tool for refractive "liquid glass" visual effects.
- [Magic UI](../sites/magic-ui.md) — 150+ animated components positioned as a shadcn/ui companion.
- [mapcn](../sites/mapcn.md) — map components distributed as a shadcn/ui registry.
- [MicroKit](../sites/microkit.md) — 49 React microinteractions ready to copy and adapt.
- [Motion Primitives](../sites/motion-primitives.md) — isolated, installable motion and text-effect components.
- [Rare UI](../sites/rareui.md) — about 20 unusual animated React components (sidebars, OTP input, AI orbs) installed through the shadcn CLI.
- [React Bits](../sites/reactbits.md) — a large catalog of animated React components (GSAP, three.js, Framer Motion).
- [Screenshot to Code](../sites/screenshot-to-code.md) — MIT tool that turns a screenshot, recording or description into a first-pass HTML, React or Vue component.
- [shadcn/ui](../sites/shadcn-ui.md) — the foundation for a design system, copied into the repo, with an MCP registry.
- [UIAble](../sites/uiable.md) — 790+ components, 390+ blocks and templates built on shadcn/ui and Base UI.
- [Uiverse](../sites/uiverse.md) — community gallery of standalone CSS/Tailwind UI snippets.
- [VibePrompts](../sites/vibeprompts.md) — prompts that generate components instead of distributing their code.
- [VibeUI](../sites/vibeui.md) — 92 layout-only prompts across 15 section types, to generate components that match an attached style screenshot.

## Patterns worth reusing

- Copy code into the repo instead of installing a closed package, so the component stays fully editable (shadcn/ui, mapcn).
- Compare how several mature design systems name and structure the same component before fixing your own API (The Component Gallery).
- Split a catalog into components (atoms), blocks (full sections) and templates (whole pages), each with its own level of "already assembled" (UIAble).
- Extend an established registry model (like shadcn's) into a specific domain, such as maps, instead of only generic UI (mapcn).
- Offer install at multiple depths — copy-paste, npm, CLI — so developers pick their own level of control (Aceternity UI).
- Build agent-aware pieces (plan cards, citations, diffs) directly into the catalog for AI product interfaces (Kobra, Astryx).
- Use hook-based plugin extension (sort, select, resize, tree) for complex components like tables instead of a growing prop list (Astryx).
- Add a command palette to navigate a large catalog rather than relying on categories alone (UIAble).
- Design small and large variants of a component separately rather than scaling one drawing down (Libraries.dev: Thinking orbs).
- Publish an `llms.txt` that lists each component with its install command, source link and dependencies, so an agent can pick and install the right piece (Rare UI).
- Let a generator render and screenshot its own output, then compare it with the target and fix the differences (Screenshot to Code).

## Pitfalls

- Copied-code libraries don't update automatically — you have to re-copy or manually merge changes later (shadcn/ui, mapcn).
- Heavier animation dependencies (Framer Motion, GSAP, three.js) add real bundle weight if many effects are used at once (Aceternity UI, React Bits, UIAble).
- Community-submitted catalogs vary widely in accessibility and maintenance quality — check provenance before adopting (Uiverse, community galleries generally).
- Some libraries carry restrictive licences (Commons Clause, proprietary tiers) — treat them as ideas and reference implementations, not code to repackage (React Bits, Kobra, Rare UI).
- Generated components are written for the stack you pick, not your existing components and tokens, so expect to restructure them (Screenshot to Code).
- Small catalogues can pull in several extra dependencies per component; check the list before installing (Rare UI).

## Related topics

- [Motion](motion.md)
- [Documentation](documentation.md)
- [Agents and prompts](agents-and-prompts.md)
- [Typography and styles](typography-and-styles.md)
- [Icons](icons.md)
