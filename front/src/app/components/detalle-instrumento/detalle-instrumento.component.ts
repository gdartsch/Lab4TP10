import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento:any;

  constructor(private activatedRoute:ActivatedRoute, private servicioDelibery:DeliveryService) {
    
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.instrumento = this.servicioDelibery.getInstrumentoXId(params['id'])
    }) 
  }

  ngOnInit(): void {
  }
}
