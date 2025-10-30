import { Component, effect, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from 'src/app/shared/interfaces/UsuarioInterface';
import { ModalStateService } from 'src/app/shared/services/function/modalState.service';

@Component({
  selector: 'app-add-user-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-admin.html',
  styleUrl: './add-user-admin.css',
})
export class AddUserAdmin {
  // Entradas
  @Input() modo: 'agregar' | 'editar' = 'agregar';
  @Input() set usuario(value: Partial<Usuario> | null) {
    if (value) {
      this._usuario = value;
      this.formAddUsuario.patchValue(value);
    }
  }
  private _usuario: Partial<Usuario> | null = null;

  constructor() {
    effect(() => {
      if (this.modo === 'agregar') {
        this.formAddUsuario.reset({
          sexo: 'Seleccione...',
        });
      } else if (this.modo === 'editar' && this._usuario) {
        this.formAddUsuario.patchValue(this._usuario);
      }
    });
  }
  // Salida (evento al padre)
  @Output() guardar = new EventEmitter<Partial<Usuario>>();

  // Servicios e inyección de dependencias
  private fb = inject(FormBuilder);
  modalState = inject(ModalStateService);

  // Formulario reactivo
  formAddUsuario: FormGroup = this.fb.group({
    dni_ruc: ['', [Validators.required, Validators.minLength(8)]],
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    direccion: [''],
    sexo: ['Seleccione...', Validators.required],
    telefono: ['', [Validators.required, Validators.minLength(9)]],
  });

  // Cerrar modal
  cerrarModal(): void {
    this.modalState.close();
  }

  // Enviar datos al componente padre
  onSubmit(): void {
    if (this.formAddUsuario.invalid) {
      this.formAddUsuario.markAllAsTouched();
      return;
    }

    const datosFormulario = this.formAddUsuario.value;

    // Emitir datos combinados
    const datosEmitidos: Partial<Usuario> = {
      ...this._usuario,
      ...datosFormulario,
    };

    this.guardar.emit(datosEmitidos);
  }
}
