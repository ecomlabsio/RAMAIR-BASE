# Changelog

All notable changes to this theme will be documented in this file.

## 1.3.1 — 2025-01-XX

- Fix: Dark mode white bar issue on FAQ and Contact pages
  - Added background color to section wrappers when dark mode is enabled
  - Fixed white bars appearing beneath header and before footer on dark mode pages
  - Applied to sections/main-faqs-page.liquid, sections/main-contact-us-1.liquid, and sections/main-contact-us-2.liquid

## 1.3.0 — 2025-10-16

- Add: Ramair Vehicle Selector section (sections/ramair-vehicle-selector.liquid)
  - Standalone section for vehicle brand navigation
  - Menu-driven grid with customizable alignment (left/center/right)
  - Fixed button height control for consistent appearance
  - Simplified settings focused on essential styling
  - Responsive design with mobile/tablet/desktop layouts
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

