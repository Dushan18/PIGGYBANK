import { Routes } from "@angular/router";

export default [
    {
        path:'',
        loadComponent: () => import('./nosotros-page/nosotros-page.component'),
    }
] as Routes