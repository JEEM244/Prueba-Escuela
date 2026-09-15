import { bootstrapApplication } from '@angular/platform-browser';
import { provideAppInitializer, inject } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { StorageService } from './app/core/services/storage.service';
import { AuthService } from './app/core/services/auth.service';

bootstrapApplication(AppComponent, { providers: [provideRouter(routes), provideAppInitializer(() => { const storage = inject(StorageService); const auth = inject(AuthService); return storage.init().then(() => auth.restore()); })] }).catch((error: unknown) => console.error(error));
