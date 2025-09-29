import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuLateralEncabezadoComponent } from "./menu-lateral-encabezado/menu-lateral-encabezado.component";
import { MenuLateralOpcionesComponent } from "./menu-lateral-opciones/menu-lateral-opciones.component";

@Component({
  selector: 'app-menu-lateral',
  imports: [MenuLateralEncabezadoComponent, MenuLateralOpcionesComponent],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralComponent { }
