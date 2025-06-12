import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "simple-crm-d2ef9", appId: "1:1869715295:web:d86fffa19fdf19248148ea", storageBucket: "simple-crm-d2ef9.firebasestorage.app", apiKey: "AIzaSyBwIJ6ZgEqCpACLu3r8LZ5m5e8mkdwQj9g", authDomain: "simple-crm-d2ef9.firebaseapp.com", messagingSenderId: "1869715295" })), provideFirestore(() => getFirestore())]
};
