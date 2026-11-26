# DESIGN.md, short form

One file at the project root that records the look you are building, in enough detail that the next agent does not reinvent it. Seven sections, about 80 lines. Use it by default.

The strict fifteen-section format in [design-md-format.md](design-md-format.md) is for work that has to survive an audit: a design system, a marketing site with many hands, or the atlas's own site. Do not impose it on a product page because a document exists.

## Rules

- Front matter keeps the eight Google spec keys (`version`, `name`, `description`, `colors`, `typography`, `rounded`, `spacing`, `components`) so existing parsers still read it. Keep it short: the tokens you actually use.
- Colours are hex in the front matter, with the OKLCH value beside them in the table when you have it.
- Every value that appears twice becomes a token. Components reference tokens, not raw values.
- Measured values go in tokens; anything you guessed is written `inferred` in the prose.
- Do's and Don'ts are checkable limits, not advice.
- Name the references you adapted, with their source, so the design has a lineage.

## Template

```markdown
---
version: alpha
name: <project>
description: <one line: surface, audience, and the look in a phrase>
colors:
  bg: "#F8F7F2"
  surface: "#F1EFE7"
  text: "#2A2618"
  text-muted: "#625C4A"
  accent: "#7E5E14"
  border: "#DFDBCE"
typography:
  display:
    fontFamily: "<display stack>"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.05
  body:
    fontFamily: "<body stack>"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: 4px
  md: 6px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
components: {}
---

# <Project> design

## 1. Overview
Surface and job, the subject world the look borrows from, the signature element, and what this design will not do.

## 2. Colour
| Token | Hex | OKLCH | Job |
|---|---|---|---|
| bg | #F8F7F2 | 0.976 0.007 97 | Page |
| accent | #7E5E14 | 0.502 0.095 83 | Links, active state |

Contrast: body text on bg <ratio>:1, muted text <ratio>:1, accent on bg <ratio>:1.

## 3. Type
| Role | Family | Size / line | Weight | Why |
|---|---|---|---|---|
| display | <family> | 48 / 1.05 | 600 | <reason> |
| body | <family> | 16 / 1.55 | 400 | <reason> |

Licence of each face, and the free substitute when it is commercial.

## 4. Layout and shape
Spacing base, container width, density, radius steps and where each is used.

## 5. Motion
| Where | Duration | Easing | What moves |
|---|---|---|---|
| Hover | 150ms | ease-out | Colour and underline only |

Reduced motion: what stops.

## 6. Components and bans
The handful of components that matter, their tokens and states. Then the Don'ts as checkable limits.

## 7. References
| Adapted from | What was borrowed | Source |
|---|---|---|
| <brand or site> | palette roles, type pairing | `sites/<slug>.md`, `styles/<slug>.md`, <URL> |

Provenance: what you measured, what you inferred, and the date.
```

## Validate without the strict validator

The strict validator checks the fifteen-section format only. For the short form, check these by hand before building:

- Every `{colors.x}` reference resolves to a token in the front matter.
- Every colour pair you rely on for text meets 4.5:1; UI edges and focus rings meet 3:1.
- The Direction in the brief matches the Overview here; if they diverged, one of them is wrong.
- No component repeats a raw hex, size or radius that already exists as a token.
