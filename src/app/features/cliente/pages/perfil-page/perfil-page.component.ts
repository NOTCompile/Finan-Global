import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarraNavegacionComponent } from "../../components/barra-navegacion/barra-navegacion.component";
import { environment } from '@environments/environment';

@Component({
  selector: 'app-perfil-page',
  imports: [BarraNavegacionComponent],
  templateUrl: './perfil-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PerfilPageComponent {
  envs = environment;
}
