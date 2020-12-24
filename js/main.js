// Typed effect JS Code
$(document).ready(function() {
    var typed = new Typed('.typed', {
        strings: ['FOCUS. FAST FORWARD. FUTURE.', 'We are Creative', 'We love design.'],
        typeSpeed: 50,
        backSpeed: 25,
        startDelay: 1000,
        backDelay: 3000,
        loop: true
    });
});

// Domains Owl Carousel JS Code
$(document).ready(function() {
    $('#domains .owl-carousel').owlCarousel({
        items: 5,
        drag: false,
        loop: false,
        dots: true,
        center: true,
        nav: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                center: false,
            },
            400: {
                items: 1.08,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2.9,
            },
            1262: {
                items: 4,
            }
        }
    })
});


// Product Thumbnail Animation Start

var productController = new ScrollMagic.Controller();

var product = gsap.timeline();

product
    .from(
        '.single-product', {
            duration: 1.2,
            scale: 0,
            autoAlpha: 0,
            stagger: 0.3,
            delay: 0.4,
        });

var scene = new ScrollMagic.Scene({
        triggerElement: '#product',
        triggerHook: 0.5,
    })
    .addIndicators({
        colorTrigger: 'transparent',
        colorStart: 'transparent',
        colorEnd: 'transparent',
        indent: 5,
    })
    .setTween(product)
    .addTo(productController);



// Interview Icons Animation Start

var interviewController = new ScrollMagic.Controller();

var interview = gsap.timeline();

interview
    .from(
        '.interview-icon', {
            duration: 1,
            x: -70,
            autoAlpha: 0,
            stagger: 1.15
        },
        '-=5'
    )
    .from(
        '.interview-icon-line', {
            duration: 3.7,
            width: "0%",
            ease: Power0.easeNone,
        },
        '-=5'
    );

var scene = new ScrollMagic.Scene({
        triggerElement: '#interview-process',
        triggerHook: 0.6,
    })
    .addIndicators({
        colorTrigger: 'transparent',
        colorStart: 'transparent',
        colorEnd: 'transparent',
        indent: 5,
    })
    .setTween(interview)
    .addTo(interviewController);