import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import {carpetas} from 'src/modelos/carpetas'
import {crearcarpetamiddle} from 'src/modelos/crearcarpetamiddle'
import {pedircarpetamiddle} from 'src/modelos/pedircarpetamiddle'
import {arraycarpetas} from 'src/modelos/arraycarpetas'
import {arrayarchivo} from 'src/modelos/arrayarchivos'
import {eliminarcarpeta} from 'src/modelos/eliminarcarpeta'
import {renombrarcarpetamiddle} from 'src/modelos/renombrarcarpetamiddle'
import { renombrarcarpeta } from 'src/modelos/renombrarcarpeta'
import {datosmovermiddle} from 'src/modelos/datosmovermiddle'
import {loginmiddle} from 'src/modelos/loginmiddle'
import {crearusuariomiddle} from 'src/modelos/crearusuariomiddle'
import {pedirroot} from 'src/modelos/pedirroot'
import {datosmover} from 'src/modelos/datosmover'
import {archivomiddleDelete,archivomiddleRename,archivomiddleUpload} from 'src/modelos/archivomiddle'
import {archivoDelete, archivoFetch, archivoRename, archivoUpload} from 'src/modelos/archivo'
import {editarusuario} from 'src/modelos/editarusuario'
import { token } from "src/modelos/corroborartoken";
import { tokenmiddle } from "src/modelos/corroborartokenmiddle";

///bases 2
import { pacientes } from "src/modelos/pacientes";
import { Habitaciones } from "src/modelos/Habitaciones";
import { habitacionesres } from "src/modelos/habitacionesres";
import { pacientescat } from "src/modelos/pacientescat";
import { pacienteshab } from "src/modelos/pacienteshab";
import { dia } from "src/modelos/dia";
import { edad } from "src/modelos/edad";
///bases 2

import { Observable } from 'rxjs';
import { blob } from 'aws-sdk/clients/codecommit';
import { login } from 'src/modelos/login';
import { crearusuario } from 'src/modelos/crearusuario';
import { crearcarpeta } from 'src/modelos/crearcarpeta';
import { pedircarpeta } from 'src/modelos/pedircarpeta';
import { SendMail } from 'src/modelos/mail';
import { getcarpeta } from 'src/modelos/getcarpeta';
import { selectcarpeta } from 'src/modelos/selectcarpeta';
@Injectable({
  providedIn: 'root'
})
export class EjemploService {
  api:string="http://ec2-3-137-213-210.us-east-2.compute.amazonaws.com:8082"; 

  //middleware
  appi:string="http://3.15.230.61:5000/api";

  url:string = 'http://34.139.17.223';//'http://35.192.35.25'

  apilocal:string='http://localhost:3000';

  constructor(private http:HttpClient) 
  { 
    
  }

/////bases 2
pedirpacientes():Observable<pacientes[]>
  {
   return this.http.get<pacientes[]>(this.apilocal+"/pacientes");
  }
  pedirhabitaciones():Observable<Habitaciones[]>
  {
   return this.http.get<Habitaciones[]>(this.apilocal+"/Habitaciones");
  }
  pedirhabitaciones1():Observable<habitacionesres[]>
  {
   return this.http.get<habitacionesres[]>(this.apilocal+"/HabitacionesMasUsadas");
  }
  pedirhabitaciones2():Observable<habitacionesres[]>
  {
   return this.http.get<habitacionesres[]>(this.apilocal+"/HabitacionesMenosUsadas");
  }

  pedirpac():Observable<pacientescat[]>
  {
   return this.http.get<pacientescat[]>(this.apilocal+"/pacientesporcat");
  }
  pedirpac1():Observable<habitacionesres[]>
  {
   return this.http.get<habitacionesres[]>(this.apilocal+"/pacientesporhabit");
  }
  pedirpac2():Observable<pacienteshab[]>
  {
   return this.http.get<pacienteshab[]>(this.apilocal+"/pacientesporGenero");
  }

  pediredadmenos():Observable<edad[]>
  {
   return this.http.get<edad[]>(this.apilocal+"/edadesmenosatendidas");
  }
  pediredadmas():Observable<edad[]>
  {
   return this.http.get<edad[]>(this.apilocal+"/edadesmasatendidas");
  }
  pedirdia():Observable<dia[]>
  {
   return this.http.get<dia[]>(this.apilocal+"/diaconmasPacientes");
  }
////bases 2






  movfolder(idcarpeta:datosmover):Observable<any>
  {
   return this.http.post(this.url+":8082/carpeta/move",idcarpeta);
  }

  
  crearcarpeta(carpeta: crearcarpeta):Observable<any>
  {
   return this.http.post(this.url+":8082/carpeta/new_carpeta",carpeta);
  }


  pedircarpetas(idpadre:pedircarpeta):Observable<arraycarpetas>
  {
   return this.http.post<arraycarpetas>(this.url+":8082/carpeta/fetch_carpetas",idpadre);
  }

  pedircarpeta(idpadre:getcarpeta):Observable<selectcarpeta>
  {
   return this.http.post<selectcarpeta>(this.url+":8082/carpeta/fetch_carpeta_by_id",idpadre);
  }

  renamecarpeta(idcarpeta:renombrarcarpeta):Observable<any>
  {
   return this.http.post(this.url+":8082/carpeta/rename_carpeta",idcarpeta);
  }

  deletecarpeta(idcarpeta:eliminarcarpeta):Observable<any>
  {
   return this.http.post(this.url+":8082/carpeta/delete_carpeta",idcarpeta);
  }

  movcarpeta(idcarpeta:datosmovermiddle):Observable<any>
  {
   return this.http.post(this.appi,idcarpeta);
  }

  login(usuario:login):Observable<any>
  {
    return this.http.post(this.url+':8080/usuario/login',usuario);
  }

  crearusuario(usuario:crearusuario):Observable<any>
  {
    return this.http.post(this.url+':8080/usuario/addUsuario',usuario)
  }

  solicitarroot(usuario:pedirroot):Observable<any>
  {
    return this.http.post<any>(this.url+":8082/carpeta/root_folder",usuario)
  }

  creararchivo(archivo:archivoUpload):Observable<any>
  {
   return this.http.post(this.url+":8083/archivo/new_archivo",archivo);
  }

  pedirarchvios(idpadre:pedircarpeta):Observable<arrayarchivo>
  {
   return this.http.post<arrayarchivo>(this.url+":8083/archivo/fetch_archivos",idpadre);
  }

  descargararchivo(ruta:string):Observable<blob>
  {
    return this.http.get(ruta, {
      responseType:'blob'
    })
  }

  eliminararchivo(id:archivoDelete):Observable<any>
  {
    return this.http.post(this.url+":8083/archivo/delete_archivo",id);
  }

  renombrararchivo(archivo:archivoRename)
  {
    return this.http.post(this.url+":8083/archivo/rename_archivo", archivo);
  }

  editaruser(usuario:editarusuario):Observable<any>
  {
    return this.http.post<any>("http://ec2-3-137-213-210.us-east-2.compute.amazonaws.com:8080/api/editUsuario",usuario)
  }

  validaciontoken(tokenRevisar: tokenmiddle):Observable<any>
  {
    return this.http.post(this.appi,tokenRevisar);
  }

  enviarcorreo(mail:SendMail):Observable<any>
  {
    return this.http.post(this.url+":8083/archivo/send_email", mail);
  }

  /*
  crearusuario1(file: registro):Observable<any>
  {
  return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/register",file);
  }
  
  iniciarsesion(file: iniciar)
  {
    this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/login",file)
    .subscribe((resp:normal)=>
     {
       this.enviar1=resp.status;
     });
  }

  iniciarsesion1(file: iniciar):Observable<any>
  {
  return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/login",file);
  }

  pedirdatos(file: datosusuario)
  {
    this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/personalinformation",file)
    .subscribe((resp:datospersonales)=>
     {
       //this.datospersona=new datospersonales(resp.status.toString(),resp.nombrecompleto.toString(),resp.nombreusuario.toString(),resp.ruta.toString());
     this.nombreusr=resp.nombreusuario;
     this.nombrecom=resp.nombrecompleto;
     this.rutaper=resp.ruta;
      //alert(this.nombrecom);
      });
  }
  

  pedirdatos1(file: datosusuario):Observable<any>
  {
   return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/personalinformation",file);
  }
  editarperfil(file: editarperfil):Observable<any>
  {
   return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/editprofile",file);
  }
  editaralbum(file: editaralbum):Observable<any>
  {
   return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/editalbum",file);
  }

  pediralbum():Observable<any[]>
  {
   return this.http.get<any[]>("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/albumes");
  }
  insertimagen(file: insertarimagen):Observable<any>
  {
   return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/insertarimagen",file);
  }

  pedirimagenes():Observable<any[]>
  {
   return this.http.get<any[]>("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/imagenes");
  }

  reconocimiento(file: insertarimagen):Observable<any>
  {
    return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/insertarimagen",file);
  }
  sacartexto(file: enviarbase):Observable<any>
  {
   return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/textofimg",file);
  }

  pedirinformacion(file: datosusuario):Observable<any>
  {
    return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/information",file);
  }


  
  pedirdescripcion(file: enviarurl):Observable<any>
  {
    return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/descriptionfoto",file);
  }

  pedirtraduccion(file: traduccion):Observable<any>
  {
    return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/translate",file);
  }

  reconocimientofacial(file: enviaranalizar):Observable<any>
  {
    return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/analyzer",file);
  }

  chatbot(file: conversacion):Observable<any>
  {
    return this.http.post("http://balance-pareja50-2046224338.us-east-2.elb.amazonaws.com/api/chatbot",file);
  }*/
}
