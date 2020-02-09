<?php


namespace App\Response\Driver;


use App\Response\Interfaces\DriverInterface;
use App\Response\JsonHelper;

class JsonDriver implements DriverInterface
{
    use JsonHelper;

    public function generateResponse($data,$status)
    {
        if(is_array($data) && count($data)) {
            $data['status'] = $status;
            return $this->convertToJson($data);
        }elseif (is_string($data) && !empty($data) && !is_null($data)){
            return $this->convertToJson([
                'status' => $status,
                'message' => $data
            ]);
        }else{
            return $this->convertToJson([
                'status' => 500,
                'message' => 'No Data fetched'
            ]);
        }
    }

    public function convertToJson(array $data)
    {
        return json_encode($data,true);
    }
}