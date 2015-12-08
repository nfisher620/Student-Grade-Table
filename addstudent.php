<?php
require("mysql_connect.php");
if(!empty($_POST)) {
    $title = $_POST['title'];
    $details = $_POST['details'];
    $timestamp = $_POST['timestamp'];
    $id = $_POST['id'];
    $query = "INSERT INTO `todo_items`( `title`, `details`, `timestamp`, `user_id`) VALUES ('{$title}', '{$details}', '{$timestamp}','{$id}')";
    mysqli_query($conn, $query);
}
if(mysqli_affected_rows($conn) > 0){
    $output['success'] = 'true';
    print(json_encode($output));
}



?>