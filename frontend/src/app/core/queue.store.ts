import { Injectable, computed, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  QueueState,
  ServiceType,
  ServiceWindow,
  Ticket,
  SERVICE_PREFIX,
  initialState,
} from './queue.models';

const STORAGE_KEY = 'lpu-queue-state-v3';

/**
 * Mock queue store. Single source of truth held in a signal, mirrored to
 * localStorage so the teller controls and the public display board stay in
 * sync across tabs/windows. Swap the persistence layer for a real API later.
 */
@Injectable({ providedIn: 'root' })
export class QueueStore {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _state = signal<QueueState>(this.load());

  readonly state = this._state.asReadonly();
  readonly tickets = computed(() => this._state().tickets);
  readonly windows = computed(() => this._state().windows);

  readonly waiting = computed(() =>
    this.tickets()
      .filter((t) => t.status === 'waiting')
      .sort((a, b) => a.createdAt - b.createdAt),
  );

  readonly served = computed(() =>
    this.tickets()
      .filter((t) => t.status === 'completed')
      .sort((a, b) => (b.calledAt ?? 0) - (a.calledAt ?? 0)),
  );

  constructor() {
    if (this.isBrowser) {
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY && e.newValue) {
          this._state.set(JSON.parse(e.newValue));
        }
      });
    }
  }

  // ---- selectors -----------------------------------------------------------

  waitingFor(type: ServiceType) {
    return computed(() => this.waiting().filter((t) => t.serviceType === type));
  }

  windowsFor(type: ServiceType) {
    return computed(() => this.windows().filter((w) => w.serviceType === type));
  }

  window(id: string) {
    return computed(() => this.windows().find((w) => w.id === id) ?? null);
  }

  ticket(id: string | null) {
    return computed(() => (id ? this.tickets().find((t) => t.id === id) ?? null : null));
  }

  currentTicket(windowId: string) {
    return computed(() => {
      const w = this.windows().find((x) => x.id === windowId);
      return w?.currentTicketId ? this.tickets().find((t) => t.id === w.currentTicketId) ?? null : null;
    });
  }

  // ---- commands ------------------------------------------------------------

  createTicket(input: { serviceType: ServiceType; name: string; studentId: string; request: string }): Ticket {
    let created!: Ticket;
    this.mutate((s) => {
      const count = s.counters[input.serviceType] + 1;
      const number = `${SERVICE_PREFIX[input.serviceType]}-${String(count).padStart(3, '0')}`;
      created = {
        id: cryptoId(),
        number,
        serviceType: input.serviceType,
        name: input.name.trim(),
        studentId: input.studentId.trim(),
        request: input.request,
        status: 'waiting',
        windowId: null,
        createdAt: Date.now(),
        calledAt: null,
      };
      return {
        ...s,
        counters: { ...s.counters, [input.serviceType]: count },
        tickets: [...s.tickets, created],
      };
    });
    return created;
  }

  /** Complete the window's current ticket (if any) then pull the next waiting one. */
  callNext(windowId: string): void {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win) return s;
      let tickets = s.tickets.map((t) =>
        t.id === win.currentTicketId ? { ...t, status: 'completed' as const } : t,
      );
      const next = tickets
        .filter((t) => t.status === 'waiting' && t.serviceType === win.serviceType)
        .sort((a, b) => a.createdAt - b.createdAt)[0];
      const lastTicketId = win.currentTicketId ?? win.lastTicketId;
      if (!next) {
        return { ...s, tickets, windows: bump(s.windows, windowId, { currentTicketId: null, lastTicketId }) };
      }
      tickets = tickets.map((t) =>
        t.id === next.id ? { ...t, status: 'serving' as const, windowId, calledAt: Date.now() } : t,
      );
      return { ...s, tickets, windows: bump(s.windows, windowId, { currentTicketId: next.id, lastTicketId }) };
    });
  }

  /** Re-announce the current ticket (flash + voice on the board). */
  recallCurrent(windowId: string): void {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win?.currentTicketId) return s;
      const tickets = s.tickets.map((t) =>
        t.id === win.currentTicketId ? { ...t, calledAt: Date.now() } : t,
      );
      return { ...s, tickets, windows: bump(s.windows, windowId, {}) };
    });
  }

  /** Bring the last completed ticket back to this window as the current one. */
  recallLast(windowId: string): void {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win?.lastTicketId) return s;
      const tickets = s.tickets.map((t) =>
        t.id === win.lastTicketId
          ? { ...t, status: 'serving' as const, windowId, calledAt: Date.now() }
          : t.id === win.currentTicketId
            ? { ...t, status: 'waiting' as const }
            : t,
      );
      return { ...s, tickets, windows: bump(s.windows, windowId, { currentTicketId: win.lastTicketId }) };
    });
  }

  /** Mark current ticket done, free the window. */
  complete(windowId: string): void {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win?.currentTicketId) return s;
      const tickets = s.tickets.map((t) =>
        t.id === win.currentTicketId ? { ...t, status: 'completed' as const } : t,
      );
      return {
        ...s,
        tickets,
        windows: bump(s.windows, windowId, { currentTicketId: null, lastTicketId: win.currentTicketId }),
      };
    });
  }

  /** Move the window's current ticket to the other service's waiting queue. */
  transfer(windowId: string, to: ServiceType): void {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win?.currentTicketId) return s;
      const count = s.counters[to] + 1;
      const number = `${SERVICE_PREFIX[to]}-${String(count).padStart(3, '0')}`;
      const tickets = s.tickets.map((t) =>
        t.id === win.currentTicketId
          ? { ...t, serviceType: to, number, status: 'waiting' as const, windowId: null, calledAt: null }
          : t,
      );
      return {
        ...s,
        counters: { ...s.counters, [to]: count },
        tickets,
        windows: bump(s.windows, windowId, { currentTicketId: null }),
      };
    });
  }

  resetAll(): void {
    this.mutate(() => initialState());
  }

  // ---- persistence ---------------------------------------------------------

  private mutate(fn: (s: QueueState) => QueueState): void {
    const next = fn(this._state());
    this._state.set(next);
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }

  private load(): QueueState {
    if (this.isBrowser) {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        try {
          return JSON.parse(raw) as QueueState;
        } catch {
          /* fall through to fresh state */
        }
      }
    }
    return initialState();
  }
}

function bump(windows: ServiceWindow[], windowId: string, patch: Partial<ServiceWindow>): ServiceWindow[] {
  return windows.map((w) =>
    w.id === windowId ? { ...w, ...patch, announceTick: w.announceTick + 1 } : w,
  );
}

function cryptoId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
