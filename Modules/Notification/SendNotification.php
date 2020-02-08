<?php
namespace App\Notification;

use App\Notification\Interfaces\SendNotificationInterface;

class SendNotification
{
    public $notification_object;

    public function __construct(SendNotificationInterface $notification_object)
    {
        $this->notification_object = $notification_object;
    }

    public function sendNotification()
    {
        $this->notification_object->send();
    }
}