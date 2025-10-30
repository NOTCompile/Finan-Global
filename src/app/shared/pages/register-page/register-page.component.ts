import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/UsuarioInterface';
import { usuarioService } from '../../services/usuarioService';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export default class RegisterPageComponent implements OnInit {
  errorMsg = signal('');
  usuarios: Usuario[] = [];

  constructor(private usuarioService: usuarioService, private router: Router){}

  form = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required]),
    dni_ruc: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  registerUser() {
    if (this.form.invalid) {
      this.errorMsg.set('Completa los campos correctamente')
    };

    const newUser: Partial<Usuario> = {
      correo: this.form.value.correo!,
      contrasena: this.form.value.contrasena!,
      dni_ruc: this.form.value.dni_ruc!,
      rol_usuario: 4, 
    };

    this.usuarioService.create(newUser as Usuario).subscribe({
      next: (response) => {
        alert('Registro exitoso, será redirigido para Iniciar Sesión ');
        this.router.navigate(['/index']); // enviado al login
      },
      error: (err) => {
        console.error('Error al registrar:', err);
        if (err.status === 400) {
          this.errorMsg.set('El correo o DNI ya están registrados.');
        } else {
          this.errorMsg.set('Error de conexión con el servidor.');
        }
      },
    });
  }
}
