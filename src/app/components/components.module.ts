import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MapaComponent } from './mapa/mapa.component';
import { MenuListaCobradoresComponent } from './menu-lista-cobradores/menu-lista-cobradores.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MapaComponent,
    MenuListaCobradoresComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [
    MapaComponent,
    MenuListaCobradoresComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
