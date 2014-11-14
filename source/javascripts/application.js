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
    var menu = $(this).next("ul");
    menu.toggleClass("open");
  });

  $("body, html").on("click", function(event) {
    var solutionsLink = $(event.target).hasClass("solutions");

    if(!solutionsLink) {
      $("ul").removeClass("open");
    }
  });
});

