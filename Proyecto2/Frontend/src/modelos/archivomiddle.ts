import{Binary} from "@angular/compiler"
import{ archivoDelete, archivoRename, archivoUpload } from "src/modelos/archivo"

export class archivomiddleUpload
{
constructor(
    public method:string,
    public body:archivoUpload
){}

}

export class archivomiddleDelete
{
constructor(
    public method:string,
    public body:archivoDelete
){}

}

export class archivomiddleRename
{
constructor(
    public method:string,
    public body:archivoRename
){}

}