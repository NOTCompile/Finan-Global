import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OptionSidebarInterface } from 'src/app/shared/interfaces/OptionsSidebarInterface';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';
import optionsSidebar from '../../data/optionsSidebar.json'

@Component({
  selector: 'app-sidebar-pawnshop',
  imports: [RouterLink],
  templateUrl: './sidebar-pawnshop.html',
  styleUrl: './sidebar-pawnshop.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarPawnshop {
  optionSidebar: OptionSidebarInterface[] = optionsSidebar;
  constructor(private sidebarService: SidebarService) {}

  @Input() collapsed = false;

  onToggleClick(): void {
    /* Nombre de la funcion */
    this.sidebarService.toggleSidebar();
  }
}
