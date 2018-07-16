import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameConf'
})
export class NameConfPipe implements PipeTransform {

  transform(name, names): any {

    let counter = 0;
    // counter is equal to zero everytime this is run

    for (let i = 1; i < names.length; i++) {
      // i equals one, so it doesn't count first name in array
      if (names[i] === name) {
        // iterates through names and compares it to the name passed into pipe
        counter++;
        // counter goes up for every match of the name passed in
      }
    }

    name = name + counter;
    // name always equals name + counter
    if (name.endsWith('0')) {
      // if name ends with zero, remove zero and return name
      return name.substring(0, name.length - 1);
    } else {
      return name;
    //  return name with counter which shows place of name
      }
    }

}
