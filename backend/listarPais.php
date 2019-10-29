<?php
require_once("conexion.php");

function listar_paises(){
	$conexion=new conexion();
	$cnn=$conexion->getConexion();
	$sql="SELECT pais FROM pais ";
	$statement=$cnn->prepare($sql);
	$statement->bindParam(':email', $correo, PDO::PARAM_STR);
	$valor=$statement->execute();
	$paises=array();
	if ($valor) {
		$i=1;
		while ($row=$statement->fetch(PDO::FETCH_ASSOC)) {
		    array_push($paises, $row["pais"]);
		    
		}

	}
 return json_encode($paises);;
}

 ?>