$(document).ready(function(){
  $(document).ready(function() {
    $(".menu__tab-container").click(function() {
      var listsParent = $(this).parent().siblings('.column-right');
      listsParent.children(".menu__list").hide();
      var BlockTrigger = $(this).data("trigger");
      listsParent.children("#menu__list-" + BlockTrigger).show();
      $(".serv-btn").removeClass("active"); //заберет актив у всех ссылок
      $(this).addClass("active"); //присвоит нужной
    });
  });

})
