import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {

  transform(date: Date): string {
    const day = date.toLocaleString('en-us', {weekday: 'long'});

    return `Today is ${day}. What a beautiful day!`;
  }

}
