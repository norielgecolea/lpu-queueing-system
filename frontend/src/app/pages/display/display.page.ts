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
import { DatePipe, NgTemplateOutlet } from '@angular/common';
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
  imports: [DatePipe, NgIcon, NgTemplateOutlet],
  template: `
    <main
      class="font-display relative isolate flex h-dvh flex-col gap-4 overflow-hidden bg-[#f5f3ef] p-4 text-neutral-900 lg:gap-5 lg:p-6"
    >
      <!-- ambient warm backdrop -->
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          class="bg-lpu-maroon/12 absolute -left-32 -top-40 size-[42rem] rounded-full blur-[140px] [animation:drift_22s_ease-in-out_infinite]"
        ></div>
        <div
          class="bg-lpu-red/10 absolute -bottom-48 -right-24 size-[40rem] rounded-full blur-[150px] [animation:drift_28s_ease-in-out_infinite_reverse]"
        ></div>
        <div
          class="bg-lpu-gold/15 absolute left-1/2 top-1/3 size-[26rem] -translate-x-1/2 rounded-full blur-[160px]"
        ></div>
      </div>

      <!-- ============ NAV · floating glass pill ============ -->
      <header
        class="flex shrink-0 items-center justify-between gap-4 rounded-md border border-black/5 bg-white px-5 py-3 shadow-sm lg:px-7"
      >
        <div class="flex items-center gap-3.5">
          <span
            class="grid size-11 place-items-center rounded-md bg-lpu-maroon/5 ring-1 ring-lpu-maroon/10"
          >
            <img src="favicon.svg" alt="LPU" class="size-7" />
          </span>
          <div class="leading-tight">
            <p class="text-base font-extrabold tracking-tight lg:text-lg">
              Lyceum of the Philippines University
            </p>
            <p class="text-lpu-maroon text-[0.7rem] font-semibold uppercase tracking-[0.28em]">
              Service Queue Board
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4 lg:gap-6">
          <div class="hidden text-right sm:block">
            <p class="text-2xl font-black tabular-nums leading-none lg:text-3xl">
              {{ now() | date: 'h:mm:ss a' }}
            </p>
            <p
              class="mt-1 flex items-center justify-end gap-1.5 text-xs font-medium text-neutral-500"
            >
              <ng-icon name="lucideCalendar" class="text-sm" />
              {{ now() | date: 'EEE, MMMM d, y' }}
            </p>
          </div>
          <button
            (click)="toggleVoice()"
            class="text-lpu-maroon grid size-11 place-items-center rounded-md border border-black/5 bg-white shadow-sm transition-colors hover:bg-lpu-maroon/10"
            [title]="voiceOn() ? 'Mute announcements' : 'Unmute announcements'"
          >
            <ng-icon [name]="voiceOn() ? 'lucideVolume2' : 'lucideVolumeOff'" class="text-2xl" />
          </button>
        </div>
      </header>

      <!-- ============ BODY ============ -->
      <div
        class="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.9fr)_minmax(0,0.72fr)] lg:gap-5"
      >
        <!-- ===== LEFT · CASHIER ===== -->
        <section class="flex min-h-0 min-w-0 flex-col gap-4 lg:gap-5">
          <div class="flex flex-col gap-3">
            <ng-container
              [ngTemplateOutlet]="serviceHeader"
              [ngTemplateOutletContext]="{
                icon: 'lucideCreditCard',
                title: 'Cashier',
                waiting: cashierWaiting(),
              }"
            />
            <div class="grid grid-cols-2 gap-3 lg:gap-4">
              @for (b of cashierWindows(); track b.windowId) {
                <ng-container
                  [ngTemplateOutlet]="windowCard"
                  [ngTemplateOutletContext]="{ b: b }"
                />
              }
            </div>
          </div>
          <ng-container
            [ngTemplateOutlet]="callLog"
            [ngTemplateOutletContext]="{ rows: cashierCalls() }"
          />
        </section>

        <!-- ===== MIDDLE · MEDIA + ANNOUNCEMENTS ===== -->
        <section class="flex min-h-0 min-w-0 flex-col gap-4 lg:gap-5">
          <div
            class="group relative min-h-0 flex-1 overflow-hidden rounded-md border border-black/5 shadow-sm"
          >
            <video
              class="size-full object-cover opacity-90 contrast-110 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              autoplay
              muted
              loop
              playsinline
              poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=70"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div
              class="absolute inset-0 bg-linear-to-b from-black/35 to-transparent"
            ></div>
            <div
              class="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/15 bg-black/70 px-3.5 py-1.5"
            >
              <span class="size-2 animate-pulse rounded-full bg-lpu-gold"></span>
              <span class="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/90"
                >Campus Highlights</span
              >
            </div>
          </div>

          <!-- Announcement -->
          <div
            class="flex shrink-0 flex-col gap-2.5 overflow-hidden rounded-md border border-black/5 bg-white px-5 py-4 shadow-sm"
          >
            <div class="flex items-center gap-2.5">
              <span
                class="text-lpu-maroon grid size-8 shrink-0 place-items-center rounded-md bg-lpu-maroon/10"
              >
                <ng-icon name="lucideMegaphone" class="text-base" />
              </span>
              <span class="text-lpu-maroon text-base font-extrabold tracking-tight">
                Welcome to LPU. Watch this board for your number.
              </span>
            </div>
            <div class="relative overflow-hidden border-t border-black/5 pt-2.5">
              <div
                class="marquee flex w-max gap-16 whitespace-nowrap text-sm font-semibold text-neutral-700"
              >
                <span>Please keep your queue ticket — numbers are called in order of arrival.</span>
                <span>Watch this screen and listen for your number to be announced.</span>
                <span>Welcome to Lyceum of the Philippines University.</span>
                <span aria-hidden="true"
                  >Please keep your queue ticket. Numbers are called in order of arrival.</span
                >
                <span aria-hidden="true"
                  >Watch this screen and listen for your number to be announced.</span
                >
              </div>
            </div>
          </div>
        </section>

        <!-- ===== RIGHT · REGISTRAR ===== -->
        <section class="flex min-h-0 min-w-0 flex-col gap-4 lg:gap-5">
          <div class="flex flex-col gap-3">
            <ng-container
              [ngTemplateOutlet]="serviceHeader"
              [ngTemplateOutletContext]="{
                icon: 'lucideFileText',
                title: 'Registrar',
                waiting: registrarWaiting(),
              }"
            />
            <div class="grid grid-cols-2 gap-3 lg:gap-4">
              @for (b of registrarWindows(); track b.windowId) {
                <ng-container
                  [ngTemplateOutlet]="windowCard"
                  [ngTemplateOutletContext]="{ b: b }"
                />
              }
            </div>
          </div>
          <ng-container
            [ngTemplateOutlet]="callLog"
            [ngTemplateOutletContext]="{ rows: registrarCalls() }"
          />
        </section>
      </div>
    </main>

    <!-- ============ REUSABLE TEMPLATES ============ -->
    <ng-template #serviceHeader let-icon="icon" let-title="title" let-waiting="waiting">
      <header class="flex items-center justify-between gap-3">
        <h2 class="text-2xl font-black tracking-tight xl:text-3xl">{{ title }}</h2>
        <span
          class="flex items-center gap-1.5 rounded-md border border-black/5 bg-white px-3 py-1 text-xs font-semibold text-neutral-600 shadow-sm"
        >
          <ng-icon name="lucideUsers" class="text-sm" />
          {{ waiting }} waiting
        </span>
      </header>
    </ng-template>

    <ng-template #windowCard let-b="b">
      <article [class]="cardClass(b)">
        @if (b.number) {
          <div
            aria-hidden="true"
            class="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-lpu-gold/20 blur-3xl"
          ></div>
        }
        <div class="relative flex items-center justify-between">
          <span class="text-sm font-bold uppercase tracking-wide opacity-75">
            {{ b.windowLabel }}
          </span>
          <span
            class="size-2.5 rounded-full"
            [class]="
              b.number
                ? 'bg-lpu-gold shadow-[0_0_0_4px_rgba(240,182,0,.25)]'
                : 'bg-current opacity-25'
            "
          ></span>
        </div>
        <div class="relative flex flex-1 flex-col items-center justify-center py-1 text-center">
          <p class="text-[0.6rem] font-semibold uppercase tracking-[0.25em] opacity-60">
            Now Serving
          </p>
          <p
            class="w-full truncate text-center text-3xl font-black tabular-nums leading-none tracking-tight xl:text-4xl"
            [class.animate-pop]="flashId() === b.windowId"
          >
            {{ b.number ?? '—' }}
          </p>
          @if (b.name) {
            <p class="mt-1 line-clamp-1 text-xs font-medium opacity-80">{{ b.name }}</p>
          } @else {
            <p class="mt-1 text-xs opacity-40">Available</p>
          }
        </div>
      </article>
    </ng-template>

    <ng-template #callLog let-rows="rows">
      <div
        class="flex min-h-0 flex-1 flex-col rounded-md border border-black/5 bg-white p-5 shadow-sm"
      >
        <header class="mb-3 flex items-center">
          <h3 class="text-base font-bold tracking-tight text-neutral-800">Latest Calls</h3>
        </header>
        @if (rows.length) {
          <ul class="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
            @for (c of rows; track c.id; let first = $first) {
              <li
                class="flex items-center justify-between gap-3 rounded-md px-3 py-2.5 transition-colors"
                [class]="
                  first
                    ? 'bg-lpu-gold/15 ring-1 ring-lpu-gold/40'
                    : 'bg-neutral-50 ring-1 ring-black/5'
                "
              >
                <span
                  class="text-2xl font-black tabular-nums"
                  [class]="first ? 'text-lpu-maroon' : 'text-neutral-800'"
                  >{{ c.number }}</span
                >
                <span class="shrink-0 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  {{ c.windowLabel }} · {{ c.calledAt | date: 'h:mm a' }}
                </span>
              </li>
            }
          </ul>
        } @else {
          <p class="grid flex-1 place-items-center text-sm text-neutral-400">No calls yet</p>
        }
      </div>
    </ng-template>
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
      .animate-pop {
        animation: pop 0.7s cubic-bezier(0.22, 1, 0.36, 1);
      }
      @keyframes pop {
        0% {
          transform: scale(0.6);
          filter: blur(8px);
          opacity: 0;
        }
        60% {
          transform: scale(1.08);
          filter: blur(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes drift {
        0%,
        100% {
          transform: translate(0, 0) scale(1);
        }
        50% {
          transform: translate(4%, 6%) scale(1.08);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .marquee,
        .animate-pop,
        [class*='animation'] {
          animation: none !important;
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

  protected readonly cashierWaiting = computed(
    () => this.store.waiting().filter((t) => t.serviceType === 'cashier').length,
  );
  protected readonly registrarWaiting = computed(
    () => this.store.waiting().filter((t) => t.serviceType === 'registrar').length,
  );

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

  protected cardClass(b: Board): string {
    const base =
      'group relative flex aspect-[16/10] flex-col overflow-hidden rounded-md border p-3.5 transition-all duration-500 ease-out';
    if (this.flashId() === b.windowId) {
      return `${base} border-lpu-gold/80 bg-gradient-to-br from-lpu-red to-lpu-maroon text-white scale-[1.04] ring-4 ring-lpu-gold/40 shadow-2xl shadow-lpu-gold/30`;
    }
    if (b.number) {
      return `${base} border-white/10 bg-gradient-to-br from-lpu-maroon to-lpu-red text-white shadow-lg shadow-black/40`;
    }
    return `${base} border-black/5 bg-white text-neutral-900 shadow-sm`;
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
