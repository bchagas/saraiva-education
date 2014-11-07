$(document).ready(function(){
  var trigger = $(".question > a");

  trigger.on("click", function(event){
    event.preventDefault();
    var answer = $(this).next("p");

    answer.animate({
      height: "toggle",
      "margin-top" : "20px",
      "padding-top" : "20px"
    }, function(){
      if(!$(this).is(":visible")){
        $(this).css({ "margin-top" : "0", "padding-top" : "0" });
      }
    });
  });
});
