
export class infoPersonal{
constructor(nombre,edad,direccion,ciudad,departamento,pais,residencia,telefono){
	this.nombre=edad;
	this.edad=edad;
	this.direccion=direccion;
	this.ciudad=ciudad;
	this.departamento=departamento;
	this.pais=pais;
	this.residencia=residencia;
	this.telefono=telefono;
}

 getnombre(){
return this.nombre;
}
 setNombre(nombre){
this.nombre=nombre;
}
 getEdad(){
return this.edad;
}
 setEdad(edad){
this.edad=edad;
}
}