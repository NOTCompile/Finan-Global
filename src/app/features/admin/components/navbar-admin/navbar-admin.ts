import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebarService';
import { AuthService } from 'src/app/shared/services/authService';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar-admin',
  imports: [RouterLink],
  templateUrl: './navbar-admin.html',
  styleUrl: './navbar-admin.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarAdmin {

  authData = inject(AuthService);

  constructor(private sidebarService: SidebarService, private authService: AuthService) {}

  onToggleClick(): void {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    this.authService.logout();
    location.reload();
  }

  /* Usuario Actual */
  get user(){
    return this.authData.user();
  }
}
