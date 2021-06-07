import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

// import moment paa formatear fecha
import * as moment from 'moment';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  moment = moment;

  transform(value: string) {
    let fecha = moment(value).format("yyyy-MM-DD");
    return fecha;
  }

}
