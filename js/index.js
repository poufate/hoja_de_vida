var usuario="";
var ajax="";

$(function(){
if (localStorage.getItem("Logeo")==null) {
    window.location="index.html";
}
usuario=localStorage.getItem("Logeo");
usuario=usuario.split(":")
ajax=__ajax("frontend/peticion_info_academica.php",usuario[0]);
ajax.done(function(respuesta){
	respuesta=JSON.parse(respuesta);
	console.log(respuesta[1].estudios);
})
})


function __ajax(url,usuario){
    var ajax=$.ajax({
    type:'POST',
    url: url,
    data:{'dato':usuario}
    })
return ajax;
}

