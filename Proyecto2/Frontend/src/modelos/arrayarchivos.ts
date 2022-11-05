import{Binary} from "@angular/compiler"
import{archivoFetch} from "src/modelos/archivo"
export class arrayarchivo
{
constructor(
    public msg:string,
    public succes:boolean,
    public archivos:archivoFetch[],  
){}

}