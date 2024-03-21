(() => {
  // <stdin>
  $(".hiro-nav-popup-toggle").click(function() {
    $("body").toggleClass("hiro-nav-popup-modal-open");
  });
  $('.hiro-main-nav .nav-link[href^="#"]:not([href="#!"])').click(function() {
    $("body").removeClass("hiro-nav-popup-modal-open");
  });
  $('.hiro-pro-nav .pro-link[href^="#"]:not([href="#!"])').click(function() {
    $("body").removeClass("hiro-nav-popup-modal-open");
  });
  $myCarousel = $(".carousel");
  function doAnimations(elems) {
    var animEndEv = "webkitAnimationEnd animationend";
    elems.each(function() {
      var $this = $(this), $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }
  var $firstAnimatingElems = $myCarousel.find(".carousel-item:first").find('[data-animation ^= "animated"]');
  doAnimations($firstAnimatingElems);
  $myCarousel.on("slide.bs.carousel", function(e) {
    console.log("hi!");
    var $animatingElems = $(e.relatedTarget);
    console.log(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });
})();
