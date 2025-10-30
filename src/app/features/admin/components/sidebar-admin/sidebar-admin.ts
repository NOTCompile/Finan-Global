import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OptionSidebarInterface } from 'src/app/shared/interfaces/OptionsSidebarInterface';
import optionsSidebar from '../../data/optionsSidebar.json';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';

@Component({
  selector: 'app-sidebar-admin',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-admin.html',
  styleUrl: './sidebar-admin.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarAdmin {
  optionSidebar: OptionSidebarInterface[] = optionsSidebar;
  constructor(private sidebarService: SidebarService) {}

  @Input() collapsed = false;

  onToggleClick(): void {
    /* Nombre de la funcion */
    this.sidebarService.toggleSidebar();
  }
}
