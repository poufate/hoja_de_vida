import * as info_academica from '/xampp/hoja_vida/js/informacion.js';
var usuario="";
var ajax="";
var informacion=[];
var posicion="";



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

$(document).on("click","#editar", function(){
var html=""
var paises="";
	ajax=__ajax2("frontend/peticion_listar_paises.php");
	ajax.done(function(response){
		paises=JSON.parse(response);
		var html_paises=options_select(paises);
		html=editar(html_paises);
		console.log(html);
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
				<span class="span_modal"><b>En el departmaento:</b></span><span class="span_modal">${informacion[i].departamento}</span>
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
				<div class="col-12">
					<span class="span_modal"><b><i>${informacion[i].nombre_titulo}</i></b></span>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la institucion:</b></span><input class="form-control" type="text" 
				class="span_modal" value="${informacion[i].institucion}">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Con el programa:</b></span><input class="form-control" type="text"
				 class="span_modal" value=""${informacion[i].programa}>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>A partir del:</b></span><input class="form-control" type="number"
				 class="span_modal" value="${informacion[i].fecha_inicio}">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>Finalizado en:</b></span><input class="form-control" type="number"
				 class="span_modal"value="${informacion[i].fecha_fin}">
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el pais:</b></span><select class="form-control" type="text"
				 class="span_modal" >${html_paises}<select>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En el departmaento:</b></span><select class="form-control" type="text"
				 class="span_modal" id="departamento"><option value="${informacion[i].departamento}">
				 ${informacion[i].departamento}</option><select>
				</div>
				<div class="col-12 col-sm-12  col-md-12  col-lg-6  col-xl-6">
				<span class="span_modal"><b>En la ciudad:</b></span><input class="form-control" type="text" class="span_modal" value="${informacion[i].ciudad}">
				</div>

				<div class="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12">
				<button class="Editarbtn btn btn-primary" id="actualizar"> Actualizar </button>
				</div>
		</div>`;
		return html;
}
$(document).on("click","#departamento", function(){
	
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