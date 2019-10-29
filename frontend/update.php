<?php
function recuper(){
$dato=$_POST['dato'];
require_once('../Backend/update_info_academica.php');
$json=actualizar($dato);
return $json;
}
echo recuper();
?>