<?php

class Event{

    // db related things
    private $connection;
    private $table = 'event';

    // request properties
    public $name;
    public $start_time;
    public $end_time;
    public $city;
    public $category;
    public $banner_image;
    public $status;
    public $date;
    public $description;


    // for filters
    public $filter_date;
    public $filter_city;
    public $filter_category;

    // constructor with db connection
    public function __construct($db){
        $this->connection = $db;
    }

    public function create()
    {
        // create query
        $query = "INSERT INTO " .$this->table . " (`name`, `start_time`, `end_time`, `city`, `category`, `banner_image`, `status`, `date`, `description`) VALUES ('" .$this->name . "','" .$this->start_time . "','" . $this->end_time . "','" . $this->city . "','" . $this->category . "','" . $this->banner_image . "','" . $this->status . "','" . $this->date . "','" . $this->description . "')";
        $statement =  mysqli_query($this->connection, $query);
        return $statement;
    }

    public function get_events(){
        // get query
        $query_get = 'select * from ' .$this->table . " where status = 1";
        if ($this->filter_city){
            $query_get = "SELECT city, count(0) as cnt FROM " .$this->table . " WHERE status = 1 GROUP by city";
        }
        elseif ($this->filter_category){
            $query_get = "SELECT category, count(0) as cnt FROM " .$this->table . " WHERE status = 1 GROUP by category";
        }
        elseif ($this->filter_date){
            // $query_get = $query_get . " and date BETWEEN $this->filter_date AND $this->filter_date";
            $query_get = 'select * from ' .$this->table . " where status = 1" . " and date = '" .$this->filter_date . "'";

        }
        $statement =  mysqli_query($this->connection, $query_get);
        return $statement;

    }

}


?>