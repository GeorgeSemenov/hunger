// import {SwiperJSBreackpoints} from '../../JS-components/SwiperJSbreakpoints.js';
// $(document).ready(function(){
//   SwiperJSBreackpoints();
// });
import Swiper from '../../vendor/swiperJS/swiper-bundle.js';
$(document).ready(function(){
  swiper = new Swiper('.picture-line', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".picture-line__arrow_right",
      prevEl: ".picture-line__arrow_left",
    },
    breakpoints:{
      510:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1100:{
        slidesPerView: 3,
        spaceBetween: 0,
      }
    }
  });
});

  