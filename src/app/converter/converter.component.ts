import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConverterComponent {

  currencyForm = new FormGroup({
    sum: new FormControl(''),
    fromCurrency: new FormControl(''),
    toCurrency: new FormControl(''),
  });

  public currenciesCodes: string[] = [
    'ILS',
    'USD',
    'EUR',
    'AUD',
    'CAD',
    'CHF',
    'CNY',
    'GBP',
    'JPY',
    'MXN',
    'NZD',
    'KRW',
    'RUB'
  ];

  constructor() { }



}
