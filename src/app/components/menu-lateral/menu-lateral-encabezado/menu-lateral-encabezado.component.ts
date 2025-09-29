import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-menu-lateral-encabezado',
  imports: [],
  templateUrl: './menu-lateral-encabezado.component.html',
  styleUrl: './menu-lateral-encabezado.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralEncabezadoComponent { 
  envs = environment;
}
