$(document).ready(function(){
  console.log('hello');
  $('.carousel').slick({
    slidesToShow: 1,
    dots:true,
    centerMode: true,
    centerPadding: '0px',
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    adaptiveHeight: true
  });
  $('.slick-arrow').css({'display': 'none'});
})
