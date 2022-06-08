import { Injectable } from '@angular/core';
import  *  as  data  from  'src/assets/datos/instrumentos.json';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  instrumentosFile:any  = (data  as  any).default;

  constructor() {
    console.log("Servicio Cargado!!!");
    console.log(this.instrumentosFile);
   }
   
  public getInstrumentos():any[]{
    return this.instrumentosFile;
    console.log(this.instrumentosFile);
  }

  public getInstrumentoXId(idx:string):any{
      for(let instrumento of this.instrumentosFile){
          if(instrumento.id == idx){
            return instrumento;
          } 
      }
  }

  public buscarInstrumentos(termino:string):any[]{
      let instrumentosArr:any[] = [];
      termino = termino.toLowerCase();

      for(let instrumento of this.instrumentosFile){
        let nombre = instrumento.instrumento.toLowerCase();
        if(nombre.indexOf(termino) >= 0){
          instrumentosArr.push(instrumento);
        }

      }
      return instrumentosArr;
    }
}


