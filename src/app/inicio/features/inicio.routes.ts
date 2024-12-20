import { Routes } from "@angular/router";

export default [
    {
        path:'',
        loadComponent: () => import('./inicio-page/inicio-page.component'),
    }
] as Routes