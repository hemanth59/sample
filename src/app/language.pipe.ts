import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  languageSet = {
    "TAMIL": {
      "HELLO": 'வணக்கம்'
    },
    "ENGLISH": {
      "HELLO": 'Hello'
    },
    "HINDHI": {
      "HELLO": 'नमस्कार'
    }
  }

  transform(value: any, ...args: any[]): any {
    let language = 'HINDHI';
    if(this.languageSet[language][value]){
      return this.languageSet[language][value];
    }
    return value;
    // return value + '1000';
  }

}
