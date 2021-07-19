import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';

import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ComponentsModule,
    PagesModule
  ],

  exports: [

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
