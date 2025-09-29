import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '@environments/environment';

interface MenuOpciones {
  nombre: string,
  ruta: string,
}

@Component({
  selector: 'app-menu-lateral-opciones',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral-opciones.component.html',
  styleUrl: './menu-lateral-opciones.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralOpcionesComponent {
  envs = environment;

  menuOpciones: MenuOpciones[] = [
    {
      nombre: 'Inicio',
      ruta: '/dashboard/inicio',
    },
    {
      nombre: 'Banca por Internet',
      ruta: '/dashboard/banca',
    },
    {
      nombre: 'Casa de Empeños',
      ruta: '/dashboard/empenios',
    },
    {
      nombre: 'Atención al Cliente',
      ruta: '/dashboard/atencion',
    },
    {
      nombre: 'Cerrar Sesion',
      ruta: '/iniciar-sesion',
    }
  ]
}
