import { Pipe, PipeTransform } from '@angular/core';
import { BreakMode } from './BreakMode';

@Pipe({
  name: 'breakLastWord'
})
export class BreakLastWordPipe implements PipeTransform {

  public transform(
    value: string, 
    mode: BreakMode = 'last',
    option?: number
  ): string {
    if (!value) return '';

    const WORDS = value.split(' ');

    switch (mode) {

      case 'last': {

        if (WORDS.length > 1) {
          const LAST_WORD = WORDS.pop();
          return `${WORDS.join(' ')}<br>${LAST_WORD}`;
        }
        
        return value;
      }

      case 'word': {
        if (option && option < WORDS.length) {
          const FIRST_PART = WORDS.slice(0, option).join(' ');
          const REST = WORDS.slice(option).join(' ');

          return `${FIRST_PART}<br>${REST}`;
        }

        return value;
      }

      case 'length': {
        if (option && value.length > option) {
          const FIRST_PART = value.slice(0, option);
          const REST = value.slice(option);

          return `${FIRST_PART}<br>${REST}`;
        }

        return value;
      }

      default:
        return value;
    }
  }
}
