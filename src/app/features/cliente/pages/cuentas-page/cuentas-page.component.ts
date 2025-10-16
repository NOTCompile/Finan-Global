import { ChangeDetectionStrategy, Component } from '@angular/core';
import ErrorPageComponent from "../error-page/error-page.component";

@Component({
  selector: 'app-cuentas-page',
  imports: [ErrorPageComponent],
  templateUrl: './cuentas-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CuentasPageComponent { }
