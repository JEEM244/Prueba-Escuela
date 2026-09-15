import { Routes } from '@angular/router';
import { roleGuard } from './core/guards/role.guard';
import { DashboardComponent } from './shared/layouts/dashboard.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadComponent: () => import('./login.component').then((m) => m.LoginComponent) },
  { path: 'admin', component: DashboardComponent, canActivate: [roleGuard('ADMIN')] },
  { path: 'alumno', component: DashboardComponent, canActivate: [roleGuard('ALUMNO')] },
  { path: 'padre', component: DashboardComponent, canActivate: [roleGuard('PADRE')] },
  { path: 'soporte', component: DashboardComponent, canActivate: [roleGuard('SOPORTE')] },
  { path: '**', redirectTo: 'login' }
];
