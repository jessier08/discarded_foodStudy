
            // Returns true if the specified element has been scrolled into the viewport.
        function isElementInViewportShower(elemShower) {
            var $elemShower = $(elemShower);

            // Get the scroll position of the page.
            var scrollElemShower = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
            var viewportTopShower = $(scrollElemShower).scrollTop();
            var viewportBottomShower = viewportTopShower + $(window).height();

            // Get the position of the element on the page.
            var elemTopShower = Math.round( $elemShower.offset().top );
            var elemBottomShower = elemTopShower + $elemShower.height();

            return ((elemTopShower < viewportBottomShower) && (elemBottomShower > viewportTopShower));
        }

        // Check if it's time to start the animation.
        function checkAnimationShower() {
            var $elemShower = $('#water .shower');

            // If the animation has already been started
            if ($elemShower.hasClass('startShower')) return;

            if (isElementInViewportShower($elemShower)) {
                // Start the animation
                $elemShower.addClass('startShower');
            }
        }

        // Capture scroll events
        $(window).scroll(function(){
            checkAnimationShower();
        });

   