var clickCount = 0

$(document).ready(function(){
  $("#loadMoreButton").click(function(){
    $("#morePosts").load("moreTravel.txt");
    clickCount = clickCount + 1;
    console.log(clickCount);
    if (clickCount >1) {
    $("#lastPosts").load("moreTravel2.txt");
    $("#loadMoreButton").hide();}
  });
});
