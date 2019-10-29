<?php
require_once("conexion.php");

function ingresar($usuario,$id){
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
$sql1="SELECT * FROM `super_usuario` WHERE email=:email";
$statement1=$cnn->prepare($sql1);
$statement1->bindParam(':email', $id, PDO::PARAM_STR);
$valor=$statement1->execute();
if($valor){
$row = $statement1->fetch(PDO::FETCH_ASSOC);
$id=$row["id"];
}
	$sql="
INSERT INTO `estudio`(`id_estudio_usuario`, `fechaini`, `fecha_fin`, `Nombre_titulo`, `Institucion`, `programa_uso`, `ciudad`, `departamento`, `pais`, `id`) VALUES (:id,:fecha_inicio,:fecha_fin,:nombre,:insti,:programa,:ciudad,:dep,:pais)";
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
	}else{$exito="TODO MAL";}
 return json_encode($exito);
}

 ?>