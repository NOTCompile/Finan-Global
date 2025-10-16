import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { BarraNavegacionComponent } from '../../components/barra-navegacion/barra-navegacion.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-dashboard-page',
  imports: [BarraNavegacionComponent, RouterLink],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {
  envs = environment;
}
