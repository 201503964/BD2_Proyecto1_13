/**
 * {
    "to":"walkter@gmail.com",
    "subject":"Test From NodeJs",
    "text":"Esta es una Prueva del Servidor de Correo",
    "link":"https://www.eluniversal.com.mx/sites/default/files/2019/04/15/cats.jpg"
}
 */


import { Binary } from "@angular/compiler";

export class SendMail {
  constructor(
    public to: string,
    public subject: string,
    public text: string,
    public link: string
  ) {}
}