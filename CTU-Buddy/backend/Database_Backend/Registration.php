<?php 

include "backend/Database_Backend/db_inc_pdo.php"

$Username = $_POST['Username']
$User_Password = $_POST['User_Password']


$sql = "insert into login(UserName,Password)value ('$Username','$User_Password')";
$result=$conn->query($sql)

