$(document).ready(function() {
    var isOpen = false;
    $(".sidebar").click(function() {
      if (isOpen) {
        $(".sidebar").animate({width: "200px"});
        $(".content").animate({marginLeft: "200px"});
        $(".perfil").animate({display:"none"});
      } else {
        $(".sidebar").animate({width: "50px"});
        $(".content").animate({marginLeft: "50px"});
        $(".perfil").animate({display:"flex"});
      }
      isOpen = !isOpen;
    });
  });