---
version: alpha
name: Shiftboard
description: Shift scheduling for small clinics, used all day at the front desk on a desktop and checked by staff on phones.
colors:
  ink: "#162525"
  paper: "#F7FBFB"
  surface: "#ECF1F2"
  text-muted: "#4E5E5F"
  border: "#D4DDDD"
  border-control: "#738485"
  accent: "#21716D"
  on-accent: "#FFFFFF"
  danger: "#B63132"
  on-danger: "#FFFFFF"
typography:
  heading-1:
    fontFamily: Public Sans
    fontSize: 23px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0em
  body:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0em
rounded:
  sm: 4px
  md: 6px
  lg: 10px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 8px 14px
---

# Shiftboard design system

## Overview
- Surface: product
- Audience and job: front-desk staff filling open shifts before the day starts.
- Subject world: the paper rota pinned in a clinic back office, with its grid, initials and handwritten gaps.
- Signature element: open shifts shown as gaps in the week grid, not as a separate list.
- Will not: marketing hero, stat-card rows, gradients, decorative icons.

## Colors
| Token | Light | OKLCH (light) | Job | Pairs (measured) |
|---|---|---|---|---|
| ink | #162525 | 0.251 0.020 196 | Body text | text on paper 15.20:1; text on surface 13.91:1 |
| paper | #F7FBFB | 0.985 0.004 197 | Page background | |
| surface | #ECF1F2 | 0.955 0.006 211 | Panels, secondary buttons | |
| text-muted | #4E5E5F | 0.469 0.020 201 | Secondary text | text on paper 6.52:1; text on surface 5.96:1 |
| border | #D4DDDD | 0.891 0.010 197 | Decorative dividers only | |
| border-control | #738485 | 0.600 0.020 201 | Input edges | ui on paper 3.75:1; ui on surface 3.43:1 |
| accent | #21716D | 0.501 0.075 190 | Primary action only | text on paper 5.52:1 |
| on-accent | #FFFFFF | 1.000 0.000 0 | Text on the primary button | text on accent 5.76:1 |
| danger | #B63132 | 0.519 0.170 25 | Destructive actions and errors | text on paper 5.80:1 |
| on-danger | #FFFFFF | 1.000 0.000 0 | Text on destructive buttons | text on danger 6.04:1 |

Dark theme: not designed yet. The product ships light only until a dark column is added here.

## Typography
- Families: Public Sans (SIL Open Font Licence; chosen for plain, institutional legibility at 14px).
- Scale ratio: 1.2 from a 16px body.

| Role | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| heading-1 | 23px | 600 | 1.2 | 0em | Page titles |
| body | 16px | 400 | 1.5 | 0em | Body copy |
| label | 14px | 500 | 1.3 | 0em | Grid labels, buttons, menus |

## Layout and spacing
- 4px base. Control height 36px on desktop, 44px under coarse pointers.

## Elevation and depth
- Strategy: borders only. No shadows.

## Shapes
| Step | Value | Used on |
|---|---|---|
| sm | 4px | Inputs, chips |
| md | 6px | Buttons |
| lg | 10px | Panels |

## Components
| Component | Tokens | States covered |
|---|---|---|
| button-primary | accent, on-accent, rounded.md | hover, focus-visible, active, disabled |
| button-secondary | surface, ink, rounded.md | hover, focus-visible, active, disabled |

## Motion
- Uses the Design Atlas motion token block without changes.

## Accessibility
- Contrast target: WCAG 2.2 AA.

## Responsive behaviour
- Not designed yet beyond the coarse-pointer control height under Layout and spacing.

## Do's and Don'ts
- Do: one filled accent button per view.
- Don't: add a second accent hue.

## Overrides
None.

## References
None recorded. The system was drawn from the paper rota, not from outside references.

## Agent guide
- To add a component: reuse the tokens above, add a row under Components, and list its states.
- Known gaps: dark theme, responsive layout of the week grid.

## Provenance
- Written: 2026-09-01. Measured: all pairs above, from hex values.
