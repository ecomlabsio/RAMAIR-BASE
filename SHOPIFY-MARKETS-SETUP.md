# Shopify Markets Setup Guide for B2B Stores

This guide provides step-by-step instructions for configuring Shopify Markets for currency and language management, replacing the theme's hard-coded currency/language system.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Shopify Markets Configuration](#shopify-markets-configuration)
3. [Market Setup](#market-setup)
4. [Currency Configuration](#currency-configuration)
5. [Language Configuration](#language-configuration)
6. [B2B Customer Groups & Pricing](#b2b-customer-groups--pricing)
7. [Domain & URL Configuration](#domain--url-configuration)
8. [Testing Checklist](#testing-checklist)
9. [Theme Migration Steps](#theme-migration-steps)

---

## Prerequisites

### Requirements
- Shopify Plus account
- B2B functionality enabled
- Admin access to Shopify admin
- Access to theme code editor

### Before Starting
1. **Backup your current theme** - Duplicate your theme before making changes
2. **Document current currency/language settings** - Note down which currencies and languages are currently configured
3. **Review customer groups** - Understand your B2B customer segmentation
4. **Plan your markets** - Decide which markets you'll create (e.g., US Market, EU Market, UK Market)

---

## Shopify Markets Configuration

### Step 1: Access Markets Settings

1. Log into your Shopify Admin
2. Navigate to **Settings** → **Markets**
3. Review the default market (usually your primary market)

### Step 2: Enable Markets

If Markets is not already enabled:
1. Click **"Add market"** or **"Create market"**
2. Shopify will guide you through the initial setup

---

## Market Setup

### Step 3: Create Your Markets

For each geographic region you serve, create a separate market:

#### Example: US Market
1. Click **"Add market"**
2. Name: `United States`
3. Countries/regions: Select `United States`
4. Currency: `USD`
5. Language: `English`
6. Click **"Save"**

#### Example: EU Market
1. Click **"Add market"**
2. Name: `European Union`
3. Countries/regions: Select EU countries (Germany, France, Italy, Spain, etc.)
4. Currency: `EUR` (or market-specific currencies)
5. Language: Select primary language (e.g., `English` or `German`)
6. Click **"Save"**

#### Example: UK Market
1. Click **"Add market"**
2. Name: `United Kingdom`
3. Countries/regions: Select `United Kingdom`
4. Currency: `GBP`
5. Language: `English`
6. Click **"Save"**

### Step 4: Configure Market-Specific Settings

For each market:

1. **Shipping**
   - Click on the market name
   - Go to **"Shipping"** section
   - Assign shipping zones and rates
   - Configure B2B shipping rates if applicable

2. **Taxes**
   - Configure tax settings per market
   - Set up tax overrides for B2B customers if needed

3. **Payment Methods**
   - Ensure payment methods are enabled for each market
   - Configure B2B payment terms if applicable

---

## Currency Configuration

### Step 5: Enable Multiple Currencies

1. In **Settings** → **Markets**
2. For each market, ensure the correct currency is set
3. Shopify Plus automatically handles currency conversion

### Step 6: Configure Currency Display

1. Go to **Settings** → **Store details**
2. Set your **Store currency** (base currency)
3. Shopify Markets will automatically:
   - Convert prices based on market
   - Display prices in market currency
   - Handle currency rounding rules

### Step 7: Set Currency Rounding Rules (Optional)

1. In each market settings
2. Go to **"Pricing"** section
3. Configure rounding rules:
   - Round to nearest whole number
   - Round to nearest 0.05
   - Round to nearest 0.10
   - Custom rounding

---

## Language Configuration

### Step 8: Enable Multiple Languages

1. Go to **Settings** → **Languages**
2. Click **"Add language"**
3. Select languages you want to support:
   - English (default)
   - German
   - French
   - Spanish
   - Italian
   - etc.

### Step 9: Assign Languages to Markets

1. Go to **Settings** → **Markets**
2. For each market:
   - Click on the market name
   - Go to **"Languages"** section
   - Enable the languages available for that market
   - Set the default language

### Step 10: Translate Content

1. Go to **Online Store** → **Languages**
2. For each language:
   - Translate theme strings
   - Translate product descriptions (if needed)
   - Translate collection descriptions
   - Translate page content
   - Translate navigation menus

**Note:** Use Shopify's translation system or third-party apps like Weglot, Langify, or GTranslate for automatic translation.

---

## B2B Customer Groups & Pricing

### Step 11: Configure B2B Customer Groups

1. Go to **Customers** → **Customer groups**
2. Create groups for your B2B segments:
   - Wholesale Tier 1
   - Wholesale Tier 2
   - Distributors
   - Retailers
   - etc.

### Step 12: Set Market-Specific Pricing

1. Go to **Products** → Select a product
2. Click **"Pricing"**
3. Set base price
4. For B2B pricing:
   - Go to **"Customer pricing"** section
   - Assign prices to customer groups
   - Set market-specific prices if needed

### Step 13: Configure Price Lists (Advanced)

For complex B2B pricing:
1. Go to **Settings** → **Price lists**
2. Create price lists for different customer groups
3. Assign price lists to:
   - Specific markets
   - Customer groups
   - Products or collections

---

## Domain & URL Configuration

### Step 14: Configure Market Domains

1. Go to **Settings** → **Markets**
2. For each market:
   - Click on the market name
   - Go to **"Domains"** section
   - Assign domain or subdomain:
     - `us.yourstore.com` (US Market)
     - `eu.yourstore.com` (EU Market)
     - `uk.yourstore.com` (UK Market)
   - Or use country-specific domains:
     - `yourstore.com` (US)
     - `yourstore.de` (Germany)
     - `yourstore.co.uk` (UK)

### Step 15: Configure URL Structure

1. In market settings → **"URLs"**
2. Choose URL structure:
   - **Subfolder**: `yourstore.com/en-us/` or `yourstore.com/de-de/`
   - **Subdomain**: `us.yourstore.com` or `de.yourstore.com`
   - **Domain**: `yourstore.com` vs `yourstore.de`

**Recommendation for B2B:** Use subfolder structure for easier management:
- `yourstore.com/en-us/` (US English)
- `yourstore.com/de-de/` (German)
- `yourstore.com/fr-fr/` (French)

---

## Testing Checklist

### Pre-Migration Testing

- [ ] All markets are created and configured
- [ ] Currencies are correctly assigned to markets
- [ ] Languages are enabled and assigned to markets
- [ ] B2B customer groups are set up
- [ ] Price lists are configured (if using)
- [ ] Shipping zones are assigned to markets
- [ ] Tax settings are configured per market
- [ ] Payment methods are enabled per market
- [ ] Domains/subdomains are configured (if using)

### Post-Migration Testing

- [ ] Currency switcher displays correct currencies
- [ ] Language switcher displays correct languages
- [ ] Prices convert correctly when switching markets
- [ ] B2B pricing displays correctly for logged-in customers
- [ ] URLs update correctly when switching markets/languages
- [ ] Cart persists when switching markets
- [ ] Checkout uses correct currency and language
- [ ] Mobile experience works correctly
- [ ] SEO URLs are correct for each market
- [ ] Customer accounts work across markets

---

## Theme Migration Steps

### Phase 1: Preparation

1. **Backup Current Settings**
   - Export current `settings_data.json`
   - Document current currency/language configuration
   - Note which currencies and languages are active

2. **Review Current Implementation**
   - Identify all files using currency/language switchers
   - List all header sections that include currency/language
   - Document JavaScript dependencies

### Phase 2: Theme Updates

1. **Update Theme Settings**
   - Add new setting: "Use Shopify Markets" (checkbox)
   - Keep old settings for backward compatibility during transition

2. **Create New Snippets**
   - `markets-currency.liquid` - Uses Shopify Markets currency API
   - `markets-language.liquid` - Uses Shopify Markets language API
   - `markets-selector.liquid` - Combined currency/language selector

3. **Update Header Sections**
   - Replace `halo-currency` with `markets-currency` (when Markets enabled)
   - Replace `halo-language` with `markets-language` (when Markets enabled)
   - Update conditional logic to check Markets setting

4. **Remove Old Dependencies**
   - Remove `halo-currency-js.liquid` references
   - Remove `jquery.currencies.min.js` dependencies
   - Remove geoplugin auto-currency detection
   - Clean up old currency conversion JavaScript

### Phase 3: Testing

1. **Enable Markets in Theme**
   - Toggle "Use Shopify Markets" setting ON
   - Test currency switcher
   - Test language switcher
   - Verify B2B pricing displays correctly

2. **Cross-Browser Testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

3. **Customer Testing**
   - Test with different customer groups
   - Test market switching
   - Test cart persistence
   - Test checkout flow

### Phase 4: Cleanup

1. **Remove Old Code** (after confirming Markets works)
   - Remove old currency settings from `settings_schema.json`
   - Remove old language settings from `settings_schema.json`
   - Delete unused currency JavaScript files
   - Clean up old snippets (or mark as deprecated)

2. **Update Documentation**
   - Update theme documentation
   - Create user guide for Markets configuration
   - Document any customizations made

---

## Important Notes

### Currency Conversion
- Shopify Plus handles currency conversion automatically
- Conversion rates update automatically
- No manual JavaScript conversion needed
- Prices are converted server-side for accuracy

### Language Switching
- Uses Shopify's native `localization` object
- No custom translation files needed (if using Shopify translations)
- Supports right-to-left (RTL) languages automatically
- SEO-friendly URLs for each language

### B2B Considerations
- Customer groups work across all markets
- Price lists can be market-specific
- B2B pricing displays automatically based on customer group
- Market-specific catalogs can be configured

### Performance
- Markets system is faster than JavaScript-based conversion
- Server-side rendering improves SEO
- Reduced JavaScript bundle size
- Better mobile performance

---

## Troubleshooting

### Currency Not Displaying Correctly
- Check market currency settings
- Verify store currency is set correctly
- Check if customer group pricing is interfering
- Review price list assignments

### Language Not Switching
- Verify language is enabled in market settings
- Check if translations are complete
- Verify URL structure is correct
- Check browser cache

### B2B Pricing Not Showing
- Verify customer is logged in
- Check customer group assignments
- Review price list configuration
- Check market-specific pricing rules

### Cart Issues When Switching Markets
- Shopify handles cart conversion automatically
- Some items may become unavailable in new market
- Shipping costs may change
- Tax calculations update automatically

---

## Support Resources

- [Shopify Markets Documentation](https://help.shopify.com/en/manual/markets)
- [Shopify Plus B2B Guide](https://help.shopify.com/en/manual/b2b)
- [Shopify API: Markets](https://shopify.dev/api/admin-graphql/latest/objects/Market)
- [Shopify Localization API](https://shopify.dev/api/liquid/objects/localization)

---

## Next Steps

After completing this setup:
1. Follow the theme migration steps in this document
2. Test thoroughly before going live
3. Monitor analytics for market performance
4. Gather customer feedback
5. Optimize based on data

---

**Last Updated:** 2025-01-17
**Theme Version:** 1.3.1+
**Shopify Plus Required:** Yes

