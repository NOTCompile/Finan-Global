import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebarService';
import { AuthService } from 'src/app/shared/services/authService';

@Component({
  selector: 'app-navbar-admin',
  imports: [],
  templateUrl: './navbar-admin.html',
  styleUrl: './navbar-admin.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarAdmin {
  constructor(private sidebarService: SidebarService, private authService: AuthService) {}

  onToggleClick(): void {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
