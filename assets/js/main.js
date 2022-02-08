// header on scroll background change
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 20) {
      $(".navbar").css("background-color", "#fff");
    } else {
      $(".navbar").css("background-color", "transparent");
    }
  });
});

// navbar collapse
$(function(){ 
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
  });
});
//owl-carousel
$(document).ready(function () {
  $(".client-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
});