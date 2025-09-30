import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '@environments/environment';
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";


interface Actividad {
  icon: string,
  texto: string,
  ruta: string,
}

@Component({
  selector: 'app-inicio-page',
  imports: [MenuLateralComponent, RouterOutlet],
  templateUrl: './inicio-page.component.html',    
})
export default class InicioPageComponent {

  envs = environment;

  actividadOpcion: Actividad[] = [
    {
      icon: 'fi fi-rs-file-invoice-dollar',
      texto: 'Abre una cuenta',
      ruta: '',
    },
    {
      icon: 'fi fi-rs-credit-card',
      texto: 'Obtener una tarjeta',
      ruta: '',
    },
    {
      icon: 'fi fi-rs-loan',
      texto: 'Solicitar un préstamo',
      ruta: '',
    },
    {
      icon: 'fi fi-rs-benefit-diamond-alt',
      texto: 'Ver mis beneficios',
      ruta: '',
    },
    {
      icon: 'fi fi-rs-interrogation',
      texto: 'Necesito ayuda',
      ruta: '',
    },    
  ]
}
