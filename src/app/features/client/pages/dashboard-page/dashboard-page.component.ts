import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomeClient } from "../../components/welcome-client/welcome-client";

@Component({
  selector: 'app-dashboard-page',
  imports: [WelcomeClient],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
