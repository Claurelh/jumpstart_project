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

  $(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".sidebar em").text("Up"); /* optional for demo */
        $(".navbar").show();
    } else {
        $(".sidebar em").text("Down");
        $(".navbar").hide();
    }
    this.previousTop = currentTop;
});
});
// jQuery end
