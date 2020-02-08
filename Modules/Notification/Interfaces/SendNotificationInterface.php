<?php
namespace App\Notification\Interfaces;

interface SendNotificationInterface
{
    public function send();

    public function prePareData(NotificationObjectInterface $notification);
}