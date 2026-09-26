# Motion

When to animate, which mechanism to use, and recipes that already follow the resolved values. Every number lives in rows M1 to M15 and the motion token block of `resolved-conflicts.md`. The recipes below use only token names.

## Contents

- [Decide whether it moves](#decide-whether-it-moves)
- [Pick the mechanism](#pick-the-mechanism)
- [Reduced motion first](#reduced-motion-first)
- [Recipes](#recipes)
- [Gestures](#gestures)
- [Performance](#performance)
- [Find missing and broken motion](#find-missing-and-broken-motion)
- [Before you finish](#before-you-finish)

## Decide whether it moves

Answer three questions in order. Stop at the first "no".

1. **Does it have a job?** Feedback on an action, a state change the user must notice, where something came from or went, or the one orchestrated moment (M5). "It looks nice" is not a job.
2. **Is it rare enough?** Keyboard-triggered and high-frequency actions get none (M14).
3. **Does a static cue remain?** Colour, an icon or a label must still show the new state when the animation does not run.

## Pick the mechanism

| Job | Use |
|---|---|
| Interactive state: hover, press, open and close | CSS transitions, because they can be interrupted mid-flight |
| One-shot sequence on first reveal | CSS keyframes or the Web Animations API |
| Route change or a large layout swap | View Transitions, with a reduced-motion branch |
| Motion tied to scroll position | Scroll-driven animations (`animation-timeline`), never a scroll listener |
| Drag, flick and gesture-driven motion | The spring library the project already has, or pointer events with a small spring |

Reuse the animation library the project already has, and match its import path.

## Reduced motion first

Write the static state as the default. Add movement only inside the opt-in query, so a missed override never leaves motion running (M11).

```css
.menu {
  opacity: 0;
  transition: opacity var(--dur-reduced) ease;
}
.menu[data-open] {
  opacity: 1;
}
@media (prefers-reduced-motion: no-preference) {
  .menu {
    transform: scale(var(--scale-enter));
    transform-origin: var(--trigger-origin, top left);
    transition:
      opacity var(--dur-menu-exit) var(--ease-out),
      transform var(--dur-menu-exit) var(--ease-out);
  }
  .menu[data-open] {
    transform: scale(1);
    transition-duration: var(--dur-menu);
  }
}
```

Hide a closed overlay from pointers and assistive technology once its exit ends, with `inert`, the `hidden` attribute or the native `popover` attribute.

In JavaScript, read `matchMedia("(prefers-reduced-motion: reduce)")` once and listen for changes. With a motion library, use its reduced-motion hook and swap movement for opacity.

Two rules hold whatever the preference. Autoplaying or looping content that lasts more than five seconds needs a visible pause control (WCAG 2.2.2). Nothing flashes more than three times a second (WCAG 2.3.1).

## Recipes

**Press.** Buttons and small controls only (M1).

```css
.button {
  transition: transform var(--dur-press) var(--ease-out);
}
@media (prefers-reduced-motion: no-preference) {
  .button:active:not(:disabled) {
    transform: scale(var(--scale-press));
  }
}
```

**Overlays.** Menus, popovers and selects grow from their trigger. Set `--trigger-origin` from the trigger's side, such as `top left` for a menu below a left-aligned button. Modals scale from the centre. Enter uses the enter duration and exit uses the exit duration, as in the reduced-motion example above. With `@starting-style`, the closed state is the starting style, so the first frame animates without JavaScript.

**Toasts.** Enter from `--travel-enter` toward their resting edge with `--dur-toast`, and leave with `--travel-exit` and `--dur-toast-exit` (M15). Persistence and announcement rules for toasts are in `accessibility.md`.

**Tooltips.** Implement the delay and skip window from M10 in the trigger logic, not in CSS:

```js
let lastClosed = 0;
function openDelay(fromKeyboard) {
  if (fromKeyboard) return 0;
  const skip = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--tooltip-skip-window"));
  const delay = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--tooltip-delay"));
  return performance.now() - lastClosed < skip ? 0 : delay;
}
function onTooltipClosed() {
  lastClosed = performance.now();
}
```

When the delay is skipped, skip the enter animation too.

**Icon swap.** Keep both icons in the DOM, one absolutely positioned, and cross-fade opacity, scale from `--scale-icon-from` and blur from `--blur-enter`, all on `--ease-out`. With a motion library, use its spring with `bounce: 0`.

**First reveal with stagger.** One group per view, on first render only (M8):

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal > * {
    animation: rise var(--dur-modal) var(--ease-out) both;
    animation-delay: calc(min(var(--i), var(--stagger-max-index)) * var(--stagger-step));
  }
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(var(--travel-enter));
  }
}
```

Set `--i` on each child from its index. With a motion library, skip the entrance on later renders (for example `initial={false}`).

**Theme switch.** A theme change fires every colour transition at once and smears. Disable transitions for one frame:

```js
function setTheme(theme) {
  const style = document.createElement("style");
  style.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(style);
  document.documentElement.dataset.theme = theme;
  getComputedStyle(document.body).opacity;
  requestAnimationFrame(() => style.remove());
}
```

## Gestures

- Respond on pointer-down, and track 1:1 while dragging, keeping the grab offset.
- Use Pointer Events with `setPointerCapture`, and ignore extra touch points.
- Dismiss on release velocity as well as distance, so a short fast flick works.
- Add resistance past the edges instead of a hard stop.
- Hand the release velocity to the spring (M6 allows bounce only here).
- Every drag has a single-pointer alternative, such as buttons or a menu (WCAG 2.5.7).

## Performance

- Animate only the properties in M13.
- Add `will-change` just before motion starts and remove it after, and only when a first-frame stutter is visible.
- Never drive a child's transform by updating a CSS variable on a parent many times a second. Set the style on the element itself.
- Read layout and write styles in separate frames.
- Pause loops and videos that are off screen.

## Find missing and broken motion

- Search for conditional rendering (`&&`, ternaries, `v-if`, `{#if}`) that shows or hides visible UI with no transition. A jump cut there is a candidate for a short fade.
- Replay transitions at 10% speed in the browser's animation panel. Anything that looks wrong slowed down is subtly wrong at full speed.
- Read each `transition` and `animation` declaration and compare durations and curves with the token block. Literal numbers are drift.

## Before you finish

| Detect | Fix |
|---|---|
| A literal duration or `cubic-bezier` in a component | Use the token |
| `ease-in` on an entrance or exit | `--ease-out` (M3) |
| A spring with `bounce` above 0 on a menu, toggle or modal | `bounce: 0` (M6) |
| `transform-origin: center` on a trigger-anchored popover | Origin at the trigger (M7) |
| Keyframes on a toast, toggle or anything re-triggered quickly | A transition that can be interrupted |
| Animated `width`, `height`, `top` or `left` | `transform` (M13) |
| An entrance on a heading, paragraph or nav link with no job | Remove it |
| Animation on a keyboard shortcut or command palette | Remove it (M14) |
