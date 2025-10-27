import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService';
import { SidebarService } from 'src/app/shared/services/sidebarService';

@Component({
  selector: 'app-navbar-bank',
  imports: [],
  templateUrl: './navbar-bank.html',
  styleUrl: './navbar-bank.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarBank {
  constructor(private sidebarService: SidebarService, private authService: AuthService) {}

  onToggleClick(): void {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
