import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mapa: Mapboxgl.Map;

  ngOnInit(): void {

    Mapboxgl.accessToken= environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.292947, 3.911550], // LONGITUD , LATITUD
      zoom: 16.6 // starting zoom
    });

  }

}
