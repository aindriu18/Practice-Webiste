jQuery(document).ready(function($) {

  // Initialize the cloud animation effects
  topCloudRight();
  bottomCloudRight();

  function topCloudLeft() {
    $(".top-cloud").animate({
      left: "+=500"
    }, 20000, "swing", topCloudRight);
  }

  function topCloudRight() {
    $(".top-cloud").animate({
      left: "-=500"
    }, 20000, "swing", topCloudLeft);
  }

  function bottomCloudLeft() {
    $(".bottom-cloud").animate({
      left: "+=300"
    }, 20000, "swing", bottomCloudRight);
  }

  function bottomCloudRight() {
    $(".bottom-cloud").animate({
      left: "-=300"
    }, 20000, "swing", bottomCloudLeft);
  }

  /* facilitates responsive viewing for the navbar on mobile devices */
  $("#myNavbar").click(function(event) {

    menu();

  });

  function menu() {

    var x = document.getElementById("myNavbar");

    if (x.className == "navbar") {

      x.className += " responsive";

    } else {

      x.className = "navbar";

    }

  }

  $("#contact-form > input[type='submit']").click(function(event) {

      $("#contact-form").parsley();

  });

});  // End of jQuery Ready Document
