
$('.hiro-nav-popup-toggle').click(function(){
    $('body').toggleClass('hiro-nav-popup-modal-open');
});


$('.hiro-main-nav .nav-link[href^="#"]:not([href="#!"])').click(function(){
    $('body').removeClass('hiro-nav-popup-modal-open');
});

$('.hiro-pro-nav .pro-link[href^="#"]:not([href="#!"])').click(function(){
  $('body').removeClass('hiro-nav-popup-modal-open');
});

$myCarousel = $('.carousel');

function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.forEach(function (elem) {
      var animationType = elem.dataset.animation;
      elem.classList.add(animationType);
      elem.addEventListener(animEndEv, function () {
          elem.classList.remove(animationType);
      }, {once: true});
  });
}
  
  // Select the elements to be animated
  // in the first slide on page load
  var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
    .find('[data-animation ^= "animated"]');
  
  // Apply the animation using the doAnimations()function
  doAnimations($firstAnimatingElems);
  
  // Attach the doAnimations() function to the
  // carousel's slide.bs.carousel event
  $myCarousel.on('slide.bs.carousel', function (e) {
    console.log('hi!')
    // Select the elements to be animated inside the active slide
    var $animatingElems = $(e.relatedTarget)
    console.log(e.relatedTarget)
      .find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });
