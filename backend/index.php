<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "testingdb"; 
 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
switch ($method) {
    case 'POST':    
        $email = $_POST["email"];
        $password = $_POST["password"];
        $sql = "insert into tbl_signup (email, password) values ( '$email', '$password')"; 
    break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'POST') {
    echo json_encode($result);
} else {
    echo mysqli_affected_rows($con);
}
 
$con->close();