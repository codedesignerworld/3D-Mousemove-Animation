<!-- Credits -->
<!-- Inspired by Dev Ed https://github.com/developedbyed/3d-card-effect & https://youtu.be/XK7T3mY1V-w -->


jQuery(document).ready(function ($) {
  //Items
  var $card = $(".card");
  var $container = $(".container");
  var $title = $(".title");
  var $bike = $(".bike img");
  var $purchase = $(".purchase");
  var $description = $(".info h3");

  //Moving Animation Event
  $container.on("mousemove", function (e) {
    let xAxis = (window.innerWidth / 2 - e.clientX) / 25;
    let yAxis = (window.innerHeight / 2 - e.clientY) / 25;
    $card.css("transform", `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
  });

  //Animate on Hover
  $container.hover(function () {
    $card.toggleClass("has-transform");
    $title.toggleClass("has-transform");
    $bike.toggleClass("has-transform");
    $purchase.toggleClass("has-transform");
    $description.toggleClass("has-transform");
  });

  //Pop Back on mouseleave
  $container.on("mouseleave", function () {
    $card.css("transform", `rotateY(0deg) rotateX(0deg)`);
  });
});
