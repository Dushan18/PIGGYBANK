import { Routes } from "@angular/router";

export default [
    {
        path:'home',
        loadComponent: () => import('./home/home.component'),
    },
    
] as Routes;