import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-index-page',
  imports: [RouterLink],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPageComponent { }
