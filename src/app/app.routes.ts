import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/authGuard';

export const routes: Routes = [
  {
    path: 'index',
    loadComponent: () => import('./shared/pages/index-page/index-page.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./shared/pages/register-page/register-page.component'),
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/pages/index-page/index-page.component'),
    canActivate: [authGuard],
    data: { roles: [1] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/pages/dashboard-page/dashboard-page.component'),
      },
      {
        path: 'bank',
        loadComponent: () => import('./features/admin/pages/bank-page/bank-page.component'),
      },
      {
        path: 'card',
        loadComponent: () => import('./features/admin/pages/card-page/card-page.component'),
      },
      {
        path: 'client',
        loadComponent: () => import('./features/admin/pages/client-page/client-page.component'),
      },
      {
        path: 'user',
        loadComponent: () => import('./features/admin/pages/user-page/user-page.component'),
      },
      {
        path: 'transfer',
        loadComponent: () => import('./features/admin/pages/transfer-page/transfer-page.component'),
      },
      {
        path: 'pawnshop',
        loadComponent: () => import('./features/admin/pages/pawnshop-page/pawnshop-page.component'),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: 'bank',
    loadComponent: () => import('./features/bank/pages/index-page/index-page.component'),
    canActivate: [authGuard],
    data: { roles: [2] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/bank/pages/dashboard-page/dashboard-page.component'),
      },
      {
        path: 'client',
        loadComponent: () => import('./features/bank/pages/client-page/client-page.component'),
      },
      {
        path: 'solicitude',
        loadComponent: () =>
          import('./features/bank/pages/solicitude-page/solicitude-page.component'),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: 'client',
    loadComponent: () => import('./features/client/pages/index-page/index-page.component'),
    canActivate: [authGuard],
    data: { roles: [4] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/client/pages/dashboard-page/dashboard-page.component'),
      },
      {
        path: 'account',
        loadComponent: () => import('./features/client/pages/account-page/account-page.component'),
      },
      {
        path: 'customer-service',
        loadComponent: () =>
          import('./features/client/pages/customer-service-page/customer-service-page.component'),
      },
      {
        path: 'account-user',
        loadComponent: () => import('./features/client/pages/account-page/account-page.component'),
      },
      {
        path: 'cards',
        loadComponent: () => import('./features/client/pages/cards-page/cards-page.component'),
      },
      {
        path: 'transfer',
        loadComponent: () =>
          import('./features/client/pages/transfer-page/transfer-page.component'),
      },
      {
        path: 'currency',
        loadComponent: () =>
          import('./features/client/pages/currency-page/currency-page.component'),
      },
      {
        path: 'bank-loan',
        loadComponent: () =>
          import('./features/client/pages/bank-loan-page/bank-loan-page.component'),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: 'pawnshop',
    loadComponent: () => import('./features/pawnshop/pages/index-page/index-page.component'),
    canActivate: [authGuard],
    data: { roles: [3] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/pawnshop/pages/dashboard-page/dashboard-page.component'),
      },
      {
        path: 'client',
        loadComponent: () => import('./features/pawnshop/pages/client-page/client-page.component'),
      },
      {
        path: 'solicitude',
        loadComponent: () =>
          import('./features/pawnshop/pages/solicitude-page/solicitude-page.component'),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./shared/pages/not-found-page/not-found-page')
  },
];
