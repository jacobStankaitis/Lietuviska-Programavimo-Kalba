<?php


$kodas="";
if(isset($_POST['kodas'])){$kodas=$_POST['kodas']}
$data = time();
$servername = "localhost";
$username = "id5392714_admin";
$password = "admin";
$dbname = "id5392714_fetch";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    //die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO kodai (kodas, data, data_skaicius)
VALUES ('$kodas', '$data', '$data')";
$conn->close();
echo $time."<br>";
echo $date;
?>