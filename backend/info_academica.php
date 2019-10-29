<?php
require_once("conexion.php");

function informacionAcademica($correo){
	$conexion=new conexion();
	$cnn=$conexion->getConexion();
	$sql="SELECT estudio.id,estudio.Nombre_titulo,estudio.fechaini,estudio.fecha_fin,estudio.Institucion,estudio.programa_uso,estudio.ciudad,estudio.departamento,estudio.pais FROM estudio INNER JOIN super_usuario ON super_usuario.id=estudio.id_estudio_usuario WHERE super_usuario.email=:email";
	$statement=$cnn->prepare($sql);
	$statement->bindParam(':email', $correo, PDO::PARAM_STR);
	$valor=$statement->execute();
	$estudios=array();
	if ($valor) {
		$i=1;
		while ($row=$statement->fetch(PDO::FETCH_ASSOC)) {
			$hoja_vida["estudios"][]=$row['id'];
			$hoja_vida["estudios"][]=$row['Nombre_titulo'];
		    $hoja_vida["estudios"][]=$row['Institucion'];
		    $hoja_vida["estudios"][]=$row['programa_uso'];
		    $hoja_vida["estudios"][]=$row['fechaini'];
		    $hoja_vida["estudios"][]=$row['fecha_fin'];
		    $hoja_vida["estudios"][]=$row['pais'];
		    $hoja_vida["estudios"][]=$row['departamento'];
		    $hoja_vida["estudios"][]=$row['ciudad'];
		    array_push($estudios, $hoja_vida);
		    unset($hoja_vida);
		}

	}
 return json_encode($estudios);;
}

 ?>