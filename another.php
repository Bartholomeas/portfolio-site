<?php
$name = $_POST['name-input'];
   $email = $_POST['email-input'];
   $subject = $_POST['title-input'];
   $message = $_POST['message-input'];

    require 'vendor/autoload.php';
    use PHPMailer\PHPMailer\PHPMailer;
    
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail-> SMTPDebug = 2;
    $mail->Host = 'smtp.titan.email';
    $mail->Port = 465;
    $mail->SMTPAuth = true;
    $mail->Username = 'stefaniak@bartholomeas.com';
    $mail->Password = '8A9d35f!23';
    $mail->setFrom('stefaniak@bartholomeas.com', $email);
    $mail->addAddress('stefaniak@bartholomeas.com', 'Bartholomeas');
    if ($mail->addReplyTo($_POST['email-input'], $_POST['name-input'])) {
        $mail->Subject = $subject;
        $mail->isHTML(false);
        $mail->Body = <<<EOT
            Email: {$email}
            Name: {$name}
            Message: {$message}
        EOT;
        if (!$mail->send()) {
            $msg = 'Sorry, something went wrong. Please try again later.';
        } else {
            $msg = 'Message sent! Thanks for contacting us.';
        }
    } else {
        $msg = 'Share it with us!';
    }
   ?>