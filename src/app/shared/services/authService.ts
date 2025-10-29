import { computed, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/UserInterface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/api/usuarios';

  // Signal reactivo de usuario actual
  user = signal<User | null>(null);
  // Saber si hay sesión
  isLoggedIn = computed(() => !!this.user());

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem('user');
    if (stored) {
      this.user.set(JSON.parse(stored));
    }
  }

  login(correo: string, contrasena: string) {
    const body = { correo, contrasena };
    return this.http.post<User>(`${this.apiUrl}/login`, body).pipe(
      tap(userLogin => {
        this.user.set(userLogin);
        localStorage.setItem('user', JSON.stringify(userLogin));
      })
    );
  }

  logout() {
    this.user.set(null);
    localStorage.removeItem('user');
  }

  getRole() {
    return this.user()?.rol_usuario ?? '';
  }
}
