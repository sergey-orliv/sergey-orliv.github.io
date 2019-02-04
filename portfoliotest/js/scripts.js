$("#close").click(function(e){
  e.preventDefault;
  $("aside").animate({"opacity":"0"},1000, function(){
    $("aside").animate({"height":"0"},0400);
  });
})
$(document).ready(function(){
    function func(){
      $("#body").addClass("body_hidden");
    };
    //$("#main_preloader").addClass("done");
    $("#hello path").addClass("amimation_hello");
    $("#i-am path").addClass("amimation_i-am");
    setTimeout(func, 0700);
});
document.body.onload=function(){
  setTimeout(function(){
    var preloader = document.getElementById("main_preloader");
    if( !preloader.classList.contains("done")){
      preloader.classList.add("done");
    }
  },0600);
}

$("#my_foto").click(function(e){
  e.preventDefault;
  $("#my_big_foto").css("display","block");
  $("#big_foto").animate({"opacity":"1"},0600, function(){
    $("#close_foto").animate({"opacity":"1"},0600);
  });
});
$("#close_foto").click(function(e){
  e.preventDefault;
  $("#close_foto").css("opacity","0");
  $("#big_foto").animate({"opacity":"0"},1000, function(){
    $("#my_big_foto").css("display","none");
  });
});
$("#css").click(function(e){
  e.preventDefault;
    if($("#sub-css").hasClass("sub-menu-see")){
      $("#sub-css").removeClass("sub-menu-see");
    }
    else
      $("#sub-css").addClass("sub-menu-see");
});
$("#js").click(function(e){
  e.preventDefault;
    if($("#sub-js").hasClass("sub-menu-see")){
      $("#sub-js").removeClass("sub-menu-see");
    }
    else
      $("#sub-js").addClass("sub-menu-see");
});
$("#jq").click(function(e){
  e.preventDefault;
    if($("#sub-jq").hasClass("sub-menu-see")){
      $("#sub-jq").removeClass("sub-menu-see");
    }
    else
      $("#sub-jq").addClass("sub-menu-see");
});