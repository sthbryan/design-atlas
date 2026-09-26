---
title: AccessLint Skills
description: Five WCAG-EM accessibility skills (scan, inspect, audit, fix, diff) that grade every finding by evidence.
url: https://github.com/AccessLint/skills
type: agent-skill-collection
formats: agent skill collection · Claude Code plugin · local MCP server
topics: [agents-and-prompts, ux-patterns]
verdict: useful
agent: [mcp, cli, skill]
pricing: free
licence: free. The README and plugin manifest say MIT, but the repo has no licence file (about 100 stars at review, plugin version 0.10.3, last change 2026-08-25). The npm packages the skills run (`@accesslint/cli`, `@accesslint/mcp`, `@accesslint/core`, `@accesslint/chrome`) are published as MIT. A separate hosted connector needs an accesslint.com account.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [addy-osmani-web-quality-skills, anthropic-design-plugin, inclusive-components, vercel-web-design-guidelines, impeccable]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md)

# AccessLint Skills

## What it is

AccessLint is a set of five accessibility skills built on the `@accesslint/core` rule engine. Each skill has one job. `accessibility-scan` runs the engine on one live page and returns a worklist, locating problems without editing. `accessibility-inspect` drives the page through what an engine cannot decide: focus order, names and roles, reflow and zoom, reduced motion, form errors and target size. `accessibility-audit` follows the W3C WCAG-EM method (define scope, explore, sample pages and states, evaluate, report) and gives each criterion a pass, fail or undetermined result. `accessibility-fix` takes a baseline, edits, and verifies. `accessibility-diff` reports only the violations a change introduced or fixed. A shared `methodology.md` sets the honesty rules. The repo also publishes a benchmark in which the same model, with and without the skills, audited trap-laden test pages. Each skill had about 600 to 750 installs on skills.sh.

## When to open it

- When you need a real WCAG 2.2 AA audit of a site, with sampling and per-criterion results, not a one-page lint.
- As a regression check on a branch or on uncommitted changes, locally or in CI.
- When you want an agent that says "undetermined, needs a screen-reader user" instead of passing a page it could not fully test.

## Most useful

- **Two grades per finding**: severity, and evidence basis (● verified and reproducible, ◐ has evidence but a person must decide, ○ needs assistive technology or lived experience). When unsure between two grades, use the lower one. Findings are marked with symbols, not colour, so the report stays readable for colour-blind readers.
- **Source-grounded worklists**: each violation gives the selector, `file:line (symbol)` when source maps allow, the evidence (such as the measured contrast ratio), and either a mechanical fix or `NEEDS HUMAN`.
- **Fix without inventing**: mechanical fixes are applied as given. Anything that needs alt text, labels or link wording is left as a marked note in the code with the rule ID, and the result is checked by re-running the baseline.
- **Coverage honesty**: the methodology cites about 57% of defects found by automation (Deque) and warns not to confuse that with the share of criteria that can be auto-checked.
- **Benchmark result** (August 2026): with the skills, the model raised fewer false positives (5 against 11) and in 2 of 3 runs declined to certify a "clean" page it could not fully test (without them, 0 of 3), at about 53% more tokens on a full assessment.

## Using it with agents

Run `npx skills add AccessLint/skills`, or in Claude Code `claude plugin marketplace add accesslint/skills` and then `claude plugin install accesslint@accesslint`. The plugin also adds the local MCP (`audit_live`, `audit_html`, `list_rules`, `explain_rule`). Plain requests trigger it ("is localhost:3000 accessible", "fix the a11y issues in Nav.tsx"), as do slash commands such as `/accessibility-audit --level AA <url>` and `/accessibility-diff --branch main`. Running `npx @accesslint/cli init` saves named targets in `accesslint.config.json`. `inspect` needs a browser MCP (Chrome DevTools, Playwright or Puppeteer); without one it runs only the static checks.

## Watch out for

- The skills run `npx -y @accesslint/...@latest` on every call, so each run downloads and executes the newest package from npm. Pin versions if that matters to you.
- `scan`, `audit`, `fix` and `diff` launch a local Chrome over CDP when none is running, and can reach any URL that Chrome can, including staging and production.
- `accessibility-diff` stashes your uncommitted changes to capture a baseline, then restores them. Commit or back up risky work first.
- The hosted connector (`mcp.accesslint.com`) is a different service. It stores journeys, runs and findings under an accesslint.com account, and it cannot reach `localhost`.
- Licence gap: "MIT" is stated in the README and manifest, but there is no `LICENSE` file.
- Small project (about 100 stars) and pre-1.0. Expect changes.

## Reusable ideas

- Give every finding a separate evidence grade, and when unsure, use the lower one.
- Keep locate, assess, fix and guard as separate skills that hand work to each other.
- Say what kind of check you ran: a single URL without sampling is a scan, not an audit.
- Write down what must go to a human instead of letting the agent pretend to be a screen-reader user.
- Test a skill against the same model without it, using fixtures with planted traps, before you ship it.

## Related

[Web Quality Skills](addy-osmani-web-quality-skills.md), [Anthropic Design Plugin](anthropic-design-plugin.md), [Inclusive Components](inclusive-components.md), [Vercel Web Design Guidelines](vercel-web-design-guidelines.md), [Impeccable](impeccable.md)
