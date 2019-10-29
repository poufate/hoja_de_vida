<?php
require_once("conexion.php");

function informacion($correo){
	$conexion=new conexion();
	$cnn=$conexion->getConexion();
	$sql="SELECT exp_laboral.id,exp_laboral.fechainicio,exp_laboral.fechafin,exp_laboral.ciudad,exp_laboral.empresa_nombre,exp_laboral.sector,exp_laboral.pais,exp_laboral.id_dep FROM exp_laboral INNER JOIN super_usuario ON super_usuario.id=exp_laboral.id_expe_laboral_user WHERE super_usuario.email=email ";


	$statement=$cnn->prepare($sql);
	$statement->bindParam(':email', $correo, PDO::PARAM_STR);
	$valor=$statement->execute();
	$exp_laborals=array();
	if ($valor) {
		$i=1;
		while ($row=$statement->fetch(PDO::FETCH_ASSOC)) {
			$hoja_vida["exp_laboral"][]=$row['id'];
		    $hoja_vida["exp_laboral"][]=$row['fechainicio'];
		    $hoja_vida["exp_laboral"][]=$row['fechafin'];
		     $hoja_vida["exp_laboral"][]=$row['ciudad'];
		      $hoja_vida["exp_laboral"][]=$row['empresa_nombre'];
		       $hoja_vida["exp_laboral"][]=$row['sector'];
		    $hoja_vida["exp_laboral"][]=$row['pais'];
		    $hoja_vida["exp_laboral"][]=$row['id_dep'];
		   
		    array_push($exp_laborals, $hoja_vida);
		    unset($hoja_vida);
		}

	}
 return json_encode($exp_laborals);;
}

 ?>