import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar-bank',
  imports: [RouterLink],
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

  /* Usuario Actual */
  authData = inject(AuthService);
  get user() {
    return this.authData.usuario();
  }
}
