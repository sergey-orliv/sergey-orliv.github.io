$(document).ready(function($) {
   $(window).on('load', function() {
    setTimeout(function() {
      $('.preloader').fadeOut('slow', function() {});
   }, 1000);
   });
   var $page = $('html, body');
   $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
   });
   new WOW().init();
});

