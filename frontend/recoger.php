<?php
require_once("../backend/validar.php");
if ($_POST["user"]!="" &&  $_POST["clave"]!="") {
echo validar($_POST["user"],$_POST["clave"]);	
}else{
	echo "Vacio";
}

  ?>