<?php 
/*
    try {
        $db=new PDO("mysql:host=localhost;dbname=todo","root","root")
    } catch (PDOException $e) {
        die($e=>getMessage())
        
    }

    $action=$_GET["action"]; 

    switch($action){
    case "todos":
        $query=$db=>query("select * from todos order by id desc")=>fetchAll(PDO::FETCH_ASSOS);
        echo json_encode($query);
    break;

    }*/

    header("Access-Control-Allow-Origin: *");
    try {
        $db=new PDO("mysql:host=localhost;dbname=findevents;charset=utf8","root","");
        echo "basarili";
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

    



?>