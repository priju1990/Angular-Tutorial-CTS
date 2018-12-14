import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSort'
})
export class NumberSortPipe implements PipeTransform {
sortNumbers= function(first,second){

  return first-second
}

  transform(value: any, args?: any): any {
    return value.sort(this.sortNumbers);
  }

}
