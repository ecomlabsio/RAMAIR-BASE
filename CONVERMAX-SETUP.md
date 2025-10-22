# Convermax Year/Make/Model (YMM) Integration

This theme integrates with the **Convermax Year/Make/Model app** to provide vehicle-specific product filtering for automotive parts.

## Implementation Files

### Assets
- `assets/convermax-custom.css` - Custom styling for Convermax widgets (black background, white text, inverted icons)

### Layout
- `layout/theme.liquid` (lines 105-106) - Loads Convermax CSS stylesheet

### Templates
- `templates/index.json` - Contains homepage YMM vehicle selector widget (section ID: `1760972761b13df521`)
- `templates/collection.json` - Contains Convermax collection page with:
  - Subcategory carousel navigation
  - Vehicle-filtered product display
  - Default product grid disabled (section ID: `1760973002cae8eced`)

## How It Works

1. **Homepage Widget**: Displays Year → Make → Model → Engine dropdown selectors
2. **Collection Filtering**: Shows only products compatible with selected vehicle
3. **Category Navigation**: Displays relevant subcategories for selected vehicle
4. **Custom Styling**: Black background with white text to match brand identity

## IMPORTANT: App Embed Configuration

**⚠️ The Convermax app must be enabled as an App Embed for the widgets to function correctly.**

After deploying theme changes, you **MUST** enable the app embed:

1. Go to **Shopify Admin** → **Online Store** → **Themes**
2. Click **Customize** on the active theme
3. Click the **Theme settings** icon (⚙️ gear icon) in left sidebar
4. Scroll to **App embeds** section
5. Find "**Convermax Year/Make/Model**" and toggle it **ON**
6. Click **Save**

**Note:** App embeds are store-specific settings and do not transfer with theme files. Each store deployment requires this manual step.

## Troubleshooting

### Problem: YMM widget appears as empty white boxes with no dropdowns
**Solution:** Enable the Convermax app embed in Theme Settings (see steps above)

### Problem: Widget not showing on homepage
**Solution:** Check that section `1760972761b13df521` is included in `templates/index.json` order array

### Problem: Collection pages not filtering by vehicle
**Solution:** Verify section `1760973002cae8eced` exists in `templates/collection.json` and default `product-grid` section is disabled

## Version History

- **v1.2.2** - Initial Convermax YMM integration
  - Added homepage vehicle selector
  - Integrated collection page filtering
  - Added custom styling for brand consistency
