<?php


namespace App\Response;


use App\Response\Driver\JsonDriver;
use App\Response\Interfaces\DriverInterface;

class Response
{
    public static $driver;

    public static function setDriver(DriverInterface $driver)
    {
        static::$driver = $driver;

        return new self;
    }

    public static function formatResponse($data,$status)
    {
        if(is_null(static::$driver) || empty(static::$driver))
        {
            static::$driver = new JsonDriver();
        }

        $driver = static::$driver;
        return $driver->generateResponse($data,$status);
    }
}