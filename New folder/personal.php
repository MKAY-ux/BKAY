<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "university";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect data from the form
$first_name = $_POST['first_name'];
$middle_name = $_POST['middle_name'];
$last_name = $_POST['last_name'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$phone_number = $_POST['phone_number'];
$student_id = $_POST['student_id'];

// Handle profile picture upload
$profile_picture = '';
if(isset($_FILES['profile_picture'])){
    $profile_picture = addslashes(file_get_contents($_FILES['profile_picture']['tmp_name']));
}

// Insert data into the database
$sql = "INSERT INTO students (first_name, middle_name, last_name, dob, email, gender, phone_number, student_id, profile_picture) 
VALUES ('$first_name', '$middle_name', '$last_name', '$dob', '$email', '$gender', '$phone_number', '$student_id', '$profile_picture')";

if ($conn->query($sql) === TRUE) {
    echo "Record saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
