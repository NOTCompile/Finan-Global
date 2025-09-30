import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-barra-navegacion',
  imports: [RouterLink],
  templateUrl: './barra-navegacion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraNavegacionComponent {
  envs = environment;
 }
