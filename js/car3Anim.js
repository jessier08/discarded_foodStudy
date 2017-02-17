
            // Returns true if the specified element has been scrolled into the viewport.
        function isElementInViewport3(elem3) {
            var $elem3 = $(elem3);

            // Get the scroll position of the page.
            var scrollElem3 = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
            var viewportTop3 = $(scrollElem3).scrollTop();
            var viewportBottom3 = viewportTop3 + $(window).height();

            // Get the position of the element on the page.
            var elemTop3 = Math.round( $elem3.offset().top );
            var elemBottom3 = elemTop3 + $elem3.height();

            return ((elemTop3 < viewportBottom3) && (elemBottom3 > viewportTop3));
        }

        // Check if it's time to start the animation.
        function checkAnimation3() {
            var $elem3 = $('#miles .car3');

            // If the animation has already been started
            if ($elem3.hasClass('start3')) return;

            if (isElementInViewport3($elem3)) {
                // Start the animation
                $elem3.addClass('start3');
            }
        }

        // Capture scroll events
        $(window).scroll(function(){
            checkAnimation3();
        });

   