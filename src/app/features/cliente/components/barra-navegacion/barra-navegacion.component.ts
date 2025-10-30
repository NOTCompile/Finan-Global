import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '@environments/environment';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';

@Component({
  selector: 'app-barra-navegacion',
  imports: [RouterLink],
  templateUrl: './barra-navegacion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraNavegacionComponent {
  envs = environment;

  constructor(private sidebarService: SidebarService) { }

  onToggleClick(): void { /* Nombre de la funcion */
    this.sidebarService.toggleSidebar();
  }
}
