import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as mapboxgl from 'mapbox-gl';

import { ListaCobradoresService } from '../../services/lista-cobradores.service';
import { reduce } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa: mapboxgl.Map;

  lng: string;
  lat: string;
  color: string;


  coordenadasPagos: any = [];


  constructor(private listaCobradoresService: ListaCobradoresService) { }

  ngOnInit(): void {

    this.mapBox();
    this.AgregarMarcadores();
    // this.LimpiarCoordenadas();

  }



  mapBox() {

    // MAPA MAPBOX
    mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.5855149, 8.4192527], // LONGITUD , LATITUD
      zoom: 5 // starting zoom

    });
  }

  mapDireccion(){

    mapboxgl.addControl(
      new mapboxgl.MapboxDirections({
          accessToken: mapboxgl.accessToken
      }),
      'top-left'
  );
  }



  AgregarMarcadores() {

    // LISTADO DE COORDENADAS GUARDADAS EN EL LOCALSTORANGE DE CADA COBRADOR
    this.coordenadasPagos = JSON.parse(localStorage.getItem('listapagos'));

    console.log('este es lo del local storange', this.coordenadasPagos);


    //VERIFICA SI LA VARIABLE ES DIFERENTE DE NULL
    // if (!this.coordenadasPagos == null) {

    // GENERANDO MARCADOR A CADA PAGO Y NOVEDAD EN EL LISTADOPAGOS
    this.coordenadasPagos.forEach(item => {

      this.crearMarcador(item.Posy, item.PosX, item.Tipo, item.IdContrato, item.Nombre, item.Valor);
      this.mapDireccion();
      console.log('POSIDION X: ', item.PosX, ' POSIDION Y: ', item.Posy, ' TIPO: ', item.Tipo);

    });

  }

  crearMarcador(lng: number, lat: number, tipo: string, contrato: string, nombre: string, valor: number) {

    // COLOR DEL MARCADO RESPECTO AL TIPO
    if (tipo === "PAGO") {
      this.color = 'red';
    } else {
      this.color = 'black'
    }

    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Tipo: ' + tipo + '  '+
      ' Contrato:' + contrato +
      ' Nombre: ' +nombre +
      ' Valor: $'+ valor
    );

    // AGREGAR MARCADORES AL MAPBOX

    const marker1 = new mapboxgl.Marker({ color: this.color })
      .setLngLat([lng, lat])
      .setPopup(popup) // sets a popup on this marker
      .addTo(this.mapa);
  }


  // LimpiarCoordenadas() {
  //   localStorage.removeItem('listapagos');
  // }

}
