<?php
function recuper(){
$correo=$_POST['dato'];
require_once('../Backend/experiencia_laboral.php');
$json=informacion($correo);
return $json;
}
echo recuper();
?>