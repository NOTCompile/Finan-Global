import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarraNavegacionComponent } from "../../components/barra-navegacion/barra-navegacion.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transferencia-page',
  imports: [BarraNavegacionComponent],
  templateUrl: './transferencia-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransferenciaPageComponent { }
