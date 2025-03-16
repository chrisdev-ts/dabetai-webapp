import { Routes } from '@angular/router';
import { AuthRoutes } from './auth/auth.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ...AuthRoutes,
    ...DashboardRoutes,
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];
