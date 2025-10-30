import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/authService';

@Component({
  selector: 'app-index-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css',
  standalone: true,
})
export default class IndexPageComponent {
  errorMsg = signal('');

  form = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.form.invalid) return;

    const { correo, contrasena } = this.form.value;

    this.auth.login(correo!, contrasena!).subscribe({
      next: (user) => {
        const role = user.rol_usuario;
        switch (role) {
          case 1:
            this.router.navigate(['/admin']);
            break;
          case 2:
            this.router.navigate(['/bank']);
            break;
          case 3:
            this.router.navigate(['/pawnshop']);
            break;
          case 4:
            this.router.navigate(['/client']);
            break;
          default:
            this.router.navigate(['/index']);
            break;
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.errorMsg.set('Correo o contraseña incorrectos');
        } else {
          this.errorMsg.set('Error de conexión con el servidor');
        }
      },
    });
  }
}
