import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'inicio-sesion',
        loadComponent: () => import('./pages/sesion-page/sesion-page.component'),
    },
    {
        path:'dashboard',
        loadComponent: () => import('./pages/dashboard-page/dashboard-page.component'),
        children: [
            {
                path: 'inicio',
                loadComponent: () => import('./pages/inicio-page/inicio-page.component'),
            },
            {
                path: 'banca',
                loadComponent: () => import('./pages/banca-page/banca-page.component'),
            },
            {
                path: 'empenios',
                loadComponent: () => import('./pages/empenios-page/empenios-page.component'),
            },
            {
                path: 'atencion',
                loadComponent: () => import('./pages/atencion-cliente-page/atencion-cliente-page.component'),
            },
            {
                path: '**',
                redirectTo: 'inicio',
            }
        ],
    },
    {
        path: '**',
        redirectTo: 'inicio-sesion',
    }
];
