import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService';
import { SidebarService } from 'src/app/shared/services/sidebarService';

@Component({
  selector: 'app-navbar-client',
  imports: [],
  templateUrl: './navbar-client.html',
  styleUrl: './navbar-client.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarClient {
  constructor(private sidebarService: SidebarService, private authService: AuthService) {}

  onToggleClick(): void {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
