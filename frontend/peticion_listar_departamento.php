<?php
function recuper(){
require_once('../Backend/listarDepartamentos.php');
$datos=$_POST["dato"];
$json=listar_departamentos();
return $json;
}
echo recuper();
?>