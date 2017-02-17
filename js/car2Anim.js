
            // Returns true if the specified element has been scrolled into the viewport.
        function isElementInViewport2(elem2) {
            var $elem2 = $(elem2);

            // Get the scroll position of the page.
            var scrollElem2 = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
            var viewportTop2 = $(scrollElem2).scrollTop();
            var viewportBottom2 = viewportTop2 + $(window).height();

            // Get the position of the element on the page.
            var elemTop2 = Math.round( $elem2.offset().top );
            var elemBottom2 = elemTop2 + $elem2.height();

            return ((elemTop2 < viewportBottom2) && (elemBottom2 > viewportTop2));
        }

        // Check if it's time to start the animation.
        function checkAnimation2() {
            var $elem2 = $('#miles .car2');

            // If the animation has already been started
            if ($elem2.hasClass('start2')) return;

            if (isElementInViewport2($elem2)) {
                // Start the animation
                $elem2.addClass('start2');
            }
        }

        // Capture scroll events
        $(window).scroll(function(){
            checkAnimation2();
        });

   