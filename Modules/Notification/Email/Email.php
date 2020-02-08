<?php


namespace App\Notification\Email;


use App\Notification\Interfaces\NotificationObjectInterface;
use App\Notification\Interfaces\SendNotificationInterface;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Email implements SendNotificationInterface
{
    private $receiver;
    private $message;
    private $configs;

    public function __construct(NotificationObjectInterface $receiver_object, NotificationObjectInterface $message)
    {
        $this->receiver = $receiver_object;
        $this->message = $message;
        $this->configs = include "config/server_config.php";
    }

    public function send()
    {
        try{
            $mail = $this->prePareData($this->receiver);
            $mail->send();
        }catch (Exception $e)
        {
            die("mail not send with error : ".$e->getMessage());
        }
        die("mail sent with success");
    }

    public function prePareData(NotificationObjectInterface $notification)
    {
        $mail = new PHPMailer(true);
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = $this->configs['host'];
        $mail->SMTPAuth = $this->configs['smtp_auth'];
        $mail->Username = $this->configs['username'];
        $mail->Password  = $this->configs['password'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $this->configs['port'];

        //Recipients
        $mail->setFrom($this->configs['from_address'], $this->configs['from_name']);
        $mail->addAddress($this->receiver->email, $this->receiver->name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $this->message->subject;
        $mail->Body = $this->message->message;

        return $mail;
    }
}