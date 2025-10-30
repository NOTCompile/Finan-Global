import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';
import { SidebarBank } from '../../components/sidebar-bank/sidebar-bank';
import { NavbarBank } from '../../components/navbar-bank/navbar-bank';

@Component({
  selector: 'app-index-page',
  imports: [RouterOutlet, SidebarBank, NavbarBank],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPageComponent {
  @Input() collapsed = false;
  /* Sidebar Control */
  isSidebarCollapsed = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.loadInitialState();

    this.sidebarService.collapsed$.subscribe((collapsed) => {
      this.isSidebarCollapsed = collapsed;
    });
  }
}
