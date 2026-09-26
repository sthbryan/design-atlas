# Review format

The format for every build summary, review and critique. Severity levels and the cap on listed items are rows P3 and P4 in `resolved-conflicts.md`.

## Contents

- [Shape of the reply](#shape-of-the-reply)
- [Writing a finding](#writing-a-finding)
- [Severity](#severity)
- [Verdict](#verdict)
- [Example](#example)

## Shape of the reply

In this order, with nothing before it:

1. **Summary.** Two lines at most: what was built or reviewed, at which scope, and the verdict.
2. **Blocking**, then **Important**, then **Polish**. Numbered findings, widest reach first within each level.
3. **Verified and not verified.** The evidence checklist from `verification.md`, or a pointer to where it was saved.
4. **Preserved.** For redesigns, the contracts kept unchanged, from the list in `layout.md`.
5. **Placeholders.** Every labelled placeholder the page still carries.
6. **Next step.** The one change worth making first, or the question the user must answer.

When nothing is wrong, say "No findings" and still list what was verified. Never pad a review to look thorough.

## Writing a finding

Each finding has four parts:

- **What:** the problem in one sentence, with the measured value where one exists.
- **Why:** the user impact, and the rule or WCAG criterion it breaks.
- **Fix:** the exact change, in the project's own styling system, with the token or value to use.
- **Where:** every `path/to/file:line` it appears at, plus the route, width and theme when it is visual.

Rules for findings:

- One root cause is one finding. List all its locations in the same finding.
- Fix at the highest shared level. A token or shared component fix outranks the same fix in one leaf.
- When a plausible problem turned out not to exist, say what evidence ruled it out, in one line.
- Taste goes under Polish, phrased as a suggestion.

## Severity

| Level | Includes |
|---|---|
| Blocking | Any failure in the floor table of `accessibility.md`. A broken control, route or form. Invented proof or data, or numbers that do not add up. A preserved contract changed without being asked. |
| Important | Hierarchy that hides the main action. Inconsistency between comparable screens. Raw values where tokens exist, ban-list hits, missing states or a surface mismatch. |
| Polish | Isolated alignment, spacing, radius or motion details, and suggestions of taste. |

Severity follows impact, never effort. A one-line fix can be Blocking.

List at most ten findings in full and count the rest in one line under their level. Blocking findings are never cut to meet the cap.

## Verdict

| Verdict | When |
|---|---|
| Blocked | Any Blocking finding remains |
| Ready, with gaps | No Blocking findings, but at least one floor check is `Not verified` |
| Ready | No Blocking findings, and every floor check has evidence |

Never declare Ready for coverage you did not inspect. When the direction was never approved, add "Direction not reviewed" to the verdict line.

## Example

```markdown
Reviewed the pricing section (src/components/Pricing.tsx) at 1280, 390 and 320px, light theme only. Verdict: Blocked.

### Blocking
1. **What:** The "Start trial" button text is white on #6366F1 at 16px/600, which measures 4.47:1.
   **Why:** Normal text needs 4.5:1 (WCAG 1.4.3), and this is the primary action.
   **Fix:** Point `--color-accent-solid` at #4F46E5 (6.29:1 with white).
   **Where:** src/styles/tokens.css:12, used by src/components/Pricing.tsx:48 and :71.

2. **What:** The Team tier shows "12,400 teams trust us", which has no source in PRODUCT.md.
   **Why:** An invented figure misleads buyers.
   **Fix:** Replace it with `[Metric to confirm: active teams]`, or remove the line.
   **Where:** src/components/Pricing.tsx:63.

### Important
3. **What:** Cards use `transition: all 0.3s`.
   **Why:** Every property animates, including layout ones, and 300ms sits at the ceiling for a hover.
   **Fix:** `transition: box-shadow var(--dur-hover) ease`.
   **Where:** src/components/Pricing.css:9.

### Polish
4. **What:** The card radius is 16px around an 8px inner badge with 12px padding.
   **Why:** Nested radii read as mismatched when outer does not equal inner plus padding.
   **Fix:** Card radius 20px, or badge radius 4px.
   **Where:** src/components/Pricing.css:4.

### Not verified
- Dark theme: the project ships one, but its toggle did not apply in the preview.
- Screen reader: not available in this session.

### Next step
Fix the button token first. It is one line and clears the Blocking contrast failure on every page that uses it.
```
