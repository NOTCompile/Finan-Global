import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cards-page',
  imports: [],
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardsPageComponent { }
