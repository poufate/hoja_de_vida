<?php
function insertar_academica(){
$correo=$_POST['dato'];
require_once('../Backend/info_academica.php');
$json=informacionAcademica($correo);
return $json;
}
echo insertar_academica();
?>