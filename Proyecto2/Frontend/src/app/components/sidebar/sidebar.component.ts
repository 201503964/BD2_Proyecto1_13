import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';
import { AccelerateConfiguration } from "@aws-sdk/client-s3";
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  tipo:number
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/tables",
    title: "PACIENTES",
    icon: "fa-male",
    class: "",
    tipo: 1,
  },
  {
    path: "/dashboard",
    title: "HABITACIONES",
    icon: "fa-male",
    class: "",
    tipo:1,
  },
  {
    path: "/icons",
    title: "TOP PACIENTES",
    icon: "fa-male",
    class: "",
    tipo:1
  },

  {
    path: "/user",
    title: "EDADES",
    icon: "fa-male",
    class: "",
    tipo:1,
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  public log:string="";
  public login:number=0;
  estalogeado: boolean = false;

  constructor(private router:Router) {
    this.log=sessionStorage.getItem("usuario");
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);

  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  seleccionaropcion(rutapagina:String,tipo:number)
  {
    
    this.login=Number(sessionStorage.getItem("login"));
    if(tipo==2)
    {
      if(this.login==1)
      {
        this.router.navigate([rutapagina]);
      }
      else
      {
        alert("debe de iniciar sesion para poder seleccionar esta opcion");
      }
    }
    else if(tipo==3)
    {
      sessionStorage.setItem("carpeta","root");
      sessionStorage.setItem("idcarpeta","");
      sessionStorage.setItem("usuario","");
      sessionStorage.setItem("login","0");
      sessionStorage.setItem("mover","0");
      sessionStorage.setItem("idmover","0");
      sessionStorage.setItem("padreanterior","0");
      sessionStorage.setItem("urlpadre","");
      this.router.navigate([rutapagina]);
    }
    else
    {
      if(this.login==1)
      {
        alert("para ingresar a esta opcion cierre sesion")
      }
      else
      {
      this.router.navigate([rutapagina]);   
      }
    }
}

}
