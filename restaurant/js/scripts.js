$(document).ready(function(){
   $('#go').on("click",function(r){
      r.preventDefault();
      $('#Reserv').click();
   });  
    $('#see_the_menu').on("click",function(r){
      r.preventDefault();
      $('#Men').click();
   }); 
   $("#menu").on("click","a", function (event) {
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
   });
   $('#spesial_greek_salad').click( function(event){ 
		event.preventDefault();
		$('#overlay_greek_salad').fadeIn(400, 
		 	function(){ 
				$('#popup_greek_salad') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#greek_salad_close, #overlay_greek_salad').click( function(){ 
		$('#popup_greek_salad')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay_greek_salad').fadeOut(400);
				}
			);
	});
   $('#spesial_pastitsio').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#popup_spesial_pastitsio') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#popup_close, #overlay').click( function(){ 
		$('#popup_spesial_pastitsio')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});
});
