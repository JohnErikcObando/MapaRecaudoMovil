import { Component, OnInit, ViewChild } from '@angular/core';
import { MapaComponent } from 'src/app/components/mapa/mapa.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(MapaComponent) mapa: MapaComponent;


 // Inicia el papa al cerrar el menu de usuarios
  cargarMapa() {
    this.mapa.ngOnInit();
  }

  ngOnInit(): void {


  }

}
