<?php


namespace App\Notification\Interfaces;


interface NotificationObjectInterface
{
    public function __get(string $name);

    public function __set(string $name, string $value);
}