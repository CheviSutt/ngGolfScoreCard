import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameConf'
})
export class NameConfPipe implements PipeTransform {

  transform(name, names): any {

    let counter = 0;

    for (let i = 1; i < names.length; i++) {
      if (names[i] === name) {
        counter++;
      }

    }

    name = name + counter;
    if (name.endsWith('0')) {
      return name.substring(0, name.length - 1;
    } else {
      return name;
    }


  }

}
