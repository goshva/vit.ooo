(()=>{$(".hiro-nav-popup-toggle").click(function(){$("body").toggleClass("hiro-nav-popup-modal-open")});$('.hiro-main-nav .nav-link[href^="#"]:not([href="#!"])').click(function(){$("body").removeClass("hiro-nav-popup-modal-open")});$('.hiro-pro-nav .pro-link[href^="#"]:not([href="#!"])').click(function(){$("body").removeClass("hiro-nav-popup-modal-open")});$myCarousel=$(".carousel");function e(n){var a="webkitAnimationEnd animationend";n.each(function(){var o=$(this),i=o.data("animation");o.addClass(i).one(a,function(){o.removeClass(i)})})}var t=$myCarousel.find(".carousel-item:first").find('[data-animation ^= "animated"]');e(t);$myCarousel.on("slide.bs.carousel",function(n){console.log("hi!");var a=$(n.relatedTarget);
console.log($(n.relatedTarget).find("[data-animation ^= 'animated']")),
e(a)
}
);})();
