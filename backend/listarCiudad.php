<?php
require_once("conexion.php");

function listar_departamentos($pais,$departamento){
	$conexion=new conexion();
	$cnn=$conexion->getConexion();
	$sql="SELECT ciudad FROM `ciudad` WHERE id_depar=:departamento";
	$statement=$cnn->prepare($sql);
	$statement->bindParam(':departamento', $pais, PDO::PARAM_STR);
	$valor=$statement->execute();
	$departamento=array();
	if ($valor) {
		$i=1;
		while ($row=$statement->fetch(PDO::FETCH_ASSOC)) {
		    array_push($departamento, $row["ciudad"]);
		    
		}

	}
 return json_encode($departamento);;
}

 ?>