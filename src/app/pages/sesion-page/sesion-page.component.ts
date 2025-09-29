import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '@environments/environment';


@Component({
  selector: 'app-sesion-page',
  imports: [RouterLink],
  templateUrl: './sesion-page.component.html',
  styleUrl: './sesion-page.component.css',  
})

export default class SesionPageComponent {
  envs = environment;
}
