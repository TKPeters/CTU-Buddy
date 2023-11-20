<?php
include "backend/Database_Backend/db_inc_pdo.php";

$targetDirectory = "C:\xampp\htdocs\uploads"; // Change this to your upload folder
$uploadFile = $targetDirectory . basename($_FILES["file"]["name"]);

if (move_uploaded_file($_FILES["file"]["tmp_name"], $uploadFile)) {
    echo "File is valid and was successfully uploaded.";
} else {
    echo "File upload failed.";
}
?>
