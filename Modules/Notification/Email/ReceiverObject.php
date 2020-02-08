<?php

namespace App\Notification\Email;

use App\Notification\Interfaces\NotificationObjectInterface;

class ReceiverObject implements NotificationObjectInterface
{
    private $data;

    public function __set(string $name,string $value)
    {
        $this->data[$name] = $value;
    }

    public function __get(string $name)
    {
        if(isset($this->data[$name]) && !empty($this->data[$name]) && !is_null($this->data[$name]))
        {
            return $this->data[$name];
        }
    }
}