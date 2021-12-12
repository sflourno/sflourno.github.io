$(document).ready(function () {
    var nextSlide = $("#slides img:first-child");
    var next;
    var slideshow = function () {
        $("#slide").fadeOut(1000,function () {
    if (nextSlide.length == 0){
        nextSlide = $("#slides img:first-child");
    } else {
        nextSlide = nextSlide.next();
    }
    
    next = nextSlide.attr("src");

    $("#slide").attr("src", next).fadeIn(1000);
        }
    );
};
var start = setInterval(runSlideShow, 5000);
}); 