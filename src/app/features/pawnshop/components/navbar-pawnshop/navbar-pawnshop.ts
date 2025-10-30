import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar-pawnshop',
  imports: [RouterLink],
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
  
  /* Usuario Actual */
  authData = inject(AuthService);
  get user() {
    return this.authData.usuario();
  }
}
