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

- [Aura](../sites/aura.md) — roughly 725 DESIGN.md pages attached to real, previewable HTML, reachable through a remote MCP.
- [DESIGN.md](../sites/designmd.md) — community-uploaded systems with light/dark previews; licence depends on each uploader.
- [Design.md Store](../sites/designmd-store.md) — 51 free brand-inspired packs plus the clearest docs on the Google format; raw files may not be republished.
- [DesignMD (designmd.me)](../sites/designmd-me.md) — credit-based URL-to-file generator with multi-page crawling, provenance records, a CLI and an agent skill.
- [DesignMD.cc](../sites/designmd-cc.md) — measured URL-to-file generator with a tokens-only JSON mode and five free runs a day.
- [designmd.supply](../sites/designmd-supply.md) — free open-source generator that follows the Google spec and exports markdown, Tailwind v4 `@theme` or CSS variables.
- [getdesign.md](../sites/getdesign-md.md) — the free awesome-design-md collection, with detailed Do's and Don'ts and preview pages; paid custom files on the side.
- [Hyperbrowser DESIGNMD](../sites/hyperbrowser-design-md.md) — a minimal domain-to-file demo on Hyperbrowser's branding API; thin output, bring your own key.
- [Neuform](../sites/neuform.md) — remixable AI-generated pages, each with a design breakdown that adds motion and WebGL notes.
- [OpenDesign](../sites/open-design.md) — a local design workspace whose GitHub repo doubles as a worked example of a DESIGN.md package format.
- [Refero Styles](../sites/refero-styles.md) — real brand specs extracted into agent-readable files, tagged by mood.
- [TypeUI](../sites/typeui.md) — style-named (not brand-named) skills that pair a short DESIGN.md with a strict `SKILL.md`; MIT registry, EULA on the site.
- [TypeUI DESIGN.md Extractor](../sites/design-md-chrome.md) — MIT Chrome extension that writes a DESIGN.md or SKILL.md from the open tab, locally.

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

What a complete DESIGN.md tends to contain, taken across these sources:

- YAML front matter with `version`, `name`, `description`, and `colors`, `typography`, `spacing`, `rounded` and `components` tokens, where components point at other tokens by path (`{colors.primary}`) instead of repeating values.
- An overview of the visual theme and atmosphere: mood and intent in a few sentences.
- Colors by role, with prose on when and why to use each one rather than a second list of hex codes.
- Typography as a role table (size, weight, line height, tracking) for display, heading, body and label.
- Layout and spacing: the base rhythm and the scale.
- Elevation and depth, and shapes (the radius scale).
- Component stylings with the states each one must cover.
- Do's and Don'ts written as hard limits ("no new accent colours") rather than advice.
- Responsive behaviour with the actual breakpoints.
- Accessibility (a WCAG AA target, contrast, visible focus) and motion (durations and easing) as standard sections.
- An agent prompt guide at the end: example prompts, an iteration guide for extending the system, and a list of known gaps.
- Provenance: which pages were read, when, and which values were measured versus inferred.
- Optional companions: a stricter `SKILL.md` with quality gates, light and dark preview pages, and compiled token files (CSS variables, Tailwind, DTCG JSON) rebuilt from the same source.

## Patterns worth reusing

- Measure first, write second: take token values from computed styles and live media queries, and let the LLM only describe them (DesignMD.cc, designmd.supply).
- Keep uncertainty in the prose, never in the token values, and write "not measured" instead of inventing a number (designmd.supply, designmd.me).
- Crawl several pages, not just the homepage, and repeat the extraction in dark mode before trusting a file (designmd.me, TypeUI DESIGN.md Extractor).
- Keep one active DESIGN.md per project so the agent never gets conflicting instructions (TypeUI).
- Ship ready-made rules-file snippets (`CLAUDE.md`, `.cursor/rules`, Copilot instructions) that tell each agent to treat the file as ground truth (DesignMD.cc, designmd.me).
- Keep the file next to the HTML it was derived from, so the agent has both the rules and a concrete reference (Aura).
- Lint the file in CI (valid YAML, resolvable references, contrast) so it stays trustworthy as it changes (Design.md Store).
- Name styles by aesthetic rather than by brand when you want files others can reuse without trademark worries (TypeUI).

## Pitfalls

- Almost no generator states a licence for its output: MIT on a CLI or repo covers the tool, not the brand description it writes (DesignMD.cc, designmd.supply, Hyperbrowser DESIGNMD, designmd.me).
- Libraries that do state terms are often strict: no republishing raw files (Design.md Store), no redistribution or competing registries (TypeUI's EULA), no products confusable with the referenced brand (getdesign.md).
- Brand-derived files describe someone else's identity; use them to understand a style, and keep logos, trademarks and imagery out of your product.
- Prose sections are usually LLM-written and some values are marked as inferred; check the Do's and Don'ts against the live site.
- Formats don't fully interoperate: the TypeUI extractor has no YAML block, Aura drops Do's and Don'ts, and Hyperbrowser's output lacks spacing and components, so tools built for the Google spec may not parse them.
- Headline counts are often inflated or inconsistent (getdesign.md's 550+ versus about 73 free files, OpenDesign's 151 versus 152+, DesignMD.cc's five versus ten free runs); trust the repo or the FAQ over the landing page.
- Several sites block plain `curl` or forbid automated retrieval in their terms; use the official CLI or GitHub repo for scripted access.
- Cached files can lag behind the live site they describe (designmd.supply).

## Related topics

- [Typography and styles](typography-and-styles.md)
- [Agents and prompts](agents-and-prompts.md)
- [Documentation](documentation.md)
