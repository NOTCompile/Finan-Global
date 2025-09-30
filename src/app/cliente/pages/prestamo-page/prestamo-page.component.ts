import { ChangeDetectionStrategy, Component } from '@angular/core';
import ErrorPageComponent from "../error-page/error-page.component";

@Component({
  selector: 'app-prestamo-page',
  imports: [ErrorPageComponent],
  templateUrl: './prestamo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrestamoPageComponent { }
