import { Injectable, signal } from '@angular/core';
import { Database } from '../models/models';

const STORAGE_KEY = 'centroEscolarDB_v2';

@Injectable({ providedIn: 'root' })
export class StorageService {
  readonly ready = signal(false);
  private database: Database | null = null;

  async init(): Promise<void> {
    if (this.database) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      this.database = JSON.parse(saved) as Database;
      this.migrateSupportRole();
      this.persist();
    } else {
      const response = await fetch('assets/data/seed.json');
      this.database = await response.json() as Database;
      this.persist();
    }
    this.ready.set(true);
  }

  get db(): Database {
    if (!this.database) throw new Error('StorageService aún no ha sido inicializado.');
    return this.database;
  }

  collection<K extends keyof Database>(key: K): Database[K] { return this.db[key]; }
  save<K extends keyof Database>(key: K, value: Database[K]): void { this.db[key] = value; this.persist(); }
  makeId(prefix: string): string { return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`; }
  reset(): void { localStorage.removeItem(STORAGE_KEY); window.location.reload(); }
  private persist(): void { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.database)); }
  private migrateSupportRole(): void {
    const support = this.database?.usuarios.find((user) => user.email === 'mantenimiento@test.com' || (user.rol as string) === 'MANTENIMIENTO');
    if (support) { support.nombre = 'Sofía Soporte'; support.email = 'soporte@test.com'; support.rol = 'SOPORTE'; }
  }
}
