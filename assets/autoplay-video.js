(function ($) {
    const YOUTUBE_ORIGIN = 'https://www.youtube.com';
    const VIMEO_ORIGIN = 'https://player.vimeo.com';

    function postMessageToPlayer(player, command, origin) {
        if (player == null || command == null) return;
        player.contentWindow.postMessage(JSON.stringify(command), origin || '*');
    }

    var halo = {
        sectionVideo: function () {
            var slickSlideshow = document.querySelectorAll('.video-section');
            if (slickSlideshow.length === 0) return;

            var playSection = function (element) {
                var player = element.querySelector('.js-youtube');
                if (player) {
                    postMessageToPlayer(player, {
                        "event": "command",
                        "func": "playVideo"
                    }, YOUTUBE_ORIGIN);
                }
            };

            var pauseSection = function (element) {
                var player = element.querySelector('.js-youtube');
                if (player) {
                    postMessageToPlayer(player, {
                        "event": "command",
                        "func": "pauseVideo"
                    }, YOUTUBE_ORIGIN);
                }
            };

            window.addEventListener('load', function () {
                slickSlideshow.forEach(playSection);
            });

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        playSection(entry.target);
                    } else {
                        pauseSection(entry.target);
                    }
                });
            }, { threshold: 0.25 });

            slickSlideshow.forEach(function (el) {
                observer.observe(el);
            });
        },

        autoplayOnScroll: function () {
            var widgetSections = document.querySelectorAll('.cust-prod-widget');
            if (widgetSections.length === 0) return;

            function playWidget(element) {
                var poster = element.querySelector('.cust-prod-widget__item--video-poster');
                var playerYt = element.querySelector('.js-youtube');
                var playerVimeo = element.querySelector('.js-vimeo');
                var playerMp4 = element.querySelector('.js-video');

                if (poster && (element.querySelector('video') || element.querySelector('iframe'))) {
                    poster.classList.add('is-hide');
                }

                if (playerYt) {
                    postMessageToPlayer(playerYt, {
                        "event": "command",
                        "func": "playVideo"
                    }, YOUTUBE_ORIGIN);
                }
                if (playerVimeo) {
                    postMessageToPlayer(playerVimeo, {
                        method: "play"
                    }, VIMEO_ORIGIN);
                }
                if (playerMp4) {
                    playerMp4.play();
                }
            }

            function pauseWidget(element) {
                var playerYt = element.querySelector('.js-youtube');
                var playerVimeo = element.querySelector('.js-vimeo');
                var playerMp4 = element.querySelector('.js-video');

                if (playerYt) {
                    postMessageToPlayer(playerYt, {
                        "event": "command",
                        "func": "pauseVideo"
                    }, YOUTUBE_ORIGIN);
                }
                if (playerVimeo) {
                    postMessageToPlayer(playerVimeo, {
                        method: "pause"
                    }, VIMEO_ORIGIN);
                }
                if (playerMp4) {
                    playerMp4.pause();
                }
            }

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        playWidget(entry.target);
                    } else {
                        pauseWidget(entry.target);
                    }
                });
            }, { threshold: 0.25 });

            widgetSections.forEach(function (el) {
                observer.observe(el);
            });
        }
    };

    halo.sectionVideo();
    halo.autoplayOnScroll();
})(jQuery);
