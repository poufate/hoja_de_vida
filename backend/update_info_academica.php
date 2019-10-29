<?php
require_once("conexion.php");

function actualizar($usuario){
	$conexion=new conexion();
	$cnn=$conexion->getConexion();
	$datos=json_decode($usuario);
	$fechai=$datos->{"fecha_inicio"};
	$fechaf=$datos->{"fecha_fin"};
	$nomb=$datos->{"nombre_titulo"};
	$inst=$datos->{"institucion"};
	$pro=$datos->{"programa"};
	$ciu=$datos->{"ciudad"};
	$dep=$datos->{"departamento"};
	$pais=$datos->{"pais"};
	$id=$datos->{"id"};

	$sql="UPDATE `estudio` SET `fechaini`=:fecha_inicio,`fecha_fin`=:fecha_fin,`Nombre_titulo`=:nombre,`Institucion`=:insti,`programa_uso`=:programa,`ciudad`=:ciudad,`departamento`=:dep,`pais`=:pais WHERE id=:id";
	$statement=$cnn->prepare($sql);
	$statement->bindParam(':fecha_inicio', $fechai, PDO::PARAM_STR);
	$statement->bindParam(':fecha_fin',$fechaf, PDO::PARAM_STR);
	$statement->bindParam(':nombre', $nomb, PDO::PARAM_STR);
	$statement->bindParam(':insti', $inst, PDO::PARAM_STR);
	$statement->bindParam(':programa',$pro, PDO::PARAM_STR);
	$statement->bindParam(':ciudad', $ciu, PDO::PARAM_STR);
	$statement->bindParam(':dep',$dep, PDO::PARAM_STR);
	$statement->bindParam(':pais', $pais, PDO::PARAM_STR);
	$statement->bindParam(':id', $id, PDO::PARAM_INT);
	$valor=$statement->execute();
	if ($valor) {
		$exito="TODO BIEN";

	}
 return json_encode($exito);
}

 ?>