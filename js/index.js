import * as info_academica from '/xampp/hoja de vida entrega/js/informacion.js';
import * as info_laboral from '/xampp/hoja de vida entrega/js/laboral.js';
var usuario="";
var ajax="";
var informacion=[];
var posicion="";
var posicionAN="0";
var posicionANC="0";
var laboral=[];

$(function(){
if (localStorage.getItem("Logeo")==null) {
    window.location="index.html";
}
usuario=localStorage.getItem("Logeo");
usuario=usuario.split(":")
ajax=__ajax("frontend/peticion_info_academica.php",usuario[0]);

ajax.done(function(respuesta){
	respuesta=JSON.parse(respuesta);
	for (var i = 0; i < respuesta.length; i++) {
		informacion.push(new info_academica.infoAcademica(respuesta[i].estudios[0],respuesta[i].estudios[1],respuesta[i].estudios[2],
			respuesta[i].estudios[3],respuesta[i].estudios[4],respuesta[i].estudios[5],
			respuesta[i].estudios[6],respuesta[i].estudios[7],respuesta[i].estudios[8]));
		}

var html="";
	for (var i = 0; i < informacion.length; i++) {
		html+=pintar_contenido_index(i);
	}
	$("#agrear_infoAcademica").before(html);
	ajax=__ajax("frontend/peticion_info_laboral.php",usuario[0]);
ajax.done(function(respuesta2){
	respuesta2=JSON.parse(respuesta2);
	console.log(respuesta2);
for (var i = 0; i < respuesta2.length; i++) {
		laboral.push(new info_laboral.infoLaboral(respuesta2[i].exp_laboral[0],respuesta2[i].exp_laboral[1],respuesta2[i].exp_laboral[2],
			respuesta2[i].exp_laboral[3],respuesta2[i].exp_laboral[4],respuesta2[i].exp_laboral[5],
			respuesta2[i].exp_laboral[6],respuesta2[i].exp_laboral[7]));
		}

var html2="";
	for (var i = 0; i < laboral.length; i++) {
		html2+=pintar_contenido_index2(i);
	}
	console.log(laboral)
	$("#agregar_exp").before(html2);
	})

})
})

$(document).on("click","#expandir",function(){
	var html="";
	var id=$(this).attr("data-value");
	for (var i = 0; i < informacion.length; i++) {
		if (id==informacion[i].id) {
			posicion=i;
		html+=pintar_contenido_flotante(i);
				}
	}
	$("#contenido_academico").html(html);
	$("#modal-infoAcademica").modal("show");
})

$(document).on("click","#expandir2",function(){
	var html="";
	var id=$(this).attr("data-value");
	for (var i = 0; i < laboral.length; i++) {
		if (id==laboral[i].id) {
			posicion=i;
		html+=pintar_contenido_flotante2(i);
				}
	}
		$("#contenido_academico").html(html);
	$("#modal-infoAcademica").modal("show");
})

$(document).on("click","#editar", function(){
var html=""
var paises="";
$('#editar').attr("disabled", true);
	ajax=__ajax2("frontend/peticion_listar_paises.php");
	ajax.done(function(response){
		paises=JSON.parse(response);
		var html_paises=options_select(paises);
		html=editar(html_paises);
		$("#contenido_dinamico").append(html);
	})
});

$(document).on("click","#editar2", function(){
var html=""
var paises="";
	ajax=__ajax2("frontend/peticion_listar_paises.php");
	ajax.done(function(response){
		paises=JSON.parse(response);
		var html_paises=options_select(paises);
		html=editar2(html_paises);
		$("#contenido_dinamico").append(html);
	})
});


//pintar contenido de 
function pintar_contenido_index(i){
	var html="";
	html+=`<div class="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
		<a id='expandir' data-value="${informacion[i].id}">
							<img src="images/work_2.jpg" class="img-responsive">
							<h3 class="fh5co-work-title">${informacion[i].nombre_titulo}</h3>
							<p>${informacion[i].institucion} en el año ${informacion[i].fecha_inicio}</p>
			<a>				
					</div>`;
return html;
}

function pintar_contenido_index2(i){
	var html="";
	html+=`<div class="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
		<a id='expandir2' data-value="${laboral[i].id}">
							<img src="images/work_2.jpg" class="img-responsive">
							<h3 class="fh5co-work-title">${laboral[i].sector}</h3>
							<p>${laboral[i].empresa} en la ciudad ${laboral[i].ciudad}</p>
			<a>				
					</div>`;
return html;
}

//pintar el contenido flotante del modal
function pintar_contenido_flotante(i){
	var html="";
	html+=`<div class="row" id="contenido_dinamico">
				<div class="col-12">
					<span class="span_modal"><b><i>${informacion[i].nombre_titulo}</i></b></span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la institucion:</b></span><span class="span_modal">${informacion[i].institucion}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Con el programa:</b></span><span class="span_modal">${informacion[i].programa}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>A partir del:</b></span><span class="span_modal">${informacion[i].fecha_inicio}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Finalizado en:</b></span><span class="span_modal">${informacion[i].fecha_fin}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el pais:</b></span><span class="span_modal">${informacion[i].pais}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el departamento:</b></span><span class="span_modal">${informacion[i].departamento}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la ciudad:</b></span><span class="span_modal">${informacion[i].ciudad}</span>
				</div>

				<div class="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12">
				<button class="Editarbtn btn btn-primary" id="editar"> Editar </button>
				</div>
		</div>`;
		return html;
}


function pintar_contenido_flotante2(i){
	var html="";
	html+=`<div class="row" id="contenido_dinamico">
				<div class="col-12">
					<span class="span_modal"><b><i>${laboral[i].sector}</i></b></span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la institucion:</b></span><span class="span_modal">${laboral[i].empresa}</span>
				</div>
				
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>A partir del:</b></span><span class="span_modal">${laboral[i].fecha_inicio}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Finalizado en:</b></span><span class="span_modal">${laboral[i].fecha_fin}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el pais:</b></span><span class="span_modal">${laboral[i].pais}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el departamento:</b></span><span class="span_modal">${laboral[i].departamento}</span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la ciudad:</b></span><span class="span_modal">${laboral[i].ciudad}</span>
				</div>

				<div class="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12">
				<button class="Editarbtn btn btn-primary" id="editar2"> Editar </button>
				</div>
		</div>`;
		return html;
}



function options_select(options){
	var html="";
	for (var i = 0; i < options.length; i++) {
		html+=`<option value="${options[i]}">${options[i]}</option>`;
	}
	return html;
}


//codigo para editar 
function editar(html_paises){
	var i=posicion;
	var html=`<div class="row">
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Titulo:</b></span><input class="form-control" type="text" 
				class="span_modal" value="${informacion[i].nombre_titulo}" id="nombre_titulo">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la institucion:</b></span><input class="form-control" type="text" 
				class="span_modal" value="${informacion[i].institucion}" id="inst">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Con el programa:</b></span><input class="form-control" type="text"
				 class="span_modal" value="${informacion[i].programa}" id="prog">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>A partir del:</b></span><input class="form-control" type="number"
				 class="span_modal" value="${informacion[i].fecha_inicio}" id="fechaini">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Finalizado en:</b></span><input class="form-control" type="number"
				 class="span_modal"value="${informacion[i].fecha_fin}" id="fechafin">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el pais:</b></span><select class="form-control" 
				 class="span_modal" id="pais" >${html_paises}<select>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el departamento:</b></span><select class="form-control" 
				 class="span_modal" id="departamento"><option value="${informacion[i].departamento}">
				 ${informacion[i].departamento}</option><select>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la ciudad:</b></span><select class="form-control"
				  class="span_modal" id="ciudades"><option value="${informacion[i].ciudad}">${informacion[i].ciudad}</option></select>
				</div>

				<div class="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12">
				<button class="Editarbtn btn btn-primary" id="actualizar"> Actualizar </button>
				</div>
		</div>`;
		return html;
}

function editar2(html_paises){
	var i=posicion;
	var html=`<div class="row">
				<div class="col-12">
					<span class="span_modal"><b>Titulo de cargo: <i></i></b></span>
					<input class="form-control" type="text" 
				class="span_modal" value="${laboral[i].cargo}">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la Empresa:</b></span><input class="form-control" type="text" 
				class="span_modal" value="${laboral[i].empresa}">
				</div>
			
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>A partir del dia:</b></span><input class="form-control" type="number"
				 class="span_modal" value="${laboral[i].fecha_inicio}">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Finalizado en:</b></span><input class="form-control" type="number"
				 class="span_modal"value="${laboral[i].fecha_fin}">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el pais:</b></span><select class="form-control" type="text"
				 class="span_modal" id="pais" >${html_paises}<select>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el departamento:</b></span><select class="form-control" type="text"
				 class="span_modal" id="departamento"><option value="${laboral[i].departamento}">
				 ${laboral[i].departamento}</option><select>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la ciudad:</b></span><input class="form-control" type="text" class="span_modal" value="${laboral[i].ciudad}">
				</div>

				<div class="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12">
				<button class="Editarbtn btn btn-primary" id="actualizar"> Actualizar </button>
				</div>
		</div>`;
		return html;
}


$(document).on("click","#departamento", function(){
var pais=$("#pais").val();
if(posicion!==""){
var dato= pais+":"+informacion[posicion].departamento;
}else{
	var dato= pais+":";
}
ajax=__ajax("frontend/peticion_listar_departamento.php",dato);
ajax.done(function(response){
var departamentos=JSON.parse(response);
var html_dep=options_select(departamentos);
if (posicion!==posicionAN) {
$("#departamento").append(html_dep);
posicionAN=posicion;
}
	})
})


$(document).on("change","#departamento", function(){
var departamento=$("#departamento").val();
if(posicion!==""){
var dato= departamento+":"+informacion[posicion].ciudad;
}else{
	var dato= departamento+":";
}
ajax=__ajax("frontend/peticion_listar_ciudad.php",dato);
ajax.done(function(response){
var departamentos=JSON.parse(response);
var html_dep=options_select(departamentos);
$("#ciudades").html(html_dep);
	})
})

$(document).on("click","#actualizar",function(){
	informacion[posicion].setNombre_titulo($("#nombre_titulo").val());
	informacion[posicion].setInstitucion($("#inst").val());
	informacion[posicion].setPrograma($("#prog").val());
	informacion[posicion].setFecha_inicio($("#fechaini").val());
	informacion[posicion].setFecha_fin($("#fechafin").val());
	informacion[posicion].setPais($("#pais").val());
	informacion[posicion].setDepartamento($("#departamento").val());
	informacion[posicion].setCiudad($("#ciudades").val());
	var json=JSON.stringify(informacion[posicion]);
	ajax=__ajax("frontend/update.php",json);
})

$(document).on("click","#anadir",function(){
	var html=""
var paises="";
ajax=__ajax2("frontend/peticion_listar_paises.php");
	ajax.done(function(response){
		paises=JSON.parse(response);
		var html_paises=options_select(paises);
		html=anadir(html_paises);
	$("#contenido_academico").html(html);
	$("#modal-infoAcademica").modal("show");
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


function __ajax2(url){
    var ajax=$.ajax({
    type:'POST',
    url: url
    })
return ajax;
}
$(document).on("click","#crear",function(){
	var crear=new info_academica.infoAcademica($("#nombre_titulo").val(),$("#inst").val(),$("#prog").val()
		,$("#fechaini").val(),$("#fechafin").val(),$("#fechafin").val(),$("#pais").val(),
		$("#departamento").val(),$("#ciudades").val());
	var json=JSON.stringify(crear);
	usuario=localStorage.getItem("Logeo");
usuario=usuario.split(":")
	ajax=__ajax3("frontend/insert.php",json,usuario[0]);
})

function anadir(html_paises){
	var i=posicion;
	var html=`<div class="row">
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Titulo:</b></span><input class="form-control" type="text" 
				class="span_modal"id="nombre_titulo">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la institucion:</b></span><input class="form-control" type="text" 
				class="span_modal"  id="inst">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Con el programa:</b></span><input class="form-control" type="text"
				 class="span_modal"id="prog">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>A partir del:</b></span><input class="form-control" type="number"
				 class="span_modal" id="fechaini">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Finalizado en:</b></span><input class="form-control" type="number"
				 class="span_modal" id="fechafin">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el pais:</b></span><select class="form-control" 
				 class="span_modal" id="pais" >${html_paises}<select>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el departamento:</b></span><select class="form-control" 
				 class="span_modal" id="departamento"><select>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la ciudad:</b></span><select class="form-control"
				  class="span_modal" id="ciudades"></select>
				</div>

				<div class="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12">
				<button class="Editarbtn btn btn-primary" id="crear"> Crear informe academico </button>
				</div>
		</div>`;
		return html;
}
function __ajax3(url,dato,user){
    var ajax=$.ajax({
    type:'POST',
    url: url,
    data:{'dato':dato,'user':user}
    })
return ajax;
}