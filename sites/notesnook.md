---
title: Notesnook
description: Note app page that argues privacy by building fake note cards, a publish dialog and a clipper, each labelled with its encrypted state.
url: https://notesnook.com
type: website
formats: product site · simulated note and notebook cards · publish flow · web clipper · open-source repository table
topics: [landing-pages, ux-patterns]
verdict: very-useful
agent: []
pricing: freemium
licence: Free to use, with clients published under GPLv3 at review; paid plans exist but their prices were not on the page read. The repository table lists stars for the apps, the sync server and the importer
licence_class: open-source-copyleft
reviewed: 2026-11-02
status: active
related: [sleeve, fantastical]
---
[← Atlas](../site/home.md) · Topics: [landing-pages](../topics/landing-pages.md), [ux-patterns](../topics/ux-patterns.md)


# Notesnook

## What it is

Notesnook makes an abstract claim — your notes are encrypted — and proves it by drawing the interface: note cards with an "Encrypted" badge, a timestamp and a folder path; a notebook row; an editor with a type size and a font picker; a publish dialog behind a password; a clipper that strips an article's newsletter popups and cookie banner. Each section is a small mock of the app rather than a screenshot, and the subject matter of the sample notes does the emotional work: a therapy note, bank details, a diagnosis.

## When to open it

Open it when you have to sell something invisible — encryption, privacy, local storage — and need a way to show it. The pattern is to render the product's own surfaces with their security state labelled on every item.

## Most useful

- **State badges on content**: "Encrypted" appears on each card, so the guarantee is attached to the object instead of the headline.
- **Sample content with stakes**: the notes are the kind of thing people would not want read, which makes the argument without a statistic.
- **Flows drawn as UI**: publish a note behind a password, lock the app with a fingerprint or PIN, clip a page without its ads.
- **A repository table** with stars per component, which turns "open source" into three named projects and a licence.
- **Craft in the mocks**: real editor chrome — paragraph style, 16px, sans-serif — so the screens read as an app.

## Using it with agents

No `llms.txt` or MCP server was found at review. The page is text-readable, and the GitHub table names the repositories an agent would need to inspect the implementation.

## Watch out for

- The notes in the mocks are fiction, written to move the reader; nothing on the page is a real account.
- The page claims end-to-end encryption, and that is a claim to verify in the code rather than on the marketing page.
- Paid tiers exist; the free plan's limits are not spelled out on the page read.
- Mobile ratings and star counts date quickly.
- The emotional register is unusually direct for a productivity tool and will not suit every product.

## Reusable ideas

- Show a security property on every item in a mock, not once in a headline.
- Use sample content strong enough that the reader feels the risk.
- Draw flows (publish, lock, clip) as interface states rather than arrows.
- Turn "open source" into a table of repositories with licences.

## Related

[Sleeve](sleeve.md), [Fantastical](fantastical.md)
