<?php


namespace App\Response\Driver;


use App\Response\Interfaces\DriverInterface;

class ArrayDriver implements DriverInterface
{
    public function generateResponse($data,$status)
    {
        if(is_array($data) && count($data)) {
            $data['status'] = $status;
            return $data;
        }elseif (is_string($data) && !empty($data) && !is_null($data)){
            return [
                'status' => $status,
                'message' => $data
            ];
        }else{
            return [
                'status' => 500,
                'message' => 'No Data fetched'
            ];
        }
    }
}