<?php
require('populate_connect.php');

$name = $_POST['name'];
$course = $_POST['course'];
$grade = $_POST['grade'];
$query = "INSERT INTO `SGT_3`( `name`, `course`, `grade`) VALUES ('$name', '$course', '$grade')";
mysqli_query($conn, $query);


if(mysqli_affected_rows($conn)>0) {
    $output['success'] = true;
    $newID = mysqli_insert_id($conn);
    $output['newID'] = $newID;
}
print(json_encode($output));
?>