(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	

    
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > $('.header').height()) {
				$('.navbar-cont').addClass("fixed-top");
			} else {
				$('.navbar-cont').removeClass("fixed-top");
			}
		});

	
	});

});
  }(jQuery));