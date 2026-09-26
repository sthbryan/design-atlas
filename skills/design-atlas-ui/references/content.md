# Content

Rules for every visible string, number, chart title and image. Case, dashes and eyebrows are rows T10 to T12 in `resolved-conflicts.md`.

## Contents

- [Never invent proof](#never-invent-proof)
- [Placeholders that say so](#placeholders-that-say-so)
- [Interface copy](#interface-copy)
- [Headlines](#headlines)
- [Numbers and charts](#numbers-and-charts)
- [Imagery](#imagery)
- [Before you finish](#before-you-finish)

## Never invent proof

Take facts from PRODUCT.md, the brief or the existing site. When a fact is missing, leave a labelled placeholder. Never write any of these without a real source:

- Metrics, percentages, growth figures, uptime and speed claims.
- Customer logos, "trusted by" strips, testimonials, names, roles and star ratings.
- Security or compliance claims such as SOC 2, ISO 27001 or HIPAA.
- Pricing, plan names and plan limits.
- Features, integrations, settings or modes the brief never mentions.

When a page asks for sign-ups or payment, the Terms and Privacy pages must exist. Link them, or report that they are missing.

## Placeholders that say so

- Text: `[Customer quote to confirm]`, `[Metric: monthly active teams]`.
- Images: a slot of the final aspect ratio with a visible caption naming what goes there.
- Form fields: an example of the format (`name@example.com`), never fake personal data.
- Prototype data: realistic values, visibly labelled "Sample data" on the screen itself.
- List every placeholder in the report, so nothing ships by accident.

## Interface copy

- Buttons start with a verb and name the result: "Save changes", "Delete project", "Send invite". Never "Submit", "OK" or "Yes" on a consequential action.
- An action keeps one name through the flow. A "Publish" button leads to a "Published" toast, not "Your post is live".
- One label per intent across the page. "Get started" and "Start free" side by side ask users whether they differ.
- Errors say what happened and how to fix it, beside the field that failed. No blame, no "Oops" and no exclamation marks.
- Toggles describe the ON state: "Send read receipts", not "Don't send read receipts".
- Link text names the destination: "Read the billing docs", not "Click here".
- Product surfaces use utility copy about status, scope and actions. A sentence that could be an ad gets rewritten.
- Write "you" for the reader. Keep the product's existing terms and voice.

## Headlines

- Say one concrete thing about this product that a competitor could not print unchanged.
- No imperative triplets ("Plan less. Ship more. Sleep better.").
- No "not just X, it's Y" framing, and no headline stacked from two-word fragments.
- No filler superlatives: "seamless", "cutting-edge", "next-generation", "revolutionary".
- Section headings say what the section is or what the user can do there.

## Numbers and charts

- Every number has a unit and, for rates and changes, a period: "412 jobs in the last 24 hours".
- Every delta names what it compares against: "+8% vs last week".
- Parts add up to their total, and shares of one whole add up to 100%, allowing only for visible rounding.
- Paired figures agree: spent plus remaining equals the budget, and a count in a heading equals the items listed.
- A negative "remaining" appears only when it is labelled as over budget.
- Negative amounts put the sign before the currency symbol, as `Intl.NumberFormat` does: -$1,200, not $-1,200.
- Dates and times use one format and one time zone per view, and the zone is shown when it matters.
- A "live" or "real-time" label appears only when the data actually updates.
- Chart titles state the question or the answer: "Failed jobs per hour, last 24 hours", not "Overview".

## Imagery

- Show the real product, its real output or the real subject. A screenshot beats a drawn mock-up of one.
- No stock 3D blobs, abstract orbs or unrelated illustrations as stand-ins for the product.
- Alt text follows purpose (`accessibility.md`).

## Before you finish

| Detect | Fix |
|---|---|
| A button labelled "Submit", "OK" or "Click here" | A verb that names the result |
| Two labels for one intent on a page | Pick one |
| An error message with no way to fix the problem | Say what to do next |
| A chart titled "Overview" or "Performance" | Title it with its question |
| Segments or percentages that do not add up | Derive them from one source |
| `John Doe` or `test@test.com` in a shipped view | An honest placeholder or real data |
