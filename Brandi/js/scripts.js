var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el){
   el.style.opacity = 1;
   var interhellopreloader = setInterval(function(){
      el.style.opacity = el.style.opacity - 0.05;
      if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};
$(document).ready(function(){
   $(window).scroll(function(){
         if ($(window).scrollTop() > 300) {
            $('nav').addClass('scroll');
            $('nav ul a').addClass('scroll2');
         }
         else {
            $('nav').removeClass('scroll');
            $('nav ul a').removeClass('scroll2');
         }
   });
   $('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    responsive:{
       0:{
            items:1
        },
        670:{
            items:2
        },
        950:{
            items:3
        },
        1170:{
            items:4
        }
    }
   });
   // skroll
   var $page = $('html, body');
      $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 400);
    return false;
      });
   //popup
   $('.photography_item').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '50%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});
   
   // filter
   $("#branding").click(function(){
      $("#branding").addClass("activ");
      $("#all").removeClass("activ");
      $("#web").removeClass("activ");
      $("#photo").removeClass("activ");
      $("#logo").removeClass("activ");
      $(".web").hide();
      $(".logo").hide();
      $(".photo").hide();
      $(".branding").show();
   });
   $("#web").click(function(){
      $("#branding").removeClass("activ");
      $("#all").removeClass("activ");
      $("#web").addClass("activ");
      $("#photo").removeClass("activ");
      $("#logo").removeClass("activ");
      $(".branding").hide();
      $(".logo").hide();
      $(".photo").hide();
      $(".web").show();
   });
   $("#logo").click(function(){
      $("#branding").removeClass("activ");
      $("#all").removeClass("activ");
      $("#web").removeClass("activ");
      $("#photo").removeClass("activ");
      $("#logo").addClass("activ");
      $(".branding").hide();
      $(".web").hide();
      $(".photo").hide();
      $(".logo").show();
   });
   $("#photo").click(function(){
      $("#branding").removeClass("activ");
      $("#all").removeClass("activ");
      $("#web").removeClass("activ");
      $("#photo").addClass("activ");
      $("#logo").removeClass("activ");
      $(".branding").hide();
      $(".web").hide();
      $(".logo").hide();
      $(".photo").show();
   });
   $("#all").click(function(){
      $("#branding").removeClass("activ");
      $("#all").addClass("activ");
      $("#web").removeClass("activ");
      $("#photo").removeClass("activ");
      $("#logo").removeClass("activ");
      $(".branding").show();
      $(".web").show();
      $(".logo").show();
      $(".photo").show();
   });
});
/*var h_hght = 10; // высота шапки
      var h_mrg = 10;    // отступ когда шапка уже не видна
      $(function(){
      var elem = $('#top_nav');
      var top = $(this).scrollTop();
      if(top > h_hght){
        elem.css('top', h_mrg);
      }           
      $(window).scroll(function(){
        top = $(this).scrollTop();
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
      });
      });
 */
