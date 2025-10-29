import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomeAdmin } from "../../components/welcome-admin/welcome-admin";
import { StatsCardAdmin } from "../../components/stats-card-admin/stats-card-admin";
import { ActivityAdmin } from "../../components/activity-admin/activity-admin";

@Component({
  selector: 'app-dashboard-page',
  imports: [WelcomeAdmin, StatsCardAdmin, ActivityAdmin],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
