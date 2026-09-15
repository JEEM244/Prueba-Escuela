import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from '../models/models';
import { StorageService } from './storage.service';

const SESSION_KEY = 'ce_session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storage = inject(StorageService);
  private readonly router = inject(Router);
  readonly currentUser = signal<User | null>(null);

  restore(): void {
    const id = localStorage.getItem(SESSION_KEY);
    this.currentUser.set(id ? this.storage.collection('usuarios').find((user) => user.id === id) ?? null : null);
  }

  login(email: string, password: string): User | null {
    const user = this.storage.collection('usuarios').find((candidate) => candidate.email.toLowerCase() === email.trim().toLowerCase() && candidate.password === password && candidate.activo) ?? null;
    if (user) { localStorage.setItem(SESSION_KEY, user.id); this.currentUser.set(user); }
    return user;
  }

  hasRole(role: Role): boolean { return this.currentUser()?.rol === role; }
  logout(): void { localStorage.removeItem(SESSION_KEY); this.currentUser.set(null); void this.router.navigate(['/login']); }
}
