# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Shopify Liquid theme** for e-commerce websites. The theme follows Shopify's standard theme development structure and uses Liquid templating language for dynamic content rendering.

## Architecture and Structure

### Core Components

- **`layout/`** - Base theme layouts:
  - `theme.liquid` - Main theme wrapper with HTML structure, meta tags, and asset loading
  - `password.liquid` - Password protection layout

- **`templates/`** - Page templates for different content types:
  - Product templates with multiple layouts (full-width, gallery, left/right thumbs, etc.)
  - Collection templates (masonry, grid, sidebar variants)  
  - Blog templates (list, masonry, simple, full-width)
  - Customer account templates
  - Static page templates

- **`sections/`** - Reusable theme sections:
  - Product display sections (`main-product.liquid`, `product-block.liquid`)
  - Collection sections (`main-collection-*.liquid`)
  - Content sections (hero banners, image blocks, newsletters)
  - Navigation sections (headers, footers, mobile menus)

- **`snippets/`** - Reusable template components:
  - `product-card.liquid` - Product display cards
  - Navigation and breadcrumb components
  - Form components (add-to-cart, newsletter signup)
  - Media handling snippets

- **`blocks/`** - Theme blocks for section customization

- **`assets/`** - Static assets:
  - CSS stylesheets (component-based architecture)
  - JavaScript functionality files
  - Theme configuration files

- **`config/`** - Theme configuration:
  - `settings_schema.json` - Theme customization options
  - `settings_data.json` - Current theme settings values

### Theme Architecture Patterns

1. **Component-Based CSS**: Each major component has its own stylesheet (e.g., `component-product.css`, `component-cart.css`)

2. **Template Inheritance**: The main product template (`main-product.liquid`) conditionally renders different product page layouts based on settings

3. **Liquid Template Logic**: Heavy use of Liquid for dynamic content, conditional rendering, and data manipulation

4. **Responsive Design**: Separate mobile and desktop handling throughout templates

5. **Section-Based Customization**: Store owners can customize page layouts through Shopify's section system

## Development Notes

### No Build Process
This is a standard Shopify theme that does **not** use any build tools, package managers, or compilation steps. All files are deployed directly to Shopify's servers.

### File Editing
- Edit `.liquid`, `.css`, and `.js` files directly
- Asset files are served directly from the `assets/` directory  
- No transpilation or bundling required

### Theme Development Workflow
1. Use Shopify CLI or Theme Kit for local development
2. Upload changes directly to Shopify store or development theme
3. Test changes in Shopify's theme preview
4. No local server or build commands needed

### Key Settings
- Theme layout is configurable via `settings_data.json`
- Product page layouts support multiple variants (gallery, full-width, sidebar options)
- Mobile-specific navigation and toolbar components
- Multi-language and multi-currency support configured

### Asset Loading
- CSS and JS assets are loaded via Liquid `asset_url` filter
- Critical CSS and JavaScript are inlined in the theme layout
- Font loading through Google Fonts integration

## Customization Areas

### Product Display
- Multiple product page templates available in `sections/main-product-*.liquid`
- Product cards are highly customizable through `snippets/product-card.liquid`
- Variant selection and inventory management built-in

### Collection Pages  
- Various collection layouts (grid, masonry, with/without sidebar)
- Filtering and sorting functionality
- Product block components for homepage displays

### Navigation
- Mobile-first navigation design
- Mega menu support
- Multi-level menu structure

### Content Sections
- Homepage sections (hero banners, product blocks, Instagram feed)
- Newsletter signup components
- Social media integration

## Convermax Year/Make/Model (YMM) Integration

This theme integrates with the **Convermax Year/Make/Model app** to provide vehicle-specific product filtering for automotive parts.

### Implementation Files

**Assets:**
- `assets/convermax-custom.css` - Custom styling for Convermax widgets (black background, white text, inverted icons)

**Layout:**
- `layout/theme.liquid` (lines 105-106) - Loads Convermax CSS stylesheet

**Templates:**
- `templates/index.json` - Contains homepage YMM vehicle selector widget (section ID: `1760972761b13df521`)
- `templates/collection.json` - Contains Convermax collection page with:
  - Subcategory carousel navigation
  - Vehicle-filtered product display
  - Default product grid disabled (section ID: `1760973002cae8eced`)

### How It Works

1. **Homepage Widget**: Displays Year → Make → Model → Engine dropdown selectors
2. **Collection Filtering**: Shows only products compatible with selected vehicle
3. **Category Navigation**: Displays relevant subcategories for selected vehicle
4. **Custom Styling**: Black background with white text to match brand identity

### IMPORTANT: App Embed Configuration

**The Convermax app must be enabled as an App Embed for the widgets to function correctly.**

After deploying theme changes, you MUST enable the app embed:

1. Go to **Shopify Admin** → **Online Store** → **Themes**
2. Click **Customize** on the active theme
3. Click the **Theme settings** icon (⚙️ gear icon) in left sidebar
4. Scroll to **App embeds** section
5. Find "**Convermax Year/Make/Model**" and toggle it **ON**
6. Click **Save**

**Note:** App embeds are store-specific settings and do not transfer with theme files. Each store deployment requires this manual step.

### Troubleshooting

**Problem:** YMM widget appears as empty white boxes with no dropdowns
**Solution:** Enable the Convermax app embed in Theme Settings (see steps above)

**Problem:** Widget not showing on homepage
**Solution:** Check that section `1760972761b13df521` is included in `templates/index.json` order array

**Problem:** Collection pages not filtering by vehicle
**Solution:** Verify section `1760973002cae8eced` exists in `templates/collection.json` and default `product-grid` section is disabled

This theme follows Shopify's theme development best practices and supports extensive customization through the Shopify admin interface.