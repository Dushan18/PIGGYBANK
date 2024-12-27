import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes'),
        //
    },
    {
        path: 'inicio',
        loadChildren: () => import('./inicio/features/inicio.routes'),
    },
    {
        path: 'nosotros',
        loadChildren: () => import('./nosotros/features/nosotros.routes'),
    },
    {
        path: 'contactos',
        loadChildren: () => import('./contactos/features/contactos.routes'),    
    },
    {
        path: '**',
        redirectTo: '/inicio',
    }
];
