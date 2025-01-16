import { Component, inject } from "@angular/core"
import { Router, RouterModule } from "@angular/router";
import { AuthStateService } from "../data-access/auth-state.service";

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'app-layout',
    template: `
        <nav class="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-10 shadow-xl">
            <!-- Logo con Imagen -->
            <div class="flex items-center space-x-2 sm:space-x-4">
                <img src="img/img_11.jpeg" alt="Kututu Logo" class="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full" />
                <a
                class="text-xl sm:text-2xl font-bold whitespace-nowrap"
                routerLink="/banca/home"
                >
                Kututu Piggy
                </a>
            </div>

            <!-- Botón de Salir -->
            <button
                type="button"
                class="hidden sm:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                (click)="logOut()"
            >
                Salir
            </button>

            <!-- Botón de Salir para móviles -->
            <button
                type="button"
                class="sm:hidden bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                (click)="logOut()"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                </svg>
            </button>
        </nav>
        <router-outlet />
    `,
})
export default class LayoutCompoent {

    private _authState = inject(AuthStateService)
    private _router = inject(Router)

    

    async logOut() {
        await this._authState.logOut()
        this._router.navigateByUrl('/');
    }
    constructor() {
    }

}