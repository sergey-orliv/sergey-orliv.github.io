document.body.onload=function(){
  var preloader = document.getElementById("preloader");
  var loader = document.querySelector(".loader");
  setTimeout(function(){
    if(!loader.classList.contains("done")){
      loader.classList.add("done");
    }
  },0300);
  setTimeout(function(){
    if(!preloader.classList.contains("done")){
      preloader.classList.add("done");
    }
  },1000);
  setTimeout(function(){
    document.getElementById("check-contacts").checked = true;
  },3600);
  setTimeout(function(){
    document.getElementById("check-information").checked = true;
  },4300);
}
$(document).ready(function(){
    $("#hello path").addClass("amimation_hello");
    $("#i-am path").addClass("amimation_i-am");
    $("#close").click(function(e){
      e.preventDefault;
      $("aside").animate({"opacity":"0"},0400, function(){
      $("aside").animate({"height":"0", "margin-bottom":"0"},0300);  
      });
    });
  $("#my_foto").click(function(e){
    e.preventDefault;
    $("#my_big_foto").css("display","block");
    $("#big_foto").animate({"opacity":"1"},0600, function(){
    $("#close_foto").animate({"opacity":"1"},0600);
    });
  });
  $("#close_velo").click(function(e){
    e.preventDefault;
    $("#velo_more").animate({"opacity":"0"},0600, function(){
    $("#velo_more").css({"display":"none"});
    });
    return false;
  });
  $("#velo").click(function(e){
    e.preventDefault;
    $("#velo_more").css({"display":"flex"});
    $("#velo_more").animate({"opacity":"1"},0600, function(){
    $("#close_velo").animate({"opacity":"1"},1000);
    });
    return false;
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
