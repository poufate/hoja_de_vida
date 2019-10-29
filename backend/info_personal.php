<?php
require_once("conexion.php");

function personal($correo){
	$conexion=new conexion();
	$cnn=$conexion->getConexion();
	$sql=" SELECT usuario.nombre, usuario.edad, usuario.direccion, usuario.ciudad, usuario.departamento, usuario.pais, usuario.tipo_residencia,usuario.telefono FROM usuario INNER JOIN super_usuario ON super_usuario.id=usuario.id_superusuario WHERE super_usuario.email=email ";


	$statement=$cnn->prepare($sql);
	$statement->bindParam(':email', $correo, PDO::PARAM_STR);
	$valor=$statement->execute();
	$exp_laborals=array();
	if ($valor) {
		$i=1;
		while ($row=$statement->fetch(PDO::FETCH_ASSOC)) {
			$hoja_vida["personal"][]=$row['nombre'];
		    $hoja_vida["personal"][]=$row['edad'];
		    $hoja_vida["personal"][]=$row['direccion'];
		     $hoja_vida["personal"][]=$row['ciudad'];
		      $hoja_vida["personal"][]=$row['departamento'];
		       $hoja_vida["personal"][]=$row['pais'];
		    $hoja_vida["personal"][]=$row['residencia'];
		    $hoja_vida["personal"][]=$row['telefono'];
		   
		    array_push($exp_laborals, $hoja_vida);
		    unset($hoja_vida);
		}

	}
 return json_encode($exp_laborals);;
}

 ?>