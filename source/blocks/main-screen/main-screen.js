$(document).ready(function(){
  $(".main-screen__downward").click(function(){
    alert($(this).data('screen-to-go'));
    $("body,html").stop(true,false).animate({
      scrollTop:$("#" + $(this).data('screen-to-go')).offset().top
    },1000);
  })
})