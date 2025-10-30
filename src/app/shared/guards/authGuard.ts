import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authService';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Si no detecta login, lo redirige a index
  const usuario = auth.usuario();
  if (!usuario) {
    console.log('Usuario no autenticado. Redirigiendo al login...');
    router.navigate(['/index']);
    return false;
  }

  // Obtener roles de Route
  const allowedRoles = route.data['roles'] as number[];

  // Si la ruta no posee restricción de roles, permitir el acceso
  if (!allowedRoles.includes(usuario.rol_usuario)) {
    let rol = '';
    switch (usuario.rol_usuario) {
      case 1:
        rol = 'Administrador';
        router.navigate(['/admin']);
        break;
      case 2:
        rol = 'Banco';
        router.navigate(['/bank']);
        break;
      case 3:
        rol = 'Empeño';
        router.navigate(['/pawnshop']);
        break;
      case 4:
        rol = 'Cliente';
        router.navigate(['/client']);
        break;
      default:
        rol = 'Desconocido';
        /* window.location.reload(); */
        router.navigate(['/index']);
        break;
    }
    alert(`Acceso denegado: El Rol ${rol} no permitido en esta ruta`);
    return false;
  }
  return true;
};
