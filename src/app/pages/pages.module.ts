import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

// Components
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { MapaComponent } from './mapa/mapa.component';


@NgModule({
  declarations: [
    HomeComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    MapaComponent
  ],
})
export class PagesModule { }
