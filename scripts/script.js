jQuery(document).ready(function($) {

  /* Initialises the cloud animation effects and moves both the bottom
  and top clouds from left to right */

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


/* Parsley is used to verify the legitmacy of the text inputs in the contact page.
If something that's not an email is entered into the email box it will produce an error for example.
Or, if you enter numbers into the first and last name it will not allow you submit the details.*/

  $("#contact-form > input[type='submit']").click(function(event) {

      $("#contact-form").parsley();

  });


  /* This gives the functionality of the "top" on each page. Once clicked, it brings users
  back to the top of each page*/
  $("#scrollToTop").click(function(event) {
    $("html, body").animate({
      scrollTop: (0)
    }, 1000);
  });

});  // End of jQuery Ready Document
