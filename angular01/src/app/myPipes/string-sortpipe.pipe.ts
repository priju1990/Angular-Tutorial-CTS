import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSortpipe'
})
export class StringSortpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort() ;
  }

}
