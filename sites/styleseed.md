[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [color](../topics/color.md), [ux-patterns](../topics/ux-patterns.md)

# StyleSeed

- **URL:** https://github.com/bitjaru/styleseed
- **Type:** agent skill collection · design-rule engine · Claude Code plugin marketplace
- **Topics:** agents-and-prompts, design-md, color, ux-patterns
- **Pricing / licence:** free. MIT (repo `LICENSE`; plugin 4.2.0). About 965 GitHub stars at review; skills.sh counts about 800 installs per skill. Demo and docs site: styleseed-demo.vercel.app.
- **Reviewed:** 2026-09-25

## What it is

StyleSeed, by bitjaru, calls itself a "design-method engine": 23 core skills (a `styleseed` router plus 22 `ss-*` workflows) around a rule handbook, a palette generator and scoring gates. It is aimed at Claude Code, Codex and Cursor. It doesn't hand the agent one taste. You choose an output grammar (consumer service, operations, technical, editorial, commerce, institutional, marketing or story), a brand recipe (nine, which change structure and density rather than just colour) and a palette. The choices are locked in a `STYLESEED.md` file at the repo root. A resolver then compiles only the rules that apply into `.styleseed/effective-rules.md`, with a hash manifest, so the agent does not load the full 220 KB handbook. The README lists 74 craft rules, 8 grammars, 9 brand recipes, 8 palette recipes and 7 brand skins. The skills folder is about 470 KB.

## When to open it

- When the agent's UI drifts between screens and sessions, and you want decisions written down once and re-read every time.
- When you want an enforced build loop (lock, build, score, fix, screenshot) instead of a checklist the agent may skip.
- When you have one brand colour and need a full light and dark palette with contrast checked.

## Most useful

- **`ss-tokens` palette generator**: from one key colour it builds 11-step OKLCH ramps for the primary and accent, scores the accent against the key and the status hues, maps everything to semantic roles, and raises or lowers lightness until text, action and focus pairs pass contrast. Controls: light or dark, calm, balanced, vivid or deep, a harmony mode and a surface temperature.
- **`ss-build` gate**: `ss-score` rates the code 0–100 (A at 90+, B at 80–89 and so on), and anything under 80 goes back for fixes, at most three rounds, with the real score reported either way. `ss-verify` then renders the page in headless Chromium and checks what is visible: dead whitespace, fonts that didn't load, no focal point, blank empty states.
- **Named AI tells** it checks: an accent nobody chose, emoji as icons, the icon-in-a-chip above every feature card, even grids of same-weight centred cards, flat black backgrounds, off-scale type sizes and hard-coded hex in components.
- **UX skills**: `ss-audit` (Nielsen's ten heuristics), `ss-a11y` (WCAG 2.2 AA), `ss-copy` (microcopy), `ss-feedback` (loading, success, error and empty states) and `ss-flow`.
- **`ss-reference`**: compiles screenshots, URLs, Figma files or an existing UI into a project grammar with evidence and confidence levels, rather than copying the reference.

## Using it with agents

Install with `npx skills add bitjaru/styleseed`, or as a Claude Code plugin with `claude plugin marketplace add bitjaru/styleseed` then `claude plugin install styleseed@styleseed`. Cursor can copy `engine/.cursorrules`. Then run `/ss-setup` → `/ss-build` for a decided screen, or `/ss-studio` for exploration (three directions, you pick one, then a working prototype). In Codex use `$ss-…`. The general router triggers on any request for StyleSeed help and picks exactly one first workflow. The outputs are `STYLESEED.md`, a key-value design lock (grammar, recipe, key colour, font, radius, density, motion, a "signature move"), plus the compiled bundle, `palette.json` and `palette.css`. This is its own format rather than a DESIGN.md, but a DESIGN.md can supply a skin.

## Watch out for

- `ss-update` fetches `version.json` from the demo site or the latest GitHub release. `ss-setup` can fetch brand files from awesome-design-md, and `ss-verify` needs Playwright and Chromium. Nothing else calls out, and the optional `ss-learn` extension is not installed.
- The seven skins are "inspired-by" token sets for real brands (Toss, Stripe, Linear, Vercel, Notion, Raycast, Arc), taken from awesome-design-md. Don't ship them as your own identity.
- The +5.3-point benchmark gain is the author's own measurement on its own rubric. The README itself says a score is not expert approval.
- It is heavy: many enums, schemas and files under `.styleseed/`. For a one-off page it is more machinery than you need.
- Its rules overlap with other anti-slop skills. Keep one scoring gate per project so they don't fight.

## Reusable ideas

- Write design decisions to a lock file once and have every skill re-read it, so choices survive new sessions.
- Compile only the rules that apply into a small bundle with source hashes, instead of loading the whole handbook.
- Score, fix and re-score with a fixed floor and a fixed number of passes, and report the real score even on failure.
- Generate the whole palette from one key colour and adjust lightness until every contrast pair passes.

## Related

[Impeccable](impeccable.md), [Hallmark](hallmark.md), [getdesign.md](getdesign-md.md), [Huetone](huetone.md), [UI UX Pro Max](ui-ux-pro-max.md)
