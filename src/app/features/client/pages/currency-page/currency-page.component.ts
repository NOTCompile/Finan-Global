import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-currency-page',
  imports: [],
  templateUrl: './currency-page.component.html',
  styleUrl: './currency-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CurrencyPageComponent { }
