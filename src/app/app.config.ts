import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  
  // FUNCIONALIDAD COMO LAS IMPORTACIONES
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,

      }),
    ), 
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
  ]
};
