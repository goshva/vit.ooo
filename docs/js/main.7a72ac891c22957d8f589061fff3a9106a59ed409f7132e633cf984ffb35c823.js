(()=>{$(".hiro-nav-popup-toggle").click(function(){$("body").toggleClass("hiro-nav-popup-modal-open")});$('.hiro-main-nav .nav-link[href^="#"]:not([href="#!"])').click(function(){$("body").removeClass("hiro-nav-popup-modal-open")});$('.hiro-pro-nav .pro-link[href^="#"]:not([href="#!"])').click(function(){$("body").removeClass("hiro-nav-popup-modal-open")});$myCarousel=$(".carousel");function t(n){var o="webkitAnimationEnd animationend";n.forEach(function(a){var i=a.dataset.animation;a.classList.add(i),a.addEventListener(o,function(){a.classList.remove(i)},{once:!0})})}var e=$myCarousel.find(".carousel-item:first").find('[data-animation ^= "animated"]');t(e);$myCarousel.on("slide.bs.carousel",function(n){console.log("hi!");var o=$(n.relatedTarget);console.log(n.relatedTarget).find("[data-animation ^= 'animated']"),t(o)});})();
