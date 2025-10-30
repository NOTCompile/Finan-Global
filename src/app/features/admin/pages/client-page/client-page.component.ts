import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Usuario } from 'src/app/shared/interfaces/UsuarioInterface';
import { usuarioService } from 'src/app/shared/services/usuarioService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-page',
  imports: [RouterLink],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientPage implements OnInit {
  usuarioServicio = inject(usuarioService);
  usuarios = signal<Usuario[]>([]);

  constructor() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.usuarioServicio.findByRol(4).subscribe({
      next: (data) => {
        this.usuarios.set(data);

        // Guardar en localStorage
        localStorage.setItem('usuarios', JSON.stringify(data));
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      },
    });
  }
  ngOnInit(): void {}

  editarUsuario() {
    throw new Error('Method not implemented.');
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioServicio.delete(id).subscribe({
        next: () => {
          alert('Usuario eliminado correctamente');
          this.usuarios.update((lista) => lista.filter((u) => u.id_usuario !== id));
        },
        error: (err) => {
          console.error('Error al eliminar usuario:', err);
          alert('No se pudo eliminar el usuario');
        },
      });
    }
  }
}
