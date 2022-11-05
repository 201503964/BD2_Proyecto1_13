import { Component } from "@angular/core";
import { namespace } from "src/singleton/rutas"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "black-dashboard-angular";
  constructor()
  {
    sessionStorage.setItem("carpeta","root");
    sessionStorage.setItem("idcarpeta","");
    sessionStorage.setItem("usuario","");
    sessionStorage.setItem("login","0");
    sessionStorage.setItem("mover","0");
    sessionStorage.setItem("idmover","0");
    sessionStorage.setItem("padreanterior","0");
    sessionStorage.setItem("urlpadre","");
    sessionStorage.setItem("urlpadreanterior","");
    sessionStorage.setItem("idpadre","");
    sessionStorage.setItem("carpetapadre","root");
    sessionStorage.setItem("nombrearchivo","");
    sessionStorage.setItem("email","");
    sessionStorage.setItem("password","");
    sessionStorage.setItem("cumple","");
    sessionStorage.setItem("nickname","");
    sessionStorage.setItem("token","");
    sessionStorage.setItem("idpapelera","");
    sessionStorage.setItem("idroot","");
    sessionStorage.setItem("flagpapelera","0");
  }
}
