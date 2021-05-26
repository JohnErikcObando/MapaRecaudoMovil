import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as Mapboxgl from 'mapbox-gl';

import { ListaCobradoresService } from '../../services/lista-cobradores.service';
import { reduce } from 'rxjs/operators';



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

    this.mapBox();
    this.AgregarMarcadores();
  }

  mapBox() {

    Mapboxgl.accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.5855149, 8.4192527], // LONGITUD , LATITUD
      zoom: 15 // starting zoom

    });
  }


  AgregarMarcadores() {

    this.coordenadasPagos = JSON.parse(localStorage.getItem('listapagos'));

    this.coordenadasPagos.forEach(item => {

      this.crearMarcador(item.Posy, item.PosX, item.Tipo);

      // console.log('ITEMS ', item);
       console.log('POSIDION X: ', item.PosX, ' POSIDION Y: ', item.Posy, ' TIPO: ', item.Tipo);

    });

  }

  crearMarcador(lng: number, lat: number, tipo: string) {

    console.log('tipo: ', tipo);


    if (tipo==="PAGO") {
      this.color= 'red';
      const marker1 = new Mapboxgl.Marker({ color: 'red' })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
    }else{
      this.color= 'black'
      const marker1 = new Mapboxgl.Marker({ color: 'black' })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
    }

    // const marker1 = new Mapboxgl.Marker({ color: this.color })
      // .setLngLat([lng, lat])
      // .addTo(this.mapa);
  }

}
