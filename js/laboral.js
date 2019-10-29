
export class infoLaboral{
constructor(id,fechaini,fechafin,ciud,empresa_nombre,sector,pais,depar){
	this.id=id;
	this.fecha_inicio=fechaini;
	this.fecha_fin=fechafin;
	this.ciudad=ciud;
	this.empresa=empresa_nombre;
	this.sector=sector;
	this.pais=pais;
	this.departamento=depar;
	
	
	
}

//Categoria
 getId(){
return this.id;
}
 setId(id){
this.id=id;
}

 getEmpresa(){
return this.empresa;
}
 setEmpresa(nomb){
this.empresa=nomb;
}


 getSector(){
return this.sector;
}
 setSector(nomb){
this.sector=nomb;
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
