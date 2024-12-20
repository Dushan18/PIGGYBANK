import { Routes } from "@angular/router";

export default [
    {
        path:'',
        loadComponent: () => import('./contactos-page/contactos-page.component'),
    }
] as Routes