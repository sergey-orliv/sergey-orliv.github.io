$(document).ready(function(){
   $(window).on('load', function() {
    setTimeout(function() {
      $('.preloader').fadeOut('slow', function() {});
   }, 1000);
   });
   $("#back-top").hide();
   $(function () {
       $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
               $('#back-top').fadeIn();
           } else {
               $('#back-top').fadeOut();
           }
       });
       $('#back-top a').click(function () {
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
   });
});

