import{Binary} from "@angular/compiler"
 import{ token } from"src/modelos/corroborartoken"
export class tokenmiddle
{
constructor(
    public header:string,
    public method:string,
    public body:token,
){}

}