<?php


namespace App\Response\Interfaces;


interface DriverInterface
{
    public function generateResponse($status,$data);
}