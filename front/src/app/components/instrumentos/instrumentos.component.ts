import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentosArr:any[] = [];

  constructor(private servicioDelivery:DeliveryService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.instrumentosArr = this.servicioDelivery.getInstrumentos();
    console.log(this.instrumentosArr);
  }

  public verInstrumento(idx:string){
    console.log("ID INSTRUMENTO " + idx);
    this.router.navigate(['/detalleInstrumento', idx])
  }


}
