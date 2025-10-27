import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService';
import { SidebarService } from 'src/app/shared/services/sidebarService';

@Component({
  selector: 'app-navbar-pawnshop',
  imports: [],
  templateUrl: './navbar-pawnshop.html',
  styleUrl: './navbar-pawnshop.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarPawnshop {
  constructor(private sidebarService: SidebarService, private authService: AuthService) {}

  onToggleClick(): void {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
