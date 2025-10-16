# Changelog

All notable changes to this theme will be documented in this file.

## 1.3.0 — 2025-10-16

- Add: Vehicle Selector block for main collection section
  - Clean, menu-driven vehicle brand grid
  - Integrated as a block in main-collection-product-grid section
  - Fully responsive with customizable styling options
  - Pulls vehicle brands from Shopify navigation menus
- Add: Component stylesheet for vehicle selector (assets/component-vehicle-selector.css)

## 1.2.0 — 2025-09-19

- Fix: blocks/media.liquid dynamic tag caused LiquidHTMLSyntaxError. Rewrote to explicit `<div>`/`<a>` wrappers with correct attributes.
- Fix: blocks/button.liquid undefined `button_link`. Simplified to a resolved variable to avoid self-referencing assign.
- Fix: sections/marquee.liquid and locales/en.default.schema.json translation key typo `cenner_banner` → `center_banner`.
- Improvement: layout/theme.liquid
  - Replaced deprecated `img_url` with `image_url` for favicon.
  - Avoid parser-blocking by loading `custom.js` with `<script defer>`.
- Improvement: layout/password.liquid now serves countdown script from theme assets instead of external CDN.
- Add: assets/jquery.countdown.min.js vendored to serve via Shopify CDN.
- Add: Featured Product section → Price block now exposes `price_color` setting; applied via CSS var `--product-price-color`.
- Fix: locales/en.default.json added missing search keys used by quick search (`view_results`, `heading_results`, `no_results`).

## 1.1.0 — 2025-09-10

- Initial baseline import and structure updates.

