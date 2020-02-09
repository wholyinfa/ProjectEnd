<?php
namespace App\Notification;

use App\Notification\Email\Email;
use App\Notification\Interfaces\SendNotificationInterface;

class SendNotification
{
    public $notification_object;

    public function __construct(SendNotificationInterface $notification_object = null)
    {
        if(is_null($notification_object) || empty($notification_object))
        {
            $notification_object = new Email();
        }

        $this->notification_object = $notification_object;
    }

    public function sendNotification()
    {
        $this->notification_object->send();
    }
}