import * as personal from '/xampp/Nueva carpeta/js/personal.js';

var usuario="";

var ajax="";
var informacion=[];
var posicion="";


$(function(){ 

	usuario=localStorage.getItem("Logeo");
usuario=usuario.split(":");
console.log(usuario);
ajax=__ajax("frontend/peticicion_info_personal.php",usuario[0]);
ajax.done(function(respuesta){
	respuesta=JSON.parse(respuesta);
	
	console.log(respuesta);
		informacion.push(new personal.infoAcademica(respuesta.personal[0],respuesta.personal[1],respuesta.personal[2],
			respuesta.personal[3],respuesta.personal[4],respuesta.personal[5],
			respuesta.personal[6],respuesta.personal[7],respuesta.personal[8]));
		})
		var html="";
		html+=`<p class="fh5co-lead animate-box" data-animate-effect="fadeInLeft">
		 Mi nombre es : ${informacion.nombre}, tengo ${informacion.edad} años y vivo en ${informacion.direccion}
		 ${informacion.ciudad},${informacion.departamento},${informacion.pais}, y mi telefono es: ${informacion.telefono}.</p>`;
		
		$("#info").append(html);


})


function __ajax(url,usuario){
    var ajax=$.ajax({
    type:'POST',
    url: url,
    data:{'dato':usuario}
    })
return ajax;
}