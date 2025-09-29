import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from "src/app/components/menu-lateral/menu-lateral.component";


@Component({
  selector: 'app-dashboard-page',
  imports: [MenuLateralComponent, RouterOutlet],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { 
  
}
