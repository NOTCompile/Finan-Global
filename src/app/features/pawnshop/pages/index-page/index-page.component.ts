import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  imports: [],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class IndexPageComponent { }
