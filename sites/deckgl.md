---
title: deck.gl
description: GPU-powered WebGL/WebGPU framework for large-scale spatial visualization with composable layers and views.
url: https://deck.gl
type: js-library
formats: visualization framework · npm package · Python bindings
topics: [data-viz, 3d-and-shaders]
verdict: useful
agent: []
pricing: free
licence: MIT for the core framework. Map provider and basemap costs are separate.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [observable-plot, threejs, component-gallery]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# deck.gl

## What it is

deck.gl is a GPU-powered framework for large-scale WebGL and WebGPU visualization, from the vis.gl suite under the OpenJS Foundation. It maps data (arrays of JSON objects or binary columns) into a stack of visual layers (icons, polygons, text) rendered through views (map, first-person, orthographic), with picking, highlighting, filtering and basemap integration.

## When to open it

- When a map or spatial dataset is too dense for SVG charts and needs GPU layers.
- When a visualization needs coordinated views (map plus first-person) over the same data.
- When layers should be composed and extended rather than a single chart type.

## Most useful

- Layer catalogue: proven, tested layers for points, polygons, text, arcs and more, each with a flexible API.
- Shared views: one data model rendered through several projections at once.
- Basemap integration with MapLibre, Google Maps, Mapbox and Esri ArcGIS.
- Ecosystem: react-map-gl, loaders.gl, luma.gl, math.gl and Python bindings (pydeck, Lonboard).

## Using it with agents

- No official MCP, llms.txt, CLI, registry, API, prompt or skill channel is published at review; the documented API and npm install (`npm install deck.gl`) are the paths.
- React and script-tag flavors cover the common integration shapes; Python users go through pydeck or Lonboard.

## Watch out for

- Basemap and map-provider costs sit outside the MIT framework licence.
- Performance depends on GPU support and data shape; binary columns matter at scale, which adds pipeline complexity.
- The framework is large. Teams that only need one static map may be over-served.

## Reusable ideas

- Stack purpose-specific layers (points, polygons, text) under shared views instead of treating a complex map as one chart.
- Keep layers composable and extendable, so custom needs reuse the same architecture.
- Separate data loading, GPU access and geospatial math into companion packages instead of one monolith.

## Related

[Observable Plot](observable-plot.md), [Three.js](threejs.md), [The Component Gallery](component-gallery.md)
