$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
        nav : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 400);
    return false;
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('nav').addClass('scroll');
       $('.top_logo').addClass('scroll2');
    }
    else {
        $('nav').removeClass('scroll');
       $('.top_logo').removeClass('scroll2');
    }
});
}); 