# Verification

How to prove the work with evidence: which tools to use, what to capture, the probes to run, the number checks and the evidence checklist. Test widths and the round limit are rows L3 and P2 in `resolved-conflicts.md`.

## Contents

- [Evidence rules](#evidence-rules)
- [Tools, in order of preference](#tools-in-order-of-preference)
- [Session and matrix](#session-and-matrix)
- [Procedure](#procedure)
- [Probes](#probes)
- [Numbers add up](#numbers-add-up)
- [Evidence checklist](#evidence-checklist)

## Evidence rules

- Measured values carry units and conditions. "Looks fine" is not evidence.
- A `Not verified` item always states its reason, and is never silently dropped.
- Say what produced each piece of evidence: which browser, emulated or real device, which width and theme. A screenshot shows layout, but it cannot prove a gesture, a focus order or a screen-reader result.
- Capture before interpreting. Write the screenshot or measurement to disk, then judge it.
- A fix is verified by re-running the same check under the same conditions, not by reading the diff. Keep the before and after evidence side by side.

## Tools, in order of preference

1. A browser tool the host already provides, such as a DevTools, Playwright or browser-pane MCP server.
2. The project's own test tooling at its pinned versions: Playwright, Cypress, Storybook or Lighthouse from `devDependencies`.
3. axe-core or Lighthouse already in the project. If neither is present, propose an exact version and wait for approval. Never run `@latest`.
4. No browser at all: run the static checks (the ban list, token use, labels, reduced-motion guards), and mark every rendered check `Not verified`.

These tools reach only the local preview. This skill never sends project content anywhere.

## Session and matrix

- Start the preview with the project's own command and record its URL. For performance or layout-shift numbers, use a production build, since development servers measure the bundler.
- Widths: the L3 set.
- Themes: every theme the project ships.
- Keep the matrix small. Routes × widths × themes grows fast, so add conditions only where a check already found an edge.
- Save artifacts under one ignored folder, such as `.design-check/<date>/<route>/<width>-<theme>.png`, and add it to `.gitignore` if needed.

## Procedure

Stay within the P2 round limit: the steps below make one round.

1. **Baseline.** For a redesign or review, capture the current state at every width before editing.
2. **Capture.** Screenshot each route at each width and theme, then open and look at every image. Look for overlap, clipping, stray edges, orphaned words in headings, wrong theme colours and content hidden under sticky bars.
3. **Audit.** Run axe or Lighthouse accessibility on each route in each theme. Map every violation to a `file:line`.
4. **Manual accessibility checks.** Run the list at the end of `accessibility.md` and record the number of Tab stops, the order and ring visibility for each flow.
5. **Contrast.** Measure the pairs listed in `color.md` from computed styles on the rendered page, in every theme.
6. **Targets and overflow.** Run the probes below at the two narrowest L3 widths.
7. **States.** Force empty, loading and error states through fixtures, props or network blocking, and capture each.
8. **Motion.** With reduced motion off, read computed `transition-duration` and `transition-timing-function` for animated elements and compare them with the token block. With it on, confirm no element moves.
9. **Console.** Record console errors, failed requests and hydration warnings.
10. **Numbers.** Run the checks in [Numbers add up](#numbers-add-up).
11. **Checklist.** Fill the evidence checklist, then write the report.

## Probes

Paste these into the browser tool's script runner on the rendered page.

Targets below the L2 floor. Change 24 to 44 to check the coarse-pointer build default:

```js
[...document.querySelectorAll("a[href],button,input,select,textarea,[role=button],[tabindex]:not([tabindex='-1'])")]
  .filter((el) => el.offsetParent !== null)
  .map((el) => {
    const r = el.getBoundingClientRect();
    return { el: el.outerHTML.slice(0, 80), w: Math.round(r.width), h: Math.round(r.height) };
  })
  .filter((t) => t.w < 24 || t.h < 24);
```

Horizontal overflow, and the elements causing it:

```js
({
  overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  culprits: [...document.querySelectorAll("body *")]
    .filter((el) => el.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
    .slice(0, 10)
    .map((el) => el.outerHTML.slice(0, 80)),
});
```

Focus ring present on the focused element:

```js
(() => {
  const s = getComputedStyle(document.activeElement);
  return { el: document.activeElement.outerHTML.slice(0, 80), outline: s.outlineStyle + " " + s.outlineWidth + " " + s.outlineColor, shadow: s.boxShadow };
})();
```

Colours and sizes actually rendered, for the contrast calculation in `color.md`. Edit the selector list to suit the page:

```js
[...document.querySelectorAll("h1, p, button, a")].slice(0, 20).map((el) => {
  const s = getComputedStyle(el);
  return { el: el.tagName, size: s.fontSize, weight: s.fontWeight, color: s.color, bg: s.backgroundColor };
});
```

A transparent background means the colour comes from an ancestor. Walk up until a solid colour is found, and treat text over images separately.

## Numbers add up

For every figure the UI shows:

1. Find where it comes from in the code: a fixture, an API response or a literal.
2. Recompute totals, shares and differences from that same data with a quick script, not by eye.
3. Check each figure against the rules under Numbers and charts in `content.md`.
4. Record one evidence row per view: how many figures were traced, and to which source.

A number that fails is Blocking (P3). Fix it at the data source, so every view that reads it agrees.

## Evidence checklist

Copy this, fill every row and attach it to the report. Add rows for anything the task adds.

```markdown
| Check | Result | Evidence |
|---|---|---|
| Screenshots, 1280 / 390 / 320, each theme | PASS | .design-check/2026-09-25/pricing/*.png, 6 files viewed |
| Automated audit, each theme | PASS | axe 4.x (project devDependency): 0 violations light, 0 dark |
| Keyboard walk | PASS | 23 stops, order matches layout, ring visible at each |
| Overlays by keyboard | PASS | menu and dialog open, Escape closes, focus returns to trigger |
| Contrast | PASS | 14 pairs measured, lowest 4.62:1 (text-muted on surface, light) |
| Targets | PASS | probe at 390px: 0 below 24px, 0 below 44px under coarse pointer |
| Reflow at 320px | PASS | overflow probe: false |
| Reduced motion | PASS | emulated reduce: no transforms observed; fades 150ms |
| Motion tokens | PASS | 9 transitions read, all use token durations and curves |
| Empty, loading, error states | PASS | three captures in .design-check/2026-09-25/projects/ |
| Numbers add up | PASS | 4 KPIs traced to fixtures/data.json; segments sum to 100% |
| Console and network | PASS | 0 errors, 0 failed requests |
| Ban list | PASS | 19 patterns searched in changed files, 0 hits |
| Screen reader | Not verified | no screen reader available in this session |
```

A row reading PASS with an empty Evidence cell is a failed checklist.
