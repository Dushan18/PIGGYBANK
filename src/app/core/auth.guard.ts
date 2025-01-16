import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStateService } from "../shared/data-access/auth-state.service";
import { map, tap } from "rxjs/operators";

export const privateGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authState = inject(AuthStateService);

    return authState.authState$.pipe(
        tap((state) => console.log("Auth State (Private Guard):", state)),
        map((state) => {
            if (!state) {
                return router.createUrlTree(['/auth/sign-in']); // Retorna UrlTree para navegación.
            }
            return true; // Permite la navegación.
        })
    );
};

export const publicGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authState = inject(AuthStateService);

    return authState.authState$.pipe(
        tap((state) => console.log("Auth State (Public Guard):", state)),
        map((state) => {
            if (state) {
                return router.createUrlTree(['/banca/home']); // Redirige si ya está autenticado.
            }
            return true; // Permite la navegación.
        })
    );
};
