import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-page',
  imports: [],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccountPageComponent { }
