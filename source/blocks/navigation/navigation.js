$(document).ready(function(){
  var $window = $(window);
  $window.scroll(function () {
    console.log($window.scrollTop()+" 100vh = "+($window.height()-100));
    if ($window.scrollTop()>=($window.height()-100)){
      $(".navigation").css({"background":"#000000"});
    }
    else{
      $(".navigation").css({"background":"transparent"});
    }
  })
})