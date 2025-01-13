import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes'),
        //
    },

    {
        path: 'banca',
        loadChildren: () => import('./banca/features/banca.routes'),    
    },

    {
        path: '',
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
        redirectTo: '/',
    }
];
