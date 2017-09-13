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

            fName =  document.getElementById("first_name").value;
            lName = document.getElementById("last_name").value;
            email = document.getElementById("email").value;
            telephone = document.getElementById("telephone").value;
            comments = document.getElementById("comments").value;

            form = document.getElementById("contactform");

            if (formCheck(fName, lName, email, telephone) == true) {

                sendEmail(fName, lName, email, telephone, comments);
            }
    }
            //form validation
            function formCheck(fName, lName, email, telephone) {
                fieldCount = arguments.length;
                valid = 0;

                if (fName != "") {
                    valid++
                    $("#first_name").removeClass('is-invalid');
                    $('.fNameVal').css('display', 'none');
                } else {
                    $("#first_name").addClass('is-invalid');
                    $('.fNameVal').css('display', 'block');
                }
                
                if (lName != "") {
                    valid++
                    $("#last_name").removeClass('is-invalid');
                    $('.lNameVal').css('display', 'none');
                } else {
                    $("#last_name").addClass('is-invalid');
                    $('.lNameVal').css('display', 'block');
                }

                if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                    valid++
                    $("#email").removeClass('is-invalid');
                    $('.emailVal').css('display', 'none');
                } else {
                    $("#email").addClass('is-invalid');
                    $('.emailVal').css('display', 'block');
                }

                if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(telephone)) {
                    valid++
                    $("#telephone").removeClass('is-invalid');
                    $('.telVal').css('display', 'none');
                } else {
                    $("#telephone").addClass('is-invalid');
                    $('.telVal').css('display', 'block');
                }

                if(fieldCount == valid) {
                    return true
                } else {
                    return false
                }

            }

            function sendEmail(first_name, last_name, email, telephone, comments){

            var xmlhttp = new XMLHttpRequest();
            
            xmlhttp.onreadystatechange = function () {
                 if (this.readyState == 4 && this.status == 200) {
                     response = this.responseText;
                     console.log(response);
                     showConfModal()
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
            
            function showConfModal() {
                $('#confModal').modal()
            }
        
     
});
  }(jQuery));