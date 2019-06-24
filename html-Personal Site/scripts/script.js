$(function() {

    $(".hello").mouseenter(function(){

        $(".hello").animate({fontSize:'50px'}, "fast");
        $(".hello").animate({fontSize: '30px'},"slow");

    });

    $(document).ready(function() {
      function topCloudLeft() {
          $(".top-cloud").animate({left: "+=500"}, 20000, "swing", topCloudRight);
      }
      function topCloudRight() {
          $(".top-cloud").animate({left: "-=500"}, 20000, "swing", topCloudLeft);
      }
      topCloudRight();
    });

    $(document).ready(function() {
        function bottomCloudLeft() {
          $(".bottom-cloud").animate({left: "+=300"}, 20000, "swing", bottomCloudRight);
      }
      function bottomCloudRight() {
          $(".bottom-cloud").animate({left: "-=300"}, 20000, "swing", bottomCloudLeft);
      }
      bottomCloudRight();
    });
    
     

});

/* gives the user the opportunity to toggle between the navbar with (.icon) */
function menu() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
