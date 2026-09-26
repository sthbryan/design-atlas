# Direction

How to choose a visual direction: name the surface, look up references in the atlas, respect their licences, and test the plan against the default an agent would produce anyway.

## Contents

- [Surfaces](#surfaces)
- [Find the atlas](#find-the-atlas)
- [Look up references](#look-up-references)
- [Licence hygiene](#licence-hygiene)
- [Default fingerprints](#default-fingerprints)
- [Direction record](#direction-record)

## Surfaces

The surface decides how much expression the page can spend. A marketing site for a product is a marketing surface. The app behind its login is a product surface. Design them separately.

| Surface | Job | Density | Expression | Copy |
|---|---|---|---|---|
| Marketing | Convert a stranger | Low to medium | One bold move in composition, type or colour, and restraint elsewhere | One claim per section, specific to this product |
| Product | Let an operator work | High, without card piles | Quiet chrome, so the work surface is the loudest thing on screen | Utility copy about status, scope and actions |
| Reading | Let someone read or look something up | Medium | Typography carries it, with navigation that recedes | Plain, with labelled metadata near the title |

Pick one surface per screen. A hero section on a dashboard, or campaign copy in settings, is a surface mismatch.

## Find the atlas

This skill makes no network calls of its own, so it reads the atlas from disk only. Use the first location that exists:

1. The working tree or one of its parents, when it holds `sites.json` and a `topics/` folder.
2. A plugin install, where the atlas root sits two levels above this skill folder (`../../sites.json`).
3. A path the user gives.

If none exists, say so, skip the lookup and write `Atlas not available` in the References section of DESIGN.md. Directions still work without it, and the anti-default check still runs.

## Look up references

Read the index before pages. Stop at two hubs and five site pages unless the user asks for more.

1. **Query the index.** When the `design-atlas` skill sits beside this skill folder, or the atlas root has `skills/design-atlas/`, run its query script. Always pass `--offline`, so the lookup reads a local clone or that skill's bundled catalog and never the network:

   ```sh
   Q=path/to/design-atlas/scripts/query.mjs
   node "$Q" --offline --topics
   node "$Q" --offline --topic landing-pages,cta --min-verdict useful
   node "$Q" --offline --topic icons --licence ship --full
   ```

   When the script reports `"location":"bundled"`, only the index is on disk. Use its rows, skip steps 3 and 5, and mark each reference `page not read` in DESIGN.md.

   Without Node or that script, filter `sites.json` at the atlas root on its fields: `type`, `topics`, `verdict`, `agent`, `licence_class`, `status` and `reviewed`.

   ```sh
   jq -r '.topics[] | "\(.slug): \(.description)"' sites.json
   jq -r '.sites[] | select(.topics|index("landing-pages")) | select(.verdict!="niche")
     | [.path,.type,.licence_class,(.agent|join(",")),.reviewed] | @tsv' sites.json
   ```

2. **Topics.** Take hub slugs from the index, never from memory. Pick one to three whose description matches the surface and the request.

3. **Hubs.** Read the "Start here" list of each chosen hub before any site page:

   ```sh
   sed -n '/^## Start here/,/^## /p' topics/landing-pages.md
   ```

4. **Licence fields.** Before shortlisting a page, read its `licence_class` and `licence` from the index row (`--full` adds `licence`), or from the page's frontmatter:

   ```sh
   sed -n '2,/^---$/p' sites/iconoir.md | grep -E '^(licence|licence_class|reviewed):'
   ```

5. **Pages.** List the sections, then read only the ones you need:

   ```sh
   grep -n '^## ' sites/ramps.md
   ```

   Read "When to open it", "Reusable ideas", "Watch out for" and, when an agent will use the tool, "Using it with agents". Skip "What it is" unless the one-liner was unclear.

6. **Record.** For each reference, note the path, what you take from it, its `licence_class` and its `reviewed` date. Counts and prices on a page are true only as of that date.

Prefer variety over depth: one gallery to look at, one library or tool to build with and one asset source is a better set than three galleries.

## Licence hygiene

Ideas are free to take from any reference. Code, fonts, icons, images and sounds are only as free as their licence says.

- The `design-atlas` skill owns the rules that turn a `licence_class` into ship, conditional or look-only. Read its `references/licence-guide.md` before copying anything. In a clone it is `skills/design-atlas/references/licence-guide.md`.
- If that guide is not available, ship only `public-domain`, `open-source-permissive` and `cc-attribution` material, keeping notices or credit. Treat every other class as look-only and say so.
- When anything with an attribution duty ships, add an entry to the project's credits or NOTICE file and to the References table in DESIGN.md.

## Default fingerprints

These are the plans an agent produces with no context. Use them in step 4 of the workflow. Matching one axis is normal. Matching three or more means the plan is the default.

| Surface | Default plan |
|---|---|
| Landing page | Centred hero with a pill badge, a two-line headline and two buttons, over a glow or gradient. Then a logo strip, three icon cards, alternating image and text rows and three testimonials. Three pricing tiers with the middle one highlighted, an FAQ accordion and a four-column footer. An indigo or violet accent, and a fade-up on every section. |
| Dashboard | Left sidebar and a top bar with search. Four KPI cards with green "+12%" deltas, a line chart titled "Overview" and a table with Name, Status, Date and Actions columns. Slate greys and cards around everything. |
| Settings | Tabs on the left, stacked cards each with a title and its own save button, toggles with no description of what they do. |
| Pricing | Three columns, "Most popular" on the middle one, equal-length check-mark lists and a monthly or yearly toggle. |
| Docs | Left nav, centred prose, a right-hand table of contents, a purple accent and monospace headings. |
| Portfolio | A huge name, a cream background, a high-contrast serif display face, a terracotta accent and a grid of project cards that zoom on hover. |
| AI product | Dark background, a purple-to-blue gradient, sparkle icons, a glowing orb and a chat box in the hero. |
| Component | The same radius on every element, the same soft grey shadow, a lift on hover and an icon in a tinted square. |

Departures can be defaults too. These three families are what an agent reaches for once it is told to avoid the list above:

- Editorial: cream paper, a high-contrast serif, hairline rules and small monospace labels.
- Terminal: near-black, one neon accent, monospace everywhere and visible grid lines.
- Swiss poster: uppercase grotesque, a heavy grid and a single red accent.

A plan that lands in one of these families needs a reason from the subject world, not from the wish to look different.

## Direction record

Write the direction in five lines before any tokens. The References line cites atlas pages by path.

```text
Audience and job: who uses it, where, and the one thing they came to do.
Subject world: the materials, conventions or data this look is drawn from.
Signature element: one element that could only belong to this product.
Will not: three to five defaults this direction rejects, each specific.
References: 2–5 atlas pages, each with what you take and its licence class.
```

A good subject world is concrete enough to settle an argument. "Nautical chart conventions" tells you which colour means caution and how labels are set. "Clean and modern" settles nothing.
