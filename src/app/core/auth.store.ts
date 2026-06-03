import { Injectable, computed, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Role = 'teller' | 'admin';

export interface Session {
  username: string;
  role: Role;
  serviceType: 'cashier' | 'registrar';
}

const STORAGE_KEY = 'lpu-queue-session-v1';

/** Mock auth. Any non-empty credentials pass; this is a frontend draft. */
@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly _session = signal<Session | null>(this.load());

  readonly session = this._session.asReadonly();
  readonly isAuthenticated = computed(() => this._session() !== null);

  login(session: Session): void {
    this._session.set(session);
    if (this.isBrowser) localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }

  logout(): void {
    this._session.set(null);
    if (this.isBrowser) localStorage.removeItem(STORAGE_KEY);
  }

  private load(): Session | null {
    if (!this.isBrowser) return null;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as Session;
    } catch {
      return null;
    }
  }
}
