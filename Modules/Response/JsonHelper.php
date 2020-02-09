<?php


namespace App\Response;


trait JsonHelper
{
    function isJson($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }
}