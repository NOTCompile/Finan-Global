import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from 'src/app/shared/interfaces/UsuarioInterface';
import { usuarioService } from 'src/app/shared/services/usuarioService';
import { ModalStateService } from 'src/app/shared/services/function/modalState.service';
import { AddClientAdmin } from '../../components/modals/add-client-admin/add-client-admin';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [AddClientAdmin],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientPage implements OnInit {
  // Servicios
  private usuarioServicio = inject(usuarioService);
  private modalState = inject(ModalStateService);

  // Estado reactivo
  usuarios = signal<Usuario[]>([]);
  modo = signal<'agregar' | 'editar'>('agregar');
  usuarioSeleccionado = signal<Partial<Usuario> | null>(null);

  // Computed: total de usuarios
  totalUsuarios = computed(() => this.usuarios().length);

  // Ciclo de vida
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  /** Carga usuarios de rol 4 (clientes) */
  cargarUsuarios(): void {
    this.usuarioServicio.findByRol(4).subscribe({
      next: (data) => {
        this.usuarios.set(data);
        localStorage.setItem('usuarios', JSON.stringify(data));
      },
      error: (err) => console.error('Error al obtener usuarios:', err),
    });
  }

  /** Abrir modal para agregar nuevo cliente */
  abrirModalAgregar(): void {
    this.modo.set('agregar');
    this.usuarioSeleccionado.set({
    dni_ruc: '',
    correo: '',
    contrasena: '',
    nombre: '',
    apellidos: '',
    direccion: '',
    sexo: 'Seleccione...',
    telefono: '',
    rol_usuario: 4, 
  });
    this.modalState.open();
  }

  /** Abrir modal para editar cliente existente */
  abrirModalEditar(usuario: Usuario): void {
    this.modo.set('editar');
    this.usuarioSeleccionado.set(usuario);
    this.modalState.open();
  }

  /** Guardar (crear o actualizar) usuario */
  onGuardar(usuarioData: Partial<Usuario>): void {
    const modoActual = this.modo();

    if (modoActual === 'agregar') {
      const nuevoUsuario: Usuario = {
        ...usuarioData,
        rol_usuario: 4,
        id_usuario: 0, // backend lo asigna
        nombre_usuario: usuarioData.nombre ?? '',
      } as Usuario;

      this.usuarioServicio.create(nuevoUsuario).subscribe({
        next: () => {
          alert('Cliente creado correctamente');
          this.cargarUsuarios(); // recarga sin reload
          this.modalState.close();
        },
        error: (err) => console.error('Error al crear cliente:', err),
      });
    } else {
      const usuarioEditado: Usuario = {
        ...this.usuarioSeleccionado()!,
        ...usuarioData,
      } as Usuario;

      this.usuarioServicio.update(usuarioEditado).subscribe({
        next: () => {
          alert('Cliente actualizado correctamente');
          this.cargarUsuarios(); // recarga sin reload
          this.modalState.close();
        },
        error: (err) => console.error('Error al actualizar cliente:', err),
      });
    }
  }

  /** Eliminar usuario */
  eliminarUsuario(id: number): void {
    if (!confirm('¿Estás seguro de que deseas eliminar este usuario?')) return;

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