import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OptionSidebarInterface } from 'src/app/shared/interfaces/OptionsSidebarInterface';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';
import optionsSidebar from '../../data/optionsSidebar.json';

@Component({
  selector: 'app-sidebar-bank',
  imports: [RouterLink],
  templateUrl: './sidebar-bank.html',
  styleUrl: './sidebar-bank.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarBank {
  optionSidebar: OptionSidebarInterface[] = optionsSidebar;
  constructor(private sidebarService: SidebarService) {}

  @Input() collapsed = false;

  onToggleClick(): void {
    /* Nombre de la funcion */
    this.sidebarService.toggleSidebar();
  }
}
