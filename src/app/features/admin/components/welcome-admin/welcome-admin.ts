import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService';

@Component({
  selector: 'app-welcome-admin',
  imports: [],
  templateUrl: './welcome-admin.html',
  styleUrl: './welcome-admin.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeAdmin {
  /* User */
  private authData = inject(AuthService);
  usuario = this.authData.usuario;

  constructor() {
    this.updateDatetime();
    setInterval(() => this.updateDatetime(), 5000);
  }

  /* DateTime */
  datetimeNow = signal('');

  private updateDatetime() {
    const datetime = new Date();
    this.datetimeNow.set(
      datetime.toLocaleString('es-PE', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    );
  }
}
