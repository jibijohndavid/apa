<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if (empty($_POST['name']) && empty($_POST['email'])) die();
if ($_POST)
	{
		// set response code - 200 OK
		http_response_code(200);
		$subject = 'Lead from '.$_POST['name'];
		$to = "contact@apastones.com";
		$from = $_POST['email'];
		// data
		$msg = '<html><body>';
		$msg .= '<div style="width: 400px; margin: 20px; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.13); font-family: Helvetica,Arial,sans-serif">';
		$msg .= '<div style="background-color: #e14658; padding-top: 16px;padding-left: 20px;padding-bottom: 16px;padding-right: 20px; color: white; border-top-left-radius: 6px; border-top-right-radius: 6px; font-size: 22px">Apastones Leads</div>';
		$msg .= '<div style="background-color: #ffffff;padding: 20px; padding-bottom: 30px">';
		$msg .= '<p style="margin: 0; color: #5F5F5F; font-size: 14px; margin-bottom: 4px"><strong>Full Name :</strong></p>';
		$msg .= '<div style="margin-bottom: 16px;color: #5F5F5F; font-size: 16px">'. $_POST['name'] .'</div>';
		$msg .= '<p style="margin: 0; color: #5F5F5F; font-size: 14px; margin-bottom: 4px"><strong>Email :</strong></p>';
		$msg .= '<div style="margin-bottom: 16px;color: #5F5F5F; font-size: 16px">'. $_POST['email'] .'</div>';
		$msg .= '<p style="margin: 0; color: #5F5F5F; font-size: 14px; margin-bottom: 4px"><strong>Message :</strong></p>';
		$msg .= '<div style=";color: #5F5F5F; font-size: 16px">'. $_POST['message'] .'</div>';
		$msg .= '</div></div></body></html>';
		// Headers
		$headers = "MIME-Version: 1.0\r\n";
		$headers.= "Content-type: text/html; charset=UTF-8\r\n";
		$headers.= "From: <" . $from . ">";
		mail($to, $subject, $msg, $headers);
	}
?>