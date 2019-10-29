<?php
require_once("conexion.php");

function listar_departamentos($departamento,$pais){
	$conexion=new conexion();
	$cnn=$conexion->getConexion();
	$sql="SELECT departamento FROM `departamento` WHERE departamento!=:depart AND id_pais=:pais";
	$statement=$cnn->prepare($sql);
	$statement->bindParam(':depart', $departamento, PDO::PARAM_STR);
	$statement->bindParam(':pais', $pais, PDO::PARAM_STR);
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