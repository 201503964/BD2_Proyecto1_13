import { Binary } from "@angular/compiler";

export class archivoUpload {
  constructor(
    public nombre: string,
    public id_contenedor: string,
    public id_propietario: string,
    public extencion: string,
    public permisos: number
  ) {}
}

export class archivoFetch {
  constructor(
    public nombre: string,
    public id_contenedor: string,
    public id_propietario: string,
    public extencion: string,
    public permisos: number,
    public _id:string,
    public creatdAt:string,
    public updateAt:string,
    public __v:number
  ) {}
}

export class archivoRename {
  constructor(public nombre: string, public id: string) {}
}

export class archivoDelete {
  constructor(public id: string) {}
}
