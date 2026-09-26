# Brief template

Fill every section. Write "none" rather than deleting one, so the reader knows it was considered. Keep the whole brief under about 60 lines.

## Template

```markdown
# Reference brief: <task in a few words>

Atlas: <local clone at PATH | raw GitHub, main | bundled snapshot, latest review DATE>

## Task
<goal, surface, audience and stack, in one to three lines>

## Constraints
<ships code or assets? commercial? agent channel needed? budget?>

## References
| Reference | Page | Take | Licence | Agent | Reviewed |
|---|---|---|---|---|---|
| <title> | `sites/<slug>.md` | <what to use it for, one line> | <class: consequence> | <channels, with any key or plan> | <YYYY-MM-DD> |

## Reusable ideas
- <idea in your own words> (<site title>)

## Live examples
| Example URL | Observed design move | Adaptation for this project | Visual evidence |
|---|---|---|---|
| <individual website URL> | <what you saw in the rendered page> | <how to use the idea with our content> | <browser screenshot or not visually verified> |

## Licence caveats
- <reference>: <condition, and where to confirm it>

## Agent hand-off
- <install or connect command copied from "Using it with agents", pinned>

## Not checked
- <pages not read, licences not re-checked at the site, stale rows>

## Next step
<one line: hand to design-atlas-ui, ask the user a question, or done>
```

Rules for the cells:

- **Take** says what to use the reference for in this task, not what the site is.
- **Licence** follows the wording in `licence-guide.md`.
- **Agent** lists the index's channels. Give each channel its gate as the page states it: an API key, an account, a paid plan, or free with no account. Write "gate not checked" when the page was not read, and "none" for an empty list.
- **Reviewed** comes from the index, never from today's date.
- **Reusable ideas** come from the pages' "Reusable ideas" and the hubs' "Patterns worth reusing", paraphrased, with three to six items.
- **Live examples** are individual websites inspected for visual tasks, not just gallery homepages. Write `none: non-visual task` when choosing an asset or library by metadata alone. A gallery screenshot is labelled as a gallery preview, not a live-site inspection.

## Worked example

Request: "Need an icon set I can ship in a commercial React app, ideally one Claude Code can fetch over MCP."

```markdown
# Reference brief: icons for a commercial React app

Atlas: local clone at ~/code/design-atlas

## Task
Pick an icon set for a commercial React product, with agent access if possible.

## Constraints
Assets ship in a commercial app; an MCP channel is preferred; no budget stated.

## References
| Reference | Page | Take | Licence | Agent | Reviewed |
|---|---|---|---|---|---|
| Iconoir | `sites/iconoir.md` | Main outline set, React package with a shared provider | open-source-permissive: ship, keep the MIT notice | none | 2026-09-25 |
| icons0 | `sites/icons0.md` | Search icons by meaning and fetch single ones | mixed: each collection keeps its own licence | mcp (API key), registry | 2026-09-25 |
| Carbon Design System | `sites/carbon-design-system.md` | Large icon and pictogram packages | open-source-permissive: ship, keep the Apache-2.0 notice, no IBM marks | mcp (IBMid, access on request), llms-txt, skill | 2026-09-25 |
| 3dicons | `sites/3dicons.md` | 3D glyphs for marketing sections and empty states | public-domain: ship | none | 2026-09-25 |

## Reusable ideas
- Set stroke, size and colour once in a provider instead of on every icon (Iconoir).
- Have the agent search for an icon before fetching it by name, since names get renamed (icons0).
- Keep 3D glyphs to medium sizes and marketing surfaces; they blur in dense UI (3dicons).

## Live examples
none: non-visual task.

## Licence caveats
- icons0: filter to MIT or Apache collections before fetching; some collections are CC BY or GPL.
- Carbon Design System: Apache-2.0 grants no trademark rights, so keep IBM's name and logo out.

## Agent hand-off
- Iconoir: install `iconoir-react` at a pinned version; the page has no MCP, so check names against the repo's icon folders.
- icons0: the MCP needs a token from the site; without it, use the direct registry URL the page gives.
- Carbon: its packages run a telemetry postinstall script; set `CARBON_TELEMETRY_DISABLED=1` to opt out.

## Not checked
- Licence pages on the sites were not re-opened; the atlas facts date from 2026-09-25.
- Individual icons0 collections were not checked.

## Next step
Hand to design-atlas-ui to wire Iconoir into the app, or confirm the choice first.
```
