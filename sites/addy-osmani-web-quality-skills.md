---
title: Web Quality Skills
description: "Addy Osmani's six measurement-first skills: audit with Lighthouse and DevTools, fix, then re-run the same WCAG 2.2 audit."
url: https://github.com/addyosmani/web-quality-skills
type: agent-skill-collection
formats: agent skill collection · Claude Code, Codex and Gemini CLI plugin
topics: [agent-skills, ux-patterns]
verdict: very-useful
agent: [skill]
pricing: free
licence: free. MIT (repo-root `LICENSE`, © 2026 Addy Osmani; about 2.8k stars at review, version 2.0.0, last change 2026-08-24). The README calls the project unofficial.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [accesslint-skills, anthropic-design-plugin, vercel-web-design-guidelines, inclusive-components, ibelick-ui-skills]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [ux-patterns](../topics/ux-patterns.md)

# Web Quality Skills

## What it is

Web Quality Skills is Addy Osmani's set of six "measurement-first" skills built around Lighthouse, Chrome DevTools and Core Web Vitals: `accessibility`, `performance`, `core-web-vitals`, `seo`, `best-practices`, and `web-quality-audit`, which runs the others. It is listed on ui-skills.com under `addyosmani/accessibility`. Version 2 (August 2026) changed the approach. Earlier versions gave broad advice from source code; now the skills measure first. They run a live audit when a page can be rendered, keep field data (CrUX, your own RUM) apart from lab runs and from guesses based on reading code, and dropped claims they could not source. The `accessibility` skill is 464 lines covering WCAG 2.2, plus two references: `A11Y-PATTERNS.md` (focus traps, skip links, live regions, ARIA tabs, screen-reader commands) and `WCAG.md` (every 2.2 success criterion by level). skills.sh counted about 56.2k installs for `accessibility` and 47.3k for `seo`.

## When to open it

- When an agent should prove an accessibility or performance problem on the rendered page before it edits code.
- For a pre-launch pass that covers accessibility, SEO, Core Web Vitals and security headers in one run.
- When you want each accessibility rule tied to its WCAG 2.2 criterion number.

## Most useful

- **Evidence loop**: run a Lighthouse audit (Chrome DevTools MCP `lighthouse_audit`, in mobile navigation mode, or snapshot mode when a reload would lose state), use the failing nodes to find the component, inspect the accessibility tree (`take_snapshot`), try the flow with a keyboard, fix it, then re-run the same audit.
- **Fallbacks**: without DevTools MCP it uses the Lighthouse CLI or axe plus the same manual checks, and it says plainly that a score of 100 is not WCAG conformance.
- **WCAG 2.2 additions**: focus must not be hidden under sticky bars (use `scroll-margin`), targets at least 24×24 CSS px (44×44 recommended), a single-pointer alternative to dragging, and paste and autofill allowed in sign-in.
- **Focus and keyboard**: native elements before ARIA, `:focus-visible` with a 2 px `currentColor` outline and 2 px offset, native `<dialog>` for modals.
- **Priority list**: five Critical, five Serious and five Moderate issues (Critical includes missing labels, missing alt text, low contrast, keyboard traps and no focus indicator), plus a seven-item manual checklist (screen reader, 200% zoom, Windows High Contrast, reduced motion).

## Using it with agents

Install with `npx skills add addyosmani/web-quality-skills`. In Claude Code you can use `/plugin marketplace add addyosmani/web-quality-skills` and then `/plugin install web-quality-skills@addy-web-quality-skills`, which namespaces the skills (`/web-quality-skills:accessibility`). Codex has `codex plugin marketplace add` and Gemini CLI has `gemini extensions install` with the repo URL. The skill triggers on "a11y audit", "WCAG compliance", "keyboard navigation" or "make accessible". It produces audit-backed findings, source fixes and a before-and-after re-run. Connecting Chrome DevTools MCP is optional, but the workflow is at its best with it.

## Watch out for

- Audits are only as good as the page the agent can reach. Pages behind a login need snapshot mode or a signed-in browser.
- The contrast table labels large text as 18 px, or 14 px bold. WCAG defines it as 18 pt (about 24 px), or 14 pt (about 18.7 px) bold, so the skill is stricter than the standard at mid sizes.
- Its reduced-motion reset cuts every animation and transition to about 0 ms. Motion skills that swap in gentler motion instead of removing it will disagree.
- Anthropic's design plugin puts 44×44 px targets under AA; this skill correctly gives 24×24 as the AA minimum.
- The skills themselves make no calls of their own, but Lighthouse and PageSpeed runs fetch the page, and CrUX lookups query Google's field data. The audit script in `web-quality-audit` is a local grep over your files.
- Much of the long file is textbook WCAG material. What sets it apart is the measure, fix, re-measure workflow.

## Reusable ideas

- Name the exact tool call for each step and the fallback when it is missing, so the workflow runs in more than one environment.
- Label evidence by source (field, lab, one browser session, source reading) and never report a guess as a measurement.
- Confirm a fix by re-running the same audit that found it.
- Keep the WCAG criterion list in a reference file so the main skill stays a workflow.

## Related

[AccessLint Skills](accesslint-skills.md), [Anthropic Design Plugin](anthropic-design-plugin.md), [Vercel Web Design Guidelines](vercel-web-design-guidelines.md), [Inclusive Components](inclusive-components.md), [ibelick UI Skills](ibelick-ui-skills.md)
