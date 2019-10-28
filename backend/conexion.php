<?php
class conexion{
  private $host="localhost";
  private $dbname="hoja_de_vida";
  private $user="root";
  private $pass="";
  private $conexion=null;

  public function getConexion(){
    try{
      $this->conexion=new PDO(
        "mysql:host=$this->host; dbname=$this->dbname",
        $this->user,
        $this->pass
      );
      return $this->conexion;
    }catch(Exeption $e){
      echo $e->getMessage();
    }finally{
      $this->conexion=null;
    }
  }
}