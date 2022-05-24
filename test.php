<?php
    require 'vendor/autoload.php';
    use PHPMailer\PHPMailer\PHPMailer;

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->SMTPDebug = 2;
    $mail->Host = 'smtp.titan.email';
    $mail->SMTPSecure = 'ssl'; 
    $mail->Port = 465;
    $mail->SMTPAuth = true;
    $mail->Username = 'stefaniak@bartholomeas.com';
    $mail->Password = '8A9d35f!23';
    $mail->setFrom('stefaniak@bartholomeas.com', 'Your Name');
    $mail->addReplyTo('stefaniak@bartholomeas.com', 'Your Name');
    $mail->addAddress('stefaniak@bartholomeas.com', 'Receiver Name');
    $mail->Subject = 'Testing PHPMailer';
    $mail->msgHTML(file_get_contents('message.html'), __DIR__);
    $mail->Body = 'This is a plain text message body';
    //$mail->addAttachment('test.txt');
    if (!$mail->send()) {
       echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
       echo 'The email message was sent.';
    }
?>
