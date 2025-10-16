import { ChangeDetectionStrategy, Component } from '@angular/core';
import ErrorPageComponent from "../error-page/error-page.component";

@Component({
  selector: 'app-tarjetas-page',
  imports: [ErrorPageComponent],
  templateUrl: './tarjetas-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TarjetasPageComponent { }
