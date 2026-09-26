# Accessibility

The floor every build must meet and every review checks first, keyed to WCAG 2.2 success criteria, with the recipes that meet it. Contrast thresholds, the large-text definition and target sizes are rows C4, T3 and L2 in `resolved-conflicts.md`.

## Contents

- [The floor](#the-floor)
- [Native first](#native-first)
- [Focus](#focus)
- [Keyboard](#keyboard)
- [Dialogs and overlays](#dialogs-and-overlays)
- [Forms](#forms)
- [Announcements](#announcements)
- [Names, images and structure](#names-images-and-structure)
- [Zoom, reflow and input](#zoom-reflow-and-input)
- [Manual checks](#manual-checks)

## The floor

Each failure below is Blocking in a report, whatever the surface.

| Failure | WCAG 2.2 |
|---|---|
| A control with no accessible name, or a name that omits its visible label | 4.1.2, 2.5.3 |
| Something reachable by pointer but not by keyboard, or a keyboard trap | 2.1.1, 2.1.2 |
| A keyboard-focusable element with no visible focus indicator | 2.4.7 |
| A focused element entirely hidden under a sticky header, footer or banner | 2.4.11 |
| Text, control boundaries, meaningful icons or chart marks below the C4 ratio | 1.4.3, 1.4.11 |
| Meaning carried by colour alone | 1.4.1 |
| A target below the L2 floor with no spacing exception | 2.5.8 |
| Content clipped or needing horizontal scroll at 320 CSS px, or lost at 200% zoom | 1.4.10, 1.4.4 |
| Hover or focus content that cannot be dismissed, hovered or kept open | 1.4.13 |
| Moving content over five seconds with no pause, or anything flashing more than three times a second | 2.2.2, 2.3.1 |
| A drag with no single-pointer alternative | 2.5.7 |
| An input with no programmatic label, or an error with no text description | 3.3.2, 3.3.1 |
| Sign-in that blocks paste or password managers | 3.3.8 |
| A status update that assistive technology never hears | 4.1.3 |
| No `lang` on the page | 3.1.1 |
| Motion that ignores `prefers-reduced-motion` | 2.3.3 is AAA; this skill treats it as the floor (M11) |

## Native first

- `<button>` for actions and `<a href>` for navigation. Never a clickable `<div>`.
- Native `<dialog>`, `<details>`, `<select>`, date and checkbox inputs before custom rebuilds.
- When a custom control is unavoidable, follow the matching ARIA Authoring Practices pattern and prefer a headless primitive the project already uses.
- No ARIA is better than wrong ARIA. Remove a role that repeats what the element already says.

## Focus

A focus ring that works on any background:

```css
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
@media (forced-colors: active) {
  :focus-visible {
    outline-color: Highlight;
  }
}
```

- Style `:focus-visible`, not bare `:focus`.
- Measure the ring against every colour it sits next to, at 3:1 (C4).
- Focus rings appear instantly. Never transition them.
- Add `scroll-margin-top` or `scroll-padding-top` so sticky bars never cover the focused element.

## Keyboard

- Tab order follows the visual order. Use only `tabindex="0"` and `tabindex="-1"`; positive values break the order.
- Composite widgets such as tabs, menus, grids and listboxes use arrow keys inside and a single Tab stop, with roving `tabindex`.
- Enter and Space activate, and Escape closes the topmost overlay.
- Put a "Skip to content" link first when repeated navigation precedes `<main>`.

## Dialogs and overlays

- Open modals with `dialog.showModal()`, which makes the rest of the page inert.
- Move focus into the dialog on open, to the first field or the dialog heading. Return it to the trigger on close.
- Give every dialog a visible or visually hidden title.
- Add `overscroll-behavior: contain` so the page behind does not scroll.
- Popovers and menus close on Escape and on an outside click, and return focus to their trigger.

## Forms

- Every input has a visible `<label>`. A placeholder is an example, never a label.
- Set `type`, `inputmode`, `autocomplete` and a meaningful `name` so the right keyboard and autofill appear.
- Keep submit enabled until the request starts. Then show progress and prevent double submission.
- Validate on submit, or on blur for format errors. Mark failing fields `aria-invalid="true"`, link the message with `aria-describedby` and move focus to the first invalid field.
- Error text says how to fix the problem, next to the field (`content.md`).
- Never block paste. People paste passwords and one-time codes.
- Do not ask twice for what the user already entered in the same flow (3.3.7).

## Announcements

| Update | Mechanism |
|---|---|
| A field's validation message | `aria-describedby` on the field |
| A toast, a result count or a saved state | A polite region (`role="status"`) rendered empty on load, then filled |
| An urgent error not tied to a field | `role="alert"`, used sparingly |

Toasts that carry an action or an error stay until dismissed, because a timed toast can vanish before a screen reader or a slow reader reaches it.

## Names, images and structure

- Icon-only buttons get an `aria-label` that names the action ("Close", "Search"). The SVG inside gets `aria-hidden="true"`.
- Images get alt text by purpose. Decorative: `alt=""`. Informative: the meaning. Functional: the action.
- One `<h1>` per page, with heading levels nested without skips, and one `<main>` landmark.
- Link text makes sense out of context. Two "Learn more" links on one page need a suffix that says about what.
- `aria-hidden` never goes on a focusable element.

## Zoom, reflow and input

- The page works at 200% zoom and reflows at 320 CSS px without horizontal scrolling. Never cap zoom in the viewport meta tag.
- Text containers use `min-height`, not `height`, so enlarged or spaced text is not cut off (1.4.12).
- Gate hover effects with `@media (hover: hover) and (pointer: fine)`. Touch users need every hover-revealed action visible another way.
- Inputs are 16px on phones (T4), or iOS zooms the page on focus.

## Manual checks

Beyond the automated audit, always:

1. Tab through the whole flow and note each stop, its order and whether the ring is visible.
2. Open and close every overlay by keyboard, and confirm focus returns to the trigger.
3. Read the accessibility tree for names, roles and states of every control the change touched.
4. Zoom to 200% and resize to 320px.
5. Turn on reduced motion and confirm movement stops while state changes stay visible.
6. Turn on forced colours or high contrast and confirm focus and borders still show.

Record what you could not do, such as a screen-reader pass, as `Not verified`. Never claim a screen-reader result you did not observe.
