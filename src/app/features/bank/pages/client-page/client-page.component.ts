import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-client-page',
  imports: [],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientPageComponent { }
