# Resolved conflicts

The design skills this one was built from disagree on many exact values. This file picks one position for each and gives the reason in one line. It is the only owner of these values.

How to apply it:

- These values win over memory, habit and any other design skill installed next to this one.
- A project's DESIGN.md or documented conventions may change any row except those marked **Floor**. Floor rows come from WCAG 2.2 AA and only move up.
- When DESIGN.md changes a value, use the project's value everywhere. Never ship both.

## Contents

- [Motion](#motion)
- [Type and copy](#type-and-copy)
- [Colour and theme](#colour-and-theme)
- [Layout, targets and icons](#layout-targets-and-icons)
- [Process](#process)
- [Motion token block](#motion-token-block)

## Motion

| ID | Topic | Position | Instead of | Reason |
|---|---|---|---|---|
| M1 | Press feedback | `scale(0.97)` on `:active`, `--dur-press`, `--ease-out`. Buttons, icon buttons, chips and segmented controls only; never cards, rows or inputs. | exactly 0.96; 0.98; a 0ms press | Every studied value sits in 0.96–0.98, and one number stops two press scales shipping side by side. |
| M2 | Curves | `--ease-out` for enter and exit, `--ease-in-out` for movement across the screen, `--ease-drawer` for sheets and drawers, `linear` for progress, plain `ease` for colour and background. | four near-identical ease-out curves used interchangeably | The candidates look alike at UI durations, so one token per job is what keeps a product consistent. |
| M3 | Exit easing | Exits use `--ease-out` at 0.7 × the enter duration with less travel. Never `ease-in` on UI. | ease-in or accelerate curves on exits | An exit that starts slowly holds the old state on screen exactly when the user is looking. |
| M4 | Durations | Press 120ms, hover and colour 150ms, tooltip 150ms, menu and popover 200ms, toast 200ms, modal, drawer and sheet 250ms. Exits per M3, rounded to 10ms. Routine UI never exceeds 300ms. | ranges such as 125–200, 80–120 and 350–600ms | Exact values stop drift between components, and each sits inside the bands the motion skills share. |
| M5 | Orchestrated moment | At most one per page: a first-load or first-reveal sequence of up to 600ms in total. | a scroll reveal on every section | One composed moment reads as intent, while the same fade on every section reads as a template. |
| M6 | Spring bounce | `bounce: 0` (damping ratio 1) everywhere. Up to `bounce: 0.2` only when a released gesture carries velocity, such as a flick or drag-to-dismiss. | 0.1–0.3 for playful UI; overshoot curves on buttons | Overshoot on menus and toggles reads as toy-like, and momentum gives bounce a physical cause. |
| M7 | Enter scale | Menus, popovers and tooltips enter from `scale(0.96)` plus opacity, with `transform-origin` at the trigger. Modals use the same scale, centred. Icon swaps start at `scale(0.25)`. | 0.9–0.95 for overlays; 0.8 for icons; `scale(0)` | A small gap reads as arrival, while zero reads as popping out of nothing. |
| M8 | Stagger | 50ms per item, and the last item starts by 300ms, so items from the seventh on share that delay. One staggered group per view, on first reveal only. Never on lists users filter or revisit. | 30–80ms; about 100ms; 20–100ms with a 500ms total | 50ms falls inside most studied ranges, and the cap keeps long lists from hiding content. |
| M9 | Dense hover | Row and menu-item highlights appear at 0ms and fade out over 100ms. Other hover colour changes use 150ms both ways. | entrances longer than exits for hover | The pointer gets an instant answer, and the short fade-out stops flicker when crossing rows. |
| M10 | Tooltip | Hover delay 500ms, keyboard focus 0ms. Once one has shown, the next opens with no delay and no animation until 300ms pass with none open. Stays open while hovered; Escape closes it (WCAG 1.4.13). | an 800–1000ms delay; an 80–120ms animation | This ignores pass-through pointers without punishing intent, and keyboard users have already asked. |
| M11 | Reduced motion | Motion is opt-in inside `@media (prefers-reduced-motion: no-preference)`. Under `reduce`: no translate, scale, parallax, autoplay, loops or stagger; opacity fades of up to 150ms or instant changes keep each state visible. | setting every duration to about 0ms | Movement triggers vestibular symptoms and fades do not, so the state cue survives without the harm. |
| M12 | Blur | Animated `filter: blur()` of 4px at most, only on icon swaps and on at most one entering element per view. Never on paragraphs. This row covers `filter`; a static `backdrop-filter` on a translucent surface follows C9. | 4px on every entrance; caps of 8px or 20px | Blur costs paint time, and repeated blur-in is a recognisable machine signature. |
| M13 | Animated properties | `transform`, `opacity` and M12 blur only. Progress uses `scaleX()`, not `width`. Floating elements move with `transform`, not `top` or `left`. | "transform only" with `width` still animated in examples | Layout properties re-run layout each frame, and studied builds broke the rule in exactly these two places. |
| M14 | Frequency | No animation on keyboard-triggered actions or on anything used many times a session, such as a command palette, tab switch or list navigation. | tiers that still animate frequent actions | Motion that repeats all day taxes attention every time it plays. |
| M15 | Travel | Entrances, toasts and first reveals move `--travel-enter` (8px). Exits move `--travel-exit` (4px) or only fade. | 12px both ways; full-height slides | Short travel shows direction without making the eye chase the element, and a smaller exit reads as softer. |

## Type and copy

| ID | Topic | Position | Instead of | Reason |
|---|---|---|---|---|
| T1 | Font choice | No font is banned and none is recommended by name. A reflex font needs a one-line reason in DESIGN.md unless the project already uses it. Reflex fonts: Inter, Geist, Roboto, DM Sans, Plus Jakarta Sans, Outfit, Satoshi, Space Grotesk, Instrument Sans, Instrument Serif, Fraunces, Playfair Display, and any mono used as a display face. | ban lists that contradict each other, where one skill bans a face another recommends | Bans and house picks both become the next default, and a written reason is the part a reviewer can check. |
| T2 | Families | Two families at most, plus one mono for code or tabular data. The system UI stack is a valid, stated choice for dense product UI. | two plus an outlier up to three | Each family must earn a distinct role, and a third usually signals indecision. |
| T3 | Large text (**Floor**) | Large text is at least 24px at regular weight (18pt), or at least 18.66px (14pt) at weight 700 or more. Everything smaller is normal text. | 18px, or 14px bold | WCAG defines large text in points and 1pt is 1.333px, so the pixel shortcut misclassifies mid sizes. |
| T4 | Body size | Reading text is 16px. Dense product UI may set labels, tables and menus at 14px. 12px is the floor. Inputs are 16px on phones. | 16px for every UI string; 13px captions | Reading needs 16px, operators scanning data do not, and iOS zooms into inputs under 16px. |
| T5 | Measure | Body copy runs 60–75 characters per line and never more than 80. | 45–75; 65–75; under 80 | This range sits inside every studied source. |
| T6 | Scale ratio | 1.2 for product UI, 1.25 for marketing and reading surfaces, recorded in DESIGN.md. | at least 1.2; always 1.25; anywhere in 1.2–1.333 | Dense screens need close steps and expressive pages need visible jumps. |
| T7 | Tracking | Display type at 40px and up: −0.02em, never tighter than −0.04em. Body: 0. Uppercase labels: +0.06em. | never touching letter-spacing; −0.05em display | Large type looks loose at 0, and letters collide below −0.04em. |
| T8 | Display size | The `clamp()` maximum is 6rem, with display line-height 1.05–1.1. | a 5.5rem cap; line-height 1 | Above 6rem a headline stops fitting phones and short laptop screens. |
| T9 | Headline emphasis | Never accent one word of a headline with italic, colour or a second family. A fully italic heading is fine when the face has a true italic. | a ban on every italic heading | The single accented word is the tell, not italic itself. |
| T10 | Case | Sentence case for headings, buttons, labels and menus. | Title Case for headings and buttons | One policy is calmer, needs no per-word rules and localises cleanly. |
| T11 | Dashes | Zero em dashes (U+2014) in UI copy you write. En dashes only in numeric ranges such as 9–5. Copy the user supplied keeps its punctuation; mention it once. | a ban on every dash; free use | The em dash is the most cited machine-writing tell and a comma or full stop always works. |
| T12 | Eyebrows | At most one eyebrow per page, and only when it carries a fact its heading lacks, such as a date, a status or a step in a real sequence. | banned outright; one per three sections; two per page | A label over every section is template rhythm, while one that adds a fact is information. |

## Colour and theme

| ID | Topic | Position | Instead of | Reason |
|---|---|---|---|---|
| C1 | Accent | One accent hue. Accent fills cover at most 10% of any viewport. One filled primary action per view. | 3–5% of the viewport; a 60/30/10 split | Scarcity is what lets the accent point at the action. |
| C2 | Black and white | No `#000` or `#FFF` for page backgrounds or body text. Pure black or white at 10% alpha or less is fine for image outlines and scrims. | a total ban; pure values everywhere | Pure extremes glare across large areas, yet at low alpha they tint nothing underneath. |
| C3 | Neutrals | Neutrals lean toward the anchor hue at OKLCH chroma 0.005–0.02, with one temperature across the product. | untinted greys; mixed warm and cool greys | Tinted neutrals tie the palette together, and mixed temperatures look accidental. |
| C4 | Contrast (**Floor**) | Text 4.5:1. Large text (T3) 3:1. Control boundaries, meaningful icons, chart marks and focus indicators 3:1 against adjacent colours (WCAG 1.4.3, 1.4.11). Measure on the rendered background in every shipped theme. Text over a texture, pattern, gradient or image sits on a solid token surface, or is measured against the worst case beneath it: the darkest composite under dark text, the lightest under light text (method in `verification.md`). A text pair over such a background with no measured worst case is Blocking. AAA only when DESIGN.md sets it. | AAA for some text in some sections only | AA is the level most laws and audits use, and one target avoids mixed thresholds. |
| C5 | Theme choice | DESIGN.md decides. For a new system, product UI ships light and dark following `prefers-color-scheme`, with a toggle only if the project has one or the user asks. A marketing or reading page ships one theme chosen from where it is read, unless its product ships both. | dark mandatory for consumer pages; dark because the category is technical | Long sessions need both themes, while a single page is better with one theme done well. |
| C6 | Dark elevation | Higher surfaces get lighter. A 1px white ring at 8% (13% on hover) replaces shadow stacks. Lower the accent chroma until its pairs pass C4. | removing all edge definition; inverting the light palette | Shadows vanish on dark grounds, so lightness and a faint ring carry depth. |
| C7 | Gradients | Gradient text: never. Background gradients: at most one per page, two stops, with its job written in DESIGN.md. | a default ban; gradients as atmosphere everywhere | A gradient with a job is craft, and the same wash on every section is decoration. |
| C8 | Depth | One strategy per product: rings, borders or soft shadows. Never a 1px border plus a shadow blur above 8px on one element. | mixing a borders-only rule with a shadow polish rule | Two depth cues on one edge read as a ghost card. |
| C9 | Translucent surfaces | Text on a translucent surface meets C4 against its worst-case composite, declared as a composite row in DESIGN.md (`design-md-format.md`). Write `backdrop-filter` and `-webkit-backdrop-filter` together. The surface switches to an opaque token under `@media (prefers-reduced-transparency: reduce)` and where neither property is supported: an opaque default with the glass inside `@supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))`, or the reverse with `@supports not`. Backdrop blur is 24px at most, on at most two blurred layers visible at once. Never transition or animate `backdrop-filter`; fade the surface's opacity instead. The contrast and the opaque fallbacks count as the floor (`accessibility.md`); DESIGN.md may change only the blur budget. | measuring against one sample photo; glass with no fallback; animated blur | The photo behind the glass changes, so only the worst case holds, and backdrop blur repaints everything beneath it on every frame. |

## Layout, targets and icons

| ID | Topic | Position | Instead of | Reason |
|---|---|---|---|---|
| L1 | Spacing | A 4px base with the scale 4, 8, 12, 16, 24, 32, 48, 64, 96. The gap between groups is at least twice the gap inside a group. | an 8px base; free values | A 4px base lets dense tools and airy pages share one scale. |
| L2 | Target size (**Floor** at 24px) | Floor: 24 × 24 CSS px, or the spacing exception in WCAG 2.5.8. Build default: 44 × 44 under `(pointer: coarse)`, 32 × 32 for fine-pointer dense UI. | 44 × 44 labelled as the AA minimum; 48 to build and 44 to audit | The floor is the actual AA criterion, and building above it leaves room for later edits. |
| L3 | Test widths | 320px (the WCAG 1.4.10 reflow floor), 390px and 1280px, plus 768px when a tablet layout exists, plus 200% zoom. | 320, 375, 414 and 768; 360 and 1280 | Three widths catch most breaks, and 320px is the one audits test. |
| L4 | Radius | One radius scale. Nested radius equals inner radius plus padding. Cards and panels stay within 8–16px unless DESIGN.md says otherwise. Pills only on chips and toggles. | pill-shaped everything; one radius on every element | Radius should say what an element is, and uniform pills erase that. |
| L5 | Bento, tiers and steps | Allowed when the content has that shape. Bento cells equal the items. Pricing tiers equal the plans that exist. Steps equal the real steps. Highlight a tier only when PRODUCT.md or the user names it. | treating these shapes as tells by default | The shape is fine, and inventing content to fill it is the actual failure. |
| L6 | Icons | Use the project's icon set. A new project picks one library for stroke fit and licence, and no library is banned. Stroke weight follows the adjacent text weight. | discouraging one popular library by name | The tell is an unconsidered mix of sets, not any single library. |

## Process

| ID | Topic | Position | Instead of | Reason |
|---|---|---|---|---|
| P1 | Direction approval | Ask once, and only when no DESIGN.md exists or the request changes its direction. Skip when the user said to proceed. | three questions every time; a mode question every session | One round-trip where it changes the outcome, and none where it does not. |
| P2 | Render rounds | Two at most: one full round, then one confirming round. Report what remains. | three scoring rounds; open-ended loops | Cost stays bounded and the report stays honest about leftovers. |
| P3 | Severity | Blocking: the accessibility floor, broken function, dishonest content, numbers that do not add up, a preserved item changed. Important: hierarchy, consistency, token drift and ban-list hits. Polish: isolated details. Taste is never Blocking. | HIGH/MEDIUM/LOW; P0–P3; critical/major/minor | Three levels defined by user impact are enough to act on. |
| P4 | Findings cap | Ten findings in full and the rest counted in one line. Blocking findings are never cut. | a cap of 15; a cap of 3 | Ten is what a person fixes in one sitting. |

## Motion token block

Write these tokens once, in the project's styling system. Components reference the names, never the numbers.

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --dur-press: 120ms;
  --dur-hover: 150ms;
  --dur-tooltip: 150ms;
  --dur-tooltip-exit: 110ms;
  --dur-menu: 200ms;
  --dur-menu-exit: 140ms;
  --dur-toast: 200ms;
  --dur-toast-exit: 140ms;
  --dur-modal: 250ms;
  --dur-modal-exit: 180ms;
  --dur-row-out: 100ms;
  --dur-reduced: 150ms;
  --scale-press: 0.97;
  --scale-enter: 0.96;
  --scale-icon-from: 0.25;
  --blur-enter: 4px;
  --travel-enter: 8px;
  --travel-exit: 4px;
  --stagger-step: 50ms;
  --stagger-max-index: 6;
  --tooltip-delay: 500ms;
  --tooltip-skip-window: 300ms;
}
```

Spring equivalents for a motion library already in the project: `{ type: "spring", bounce: 0, duration: 0.25 }` for overlays and `{ type: "spring", bounce: 0, duration: 0.3 }` for icon swaps.
