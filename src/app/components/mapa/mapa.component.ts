import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as Mapboxgl from 'mapbox-gl';

import { ListaCobradoresService } from '../../services/lista-cobradores.service';
import { reduce } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa: Mapboxgl.Map;

  lng: string;
  lat: string;
  color: string;


  coordenadasPagos: any = [];


  constructor(private listaCobradoresService: ListaCobradoresService) { }

  ngOnInit(): void {

    this.AgregarMarcadores();
    // this.LimpiarCoordenadas();

  }

  ngOnDestroy(): void {
    this.mapBox();
  }



  mapBox() {

    // MAPA MAPBOX
    Mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.5855149, 8.4192527], // LONGITUD , LATITUD
      zoom: 5 // starting zoom

    });
  }


  AgregarMarcadores() {

    this.mapBox();

    // LISTADO DE COORDENADAS GUARDADAS EN EL LOCALSTORANGE DE CADA COBRADOR
    this.coordenadasPagos = JSON.parse(localStorage.getItem('listapagos'));

    console.log('este es lo del local storange', this.coordenadasPagos);


    //VERIFICA SI LA VARIABLE ES DIFERENTE DE NULL
    // if (!this.coordenadasPagos == null) {

    // GENERANDO MARCADOR A CADA PAGO Y NOVEDAD EN EL LISTADOPAGOS
    this.coordenadasPagos.forEach(item => {

      this.crearMarcador(item.Posy, item.PosX, item.Tipo);
      console.log('POSIDION X: ', item.PosX, ' POSIDION Y: ', item.Posy, ' TIPO: ', item.Tipo);

    });

    this.LimpiarCoordenadas();

    // }

  }

  crearMarcador(lng: number, lat: number, tipo: string) {

    // COLOR DEL MARCADO RESPECTO AL TIPO
    if (tipo === "PAGO") {
      this.color = 'red';
    } else {
      this.color = 'black'
    }

    // AGREGAR MARCADORES AL MAPBOX
    // if (lng > 0 && lat > 0) {
    const marker1 = new Mapboxgl.Marker({ color: this.color })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
    // }

  }

  LimpiarCoordenadas() {
    localStorage.removeItem('listapagos');
  }

}
