import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from './core/auth.store';

const tellerGuard = () => {
  const auth = inject(AuthStore);
  const router = inject(Router);
  return auth.isAuthenticated() ? true : router.createUrlTree(['/login']);
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    title: 'LPU Queue · Staff Login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'teller',
    title: 'LPU Queue · Teller',
    canActivate: [tellerGuard],
    loadComponent: () => import('./pages/teller/teller.page').then((m) => m.TellerPage),
  },
  {
    path: 'customer',
    title: 'LPU Queue · Get a Number',
    loadComponent: () => import('./pages/customer/customer.page').then((m) => m.CustomerPage),
  },
  {
    path: 'display',
    title: 'LPU Queue · Now Serving',
    loadComponent: () => import('./pages/display/display.page').then((m) => m.DisplayPage),
  },
  { path: '**', redirectTo: 'login' },
];
