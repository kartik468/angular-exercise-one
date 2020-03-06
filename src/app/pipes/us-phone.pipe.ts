import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usPhone'
})
export class UsPhonePipe implements PipeTransform {
  transform(value: string): string {
    let returnValue: string;
    returnValue = '';

    if (value) {
      const phoneRe = new RegExp(`(\\d{1})(\\d{3})(\\d{3})(\\d{4})`);
      if (phoneRe.test(value)) {
        returnValue = value.replace(phoneRe, '$1-$2-$3-$4');
        console.log(returnValue);
      }
    }

    return returnValue;
  }
}
