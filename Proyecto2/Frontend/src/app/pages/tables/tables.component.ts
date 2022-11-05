import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Readable } from "stream";
import { pacientes } from "src/modelos/pacientes";
import { EjemploService } from "../../ejemplo.service";
@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  lstpacientes: pacientes[];
  constructor(public servicio: EjemploService, private router: Router) {
    this.solicitarpacientes();
  }

  ngOnInit() {}

  solicitarpacientes() {
    this.servicio.pedirpacientes().subscribe((resp) => {
      this.lstpacientes = <pacientes[]>resp;
     // console.log(this.lstpacientes);
    });
  }
}
