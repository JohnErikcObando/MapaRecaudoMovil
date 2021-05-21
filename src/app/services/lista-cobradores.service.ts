import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TblusuarioModel } from '../models/tblusuario.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaCobradoresService {

  // ruta principal para conectarce al servidor
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCobradores() {
    return this.http.get(this.baseUrl + '/api/posicion/lstUsuario')
      .pipe(
        map((resp: TblusuarioModel[]) =>
          resp.map(cobrador => ({ id: cobrador.ID, nombre: cobrador.NOMBRES + ' ' + cobrador.APELLIDOS })
          )
        )
      );
  }
}
