import Swiper from '../../vendor/swiperJS/swiper-bundle.js';
$(document).ready(function(){
  var breakpoint = window.matchMedia('(min-width:1440px)');
  var swiper;

  var breakpointChecker = function(){
    if (breakpoint.matches === true) {
      console.log(`more than 1440 \nswiper = ${swiper}\n(swiper !== undefined) =${swiper !== undefined}`);
      if (swiper !== undefined) {
        console.log(`more than 1440 \nbefore destroing\nswiper = ${swiper}`);
        console.log(`after destroing\nswiper = ${swiper}`);
        return swiper.destroy();
      }
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  var enableSwiper = function () {
      swiper = new Swiper('.picture-line', {
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints:{
        510:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1440:{
          slidesPerView: 2,
          spaceBetween: 0,
        }
      }
    });
    console.log(`less than 1440 \nswiper = ${swiper}`);
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})
