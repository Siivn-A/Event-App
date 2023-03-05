<?php
$connection = mysqli_connect("localhost", "root", "", "eventsdb");

header('Access-Control-Allow-Origin: *');
header('Content-type: Application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

// import Event class
require_once('../event_service.php');

$event = new Event($connection);

$req_data = json_decode(file_get_contents("php://input"));

$event->name = $req_data->name ?? null;
$event->start_time = $req_data->start_time ?? null;
$event->end_time = $req_data->end_time ?? null;
$event->city = $req_data->city ?? null;
$event->category = $req_data->category ?? null;
$event->banner_image = $req_data->banner_image ?? null;
$event->date = $req_data->date ?? null;
$event->status = $req_data->status ?? null;
$event->description = $req_data->description ?? null;



$result = $event->create();

if ($result){
    echo "Event Created Successfully";
    return true;
}
echo "event was not created";
return false;

?>