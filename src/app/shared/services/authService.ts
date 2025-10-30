import { computed, inject, Injectable, signal } from '@angular/core';
import { Usuario } from '../interfaces/UsuarioInterface';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs';
import { usuarioService } from './usuarioService';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/api/usuarios';

  // Signal reactivo de usuario actual
  usuario = signal<Usuario | null>(null);
  // Saber si hay sesión
  isLoggedIn = computed(() => !!this.usuario());

  //Inyeccion de dependencias
  private http = inject(HttpClient);
  private usuarioService = inject(usuarioService);

  constructor() {
    const stored = localStorage.getItem('usuario');
    if (stored) {
      this.usuario.set(JSON.parse(stored));
    }
  }

  login(correo: string, contrasena: string) {
    const body = { correo, contrasena };

    return this.http.post<Usuario>(`${this.apiUrl}/login`, body).pipe(
      switchMap((usuarioLogin) => {
        /* Guardar usuario base */
        this.usuario.set(usuarioLogin);
        localStorage.setItem('usuario', JSON.stringify(usuarioLogin));

        /* Según el rol, decide qué cargar */
        if ([1, 2, 3].includes(usuarioLogin.rol_usuario)) {
          /* Cargar toda la data del sistema */
          console.log('Cargando data global del sistema...');
          return this.usuarioService.findByRol(usuarioLogin.rol_usuario).pipe(
            tap((usuarios) => {
              localStorage.setItem('usuarios', JSON.stringify(usuarios));
              console.log('Usuarios cargados en localStorage ✅');
            }),
            /* Retornar el usuario actual (para mantener la respuesta del login) */
            switchMap(() =>
              this.usuarioService.getById(usuarioLogin.id_usuario).pipe(
                tap((usuarioCompleto) => {
                  this.usuario.set(usuarioCompleto);
                  localStorage.setItem('usuario', JSON.stringify(usuarioCompleto));
                })
              )
            )
          );
        } else {
          /* Rol cliente → cargar solo su información */
          console.log('Cargando datos personales del cliente...');
          return this.usuarioService.getById(usuarioLogin.id_usuario).pipe(
            tap((usuarioCompleto) => {
              this.usuario.set(usuarioCompleto);
              localStorage.setItem('usuario', JSON.stringify(usuarioCompleto));
              console.log('Datos del cliente cargados');
            })
          );
        }
      })
    );
  }

  logout() {
    this.usuario.set(null);
    localStorage.removeItem('usuario');
  }

  getRole() {
    return this.usuario()?.rol_usuario ?? '';
  }
}
