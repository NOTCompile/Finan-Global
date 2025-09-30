import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-menu-lateral-encabezado',
  imports: [],
  templateUrl: './menu-lateral-encabezado.component.html',
})
export class MenuLateralEncabezadoComponent { 
  envs = environment;
}
