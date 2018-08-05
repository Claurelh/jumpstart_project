var Jumpstart = {};


// This is the jQuery for the carousel
$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollDown = 0 // aka variable "x" this variable tells how far the user will scroll down
  $(window).scroll(function(){
    var scrollLimit = $(this).scrollTop(); //aka variable "y", the .scroll() event handler selects the window
    if (scrollLimit - scrollDown > 50){ //if y - x is greater than 50
      var stopScroll = $('.navbar').css('height'); //stores the height of the navbar
      $('.navbar').animate({top: '-' + stopScroll}, 150);
      scrollDown = scrollLimit; //so there is a record of how far the user scrolled last time they finished scrolling
    } else if (scrollDown - scrollLimit > 50) { // this if x - y is greater than 50 the navbar will be 0px
      $('.navbar').animate({top: '0px'}, 150);
      scrollDown = scrollLimit;
      }
    });
  });
// jQuery end
