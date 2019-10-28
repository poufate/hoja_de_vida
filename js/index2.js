var usuario="";
var clave="";
var ajax="";

$(function(){
$("#inicio").load("login.html");
});



$(document).on("click","#registrar",function() {
$("#inicio").load("registrar.html?1");
})
$(document).on("click","#ingresar",function() {
$("#inicio").load("login.html?1");
})

//este metodo cumple con validaciones para ingresar al panel
$(document).on("click","#enviarF",  function(){
var $boton=	$("#enviarF");	
usuario=$("#email").val();
clave=$("#pass").val();
var validar=usuario+":"+clave;
	if(localStorage.getItem("Logeo")!=validar){
$boton.html("Validando<img src='images/carga.gif' width=10%;>");
$boton.attr("class","btn btn-danger");
ajax=__ajax("frontend/recoger.php",usuario,clave);
setTimeout(function(){
	ajax.done(function(respon){
if (respon=="Done") {
	$boton.html("¡Bienvenido!");
	$boton.attr("class","btn btn-success");
	setTimeout(function(){
		$boton.html("Ingresar");
	$boton.attr("class","btn btn-primary");
	localStorage.setItem("Logeo", usuario+":"+clave);
	window.location="panel.html";
}, 2000);
}else if(respon=="Vacio"){
$boton.html("Los campos estan vacios : no te hagas el bromas");
$boton.attr("class","btn btn-danger");
setTimeout(function(){
	$boton.html("Ingresar");
	$boton.attr("class","btn btn-primary");
}, 2000);
	}else{
		$boton.html("Este usuario NO existe");
$boton.attr("class","btn btn-danger");
setTimeout(function(){
	$boton.html("Ingresar");
	$boton.attr("class","btn btn-primary");
}, 2000);
	}
	})

}, 2000);
}else{
	$boton.html("Este usuario ya esta inicio sesion");
$boton.attr("class","btn btn-primary");
	setTimeout(function(){
		$boton.html("Ingresar");
	$boton.attr("class","btn btn-primary");
	window.location="panel.html";
}, 2000);
}

});


//este metodo cumple con validaciones para registrar un usuario

$(document).on("click","#enviarR",function(){
var $boton=$("#enviarR");
usuario=$("#email").val();
clave=$("#pass").val();
var cpass=$("#cpass").val();
if (clave===cpass && clave!="" && cpass!="" & usuario!="") {
$boton.html("Verificando<img src='images/carga.gif' width=10%;>");
$boton.attr("class","btn btn-danger");
ajax=__ajax("frontend/crearUsuario.php",usuario,clave);
ajax.done(function(respon){

	setTimeout(function(){
		if (respon=="Done") {
		$boton.html("Creacion de usuario exitosa");
		$boton.attr("class","btn btn-success");
		setTimeout(function(){
			localStorage.setItem("Logeo",  usuario+":"+clave);
			$boton.html("Registrar");
			$boton.attr("class","btn btn-primary");
			window.location="panel.html";
		}, 2000);
	}else{
		$boton.html("Este usuario ya existe");
		$boton.attr("class","btn btn-success");
		setTimeout(function(){
			$boton.html("Registrar");
			$boton.attr("class","btn btn-primary");
		}, 2000);
	}
	},2000)
	

});

}else{
	$boton.html("Las claves son distintas o los campos estan vacios");
	$boton.attr("class","btn btn-danger");
	setTimeout(function(){
	$boton.html("Ingresar");
	$boton.attr("class","btn btn-primary");
}, 2000);
}

});





function __ajax(url,usuario,clave){
	var ajax=$.ajax({
	type:'POST',
	url: url,
	data:{'user':usuario,'clave':clave}
	})
return ajax;
}



