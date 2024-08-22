import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature_t',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {

  getCelcius(fat:number){

  }
  getFarenhiet(cel:number){
    return cel * (9/5) + 32
  }
  transform(value: string | number | null) {
    if(value == null) return value;

    return value + ' Celcius';
  }
}
