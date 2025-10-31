class ProductModel extends DeferredMedia {
    constructor() {
        super();
    }

    loadContent() {
        super.loadContent();

        Shopify.loadFeatures([
            {
                name: 'model-viewer-ui',
                version: '1.0',
                onLoad: this.setupModelViewerUI.bind(this),
            },
        ]);
    }

    setupModelViewerUI(errors) {
        if (errors) {
            console.warn('Shopify ModelViewerUI failed to load:', errors);
            return;
        }

        const modelViewer = this.querySelector('model-viewer');
        if (modelViewer) {
            this.modelViewerUI = new Shopify.ModelViewerUI(modelViewer);
        } else {
            console.warn('model-viewer element not found in product-model component');
        }
    }
}

customElements.define('product-model', ProductModel);

window.ProductModel = {
    loadShopifyXR() {
        Shopify.loadFeatures([
            {
                name: 'shopify-xr',
                version: '1.0',
                onLoad: this.setupShopifyXR.bind(this),
            },
        ]);
    },

    setupShopifyXR(errors) {
        if (errors) {
            console.warn('Shopify XR failed to load:', errors);
            return;
        }

        if (!window.ShopifyXR) {
            document.addEventListener('shopify_xr_initialized', () =>
                this.setupShopifyXR()
            );

            return;
        }

        document.querySelectorAll('[id^="ProductJSON-"]').forEach((modelJSON) => {
            try {
                window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
                modelJSON.remove();
            } catch (error) {
                console.error('Failed to add 3D model to ShopifyXR:', error);
            }
        });

        window.ShopifyXR.setupXRElements();
    },
};

window.addEventListener('DOMContentLoaded', () => { window.ProductModel?.loadShopifyXR(); });
