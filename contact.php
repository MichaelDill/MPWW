<?php include('header.php') ?>


<div class="container-fluid"><!-- section1-->
        <div class="container">
            <div class="row">
                <div class="col-md-6"> <!-- floating contact form -->
                    <div class="quote-border"></div>
                    <div class="quote-form">
                        <h3>Request a Quote Today!</h3>

                        <form name="contactform">

                            <input  class="form-control" type="text" id = "first_name" name="first_name" placeholder="First Name" maxlength="50" size="30" required>
                            <div class="fNameVal hint">Please provide a first name</div><br />
                            <input  class="form-control" type="text" id="last_name" name="last_name" placeholder="Last Name" maxlength="50" size="30" required>
                            <div class="lNameVal hint">Please provide a last name</div><br />
                            <input  class="form-control" type="text" id="email" name="email" placeholder="Email" maxlength="80" size="30" required>
                            <div class="emailVal hint">Please provide a valid email</div><br />
                            <input  class="form-control" type="text" id="telephone" name="telephone" placeholder="Phone Number" maxlength="30" size="30" required>
                            <div class="telVal hint">Please provide a valid telephone number with area code</div><br />
                            <textarea  class="form-control" id="comments" name="comments" placeholder="Comments" maxlength="1000" cols="25" rows="6"></textarea>

                            <button class="btn btn-primary" type="submit" id="contact-submit">Request Quote</button>
                        </form>
                    </div>
                </div>
                <div class="col-md-6"> <!-- marketing banner1 -->
                    <div class="map">
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1kHrIL8K1nHtUzoNxujCKAzxH_M4" width="100%" height="480"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>

    <!--New section DNU
    <div class="container-fluid">
        <div class="container">
            <div class="row">
            </div>
        </div>
    </div>
-->

<?php include('footer.php') ?>