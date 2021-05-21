import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(value: string) {
    var datePipe = new DatePipe("es-ES");
     value = datePipe.transform(value, 'dd/MM/yyyy');
     return value;
 }

}
