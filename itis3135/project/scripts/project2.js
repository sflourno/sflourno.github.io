// #slider function for boxslider plugin on stats.html page
// Credit: Activity 12 Carousel Activity code
$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        auto: true,
        speed: 1000,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 800,
        slideMargin: 20,
        captions: true,
        pagerType: 'short',
        pagerSelector: '#id_pager',
    });
});