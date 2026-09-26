[← Atlas](../README.md)

# Color

Colour tools for interfaces: OKLCH pickers, palette and token generators, contrast checkers and references for dark-first design.

## Start here

- [Ramps](../sites/ramps.md) — one brand hex becomes eight OKLCH ramps and light/dark semantic tokens with enforced AA or AAA contrast; MIT, with `llms.txt` and a keyless JSON API.
- [Huetone](../sites/huetone.md) — an LCH/OKLCH grid editor for lining up tone steps across hues, with WCAG 2 and APCA readouts on every swatch.
- [OKLCH](../sites/oklch.md) — Evil Martians' picker and converter with sRGB, P3 and Rec. 2020 gamut edges and a computed sRGB fallback.
- [Color.review](../sites/color-review.md) — the fastest visual check for one text and background pair, with pass/fail lines drawn on the picker.

## All sources

- [Color.review](../sites/color-review.md) — WCAG 2.1 ratio for one pair at a time, with the 3, 4.5 and 7 boundaries drawn on the colour field and a `check/<fg>-<bg>` link for every pair; no terms published.
- [Dark Mode Design](../sites/dark-mode-design.md) — about 380 dark-by-default sites for studying background shades, accent colours and imagery on near-black; no filters.
- [Fffuel](../sites/fffuel.md) — quick HEX/RGB/HSL pickers and palettes grouped by mood, next to grainy-gradient, blob and noise SVG generators; no OKLCH or contrast checks.
- [Huetone](../sites/huetone.md) — palette grid with lightness, chroma and hue charts, a greyscale preview and exports to CSS variables and Tokens Studio JSON; MIT, unchanged since late 2023.
- [OKLCH](../sites/oklch.md) — paste HEX, RGB or HSL to get OKLCH, see which colours exist only on wide-gamut screens, and share any colour through the URL hash; MIT.
- [Ramps](../sites/ramps.md) — full palette and 44 semantic tokens from one hex, each token reporting its measured WCAG 2.1 ratio; exports CSS variables, Tailwind v4, DTCG JSON and plain JSON.

## Patterns worth reusing

- Line up the same tone step across every hue so a "blue 600" and a "red 600" pass the same checks, and contrast rules can be written once per step (Huetone).
- Plot lightness, chroma and hue along each ramp so an uneven scale shows up as a bumpy line, and test in greyscale that hierarchy survives without hue (Huetone).
- Enforce contrast while generating tokens, and report the measured ratio on every token so the claim can be checked (Ramps).
- Resolve semantic tokens per mode instead of mapping dark mode by hand, and pair each fill with its `text-on-*` token (Ramps).
- Pair every wide-gamut colour with a computed sRGB fallback, not a hand-picked one (OKLCH).
- Draw pass/fail boundaries on the picker itself so people see how far a failing colour has to move (Color.review).
- Keep a tool's state in the URL so a colour, a pair or a whole palette can be linked from a PR or design note (OKLCH, Color.review, Ramps).
- Serve the same palette as HTML for people and as plain text or JSON for agents, so they fetch real values instead of inventing hex codes (Ramps).
- For a dark palette, measure a few reference sites (background shade, text colour, number of accents) and hand the agent those values rather than a vague mood (Dark Mode Design).

## Pitfalls

- Most colour tools have no API, MCP or `llms.txt` (Huetone, OKLCH, Color.review, Fffuel); Ramps is the exception. Usually the handoff is the exported CSS variables or token JSON.
- Treat WCAG 2 as the compliance bar. Huetone's APCA readout uses a working-draft algorithm that may change, and Ramps and Color.review measure WCAG 2.1 only.
- High-chroma OKLCH values can fall outside sRGB; always ship the fallback or gate the colour with `@media (color-gamut: p3)` (OKLCH).
- Generated ramps follow a fixed lightness curve, so hand-tuned brands still need edits. In Ramps, `text-disabled` sits below the minimum on purpose and the light-mode raised surface matches the base, so separate it with a shadow.
- Huetone keeps palettes in local storage and hasn't been updated since November 2023; export or copy a link before clearing site data.
- Fffuel lets you use generated images commercially but not redistribute them, so they can't go into templates or asset kits you ship.
- A reference site that looks readable isn't proof of contrast; check dark palettes against WCAG (Dark Mode Design). Color.review publishes no terms or privacy page and loads Google Analytics.

## Related topics

- [Typography and styles](typography-and-styles.md)
- [DESIGN.md files](design-md.md)
- [Assets](assets.md)
- [Inspiration](inspiration.md)
