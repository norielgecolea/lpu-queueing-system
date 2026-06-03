import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { QueueStore } from '../../core/queue.store';
import { SERVICE_LABEL, ServiceType } from '../../core/queue.models';

interface Board {
  windowId: string;
  service: ServiceType;
  serviceLabel: string;
  windowLabel: string;
  number: string | null;
  name: string;
  request: string;
}

interface CallRow {
  id: string;
  number: string;
  name: string;
  windowLabel: string;
  calledAt: number;
}

@Component({
  selector: 'lpu-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, NgIcon],
  template: `
    <div
      class="grid h-dvh grid-cols-1 gap-4 overflow-hidden bg-gray-200 p-4 text-neutral-900 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-5 lg:p-6"
    >
      <!-- ============ LEFT · CASHIER ============ -->
      <section class="flex min-h-0 min-w-0 flex-col gap-4 lg:gap-5">
        <!-- Cashier window grid -->
        <div class="flex flex-col gap-3">
          <header class="flex items-center gap-2.5">
            <span class="text-lpu-maroon grid size-9 place-items-center">
              <ng-icon name="lucideCreditCard" class="text-xl" />
            </span>
            <h2 class="text-lpu-maroon text-2xl font-black tracking-tight">Cashier</h2>
          </header>
          <div class="grid grid-cols-2 gap-3">
            @for (b of cashierWindows(); track b.windowId) {
              <article [class]="cardClass(b.windowId)">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold uppercase tracking-wide opacity-70">
                    {{ b.windowLabel }}
                  </span>
                  <span
                    class="size-2.5 rounded-full"
                    [class]="
                      b.number
                        ? 'bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.25)]'
                        : 'bg-current opacity-25'
                    "
                  ></span>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center py-3 text-center">
                  <p class="text-[0.7rem] font-semibold uppercase tracking-[0.2em] opacity-50">
                    Now Serving
                  </p>
                  <p class="text-5xl font-black tabular-nums tracking-tight xl:text-6xl">
                    {{ b.number ?? '—' }}
                  </p>
                  @if (b.name) {
                    <p class="mt-1 line-clamp-1 text-sm font-medium opacity-70">{{ b.name }}</p>
                  } @else {
                    <p class="mt-1 text-sm opacity-40">Available</p>
                  }
                </div>
              </article>
            }
          </div>
        </div>

        <!-- Latest cashier calls -->
        <div
          class="flex min-h-0 flex-1 flex-col rounded-xl border border-black/5 border-t-4 border-t-lpu-maroon bg-white p-5 shadow-sm"
        >
          <header class="mb-3 flex items-center gap-2.5">
            <span class="text-lpu-maroon grid size-9 place-items-center">
              <ng-icon name="lucideListOrdered" class="text-xl" />
            </span>
            <h3 class="text-lpu-maroon text-lg font-bold tracking-tight">Latest Calls</h3>
          </header>
          @if (cashierCalls().length) {
            <ul class="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
              @for (c of cashierCalls(); track c.id; let first = $first) {
                <li
                  class="flex items-center gap-3 rounded-2xl px-3 py-2.5"
                  [class]="first ? 'bg-lpu-gold/15 ring-1 ring-lpu-gold/40' : 'bg-neutral-50'"
                >
                  <span class="text-lpu-maroon text-2xl font-black tabular-nums">{{
                    c.number
                  }}</span>
                  <span class="min-w-0 flex-1 truncate text-sm font-medium opacity-70">{{
                    c.name
                  }}</span>
                  <span class="shrink-0 text-xs font-semibold uppercase tracking-wide opacity-50">
                    {{ c.windowLabel }} · {{ c.calledAt | date: 'h:mm a' }}
                  </span>
                </li>
              }
            </ul>
          } @else {
            <p class="grid flex-1 place-items-center text-sm opacity-40">No calls yet</p>
          }
        </div>
      </section>

      <!-- ============ MIDDLE · BRAND / MEDIA ============ -->
      <section class="flex min-h-0 min-w-0 flex-col gap-4 lg:gap-5">
        <!-- Campus highlights -->
        <div
          class="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-black/5 border-t-4 border-t-lpu-maroon bg-neutral-100 shadow-sm"
        >
          <video
            class="size-full object-cover"
            autoplay
            muted
            loop
            playsinline
            poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=70"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
          <div
            class="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 ring-1 ring-black/5 backdrop-blur"
          >
            <span class="size-2 animate-pulse rounded-full bg-red-500"></span>
            <span class="text-lpu-maroon text-xs font-semibold uppercase tracking-wide"
              >Campus Highlights</span
            >
          </div>
        </div>

        <!-- Logo + time/date -->
        <div class="grid grid-cols-[auto_1fr] gap-4 lg:gap-5">
          <div
            class="flex aspect-square items-center justify-center rounded-xl border border-black/5 border-t-4 border-t-lpu-maroon bg-white p-4 shadow-sm"
          >
            <img src="favicon.svg" alt="LPU" class="size-full max-w-24 p-1" />
          </div>
          <div
            class="relative flex flex-col justify-center rounded-xl border border-black/5 border-t-4 border-t-lpu-maroon bg-white p-5 shadow-sm"
          >
            <button
              (click)="toggleVoice()"
              class="text-lpu-maroon hover:bg-lpu-maroon/10 absolute right-4 top-4 grid size-10 place-items-center rounded-xl transition-colors"
              [title]="voiceOn() ? 'Mute announcements' : 'Unmute announcements'"
            >
              <ng-icon [name]="voiceOn() ? 'lucideVolume2' : 'lucideVolumeOff'" class="text-2xl" />
            </button>
            <p
              class="text-lpu-maroon text-4xl font-black tabular-nums leading-none whitespace-nowrap xl:text-5xl"
            >
              {{ now() | date: 'h:mm:ss a' }}
            </p>
            <p class="mt-2 flex items-center gap-2 text-sm font-medium opacity-60">
              <ng-icon name="lucideCalendar" class="text-base" />
              {{ now() | date: 'EEEE, MMMM d, y' }}
            </p>
          </div>
        </div>

        <!-- Announcement ticker -->
        <div
          class="flex items-center gap-3 overflow-hidden rounded-xl border border-black/5 border-t-4 border-t-lpu-maroon bg-white px-5 py-3.5 shadow-sm"
        >
          <span class="text-lpu-maroon grid size-8 shrink-0 place-items-center">
            <ng-icon name="lucideMegaphone" class="text-lg" />
          </span>
          <div class="relative flex-1 overflow-hidden">
            <div
              class="marquee flex w-max gap-16 whitespace-nowrap text-sm font-semibold text-neutral-700"
            >
              <span>Please keep your queue ticket — numbers are called in order of arrival.</span>
              <span>Watch this screen and listen for your number to be announced.</span>
              <span>Welcome to Lyceum of the Philippines University.</span>
              <span aria-hidden="true"
                >Please keep your queue ticket, numbers are called in order of arrival.</span
              >
              <span aria-hidden="true"
                >Watch this screen and listen for your number to be announced.</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- ============ RIGHT · REGISTRAR ============ -->
      <section class="flex min-h-0 min-w-0 flex-col gap-4 lg:gap-5">
        <!-- Registrar window grid -->
        <div class="flex flex-col gap-3">
          <header class="flex items-center gap-2.5">
            <span class="text-lpu-maroon grid size-9 place-items-center">
              <ng-icon name="lucideFileText" class="text-xl" />
            </span>
            <h2 class="text-lpu-maroon text-2xl font-black tracking-tight">Registrar</h2>
          </header>
          <div class="grid grid-cols-2 gap-3">
            @for (b of registrarWindows(); track b.windowId) {
              <article [class]="cardClass(b.windowId)">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold uppercase tracking-wide opacity-70">
                    {{ b.windowLabel }}
                  </span>
                  <span
                    class="size-2.5 rounded-full"
                    [class]="
                      b.number
                        ? 'bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.25)]'
                        : 'bg-current opacity-25'
                    "
                  ></span>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center py-3 text-center">
                  <p class="text-[0.7rem] font-semibold uppercase tracking-[0.2em] opacity-50">
                    Now Serving
                  </p>
                  <p class="text-5xl font-black tabular-nums tracking-tight xl:text-6xl">
                    {{ b.number ?? '—' }}
                  </p>
                  @if (b.name) {
                    <p class="mt-1 line-clamp-1 text-sm font-medium opacity-70">{{ b.name }}</p>
                  } @else {
                    <p class="mt-1 text-sm opacity-40">Available</p>
                  }
                </div>
              </article>
            }
          </div>
        </div>

        <!-- Latest registrar calls -->
        <div
          class="flex min-h-0 flex-1 flex-col rounded-xl border border-black/5 border-t-4 border-t-lpu-maroon bg-white p-5 shadow-sm"
        >
          <header class="mb-3 flex items-center gap-2.5">
            <span class="text-lpu-maroon grid size-9 place-items-center">
              <ng-icon name="lucideListOrdered" class="text-xl" />
            </span>
            <h3 class="text-lpu-maroon text-lg font-bold tracking-tight">Latest Calls</h3>
          </header>
          @if (registrarCalls().length) {
            <ul class="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
              @for (c of registrarCalls(); track c.id; let first = $first) {
                <li
                  class="flex items-center gap-3 rounded-2xl px-3 py-2.5"
                  [class]="first ? 'bg-lpu-gold/15 ring-1 ring-lpu-gold/40' : 'bg-neutral-50'"
                >
                  <span class="text-lpu-maroon text-2xl font-black tabular-nums">{{
                    c.number
                  }}</span>
                  <span class="min-w-0 flex-1 truncate text-sm font-medium opacity-70">{{
                    c.name
                  }}</span>
                  <span class="shrink-0 text-xs font-semibold uppercase tracking-wide opacity-50">
                    {{ c.windowLabel }} · {{ c.calledAt | date: 'h:mm a' }}
                  </span>
                </li>
              }
            </ul>
          } @else {
            <p class="grid flex-1 place-items-center text-sm opacity-40">No calls yet</p>
          }
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .marquee {
        animation: marquee 28s linear infinite;
      }
      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .marquee {
          animation: none;
        }
      }
    `,
  ],
})
export class DisplayPage {
  private readonly store = inject(QueueStore);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly now = signal(new Date());
  protected readonly voiceOn = signal(true);
  protected readonly flashId = signal<string | null>(null);

  protected readonly boards = computed<Board[]>(() =>
    this.store.windows().map((w) => {
      const t = w.currentTicketId
        ? (this.store.tickets().find((x) => x.id === w.currentTicketId) ?? null)
        : null;
      return {
        windowId: w.id,
        service: w.serviceType,
        serviceLabel: SERVICE_LABEL[w.serviceType],
        windowLabel: w.label,
        number: t?.number ?? null,
        name: t?.name ?? '',
        request: t?.request ?? '',
      };
    }),
  );

  protected readonly cashierWindows = computed(() =>
    this.boards().filter((b) => b.service === 'cashier'),
  );
  protected readonly registrarWindows = computed(() =>
    this.boards().filter((b) => b.service === 'registrar'),
  );

  protected readonly cashierCalls = computed(() => this.calls('cashier'));
  protected readonly registrarCalls = computed(() => this.calls('registrar'));

  /** announceTick per window from the previous reaction, drives flash + voice. */
  private readonly ticks = new Map<string, number>();

  constructor() {
    // React to window announce ticks -> flash + speak the freshly called ticket.
    effect(() => {
      const windows = this.store.windows();
      for (const w of windows) {
        const prev = this.ticks.get(w.id);
        this.ticks.set(w.id, w.announceTick);
        if (prev === undefined || w.announceTick <= prev) continue;
        const board = this.boards().find((b) => b.windowId === w.id);
        if (!board?.number) continue;
        this.flash(w.id);
        this.announce(board);
      }
    });

    afterNextRender(() => {
      const id = setInterval(() => this.now.set(new Date()), 1000);
      this.destroyRef.onDestroy(() => clearInterval(id));
    });
  }

  protected toggleVoice(): void {
    this.voiceOn.set(!this.voiceOn());
  }

  protected cardClass(windowId: string): string {
    const base =
      'flex aspect-[4/3] flex-col rounded-xl border border-t-4 border-t-lpu-maroon p-4 shadow-sm transition-all duration-500 ease-out';
    return this.flashId() === windowId
      ? `${base} border-lpu-gold bg-lpu-maroon text-white scale-[1.03] shadow-xl shadow-lpu-maroon/25`
      : `${base} border-black/5 bg-white text-neutral-900`;
  }

  private calls(service: ServiceType): CallRow[] {
    const wmap = new Map(this.store.windows().map((w) => [w.id, w]));
    return this.store
      .tickets()
      .filter((t) => t.serviceType === service && t.calledAt != null)
      .sort((a, b) => (b.calledAt ?? 0) - (a.calledAt ?? 0))
      .slice(0, 8)
      .map((t) => ({
        id: t.id,
        number: t.number,
        name: t.name || '—',
        windowLabel: wmap.get(t.windowId ?? '')?.label ?? '',
        calledAt: t.calledAt as number,
      }));
  }

  private flash(windowId: string): void {
    this.flashId.set(windowId);
    setTimeout(() => {
      if (this.flashId() === windowId) this.flashId.set(null);
    }, 4000);
  }

  private announce(board: Board): void {
    if (!this.voiceOn() || !board.number) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const spoken = board.number.split('-').join(' ');
    const msg = new SpeechSynthesisUtterance(
      `Now serving, number ${spoken}, at ${board.serviceLabel} ${board.windowLabel}.`,
    );
    msg.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  }
}
