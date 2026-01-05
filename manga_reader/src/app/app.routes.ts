import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { AuthLayout } from './pages/auth-layout/auth-layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                component: Login
            }
        ],
    }
];
