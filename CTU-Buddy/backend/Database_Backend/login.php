<?php
include 'db_inc_pdo.php';

session_start();
include "backend/Database_Backend/db_inc_pdo.php"

$Username = $_POST['Username']
$User_Password = $_POST['User_Password']

$sql="select * from login where username ='$Username' AND password='$User_Password' "
$result=$conn->query($sql);

