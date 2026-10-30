---
title: abtest.design
description: Curated index of A/B tests from real apps, each card naming the change, the company and the measured lift.
url: https://abtest.design
type: gallery
formats: curated test results · category filters · per-test write-ups with a results table and source
topics: [ux-patterns, inspiration]
verdict: useful
agent: []
pricing: free
licence: Not stated at review. Treat the write-ups and any screenshots or logos as look-only.
licence_class: not-stated
reviewed: 2026-10-29
status: active
related: [good-ui, page-flows, mobbin]
---
[← Atlas](../site/home.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [inspiration](../topics/inspiration.md)

# abtest.design

## What it is

abtest.design is a curated collection of A/B test results from consumer apps and sites. Around fifty tests were listed at review, filtered by category: paywall and free trial, onboarding, checkout and sales, user engagement and retention, monetization awareness, referral, and a miscellaneous bucket. Each card is one test, and the card is the whole argument: the change in plain words as the headline, the company underneath, and the measured lift after it. Cards open a write-up with the description of both variants, a results table with several metrics, and a source.

## When to open it

- You are about to argue about a paywall, a trial length or an onboarding step and want to know what a comparable product tried.
- You need a vocabulary of testable changes rather than general advice; the card titles alone read like a checklist.
- A stakeholder asks what is typical, and you want specific published cases instead of a remembered average.

## Most useful

- **The card grid as a list of hypotheses**: titles such as showing pricing options upfront, a 30-day guest pass, decoupling streaks from daily goals, or a free trial only for annual subscriptions. The company and lift sit on the same line, so scanning reads as an argument, not a mood board.
- **Headline as a single metric**: each card names one outcome and one number, which is what makes the grid scan. The detail page then shows the other metrics that moved, including the ones that went the other way.
- **Write-ups with the variant described**: the VEED paywall test, for instance, sets a pricing-led paywall against a benefits-led one and reports trial conversion, conversion to paid, MRR and ARPU separately.
- **"Also seen on"**: each test links to other apps where the same pattern appears, which is the useful half of the comparison and saves an afternoon of app-store archaeology.
- **Category filters**: narrow enough to browse in a sitting, and the only navigation the site needs.

## Using it with agents

No agent channel at review: no `llms.txt`, no MCP server, no API. The card text is easy for an agent to read or scrape, but the lift is reported without sample size or significance, so an agent quoting a card as evidence would be overstating it. Give an agent a specific test URL and ask it to name the design move, not to cite the number.

## Watch out for

- The lifts arrive without sample size, test duration, significance or the baseline. A "+40%" on learners on a streak is not a promise for your product.
- Selection bias runs through any curated index: published wins are reported, quiet failures are not. Treat the collection as examples of what people tried, not as a distribution of what works.
- Not all the tests are strictly A/B tests of design. Many are pricing, packaging or messaging decisions, so check what actually changed before taking a layout lesson from one.
- The site is small and lightly supported, with a sponsorship line at the bottom. There is no guarantee a write-up will still be there, so cite the URL if you rely on it.

## Reusable ideas

- Put one metric on the card and the rest of the table behind it; a gallery that shows everything at once can be scanned by nobody.
- Label experiments by the change, in the language a designer uses, rather than by the internal test name.
- Link every pattern to other products that use it, so a single result becomes a small survey.
- Report the secondary metrics alongside the headline one, including the metrics that did not move.

## Related

[Good UI](good-ui.md), [Page Flows](page-flows.md), [Mobbin](mobbin.md)
