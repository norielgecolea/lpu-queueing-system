import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { LpuButton } from '../../shared/lpu-button';
import { AuthStore } from '../../core/auth.store';
import { QueueStore } from '../../core/queue.store';
import { SERVICE_LABEL, ServiceType } from '../../core/queue.models';

@Component({
  selector: 'lpu-teller',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink, NgIcon, LpuButton, HlmBadge, HlmSeparator, ...HlmTableImports],
  template: `
    <div class="bg-muted/40 min-h-dvh">
      <!-- Header -->
      <header class="bg-lpu-maroon text-primary-foreground">
        <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <div class="flex items-center gap-3">
            <img src="favicon.svg" alt="LPU" class="size-10 rounded-lg bg-white/95 p-1" />
            <div>
              <p class="text-sm font-semibold leading-none">Teller Console</p>
              <p class="text-primary-foreground/70 text-xs">{{ serviceLabel() }} service</p>
            </div>
          </div>
          <div class="flex items-center gap-3 text-sm">
            <span class="text-primary-foreground/80 hidden sm:inline">
              {{ session()?.username }}
              <span class="bg-lpu-gold/90 text-lpu-maroon ml-1 rounded px-1.5 py-0.5 text-xs font-semibold uppercase">
                {{ session()?.role }}
              </span>
            </span>
            <a routerLink="/display" target="_blank"
              class="hover:bg-white/10 inline-flex items-center gap-1.5 rounded-md px-2 py-1.5">
              <ng-icon name="lucideMonitor" class="text-base" /> Board
            </a>
            <button (click)="logout()"
              class="hover:bg-white/10 inline-flex items-center gap-1.5 rounded-md px-2 py-1.5">
              <ng-icon name="lucideLogOut" class="text-base" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main class="mx-auto grid max-w-6xl gap-6 px-5 py-6 lg:grid-cols-[1.4fr_1fr]">
        <!-- LEFT: current + controls -->
        <section class="space-y-5">
          <!-- Service picker -->
          <div class="flex items-center gap-2">
            <span class="text-muted-foreground text-sm font-medium">Service:</span>
            @for (s of services; track s.value) {
              <button (click)="setService(s.value)" [class]="winChip(serviceType() === s.value)">
                {{ s.label }}
              </button>
            }
          </div>

          <!-- Window picker -->
          <div class="flex items-center gap-2">
            <span class="text-muted-foreground text-sm font-medium">Window:</span>
            @for (w of windows(); track w.id) {
              <button (click)="selectedWindowId.set(w.id)" [class]="winChip(selectedWindowId() === w.id)">
                {{ w.label }}
              </button>
            }
          </div>

          <!-- Now serving -->
          <div class="rounded-2xl border bg-card p-6 shadow-sm">
            <div class="mb-4 flex items-center justify-between">
              <h2 class="text-muted-foreground text-sm font-semibold uppercase tracking-wide">
                Now serving
              </h2>
              <span hlmBadge class="bg-lpu-maroon">{{ serviceLabel() }} · {{ currentWindowLabel() }}</span>
            </div>

            @if (current(); as c) {
              <div class="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p class="text-lpu-maroon text-6xl font-black tracking-tight">{{ c.number }}</p>
                  <p class="mt-1 text-lg font-semibold">{{ c.name || 'Walk-in' }}</p>
                  <p class="text-muted-foreground text-sm">
                    {{ c.studentId || 'No ID' }} · {{ c.request }}
                  </p>
                  <p class="text-muted-foreground mt-1 text-xs">
                    Called {{ c.calledAt | date: 'shortTime' }}
                  </p>
                </div>
              </div>
            } @else {
              <div class="py-6 text-center">
                <p class="text-4xl font-black text-muted-foreground/40">Idle</p>
                <p class="text-muted-foreground mt-2 text-sm">No active ticket. Call the next in queue.</p>
              </div>
            }

            <hlm-separator class="my-5" />

            <!-- Controls -->
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <button lpuBtn size="lg" class="col-span-2 sm:col-span-3 h-12 text-base"
                (click)="callNext()">
                <ng-icon name="lucidePhone" class="text-lg" /> Call next queue
              </button>

              <button lpuBtn variant="secondary" (click)="recallCurrent()" [disabled]="!current()">
                <ng-icon name="lucideBell" class="text-base" /> Recall
              </button>
              <button lpuBtn variant="secondary" (click)="recallLast()">
                <ng-icon name="lucideRotateCcw" class="text-base" /> Recall last
              </button>
              <button lpuBtn variant="secondary" (click)="transfer()" [disabled]="!current()">
                <ng-icon name="lucideRepeat" class="text-base" /> Transfer
              </button>

              <button lpuBtn variant="secondary" class="col-span-2 sm:col-span-3"
                (click)="complete()" [disabled]="!current()">
                <ng-icon name="lucideCheck" class="text-base" /> Complete transaction
              </button>
            </div>
          </div>

          @if (session()?.role === 'admin') {
            <div class="flex items-center justify-between rounded-xl border border-dashed bg-card p-4">
              <div class="text-sm">
                <p class="font-medium">Administrator tools</p>
                <p class="text-muted-foreground text-xs">Clear all tickets and counters.</p>
              </div>
              <button lpuBtn variant="secondary" (click)="resetAll()">
                <ng-icon name="lucideRefreshCw" class="text-base" /> Reset queue
              </button>
            </div>
          }
        </section>

        <!-- RIGHT: lists -->
        <div class="space-y-6">
        <section class="rounded-2xl border bg-card p-5 shadow-sm">
          <div class="mb-3 flex items-center justify-between">
            <h2 class="text-lpu-maroon flex items-center gap-2 font-semibold">
              <ng-icon name="lucideListOrdered" class="text-lg" /> Waiting list
            </h2>
            <span hlmBadge variant="secondary">{{ waiting().length }}</span>
          </div>

          @if (waiting().length) {
            <div hlmTableContainer class="max-h-112 overflow-auto">
              <table hlmTable class="w-full">
                <thead hlmTHead>
                  <tr hlmTr>
                    <th hlmTh class="w-20">No.</th>
                    <th hlmTh>Student</th>
                    <th hlmTh>Request</th>
                  </tr>
                </thead>
                <tbody hlmTBody>
                  @for (t of waiting(); track t.id) {
                    <tr hlmTr>
                      <td hlmTd class="text-lpu-maroon font-bold">{{ t.number }}</td>
                      <td hlmTd>
                        <span class="block font-medium">{{ t.name || 'Walk-in' }}</span>
                        <span class="text-muted-foreground text-xs">{{ t.studentId || 'No ID' }}</span>
                      </td>
                      <td hlmTd class="text-muted-foreground text-sm">{{ t.request }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          } @else {
            <div class="py-10 text-center">
              <ng-icon name="lucideUsers" class="text-muted-foreground/40 mx-auto text-4xl" />
              <p class="text-muted-foreground mt-2 text-sm">Queue is empty.</p>
            </div>
          }
        </section>

        <!-- Last served -->
        <section class="rounded-2xl border bg-card p-5 shadow-sm">
          <div class="mb-3 flex items-center justify-between">
            <h2 class="text-lpu-maroon flex items-center gap-2 font-semibold">
              <ng-icon name="lucideClock" class="text-lg" /> Last served
            </h2>
            <span hlmBadge variant="secondary">{{ served().length }}</span>
          </div>

          @if (served().length) {
            <div hlmTableContainer class="max-h-112 overflow-auto">
              <table hlmTable class="w-full">
                <thead hlmTHead>
                  <tr hlmTr>
                    <th hlmTh class="w-20">No.</th>
                    <th hlmTh>Student</th>
                    <th hlmTh>Request</th>
                  </tr>
                </thead>
                <tbody hlmTBody>
                  @for (t of served(); track t.id) {
                    <tr hlmTr>
                      <td hlmTd class="text-lpu-maroon font-bold">{{ t.number }}</td>
                      <td hlmTd>
                        <span class="block font-medium">{{ t.name || 'Walk-in' }}</span>
                        <span class="text-muted-foreground text-xs">{{ t.studentId || 'No ID' }}</span>
                      </td>
                      <td hlmTd class="text-muted-foreground text-sm">{{ t.request }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          } @else {
            <div class="py-10 text-center">
              <ng-icon name="lucideClock" class="text-muted-foreground/40 mx-auto text-4xl" />
              <p class="text-muted-foreground mt-2 text-sm">No one served yet.</p>
            </div>
          }
        </section>
        </div>
      </main>
    </div>
  `,
})
export class TellerPage {
  private readonly auth = inject(AuthStore);
  private readonly store = inject(QueueStore);
  private readonly router = inject(Router);

  protected readonly session = this.auth.session;
  protected readonly serviceType = signal<ServiceType>(this.auth.session()?.serviceType ?? 'cashier');

  protected readonly services = [
    { value: 'cashier' as ServiceType, label: 'Cashier' },
    { value: 'registrar' as ServiceType, label: 'Registrar' },
  ];

  protected setService(s: ServiceType): void {
    this.serviceType.set(s);
    this.selectedWindowId.set(''); // fall back to first window of new service
  }

  protected readonly windows = computed(() =>
    this.store.windows().filter((w) => w.serviceType === this.serviceType()),
  );
  protected readonly selectedWindowId = signal<string>('');

  private readonly activeWindowId = computed(
    () => this.selectedWindowId() || this.windows()[0]?.id || '',
  );
  protected readonly current = computed(() => {
    const id = this.activeWindowId();
    const w = this.store.windows().find((x) => x.id === id);
    return w?.currentTicketId ? this.store.tickets().find((t) => t.id === w.currentTicketId) ?? null : null;
  });
  protected readonly currentWindowLabel = computed(
    () => this.windows().find((w) => w.id === this.activeWindowId())?.label ?? '',
  );
  protected readonly waiting = computed(() =>
    this.store.waiting().filter((t) => t.serviceType === this.serviceType()),
  );
  protected readonly served = computed(() =>
    this.store.served().filter((t) => t.serviceType === this.serviceType()),
  );

  protected serviceLabel(): string {
    return SERVICE_LABEL[this.serviceType()];
  }
  private otherService(): ServiceType {
    return this.serviceType() === 'cashier' ? 'registrar' : 'cashier';
  }

  protected winChip(active: boolean): string {
    const base = 'rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors';
    return active
      ? `${base} border-lpu-maroon bg-lpu-maroon text-primary-foreground`
      : `${base} border-input bg-background hover:bg-accent/40`;
  }

  protected callNext(): void {
    this.store.callNext(this.activeWindowId());
  }
  protected recallCurrent(): void {
    this.store.recallCurrent(this.activeWindowId());
  }
  protected recallLast(): void {
    this.store.recallLast(this.activeWindowId());
  }
  protected complete(): void {
    this.store.complete(this.activeWindowId());
  }
  protected transfer(): void {
    this.store.transfer(this.activeWindowId(), this.otherService());
  }
  protected resetAll(): void {
    this.store.resetAll();
  }
  protected logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
