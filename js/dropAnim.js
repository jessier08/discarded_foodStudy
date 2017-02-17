
            // Returns true if the specified element has been scrolled into the viewport.
        function isElementInViewportDrops(elemDrops) {
            var $elemDrops = $(elemDrops);

            // Get the scroll position of the page.
            var scrollElemDrops = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
            var viewportTopDrops = $(scrollElemDrops).scrollTop();
            var viewportBottomDrops = viewportTopDrops + $(window).height();

            // Get the position of the element on the page.
            var elemTopDrops = Math.round( $elemDrops.offset().top );
            var elemBottomDrops = elemTopDrops + $elemDrops.height();

            return ((elemTopDrops < viewportBottomDrops) && (elemBottomDrops > viewportTopDrops));
        }

        // Check if it's time to start the animation.
        function checkAnimationDrops() {
            var $elemDrops = $('#water .drops');

            // If the animation has already been started
            if ($elemDrops.hasClass('startDrops')) return;

            if (isElementInViewportDrops($elemDrops)) {
                // Start the animation
                $elemDrops.addClass('startDrops');
            }
        }

        // Capture scroll events
        $(window).scroll(function(){
            checkAnimationDrops();
        });

   