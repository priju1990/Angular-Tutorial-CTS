import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==null){
      return value
    }
    return value.filter(function(v){

       return v.name.toLowerCase().startsWith(args.toLowerCase()) //check if the user json obj starts with the arg (the text entered in the search)
    //  return v.name.toLowerCase().includes(args.toLowerCase()) // check if the user json obj has the arg passed to it
    })

    
  }

}
