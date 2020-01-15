import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CurrencyFormat'
})
export class CurrencyFormat implements PipeTransform {
  transform(
    value?: number
  ): string | null {

    if (value === null) {
      return '$';
    }

    const strValue = value.toString().replace('$', '').replace('.', '').replace(',', '');

    return '$' + strValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
