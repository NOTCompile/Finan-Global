import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AddUserAdmin } from '../../components/modals/add-user-admin/add-user-admin';
import { Usuario } from 'src/app/shared/interfaces/UsuarioInterface';
import { ModalStateService } from 'src/app/shared/services/function/modalState.service';
import { usuarioService } from 'src/app/shared/services/usuarioService';

@Component({
  selector: 'app-user-page',
  imports: [AddUserAdmin],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserPageComponent {
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
    this.usuarioServicio.findAll().subscribe({
      next: (data) => {
        // Filtrar todos menos los del rol 4
        const filtrados = data.filter((usuario) => usuario.rol_usuario !== 4);
        this.usuarios.set(filtrados);
        localStorage.setItem('usuarios', JSON.stringify(filtrados));
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
    rol_usuario: 0, 
  });
    this.modalState.open();
  }

  demo(){}

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
        id_usuario: 0, // backend lo asigna
        nombre_usuario: usuarioData.nombre ?? '',
      } as Usuario;

      this.usuarioServicio.create(nuevoUsuario).subscribe({
        next: () => {
          alert('Usuario creado correctamente');
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
          alert('Usuario actualizado correctamente');
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
