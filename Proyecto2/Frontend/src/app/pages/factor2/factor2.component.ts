import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { login } from "src/modelos/login";
import { pedirroot } from "src/modelos/pedirroot";
import { loginmiddle } from "src/modelos/loginmiddle";
import { EjemploService } from "../../ejemplo.service";
import sha256 from "crypto-js/sha256";

import { token } from "src/modelos/corroborartoken";
import { tokenmiddle } from "src/modelos/corroborartokenmiddle";

@Component({
  selector: "app-factor2",
  templateUrl: "factor2.component.html",
})
export class factor2 implements OnInit {
  //public log: login;
  //public logmiddle: loginmiddle;
  public tok: token;
  public tokmiddle: tokenmiddle;

  //public root: pedirroot;
  respuesta: any;
  respuesta1: any;

  constructor(public servicio: EjemploService, private router: Router) {
    
  }
  ngOnInit() {}

  comprobarToken(tokencorreo: string) {
      this.tok = new token(tokencorreo);
      this.tokmiddle = new tokenmiddle("Authorization: Bearer " + tokencorreo, "/usuario/getUsuario",this.tok);
      this.servicio.validaciontoken(this.tokmiddle).subscribe(
          (resp) => {
              this.respuesta = <any>resp;
              if(this.respuesta.status != "ok"){
                sessionStorage.setItem("id", this.respuesta.data.user._id);
                sessionStorage.setItem("usuario", this.respuesta.data.user.nickname);
                sessionStorage.setItem("email", this.respuesta.data.user.mail);
                sessionStorage.setItem("cumple", this.respuesta.data.user.birth);

              }else{
                  alert("Se produjo un error al validar el token");
              }
          }
      )
    //this.log = new login(nickname, password);
   // this.logmiddle = new loginmiddle("login", this.log);
    /*this.servicio.login(this.logmiddle).subscribe((resp) => {
      this.respuesta = <any>resp;
      if (this.respuesta.status != null) {
        if(this.respuesta.status == "ok"){
          sessionStorage.setItem("token", this.respuesta.data.token);
        }else if(this.respuesta.status == "token"){
          
        }else if(this.respuesta.status == "error"){

        }else{

        }
      } else {
        alert(this.respuesta.error);
      }
    });*/
  }
}
