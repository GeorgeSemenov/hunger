$(document).ready(function(){
  var $window = $(window);
  $window.scroll(function () {
    if ($window.scrollTop()>=($window.height()-100)){
      $(".navigation").css({"background":"#000000"});
    }
    else{
      $(".navigation").css({"background":"transparent"});
    }
  })
})