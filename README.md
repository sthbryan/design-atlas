# Design Atlas

A curated set of references for building websites and UI — galleries, component libraries, design systems and asset packs, each reviewed for what it's good for and how well it plugs into an AI coding agent. Written to be read by people and by agents alike.

## How to use

- Browse by topic (below) to find the sites relevant to what you're building right now.
- Open a single site page for its full picture: what it is, when to reach for it, and how to hand it to an agent.
- Copy a page's "Reusable ideas" straight into a design brief instead of re-deriving them from scratch.
- Point a coding agent at one site page, or at a whole topic hub, when you want it to work from curated references instead of guessing.
- Check "Agent access" in the sites table below before assuming a site exposes an MCP server, `llms.txt`, CLI, registry, API, copyable prompts or an agent skill; "none" means an agent has nothing to call.
- Agents can start from [llms.txt](llms.txt) or [sites.json](sites.json), which carry every page's metadata; [AGENTS.md](AGENTS.md) explains how to read and edit the atlas.
- Install the two agent skills (below) to let an agent pick references and build UI from the atlas for you.

## Skills

Two agent skills ship with the atlas in [`skills/`](skills). They use the open Agent Skills format, so they work in Claude Code and in other agents that read `SKILL.md`.

| Skill | What it does |
|---|---|
| [design-atlas](skills/design-atlas/SKILL.md) | Finds and shortlists reviewed references, filtered by topic, licence class, agent channel and verdict, and writes a cited brief with licence caveats. It reads a local clone first and falls back to a bundled catalog offline. |
| [design-atlas-ui](skills/design-atlas-ui/SKILL.md) | Sets a visual direction, records it in the project's DESIGN.md, then builds or reviews the UI with exact defaults for type, colour, layout, motion and accessibility, and checks it with rendered evidence. It makes no network calls of its own. |

How they relate: `design-atlas` owns references, briefs and the licence rules. `design-atlas-ui` owns the DESIGN.md workflow, the visual rules and verification, and asks `design-atlas` for references. Install both; each still works alone.

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

The repository is private for now. Until it is public, both install commands need GitHub access to it, and the raw GitHub fallback returns 404, so offline installs use the bundled catalog.

## Topics

<!-- atlas:topics:start -->
- [Inspiration](topics/inspiration.md) — galleries of real interfaces and sites to look at before designing your own.
- [Landing pages](topics/landing-pages.md) — galleries, section libraries, templates and skills for marketing and launch pages.
- [Navigation](topics/navigation.md) — navbars, menus and wayfinding patterns.
- [Footers](topics/footers.md) — footer structure, density and content patterns.
- [CTA](topics/cta.md) — calls-to-action: buttons, forms, modals and conversion copy.
- [Error pages](topics/error-pages.md) — 404s and other dead-end pages worth turning into a moment.
- [UX patterns](topics/ux-patterns.md) — principles, guidelines, checklists and pattern libraries for how interfaces should behave.
- [Components](topics/components.md) — component libraries, registries and design systems.
- [AI interfaces](topics/ai-interfaces.md) — chat and agent components, AI UX patterns and status visuals for AI products.
- [Documentation](topics/documentation.md) — how sites document components and style, for humans and agents.
- [Motion](topics/motion.md) — animation libraries and motion patterns.
- [3D and shaders](topics/3d-and-shaders.md) — WebGL and WebGPU shader libraries, playgrounds and 3D scene templates.
- [Typography and styles](topics/typography-and-styles.md) — type treatments and whole visual styles/design tokens.
- [Color](topics/color.md) — OKLCH pickers, palette and token generators, and contrast checkers.
- [DESIGN.md files](topics/design-md.md) — design systems as single markdown files for agents: libraries, generators and how their formats compare.
- [Assets](topics/assets.md) — icons, illustrations, sounds and social or store-listing visuals.
- [Icons](topics/icons.md) — outline, animated and 3D icon sets, and how to hand them to an agent.
- [Sound](topics/sound.md) — interface sound cues, synthesis libraries and sound-enabled components.
- [Agents and prompts](topics/agents-and-prompts.md) — sites built to be consumed directly by coding agents (MCP, llms.txt, CLIs, prompts).
- [Agent skills](topics/agent-skills.md) — installable skills and skill collections that give coding agents design, motion, accessibility and writing rules.
- [Data viz](topics/data-viz.md) — chart components, dashboard blocks and small data displays for product UI.
<!-- atlas:topics:end -->

## All sites

<!-- atlas:sites:start -->
| Site | Type | Topics | Verdict | Agent access | Licence |
|---|---|---|---|---|---|
| [Design DNA](sites/design-dna.md) | agent-skill | agent-skills, design-md, color, 3d-and-shaders | useful | skill | open-source-permissive |
| [Design Lab](sites/design-lab.md) | agent-skill | agent-skills, ux-patterns, components | useful | skill | open-source-permissive |
| [Design Motion Principles](sites/design-motion-principles.md) | agent-skill | agent-skills, motion | very-useful | skill | open-source-permissive |
| [design-mobile-apps (Sleek)](sites/design-mobile-apps.md) | agent-skill | agent-skills, components, icons | niche | api, skill | mixed |
| [extract-design-system](sites/extract-design-system.md) | agent-skill | agent-skills, design-md, color | useful | mcp, cli, skill | open-source-permissive |
| [Hallmark](sites/hallmark.md) | agent-skill | agent-skills, typography-and-styles, landing-pages, design-md | very-useful | skill | open-source-permissive |
| [Huashu Design](sites/huashu-design.md) | agent-skill | agent-skills, motion, typography-and-styles | useful | skill | open-source-permissive |
| [Impeccable](sites/impeccable.md) | agent-skill | agent-skills, design-md, ux-patterns | very-useful | llms-txt, cli, skill | open-source-permissive |
| [Interface Design](sites/interface-design.md) | agent-skill | agent-skills, components, typography-and-styles, ux-patterns | very-useful | skill | open-source-permissive |
| [LottieFiles Motion Design Skill](sites/lottiefiles-motion-design.md) | agent-skill | agent-skills, motion | useful | skill | open-source-permissive |
| [No AI Slop](sites/no-ai-slop.md) | agent-skill | agent-skills, documentation | useful | skill | open-source-permissive |
| [Stop Slop](sites/stop-slop.md) | agent-skill | agent-skills, documentation | useful | skill | open-source-permissive |
| [Superdesign](sites/superdesign-skill.md) | agent-skill | agent-skills, design-md, inspiration | useful | cli, skill | open-source-permissive |
| [Superfuture Design Review](sites/superfuture-design-review.md) | agent-skill | agent-skills, ux-patterns | niche | skill | open-source-permissive |
| [UI Taste by Uizze](sites/ui-taste.md) | agent-skill | agent-skills, ux-patterns, inspiration | niche | mcp, skill | open-source-permissive |
| [UI UX Pro Max](sites/ui-ux-pro-max.md) | agent-skill | agent-skills, design-md, typography-and-styles, ux-patterns | very-useful | cli, skill | open-source-permissive |
| [Vercel Web Design Guidelines](sites/vercel-web-design-guidelines.md) | agent-skill | agent-skills, ux-patterns | very-useful | skill | open-source-permissive |
| [visualize (display.dev)](sites/visualize.md) | agent-skill | agent-skills, design-md, documentation, typography-and-styles | very-useful | skill | open-source-permissive |
| [AccessLint Skills](sites/accesslint-skills.md) | agent-skill-collection | agent-skills, ux-patterns | useful | mcp, cli, skill | open-source-permissive |
| [Anthropic Design Plugin](sites/anthropic-design-plugin.md) | agent-skill-collection | agent-skills, ux-patterns, documentation | useful | skill | open-source-permissive |
| [Anthropic Skills](sites/anthropic-skills.md) | agent-skill-collection | agent-skills, typography-and-styles, landing-pages, color | very-useful | skill | open-source-permissive |
| [antislop-ui](sites/antislop-ui.md) | agent-skill-collection | agent-skills, ux-patterns, landing-pages | useful | skill | open-source-permissive |
| [Designer Skills](sites/designer-skills.md) | agent-skill-collection | agent-skills, ux-patterns, typography-and-styles, documentation | useful | skill | open-source-permissive |
| [Emil Kowalski's skills](sites/emil-kowalski-skills.md) | agent-skill-collection | agent-skills, motion, ux-patterns | very-useful | skill | open-source-permissive |
| [ibelick UI Skills](sites/ibelick-ui-skills.md) | agent-skill-collection | agent-skills, ux-patterns, motion, design-md | very-useful | mcp, cli, skill | open-source-permissive |
| [Jakub Krehel's skills](sites/jakub-krehel-skills.md) | agent-skill-collection | agent-skills, ux-patterns, typography-and-styles, color | very-useful | skill | open-source-permissive |
| [mblode Agent Skills](sites/mblode-agent-skills.md) | agent-skill-collection | agent-skills, ux-patterns, motion, typography-and-styles | very-useful | skill | open-source-permissive |
| [Shadcn Labs Skills](sites/shadcn-skills.md) | agent-skill-collection | agent-skills, icons, components | useful | skill | open-source-permissive |
| [Stitch Skills](sites/stitch-skills.md) | agent-skill-collection | agent-skills, design-md, typography-and-styles | useful | skill | open-source-permissive |
| [StyleSeed](sites/styleseed.md) | agent-skill-collection | agent-skills, design-md, color, ux-patterns | useful | skill | open-source-permissive |
| [Taste Skill](sites/taste-skill.md) | agent-skill-collection | agent-skills, landing-pages, typography-and-styles, motion | very-useful | skill | open-source-permissive |
| [Web Quality Skills](sites/addy-osmani-web-quality-skills.md) | agent-skill-collection | agent-skills, ux-patterns | very-useful | skill | open-source-permissive |
| [Wondel.ai Skills](sites/wondelai-skills.md) | agent-skill-collection | agent-skills, ux-patterns, typography-and-styles | useful | skill | open-source-permissive |
| [Aura](sites/aura.md) | ai-builder | agents-and-prompts, design-md, components, assets | useful | mcp | proprietary-paid |
| [Kombai](sites/kombai.md) | ai-builder | agents-and-prompts, inspiration, landing-pages | useful | mcp, llms-txt, skill | proprietary-paid |
| [make.design](sites/make-design.md) | ai-builder | landing-pages, inspiration, agents-and-prompts | niche | none | proprietary-paid |
| [Mascofast](sites/mascofast.md) | ai-builder | assets, motion, agents-and-prompts | niche | llms-txt | proprietary-paid |
| [Neuform](sites/neuform.md) | ai-builder | design-md, agents-and-prompts, inspiration, landing-pages | useful | prompts | proprietary-paid |
| [v0](sites/v0.md) | ai-builder | agents-and-prompts, components, landing-pages | very-useful | mcp, llms-txt, api | proprietary-paid |
| [Backgrounds Supply](sites/backgrounds-supply.md) | asset-library | assets, landing-pages, 3d-and-shaders | useful | llms-txt | proprietary-paid |
| [Circle Loaders](sites/circle-loaders.md) | asset-library | components, motion, assets | niche | none | not-stated |
| [Craftwork](sites/craftwork.md) | asset-library | assets, agents-and-prompts, typography-and-styles | very-useful | mcp, api, skill | proprietary-paid |
| [Icoon](sites/icoon.md) | asset-library | icons, assets | niche | none | proprietary-paid |
| [Kitbitz](sites/kitbitz.md) | asset-library | assets, components | useful | none | not-stated |
| [Lottie](sites/lottiefiles.md) | asset-library | motion, assets, agents-and-prompts | useful | mcp, llms-txt | mixed |
| [Poly Haven](sites/poly-haven.md) | asset-library | 3d-and-shaders, assets | very-useful | llms-txt, api | public-domain |
| [shieldcn](sites/shieldcn.md) | asset-library | assets, documentation, agents-and-prompts | useful | llms-txt, registry, skill | open-source-permissive |
| [Venust Backgrounds](sites/venust-backgrounds.md) | asset-library | assets, agents-and-prompts, landing-pages | very-useful | llms-txt, prompts | public-domain |
| [Typeface.fyi](sites/typeface-fyi.md) | browser-extension | typography-and-styles, inspiration | niche | none | proprietary-free |
| [TypeUI DESIGN.md Extractor](sites/design-md-chrome.md) | browser-extension | design-md, agents-and-prompts, typography-and-styles | useful | skill | open-source-permissive |
| [8bitcn](sites/8bitcn.md) | component-library | components, typography-and-styles, landing-pages | very-useful | registry | open-source-permissive |
| [Aceternity UI](sites/aceternity-ui.md) | component-library | components, motion, inspiration, landing-pages | very-useful | mcp | proprietary-paid |
| [Amicro](sites/amicro.md) | component-library | motion, components | useful | cli, registry | open-source-permissive |
| [Animated shadcn/ui](sites/animated-shadcn-ui.md) | component-library | components, motion | niche | cli | open-source-permissive |
| [Annnimate](sites/annnimate.md) | component-library | motion, components, agents-and-prompts | useful | mcp, llms-txt | proprietary-paid |
| [Base UI](sites/base-ui.md) | component-library | components, documentation, agents-and-prompts | very-useful | llms-txt | open-source-permissive |
| [Bencho](sites/bencho.md) | component-library | components, motion, inspiration | useful | prompts | open-source-permissive |
| [Butter Nav](sites/butter-nav.md) | component-library | navigation, motion, components | useful | registry, prompts | not-stated |
| [Canvas UI](sites/canvas-ui.md) | component-library | 3d-and-shaders, components, motion | very-useful | llms-txt, registry | source-available |
| [CSS Text Effects](sites/css-text-effects.md) | component-library | typography-and-styles, motion | useful | prompts | open-source-permissive |
| [devl](sites/devl.md) | component-library | components, ux-patterns, agents-and-prompts | useful | registry | not-stated |
| [Drawably](sites/drawably.md) | component-library | components, motion | useful | llms-txt | open-source-permissive |
| [Drei](sites/drei.md) | component-library | 3d-and-shaders, components | very-useful | mcp, llms-txt | open-source-permissive |
| [editorcn](sites/editorcn.md) | component-library | components, ux-patterns | useful | llms-txt, registry, api, skill | open-source-permissive |
| [emailcn](sites/emailcn.md) | component-library | components, typography-and-styles | useful | llms-txt, registry | open-source-permissive |
| [Evil Buttons](sites/evil-buttons.md) | component-library | components, cta, motion | niche | llms-txt, registry | open-source-permissive |
| [Evil Charts](sites/evil-charts.md) | component-library | data-viz, components, motion, agents-and-prompts | very-useful | mcp, llms-txt, registry, skill | open-source-permissive |
| [Fancy Components](sites/fancy-components.md) | component-library | components, motion, typography-and-styles | very-useful | llms-txt, registry | open-source-permissive |
| [Float UI](sites/float-ui.md) | component-library | components, landing-pages | niche | none | source-available |
| [Flowbase](sites/flowbase.md) | component-library | components, landing-pages, assets | niche | none | proprietary-paid |
| [Flowbite](sites/flowbite.md) | component-library | components, landing-pages, agents-and-prompts | very-useful | mcp, llms-txt | mixed |
| [Fluid Functionalism](sites/fluid-functionalism.md) | component-library | components, motion, ai-interfaces | very-useful | registry, prompts | open-source-permissive |
| [FlyonUI](sites/flyonui.md) | component-library | components, typography-and-styles, agents-and-prompts | useful | mcp | mixed |
| [Frameblox](sites/frameblox.md) | component-library | components, landing-pages | niche | none | proprietary-paid |
| [framecn](sites/framecn.md) | component-library | motion, components, 3d-and-shaders | niche | llms-txt, registry, api, skill | mixed |
| [Headless UI](sites/headless-ui.md) | component-library | components, ux-patterns | useful | none | open-source-permissive |
| [HeroUI](sites/heroui.md) | component-library | components, agents-and-prompts | very-useful | mcp, llms-txt, cli, api, skill | mixed |
| [HyperUI](sites/hyperui.md) | component-library | components, landing-pages | useful | none | open-source-permissive |
| [interior.dev](sites/interior-dev.md) | component-library | motion, components, ux-patterns, agents-and-prompts | very-useful | llms-txt, registry | open-source-permissive |
| [Lightswind](sites/lightswind.md) | component-library | components, motion, 3d-and-shaders, landing-pages | useful | mcp, llms-txt, cli, registry | mixed |
| [Magic UI](sites/magic-ui.md) | component-library | components, motion, cta | very-useful | registry | mixed |
| [mapcn](sites/mapcn.md) | component-library | components, agents-and-prompts | useful | registry, prompts | open-source-permissive |
| [Meraki UI](sites/meraki-ui.md) | component-library | components, landing-pages | useful | none | open-source-permissive |
| [MicroKit](sites/microkit.md) | component-library | components, motion | useful | none | open-source-permissive |
| [Motion Primitives](sites/motion-primitives.md) | component-library | motion, components, typography-and-styles | useful | cli | mixed |
| [ogimagecn](sites/ogimagecn.md) | component-library | components, assets | useful | llms-txt, registry, api, skill | open-source-permissive |
| [Oneko](sites/oneko.md) | component-library | motion, components | niche | llms-txt, registry, prompts | mixed |
| [pdfcn](sites/pdfcn.md) | component-library | components, typography-and-styles | useful | llms-txt, registry, api, prompts, skill | open-source-permissive |
| [Preline UI](sites/preline.md) | component-library | components, landing-pages, agents-and-prompts | very-useful | mcp, prompts, skill | mixed |
| [Prompt Kit](sites/prompt-kit.md) | component-library | components, ai-interfaces, agents-and-prompts | very-useful | llms-txt, registry | open-source-permissive |
| [Radix](sites/radix.md) | component-library | components, documentation, color, icons | very-useful | llms-txt | open-source-permissive |
| [Rare UI](sites/rareui.md) | component-library | components, motion, navigation | useful | llms-txt, registry | source-available |
| [React Bits](sites/reactbits.md) | component-library | components, motion, agents-and-prompts, 3d-and-shaders | very-useful | llms-txt | mixed |
| [Remocn](sites/remocn.md) | component-library | motion, components, agents-and-prompts | very-useful | llms-txt, registry, skill | mixed |
| [Ruru UI (stale)](sites/ruru-ui.md) | component-library | components, motion | niche | cli | open-source-permissive |
| [sensory-ui](sites/sensory-ui.md) | component-library | sound, components | useful | registry | open-source-permissive |
| [shadcn/ui](sites/shadcn-ui.md) | component-library | components, documentation, agents-and-prompts | very-useful | mcp, llms-txt, cli, registry, skill | open-source-permissive |
| [Spectrum UI](sites/spectrum-ui.md) | component-library | components, landing-pages, ai-interfaces | useful | mcp, registry | open-source-permissive |
| [SRCL](sites/srcl.md) | component-library | components, typography-and-styles, agents-and-prompts | very-useful | llms-txt, skill | open-source-permissive |
| [Syntax UI](sites/syntax-ui.md) | component-library | components, motion, landing-pages | niche | none | mixed |
| [TailGrids](sites/tailgrids.md) | component-library | components, landing-pages, design-md | useful | mcp, llms-txt, cli, registry | mixed |
| [termcn](sites/termcn.md) | component-library | components, agents-and-prompts, ai-interfaces | very-useful | llms-txt, registry, api, skill | open-source-permissive |
| [Transitions.dev](sites/transitions-dev.md) | component-library | motion, components, agents-and-prompts, ai-interfaces | very-useful | skill | mixed |
| [Tremor](sites/tremor.md) | component-library | data-viz, components, landing-pages | very-useful | none | open-source-permissive |
| [UI Layouts](sites/ui-layouts.md) | component-library | components, landing-pages, motion | useful | mcp, llms-txt, registry, prompts | mixed |
| [UIAble](sites/uiable.md) | component-library | components, documentation, agents-and-prompts | very-useful | none | mixed |
| [Velora UI](sites/velora-ui.md) | component-library | components, landing-pages, motion | useful | llms-txt, registry | open-source-permissive |
| [Vengeance UI](sites/vengeance-ui.md) | component-library | components, motion, landing-pages | useful | registry | open-source-permissive |
| [21st.dev](sites/21st-dev.md) | component-registry | components, agents-and-prompts, inspiration | very-useful | mcp, cli, api | not-stated |
| [agentcn](sites/agentcn.md) | component-registry | agents-and-prompts, ai-interfaces, design-md | niche | llms-txt, registry, api, skill | open-source-permissive |
| [Animate UI](sites/animate-ui.md) | component-registry | components, motion, icons | useful | llms-txt, registry | source-available |
| [Base CN](sites/base-cn.md) | component-registry | components, agents-and-prompts | niche | llms-txt, registry | open-source-permissive |
| [Bearnie](sites/bearnie.md) | component-registry | components, agents-and-prompts | useful | mcp, llms-txt, cli | open-source-permissive |
| [beUI](sites/beui.md) | component-registry | components, motion, ai-interfaces, data-viz | very-useful | mcp, llms-txt, registry, api, skill | mixed |
| [blocks.so](sites/blocks-so.md) | component-registry | components, ux-patterns, agents-and-prompts | useful | registry | open-source-permissive |
| [Componentry](sites/componentry.md) | component-registry | motion, components, 3d-and-shaders | useful | llms-txt, registry | open-source-permissive |
| [coss ui](sites/coss-ui.md) | component-registry | components, agents-and-prompts, ux-patterns | very-useful | llms-txt, registry, skill | mixed |
| [Cult UI](sites/cult-ui.md) | component-registry | components, motion, landing-pages | useful | registry | mixed |
| [Dither Kit](sites/dither-kit.md) | component-registry | components, typography-and-styles | useful | llms-txt, cli, registry | open-source-permissive |
| [Dot Matrix](sites/dot-matrix.md) | component-registry | components, motion | useful | registry | source-available |
| [Eldora UI](sites/eldora-ui.md) | component-registry | components, motion, landing-pages | useful | llms-txt, registry | open-source-permissive |
| [ForgeUI](sites/forgeui.md) | component-registry | components, motion, landing-pages | useful | registry, prompts | mixed |
| [Kibo UI](sites/kibo-ui.md) | component-registry | components, landing-pages, agents-and-prompts | very-useful | mcp, cli, registry | open-source-permissive |
| [Kokonut UI](sites/kokonut-ui.md) | component-registry | components, motion, ai-interfaces, landing-pages | very-useful | llms-txt, registry | mixed |
| [mcpcn](sites/mcpcn.md) | component-registry | components, ai-interfaces, agents-and-prompts | useful | llms-txt, registry, api, skill | open-source-permissive |
| [Odyssey UI](sites/odyssey-ui.md) | component-registry | components, motion | niche | llms-txt, registry | not-stated |
| [Orbkit](sites/orbkit.md) | component-registry | 3d-and-shaders, ai-interfaces, components | useful | llms-txt, registry, api, skill | mixed |
| [Re UI](sites/re-ui.md) | component-registry | components, landing-pages, agents-and-prompts | very-useful | mcp, llms-txt, registry, skill | mixed |
| [Shadcn Studio](sites/shadcn-studio.md) | component-registry | components, landing-pages, color, agents-and-prompts | useful | mcp, llms-txt, registry | mixed |
| [shadcnblocks](sites/shadcnblocks.md) | component-registry | components, landing-pages, agents-and-prompts | very-useful | registry | proprietary-paid |
| [shadercn](sites/shadercn.md) | component-registry | 3d-and-shaders, components, ai-interfaces | niche | llms-txt, registry, api, skill | mixed |
| [Skiper UI](sites/skiper-ui.md) | component-registry | components, motion | niche | registry | proprietary-paid |
| [Smooth UI](sites/smooth-ui.md) | component-registry | components, motion, ai-interfaces, agents-and-prompts | very-useful | llms-txt, cli, registry, api | open-source-permissive |
| [Sona UI](sites/sona-ui.md) | component-registry | components, motion, ux-patterns | useful | llms-txt, registry, api, skill | open-source-permissive |
| [Spell UI](sites/spell-ui.md) | component-registry | components, motion, typography-and-styles | useful | llms-txt, registry | open-source-permissive |
| [Tailark](sites/tailark.md) | component-registry | components, landing-pages | very-useful | registry, prompts | mixed |
| [Astryx](sites/astryx.md) | design-system | components, documentation | very-useful | cli | open-source-permissive |
| [Carbon Design System](sites/carbon-design-system.md) | design-system | components, icons, documentation, agents-and-prompts | very-useful | mcp, llms-txt, skill | open-source-permissive |
| [Kobra](sites/kobra.md) | design-system | components, agents-and-prompts, ai-interfaces | useful | llms-txt, api | proprietary-paid |
| [Are.na](sites/are-na.md) | design-workspace | inspiration, agents-and-prompts | very-useful | mcp, llms-txt, cli, api | proprietary-paid |
| [Cosmos](sites/cosmos.md) | design-workspace | inspiration, color | useful | none | proprietary-paid |
| [Efecto](sites/efecto.md) | design-workspace | agents-and-prompts, 3d-and-shaders, assets | useful | mcp, llms-txt, api, skill | mixed |
| [Figma](sites/figma.md) | design-workspace | components, agents-and-prompts, typography-and-styles | very-useful | mcp, llms-txt, cli, api, skill | proprietary-paid |
| [Framer](sites/framer.md) | design-workspace | landing-pages, motion, agents-and-prompts | very-useful | llms-txt, cli, api, skill | proprietary-paid |
| [OpenDesign](sites/open-design.md) | design-workspace | design-md, agents-and-prompts, typography-and-styles | very-useful | mcp, cli, skill | open-source-permissive |
| [Penpot](sites/penpot.md) | design-workspace | components, agents-and-prompts, typography-and-styles | very-useful | mcp, llms-txt | open-source-copyleft |
| [Pinterest](sites/pinterest.md) | design-workspace | inspiration, typography-and-styles | useful | api | proprietary-free |
| [Uiuno](sites/uiuno.md) | design-workspace | components, motion, agents-and-prompts | niche | registry | not-stated |
| [Curations Supply](sites/curations-supply.md) | directory | inspiration, assets | useful | none | proprietary-free |
| [DesignBookmark](sites/design-bookmark.md) | directory | inspiration, assets | niche | llms-txt | not-stated |
| [Designeer](sites/designeer.md) | directory | inspiration, components, assets | useful | llms-txt | not-stated |
| [Insposite](sites/insposite.md) | directory | inspiration, assets | niche | none | not-stated |
| [Shadcn Labs](sites/shadcn-labs.md) | directory | components, agents-and-prompts, documentation | useful | none | open-source-permissive |
| [Shoogle](sites/shoogle.md) | directory | components, agents-and-prompts, inspiration | useful | mcp, registry, skill | proprietary-free |
| [UI Skills](sites/ui-skills.md) | directory | agent-skills, design-md, motion, ux-patterns | very-useful | mcp, llms-txt, cli, skill | mixed |
| [Wall of Portfolios](sites/wall-of-portfolios.md) | directory | inspiration, typography-and-styles | useful | none | not-stated |
| [What Ships](sites/what-ships.md) | directory | motion, inspiration, agents-and-prompts | useful | llms-txt, api | open-source-permissive |
| [Devouring Details](sites/devouring-details.md) | documentation | motion, documentation, ux-patterns | very-useful | none | not-stated |
| [Morphrig](sites/morphrig.md) | documentation | motion, icons, documentation | useful | llms-txt | not-stated |
| [The Book of Shaders](sites/book-of-shaders.md) | documentation | 3d-and-shaders, documentation | very-useful | none | proprietary-free |
| [The Component Gallery](sites/component-gallery.md) | documentation | components, documentation | very-useful | none | not-stated |
| [Departure Mono](sites/departure-mono.md) | font-library | typography-and-styles, assets | very-useful | none | open-source-permissive |
| [Fontshare](sites/fontshare.md) | font-library | typography-and-styles, assets | very-useful | api | mixed |
| [Fontsource](sites/fontsource.md) | font-library | typography-and-styles, assets | very-useful | llms-txt, api, prompts | open-source-permissive |
| [Klim Type Foundry](sites/klim.md) | font-library | typography-and-styles, inspiration | useful | none | proprietary-paid |
| [Velvetyne](sites/velvetyne.md) | font-library | typography-and-styles, assets, inspiration | useful | none | mixed |
| [404s](sites/404s.md) | gallery | error-pages, inspiration | niche | llms-txt | not-stated |
| [60fps](sites/60fps.md) | gallery | inspiration, motion, agents-and-prompts | very-useful | mcp, llms-txt | proprietary-paid |
| [Appinspo](sites/appinspo.md) | gallery | inspiration, agents-and-prompts, design-md | useful | prompts | not-stated |
| [AppShot Gallery](sites/appshot-gallery.md) | gallery | inspiration, assets | niche | none | not-stated |
| [before.click](sites/before-click.md) | gallery | inspiration, ux-patterns, agent-skills | useful | skill | mixed |
| [Best Designs on X](sites/bestdesignsonx.md) | gallery | inspiration, typography-and-styles | useful | none | not-stated |
| [Best SaaS Web Designs](sites/best-saas-web-designs.md) | gallery | landing-pages, inspiration | useful | llms-txt | proprietary-free |
| [Browse.cool](sites/browse-cool.md) | gallery | inspiration, typography-and-styles, motion | niche | none | not-stated |
| [Collect UI](sites/collect-ui.md) | gallery | inspiration, components, motion | useful | none | not-stated |
| [CTA Gallery](sites/cta-gallery.md) | gallery | cta, inspiration | niche | none | not-stated |
| [Curated](sites/curated-design.md) | gallery | inspiration, landing-pages, typography-and-styles | very-useful | none | proprietary-paid |
| [Dark Mode Design](sites/dark-mode-design.md) | gallery | inspiration, typography-and-styles, color | niche | none | not-stated |
| [Design Spells](sites/design-spells.md) | gallery | inspiration, motion | useful | llms-txt | not-stated |
| [Designspiration](sites/designspiration.md) | gallery | inspiration, color | useful | none | proprietary-paid |
| [Detail (detail.design)](sites/detail-design.md) | gallery | ux-patterns, motion, inspiration, agents-and-prompts | useful | skill | mixed |
| [Details](sites/details.md) | gallery | inspiration, motion, landing-pages, agents-and-prompts | very-useful | mcp, llms-txt | proprietary-paid |
| [Folios.Gallery](sites/folios-gallery.md) | gallery | inspiration, typography-and-styles, motion | niche | none | not-stated |
| [Footer Design](sites/footer-design.md) | gallery | footers, inspiration | niche | none | not-stated |
| [Gradient Buttons](sites/gradient-buttons.md) | gallery | components, typography-and-styles | niche | none | not-stated |
| [Great Apps](sites/great-apps.md) | gallery | inspiration, ux-patterns | niche | none | not-stated |
| [Hover States](sites/hover-states.md) | gallery | inspiration, motion, navigation | useful | none | proprietary-free |
| [Icon Museum](sites/icon-museum.md) | gallery | icons, inspiration, color | useful | none | not-stated |
| [Inspora](sites/inspora.md) | gallery | inspiration, typography-and-styles | niche | llms-txt | not-stated |
| [Jessy In's Gallery](sites/jessy-in-gallery.md) | gallery | inspiration, ai-interfaces | niche | none | not-stated |
| [Kage](sites/kage.md) | gallery | inspiration, agents-and-prompts, components | very-useful | mcp, prompts | not-stated |
| [Lab01](sites/lab01.md) | gallery | inspiration, components, typography-and-styles | niche | none | not-stated |
| [Landbook](sites/land-book.md) | gallery | landing-pages, inspiration | useful | llms-txt | proprietary-paid |
| [Landdding](sites/landdding.md) | gallery | landing-pages, inspiration | niche | llms-txt | proprietary-paid |
| [Landing Love](sites/landing-love.md) | gallery | landing-pages, motion, inspiration | useful | llms-txt | not-stated |
| [Landingfolio](sites/landingfolio.md) | gallery | landing-pages, inspiration, components, agents-and-prompts | very-useful | mcp | proprietary-paid |
| [Lapa Ninja](sites/lapa-ninja.md) | gallery | landing-pages, inspiration, assets | useful | none | proprietary-paid |
| [Layers](sites/layers.md) | gallery | inspiration, ux-patterns | useful | none | proprietary-paid |
| [Loader Buttons](sites/loader-buttons.md) | gallery | components, cta, motion, 3d-and-shaders | niche | none | not-stated |
| [loadmo.re](sites/loadmore.md) | gallery | inspiration, typography-and-styles, motion | useful | none | proprietary-free |
| [Minimal Gallery](sites/minimal-gallery.md) | gallery | inspiration, typography-and-styles | useful | none | not-stated |
| [Mobbin](sites/mobbin.md) | gallery | inspiration, ux-patterns, agents-and-prompts | very-useful | mcp, llms-txt, api | proprietary-paid |
| [Motionimo](sites/motionimo.md) | gallery | motion, inspiration | niche | llms-txt | not-stated |
| [Navbar Gallery](sites/navbar-gallery.md) | gallery | navigation, inspiration | niche | llms-txt | not-stated |
| [Painting Loaders](sites/painterly.md) | gallery | motion, components, assets | niche | none | not-stated |
| [posts.design](sites/posts-design.md) | gallery | inspiration, assets, agents-and-prompts | useful | llms-txt, api | proprietary-free |
| [Rebrand Gallery](sites/rebrand-gallery.md) | gallery | inspiration, typography-and-styles | useful | none | proprietary-paid |
| [Recent](sites/recent-design.md) | gallery | inspiration, assets, agents-and-prompts | very-useful | skill | not-stated |
| [SaaS Landing Page](sites/saas-landing-page.md) | gallery | landing-pages, inspiration, typography-and-styles | useful | none | not-stated |
| [SaaSFrame](sites/saasframe.md) | gallery | landing-pages, ux-patterns, inspiration | useful | none | proprietary-paid |
| [Saaspo](sites/saaspo.md) | gallery | landing-pages, inspiration | useful | none | not-stated |
| [Sections.wtf](sites/sections-wtf.md) | gallery | inspiration, landing-pages, cta, footers | very-useful | none | not-stated |
| [SEESAW](sites/seesaw.md) | gallery | inspiration, landing-pages, typography-and-styles | useful | none | not-stated |
| [Supahero](sites/supahero.md) | gallery | inspiration, landing-pages, cta | niche | none | proprietary-free |
| [UI Labs](sites/uilabs.md) | gallery | motion, components, inspiration | niche | none | not-stated |
| [Uiverse](sites/uiverse.md) | gallery | components, inspiration | useful | none | not-stated |
| [UIWTF](sites/uiwtf.md) | gallery | inspiration, ux-patterns, navigation | niche | none | not-stated |
| [wwwtf.site](sites/wwwtf.md) | gallery | inspiration, 3d-and-shaders | niche | none | not-stated |
| [Design System Checklist](sites/design-system-checklist.md) | guidelines | components, documentation, ux-patterns | useful | none | not-stated |
| [Inclusive Components](sites/inclusive-components.md) | guidelines | components, ux-patterns, documentation | very-useful | none | not-stated |
| [Laws of UX](sites/laws-of-ux.md) | guidelines | ux-patterns, documentation, agents-and-prompts | very-useful | llms-txt | cc-noncommercial |
| [UI Playbook (stale)](sites/ui-playbook.md) | guidelines | components, ux-patterns, documentation | useful | none | open-source-permissive |
| [User Interface Wiki](sites/user-interface-wiki.md) | guidelines | motion, ux-patterns, sound, agents-and-prompts | very-useful | skill | open-source-permissive |
| [3dicons](sites/3dicons.md) | icon-library | icons, assets, components | useful | none | public-domain |
| [Animated Icons](sites/animated-icons.md) | icon-library | icons, assets, motion | useful | none | proprietary-paid |
| [Bootstrap Icons](sites/bootstrap-icons.md) | icon-library | icons, assets | very-useful | none | open-source-permissive |
| [Boxicons](sites/boxicons.md) | icon-library | icons, assets, agents-and-prompts | useful | cli, skill | mixed |
| [css.gg (stale)](sites/css-gg.md) | icon-library | icons, assets | niche | none | mixed |
| [Devicon](sites/devicon.md) | icon-library | icons, assets | useful | none | open-source-permissive |
| [Eva Icons (stale)](sites/eva-icons.md) | icon-library | icons, assets, motion | niche | none | open-source-permissive |
| [Feather (stale)](sites/feather.md) | icon-library | icons, assets | useful | none | open-source-permissive |
| [Heroicons (stale)](sites/heroicons.md) | icon-library | icons, assets, components | useful | none | open-source-permissive |
| [Heroicons Animated](sites/heroicons-animated.md) | icon-library | icons, motion, components | useful | llms-txt, registry | open-source-permissive |
| [Hugeicons](sites/hugeicons.md) | icon-library | icons, assets, agents-and-prompts | very-useful | mcp, skill | mixed |
| [Iconify](sites/iconify.md) | icon-library | icons, assets, agents-and-prompts | very-useful | api | mixed |
| [Iconoir](sites/iconoir.md) | icon-library | icons, assets, components | very-useful | none | open-source-permissive |
| [Icons.download](sites/icons-download.md) | icon-library | icons, assets | niche | none | proprietary-free |
| [icons0](sites/icons0.md) | icon-library | icons, assets, agents-and-prompts | useful | mcp, registry | mixed |
| [Iconsax](sites/iconsax.md) | icon-library | icons, assets, agents-and-prompts | useful | mcp, cli | proprietary-paid |
| [Ionicons](sites/ionicons.md) | icon-library | icons, assets, components | useful | none | open-source-permissive |
| [Lucide](sites/lucide.md) | icon-library | icons, assets, components | very-useful | llms-txt | open-source-permissive |
| [Lucide Animated](sites/lucide-animated.md) | icon-library | icons, motion, agents-and-prompts | very-useful | mcp, llms-txt, registry, skill | mixed |
| [Material Symbols](sites/material-symbols.md) | icon-library | icons, assets, typography-and-styles | very-useful | none | open-source-permissive |
| [MX Icons](sites/mx-icons.md) | icon-library | icons, assets | niche | none | open-source-permissive |
| [Phosphor](sites/phosphor.md) | icon-library | icons, assets, components | very-useful | none | open-source-permissive |
| [Reicon](sites/reicon.md) | icon-library | icons, assets, agents-and-prompts | useful | mcp, llms-txt, cli | open-source-permissive |
| [Remix Icon](sites/remix-icon.md) | icon-library | icons, assets, components | useful | mcp | source-available |
| [Rune Icons](sites/rune-icons.md) | icon-library | icons, assets | niche | llms-txt | mixed |
| [Simple Icons](sites/simple-icons.md) | icon-library | icons, assets | very-useful | none | mixed |
| [Tabler Icons](sites/tabler-icons.md) | icon-library | icons, assets, components | very-useful | llms-txt | open-source-permissive |
| [theSVG](sites/thesvg.md) | icon-library | icons, assets, agents-and-prompts | very-useful | mcp, llms-txt, cli, skill | mixed |
| [useAnimations](sites/useanimations.md) | icon-library | icons, assets, motion | niche | none | mixed |
| [@web-kits/audio](sites/web-kits-audio.md) | js-library | sound, agents-and-prompts | very-useful | llms-txt, cli, skill | open-source-permissive |
| [Anime.js](sites/animejs.md) | js-library | motion, components, documentation | useful | none | open-source-permissive |
| [Cuelume](sites/cuelume.md) | js-library | sound, agents-and-prompts | very-useful | llms-txt | open-source-permissive |
| [glimm](sites/glimm.md) | js-library | motion, 3d-and-shaders | niche | prompts | open-source-permissive |
| [Gradient Spin](sites/gradient-spin.md) | js-library | components, motion, color | niche | none | open-source-permissive |
| [GSAP](sites/gsap.md) | js-library | motion, agents-and-prompts | very-useful | llms-txt, skill | proprietary-free |
| [Kinetics](sites/kinetics.md) | js-library | motion, components | useful | prompts | open-source-permissive |
| [Libraries.dev: Thinking orbs](sites/libraries-dev-orbs.md) | js-library | motion, components, agents-and-prompts, ai-interfaces | useful | prompts, skill | mixed |
| [Liquid Glass](sites/liquid-glass.md) | js-library | motion, components | niche | none | not-stated |
| [loading.dev](sites/loading-dev.md) | js-library | components, motion | useful | llms-txt | open-source-permissive |
| [morphicons](sites/morphicons.md) | js-library | icons, motion, components | very-useful | llms-txt | open-source-permissive |
| [Motion](sites/motion-dev.md) | js-library | motion, agents-and-prompts, components | very-useful | mcp, llms-txt, skill | mixed |
| [NumberFlow](sites/number-flow.md) | js-library | motion, components, typography-and-styles | very-useful | none | open-source-permissive |
| [Paper Shaders](sites/paper-shaders.md) | js-library | 3d-and-shaders, motion, components | very-useful | llms-txt | open-source-permissive |
| [React Three Fiber](sites/react-three-fiber.md) | js-library | 3d-and-shaders, components | very-useful | mcp, llms-txt | open-source-permissive |
| [Rolling Number](sites/rolling-number.md) | js-library | motion, components, typography-and-styles | useful | llms-txt | open-source-permissive |
| [Scritto](sites/scritto.md) | js-library | motion, typography-and-styles | useful | none | open-source-permissive |
| [slot-text](sites/textmotion.md) | js-library | motion, typography-and-styles, components | niche | llms-txt | open-source-permissive |
| [Theatre.js (stale)](sites/theatrejs.md) | js-library | motion, 3d-and-shaders | niche | none | mixed |
| [Three.js](sites/threejs.md) | js-library | 3d-and-shaders, motion | very-useful | llms-txt | open-source-permissive |
| [Torph](sites/torph.md) | js-library | motion, typography-and-styles, components | useful | none | open-source-permissive |
| [Good UI](sites/good-ui.md) | pattern-library | cta, ux-patterns, landing-pages | useful | none | proprietary-paid |
| [The Shape of AI](sites/shape-of-ai.md) | pattern-library | ai-interfaces, ux-patterns, inspiration | very-useful | none | cc-noncommercial |
| [Imageory](sites/imageory.md) | prompt-library | assets, agents-and-prompts | niche | prompts | not-stated |
| [Lafys](sites/lafys.md) | prompt-library | agents-and-prompts, landing-pages, 3d-and-shaders | niche | llms-txt, prompts | proprietary-paid |
| [VibePrompts](sites/vibeprompts.md) | prompt-library | agents-and-prompts, components, cta | useful | prompts | not-stated |
| [VibeUI](sites/vibeui.md) | prompt-library | agents-and-prompts, components, cta, landing-pages | useful | prompts | not-stated |
| [soundcn](sites/soundcn.md) | sound-library | sound, assets, components | useful | registry | mixed |
| [UI SFX](sites/uisfx.md) | sound-library | sound, assets, agents-and-prompts | useful | llms-txt, prompts | open-source-permissive |
| [daisyUI](sites/daisyui.md) | style-library | components, typography-and-styles, color, agents-and-prompts | very-useful | mcp, llms-txt, skill | mixed |
| [DESIGN.md](sites/designmd.md) | style-library | design-md, documentation, agents-and-prompts, typography-and-styles | very-useful | mcp, cli | not-stated |
| [Design.md Store](sites/designmd-store.md) | style-library | design-md, typography-and-styles, documentation | useful | llms-txt | proprietary-paid |
| [getdesign.md](sites/getdesign-md.md) | style-library | design-md, agents-and-prompts, typography-and-styles | very-useful | cli | mixed |
| [Refero Styles](sites/refero-styles.md) | style-library | design-md, documentation, agents-and-prompts, typography-and-styles | very-useful | mcp | not-stated |
| [TypeUI](sites/typeui.md) | style-library | design-md, agents-and-prompts, typography-and-styles | useful | mcp, cli, skill | mixed |
| [GetLayers](sites/getlayers.md) | template-library | 3d-and-shaders, landing-pages, motion, agents-and-prompts | useful | mcp, llms-txt, prompts, skill | proprietary-paid |
| [Scrolltide](sites/scrolltide.md) | template-library | motion, agents-and-prompts, inspiration, landing-pages | useful | prompts | proprietary-paid |
| [startercn](sites/startercn.md) | template-library | components, documentation, agents-and-prompts | useful | llms-txt, api, skill | open-source-permissive |
| [Agentation](sites/agentation.md) | tool | agents-and-prompts, ai-interfaces | very-useful | mcp, skill | source-available |
| [Amacro](sites/amacro.md) | tool | motion, components | niche | none | open-source-permissive |
| [Anim8](sites/anim8.md) | tool | motion, assets, agents-and-prompts | useful | mcp, cli | proprietary-paid |
| [ASCII Studio](sites/ascii-studio.md) | tool | assets, motion | useful | none | not-stated |
| [Blender](sites/blender.md) | tool | 3d-and-shaders, assets, agents-and-prompts | very-useful | mcp | open-source-copyleft |
| [Color.review](sites/color-review.md) | tool | color, typography-and-styles | useful | none | not-stated |
| [compute.toys](sites/compute-toys.md) | tool | 3d-and-shaders, inspiration | niche | none | mixed |
| [design.dev](sites/design-dev.md) | tool | agents-and-prompts, design-md, components | useful | llms-txt, prompts, skill | proprietary-free |
| [DesignMD (designmd.me)](sites/designmd-me.md) | tool | design-md, agents-and-prompts, typography-and-styles | useful | llms-txt, cli, skill | mixed |
| [DesignMD.cc](sites/designmd-cc.md) | tool | design-md, typography-and-styles, agents-and-prompts | very-useful | cli, api | mixed |
| [designmd.supply](sites/designmd-supply.md) | tool | design-md, agents-and-prompts, typography-and-styles | useful | none | mixed |
| [DialKit](sites/dialkit.md) | tool | motion, agents-and-prompts, documentation | very-useful | llms-txt, prompts | open-source-permissive |
| [DotForge](sites/dotforge.md) | tool | assets, motion, typography-and-styles | useful | none | not-stated |
| [Easing Wizard](sites/easing-wizard.md) | tool | motion, agents-and-prompts | very-useful | mcp, api, skill | source-available |
| [Fffuel](sites/fffuel.md) | tool | assets, color | useful | none | proprietary-free |
| [gltf.report](sites/gltf-report.md) | tool | 3d-and-shaders, assets | useful | cli | mixed |
| [Huetone (stale)](sites/huetone.md) | tool | color, typography-and-styles | useful | none | open-source-permissive |
| [Hyperbrowser DESIGNMD](sites/hyperbrowser-design-md.md) | tool | design-md, typography-and-styles, agents-and-prompts | niche | api | not-stated |
| [Icon Foundry](sites/icon-foundry.md) | tool | icons, assets | niche | none | mixed |
| [Inkword](sites/inkword.md) | tool | assets, inspiration | niche | llms-txt | proprietary-paid |
| [OKLCH](sites/oklch.md) | tool | color, typography-and-styles | very-useful | none | open-source-permissive |
| [OpenMotion](sites/openmotion.md) | tool | motion, agents-and-prompts | niche | none | not-stated |
| [Playgrnd](sites/playgrnd.md) | tool | assets, motion | useful | none | not-stated |
| [Ramps](sites/ramps.md) | tool | color, typography-and-styles, agents-and-prompts | very-useful | llms-txt, api, prompts | open-source-permissive |
| [Rive](sites/rive.md) | tool | motion, assets, agents-and-prompts | very-useful | mcp, llms-txt, cli | mixed |
| [Screan](sites/screan.md) | tool | assets, landing-pages | useful | none | open-source-permissive |
| [Screenshot to Code](sites/screenshot-to-code.md) | tool | agents-and-prompts, components | useful | none | mixed |
| [Shaderfrog](sites/shaderfrog.md) | tool | 3d-and-shaders, inspiration | niche | none | mixed |
| [Spline](sites/spline.md) | tool | 3d-and-shaders, motion, agents-and-prompts | very-useful | mcp, llms-txt | proprietary-paid |
| [Tabbied](sites/tabbied.md) | tool | assets, components, agents-and-prompts | very-useful | mcp, llms-txt, cli | open-source-permissive |
| [Tooooools](sites/tooooools.md) | tool | assets, typography-and-styles | useful | none | proprietary-free |
| [ui.camera](sites/ui-camera.md) | tool | assets, 3d-and-shaders, motion | useful | none | proprietary-paid |
| [Utopia](sites/utopia.md) | tool | typography-and-styles, landing-pages | very-useful | none | mixed |
| [Vessa](sites/vessa.md) | tool | design-md, agents-and-prompts, typography-and-styles, motion | useful | mcp, llms-txt | not-stated |
| [Wakamai Fondue](sites/wakamai-fondue.md) | tool | typography-and-styles, assets | useful | cli | open-source-permissive |
<!-- atlas:sites:end -->

## Adding a site

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add, update or remove a site, the frontmatter fields and their allowed values, and the review and writing rules. In short: copy `TEMPLATE.md` to `sites/<slug>.md`, fill in the frontmatter and sections, then run `npm run build` and `npm run check`. The table above, the hub lists, `llms.txt` and `sites.json` are generated, so don't edit them by hand.

## Licence

- Content (the site pages, topic hubs, this README and the other Markdown files) is licensed under [CC BY 4.0](LICENSE). Credit "Design Atlas contributors" and link back to this repository when you reuse it.
- Code (`scripts/`) and the agent skills in `skills/` are licensed under the [MIT licence](LICENSE-CODE). Each skill folder carries its own `LICENSE` file, because installers copy only that folder. The generated `catalog.json` and `hub-map.md` inside `skills/design-atlas/references/` are atlas content under CC BY 4.0.
- Site names, logos and trademarks belong to their owners. Short quotes stay with their original authors, and the licence of every reviewed site still applies to that site's own code, assets and text.
