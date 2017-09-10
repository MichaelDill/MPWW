(function ($) {
  $(document).ready(function(){
    
	$('.carousel').carousel({
  interval: 6000
})
	

    
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

	
	})

//contact form
    document.getElementById("contact-submit").onclick = function callRoute() {
        event.preventDefault();
            sendEmail(
                document.getElementById("first_name").value,
                document.getElementById("last_name").value,
                document.getElementById("email").value,
                document.getElementById("telephone").value,
                document.getElementById("comments").value,
                )
    }

            function sendEmail(first_name, last_name, email, telephone, comments){

            var xmlhttp = new XMLHttpRequest();
            
            xmlhttp.onreadystatechange = function () {
                 if (this.readyState == 4 && this.status == 200) {
                     response = this.responseText;
                     console.log(response);
                    }
                }

            xmlhttp.open("GET", "email_form2.php" + 
            "?name=" + first_name + " " + last_name +
            "&email=" + email +
            "&tel=" + telephone +
            "&comments=" + comments,
            true);
            xmlhttp.send();

            }
            
        
     
});
  }(jQuery));