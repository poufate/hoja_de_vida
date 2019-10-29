<?php
require_once("conexion.php");

function listar_departamentos($pais,$departamento){
	$conexion=new conexion();
	$cnn=$conexion->getConexion();
	if (strlen($departamento)!=0) {
	$sql="SELECT departamento FROM `departamento` WHERE departamento!=:depart AND id_pais=:pais";	
	}else{
		$sql="SELECT departamento FROM `departamento` WHERE id_pais=:pais";
	}
	
	$statement=$cnn->prepare($sql);
		if (strlen($departamento)!=0) {
	$statement->bindParam(':depart', $departamento, PDO::PARAM_STR);
	$statement->bindParam(':pais', $pais, PDO::PARAM_STR);	
	}else{
	$statement->bindParam(':pais', $pais, PDO::PARAM_STR);
	}
	
	$valor=$statement->execute();
	$departamento=array();
	if ($valor) {
		$i=1;
		while ($row=$statement->fetch(PDO::FETCH_ASSOC)) {
		    array_push($departamento, $row["departamento"]);
		    
		}

	}
 return json_encode($departamento);;
}

 ?>