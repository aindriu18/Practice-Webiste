jQuery(document).ready(function ($) {

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
  $("#myNavbar").click(function (event) {

    menu();

  });

  // Facilitates in making the nav bar responsive
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

  $("#contact-form > input[type='submit']").click(function (event) {

    $("#contact-form").parsley();

  });


  /* This gives the functionality of the "top" on each page. Once clicked, it brings users
  back to the top of each page*/
  $("#scrollToTop").click(function (event) {
    $("html, body").animate({
      scrollTop: (0)
    }, 1000);
  });

}); // End of jQuery Ready Document


// checking if service worker API is enabled in the browser.
if ("serviceWorker" in navigator) {
  //An event listener that waits for the page to load completely.
  window.addEventListener("load", () => {
    navigator.serviceWorker
      // A promise of a register, then and catch - very similar to a method
      .register("sw_cached_site.js")
      .then(reg => console.log("SW Registered."))
      .catch(err => console.log(`SW Error: ${err}`));
  });
} else {
  console.log("Your browser does not support SW.");
}


// simple variable
var w;

// web worker starting to load
function startWorker() {
  if (typeof (Worker) !== "undefined") {
    if (typeof (w) == "undefined") {
      w = new Worker("worker.js");
    }
    w.onmessage = function (event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
  }
}
// stops the worker from counting
function stopWorker() {
  w.terminate();
  w = undefined;
}