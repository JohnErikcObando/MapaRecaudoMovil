import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './components/mapa/mapa.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  // {path:'', component: MapaComponent},
  {path:'home', component: HomeComponent},
  {path:'mapa', component: MapaComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
