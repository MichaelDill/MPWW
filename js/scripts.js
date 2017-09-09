(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	

    
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
						// set distance user needs to scroll before we fadeIn navbar
			var navHt = $('.navbar').height();
			var mgHt = $('.quote-border').css('margin-top');
			
			if ($(this).scrollTop() > $('.header').height()) {
				$('.navbar-cont').addClass("fixed-top");
				$('.quote-border').css('margin-top', mgHt + navHt);
			} else {
				$('.navbar-cont').removeClass("fixed-top");
				$('.quote-border').css('margin-top', mgHt - navHt);
			}
		});

	
	});

});
  }(jQuery));