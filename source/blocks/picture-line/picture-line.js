import Swiper from '../../vendor/swiperJS/swiper-bundle.js';
$(document).ready(function(){
  var swiper = new Swiper('.picture-line', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints:{
      510:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1440:{
        slidesPerView: 4,
        spaceBetween: 0,
      }
    }
  });
})
