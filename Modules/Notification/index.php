<?php
require_once dirname(dirname(__DIR__))."/bootstrap.php";

$adapter = new \App\Notification\Adapter();
$response = $adapter->run();
print_r($response);
/*$message = new \App\Notification\Email\MessageObject();
$message->subject = "Test";
$message->message = "Hello there";

$receiver_object = new \App\Notification\Email\ReceiverObject();
$receiver_object->email = "mamali0938@gmail.com";
$receiver_object->name = "Mohammad Reza";

$email_object = new \App\Notification\Email\Email($receiver_object,$message);
$email_object->send();*/

//print_r(\App\Response\Response::setDriver(new \App\Response\Driver\JsonDriver())->formatResponse(['aaaa','bbbb'],200));