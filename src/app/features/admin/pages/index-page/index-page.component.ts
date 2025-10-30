import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidebarAdmin } from '../../components/sidebar-admin/sidebar-admin';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';
import { RouterOutlet } from '@angular/router';
import { NavbarAdmin } from '../../components/navbar-admin/navbar-admin';

@Component({
  selector: 'app-index-page',
  imports: [SidebarAdmin, RouterOutlet, NavbarAdmin],
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
