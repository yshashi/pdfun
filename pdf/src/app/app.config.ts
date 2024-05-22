import { ApplicationConfig } from '@angular/core'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideClientHydration } from '@angular/platform-browser'
import { provideFileRouter } from '@analogjs/router'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { provideStorage, getStorage } from '@angular/fire/storage'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'

const firebaseConfig = JSON.parse(import.meta.env['VITE_FIREBASE_CONFIG'])
export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideClientHydration(),
    provideHttpClient(withFetch()),

    // Firebase
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
  ],
}
