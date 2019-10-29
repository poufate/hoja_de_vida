<?php
function recuper(){
require_once('../Backend/listarPais.php');
$json=listar_paises();
return $json;
}
echo recuper();
?>