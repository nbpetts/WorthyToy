<?php

if(isset($_POST['email'])) {
   // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "nbpetts@gmail.com";
 
    $email_subject = "Worthy Words Story";
     header('location: index.html');
     
 
     

    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
  // validation expected data exists
 
    if(!isset($_POST['first_name']) ||
 
        !isset($_POST['last_name']) ||
 
        !isset($_POST['email']) || 
       
        isset($_POST['is_not_human'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
  
    $first_name = $_POST['first_name']; // required
 
    $last_name = $_POST['last_name']; // required
 
    $email_from = $_POST['email']; // required
  
    $first_line = $_POST['first_line'];
  
    $second_line = $_POST['second_line'];
  
    $third_line = $_POST['third_line'];
  
    $fourth_line = $_POST['fourth_line'];
  
    $fifth_line = $_POST['fifth_line'];
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
 
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
 
  }
 
  if(!preg_match($string_exp,$last_name)) {
 
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
 
  }
 

  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
    $email_message .= "First Name: ".clean_string($first_name)."\n";
 
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Once upon a time there was... ".clean_string($first_line)."\n";
 
    $email_message .= "And everyday, ".clean_string($second_line)."\n";
    $email_message .= "Until one day: ".clean_string($third_line)."\n";
    $email_message .= "Because of this, ".clean_string($fourth_line)."\n";
    $email_message .= "Ever since that day: ".clean_string($fifth_line)."\n";
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
 mail($email_to, $email_subject, $email_message, $headers);  
// header('location: index.html');
  /*if (mail($email_to, $email_subject, $email_message, $headers)) {
    header('location: index.html');
} else {
    header('location: index.html');
}*/
}
 
?>
