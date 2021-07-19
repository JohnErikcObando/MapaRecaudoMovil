import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MapboxComponent } from 'src/app/components/mapbox/mapbox.component';

// Servicios
import { DatosConsultaService } from 'src/app/services/datos-consulta.service';
import { ListaCobradoresService } from 'src/app/services/lista-cobradores.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  showFiller = false;
  btnCobradores = true;

  @ViewChild(MapboxComponent) mapbox: MapboxComponent;


  cuadre: string;

  coordenadasPagos: any = [];

  usuario: string;
  fecha: string;
  cobrador: string;

  suscription: Subscription

  constructor(private listaCobradoresService: ListaCobradoresService,
    private datosConsultaService: DatosConsultaService) { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
    console.log('Observable cerrado');

  }


  receiveMessage($event) {

    console.log('cuadre mapa: ', $event);

    this.cobrador = $event.cobrador;
    this.usuario = $event.usuario;
    this.fecha = $event.fecha;

    this.consultarCuadreCaja();
    this.consultarPagos();
    this.mapbox.ngAfterViewInit();
  }

  // Consultar cuadre de caja por usuario
  consultarCuadreCaja() {

    console.log('caja cuadre', this.usuario, this.fecha);

    this.listaCobradoresService.obtenerCuadreCaja(this.usuario, this.fecha)
      .subscribe((resp: any) => {
        // this.cuadre = "Fecha: " + moment(resp.fecha).format("yyyy-MM-DD") +
        this.cuadre = " Anulados: " + resp.CANTIDADANULADOS +
          "   Novedades: " + resp.CANTIDADNOVEDADES +
          "   Pagos: " + resp.CANTIDADPAGOS +
          "   Total : " + "$" + resp.VALORPAGOS
      });
  }


  // consultar pagos por usuairo
  consultarPagos() {

    this.listaCobradoresService.obtenerCordenadas(this.usuario, this.fecha)
      .subscribe((resp: any) => {
        this.coordenadasPagos = resp;
        this.datosConsultaService.coordenada$.emit(this.coordenadasPagos);
        // console.log('json coordenadas mapa', JSON.parse(this.coordenadasPagos));
        console.log('json coordenadas mapa', this.coordenadasPagos);
      });

  }

}

