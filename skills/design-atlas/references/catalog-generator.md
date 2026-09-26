# Catalog generator

`catalog.json` and `hub-map.md` in this folder are generated snapshots of the atlas. The skill falls back to them when neither a local clone nor raw GitHub is reachable, for example after `npx skills add`, which copies only this skill folder. This page is for maintainers; an agent using the skill never needs it.

## What the snapshot holds

- `catalog.json`: an `about` object, the topic list, and one line per listed site with the fields of `sites.json` minus `formats`. Removed sites are left out, as in `sites.json`. One record per line keeps it greppable and valid JSON at once.
- `hub-map.md`: one table row per hub with its scope, its "Start here" slugs and its adjacent hubs, taken from each hub's "Related topics".

`about.latest_review` is the newest `reviewed` date in the snapshot. It is used instead of a commit hash so that the output depends only on the content, which keeps `npm run check` deterministic.

## Emitting it from `npm run build`

With the skill at `skills/design-atlas/`, add this block to `scripts/build.mjs` after `sites.json` is added to `outputs`. It reuses `topics`, `listed` and `outputs`, so the existing `--check` run fails whenever the snapshot is stale.

```js
const SKILL_REFS = 'skills/design-atlas/references';
const CATALOG_FIELDS = ['slug', 'path', 'title', 'description', 'url', 'type', 'topics', 'verdict', 'agent', 'pricing', 'licence_class', 'licence', 'reviewed', 'status', 'note', 'related'];
const catalogRow = (s) => JSON.stringify(Object.fromEntries(CATALOG_FIELDS.filter((k) => s[k] !== undefined).map((k) => [k, s[k]])));
const about = {
  name: 'Design Atlas bundled catalog',
  repository: 'https://github.com/sthbryan/design-atlas',
  snapshot_of: 'main',
  latest_review: listed.map((s) => s.reviewed).sort().at(-1),
  content_licence: 'CC BY 4.0, Design Atlas contributors',
};
outputs.set(`${SKILL_REFS}/catalog.json`, [
  '{',
  `"about":${JSON.stringify(about)},`,
  '"topics":[',
  topics.map((t) => JSON.stringify({ slug: t.slug, path: t.path, title: t.title, description: t.description })).join(',\n'),
  '],',
  '"sites":[',
  listed.map(catalogRow).join(',\n'),
  ']',
  '}',
  '',
].join('\n'));

const hubSection = (body, name) => (body.match(new RegExp(`^## ${name}\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm')) ?? [])[1] ?? '';
const slugsIn = (text, pattern) => [...text.matchAll(pattern)].map((m) => `\`${m[1]}\``).join(', ');
outputs.set(`${SKILL_REFS}/hub-map.md`, [
  '# Hub map',
  '',
  `A snapshot of every hub, generated with \`catalog.json\` (latest review ${about.latest_review}): its scope, its "Start here" picks and its adjacent hubs. Read it to choose hubs without opening them, and to widen a thin hub. When a live hub is reachable, the live hub wins.`,
  '',
  'A hub marked "none yet" has no curated picks. Query the index for its topic, then read the adjacent hubs.',
  '',
  '| Hub | Scope | Start here | Adjacent hubs |',
  '|---|---|---|---|',
  ...topics.map((t) => `| \`${t.slug}\` | ${t.description} | ${slugsIn(hubSection(t.body, 'Start here'), /\(\.\.\/sites\/([a-z0-9-]+)\.md\)/g) || 'none yet'} | ${slugsIn(hubSection(t.body, 'Related topics'), /\(([a-z0-9-]+)\.md\)/g)} |`),
  '',
  'Every hub has the same sections: Start here, All sources, Patterns worth reusing, Pitfalls and Related topics. Read "Start here", "Patterns worth reusing" and "Pitfalls"; skip "All sources", because the index already lists them.',
  '',
].join('\n'));
```

Also list both files under "Generated content" in `AGENTS.md`, so contributors don't edit them by hand.

## Versioning

The snapshot changes with every site edit. Bump the skill's `metadata.version` and the plugin version per release, not per rebuild. Installs that find a local clone or reach raw GitHub never read the snapshot, so a slightly older copy only affects fully offline use.
