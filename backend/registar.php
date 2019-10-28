<?php

require_once("conexion.php");
function registrar( $usuario , $clave){
$conexion=new conexion();
$cnn=$conexion->getConexion();	
$sql="INSERT INTO `super_usuario`(`email`, `clave`) VALUES (:email,:clave)";
$statement=$cnn->prepare($sql);
$statement->bindParam(':email', $usuario, PDO::PARAM_STR);
$statement->bindParam(':clave', $clave, PDO::PARAM_STR);
$valor=$statement->execute();
if($valor){
return "Done";	
}  
return "Error";

  }

  ?>
