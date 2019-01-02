$(document).ready(function(){
	$('body').append('<a href="#" id="go-top" title="Вверх"><i class="fas fa-angle-up"></a>');
	$(function() {
   $.fn.scrollToTop = function() {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
      var scrollDiv = $(this);
      $(window).scroll(function() {
         if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
         else $(scrollDiv).fadeIn("slow")
      });
      $(this).click(function() {
         $("html, body").animate({scrollTop: 0}, "slow")
      })
      }
   });
   $(function() {
      $("#go-top").scrollToTop();
   });
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
   });
   $("#apps_more").click(function(e){
      e.preventDefault();
      $("#apps_more").slideUp();
      $(".apps_see_more").css('display', 'block')
   });
   $("#news_button").click(function(e){
      e.preventDefault();
      $("#news_button").slideUp();
      $(".news_see_more").css('display', 'block')
   });
   $(".nav_activation").click(function(e){
      e.preventDefault();
      $(".nav_activation").css('color', '#ed1c24');
      $(".nav_registration").css('color', '#787878');
      $(".nav_forgot").css('color', '#787878');
      $(".popup_activation").css('display', 'block');
      $(".popup_registration").css('display', 'none');
      $(".popup_forgot").css('display', 'none');
   });
   $(".nav_registration").click(function(e){
      e.preventDefault();
      $(".nav_activation").css('color', '#787878');
      $(".nav_registration").css('color', '#ed1c24');
      $(".nav_forgot").css('color', '#787878');
      $(".popup_activation").css('display', 'none');
      $(".popup_registration").css('display', 'block');
      $(".popup_forgot").css('display', 'none');
   });
   $(".nav_forgot").click(function(e){
      e.preventDefault();
      $(".nav_activation").css('color', '#787878');
      $(".nav_registration").css('color', '#787878');
      $(".nav_forgot").css('color', '#ed1c24');
      $(".popup_activation").css('display', 'none');
      $(".popup_registration").css('display', 'none');
      $(".popup_forgot").css('display', 'block');
   });
   $(".popup_button").click(function(e){
      e.preventDefault();
      $(".bg_popup").slideUp();
      $(".user_out").css('display', 'inline-block');
      $(".user_img").css('display', 'inline-block');
      $(".user_money").css('display', 'inline-block');
      $(".user_come").css('display', 'none');
      $(".user_reg").css('display', 'none');
   });
   $(".user_out").click(function(e){
      e.preventDefault();
      $(".user_out").css('display', 'none');
      $(".user_img").css('display', 'none');
      $(".user_money").css('display', 'none');
      $(".user_come").css('display', 'inline-block');
      $(".user_reg").css('display', 'inline-block');
   });
	$(".user_come").click(function(e){
      e.preventDefault();
      $(".bg_popup").slideDown();
		$(".nav_activation").css('color', '#ed1c24');
      $(".nav_registration").css('color', '#787878');
      $(".nav_forgot").css('color', '#787878');
      $(".popup_activation").css('display', 'block');
      $(".popup_registration").css('display', 'none');
      $(".popup_forgot").css('display', 'none');
   });
	$(".user_reg").click(function(e){
      e.preventDefault();
      $(".bg_popup").slideDown();
		$(".nav_activation").css('color', '#787878');
      $(".nav_registration").css('color', '#ed1c24');
      $(".nav_forgot").css('color', '#787878');
      $(".popup_activation").css('display', 'none');
      $(".popup_registration").css('display', 'block');
      $(".popup_forgot").css('display', 'none');
   });
	$(".questions_main div").click(function(e){
      e.preventDefault();
      $(this).find('p').css('display','block');
   });
	
	$("#shop_desc").click(function(e){
      e.preventDefault();
      $("#shop_desc").css('color', '#ed1c24');
      $("#shop_chit").css('color', '#787878');
      $("#shop_promo").css('color', '#787878');
		$("#shop_delivery").css('color', '#787878');
      $("#desc").css('display', 'block');
      $("#chit").css('display', 'none');
      $("#promo").css('display', 'none');
		$("#delivery").css('display', 'none');
   });
	$("#shop_chit").click(function(e){
      e.preventDefault();
      $("#shop_desc").css('color', '#787878');
      $("#shop_chit").css('color', '#ed1c24');
      $("#shop_promo").css('color', '#787878');
		$("#shop_delivery").css('color', '#787878');
      $("#desc").css('display', 'none');
      $("#chit").css('display', 'block');
      $("#promo").css('display', 'none');
		$("#delivery").css('display', 'none');
   });
	$("#shop_promo").click(function(e){
      e.preventDefault();
      $("#shop_desc").css('color', '#787878');
      $("#shop_chit").css('color', '#787878');
      $("#shop_promo").css('color', '#ed1c24');
		$("#shop_delivery").css('color', '#787878');
      $("#desc").css('display', 'none');
      $("#chit").css('display', 'none');
      $("#promo").css('display', 'block');
		$("#delivery").css('display', 'none');
   });
	$("#shop_delivery").click(function(e){
      e.preventDefault();
      $("#shop_desc").css('color', '#787878');
      $("#shop_chit").css('color', '#787878');
      $("#shop_promo").css('color', '#787878');
		$("#shop_delivery").css('color', '#ed1c24');
      $("#desc").css('display', 'none');
      $("#chit").css('display', 'none');
      $("#promo").css('display', 'none');
		$("#delivery").css('display', 'block');
   });
	
	
	$("#cab_profil").click(function(e){
      e.preventDefault();
      $("#cab_profil").css('color', '#ed1c24');
      $("#cab_friend").css('color', '#787878');
      $("#cab_helps").css('color', '#787878');
		$("#cab_return").css('color', '#787878');
      $("#cabinet_profil").css('display', 'block');
      $("#cabinet_friend").css('display', 'none');
      $("#cabinet_helps").css('display', 'none');
		$("#cabinet_return").css('display', 'none');
   });
	$("#cab_friend").click(function(e){
      e.preventDefault();
      $("#cab_profil").css('color', '#787878');
      $("#cab_friend").css('color', '#ed1c24');
      $("#cab_helps").css('color', '#787878');
		$("#cab_return").css('color', '#787878');
      $("#cabinet_profil").css('display', 'none');
      $("#cabinet_friend").css('display', 'block');
      $("#cabinet_helps").css('display', 'none');
		$("#cabinet_return").css('display', 'none');
   });
	$("#cab_helps").click(function(e){
      e.preventDefault();
      $("#cab_profil").css('color', '#787878');
      $("#cab_friend").css('color', '#787878');
      $("#cab_helps").css('color', '#ed1c24');
		$("#cab_return").css('color', '#787878');
      $("#cabinet_profil").css('display', 'none');
      $("#cabinet_friend").css('display', 'none');
      $("#cabinet_helps").css('display', 'block');
		$("#cabinet_return").css('display', 'none');
   });
	$("#cab_return").click(function(e){
      e.preventDefault();
      $("#cab_profil").css('color', '#787878');
      $("#cab_friend").css('color', '#787878');
      $("#cab_helps").css('color', '#787878');
		$("#cab_return").css('color', '#ed1c24');
      $("#cabinet_profil").css('display', 'none');
      $("#cabinet_friend").css('display', 'none');
      $("#cabinet_helps").css('display', 'none');
		$("#cabinet_return").css('display', 'block');
   });
	
});
