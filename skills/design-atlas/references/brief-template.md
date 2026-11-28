# Brief template

The brief is the deliverable: what the user builds from. Keep it under about 50 lines.

## Template

```markdown
# Reference brief: <task in a few words>

Atlas: <local clone at PATH | bundled snapshot, latest review DATE>

## Task
<goal, surface, audience and stack, in one to three lines>

## References
| Reference | What to borrow | Why it fits | Source |
|---|---|---|---|
| <title> | <the specific pattern: palette roles, type pairing, spacing, motion> | <one line tying it to this project> | `sites/<slug>.md` + `styles/<slug>.md` or a URL |

## Direction
- Palette: <roles and the accent>
- Type: <display and body pairing>
- Spacing and shape: <density, radius>
- Motion: <timing and what moves>
- Signature: <the one element this design is remembered by>

## Live examples
| Example URL | Observed design move | Adaptation for this project | Visual evidence |
|---|---|---|---|
| <individual website URL> | <what you saw in the rendered page> | <how to use the idea with our content> | <screenshot or not visually verified> |

## Copying someone's code or assets
<only when the user will paste code, assets or fonts: which may be taken and which is ideas-only. Otherwise: "None: ideas borrowed, no code or assets copied.">

## Agent hand-off
- <install or connect command copied from "Using it with agents", pinned>

## Not checked
- <pages, styles or sites not read, and what would settle them>

## Next step
<one line: hand to design-atlas-ui, ask the user a question, or done>
```

Rules for the cells:

- **What to borrow** names a pattern, not a site. "Restrained neutrals with one accent per state" is a borrow; "use Linear" is not. Say whether the source is a direct reference, a discovery source or both, and for discovery add the search term or filter that led to the examples you inspected.
- **Why it fits** connects the pattern to the user's content, audience or constraints. If it does not fit, it does not belong in the table.
- **Source** is an atlas page path, a style file path, a URL you opened, or any combination. A pattern with no source is a claim.
- **Direction** is five lines and no more. It is what makes the brief a design rather than a reading list. Every line should be buildable.
- **Live examples** identify exactly whose interface was inspected. A gallery's own UI can be a direct reference; label it as such. A thumbnail is a preview, not an inspection. Write `none: non-visual task` when the task is choosing an asset by metadata.
- **Copying** is the only section about licence. Keep it to one or two lines, and only when something will be pasted.

## Worked example, inspiration

Request: "We're rebuilding our docs site, it's a developer tool. Want it to feel editorial but still fast to scan."

```markdown
# Reference brief: developer docs with an editorial feel

Atlas: local clone at ~/code/design-atlas

## Task
Docs site for a developer tool: reference pages, guides, changelog. Next.js, no design system yet.

## References
| Reference | What to borrow | Why it fits | Source |
|---|---|---|---|
| Stripe Docs | Two-column reading layout with a sticky right rail for anchors; body measure held to about 70 characters | The content is reference-heavy, so scanability beats storytelling | `sites/stripe.md` + URL |
| Linear | Neutral surfaces with a single accent reserved for state, never for decoration | Keeps a dense tool from looking promotional | `styles/linear.md` |
| Pond Design | Editorial headline pairing: high-contrast display over a quiet text face | Gives the changelog and guides a voice without slowing the reference pages | `sites/pond-design.md` + URL |

## Direction
- Palette: bone surface, ink text, one brass accent for links and current state.
- Type: condensed display for h1 and pull quotes, system sans at 17/28 for body.
- Spacing and shape: 8px base, generous vertical rhythm, 6px radius, 1px rules only.
- Motion: 150ms fades on hover and on rail changes; nothing on page load.
- Signature: a numbered section index in the left rail that tracks the reader.

## Live examples
| Example URL | Observed design move | Adaptation for this project | Visual evidence |
|---|---|---|---|
| https://stripe.com/docs/payments | Sticky right rail with active-section marking, body capped at ~70ch | Same rail, but numbered and with our guide order | screenshot, desktop |
| https://linear.app | Accent used only on the active item and the primary action | Reserve brass for links and current page | screenshot, desktop and 390px |

## Copying someone's code or assets
None: structure and type pairings are adapted, no code, images or brand marks copied.

## Agent hand-off
- Type: use the free substitute named in each style file rather than the commercial original.

## Not checked
- Pond Design was inspected at desktop only; mobile rhythm unverified.

## Next step
Hand to design-atlas-ui to write DESIGN.md and build the shell.
```

## Worked example, copying

Request: "Need an icon set I can ship in a commercial React app, ideally one Claude Code can fetch over MCP."

The same template, with the "References" table describing the sets and the "Copying someone's code or assets" section carrying the licence conditions:

| Reference | What to borrow | Why it fits | Source |
|---|---|---|---|
| Iconoir | Outline set installed as a React package with one provider for stroke and size | Permissive licence, so it can ship in the product | `sites/iconoir.md` |
| icons0 | Search by meaning, then fetch the single icon | Agent access without bundling a whole set | `sites/icons0.md` |

```markdown
## Copying someone's code or assets
- Iconoir: MIT, ship it and keep the notice.
- icons0: each collection keeps its own licence; filter to MIT or Apache before fetching.
- Carbon: Apache-2.0, ship it, but no IBM marks or name.
```
