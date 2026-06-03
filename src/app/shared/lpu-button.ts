import { Directive, computed, input } from '@angular/core';
import { BrnButton } from '@spartan-ng/brain/button';
import { hlm } from '@spartan-ng/helm/utils';
import { buttonVariants, ButtonVariants } from '@spartan-ng/helm/button';
import type { ClassValue } from 'clsx';

export type LpuButtonVariant = 'primary' | 'secondary';

/** LPU brand color classes per variant; merged over the hlm sizing/layout base. */
const VARIANT_CLASSES: Record<LpuButtonVariant, string> = {
  primary:
    'bg-lpu-maroon text-white border-lpu-maroon hover:bg-lpu-gold hover:text-lpu-maroon hover:border-lpu-gold disabled:opacity-50 disabled:pointer-events-none',
  secondary:
    'bg-transparent text-lpu-maroon dark:text-lpu-gold border border-lpu-maroon dark:border-lpu-gold ' +
    'hover:bg-lpu-gold hover:text-lpu-maroon hover:border-lpu-gold ' +
    'dark:hover:bg-lpu-gold dark:hover:text-lpu-maroon dark:hover:border-lpu-gold disabled:opacity-50 disabled:pointer-events-none',
};

/**
 * Reusable LPU-branded button. Borrows the spartan hlm button base (sizing,
 * layout, focus ring, icon handling) and swaps in the LPU primary/secondary
 * color scheme. Use on a <button> or <a>:
 *   <button lpuBtn>Save</button>
 *   <button lpuBtn variant="secondary" size="lg">Cancel</button>
 */
@Directive({
  selector: 'button[lpuBtn], a[lpuBtn]',
  exportAs: 'lpuBtn',
  hostDirectives: [{ directive: BrnButton, inputs: ['disabled'] }],
  host: {
    'data-slot': 'button',
    '[class]': '_computedClass()',
  },
})
export class LpuButton {
  public readonly variant = input<LpuButtonVariant>('primary');
  public readonly size = input<ButtonVariants['size']>('default');
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm(
      // 'ghost' contributes only layout/hover scaffolding; our colors win via tailwind-merge.
      buttonVariants({ variant: 'ghost', size: this.size() }),
      'transition-colors cursor-pointer',
      VARIANT_CLASSES[this.variant()],
      this.userClass(),
    ),
  );
}
