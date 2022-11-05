import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { crearusuario } from "src/modelos/crearusuario";
import { crearusuariomiddle } from "src/modelos/crearusuariomiddle";
import { EjemploService } from "../../ejemplo.service";
import { crearcarpeta } from "src/modelos/crearcarpeta";
import { crearcarpetamiddle } from "src/modelos/crearcarpetamiddle";
import { pedirroot } from "src/modelos/pedirroot";
import sha256 from "crypto-js/sha256";
@Component({
  selector: "app-rtl",
  templateUrl: "rtl.component.html",
})
export class RtlComponent implements OnInit {
  public create: crearusuario;
  public createmed: crearusuariomiddle;
  respuesta: any;
  respuesta1: any;
  respuesta2: any;
  respuestapapelera: any;
  public root: pedirroot;
  //crear nueva carpeta
  carpetanueva: crearcarpeta;
  carpetanuevamid: crearcarpetamiddle;

  constructor(public servicio: EjemploService, private router: Router) {
    sessionStorage.setItem("idcarpeta", "");
    sessionStorage.setItem("usuario", "");
    sessionStorage.setItem("login", "0");
  }

  ngOnInit() {}
  crearusuario(
    nickname: string,
    email: string,
    password: string,
    birth: string
  ) {
    this.create = new crearusuario(
      nickname,
      email,
      birth,
      password
    );
    console.log(this.create)
    this.servicio.crearusuario(this.create).subscribe((resp) => {
      console.log(resp)
      this.respuesta = <any>resp.data;
      console.log(this.respuesta)
      if (this.respuesta._id != null) {
        this.crearcarpeta(this.respuesta._id);
        sessionStorage.setItem("idcarpeta", "");
        sessionStorage.setItem("usuario", this.respuesta._id);
        sessionStorage.setItem("login", "1");
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("cumple", birth);
        sessionStorage.setItem("nickname", nickname);
        this.router.navigate(["/icons"]);
      } else {
        alert(this.respuesta.error);
      }
    });
  }

  crearcarpeta(idusuario: string) {
    if (idusuario == "") {
      alert("para crear la carpeta es necesario el id de usuario");
    } else {
      this.carpetanueva = new crearcarpeta("root", null, 777, idusuario);
      
      this.servicio.crearcarpeta(this.carpetanueva).subscribe((resp) => {
        this.respuesta1 = <any>resp;
        if (this.respuesta1.success.toString() == "true") {
          this.llenarroot(idusuario);
        } else {
          alert(this.respuesta1.msg);
        }
      });
    }
  }
  llenarroot(idusuario: string) {
    this.root = new pedirroot(idusuario);
    this.servicio.solicitarroot(this.root).subscribe((resp) => {
      this.respuesta2 = <any>resp;
      if (this.respuesta2.success.toString() == "true") {
        this.crearpapelera(this.respuesta2.carpeta._id, idusuario);
        sessionStorage.setItem("idroot", this.respuesta2.carpeta._id);
        sessionStorage.setItem("idcarpeta", this.respuesta2.carpeta._id);
        sessionStorage.setItem("usuario", idusuario);
        sessionStorage.setItem("login", "1");
        sessionStorage.setItem("urlpadre", this.respuesta2.carpeta.nombre);
        this.router.navigate(["/icons"]);
      } else {
        alert(resp.error);
      }
    });
  }
  crearpapelera(idroot:string,idpropietario:string){
    //Creando la carpeta Papelera
    this.carpetanueva = new crearcarpeta("Papelera",idroot,777,idpropietario);
    this.carpetanuevamid = new crearcarpetamiddle(
      "newCarpeta",
      this.carpetanueva
    );
    this.servicio.crearcarpeta(this.carpetanueva).subscribe((resp) => {
      this.respuestapapelera = <any>resp;
      if (this.respuestapapelera.success.toString() == "true") {
        sessionStorage.setItem("idpapelera",this.respuestapapelera.carpeta._id);
      } else {
        alert(this.respuesta1.msg);
      }
    });
  }
}
