# Styles corpus

Exported DESIGN.md files from real brands, kept so an agent can read how a look is actually built: colour roles, type scale, spacing, radius, components and do's and don'ts. This is raw material for inspiration.

## What is in git, and what is not

- `styles/<slug>-<uuid>.md`: a **curated subset** of 72 exports, chosen for completeness of the format (components, surfaces, elevation, type substitutes) and brand coverage. About 1.8 MB.
- `styles/index.json`: one record per committed file, for lookups by name, path and source.
- The full catalogue is **1,343 exports, about 30 MB**. It is not in git: it would be permanent history for text that never changes, and most of it repeats the same structure. Its complete index ships with the skill as `skills/design-atlas/references/styles-index.json`, so an agent can still see every brand and its source URL, and open the live site when the file is not here.

## How to use it

```sh
jq -r '.[] | select(.name | test("linear|vercel|stripe"; "i")) | "\(.name)\t\(.path)"' styles/index.json
grep -n '^## ' styles/linear-90ce5883.md
```

Read the whole file for a shortlist of two or three. Take the structure and the role naming, then build with your own values.

## Using the full catalogue locally

Unpack `DESIGNS MD.rar` (Refero Styles export) into a folder and copy the files you want into `styles/`, keeping the archive's filenames, the front matter this repo adds, and a matching record in `styles/index.json`. Nothing else is needed: the pages are plain markdown and no script reads them at build time.

## What these files are not

- **Not the brand's own document.** Every export states that measurements are normalised, roles are interpreted and the HTML is rebuilt rather than taken from the source site.
- **Not licensed.** The exports carry no licence of their own, only a link to the style page they came from. Treat them as inspiration: adapt the idea, never republish the file as someone's design system, and never take a brand's marks or assets.
- **Not complete.** There are no motion tokens and no accessibility data. Motion timing and contrast come from the live site.
- **Not deduplicated by brand across the catalogue.** The full 1,343 include some brands twice and 12 generic "Home" pages; this subset keeps one file per brand and no generic names.

## Adding to it

A new file goes in as `styles/<slug>.md` with the same front matter and a matching record in `styles/index.json`. Curate: add a brand whose format is complete and whose look teaches something the subset does not already cover, not every export you have.
