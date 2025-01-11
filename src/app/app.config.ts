import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideFirebaseApp(() => 
      initializeApp({ 
        "projectId": "piggybank-bedaa", 
        "appId": "1:685430236535:web:0f205a5b34449ec963ad72", 
        "storageBucket": "piggybank-bedaa.firebasestorage.app", 
        "apiKey": "AIzaSyBKVfzXKSmuWoJ87GCHowuOQkOwu94HIC0", 
        "authDomain": "piggybank-bedaa.firebaseapp.com", 
        "messagingSenderId": "685430236535", "measurementId": "G-DXQR49DTH8" 
      })
    ), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ]
};
