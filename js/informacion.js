
export class infoAcademica{
constructor(id,nombre,insti,progra,fechaini,fechafin,pais,depar,ciud){
	this.id=id;
	this.nombre_titulo=nombre;
	this.institucion=insti;
	this.programa=progra;
	this.fecha_inicio=fechaini;
	this.fecha_fin=fechafin;
	this.pais=pais;
	this.departamento=depar;
	this.ciudad=ciud;
}

//Categoria
 getId(){
return this.id;
}
 setId(id){
this.id=id;
}
 getNombre_titulo(){
return this.nombre_titulo;
}
 setNombre_titulo(nomb){
this.nombre_titulo=nomb;
}
 getInstitucion(){
return this.institucion;
}
 setInstitucion(nomb){
this.institucion=nomb;
}

 getPrograma(){
return this.programa;
}
 setPrograma(nomb){
this.programa=nomb;
}

 getFecha_inicio(){
return this.fecha_inicio;
}
 setFecha_inicio(nomb){
this.fecha_inicio=nomb;
}

 getFecha_inicio(){
return this.fecha_fin;
}
 setFecha_inicio(nomb){
this.fecha_fin=nomb;
}

//Pais
 getPais(){
return this.pais;
}
 setPais(pa){
this.pais=pa;
}

//Departamento en el que se posiciona
 getDepartamento(){
return this.departamento;
}
 setDepartamento(dep){
this.departamento=dep;
}


//html de los Ciudad
 getCiudad(){
return this.ciudad;
}
 setCiudad(ciudades){
this.ciudad=ciudad;
}

}
