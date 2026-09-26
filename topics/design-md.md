[← Atlas](../README.md)

# DESIGN.md files

Design systems written as a single markdown file an agent can read: the libraries that collect them, the tools that generate them from a live site, and the formats they follow.

## Start here

- [getdesign.md](../sites/getdesign-md.md) — about 73 free MIT brand files with light and dark previews, installed with one `npx getdesign add` command.
- [OpenDesign](../sites/open-design.md) — 151 forkable Apache-2.0 packages on GitHub, each with a manifest, compiled `tokens.css` and recorded provenance, plus an MCP server.
- [DesignMD.cc](../sites/designmd-cc.md) — free, no-account generator that measures a live site's computed CSS before an LLM writes it up; MIT CLI included.
- [Refero Styles](../sites/refero-styles.md) — 2,000+ brand styles searchable by mood, with an MCP connection.
- [DESIGN.md](../sites/designmd.md) — the community library to browse by tag, with an MCP server and a zero-overhead CLI.

## All sources

- [agentcn](../sites/agentcn.md) — an Extract DESIGN.md agent recipe that turns a domain into a DESIGN.md, a Tailwind v4 `@theme` block and CSS variables; needs a paid context.dev key.
- [Aura](../sites/aura.md) — roughly 725 DESIGN.md pages attached to real, previewable HTML, reachable through a remote MCP.
- [design.dev](../sites/design-dev.md) — a free visual DESIGN.md editor with live preview, eight lint rules that mirror Google's linter, and exports to CSS variables, Tailwind v4 or DTCG JSON; strict terms.
- [DESIGN.md](../sites/designmd.md) — community-uploaded systems with light/dark previews; licence depends on each uploader.
- [Design.md Store](../sites/designmd-store.md) — 51 free brand-inspired packs plus the clearest docs on the Google format; raw files may not be republished.
- [DesignMD (designmd.me)](../sites/designmd-me.md) — credit-based URL-to-file generator with multi-page crawling, provenance records, a CLI and an agent skill.
- [DesignMD.cc](../sites/designmd-cc.md) — measured URL-to-file generator with a tokens-only JSON mode and five free runs a day.
- [designmd.supply](../sites/designmd-supply.md) — free open-source generator that follows the Google spec and exports markdown, Tailwind v4 `@theme` or CSS variables.
- [getdesign.md](../sites/getdesign-md.md) — the free awesome-design-md collection, with detailed Do's and Don'ts and preview pages; paid custom files on the side.
- [Hallmark](../sites/hallmark.md) — an anti-slop page skill whose `study` verb can write a portable `design.md` of a reference page's structure, once you confirm the source is yours or a public reference.
- [Hyperbrowser DESIGNMD](../sites/hyperbrowser-design-md.md) — a minimal domain-to-file demo on Hyperbrowser's branding API; thin output, bring your own key.
- [Impeccable](../sites/impeccable.md) — writes a Google-format DESIGN.md plus a separate PRODUCT.md, then flags fonts, colours, sizes and radii that fall outside the documented system.
- [Neuform](../sites/neuform.md) — remixable AI-generated pages, each with a design breakdown that adds motion and WebGL notes.
- [OpenDesign](../sites/open-design.md) — a local design workspace whose GitHub repo doubles as a worked example of a DESIGN.md package format.
- [Refero Styles](../sites/refero-styles.md) — real brand specs extracted into agent-readable files, tagged by mood.
- [TypeUI](../sites/typeui.md) — style-named (not brand-named) skills that pair a short DESIGN.md with a strict `SKILL.md`; MIT registry, EULA on the site.
- [TypeUI DESIGN.md Extractor](../sites/design-md-chrome.md) — MIT Chrome extension that writes a DESIGN.md or SKILL.md from the open tab, locally.
- [UI Skills](../sites/ui-skills.md) — 18 DESIGN.md files published by the companies themselves (Vercel, Atlassian, Clerk, the French government's DSFR) and a `create-design-md` skill.
- [Vessa](../sites/vessa.md) — a contrasting format: hosted brand guidelines published as a versioned `brand.json` and a per-brand `llms.txt`, with motion tokens and an OAuth MCP.

## Format comparison

"Core" below means the eight body sections of Google's spec (Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts) or their counterparts in the nine-part layout that awesome-design-md popularised (Visual Theme & Atmosphere through Agent Prompt Guide). [DESIGN.md](../sites/designmd.md) and [Refero Styles](../sites/refero-styles.md) are left out because their pages don't document a fixed layout.

| Source | Base format | Sections beyond the core | Delivery | Licence of files |
|---|---|---|---|---|
| [designmd.supply](../sites/designmd-supply.md) | Google spec (`version: alpha` YAML, `{token}` references) | none | Copy button (markdown, Tailwind v4, CSS variables); self-host | Not stated; app code MIT |
| [Design.md Store](../sites/designmd-store.md) | Google Labs spec, with Spacing in place of Layout | Accessibility, Motion | Manual download, `llms.txt` index | Custom: any project, no republishing raw files |
| [getdesign.md](../sites/getdesign-md.md) | Google Stitch spec (the README lists the nine-part layout) | Responsive Behavior, Iteration Guide; light/dark preview HTML | `npx getdesign add`, GitHub, download | MIT (free set); paid files not resellable |
| [Aura](../sites/aura.md) | Google-style YAML | Composition, Motion, WebGL & Effects, Guardrails (no Do's and Don'ts) | Copy from site, remote MCP | No per-item licence; Pro templates need a paid plan |
| [Neuform](../sites/neuform.md) | Google section order | Icons, Buttons, Motion, WebGL/Three.js notes | DESIGN.md tab per template (may need an account) | Not stated |
| [Hyperbrowser DESIGNMD](../sites/hyperbrowser-design-md.md) | Thin Google-style YAML (colors, heading/body fonts) | Brand Identity; lacks spacing, radius, elevation, components and Do's and Don'ts | Copy/download, SDK call | Not stated; repo has no licence file |
| [DesignMD (designmd.me)](../sites/designmd-me.md) | Nine-part layout with YAML front matter | Responsive Behavior, Agent Prompt Guide, provenance record | CLI, agent skill, Figma import | Not stated; terms reserve rights |
| [DesignMD.cc](../sites/designmd-cc.md) | Nine-part layout | Responsive Behavior (measured breakpoints), Agent Prompt Guide; tokens JSON | Web, `npx @designmdcc/cli` | Not stated; CLI MIT |
| [OpenDesign](../sites/open-design.md) | Nine-part layout, plus `manifest.json` and `tokens.css` | Responsive Behavior, Agent Prompt Guide with known gaps; optional USAGE.md, DTCG JSON, Tailwind v4 | GitHub repo, `od` CLI, MCP | Per package (`manifest.source`); software Apache-2.0 |
| [TypeUI](../sites/typeui.md) | Own format: short YAML + Overview, Style Foundations, Colors | Companion `SKILL.md`: Accessibility, Writing Tone, Do/Don't rules, Component Rule Expectations, Quality Gates | `npx typeui.sh pull`, GitHub, OAuth MCP | Registry MIT; site files under an EULA |
| [TypeUI DESIGN.md Extractor](../sites/design-md-chrome.md) | TypeUI format, no YAML | Mission, Brand, Accessibility, Writing Tone, Quality Gates (mostly fixed template text) | Chrome extension, local download | MIT template; extracted brand values aren't yours |
| [Impeccable](../sites/impeccable.md) | Google Stitch format, written by `/impeccable document` | Separate `PRODUCT.md` (users, purpose, accessibility); its detector checks code against the documented fonts, colours, type sizes and radii | Agent skill command, `npx impeccable` | Not stated; tool Apache-2.0 |
| [design.dev](../sites/design-dev.md) | Google spec, linted against eight rules that mirror `@google/design.md` | Exports CSS variables, Tailwind v4 or DTCG JSON; its style packs also ship as `SKILL.md`, a Cursor rule and a prompt overlay | Web generator (copy or export), style packs at fixed URLs | Not stated; Terms forbid republishing |
| [agentcn](../sites/agentcn.md) (Extract DESIGN.md recipe) | designmd.supply's pipeline with one vision-model call | Tailwind v4 `@theme` block and CSS variables | shadcn CLI or MCP install into your agent project; needs a context.dev key | Recipe code MIT; output not stated |
| [UI Skills](../sites/ui-skills.md) | 18 files published by the companies themselves; layout not documented | `create-design-md` skill for writing your own | Site collection, CLI, MCP | Not stated per file; check each publisher |
| [Vessa](../sites/vessa.md) (not a DESIGN.md) | Own `brand.json` (`vessa.brand` v1), plus a markdown `llms.txt` | Nine fixed sections including logo and clear space, moodboard, applications and voice do's and don'ts; colour roles with usage share and CMYK; motion easings, durations and stagger | Public URL per brand, OAuth MCP for editing | No licence to reuse other people's guidelines |

What a complete DESIGN.md tends to contain, taken across these sources:

- YAML front matter with `version`, `name`, `description`, and `colors`, `typography`, `spacing`, `rounded` and `components` tokens, where components point at other tokens by path (`{colors.primary}`) instead of repeating values.
- An overview of the visual theme and atmosphere: mood and intent in a few sentences.
- Colors by role, with prose on when and why to use each one rather than a second list of hex codes, and optionally each colour's rough share of the palette (Vessa).
- Typography as a role table (size, weight, line height, tracking) for display, heading, body and label.
- Layout and spacing: the base rhythm and the scale.
- Elevation and depth, and shapes (the radius scale).
- Component stylings with the states each one must cover.
- Do's and Don'ts written as hard limits ("no new accent colours") rather than advice.
- Responsive behaviour with the actual breakpoints.
- Accessibility (a WCAG AA target, contrast, visible focus) and motion (named durations, easing curves and stagger) as standard sections.
- Brand material beyond the UI where it matters: logo files and clear space, and voice do's and don'ts (Vessa).
- An agent prompt guide at the end: example prompts, an iteration guide for extending the system, and a list of known gaps.
- Provenance: which pages were read, when, and which values were measured versus inferred.
- Optional companions: a stricter `SKILL.md` with quality gates, light and dark preview pages, and compiled token files (CSS variables, Tailwind, DTCG JSON) rebuilt from the same source.
- A separate product context file (who it's for, what it does, accessibility needs) kept beside the visual rules, so every design command reads both (Impeccable's `PRODUCT.md`).
- A pointer from `AGENTS.md` to the DESIGN.md, so any agent that reads the project file finds the design system (design.dev).

## Patterns worth reusing

- Measure first, write second: take token values from computed styles and live media queries, and let the LLM only describe them (DesignMD.cc, designmd.supply).
- Keep uncertainty in the prose, never in the token values, and write "not measured" instead of inventing a number (designmd.supply, designmd.me).
- Crawl several pages, not just the homepage, and repeat the extraction in dark mode before trusting a file (designmd.me, TypeUI DESIGN.md Extractor).
- Keep one active DESIGN.md per project so the agent never gets conflicting instructions (TypeUI).
- Ship ready-made rules-file snippets (`CLAUDE.md`, `.cursor/rules`, Copilot instructions) that tell each agent to treat the file as ground truth (DesignMD.cc, designmd.me).
- Keep the file next to the HTML it was derived from, so the agent has both the rules and a concrete reference (Aura).
- Lint the file in CI (valid YAML, resolvable references, contrast) so it stays trustworthy as it changes (Design.md Store, design.dev).
- Check new UI against the project's own documented tokens, not only generic rules, and fail the build on drift (Impeccable).
- Keep who and why (`PRODUCT.md`) apart from how it looks (DESIGN.md) (Impeccable).
- Prefer files a company publishes about its own system when you want a real, maintained reference rather than a reverse-engineered one (UI Skills).
- Publish a machine-readable twin of every human-readable guideline, as JSON and `llms.txt` at stable URLs (Vessa).
- Ship one style in several formats (DESIGN.md, `SKILL.md`, an editor rule) from a single source, so every agent gets the same constraints (design.dev).
- Name styles by aesthetic rather than by brand when you want files others can reuse without trademark worries (TypeUI).

## Pitfalls

- Almost no generator states a licence for its output: MIT on a CLI or repo covers the tool, not the brand description it writes (DesignMD.cc, designmd.supply, Hyperbrowser DESIGNMD, designmd.me).
- Libraries that do state terms are often strict: no republishing raw files (Design.md Store), no redistribution or competing registries (TypeUI's EULA), no products confusable with the referenced brand (getdesign.md).
- Brand-derived files describe someone else's identity; use them to understand a style, and keep logos, trademarks and imagery out of your product.
- Prose sections are usually LLM-written and some values are marked as inferred; check the Do's and Don'ts against the live site.
- Formats don't fully interoperate: the TypeUI extractor has no YAML block, Aura drops Do's and Don'ts, Hyperbrowser's output lacks spacing and components, and Vessa's `brand.json` is its own format, so tools built for the Google spec may not parse them without conversion.
- Extraction recipes can depend on paid services: agentcn's DESIGN.md recipe needs a context.dev key, and its default model IDs are hard-coded.
- Generating from someone else's site raises the same rights question as any brand file; Hallmark's `study` asks you to confirm the source is your own or a public reference for your brand before it writes a `design.md`.
- Headline counts are often inflated or inconsistent (getdesign.md's 550+ versus about 73 free files, OpenDesign's 151 versus 152+, DesignMD.cc's five versus ten free runs); trust the repo or the FAQ over the landing page.
- Several sites block plain `curl` or forbid automated retrieval in their terms; use the official CLI or GitHub repo for scripted access.
- Cached files can lag behind the live site they describe (designmd.supply).

## Related topics

- [Typography and styles](typography-and-styles.md)
- [Agents and prompts](agents-and-prompts.md)
- [Documentation](documentation.md)
- [Color](color.md)
