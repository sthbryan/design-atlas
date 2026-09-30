# Direction

How to choose a visual direction: name the surface, look up references in the atlas, respect their licences, and test the plan against the default an agent would produce anyway.

## Contents

- [Surfaces](#surfaces)
- [Find the atlas](#find-the-atlas)
- [Look up references](#look-up-references)
- [Optional research subagent](#optional-research-subagent)
- [Inspect live examples](#inspect-live-examples)
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

Read the atlas index from disk; the later visual inspection opens shortlisted public websites in a browser. Use the first atlas location that exists:

1. The working tree or one of its parents, when it holds `sites.json` and a `topics/` folder.
2. A plugin install, where the atlas root sits two levels above this skill folder (`../../sites.json`).
3. A path the user gives.

If none exists, say so and write `Atlas not available` in the References section of DESIGN.md. Search for a few live examples directly when the task needs visual inspiration; mark that they were found outside the atlas.

## Look up references

Read the index before pages. Read at most two hubs and five site pages, and cite at most five atlas sources, unless the user asks for more. These are the same limits the `design-atlas` skill uses.

1. **Query the index.** When the `design-atlas` skill sits beside this skill folder, or the atlas root has `skills/design-atlas/`, run its query script and follow the offline rule in that skill's "Find the atlas first" section. The examples below are the offline form, which reads a local clone or that skill's bundled catalog and nothing else:

   ```sh
   Q=path/to/design-atlas/scripts/query.mjs
   node "$Q" --offline --topics
   node "$Q" --offline --topic landing-pages,cta --min-verdict useful
   node "$Q" --offline --topic icons --licence ship --full
   ```

   When the script reports `"location":"bundled"`, only the index is on disk. Use its rows, skip steps 3 and 5, and mark each atlas page `page not read` in DESIGN.md. The row's URL can still lead to a live source.

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

6. **Record.** For each reference, copy the index row's `sites/<slug>.md` path exactly, then note what you take from it, its `licence_class` and its `reviewed` date. The skill directory and the gallery homepage are not atlas page paths. Counts and prices on a page are true only as of that date.

For asset or library selection, prefer variety: a gallery, a tool and an asset source can solve different parts of a task. For visual direction, prioritize a few concrete website examples over a longer list of directories.

## Optional research subagent

When a new direction needs several Atlas lookups and live-site inspection, delegate that bounded research to one subagent if the host supports it. This keeps the main agent's working context focused on the project. Give the subagent the design brief, audience and constraints, and ask for visual patterns rather than sites that merely share the subject. A small edit or an existing DESIGN.md needs no research delegation.

Ask for a compact handoff of one to three individual examples: Atlas page path (or `outside Atlas`), exact live URL, what was visibly observed at desktop and narrow widths, the design move worth adapting, what should not carry over, licence class and review date or `not checked`. Include screenshots of the actual examples when the browser can capture and share them, with the URL and viewport identified. Keep working screenshots outside the Atlas repository. If screenshots cannot be transferred, say so instead of claiming visual proof.

The main agent opens the shared screenshots before using the findings, checks that each proposed move fits the project, and records the chosen examples in DESIGN.md. If no visual evidence reaches the main agent, open the strongest example directly or mark the visual judgment `not visually verified`. The main agent still owns implementation and review of the built UI; the research handoff is not a review of the result.

## Inspect live examples

For a new visual direction, the atlas is a map to examples, not the visual evidence itself. The `design-atlas` skill owns source roles, discovery routes and direction options; carry its brief and the user's choice into the direction record. Use the browser tools available in the host to open one to three individual sites from the shortlisted galleries or direct references. A gallery's own interface can be a direct reference when relevant to the task; label those observations separately from its featured sites. A screenshot tile does not establish a featured site's current design. Choose sites that fit the requested surface and audience, then:

1. Capture and look at the rendered page at desktop and narrow widths when possible. Check at least the first screen and one lower section; inspect an interaction or motion if it is part of the idea. Use the browser's screenshot capability, and keep working screenshots outside the atlas repository.
2. Record the exact live URL and the evidence you saw: composition, hierarchy, typography, spacing, colour roles, imagery, motion or interaction. Separate measured values from visual estimates and atlas prose. If the page is unavailable, try another candidate rather than treating an old gallery thumbnail as the current design.
3. Translate each useful move into a decision for this product, with its own content and constraints. Record what should not carry over. Borrow a design principle, never another site's brand, copy, image or code without rights.

If no visual browser is available, use supplied screenshots if any and label the live view `not visually verified`. Say which design judgments remain uncertain; do not claim to have seen a site from its text or thumbnail. Keep the sample small and respect each site's access terms; this is visual research, not crawling.

The atlas's licence class describes the indexed source, not every website featured inside a gallery. Treat those individual sites as inspiration only unless their own rights are checked before reusing code or assets.

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

### Named styles

When the brief names a style, compare the plan against that style's stock version below instead of the surface row. The traits the brief asked for are fixed and do not count as matches. The rest of the stock look does, and that rest is where the product's own subject world should show.

| Style | Stock version |
|---|---|
| Brutalist | Thick black borders on every box, a yellow or lime accent, hard offset shadows on cards and buttons, all-caps headings and a rotated sticker. |
| Glass | A purple-to-blue gradient or blurred colour blobs behind frosted white cards, white hairline edges, heavy blur on every layer and white text whose contrast nobody measured. |
| Y2K or acid | Chrome gradient text on every heading, magenta and cyan glow on black, warped type, stars and sparkles, and a scrolling marquee. |
| Kids | A primary-colour rainbow, emoji as icons, a bubbly rounded display face, confetti on every success and bounce on everything. |
| Luxury | Cream or black ground, a high-contrast serif set in widely tracked capitals, gold hairlines and tiny letter-spaced labels. |
| Pixel or 8-bit | One pixel font on every string, CRT scanlines and glow over the whole page, saturated primaries and a blinking cursor. |
| Editorial | Cream paper, a high-contrast serif, hairline rules and small monospace labels. |
| Terminal | Near-black, one neon accent, monospace everywhere and visible grid lines. |
| Swiss poster | Uppercase grotesque, a heavy grid and a single red accent. |

Departures can be defaults too. Editorial, terminal and Swiss poster are what an agent reaches for once it is told to avoid the surface list above. A plan that lands in one of them without the brief naming it needs a reason from the subject world, not from the wish to look different.

## Direction record

Write the direction in five lines before any tokens. The References line cites atlas pages by path.

```text
Audience and job: who uses it, where, and the one thing they came to do.
Subject world: the materials, conventions or data this look is drawn from.
Signature element: one element that could only belong to this product.
Will not: three to five defaults this direction rejects, each specific.
References: two to five atlas pages (the limit in Look up references), each with what you take and its licence class.
```

A good subject world is concrete enough to settle an argument. "The date-due slip" tells you how dates are set and which colour marks what is yours. "Clean and modern" settles nothing.
