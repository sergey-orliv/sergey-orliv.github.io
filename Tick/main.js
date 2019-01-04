$(document).ready(function(){
   var value=0;
   $("main div").click(function(e){
      e.preventDefault();
      if($(this).hasClass("wtf")){
      }else if (value%2==0){
         $(this).addClass('ix wtf');
         value++;
      }else if (value%2!==0){
         $(this).addClass('nol wtf');
         value++;
      };
   });
   $("main div").click(function(r){
      if($(".b2").hasClass("nol")){
         if($(".a2").hasClass("nol") && $(".c2").hasClass("nol")){
            $(".b2, .a2, .c2").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".b1").hasClass("nol") && $(".b3").hasClass("nol")){
            $(".b2, .b1, .b3").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".a1").hasClass("nol") && $(".c3").hasClass("nol")){
            $(".b2, .a1, .c3").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".a3").hasClass("nol") && $(".c1").hasClass("nol")){
            $(".b2, .a3, .c1").addClass('win');
            $("main>div").addClass('wtf');
         };
      }else if($(".a1").hasClass("nol")){
         if($(".a2").hasClass("nol") && $(".a3").hasClass("nol")){
            $(".a1, .a2, .a3").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".b1").hasClass("nol") && $(".c1").hasClass("nol")){
            $(".a1, .c1, .b1").addClass('win');
            $("main>div").addClass('wtf');
         };
      }else if($(".c3").hasClass("nol")){
         if($(".b3").hasClass("nol") && $(".a3").hasClass("nol")){
            $(".c3, .b3, .a3").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".c1").hasClass("nol") && $(".c2").hasClass("nol")){
            $(".c3, .c1, .c2").addClass('win');
            $("main>div").addClass('wtf');
         };
      };
   });
   $("main div").click(function(){
      if($(".b2").hasClass("ix")){
         if($(".a2").hasClass("ix") && $(".c2").hasClass("ix")){
            $(".b2, .a2, .c2").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".b1").hasClass("ix") && $(".b3").hasClass("ix")){
            $(".b2, .b1, .b3").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".a1").hasClass("ix") && $(".c3").hasClass("ix")){
            $(".b2, .a1, .c3").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".a3").hasClass("ix") && $(".c1").hasClass("ix")){
            $(".b2, .a3, .c1").addClass('win');
            $("main>div").addClass('wtf');
         };
      }else if($(".a1").hasClass("ix")){
         if($(".a2").hasClass("ix") && $(".a3").hasClass("ix")){
            $(".a1, .a2, .a3").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".b1").hasClass("ix") && $(".c1").hasClass("ix")){
            $(".a1, .c1, .b1").addClass('win');
            $("main>div").addClass('wtf');
         };
      }else if($(".c3").hasClass("ix")){
         if($(".b3").hasClass("ix") && $(".a3").hasClass("ix")){
            $(".c3, .b3, .a3").addClass('win');
            $("main>div").addClass('wtf');
         }else if($(".c1").hasClass("ix") && $(".c2").hasClass("ix")){
            $(".c3, .c1, .c2").addClass('win');
            $("main>div").addClass('wtf');
         };
      };
   });
   $("#button").click(function(){
      $(".a1, .a2, .a3, .b1, .b2, .b3, .c1, .c2, .c3").removeClass("ix nol wtf win");
      $("main div").on('click');
      value=0;
   });
   $("#button").mouseover(function(){
      $(".button_restart").addClass('hover');
   });
   $("#button").mouseout(function(){
      $(".button_restart").removeClass('hover');
   });
});
