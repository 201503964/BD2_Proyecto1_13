import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { login } from "src/modelos/login";
import { pedirroot } from "src/modelos/pedirroot";
import { loginmiddle } from "src/modelos/loginmiddle";
import { EjemploService } from "../../ejemplo.service";
import sha256 from "crypto-js/sha256";

@Component({
  selector: "app-map",
  templateUrl: "map.component.html",
})
export class MapComponent implements OnInit {
  public log: login;
  public logmiddle: loginmiddle;

  public root: pedirroot;
  respuesta: any;
  respuesta1: any;

  constructor(public servicio: EjemploService, private router: Router) {
    sessionStorage.setItem("idcarpeta", "");
    sessionStorage.setItem("usuario", "");
    sessionStorage.setItem("login", "0");
    sessionStorage.setItem("email","");
  }
  ngOnInit() {}

  inciarsesion(nickname: string, password: string) {
    this.log = new login(nickname, password);
    this.servicio.login(this.log).subscribe((resp) => {
      this.respuesta = <any>resp;
      if (this.respuesta.status != null) {
        if(this.respuesta.status == "ok"){
          this.llenarroot(this.respuesta.data._id);
          sessionStorage.setItem("usuario", this.respuesta.data._id);
          sessionStorage.setItem("email", this.respuesta.data.mail);
        }else if(this.respuesta.status == "token"){
          //this.router.navigate(["/validacion"]);
        }else if(this.respuesta.status == "error"){
          alert(this.respuesta.mensaje);
        } else {
          alert(this.respuesta.error);
        }
      }
    });
  }

  llenarroot(idusuario: string) {
    this.root = new pedirroot(idusuario);
    this.servicio.solicitarroot(this.root).subscribe((resp) => {
      console.log(resp);
      this.respuesta1 = <any>resp;
      if (this.respuesta1.success.toString() == "true") {
        alert("iniciando sesion " + idusuario);
        sessionStorage.setItem("idcarpeta", this.respuesta1.carpeta._id);
        sessionStorage.setItem("idpadre", this.respuesta1.carpeta._id);
        // sessionStorage.setItem("usuario", idusuario);
        sessionStorage.setItem("login", "1");
        sessionStorage.setItem("carpetapadre", this.respuesta1.carpeta.nombre);
        sessionStorage.setItem("urlpadre", this.respuesta1.carpeta.nombre);
        this.router.navigate(["/icons"]);
      } else {
        alert(resp.error);
      }
    });
  }
}
