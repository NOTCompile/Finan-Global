import { Component, effect, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from 'src/app/shared/interfaces/UsuarioInterface';
import { ModalStateService } from 'src/app/shared/services/function/modalState.service';

@Component({
  selector: 'app-add-client-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './add-client-admin.html',
  styleUrl: './add-client-admin.css',
})
export class AddClientAdmin {
  // Entradas
  @Input() modo: 'agregar' | 'editar' = 'agregar';
  @Input() set usuario(value: Partial<Usuario> | null) {
    if (value) {
      this._usuario = value;
      this.formAddCliente.patchValue(value);
    }
  }
  private _usuario: Partial<Usuario> | null = null;

  constructor() {
    effect(() => {
      if (this.modo === 'agregar') {
        this.formAddCliente.reset({
          sexo: 'Seleccione...',
        });
      } else if (this.modo === 'editar' && this._usuario) {
        this.formAddCliente.patchValue(this._usuario);
      }
    });
  }
  // Salida (evento al padre)
  @Output() guardar = new EventEmitter<Partial<Usuario>>();

  // Servicios e inyección de dependencias
  private fb = inject(FormBuilder);
  modalState = inject(ModalStateService);

  // Formulario reactivo
  formAddCliente: FormGroup = this.fb.group({
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
    if (this.formAddCliente.invalid) {
      this.formAddCliente.markAllAsTouched();
      return;
    }

    const datosFormulario = this.formAddCliente.value;

    // Emitir datos combinados
    const datosEmitidos: Partial<Usuario> = {
      ...this._usuario,
      ...datosFormulario,
    };

    this.guardar.emit(datosEmitidos);
  }
}
