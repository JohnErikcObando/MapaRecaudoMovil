import { EventEmitter, Injectable } from '@angular/core';
import { coordenadas } from '../models/posicionIstUser.model';

@Injectable({
  providedIn: 'root'
})
export class DatosConsultaService {

  usuario: string = 'Cobrador';
  fecha: string;
  cuadre: string;

  coordenada$ = new EventEmitter<[]>();

  constructor() {

  }

  datosConsulta() {
    this.usuario = 'Cobrador';
    this.fecha = 'Fecha'

    console.log('servicio datos');
  }

}
