if (!customElements.get('ramair-reviews-carousel')) {
    class RamairReviewsCarousel extends HTMLElement {
        constructor() {
            super();
            this.carousel = this.querySelector('.ramair-reviews-carousel');
            this.track = this.querySelector('.ramair-reviews-track');
        }

        connectedCallback() {
            this.init();
            this.setupAccessibility();
        }

        init() {
            // Clone reviews for seamless infinite scroll
            // Already done in Liquid template with duplicate reviews

            // Pause animation on hover for better UX
            this.carousel.addEventListener('mouseenter', () => {
                this.track.style.animationPlayState = 'paused';
            });

            this.carousel.addEventListener('mouseleave', () => {
                this.track.style.animationPlayState = 'running';
            });

            // Handle touch events for mobile
            let touchStartX = 0;
            let touchEndX = 0;
            let isDragging = false;

            this.carousel.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
                isDragging = true;
                this.track.style.animationPlayState = 'paused';
            });

            this.carousel.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                touchEndX = e.touches[0].clientX;
            });

            this.carousel.addEventListener('touchend', () => {
                if (!isDragging) return;
                isDragging = false;
                this.track.style.animationPlayState = 'running';
            });

            // Respect prefers-reduced-motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                this.track.style.animation = 'none';
            }

            // Handle visibility change (pause when tab is not active)
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.track.style.animationPlayState = 'paused';
                } else {
                    this.track.style.animationPlayState = 'running';
                }
            });
        }

        setupAccessibility() {
            // Add aria-label to carousel
            this.carousel.setAttribute('aria-label', 'Customer reviews carousel');

            // Ensure duplicate reviews are hidden from screen readers
            const reviewCards = this.querySelectorAll('.review-card');
            const halfPoint = Math.floor(reviewCards.length / 2);

            reviewCards.forEach((card, index) => {
                if (index >= halfPoint) {
                    card.setAttribute('aria-hidden', 'true');
                }
            });
        }
    }

    customElements.define('ramair-reviews-carousel', RamairReviewsCarousel);
}

// Auto-load the script when section is visible
document.addEventListener('DOMContentLoaded', () => {
    const ramairReviewsSections = document.querySelectorAll('.ramair-reviews-section');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Section is visible, carousel will auto-start via CSS animation
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });

        ramairReviewsSections.forEach(section => {
            observer.observe(section);
        });
    }
});
