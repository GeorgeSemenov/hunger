$(document).ready(function(){
  var $window = $(window);
  $window.scroll(function () {
    if ($window.scrollTop()>=($window.height()-100)){
      $(".navigation").addClass('navigation_desktop-theme_dark navigation_desktop-theme_small-logo');
    }
    else{
      $(".navigation").removeClass('navigation_desktop-theme_dark navigation_desktop-theme_small-logo');
    }
  })
})