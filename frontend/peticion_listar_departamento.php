<?php
function recuper(){
require_once('../Backend/listarDepartamentos.php');
$datos=$_POST["dato"];
$datos=explode(":",$datos);
$json=listar_departamentos($datos[0],$datos[1]);
return $json;
}
echo recuper();
?>