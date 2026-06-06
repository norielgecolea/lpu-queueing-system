import './polyfills.server.mjs';
import {
  Injectable,
  PLATFORM_ID,
  computed,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-BESZRXX3.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-T2KOBY73.mjs";

// src/app/core/queue.models.ts
var SERVICE_LABEL = {
  cashier: "Cashier",
  registrar: "Registrar"
};
var SERVICE_PREFIX = {
  cashier: "C",
  registrar: "R"
};
var REQUESTS = {
  cashier: [
    "Tuition Payment",
    "Miscellaneous Fee",
    "Exam Permit",
    "Refund / Adjustment",
    "Other Payment"
  ],
  registrar: [
    "Transcript of Records",
    "Certificate of Enrollment",
    "Good Moral Certificate",
    "Diploma / Credentials",
    "Add / Drop Subject",
    "Other Request"
  ]
};
function initialState() {
  return {
    tickets: [],
    counters: { cashier: 0, registrar: 0 },
    windows: [
      { id: "cashier-1", label: "Window 1", serviceType: "cashier", currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: "cashier-2", label: "Window 2", serviceType: "cashier", currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: "cashier-3", label: "Window 3", serviceType: "cashier", currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: "cashier-4", label: "Window 4", serviceType: "cashier", currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: "registrar-1", label: "Window 1", serviceType: "registrar", currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: "registrar-2", label: "Window 2", serviceType: "registrar", currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: "registrar-3", label: "Window 3", serviceType: "registrar", currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: "registrar-4", label: "Window 4", serviceType: "registrar", currentTicketId: null, lastTicketId: null, announceTick: 0 }
    ]
  };
}

// src/app/core/queue.store.ts
var STORAGE_KEY = "lpu-queue-state-v3";
var QueueStore = class _QueueStore {
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  _state = signal(this.load(), ...ngDevMode ? [{ debugName: "_state" }] : (
    /* istanbul ignore next */
    []
  ));
  state = this._state.asReadonly();
  tickets = computed(() => this._state().tickets, ...ngDevMode ? [{ debugName: "tickets" }] : (
    /* istanbul ignore next */
    []
  ));
  windows = computed(() => this._state().windows, ...ngDevMode ? [{ debugName: "windows" }] : (
    /* istanbul ignore next */
    []
  ));
  waiting = computed(() => this.tickets().filter((t) => t.status === "waiting").sort((a, b) => a.createdAt - b.createdAt), ...ngDevMode ? [{ debugName: "waiting" }] : (
    /* istanbul ignore next */
    []
  ));
  served = computed(() => this.tickets().filter((t) => t.status === "completed").sort((a, b) => (b.calledAt ?? 0) - (a.calledAt ?? 0)), ...ngDevMode ? [{ debugName: "served" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    if (this.isBrowser) {
      window.addEventListener("storage", (e) => {
        if (e.key === STORAGE_KEY && e.newValue) {
          this._state.set(JSON.parse(e.newValue));
        }
      });
    }
  }
  // ---- selectors -----------------------------------------------------------
  waitingFor(type) {
    return computed(() => this.waiting().filter((t) => t.serviceType === type));
  }
  windowsFor(type) {
    return computed(() => this.windows().filter((w) => w.serviceType === type));
  }
  window(id) {
    return computed(() => this.windows().find((w) => w.id === id) ?? null);
  }
  ticket(id) {
    return computed(() => id ? this.tickets().find((t) => t.id === id) ?? null : null);
  }
  currentTicket(windowId) {
    return computed(() => {
      const w = this.windows().find((x) => x.id === windowId);
      return w?.currentTicketId ? this.tickets().find((t) => t.id === w.currentTicketId) ?? null : null;
    });
  }
  // ---- commands ------------------------------------------------------------
  createTicket(input) {
    let created;
    this.mutate((s) => {
      const count = s.counters[input.serviceType] + 1;
      const number = `${SERVICE_PREFIX[input.serviceType]}-${String(count).padStart(3, "0")}`;
      created = {
        id: cryptoId(),
        number,
        serviceType: input.serviceType,
        name: input.name.trim(),
        studentId: input.studentId.trim(),
        request: input.request,
        status: "waiting",
        windowId: null,
        createdAt: Date.now(),
        calledAt: null
      };
      return __spreadProps(__spreadValues({}, s), {
        counters: __spreadProps(__spreadValues({}, s.counters), { [input.serviceType]: count }),
        tickets: [...s.tickets, created]
      });
    });
    return created;
  }
  /** Complete the window's current ticket (if any) then pull the next waiting one. */
  callNext(windowId) {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win)
        return s;
      let tickets = s.tickets.map((t) => t.id === win.currentTicketId ? __spreadProps(__spreadValues({}, t), { status: "completed" }) : t);
      const next = tickets.filter((t) => t.status === "waiting" && t.serviceType === win.serviceType).sort((a, b) => a.createdAt - b.createdAt)[0];
      const lastTicketId = win.currentTicketId ?? win.lastTicketId;
      if (!next) {
        return __spreadProps(__spreadValues({}, s), { tickets, windows: bump(s.windows, windowId, { currentTicketId: null, lastTicketId }) });
      }
      tickets = tickets.map((t) => t.id === next.id ? __spreadProps(__spreadValues({}, t), { status: "serving", windowId, calledAt: Date.now() }) : t);
      return __spreadProps(__spreadValues({}, s), { tickets, windows: bump(s.windows, windowId, { currentTicketId: next.id, lastTicketId }) });
    });
  }
  /** Re-announce the current ticket (flash + voice on the board). */
  recallCurrent(windowId) {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win?.currentTicketId)
        return s;
      const tickets = s.tickets.map((t) => t.id === win.currentTicketId ? __spreadProps(__spreadValues({}, t), { calledAt: Date.now() }) : t);
      return __spreadProps(__spreadValues({}, s), { tickets, windows: bump(s.windows, windowId, {}) });
    });
  }
  /** Bring the last completed ticket back to this window as the current one. */
  recallLast(windowId) {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win?.lastTicketId)
        return s;
      const tickets = s.tickets.map((t) => t.id === win.lastTicketId ? __spreadProps(__spreadValues({}, t), { status: "serving", windowId, calledAt: Date.now() }) : t.id === win.currentTicketId ? __spreadProps(__spreadValues({}, t), { status: "waiting" }) : t);
      return __spreadProps(__spreadValues({}, s), { tickets, windows: bump(s.windows, windowId, { currentTicketId: win.lastTicketId }) });
    });
  }
  /** Mark current ticket done, free the window. */
  complete(windowId) {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win?.currentTicketId)
        return s;
      const tickets = s.tickets.map((t) => t.id === win.currentTicketId ? __spreadProps(__spreadValues({}, t), { status: "completed" }) : t);
      return __spreadProps(__spreadValues({}, s), {
        tickets,
        windows: bump(s.windows, windowId, { currentTicketId: null, lastTicketId: win.currentTicketId })
      });
    });
  }
  /** Move the window's current ticket to the other service's waiting queue. */
  transfer(windowId, to) {
    this.mutate((s) => {
      const win = s.windows.find((w) => w.id === windowId);
      if (!win?.currentTicketId)
        return s;
      const count = s.counters[to] + 1;
      const number = `${SERVICE_PREFIX[to]}-${String(count).padStart(3, "0")}`;
      const tickets = s.tickets.map((t) => t.id === win.currentTicketId ? __spreadProps(__spreadValues({}, t), { serviceType: to, number, status: "waiting", windowId: null, calledAt: null }) : t);
      return __spreadProps(__spreadValues({}, s), {
        counters: __spreadProps(__spreadValues({}, s.counters), { [to]: count }),
        tickets,
        windows: bump(s.windows, windowId, { currentTicketId: null })
      });
    });
  }
  resetAll() {
    this.mutate(() => initialState());
  }
  // ---- persistence ---------------------------------------------------------
  mutate(fn) {
    const next = fn(this._state());
    this._state.set(next);
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }
  load() {
    if (this.isBrowser) {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        try {
          return JSON.parse(raw);
        } catch {
        }
      }
    }
    return initialState();
  }
  static \u0275fac = function QueueStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QueueStore)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QueueStore, factory: _QueueStore.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QueueStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();
function bump(windows, windowId, patch) {
  return windows.map((w) => w.id === windowId ? __spreadProps(__spreadValues(__spreadValues({}, w), patch), { announceTick: w.announceTick + 1 }) : w);
}
function cryptoId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto)
    return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export {
  SERVICE_LABEL,
  REQUESTS,
  QueueStore
};
//# sourceMappingURL=chunk-LGLLNDIQ.mjs.map
