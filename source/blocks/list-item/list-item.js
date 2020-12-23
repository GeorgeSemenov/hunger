$(document).ready(function(){
  let circleWidth = 5;
  let priceWidth = $(".list-item__price").css("width");
  let dishNameWidth = $(".list-item__dish-name").css("width");
  let containerWidth = $(".list-item__name-and-price").css("width");
  let freeSpaceWidth = containerWidth.slice(0,(containerWidth.length - 2)) - priceWidth.slice(0,(priceWidth.length - 2)) - dishNameWidth.slice(0,(dishNameWidth.length - 2));

  $(".list-item__dots").css({'width': (freeSpaceWidth + 'px')});

  console.log(`priceWidth = ${priceWidth} /ndishNameWidth = ${dishNameWidth}/ncontainerWidth = ${containerWidth}`);

  let howManyTimes = Math.floor(freeSpaceWidth/(circleWidth*2));
  console.log(howManyTimes);
  //alert($(".dots").css('width'));
  //for (let i = 0; i < 3; i++)
  for (let i = 0; i< howManyTimes; i++){
    $(".list-item__dots").append('<div class= "list-item__dot"></div>');
  }
  //alert(howManyTimes);
})
