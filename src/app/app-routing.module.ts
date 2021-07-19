import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components ruta
import { HomeComponent } from './pages/home/home.component';
import { MapaComponent } from './pages/mapa/mapa.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'mapa', component: MapaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'mapa' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
