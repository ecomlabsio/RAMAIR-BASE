# Shopify Markets Migration Guide

This guide explains how to migrate from the theme's hard-coded currency/language system to Shopify Markets.

## Overview

The theme now supports Shopify Markets natively. When enabled, it uses Shopify's built-in Markets API instead of the legacy JavaScript-based currency conversion system.

## Benefits of Shopify Markets

1. **Server-side currency conversion** - More accurate and faster
2. **Native language support** - Uses Shopify's translation system
3. **Better SEO** - Proper URL structure for each market
4. **B2B integration** - Works seamlessly with customer groups and price lists
5. **Reduced JavaScript** - Smaller bundle size, better performance
6. **Automatic updates** - Currency rates update automatically

## Migration Steps

### Step 1: Configure Shopify Markets

Follow the **SHOPIFY-MARKETS-SETUP.md** guide to configure Markets in your Shopify admin.

### Step 2: Enable Markets in Theme

1. Go to **Theme Customizer** → **Theme Settings**
2. Navigate to **Multiple Currencies** section
3. Enable **"Use Shopify Markets"** checkbox
4. Save settings

### Step 3: Test the Migration

1. **Currency Switching**
   - Verify currency switcher appears in header
   - Test switching between currencies
   - Verify prices update correctly
   - Check that cart persists when switching

2. **Language Switching**
   - Verify language switcher appears
   - Test switching between languages
   - Verify URLs update correctly
   - Check translations display properly

3. **B2B Functionality**
   - Test with different customer groups
   - Verify B2B pricing displays correctly
   - Check market-specific pricing

### Step 4: Remove Legacy Code (Optional)

After confirming Markets works correctly, you can optionally remove legacy code:

1. **Disable Legacy Settings**
   - Set `enable_currencies` to `false` (if not using Markets fallback)
   - Set `enable_multilang_shopify` to `false` (if not using Markets fallback)

2. **Remove Unused Files** (Advanced)
   - `snippets/halo-currency-js.liquid` (no longer needed)
   - `assets/jquery.currencies.min.js` (if not used elsewhere)
   - Old currency conversion JavaScript

**Note:** Keep legacy code as fallback during transition period.

## Code Changes Made

### New Snippets Created

1. **`snippets/markets-currency.liquid`**
   - Uses `shop.enabled_currencies` and `localization.available_countries`
   - Uses Shopify's `localization` form for currency switching
   - No JavaScript conversion needed

2. **`snippets/markets-language.liquid`**
   - Uses `localization.available_languages`
   - Uses Shopify's `localization` form for language switching
   - Supports RTL languages automatically

3. **`snippets/markets-top-currency.liquid`**
   - Wrapper compatible with existing header structure
   - Replaces `halo-top-currency` when Markets enabled

4. **`snippets/markets-top-language.liquid`**
   - Wrapper compatible with existing header structure
   - Replaces `halo-top-language` when Markets enabled

5. **`snippets/markets-selector.liquid`**
   - Combined currency and language selector
   - Can be used as a single component

### Header Sections Updated

The following header sections have been updated to support Markets:

- `sections/header-utility.liquid`
- `sections/header-nav-multi-site.liquid`

**Pattern Used:**

```liquid
{%- liquid
    assign use_markets = settings.use_shopify_markets
    assign show_language = false
    assign show_currency = false
    
    if use_markets
        if localization.available_languages.size > 1
            assign show_language = true
        endif
        if shop.enabled_currencies.size > 1 or localization.available_countries.size > 1
            assign show_currency = true
        endif
    else
        if settings.enable_multilang_shopify
            assign show_language = true
        endif
        if settings.enable_currencies
            assign show_currency = true
        endif
    endif
-%}

{%- if show_language or show_currency -%}
    {%- if use_markets -%}
        {%- if show_language -%}
            {% render 'markets-top-language' %}
        {%- endif -%}
        {%- if show_currency -%}
            {% render 'markets-top-currency' %}
        {%- endif -%}
    {%- else -%}
        {%- if show_language -%}
            {% render 'halo-top-language' %}
        {%- endif -%}
        {%- if show_currency -%}
            {% render 'halo-top-currency' %}
        {%- endif -%}
    {%- endif -%}
{%- endif -%}
```

### Remaining Header Sections

The following header sections still need to be updated (if used):

- `sections/header-advanced.liquid`
- `sections/header-minimal.liquid`
- `sections/header-classic.liquid`
- `sections/header-navigation-compact.liquid`
- `sections/header-navigation-left-aligned.liquid`
- `sections/header-navigation-hamburger.liquid`
- `sections/header-single-line.liquid`
- `sections/header-navigation-plain.liquid`
- `sections/header-navigation-utility.liquid`
- `sections/header-navigation-vertical-menu.liquid`
- `sections/header-navigation-full-elements.liquid`
- `sections/header-basic.liquid`
- `sections/header-navigation-basic.liquid`
- `sections/header-simple.liquid`

**To update these sections:**

1. Find the section where `halo-top-language` or `halo-top-currency` is rendered
2. Replace with the pattern shown above
3. Test the header section

## Settings Schema Changes

### New Setting Added

- **`use_shopify_markets`** (checkbox)
  - Location: Theme Settings → Multiple Currencies
  - Default: `false`
  - When enabled, uses Shopify Markets API
  - When disabled, uses legacy system

### Legacy Settings (Still Available)

These settings are still available for backward compatibility:

- `enable_currencies`
- `currency_type`
- `currency_1_unit` through `currency_10_unit`
- `enable_multilang_shopify`
- `lange_1` through `lange_6`

## Troubleshooting

### Currency Not Switching

**Issue:** Currency selector doesn't change prices

**Solutions:**
1. Verify Markets is configured in Shopify admin
2. Check that `use_shopify_markets` is enabled in theme settings
3. Ensure currencies are enabled in Markets settings
4. Check browser console for JavaScript errors
5. Verify form submission is working

### Language Not Switching

**Issue:** Language selector doesn't change language

**Solutions:**
1. Verify languages are enabled in Markets settings
2. Check that translations are complete
3. Verify URL structure is correct
4. Check browser cache
5. Ensure `localization.available_languages` has multiple languages

### Prices Not Converting

**Issue:** Prices show in wrong currency

**Solutions:**
1. Check market currency settings
2. Verify customer's market assignment
3. Check if B2B pricing is interfering
4. Review price list assignments
5. Check currency rounding rules

### B2B Pricing Not Showing

**Issue:** B2B prices not displaying correctly

**Solutions:**
1. Verify customer is logged in
2. Check customer group assignments
3. Review price list configuration
4. Check market-specific pricing rules
5. Verify B2B functionality is enabled

## Rollback Plan

If you need to rollback to the legacy system:

1. Go to **Theme Customizer** → **Theme Settings**
2. Navigate to **Multiple Currencies** section
3. Disable **"Use Shopify Markets"** checkbox
4. Save settings

The theme will automatically use the legacy currency/language system.

## Support

For issues or questions:

1. Review **SHOPIFY-MARKETS-SETUP.md** for configuration help
2. Check Shopify Markets documentation
3. Contact theme support

## Next Steps

After migration:

1. Monitor analytics for market performance
2. Gather customer feedback
3. Optimize based on data
4. Consider removing legacy code after stable period

---

**Last Updated:** 2025-01-17
**Theme Version:** 1.3.1+
**Shopify Plus Required:** Yes

