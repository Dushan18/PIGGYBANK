import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
    {
        canActivateChild: [publicGuard],
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes'),
        //
    },

    {
        canActivateChild: [privateGuard],
        path: 'banca',
        loadComponent: () => import('./shared/ui/layout.component'),
        loadChildren: () => import('./banca/features/banca.routes'),    
    },

    {
        // canActivateChild: [publicGurad()],
        path: '',
        loadChildren: () => import('./inicio/features/inicio.routes'),
    },
    {
        // canActivateChild: [publicGurad()],
        path: 'nosotros',
        loadChildren: () => import('./nosotros/features/nosotros.routes'),
    },
    {
        // canActivateChild: [publicGurad()],
        path: 'contactos',
        loadChildren: () => import('./contactos/features/contactos.routes'),    
    },
    {
        path: '**',
        redirectTo: '/',
    }
];
