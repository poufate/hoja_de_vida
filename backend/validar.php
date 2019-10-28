<?php

require_once("conexion.php");
function validar( $usuario , $clave){
$conexion=new conexion();
$cnn=$conexion->getConexion();	
$sql="SELECT * FROM `super_usuario` WHERE email=:email and clave=:clave";
$statement=$cnn->prepare($sql);
$statement->bindParam(':email', $usuario, PDO::PARAM_STR);
$statement->bindParam(':clave', $clave, PDO::PARAM_STR);
$valor=$statement->execute();
if($valor){
$row = $statement->fetch(PDO::FETCH_ASSOC);
if ($row["email"]==$usuario && $row["clave"]==$clave) {
return "Done";	
}

}  
return "Error";
  }
  ?>
