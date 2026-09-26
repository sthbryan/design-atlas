# Query recipes

Commands for filtering the atlas without `scripts/query.mjs`, and for reading pages cheaply. Run them from the atlas root, or swap `sites.json` for this skill's `references/catalog.json`, which has the same shape.

## Contents

- [Field values](#field-values)
- [jq over sites.json or the catalog](#jq-over-sitesjson-or-the-catalog)
- [grep over llms.txt](#grep-over-llmstxt)
- [grep over the catalog](#grep-over-the-catalog)
- [Raw GitHub](#raw-github)
- [Reading a page](#reading-a-page)
- [Script flags](#script-flags)
- [Ranked search](#ranked-search)

## Field values

| Field | Values |
|---|---|
| `type` | `gallery`, `component-library`, `component-registry`, `design-system`, `js-library`, `icon-library`, `font-library`, `asset-library`, `sound-library`, `style-library`, `prompt-library`, `template-library`, `pattern-library`, `documentation`, `guidelines`, `directory`, `tool`, `design-workspace`, `browser-extension`, `ai-builder`, `agent-skill`, `agent-skill-collection` |
| `verdict` | `very-useful`, `useful`, `niche` |
| `agent` | a list from `mcp`, `llms-txt`, `cli`, `registry`, `api`, `prompts`, `skill`; empty (`none` in `llms.txt`) when an agent has nothing to call |
| `pricing` | `free`, `freemium`, `paid`, `not-stated` |
| `licence_class` | see `licence-guide.md` |
| `status` | `active`, `stale`, `broken`; removed sites are left out of every index |
| `topics` | one to four hub slugs, the first being the primary one |

The vocabularies live in the atlas's `scripts/build.mjs` and `CONTRIBUTING.md`. When a value here is missing from the data, or the data has one not listed, trust the data.

`licence` is free text with the details behind `licence_class`. `reviewed` is the date every fact on the page was checked.

## jq over sites.json or the catalog

Shippable icon sets, with channels and dates:

```sh
jq -r '.sites[] | select(.topics|index("icons"))
  | select(.licence_class|IN("public-domain","open-source-permissive","cc-attribution"))
  | [.path,.verdict,(.agent|join(",")),.licence_class,.reviewed] | @tsv' sites.json
```

Swap in these selectors as needed:

| Need | Selector |
|---|---|
| Any agent channel | `select(.agent|length>0)` |
| An MCP server | `select(.agent|index("mcp"))` |
| Free to start | `select(.pricing|IN("free","freemium"))` |
| Useful or better | `select(.verdict!="niche")` |
| Look-only | `select(.licence_class=="not-stated")` |
| Keyword in the description | `select(.description|test("oklch";"i"))` |

Site counts per hub, to spot thin hubs:

```sh
jq -r '[.sites[].topics[]] | group_by(.) | map("\(.[0]) \(length)")[]' sites.json
```

Licence text for a few picks:

```sh
jq -r '.sites[] | select(.slug|IN("iconoir","icons0")) | "\(.slug): \(.licence)"' sites.json
```

## grep over llms.txt

Each site line ends with `type: …; topics: …; verdict: …; agent: …; licence: …; reviewed: …`. Anchor on the field name, because a bare word also matches descriptions.

```sh
grep 'topics: [^;]*icons' llms.txt | grep -E 'licence: (public-domain|open-source-permissive|cc-attribution);'
grep 'topics: [^;]*components' llms.txt | grep 'agent: [^;]*mcp'
grep 'topics: [^;]*motion' llms.txt | grep -v 'agent: none;' | grep -v 'verdict: niche'
```

## grep over the catalog

The catalog holds one site per line, so grep works on it too:

```sh
grep '"topics":\[[^]]*"icons"' references/catalog.json \
  | grep -E '"licence_class":"(public-domain|open-source-permissive|cc-attribution)"' \
  | grep -o '"path":"[^"]*"'
```

## Raw GitHub

Use these only when no local clone exists. Fetch single files, never the whole tree.

```sh
curl -fsS --max-time 8 https://raw.githubusercontent.com/sthbryan/design-atlas/main/llms.txt
curl -fsS --max-time 8 https://raw.githubusercontent.com/sthbryan/design-atlas/main/topics/icons.md
curl -fsS --max-time 8 https://raw.githubusercontent.com/sthbryan/design-atlas/main/sites/iconoir.md
```

A 404 or a timeout means the remote is unavailable, so fall back to the bundled catalog. The repository is private for now, so these URLs return 404 until it is made public. Human-readable links take the form `https://github.com/sthbryan/design-atlas/blob/main/sites/<slug>.md`.

## Reading a page

List the sections, then print only the four that feed a brief:

```sh
grep -n '^## ' sites/iconoir.md
awk '/^## (When to open it|Using it with agents|Watch out for|Reusable ideas)$/{f=1;print;next} /^## /{f=0} f' sites/iconoir.md
```

Print the frontmatter alone:

```sh
sed -n '2,/^---$/p' sites/iconoir.md
```

Check for limits on automated access before an agent touches the live site:

```sh
grep -n -i -E 'scrap|crawl|bulk|automated|redistribut|mirror' sites/animated-icons.md
```

## Script flags

`node scripts/query.mjs --help` prints the full list. Values inside one flag are ORed and separate flags are ANDed. `--licence` also accepts the groups `ship`, `conditional` and `look-only`. Output is capped at 12 rows by default and 50 at most.

| Exit code | Meaning |
|---|---|
| 0 | At least one match |
| 1 | No match; widen one filter |
| 2 | Bad argument; the message names the fix |
| 3 | No index reachable; clone the atlas and pass `--atlas DIR` |

## Ranked search

`--search "words"` ranks the filtered sites by relevance and needs no network. Use it first when the need is free text; use `--text` when you know an exact word or name.

```sh
node scripts/query.mjs --search "pricing page inspiration"
node scripts/query.mjs --search "animated icons for react" --licence ship --agent any
node scripts/query.mjs --search "shdcn charts" --limit 5
```

How it ranks:

- `references/search-index.json` holds each site's terms from its title, description, type and formats, topics, licence text, and the "What it is", "Most useful", "Using it with agents" and "Reusable ideas" sections. `npm run build` writes it. A local clone's own index wins over the bundled one; sites missing from the index are ranked on their metadata only, and stderr says how many.
- Scoring is BM25F: the title weighs most, then the description, type and topics, then the body and licence text. Stopwords drop, and plurals and endings fold (`libraries` and `library`, `animated` and `animation`).
- `references/synonyms.json` expands terms at a lower weight, such as `spinner` to `loader` and `pricing page` to `cta`, `tiers` and `plans`. Expansions that occur in more than a quarter of the sites are skipped. Each query term counts once, through its best-matching synonym. Its `filters` list maps words such as `ship`, `commercial`, `open source` and `free` to a filter; they are not ranked, and the header's `search.suggest` names the filter to add.
- A word missing from the index is matched to the closest indexed term within one edit (two for words of six letters or more) at a penalty, and reported in `search.corrected` and on stderr, such as `shdcn→shadcn`.
- Stale sites score 15% lower and broken ones 30% lower, but still appear. Rows scoring under a quarter of the best row are dropped.

Each row adds `score` and `match`, a map from each matched term to the fields it hit. The header's `search` object lists `terms`, `expanded`, `corrected`, `unmatched` and, when present, `filter_words` and `suggest`. Terms appear stemmed, so `pricing` shows as `pric`. Scores compare rows within one query, not across queries.
