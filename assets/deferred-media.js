class DeferredMedia extends HTMLElement {
    constructor() {
        super();
        this.querySelector('[id^="Deferred-Poster-"]')?.addEventListener('click', this.loadContent.bind(this));
    }

    loadContent() {
        if (!this.getAttribute('loaded')) {
            const templateContent = this.querySelector('template').content.cloneNode(true);
            const content = document.createElement('div');
            content.appendChild(templateContent);

            this.setAttribute('loaded', true);
            window.pauseAllMedia();

            const elements = content.querySelectorAll('video, model-viewer, iframe');
            elements.forEach(element => {
                // Check if element uses responsive classes (slide-mb/slide-pc)
                const hasResponsiveClass = element.classList.contains('slide-mb') || element.classList.contains('slide-pc');

                if (!hasResponsiveClass) {
                    // Elements without responsive classes (e.g., model-viewer from Shopify's media_tag)
                    // should be loaded on all devices
                    this.appendChild(element);
                } else if (window.innerWidth < 551) {
                    // Mobile: only load elements with slide-mb class
                    element.classList.contains('slide-mb') && this.appendChild(element);
                } else {
                    // Desktop: only load elements with slide-pc class
                    element.classList.contains('slide-pc') && this.appendChild(element);
                }
            });
        }
    }
}

customElements.define('deferred-media', DeferredMedia);