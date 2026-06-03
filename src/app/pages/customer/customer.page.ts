import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { LpuButton } from '../../shared/lpu-button';
import { OnScreenKeyboard } from '../../shared/on-screen-keyboard';
import { QueueStore } from '../../core/queue.store';
import { REQUESTS, SERVICE_LABEL, ServiceType, Ticket } from '../../core/queue.models';

type Field = 'name' | 'studentId';

@Component({
  selector: 'lpu-customer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, DatePipe, NgIcon, HlmLabel, LpuButton, OnScreenKeyboard],
  host: {
    class:
      'bg-muted/30 flex h-dvh flex-col overflow-hidden print:block print:h-auto print:overflow-visible print:bg-transparent',
  },
  template: `
    <!-- Portrait kiosk: tuned for 1080 x 1920 -->
    <main class="flex-1 overflow-y-auto px-10 py-10">
      <!-- Form -->
      <div class="m-auto w-full max-w-4xl space-y-8 md:space-y-10 print:hidden">
        <div class="space-y-2">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-lpu-maroon">
            What do you need today?
          </h2>
        </div>

        <!-- Service type -->
        <div class="space-y-3 md:space-y-4">
          <span hlmLabel class="text-2xl md:text-3xl font-bold">Service type</span>
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            @for (s of services; track s.value) {
              <button
                lpuBtn
                type="button"
                [variant]="serviceType() === s.value ? 'primary' : 'secondary'"
                class="h-auto flex-col gap-2 rounded-2xl py-6 md:gap-3 md:py-8"
                (click)="selectService(s.value)"
              >
                <ng-icon [name]="s.icon" class="text-5xl md:text-6xl" />
                <span class="text-2xl font-semibold">{{ s.label }}</span>
              </button>
            }
          </div>
        </div>

        <!-- Name -->
        <div class="space-y-3 md:space-y-4">
          <label hlmLabel class="text-2xl md:text-3xl font-bold" for="name">Full name</label>
          <input
            id="name"
            type="text"
            [ngModel]="name()"
            (ngModelChange)="name.set($event)"
            (focus)="focusField('name')"
            [placeholder]="activeField() === 'name' ? '' : 'Enter full name'"
            [class]="fieldClass('name')"
          />
        </div>

        <!-- Student ID -->
        <div class="space-y-3 md:space-y-4">
          <label hlmLabel class="text-2xl md:text-3xl font-bold" for="sid">Student ID</label>
          <input
            id="sid"
            type="text"
            [ngModel]="studentId()"
            (ngModelChange)="studentId.set($event.replace(/[^0-9-]/g, ''))"
            (focus)="focusField('studentId')"
            [placeholder]="activeField() === 'studentId' ? '' : 'Enter student ID'"
            [class]="fieldClass('studentId')"
          />
        </div>

        <!-- Request -->
        <div class="space-y-3 md:space-y-4">
          <label hlmLabel class="text-2xl md:text-3xl font-bold" for="request">Request</label>
          <div class="relative">
            <select
              id="request"
              [ngModel]="request()"
              (ngModelChange)="request.set($event)"
              (focus)="activeField.set(null)"
              class="border-input bg-background focus-visible:border-ring focus-visible:ring-ring/50 h-14 w-full appearance-none rounded-xl border-2 px-4 pr-12 text-xl shadow-sm outline-none focus-visible:ring-[3px] md:h-16 md:px-5 md:text-2xl"
              [class.text-muted-foreground]="!request()"
            >
              <option value="" disabled hidden>Select a request</option>
              @for (r of requestOptions(); track r) {
                <option [value]="r" class="text-foreground">{{ r }}</option>
              }
            </select>
            <ng-icon
              name="lucideChevronDown"
              class="text-muted-foreground pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-2xl md:right-5 md:text-3xl"
            />
          </div>
        </div>

        <!-- RFID (optional, stub) -->
        <button
          type="button"
          (click)="tapRfid()"
          class="border-input hover:border-lpu-gold flex w-full items-center gap-4 rounded-xl border-2 border-dashed bg-background p-4 text-left transition-colors md:p-6"
        >
          <span
            class="bg-lpu-gold/20 text-lpu-maroon grid size-12 place-items-center rounded-xl md:size-16"
          >
            <ng-icon name="lucideNfc" class="text-3xl md:text-4xl" />
          </span>
          <span>
            <span class="block text-xl font-medium md:text-2xl">
              {{ rfidTapped() ? 'RFID detected' : 'Tap RFID card' }}
            </span>
          </span>
        </button>

        <button
          lpuBtn
          size="lg"
          class="h-16 w-full text-2xl md:h-20 md:text-3xl rounded-xl"
          [disabled]="!isValid()"
          (click)="generate()"
        >
          <ng-icon name="lucideTicket" class="text-3xl md:text-4xl" /> Submit
        </button>
      </div>
    </main>

    @if (ticket(); as t) {
      <!-- Issued ticket overlay -->
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-3 md:p-4 backdrop-blur-sm print:absolute print:inset-0 print:block print:bg-transparent print:p-0"
      >
        <section class="w-full max-w-[94vw] sm:max-w-5xl">
          <div
            class="overflow-hidden rounded-[2.5rem] border-2 bg-card shadow-2xl print:border-none print:shadow-none"
          >
            <div class="bg-lpu-maroon text-primary-foreground flex items-center gap-6 px-10 py-8">
              <img src="favicon.svg" alt="LPU" class="size-16 rounded-xl bg-white/95 p-2" />
              <div class="text-left">
                <p class="text-sm uppercase tracking-widest opacity-80">
                  Lyceum of the Philippines
                </p>
                <p class="text-3xl font-semibold">{{ serviceLabel(t.serviceType) }} Queue Ticket</p>
              </div>
            </div>
            <div class="space-y-8 px-10 py-12 text-center">
              <div>
                <p class="text-muted-foreground text-lg uppercase tracking-widest">Your Number</p>
                <p class="text-lpu-maroon text-[10rem] font-black tracking-tight leading-none">
                  {{ t.number }}
                </p>
              </div>
              <dl class="mx-auto grid max-w-lg grid-cols-3 gap-y-5 text-left text-2xl">
                <dt class="text-muted-foreground">Name</dt>
                <dd class="col-span-2 font-medium">{{ t.name || 'Walk-in' }}</dd>
                <dt class="text-muted-foreground">Student ID</dt>
                <dd class="col-span-2 font-medium">{{ t.studentId || 'Not provided' }}</dd>
                <dt class="text-muted-foreground">Request</dt>
                <dd class="col-span-2 font-medium">{{ t.request }}</dd>
                <dt class="text-muted-foreground">Issued</dt>
                <dd class="col-span-2 font-medium">{{ t.createdAt | date: 'short' }}</dd>
              </dl>
              <p class="text-muted-foreground border-t-2 border-dashed pt-8 text-xl">
                Please wait for your number on the display board.
              </p>
            </div>
          </div>

          <div class="mt-8 print:hidden">
            <button lpuBtn size="lg" class="h-24 w-full rounded-2xl text-3xl" (click)="reset()">
              <ng-icon name="lucideTicket" class="text-4xl" /> New ticket
            </button>
          </div>
        </section>
      </div>
    }

    <!-- On-screen keyboard -->
    @if (keyboardOpen()) {
      <lpu-keyboard
        (key)="type($event)"
        [layout]="activeField() === 'studentId' ? 'numpad' : 'default'"
      />
    }
  `,
})
export class CustomerPage {
  private readonly store = inject(QueueStore);

  protected readonly serviceType = signal<ServiceType>('cashier');
  protected readonly name = signal('');
  protected readonly studentId = signal('');
  protected readonly request = signal<string>('');
  protected readonly rfidTapped = signal(false);
  protected readonly ticket = signal<Ticket | null>(null);
  protected readonly activeField = signal<Field | null>(null);
  private resetTimer: any;

  protected readonly keyboardOpen = computed(
    () => this.activeField() !== null && this.ticket() === null,
  );
  protected readonly requestOptions = computed(() => REQUESTS[this.serviceType()]);

  protected readonly isValid = computed(
    () =>
      this.name().trim().length > 0 && this.studentId().trim().length > 0 && this.request() !== '',
  );

  protected readonly services = [
    {
      value: 'cashier' as ServiceType,
      label: 'Cashier',
      icon: 'lucideCreditCard',
    },
    {
      value: 'registrar' as ServiceType,
      label: 'Registrar',
      icon: 'lucideFileText',
    },
  ];

  protected serviceLabel(t: ServiceType): string {
    return SERVICE_LABEL[t];
  }

  protected selectService(t: ServiceType): void {
    this.serviceType.set(t);
    this.request.set('');
  }

  protected focusField(field: Field): void {
    this.activeField.set(field);
  }

  protected fieldClass(field: Field): string {
    const base =
      'flex h-14 w-full items-center rounded-xl border-2 bg-background px-4 text-xl text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground md:h-16 md:px-5 md:text-2xl';
    return this.activeField() === field
      ? `${base} border-lpu-maroon ring-lpu-maroon/30 ring-[3px]`
      : `${base} border-input`;
  }

  /** Apply a keyboard token to the active text field. */
  protected type(token: string): void {
    const field = this.activeField();
    if (!field) return;
    if (token === 'DONE') {
      if (field === 'name') {
        this.activeField.set('studentId');
        if (typeof document !== 'undefined') document.getElementById('sid')?.focus();
      } else {
        this.activeField.set(null);
        if (typeof document !== 'undefined') document.getElementById('request')?.focus();
      }
      return;
    }
    const sig = field === 'name' ? this.name : this.studentId;
    if (token === 'BACKSPACE') sig.set(sig().slice(0, -1));
    else if (token === 'SPACE') sig.set(sig() + ' ');
    else sig.set(sig() + token);
  }

  protected tapRfid(): void {
    // Stub: a real reader would push the scanned student record here.
    this.rfidTapped.set(true);
    this.activeField.set(null);
    if (!this.name()) this.name.set('Juan Dela Cruz');
    if (!this.studentId()) this.studentId.set('2021-00123');
  }

  protected generate(): void {
    this.activeField.set(null);
    const t = this.store.createTicket({
      serviceType: this.serviceType(),
      name: this.name(),
      studentId: this.studentId(),
      request: this.request(),
    });
    this.ticket.set(t);
    // Give Angular and the browser time to render the overlay before triggering the print dialog.
    setTimeout(() => this.print(), 100);

    // Auto-hide the ticket and reset the form after 10 seconds
    this.resetTimer = setTimeout(() => this.reset(), 10000);
  }

  protected print(): void {
    if (typeof window !== 'undefined') window.print();
  }

  protected reset(): void {
    if (this.resetTimer) clearTimeout(this.resetTimer);
    this.ticket.set(null);
    this.name.set('');
    this.studentId.set('');
    this.rfidTapped.set(false);
    this.activeField.set(null);
    this.request.set('');
  }
}
