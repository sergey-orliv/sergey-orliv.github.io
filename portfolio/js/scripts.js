$(document).ready(function($) {
	new WOW().init();
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
   $page.animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 400);
   return false;
  });
	$('#velo').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#popup_velo') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#popup_close, #overlay').click( function(){ 
		$('#popup_velo')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});
});

