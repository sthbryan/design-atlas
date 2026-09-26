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
| Token | Light | Dark | Job | Pairs (measured) |
|---|---|---|---|---|
| ink | #162525 | not designed | Body text | 15.20:1 on paper |
| paper | #F7FBFB | not designed | Page background | |
| surface | #ECF1F2 | not designed | Panels, secondary buttons | |
| text-muted | #4E5E5F | not designed | Secondary text | 6.52:1 on paper, 5.96:1 on surface |
| border-control | #738485 | not designed | Input edges | 3.75:1 on paper, 3.43:1 on surface |
| accent | #21716D | not designed | Primary action only | 5.52:1 on paper; on-accent 5.76:1 |
| danger | #B63132 | not designed | Destructive actions and errors | on-danger 6.04:1 |

## Typography
- Families: Public Sans (SIL Open Font Licence; chosen for plain, institutional legibility at 14px).
- Scale ratio: 1.2 from a 16px body.

## Layout and spacing
- 4px base. Control height 36px on desktop, 44px under coarse pointers.

## Elevation and depth
- Strategy: borders only. No shadows.

## Motion
- Uses the Design Atlas motion token block without changes.

## Accessibility
- Contrast target: WCAG 2.2 AA.

## Do's and Don'ts
- Do: one filled accent button per view.
- Don't: add a second accent hue.

## Provenance
- Written: 2026-09-01. Measured: all pairs above, from hex values.
