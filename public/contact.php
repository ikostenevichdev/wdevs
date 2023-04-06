<?php
header('Content-Type: application/json; charset=utf-8');

$config = [
    'smtp' => [
        'host' => 'smtp.gmail.com',
        'username' => 'user@gmail.com',
        'password' => 'xxxxxxxxxxxxxxxx', // Google account App password here
    ],
    'sender' => [
        'email' => 'wdevs@wdevs.com',
        'name' => 'WDevs',
    ],
    'recipient' => [
        'email' => 'username@domain.tld',
        'name' => 'User Name'
    ],
];

require '../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer();
// $mail->SMTPDebug = 1; // Enable SMTP debugging

// Send using SMTP
$mail->isSMTP();

// Enable SMTP authentication
$mail->SMTPAuth = true;
// SMTP Host
$mail->Host = $config['smtp']['host'];
// SMTP username
$mail->Username = $config['smtp']['username'];
// SMTP password
$mail->Password = $config['smtp']['password'];
// Enable implicit TLS encryption
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
// TCP port to connect
$mail->Port = 587;

$mail->setFrom($config['sender']['email'], $config['sender']['name']); // Add a sender
$mail->addAddress($config['recipient']['email'], $config['recipient']['name']); // Add a recipient

$mail->isHTML(true); // Set email format to HTML

// "Start a project" || "Get in touch"
$subject = isset($_REQUEST['subject']) ? $_REQUEST['subject'] :  "WDevsJS Contact Form";
$mail->Subject = $subject;

$htmlOutput = "<h3>${subject}</h3>\n";

$reqKeys = [
    // request_key => Title
    'name' => 'Name',
    'email' => 'Email Address',
    'message' => 'Text', // How can we help you?
    'contactMethod' => 'Contact Method', // Email | Phone | Skype | Telegram
    'contactWay' => 'Preferable Contact Way', // text
    'budget' => 'Budget', // $12 000
    'deadline' => 'DeadLine', // 3 month
];

foreach ($reqKeys as $key => $title) {
    if (isset($_REQUEST[$key])) {
        $str = html_entity_decode($_REQUEST[$key], ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $htmlOutput .= sprintf("<p><strong>%s</strong>: %s</p>\n", $title, $str);
    }
}
$mail->Body = $htmlOutput;

$hasFiles = isset($_FILES) && count($_FILES);
if ($hasFiles) {
    foreach ($_FILES as $file) {
        $tmpName = isset($file['tmp_name']) ? $file['tmp_name'] : false;
        if (is_file($tmpName) && is_readable($tmpName)) {
            $fileName = isset($file['name']) ? $file['name'] : false;
            if ($fileName) {
                $mail->addAttachment($tmpName, $fileName);
            } else {
                $mail->addAttachment($tmpName);
            }
        }
    }
}

$output = [
    'success' => true,
    'message' => ''
];

try {
    $mail->send();
    $output['message'] =  "Message has been sent successfully";
} catch (Exception $e) {
    $output['message'] = "Mailer Error: " . $mail->ErrorInfo;
    $output['success'] = false;
}

echo json_encode($output);