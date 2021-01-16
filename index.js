

$(document).scroll( function(evt) {
    var currentTop = $(this).scrollTop();
    if(currentTop!==0) {
        //prevTop = currentTop;
        console.log("I scrolled vertically.");
        $(".hide-on-scroll").addClass("hideall");
    }
    if(currentTop===0){
      $(".hide-on-scroll").removeClass("hideall");
    }
});
