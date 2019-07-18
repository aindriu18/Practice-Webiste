
/* Slick is a library that enables a carousel effect for images.
In this instance, it is used on the portfolio page to display 
some of my tests and assignments I have completed*/ 


/* Adaptive height allows the carousel to adapt to the images height.
the arrows enable the user to go back and forward through the images displayed.
The dots allow the user to see how many images there are and what image they are on.
The draggable feature allows user swipe across with their mouse or finger.
Mobile first gives functionality for mobile phones. */


$(document).ready(function(){
    $('.pseudo').slick({
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        draggable: true,
        mobileFirst: true,
        
        
    });
  });


  $(document).ready(function(){
    $('.c-sharp').slick({
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        draggable: true,
        mobileFirst: true,
        
        
    });
  });

  $(document).ready(function(){
    $('.sql').slick({
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        draggable: true,
        mobileFirst: true,
        
        
    });
  });