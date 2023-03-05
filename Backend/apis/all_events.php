<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: Application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

// import Event class
require_once('../event_service.php');
$connection = mysqli_connect("localhost", "root", "", "eventsdb");

$event = new Event($connection);

$req_data = json_decode(file_get_contents("php://input"));

$event->filter_date = $req_data->filter_date ?? null;
$event->filter_city = $req_data->filter_city ?? null;
$event->filter_category = $req_data->filter_category ?? null;


$result = $event->get_events();


$response = array();

if ($connection){
    if($result){
        $i=0;
        while ($row = mysqli_fetch_assoc($result)){
            if ($event->filter_city){
                $response[$i]['city'] = $row['city'];
                $response[$i]['count'] = $row['cnt'];
                $response[$i]['count_filter'] = 1;
                $i++;
            }
            elseif($event->filter_category){
                $response[$i]['category'] = $row['category'];
                $response[$i]['count'] = $row['cnt'];
                $response[$i]['count_filter'] = 1;
                $i++;
            }
            else{
            $response[$i]['id'] = $row['id'];
            $response[$i]['name'] = $row['name'];
            $response[$i]['start_time'] = $row['start_time'];
            $response[$i]['end_time'] = $row['end_time'];
            $response[$i]['city'] = $row['city'];
            $response[$i]['category'] = $row['category'];
            $response[$i]['banner_image'] = $row['banner_image'];
            $response[$i]['status'] = $row['status'];
            $response[$i]['date'] = $row['date'];
            $response[$i]['description'] = $row['description'];
            $response[$i]['count_filter'] = 0;
            $i++;
            }
            
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}
else {
    echo "db not found";
}
?>