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
  	    992:{
  	        items:2
  	    },
  			1200:{
  	        items:3
  	    }
  	}
	});
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
        $('.top_logo img').css("display", "none");
			  $('.top_logo').removeClass("scroll_icon");
				$('.top_logo i').css("display", "inline-block");
    }
    else {
        $('nav').removeClass('scroll');
			  $('.top_logo').addClass("scroll_icon");
        $('.top_logo img').css("display", "inline-block");
			  $('.top_logo i').css("display", "none");
    }
	});
}); 