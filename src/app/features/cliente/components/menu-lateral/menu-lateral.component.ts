import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuLateralEncabezadoComponent } from "./menu-lateral-encabezado/menu-lateral-encabezado.component";
import { MenuLateralOpcionesComponent } from "./menu-lateral-opciones/menu-lateral-opciones.component";

@Component({
  selector: 'app-menu-lateral',
  imports: [MenuLateralEncabezadoComponent, MenuLateralOpcionesComponent],
  templateUrl: './menu-lateral.component.html',  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralComponent { 
  @Input() collapsed = false;
}
