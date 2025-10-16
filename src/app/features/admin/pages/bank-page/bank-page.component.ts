import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bank-page',
  imports: [],
  templateUrl: './bank-page.component.html',
  styleUrl: './bank-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BankPageComponent { }
