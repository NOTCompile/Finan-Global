import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from 'src/app/shared/services/function/sidebarState.service';
import { NavbarPawnshop } from "../../components/navbar-pawnshop/navbar-pawnshop";
import { SidebarPawnshop } from "../../components/sidebar-pawnshop/sidebar-pawnshop";

@Component({
  selector: 'app-index-page',
  imports: [RouterOutlet, NavbarPawnshop, SidebarPawnshop],
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
