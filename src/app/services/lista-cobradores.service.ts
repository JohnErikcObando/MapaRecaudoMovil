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
          resp.map(cobrador => ({ USERNAME: cobrador.USERNAME, nombre: cobrador.NOMBRES + ' ' + cobrador.APELLIDOS })
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


  obtenerCordenadas(usuario: string, fecha :string) {

    // let params = new HttpParams().append('usuario', '1801');
    // params.append('fecha', '2021-04-28')


    // const headers = new HttpHeaders({
    //   Usuario: '1801',
    //   Fecha: '2021-04-28'
    // })

    // const headers = { 'content-type': '/application/json'}
    // const body=JSON.stringify({
    //   Usuario: '1801',
    //   Fecha: '2021-04-28'
    // });

    // return this.http.post(this.baseUrl + '/api/posicion/lstUser', {
    //   Usuario: '1801',
    //   Fecha: '2021-04-28'
    // })

    // const headers = { 'content-type': 'application/json'}
    // const body=JSON.stringify({
    //    Usuario: '1801',
    //    Fecha: '2021-04-28'
    // });
    // console.log(body)
    // return this.http.post(this.baseUrl + '/api/posicion/lstUser' , body ,{'headers':headers})

    let headers = this.getHeaders();

    return this.http.post(this.baseUrl + '/api/posicion/lstUser',  {usuario, fecha},{ headers })


  }

}


// Id: resp.Id, posx: resp.PosX, posy: resp.Posy, tipo: resp.Tipo, Idcontrato: resp.IdContrato, valor: resp.Valor
