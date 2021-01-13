import Swiper from '../vendor/swiperJS/swiper-bundle.js';
function SwiperJSBreackpoints(brObj){
  console.log("i'm running");
  if (boObj == undefined)
    {boObj = {};}

  if (boObj.desWidth == undefined)
    {boObj.desWidth = '(min-width:1440px)';}
  if (boObj.carouselName == undefined)
    {boObj.carouselName = '.picture-line';}
  if (boObj.spvMobile == undefined)
    {boObj.spvMobile = 1;}
  if (boObj.sbMobile == undefined)
    {boObj.sbMobile = 0;}
  if (boObj.spvTablet == undefined)
    {boObj.spvTablet = 2;}
  if (boObj.sbTablet == undefined)
    {boObj.sbTablet = 10;}
  if (boObj.spvDesktop == undefined)
    {boObj.spvDesktop = 3;}
  if (boObj.sbDesktop == undefined)
    {boObj.sbDesktop = 0;}

  var breakpoint = window.matchMedia(modifier.desWidth);
  var swiper;

  var breakpointChecker = function(){
    if (breakpoint.matches === true) {
      if (swiper !== undefined) {
        return swiper.destroy();
      }
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  var enableSwiper = function () {
      swiper = new Swiper(boObj.carouselName, {
      slidesPerView: boObj.spvMobile,
      spaceBetween: boObj.sbMobile,
      breakpoints:{
        510:{
          slidesPerView: boObj.spvTablet,
          spaceBetween: boObj.sbTablet,
        },
        1100:{
          slidesPerView: boObj.spvDesktop,
          spaceBetween: boObj.sbDesktop,
        }
      }
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

export default  SwiperJSBreackpoints; // список экспортируемых переменных