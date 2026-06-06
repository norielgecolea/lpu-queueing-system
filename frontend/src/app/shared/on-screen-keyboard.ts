import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

/**
 * Touch on-screen keyboard for the kiosk (no physical keyboard attached).
 * Emits semantic tokens via (key): a character to insert, or 'BACKSPACE',
 * 'SPACE', 'DONE'. The parent owns the text field and applies the edit.
 */
@Component({
  selector: 'lpu-keyboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="w-full border-t bg-white p-2 pb-6 md:p-6 md:pb-10 shadow-[0_-12px_40px_rgba(0,0,0,0.12)]"
    >
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-1 sm:gap-2 md:gap-3">
        @if (layout() === 'default') {
          @for (row of rows; track $index) {
            <div class="flex w-full justify-center gap-1 sm:gap-2 md:gap-3">
              @for (k of row; track k.token) {
                <button type="button" (click)="press(k.token)" [class]="keyClass()">
                  {{ display(k) }}
                </button>
              }
            </div>
          }

          <!-- Bottom row: shift, dash, space, backspace, done -->
          <div class="flex w-full justify-center gap-1 sm:gap-2 md:gap-3">
            <button type="button" (click)="toggleShift()" [class]="actionClass(shift())">
              Shift
            </button>
            <button type="button" (click)="press('-')" [class]="keyClass()">-</button>
            <button
              type="button"
              (click)="press('SPACE')"
              class="border-lpu-maroon text-lpu-maroon flex h-[8.5vw] max-h-22 flex-1 items-center justify-center rounded-lg border md:border-2 bg-white text-xl font-semibold shadow-sm active:bg-lpu-maroon active:text-white md:text-2xl"
            >
              Space
            </button>
            <button type="button" (click)="press('BACKSPACE')" [class]="actionClass(false)">
              &#9003;
            </button>
            <button type="button" (click)="press('DONE')" [class]="actionClass(false)">Done</button>
          </div>
        } @else {
          <!-- Numpad Layout -->
          <div class="mx-auto grid w-full max-w-xs grid-cols-3 gap-2 md:gap-3">
            @for (row of numpadRows; track $index) {
              @for (k of row; track k.token) {
                <button type="button" (click)="press(k.token)" [class]="numpadKeyClass()">
                  @if (k.token === 'BACKSPACE') {
                    &#9003;
                  } @else {
                    {{ k.token }}
                  }
                </button>
              }
            }
            <button
              type="button"
              (click)="press('DONE')"
              class="col-span-3 flex h-16 md:h-20 items-center justify-center rounded-xl border md:border-2 border-lpu-maroon bg-white text-2xl font-semibold text-lpu-maroon shadow-sm transition-transform active:scale-95 active:bg-lpu-maroon active:text-white"
            >
              Done
            </button>
          </div>
        }
      </div>
    </div>
  `,
})
export class OnScreenKeyboard {
  readonly key = output<string>();
  readonly layout = input<'default' | 'numpad'>('default');
  protected readonly shift = signal(false);

  protected readonly rows = [
    '1234567890'.split('').map((c) => ({ token: c, letter: false })),
    'qwertyuiop'.split('').map((c) => ({ token: c, letter: true })),
    'asdfghjkl'.split('').map((c) => ({ token: c, letter: true })),
    'zxcvbnm'.split('').map((c) => ({ token: c, letter: true })),
  ];

  protected readonly numpadRows = [
    '123'.split('').map((c) => ({ token: c })),
    '456'.split('').map((c) => ({ token: c })),
    '789'.split('').map((c) => ({ token: c })),
    [{ token: '-' }, { token: '0' }, { token: 'BACKSPACE' }],
  ];

  protected display(k: { token: string; letter: boolean }): string {
    return k.letter && this.shift() ? k.token.toUpperCase() : k.token;
  }

  protected press(token: string): void {
    if (token === 'SPACE' || token === 'BACKSPACE' || token === 'DONE' || token === '-') {
      this.key.emit(token);
      return;
    }
    this.key.emit(this.shift() ? token.toUpperCase() : token);
  }

  protected toggleShift(): void {
    this.shift.set(!this.shift());
  }

  protected keyClass(): string {
    return 'flex items-center justify-center w-[8.5vw] h-[8.5vw] max-w-[5.5rem] max-h-[5.5rem] rounded-lg border md:border-2 border-lpu-maroon bg-white text-2xl md:text-4xl font-semibold text-lpu-maroon shadow-sm transition-transform active:scale-95 active:bg-lpu-maroon active:text-white';
  }

  protected numpadKeyClass(): string {
    return 'flex items-center justify-center aspect-square rounded-xl border md:border-2 border-lpu-maroon bg-white text-3xl md:text-4xl font-semibold text-lpu-maroon shadow-sm transition-transform active:scale-95 active:bg-lpu-maroon active:text-white';
  }

  protected actionClass(active: boolean): string {
    const base =
      'flex flex-shrink-0 items-center justify-center h-[8.5vw] max-h-[5.5rem] rounded-lg border md:border-2 border-lpu-maroon px-4 md:px-6 text-lg md:text-2xl font-semibold shadow-sm transition-colors active:scale-95 active:bg-lpu-maroon active:text-white';
    return active ? `${base} bg-lpu-maroon text-white` : `${base} bg-white text-lpu-maroon`;
  }
}
