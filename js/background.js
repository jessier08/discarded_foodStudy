// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('#miles');

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('milesAnimation');
    } else {
        $elem.removeClass('milesAnimation');
    }
};