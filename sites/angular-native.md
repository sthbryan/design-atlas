---
title: Angular Native
description: Alpha MIT framework for building native iOS and Android apps with Angular, Expo and React Native's rendering layer.
url: https://ng-native.com/
type: js-library
formats: Angular native app framework · Expo template · React Native Fabric
topics: [components, documentation, ux-patterns]
verdict: niche
agent: [llms-txt]
pricing: free
licence: Free and MIT-licensed in the `ng-native/ng-native` repository. The project is in alpha at review.
licence_class: open-source-permissive
reviewed: 2026-09-29
status: active
related: [design-mobile-apps, ionicons]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [ux-patterns](../topics/ux-patterns.md)

# Angular Native

## What it is

Angular Native is an alpha framework for building native iOS and Android apps with Angular. Its site describes Angular components rendered through React Native Fabric and an Expo-based project template. The landing page demonstrates the idea with overlapping mobile app previews, a visible install command and a feature-by-feature overview.

## When to open it

Open it when a team wants to explore native mobile development while keeping Angular's component model, or when you need a reference for presenting a new framework's setup and platform capabilities clearly.

## Most useful

- **Device previews**: the hero shows several different app surfaces at once, making the cross-platform goal concrete.
- **Feature sections**: the page explains the CSS engine, Tailwind integration and design tokens as separate capabilities.
- **Getting started**: the repository documents creation from the Expo template followed by the standard Expo development command.

## Using it with agents

The project says its documentation is published as `llms.txt` and new apps include an `AGENTS.md`. An agent can use those guides to scaffold and understand the project, but should verify the current alpha instructions and package versions before changing generated native configuration.

## Watch out for

- The framework is in alpha; APIs and setup steps may change.
- The runtime spans Angular, Expo and React Native. Confirm the versions required by the current template rather than assuming a regular Angular web app setup.
- Pricing is free at review under MIT, but this does not remove platform-specific setup requirements for native builds.

## Reusable ideas

- Show the actual target devices and app surfaces beside the first install command.
- Explain a cross-framework runtime with a short layer-by-layer capability overview.
- Ship agent-facing setup context in the generated project as well as in hosted documentation.

## Related

[design-mobile-apps (Sleek)](design-mobile-apps.md), [Ionicons](ionicons.md)
