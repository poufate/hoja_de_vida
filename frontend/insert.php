<?php
function recuper(){
$dato=$_POST['dato'];
$user=$_POST["user"];
require_once('../Backend/insert_info_academica.php');
$json=ingresar($dato,$user);
return $json;
}
echo recuper();
?>