<?php
require_once("../backend/registar.php");
require_once("../backend/validar.php");
$user=$_POST["user"];
$clave=$_POST["clave"];
if (validar($user,$clave)!="Done") {
echo registrar($user,$clave);
}else{
	echo "Error";
}
  ?>
