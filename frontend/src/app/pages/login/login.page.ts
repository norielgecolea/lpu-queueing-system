import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { LpuButton } from '../../shared/lpu-button';
import { AuthStore, Role } from '../../core/auth.store';
import { ServiceType } from '../../core/queue.models';

@Component({
  selector: 'lpu-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, RouterLink, NgIcon, HlmInput, HlmLabel, LpuButton],
  template: `
    <div class="grid min-h-dvh lg:grid-cols-2">
      <!-- Brand panel -->
      <aside
        class="bg-lpu-maroon text-primary-foreground relative hidden flex-col justify-between p-12 lg:flex"
      >
        <div class="flex items-center gap-3">
          <img src="favicon.svg" alt="LPU" class="size-12 rounded-xl bg-white/95 p-1" />
          <div class="text-sm font-semibold tracking-wide uppercase">Queue Management</div>
        </div>

        <div class="space-y-4">
          <h1 class="text-4xl font-bold leading-tight">Learn Different.<br />Live Different</h1>
        </div>

        <div class="flex gap-3 text-sm">
          <a
            routerLink="/customer"
            class="hover:bg-lpu-gold hover:text-lpu-maroon inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 transition-colors"
          >
            <ng-icon name="lucideTicket" class="text-base" /> Customer Kiosk
          </a>
          <a
            routerLink="/display"
            class="hover:bg-lpu-gold hover:text-lpu-maroon inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 transition-colors"
          >
            <ng-icon name="lucideMonitor" class="text-base" /> Display Board
          </a>
        </div>
      </aside>

      <!-- Form panel -->
      <main class="flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <form (ngSubmit)="submit()" class="w-full max-w-md space-y-8">
          <div class="space-y-2">
            <div class="flex items-center gap-3 lg:hidden">
              <img src="favicon.svg" alt="LPU" class="size-10" />
              <span class="text-lpu-maroon text-lg font-semibold">Queue Management</span>
            </div>
            <h2 class="text-lpu-maroon text-4xl font-bold tracking-tight">Sign In</h2>
          </div>

          <!-- Role -->
          <div class="space-y-3">
            <span hlmLabel class="text-lg">Role</span>
            <div class="grid grid-cols-2 gap-4">
              @for (r of roles; track r.value) {
                <button
                  lpuBtn
                  type="button"
                  [variant]="role() === r.value ? 'primary' : 'secondary'"
                  (click)="role.set(r.value)"
                  class="h-12 gap-2 text-base"
                >
                  <ng-icon [name]="r.icon" class="text-lg" />
                  {{ r.label }}
                </button>
              }
            </div>
          </div>

          <div class="space-y-3">
            <label hlmLabel for="username" class="text-lg">Username</label>
            <input
              hlmInput
              id="username"
              class="h-14 w-full px-4 text-lg"
              [(ngModel)]="username"
              name="username"
              placeholder="e.g. jdcruz"
              autocomplete="username"
            />
          </div>

          <div class="space-y-3">
            <label hlmLabel for="password" class="text-lg">Password</label>
            <input
              hlmInput
              id="password"
              type="password"
              class="h-14 w-full px-4 text-lg"
              [(ngModel)]="password"
              name="password"
              placeholder="••••••••"
              autocomplete="current-password"
            />
          </div>

          @if (error()) {
            <p class="text-destructive text-base">{{ error() }}</p>
          }

          <button lpuBtn type="submit" size="lg" class="h-14 w-full text-lg">
            <ng-icon name="lucideLogIn" class="text-xl" /> Sign in
          </button>

          <div class="flex justify-between gap-3 lg:hidden">
            <a
              routerLink="/customer"
              class="text-lpu-maroon text-base underline-offset-4 hover:underline"
            >
              Customer Kiosk
            </a>
            <a
              routerLink="/display"
              class="text-lpu-maroon text-base underline-offset-4 hover:underline"
            >
              Display Board
            </a>
          </div>
        </form>
      </main>
    </div>
  `,
})
export class LoginPage {
  private readonly auth = inject(AuthStore);
  private readonly router = inject(Router);

  protected readonly username = signal('');
  protected readonly password = signal('');
  protected readonly role = signal<Role>('teller');
  protected readonly serviceType = signal<ServiceType>('cashier');
  protected readonly error = signal('');

  protected readonly roles = [
    { value: 'teller' as Role, label: 'Teller', icon: 'lucideUser' },
    { value: 'admin' as Role, label: 'Administrator', icon: 'lucideLock' },
  ];

  protected submit(): void {
    if (!this.username().trim()) {
      this.error.set('Enter your username to continue.');
      return;
    }
    this.auth.login({
      username: this.username().trim(),
      role: this.role(),
      serviceType: this.serviceType(),
    });
    this.router.navigateByUrl('/teller');
  }
}
