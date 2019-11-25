<?php
$yourMailId = "contact@apastones.com";
if(isset($_POST['email']))
	{
		session_cache_limiter( 'nocache' );
		// Message receieved by you
		$subject = "Notify me";
		$headers = "From: " .$_POST['email']."\r\n";
		$headers .= "Reply-To: ".$_POST['email']."\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		$message = "<p><b>Full Name : </b> ".$_POST['name']."</p>";
		$message .= "<p><b>Email : </b> ".$_POST['email']."</p>";
		// Sending mail
		@mail($yourMailId, $subject, $message, $headers);
	}
?>
