import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-page',
  imports: [],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardPageComponent { }
