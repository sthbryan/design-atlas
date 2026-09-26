# Hub map

A snapshot of every hub, generated with `catalog.json` (latest review 2026-09-25): its scope, its "Start here" picks and its adjacent hubs. Read it to choose hubs without opening them, and to widen a thin hub. When a live hub is reachable, the live hub wins.

A hub marked "none yet" has no curated picks. Query the index for its topic, then read the adjacent hubs.

| Hub | Scope | Start here | Adjacent hubs |
|---|---|---|---|
| `inspiration` | galleries of real interfaces and sites to look at before designing your own. | `kage`, `recent-design`, `designeer`, `curated-design`, `21st-dev` | `components`, `motion`, `navigation`, `footers`, `cta`, `design-md`, `landing-pages`, `color`, `3d-and-shaders` |
| `landing-pages` | galleries, section libraries, templates and skills for marketing and launch pages. | `sections-wtf`, `curated-design`, `details`, `hallmark`, `good-ui` | `inspiration`, `cta`, `footers`, `navigation`, `motion`, `3d-and-shaders` |
| `navigation` | navbars, menus and wayfinding patterns. | `navbar-gallery` | `inspiration`, `footers`, `cta`, `components`, `motion`, `landing-pages` |
| `footers` | footer structure, density and content patterns. | `footer-design` | `navigation`, `inspiration`, `cta`, `landing-pages` |
| `cta` | calls-to-action: buttons, forms, modals and conversion copy. | `cta-gallery`, `vibeprompts`, `magic-ui`, `good-ui` | `inspiration`, `components`, `navigation`, `landing-pages`, `ux-patterns` |
| `error-pages` | 404s and other dead-end pages worth turning into a moment. | `404s` | `inspiration`, `navigation`, `footers` |
| `ux-patterns` | principles, guidelines, checklists and pattern libraries for how interfaces should behave. | `laws-of-ux`, `inclusive-components`, `ui-playbook`, `detail-design`, `user-interface-wiki` | `components`, `documentation`, `motion`, `ai-interfaces`, `cta`, `agents-and-prompts` |
| `components` | component libraries, registries and design systems. | `shadcn-ui`, `component-gallery`, `astryx`, `reactbits`, `carbon-design-system` | `motion`, `documentation`, `agents-and-prompts`, `typography-and-styles`, `icons`, `ai-interfaces`, `ux-patterns`, `3d-and-shaders`, `sound`, `data-viz` |
| `ai-interfaces` | chat and agent components, AI UX patterns and status visuals for AI products. | `shape-of-ai`, `prompt-kit`, `termcn`, `orbkit`, `agentation` | `components`, `agents-and-prompts`, `ux-patterns`, `3d-and-shaders`, `motion` |
| `documentation` | how sites document components and style, for humans and agents. | `component-gallery`, `shadcn-ui`, `designmd`, `refero-styles`, `carbon-design-system` | `components`, `agents-and-prompts`, `typography-and-styles`, `design-md`, `ux-patterns` |
| `motion` | animation libraries and motion patterns. | `transitions-dev`, `reactbits`, `easing-wizard`, `dialkit`, `60fps` | `components`, `typography-and-styles`, `cta`, `icons`, `inspiration`, `3d-and-shaders`, `ux-patterns`, `landing-pages`, `sound` |
| `3d-and-shaders` | WebGL and WebGPU shader libraries, playgrounds and 3D scene templates. | `paper-shaders`, `canvas-ui`, `orbkit`, `book-of-shaders`, `shaderfrog` | `motion`, `components`, `ai-interfaces`, `landing-pages`, `inspiration` |
| `typography-and-styles` | type treatments and whole visual styles/design tokens. | `refero-styles`, `designmd`, `getdesign-md`, `css-text-effects`, `ramps` | `design-md`, `motion`, `documentation`, `components`, `color`, `landing-pages` |
| `color` | OKLCH pickers, palette and token generators, and contrast checkers. | `ramps`, `huetone`, `oklch`, `color-review` | `typography-and-styles`, `design-md`, `assets`, `inspiration` |
| `design-md` | design systems as single markdown files for agents: libraries, generators and how their formats compare. | `getdesign-md`, `open-design`, `designmd-cc`, `refero-styles`, `designmd` | `typography-and-styles`, `agents-and-prompts`, `documentation`, `color` |
| `assets` | icons, illustrations, sounds and social or store-listing visuals. | `3dicons`, `kitbitz`, `appshot-gallery`, `iconoir`, `craftwork` | `icons`, `components`, `inspiration`, `typography-and-styles`, `sound`, `color`, `3d-and-shaders` |
| `icons` | outline, animated and 3D icon sets, and how to hand them to an agent. | `iconoir`, `3dicons`, `animated-icons`, `icons0`, `carbon-design-system` | `assets`, `motion`, `components`, `agents-and-prompts` |
| `sound` | interface sound cues, synthesis libraries and sound-enabled components. | `uisfx`, `cuelume`, `web-kits-audio`, `sensory-ui`, `user-interface-wiki` | `assets`, `components`, `motion`, `ux-patterns`, `agents-and-prompts` |
| `agents-and-prompts` | sites built to be consumed directly by coding agents (MCP, llms.txt, CLIs, prompts). | `shadcn-ui`, `kage`, `designmd`, `laws-of-ux`, `craftwork` | `agent-skills`, `design-md`, `documentation`, `components`, `motion`, `assets`, `ai-interfaces`, `ux-patterns`, `sound` |
| `agent-skills` | installable skills and skill collections that give coding agents design, motion, accessibility and writing rules. | `impeccable`, `emil-kowalski-skills`, `addy-osmani-web-quality-skills`, `vercel-web-design-guidelines`, `ui-skills` | `agents-and-prompts`, `ux-patterns`, `motion`, `design-md`, `typography-and-styles`, `documentation` |
| `data-viz` | chart components, dashboard blocks and small data displays for product UI. | `evil-charts`, `tremor` | `components`, `motion`, `color`, `landing-pages` |

Every hub has the same sections: Start here, All sources, Patterns worth reusing, Pitfalls and Related topics. Read "Start here", "Patterns worth reusing" and "Pitfalls"; skip "All sources", because the index already lists them.
