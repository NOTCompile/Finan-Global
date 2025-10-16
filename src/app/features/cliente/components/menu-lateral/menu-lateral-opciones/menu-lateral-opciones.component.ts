import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '@environments/environment';

interface MenuOpciones {
  icono: string,
  nombre: string,
  ruta: string,
}

@Component({
  selector: 'app-menu-lateral-opciones',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral-opciones.component.html',  
})
export class MenuLateralOpcionesComponent {
  envs = environment;

  menuOpciones: MenuOpciones[] = [
    {
      icono: 'fi fi-rs-grid',
      nombre: 'Dashboard',
      ruta: '/inicio-cliente/dashboard',
    },
    /* {
      icono: 'fi fi-rs-wallet',
      nombre: 'Mis Cuentas',
      ruta: '/inicio-cliente/cuentas',
    }, */
    {
      icono: 'fi fi-rs-money-bill-transfer',
      nombre: 'Transferencias',
      ruta: '/inicio-cliente/transferencias',
    },
    /* {
      icono: 'fi fi-rs-credit-card-buyer',
      nombre: 'Tarjetas',
      ruta: '/inicio-cliente/tarjetas',
    }, */
    /* {
      icono: 'fi fi-rs-loan',
      nombre: 'Préstamos',
      ruta: '/inicio-cliente/prestamos',
    }, */
    {
      icono: 'fi fi-rs-exchange',
      nombre: 'Cambio Divisas',
      ruta: '/inicio-cliente/divisas',
    },
    {
      icono: 'fi fi-rs-deposit-alt',
      nombre: 'Empeños',
      ruta: '/inicio-cliente/empenios',
    },
    {
      icono: 'fi fi-rs-user-headset',
      nombre: 'Atención al Cliente',
      ruta: '/inicio-cliente/atencion',
    },
    {
      icono: 'fi fi-rs-exit',
      nombre: 'Cerrar Sesion',
      ruta: '/iniciar-sesion',
    }
  ]
}
