import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa: Mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {

    Mapboxgl.accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.292947, 3.911550], // LONGITUD , LATITUD
      zoom: 16.6 // starting zoom
    });

  }

}
