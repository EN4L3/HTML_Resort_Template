// JavaScript Document

window.sr = ScrollReveal();

sr.reveal('.navbar', {
	duration: 3000, 
	origin: 'top'
});
sr.reveal('.btn', {
	duration: 4000,
	delay: 2000, 
	origin: 'bottom'
});
sr.reveal('.left', {
	duration: 5000, 
	origin: 'left'
});
sr.reveal('.right', {
	duration: 6000, 
	origin: 'right'
});

$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });