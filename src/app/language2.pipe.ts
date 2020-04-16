import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language2'
})
export class Language2Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
