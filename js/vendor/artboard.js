// Navbar Toggler effect

$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change');
    });
});

// Navbar Sticky effect

$(document).ready(function() {
    $('.main-nav').sticky({
        topSpacing: 0,
        zIndex: 500,
    });
});