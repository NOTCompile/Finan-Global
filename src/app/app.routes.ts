import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio-sesion',
        loadComponent: () => import('./cliente/pages/sesion-page/sesion-page.component'),
    },
    {
        path: 'inicio-cliente',
        loadComponent: () => import('./cliente/pages/inicio-page/inicio-page.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./cliente/pages/dashboard-page/dashboard-page.component'),
            },
            {
                path: 'cuentas',
                loadComponent: () => import('./cliente/pages/cuentas-page/cuentas-page.component'),
            },
            {
                path: 'transferencias',
                loadComponent: () => import('./cliente/pages/transferencia-page/transferencia-page.component'),
            },
            {
                path: 'tarjetas',
                loadComponent: () => import('./cliente/pages/tarjetas-page/tarjetas-page.component'),
            },
            {
                path: 'prestamos',
                loadComponent: () => import('./cliente/pages/prestamo-page/prestamo-page.component'),
            },
            {
                path: 'divisas',
                loadComponent: () => import('./cliente/pages/cambio-divisas-page/cambio-divisas-page.component'),
            },
            {
                path: 'empenios',
                loadComponent: () => import('./cliente/pages/empenios-page/empenios-page.component'),
            },
            {
                path: 'atencion',
                loadComponent: () => import('./cliente/pages/atencion-cliente-page/atencion-cliente-page.component'),
            },
            {
                path: 'cliente-perfil',
                loadComponent: () => import('./cliente/pages/perfil-page/perfil-page.component'),
            },
            {
                path: '**',
                redirectTo: 'dashboard',
            }
        ]
    },
{
    path: '**',
        redirectTo: 'inicio-sesion',
    }
];
