[← Atlas](../README.md)

# Typography and styles

Type treatments, colour and spacing tokens, and whole visual styles for interfaces.

## Start here

- [Refero Styles](../sites/refero-styles.md) — real brand styles extracted into `DESIGN.md` files with searchable mood tags.
- [DESIGN.md](../sites/designmd.md) — a community library of complete design systems as single markdown files.
- [getdesign.md](../sites/getdesign-md.md) — about 73 free MIT brand style files with unusually specific Do's and Don'ts and light/dark previews.
- [CSS Text Effects](../sites/css-text-effects.md) — 90 copy-ready CSS text effects with customizable colour tokens.
- [Ramps](../sites/ramps.md) — a full OKLCH palette and light/dark semantic tokens from one brand colour, with enforced contrast; see the [Color](color.md) hub for more colour tools.

## All sources

- [Color.review](../sites/color-review.md) — a contrast check for one text and background pair, with the large-text size rules for AA and AAA explained under the tool.
- [Craftwork](../sites/craftwork.md) — a paid marketplace whose catalogue includes display fonts, with an agent-only font catalogue on the Pro MCP.
- [CSS Text Effects](../sites/css-text-effects.md) — animated text effects with `--ink`-style custom-property tokens.
- [Curated](../sites/curated-design.md) — live sites filtered by seven visual styles (Animated, Minimal, Colorful, Dark, Pastel, Gradients, Neobrutalism) across 16 industries.
- [Dark Mode Design](../sites/dark-mode-design.md) — dark-by-default sites for studying how studios set type, accent colour and imagery on near-black.
- [DESIGN.md](../sites/designmd.md) — palette, typography, spacing and tone as one downloadable markdown file.
- [Design.md Store](../sites/designmd-store.md) — 51 brand-inspired style packs from retail, media and travel as well as tech; raw files may not be re-shared.
- [DesignMD (designmd.me)](../sites/designmd-me.md) — generates a style file from any URL, with type roles, palette and spacing measured in a real browser; credit-based.
- [DesignMD.cc](../sites/designmd-cc.md) — free generator whose typography section is a role table (size, weight, line height, tracking) measured from live CSS.
- [designmd.supply](../sites/designmd-supply.md) — free generator that hands tokens back as markdown, a Tailwind v4 `@theme` block or CSS variables.
- [emailcn](../sites/emailcn.md) — 14 email themes on one token shape shared by three renderers, each paired with a font helper so fallback stacks are chosen once.
- [getdesign.md](../sites/getdesign-md.md) — free brand style files with detailed tokens, hard-limit Do's and Don'ts and preview pages.
- [Gradient Buttons](../sites/gradient-buttons.md) — a gallery of copy-paste CSS gradient styles.
- [Hallmark](../sites/hallmark.md) — an agent skill with 21 themes and firm foundations: at least two typefaces, OKLCH palettes with one anchor hue, and an accent under 5% of the page.
- [Huetone](../sites/huetone.md) — builds colour scales where each step matches in lightness across hues, exported as CSS variables or Tokens Studio JSON.
- [Hyperbrowser DESIGNMD](../sites/hyperbrowser-design-md.md) — a quick colour-and-font starting file for any domain; no spacing or component tokens.
- [Inspora](../sites/inspora.md) — recent work tagged by colour and style words (chrome, iridescent, liquid metal) for pulling references by look.
- [loadmo.re](../sites/loadmore.md) — expressive mobile sites tagged by approach, such as brutalist, glitches or tactile.
- [Minimal Gallery](../sites/minimal-gallery.md) — minimalist sites and templates, filterable by type and platform.
- [Motion Primitives](../sites/motion-primitives.md) — text and transition effects grouped by technique, quality over quantity.
- [NumberFlow](../sites/number-flow.md) — animated numbers formatted through `Intl`, with guidance on `tabular-nums` and line height for the rolling digits.
- [OKLCH](../sites/oklch.md) — picks and converts `oklch()` colours, with gamut views for P3 and Rec. 2020 and a computed sRGB fallback.
- [OpenDesign](../sites/open-design.md) — 151 forkable brand style packages, each with prose and compiled `tokens.css`.
- [pdfcn](../sites/pdfcn.md) — nine document themes, from formal serif to monospace blueprint, applied through one theme provider.
- [Ramps](../sites/ramps.md) — one brand hex becomes OKLCH ramps and light/dark semantic tokens, exported as CSS variables, Tailwind v4 or DTCG JSON.
- [Rebrand Gallery](../sites/rebrand-gallery.md) — brand identities tagged by typeface, style and feel, with browse pages for about 120 typefaces.
- [Refero Styles](../sites/refero-styles.md) — extracted brand design specs with descriptive mood tags.
- [SEESAW](../sites/seesaw.md) — live sites tagged with their typefaces, and a 630-font index for finding real sites that set a given face.
- [slot-text](../sites/textmotion.md) — a text roll with a word mode that keeps kerning, ligatures and joined scripts intact.
- [Torph](../sites/torph.md) — morphing labels and totals that keep shared characters still, with locale-aware number formatting.
- [Typeface.fyi](../sites/typeface-fyi.md) — a Chrome extension that shows any web font's family, metrics, source and foundry.
- [TypeUI](../sites/typeui.md) — styles named by aesthetic (neobrutalism, claymorphism, editorial) rather than brand, as DESIGN.md plus SKILL.md.
- [TypeUI DESIGN.md Extractor](../sites/design-md-chrome.md) — reads the open tab's computed type, colour, spacing, radius and shadow values into a file.
- [Vessa](../sites/vessa.md) — hosted brand guidelines whose type scale, palette roles, motion and voice are published as a `brand.json` per brand.

## Patterns worth reusing

- Formalize a brand's style as a text file (`DESIGN.md`) so an agent can consume it without visual interpretation.
- Tag styles with mood phrases ("golden hour editorial") in addition to technical categories, so they're searchable by feel, not just by token values.
- Expose CSS custom-property tokens (e.g. `--ink`) so a whole effect or style set can be recolored without touching markup.
- Sort a fast-growing style library by trending/popular/newest to keep it navigable as it scales.
- Collect a reference site's real font names and metrics with an inspector before writing a type scale, instead of guessing from a screenshot (Typeface.fyi).
- Hand the same tokens out in several ready-to-paste forms (spec file, Tailwind theme, CSS variables) so they fit any stack (designmd.supply).
- Name reusable styles by aesthetic rather than by brand, so they carry no trademark baggage (TypeUI).
- Tag every reference with the typefaces it uses, so a site or brand gallery doubles as a type-pairing index (SEESAW, Rebrand Gallery).
- Describe styles by feel (vibrant, confident, warm) as well as by style and typeface, since that is how clients talk (Rebrand Gallery).
- Record each colour's role and rough share of the palette, not just its value, and publish the guideline as structured data next to the page (Vessa).
- Keep one token set and compile it for each output, such as email renderers or PDF engines, so a theme travels without a redesign (emailcn, pdfcn).

## Pitfalls

- Extracting a real brand's style can get uncomfortably close to its visual identity — use it as a starting point, never a 1:1 copy.
- No licence is stated for many community-submitted systems — check before reusing one on a commercial project.
- A text-only style spec doesn't replace viewing the original site to validate real hierarchy, motion and accessibility.
- Knowing a font's name doesn't give you the right to use it: Google Fonts are mostly open, Adobe Fonts need a subscription, and foundry fonts need a web licence (Typeface.fyi).
- Generated style files usually have LLM-written prose and no stated output licence; see the [DESIGN.md files](design-md.md) hub before relying on one.
- Brand-named themes imitate a look and nothing more; emailcn's Airbnb, Apple or Stripe themes must not ship as those companies' mail.
- Uploading a font to a guideline or style tool doesn't license it for the web; that stays your responsibility (Vessa).
- Letter-by-letter animation breaks kerning, ligatures and joined scripts such as Arabic or Devanagari, so use word mode (slot-text); NumberFlow doesn't support non-Latin digits or right-to-left locales yet.
- Strict style rules, such as Hallmark's ban on italic headings, can clash with an existing brand guide.

## Related topics

- [DESIGN.md files](design-md.md)
- [Motion](motion.md)
- [Documentation](documentation.md)
- [Components](components.md)
- [Color](color.md)
- [Landing pages](landing-pages.md)
