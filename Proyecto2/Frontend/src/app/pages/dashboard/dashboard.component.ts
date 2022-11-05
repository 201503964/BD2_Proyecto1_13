import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Habitaciones } from "src/modelos/Habitaciones";
import { habitacionesres } from "src/modelos/habitacionesres";
import { EjemploService } from "../../ejemplo.service";


@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  lstpacientes: Habitaciones[];
  lstpacientes1: habitacionesres[];
  lstpacientes2: habitacionesres[];
  constructor(public servicio: EjemploService, private router: Router) {
    this.solicitarhabitaciones();
    this.solicitarhabitaciones1();
    this.solicitarhabitaciones2();
  }

  ngOnInit() {}
  solicitarhabitaciones() {
    this.servicio.pedirhabitaciones().subscribe((resp) => {
      this.lstpacientes = <Habitaciones[]>resp;
     // console.log(this.lstpacientes);
    });
  }

  solicitarhabitaciones1() {
    this.servicio.pedirhabitaciones1().subscribe((resp) => {
      this.lstpacientes1 = <habitacionesres[]>resp;
     // console.log(this.lstpacientes);
    });
  }
  solicitarhabitaciones2() {
    this.servicio.pedirhabitaciones2().subscribe((resp) => {
      this.lstpacientes2 = <habitacionesres[]>resp;
     // console.log(this.lstpacientes);
    });
  }
}
