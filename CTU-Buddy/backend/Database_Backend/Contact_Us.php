<?php
include "backend/Database_Backend/db_inc_pdo.php"


$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['subscribe'])) {
    $email = $_POST['email'];

    // Check if the email is not already subscribed
    $checkQuery = "SELECT * FROM subscribers WHERE email = '$email'";
    $result = $conn->query($checkQuery);

    if ($result->num_rows == 0) {
        // Insert the email into the subscribers table
        $insertQuery = "INSERT INTO subscribers (email) VALUES ('$email')";
        if ($conn->query($insertQuery) === TRUE) {
            echo "Subscription successful!";
        } else {
            echo "Error: " . $insertQuery . "<br>" . $conn->error;
        }
    } else {
        echo "Email is already subscribed.";
    }
}

// Close the database connection
$conn->close();
?>
?>
