import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Readable } from "stream";

import { pacientescat } from "src/modelos/pacientescat";
import { habitacionesres } from "src/modelos/habitacionesres";
import { pacienteshab } from "src/modelos/pacienteshab";
import { EjemploService } from "../../ejemplo.service";


@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html",
})
export class IconsComponent implements OnInit {
  lstpacientes: pacientescat[];
  lstpacientes1: habitacionesres[];
  lstpacientes2: pacienteshab[];
  constructor(public servicio: EjemploService, private router: Router) {
    
    this.solicitarpacientes();
    this.solicitarpacientes1();
    this.solicitarpacientes2();
  }

  ngOnInit() {}

  solicitarpacientes() {
    this.servicio.pedirpac().subscribe((resp) => {
      this.lstpacientes = <pacientescat[]>resp;
     // console.log(this.lstpacientes);
    });
  }
  solicitarpacientes1() {
    this.servicio.pedirpac1().subscribe((resp) => {
      this.lstpacientes1 = <habitacionesres[]>resp;
     // console.log(this.lstpacientes);
    });
  }
  solicitarpacientes2() {
    this.servicio.pedirpac2().subscribe((resp) => {
      this.lstpacientes2 = <pacienteshab[]>resp;
     // console.log(this.lstpacientes);
    });
  }
}
