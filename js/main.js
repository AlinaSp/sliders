$('.slider-img').slick();

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    }
  })
});