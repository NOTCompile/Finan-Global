import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService';

@Component({
  selector: 'app-welcome-client',
  imports: [],
  templateUrl: './welcome-client.html',
  styleUrl: './welcome-client.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeClient {
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
