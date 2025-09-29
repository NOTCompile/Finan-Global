import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'inicio-sesion',
        loadComponent: () => import('./pages/sesion-page/sesion-page.component'),
    },
    {
        path:'dashboard',
        loadComponent: () => import('./pages/dashboard-page/dashboard-page.component'),
    },
    {
        path: '**',
        redirectTo: 'inicio-sesion'
    }
];
