<?php
include "backend/Database_Backend/db_inc_pdo.php"

$targetDirectory = "C:\xampp\htdocs\uploads"; 
$files = scandir($targetDirectory);
$files = array_diff($files, array('.', '..')); // Remove . and .. from the list

if (count($files) > 0) {
    echo "<ul>";
    foreach ($files as $file) {
        $fileUrl = $targetDirectory . $file;
        echo "<li><a href='$fileUrl' download='$file'>$file</a></li>";
    }
    echo "</ul>";
} else {
    echo "No files available for download.";
}
?>
