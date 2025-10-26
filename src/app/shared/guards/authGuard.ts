import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authService';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Si no detecta login, lo redirige a index
  const user = auth.user();
  if (!user) {
    console.warn('Usuario no autenticado. Redirigiendo al login...');
    router.navigate(['/index']);
    return false;
  }

  // Obtener roles de Route
  const allowedRoles = route.data['roles'] as number[];

  // Si la ruta no posee restricción de roles, permitir el acceso
  if (!allowedRoles || allowedRoles.length === 0) return true;

   // Validar si el rol del usuario está permitido
  if (allowedRoles.includes(user.rol_usuario)) return true;


  // Si no tiene permiso, redirigirlo a su vista correspondiente
  switch (user.rol_usuario) {
    case 1:
      router.navigate(['/admin']);
      break;
    case 2:
      router.navigate(['/bank']);
      break;
    case 3:
      router.navigate(['/pawnshop']);
      break;
    case 4:
      router.navigate(['/client']);
      break;
    default:
      router.navigate(['/index']);
      break;
  }

  const isLoggedIn = !!user;

  if (!auth.isLoggedIn()) {
    router.navigate(['/index']);
    return false;
  }

  // Verificar roles permitidos
  /* const allowedRoles = route.data?.['roles'] as number[] | undefined; */
  const userRole = user?.rol_usuario;

  if (allowedRoles && (!userRole || !allowedRoles.includes(userRole))) {
    console.warn(`Acceso denegado: rol ${user?.rol_usuario} no permitido en esta ruta`);
    router.navigate(['/index']);
    return false;
  }
  return true;
};
