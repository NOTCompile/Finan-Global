import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarraNavegacionComponent } from '../../components/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-cambio-divisas-page',
  imports: [BarraNavegacionComponent],
  templateUrl: './cambio-divisas-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CambioDivisasPageComponent { }
