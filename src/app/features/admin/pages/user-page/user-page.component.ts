import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserPageComponent { }
