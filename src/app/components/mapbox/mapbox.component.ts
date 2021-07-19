import { Component, OnInit, AfterViewInit, Input, OnDestroy } from '@angular/core';

// mapbox
import * as mapboxgl from 'mapbox-gl';
import { Subscription } from 'rxjs';


// conexion BD
import { environment } from 'src/environments/environment';


// Servicios
import { DatosConsultaService } from 'src/app/services/datos-consulta.service';



@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit, AfterViewInit, OnDestroy {


  mapa: mapboxgl.Map;


  @Input() coordenadasPagos: any = [];

  // Marcadores de pagos y novedade
  lng: string = "-75.5855149";
  lat: string = "8.4192527";
  zoom: number = 4.5;
  color: string;

  coordenadas: any = [];

  CoorSuscription: Subscription;


  constructor(private datosConsultaService: DatosConsultaService) { }

  ngOnInit(): void {
    //  inicializacion del mapa
    this.mapBox();
  }

  ngOnDestroy() {
    // destruye la subcripcion ya realizada
    this.CoorSuscription.unsubscribe();
  }


  ngAfterViewInit(): void {

    // Cacturamos las coordenas por un una suscription cuando cambia la variable
    this.CoorSuscription = this.datosConsultaService.coordenada$.subscribe(coordenada => {
      this.coordenadas = coordenada;
      console.log('mapbox ', coordenada);
      this.AgregarMarcadores();
    });

  }

  mapBox() {

    // MAPA MAPBOX
    mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat],//[-75.5855149, 8.4192527], // LONGITUD , LATITUD
      zoom: this.zoom//5 // starting zoom

    });

    // Control de zoom y rotacion
    this.mapa.addControl(new mapboxgl.NavigationControl());
    // Control de pantalla completa
    this.mapa.addControl(new mapboxgl.FullscreenControl());
    // Control de ubicacion
    this.mapa.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
  }


  AgregarMarcadores(coordenadas: any = []) {
    console.log('marcadores', coordenadas);

    // GENERANDO MARCADOR A CADA PAGO Y NOVEDAD EN EL LISTADOPAGOS
    this.coordenadas.forEach((item, index, array) => {

      // verificamos el ultimo pago o novedad realizada para la localicacion
      if (index === (array.length - 1)) {
        this.lng = item.Posy;
        this.lat = item.PosX;
        this.zoom = 15;
        console.log('ingreso a indice', index, "--", array.length - 1);

        // fly nos localiza la ultima coordenada de pago o novedad realizada
        this.mapa.flyTo({
          center: [item.Posy, item.PosX],
          speed: 0.9,
          zoom: 13
        });

      }

      this.crearMarcador(item.Posy, item.PosX, item.Tipo, item.IdContrato, item.Nombre, item.Valor);
      //   // console.log('POSIDION X: ', item.PosX, ' POSIDION Y: ', item.Posy, ' TIPO: ', item.Tipo);

    });


  }

  crearMarcador(lng: number, lat: number, tipo: string, contrato: string, nombre: string, valor: number) {

    // Color Del Marcador Dependiendo del Tipo
    if (tipo === "PAGO") {
      this.color = 'red';
    } else {
      this.color = 'black'
    }

    // crear el popup de cada marcador
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Tipo: ' + tipo + '  ' +
      ' Contrato:' + contrato +
      ' Nombre: ' + nombre +
      ' Valor: $' + valor
    );

    // Agregar MArcadores
    const marker = new mapboxgl.Marker({ color: this.color })
      .setLngLat([lng, lat])
      .setPopup(popup) // sets a popup on this marker
      .addTo(this.mapa);

  }


}

