import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';

@Component({
  selector: 'app-menu-lateral-encabezado',
  imports: [],
  templateUrl: './menu-lateral-encabezado.component.html',
})

export class MenuLateralEncabezadoComponent{
  envs = environment;

  constructor(private sidebarService: SidebarService) { }

  onToggleClick(): void { /* Nombre de la funcion */
    this.sidebarService.toggleSidebar();
  }
}
