import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';
import {EjemploService} from "../../ejemplo.service"
import {dia} from "src/modelos/dia"
import {edad} from "src/modelos/edad"

 
@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  lstpacientes: edad[];
  lstpacientes1: edad[];
  lstpacientes2: dia[];
  constructor(public servicio:EjemploService,private router:Router) {
    this.solicitardia();
    this.solicitaredadmenor();
    this.solicitasedadmayor();
  }
 
  ngOnInit() {}
 
  solicitasedadmayor() {
    this.servicio.pediredadmas().subscribe((resp) => {
      this.lstpacientes = <edad[]>resp;
     // console.log(this.lstpacientes);
    });
  }
  solicitaredadmenor() {
    this.servicio.pediredadmenos().subscribe((resp) => {
      this.lstpacientes1 = <edad[]>resp;
     // console.log(this.lstpacientes);
    });
  }
  solicitardia() {
    this.servicio.pedirdia().subscribe((resp) => {
      this.lstpacientes2 = <dia[]>resp;
     // console.log(this.lstpacientes);
    });
  }
}
