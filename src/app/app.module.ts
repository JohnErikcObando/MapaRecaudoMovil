import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MapaComponent } from './components/mapa/mapa.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuListaCobradoresComponent } from './components/menu-lista-cobradores/menu-lista-cobradores.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    HomeComponent,
    MenuListaCobradoresComponent,
    ToolbarComponent,
    FormatoFechaPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
