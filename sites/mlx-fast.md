---
title: MLX.fast
description: Live MLX optimization challenge with a paired performance chart, model filters and a detailed contribution leaderboard.
url: https://www.yukon.org/mlxfast
type: website
formats: benchmark challenge · live chart · contribution leaderboard · CLI
topics: [data-viz, inspiration]
verdict: useful
agent: [cli]
pricing: free
licence: No fee was listed to view or participate at review; challenge participation requires a GitHub account and compatible Apple Silicon Mac. The terms grant only a limited licence to use the platform for its challenges. The site, chart and leaderboard remain Eigen Labs' property; no design or content reuse licence is stated.
licence_class: proprietary-free
reviewed: 2026-09-27
status: active
related: [keel-workspace, flourish, evil-charts, tremor]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [inspiration](../topics/inspiration.md)

# MLX.fast

## What it is

MLX.fast is an Eigen Labs challenge site for improving machine-learning inference on Apple Silicon. The page pairs a live score history with a public leaderboard of benchmark submissions and their decode and prefill speeds.

## When to open it

- When you need a compact reference for a technical benchmark or engineering leaderboard.
- When a single record number needs context from both its trend over time and the submissions that produced it.
- When you want to see filters for time window, axis scale and grouping work alongside a live chart.

## Most useful

- **Score-history chart**: the opening panel places the current percentage gain above a step-like history chart, with a dashed baseline and labelled 100%, 300% and 500% guides. Users can switch record/model view, linear/log scale and time range.
- **Contribution table**: the leaderboard tab lays out solver, increase, decode speed, prefill speed, drafter and submission date in one scanable table. A separate history view exposes incremental changes.
- **Metric definition**: an inline “How the score is calculated” explanation states the scoring formula and distinguishes official paired measurements from local estimates.
- **Current summary**: the page surfaces the record, throughput and submission/solver totals next to the chart and table.

## Using it with agents

The CLI installation also adds `/yukon-cli` for compatible coding agents, according to the terms. It is bundled with the CLI; no standalone skill installation was documented, so this page classifies the integration as `cli`. Both are intended for taking part in the benchmark, not for querying the visual reference library. The website itself can be opened directly for visual review.

## Watch out for

- The page is for a narrow ML inference challenge, not a general-purpose dashboard template.
- Headline scores, dates, participants and leaderboard contents change; the observed 505.4% record and 79 promoted submissions from 21 solvers were at review.
- Challenge participation requires GitHub sign-in and an Apple Silicon Mac meeting the stated hardware requirements.
- The terms allow use of the platform for challenges only. The live chart and leaderboard are reference material; no reuse licence is stated.

## Reusable ideas

- Put the current result and its trend in the same first view, then provide the detailed rows for people who need to audit it.
- Make the baseline and meaningful percentage guides visible in the chart itself.
- Explain a derived score next to the control that changes its view.
- Keep improvement history distinct from the current ranking so users can inspect both outcome and contribution.

## Related

[Keel Workspace](keel-workspace.md), [Flourish](flourish.md), [Evil Charts](evil-charts.md), [Tremor](tremor.md)
