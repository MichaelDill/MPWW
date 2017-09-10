<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

if(isset($_GET['email'])) {
$EmailFrom = "contact@mpwindowsgutters.com";
//$EmailTo = "paul@mpwindowsgutters.com";
$EmailTo = "contact@mpwindowsgutters.com";
$Subject = "Quote Request";

$Name = $_GET['name']; // required
$Email = $_GET['email']; // required
$Tel = $_GET['tel']; // not required
$Comments = $_GET['comments']; // required


// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Comments: ";
$Body .= $Comments;
$Body .= "\n";


// send email 
mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");


?>
email: details:
<?php
echo($Body);
}
?>