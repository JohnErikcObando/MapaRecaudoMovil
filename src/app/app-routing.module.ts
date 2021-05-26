import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {path:'mapa', component: MapaComponent},
  {path:'', component: DatePickerComponent},
  {path:'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
