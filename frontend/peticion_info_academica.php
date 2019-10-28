<?php
function recuper(){
$correo=$_POST['dato'];
require_once('../Backend/info_academica.php');
$json=informacionAcademica($correo);
return $json;
}
echo recuper();
?>