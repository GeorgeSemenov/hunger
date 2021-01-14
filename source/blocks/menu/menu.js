$(document).ready(function(){
  $(".menu__tab-container").click(function() {
    var listsParent = $(this).parent().siblings('.menu__lists-container');
    var BlockTrigger = $(this).data("trigger");
    
    listsParent.children(".menu__list").removeClass("menu__list_active");
    listsParent.children(`.menu__list[data-trigger= ${BlockTrigger} ]`).addClass("menu__list_active");

    $(this).siblings(".menu__tab-container").removeClass("menu__tab-container_active"); //заберет актив у всех ссылок
    $(this).addClass("menu__tab-container_active"); //присвоит нужной
  });
})
