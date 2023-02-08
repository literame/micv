$(document).ready(function() {
    var isOpen = false;
    $(".content").animate({marginLeft: "220px"});
    $(".sidebar").click(function() {
      if (isOpen) {
        $(".sidebar").animate({width: "220px"});
        $(".content").animate({marginLeft: "220px"});
        $(".perfil .foto img").animate({width: "150px",height: "150px"});
        $(".opt").animate({display: "block",fontsize:"22px"});

      } else {
        $(".sidebar").animate({width: "80px"});
        $(".content").animate({marginLeft: "80px"});
        $(".perfil .foto img").animate({width: "50px",height: "50px"});
        $(".opt").animate({display: "none",fontsize:"10px"});

      }
      isOpen = !isOpen;
    });
  });