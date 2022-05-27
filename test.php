<?php
   // $name = $_POST['name-input'];
   // $email = $_POST['email-input'];
   // $subject = $_POST['title-input'];
   // $message = $_POST['message-input'];
   // $email_message = "$name wyslal wiadomosc: \n $message ";
   // require 'vendor/autoload.php';
   // use PHPMailer\PHPMailer\PHPMailer;

   // $mail = new PHPMailer(true);
   // $mail->isSMTP();
   // $mail->SMTPDebug = 2;
   // $mail->Host = 'smtp.titan.email';
   // $mail->SMTPSecure = 'ssl'; 
   // $mail->Port = 465;
   // $mail->SMTPAuth = true;
   // $mail->Username = 'stefaniak@bartholomeas.com';
   // $mail->Password = 'password123';
   // $mail->setFrom('stefaniak@bartholomeas.com', $email);
   // $mail->addReplyTo('testowy@onet.pl', $name);
   // $mail->addAddress('stefaniak@bartholomeas.com', 'Bartholomeas');
   // $mail->Subject = $subject;
   // $mail->Body = $email_message;
   // //  $mail->msgHTML('gratulancje uzytkowniku wygrales nowego iphone 4s');
   //  //$mail->addAttachment('test.txt');
   //  if (!$mail->send()) {
   //     echo 'Mailer Error: ' . $mail->ErrorInfo;
   //  } else {
   //     echo 'The email message was sent.';
   //  }



//    $name = $_POST['name-input'];
//    $email = $_POST['email-input'];
//    $subject = $_POST['title-input'];
//    $message = $_POST['message-input'];


require 'vendor/autoload.php';  
    use PHPMailer\PHPMailer\PHPMailer;
    echo "jest ok";
    
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail-> SMTPDebug = 2;
    $mail->Host = 'smtp.titan.email';
    $mail->Port = 465;
    $mail->SMTPAuth = true;
    $mail->Username = 'stefaniak@bartholomeas.com';
    $mail->Password = '8A9d35f!23';
    $mail->setFrom('stefaniak@bartholomeas.com', "veir@onet.pl");
    $mail->addAddress('stefaniak@bartholomeas.com', 'Bartholomeas');
        $mail->addReplyTo("veir@onet.pl", "Bartololo");
        $mail->Subject = "temat taki";
        $mail->isHTML(false);
        $mail->Body = <<<EOT
            Email: "Email to jest"
            Name: "A to jest name"
            Message: "To wiadomosc jest"
        EOT;
        if (!$mail->send()) {
            $msg = 'Sorry, something went wrong. Please try again later.';
        } else {
            $msg = 'Message sent! Thanks for contacting us.';
        }



   //  require 'vendor/autoload.php';
   //  use PHPMailer\PHPMailer\PHPMailer;
    
   //  $mail = new PHPMailer;
   //  $mail->isSMTP();
   //  $mail-> SMTPDebug = 2;
   //  $mail->Host = 'smtp.titan.email';
   //  $mail->Port = 465;
   //  $mail->SMTPAuth = true;
   //  $mail->Username = 'stefaniak@bartholomeas.com';
   //  $mail->Password = '8A9d35f!23';
   //  $mail->setFrom('stefaniak@bartholomeas.com', "veir@onet.pl");
   //  $mail->addAddress('stefaniak@bartholomeas.com', 'Bartholomeas');
   //  if ($mail->addReplyTo("veir@onet.pl", "Bartololo")) {
   //      $mail->Subject = "temat taki";
   //      $mail->isHTML(false);
   //      $mail->Body = <<<EOT
   //          Email: {$email}
   //          Name: {$name}
   //          Message: {$message}
   //      EOT;
   //      if (!$mail->send()) {
   //          $msg = 'Sorry, something went wrong. Please try again later.';
   //      } else {
   //          $msg = 'Message sent! Thanks for contacting us.';
   //      }
   //  } else {
   //      $msg = 'Share it with us!';
   //  }
?>