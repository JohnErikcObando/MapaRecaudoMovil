import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

// models
import { TblusuarioModel } from '../models/tblusuario.models';
import { PosicionIstUser } from '../models/PosicionlstUser.models';

// rxjs
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ListaCobradoresService {

  // ruta principal para conectarce al servidor
  private baseUrl = environment.baseUrl;


  coordenadas: PosicionIstUser[] = [];

  constructor(private http: HttpClient) { }

  getCobradores() {
    return this.http.get(this.baseUrl + '/api/posicion/lstUsuario')
      .pipe(
        map((resp: TblusuarioModel[]) =>
          resp.map(cobrador => ({ username: cobrador.USERNAME, nombre: cobrador.NOMBRES + ' ' + cobrador.APELLIDOS })
          )
        )
      );
  }


  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return headers;
  }


  obtenerCordenadas(usuario: String, fecha: String) {

    let headers = this.getHeaders();
    return this.http.post(this.baseUrl + '/api/posicion/lstUser', { usuario, fecha }, { headers })
  }

}

