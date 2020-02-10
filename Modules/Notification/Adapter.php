<?php


namespace App\Notification;


use App\Notification\Email\Email;
use App\Notification\Email\MessageObject;
use App\Notification\Email\ReceiverObject;
use App\Response\Response;

class Adapter
{
    private $notification_sections = [
        'contact_me',
        'code_project',
        'design_project'
    ];

    public function __construct()
    {

    }

    public function run()
    {
        $methods = get_class_methods($this);
        if(in_array('run',$methods)){
            $key = array_search('run',$methods);
            unset($methods[$key],$key);
        }

        if(!$this->checkRequestType()['status'])
        {
            return Response::formatResponse($this->checkRequestType()['message'],500);
        }

        $data = $_POST;

        if(!isset($data['section']) || !$this->checkSection($data['section'])['status']){
            return Response::formatResponse($this->checkSection($data['section'])['message'],500);
        }
        if(!isset($data['name']) || !$this->checkName($data['name'])['status']){
            return Response::formatResponse($this->checkName($data['name'])['message'],500);
        }
        if(!isset($data['email']) || !$this->checkEmail($data['email'])['status']){
            return Response::formatResponse($this->checkEmail($data['email'])['message'],500);
        }
        if(!isset($data['description']) || !$this->checkDescription($data['description'])['status']){
            return Response::formatResponse($this->checkDescription($data['description'])['message'],500);
        }

        $receiver = $this->preReceiverData($data);
        $message = $this->preMessageData($data);
        $emailObject = new Email($receiver, $message);
        $notification_handler = new SendNotification($emailObject);
        $notification_handler->sendNotification();
    }

    public function preReceiverData(array $data) : ReceiverObject
    {
        $receiver = new ReceiverObject();
        $receiver->email = $data['email'];
        $receiver->name = $data['name'];

        return $receiver;
    }

    public function preMessageData(array $data) : MessageObject
    {
        $message = new MessageObject();
        $message->subject = "New ".$data['section']." request from ".$data['name'];
        $message->message = $data['description'];

        return  $message;
    }

    public function checkRequestType()
    {
        if(strtolower($_SERVER['REQUEST_METHOD']) != "post"){
            return [
                'status' => false,
                "message" => "invalid request type"
            ];
        }
        return ['status' => true];
    }

    public function checkSection(string $section){
        $result = false;

        foreach ($this->notification_sections as $notification_section){
            if($section == $notification_section){
                $result = true;
            }
        }

        if(!$result){
            return [
                'status' => false,
                "message" => "invalid section"
            ];
        }
        return ['status' => true];
    }

    public function checkName(string $name){
        $result = $this->checkStrings($name,5,50);

        if(!$result){
            return [
                'status' => false,
                "message" => "Name must be at least 5 character, string and maximum 50 character."
            ];
        }
        return ['status' => true];
    }

    public function checkEmail(string $email){

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return [
                'status' => false,
                "message" => "Invalid Email address"
            ];
        } else {
            return ['status' => true];
        }
    }

    public function checkSubject(string $subject){
        $result = $this->checkStrings($subject,10,150);

        if(!$result){
            return [
                'status' => false,
                "message" => "Subject must be at least 10 character, string and maximum 150 character."
            ];
        }
        return ['status' => true];
    }

    public function checkDescription(string $description){
        $result = $this->checkStrings($description,30,500);

        if(!$result){
            return [
                'status' => false,
                "message" => "Description must be at least 30 character, string and maximum 500 character."
            ];
        }
        return ['status' => true];
    }

    public function checkStrings(string $string, int $min_length, int $max_length)
    {
        if(strlen($string) < $min_length)
        {
            $result = false;
        }

        if(!is_string($string)){
            $result = false;
        }

        if ($string > $max_length){
            $result = false;
        }

        return true;
    }
}