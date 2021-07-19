import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { MenuComponent } from './menu/menu.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';





@NgModule({
  declarations: [
    ToolbarComponent,
    MapboxComponent,
    MenuComponent,
    ListaUsuariosComponent
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
    ToolbarComponent,
    MenuComponent,
    ListaUsuariosComponent,
    MapboxComponent
  ]
})
export class ComponentsModule { }
