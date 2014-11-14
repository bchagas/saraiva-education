$(document).ready(function(){
  $(".go-to-anchor").on("click", function(event) {
    event.preventDefault();
    var page = $("html, body");
    var target = $(this).data("target");

    page.animate({
      scrollTop: $(target).offset().top
    }, 500);
  });

  $(".menu .solutions").on("click", function(event) {
    event.preventDefault();
  });
});

