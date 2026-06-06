import './polyfills.server.mjs';
import {
  AuthStore,
  Router,
  RouterLink
} from "./chunk-JDLJP62J.mjs";
import {
  BrnFieldControl,
  BrnFieldControlDescribedBy,
  DefaultValueAccessor,
  FormsModule,
  HlmLabel,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  provideBrnLabelable,
  ɵNgNoValidate
} from "./chunk-73JWNK3M.mjs";
import {
  LpuButton,
  classes
} from "./chunk-CSM2SHFB.mjs";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  NgIcon,
  booleanAttribute,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BESZRXX3.mjs";
import "./chunk-T2KOBY73.mjs";

// node_modules/@spartan-ng/brain/fesm2022/spartan-ng-brain-input.mjs
var BrnInput = class _BrnInput {
  static _id = 0;
  _fieldControl = inject(BrnFieldControl, {
    optional: true
  });
  /** The id of the input. */
  id = input(`brn-input-${++_BrnInput._id}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  /** Whether to force the input into an invalid state. */
  forceInvalid = input(false, ...ngDevMode ? [{
    debugName: "forceInvalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  labelableId = this.id;
  _ariaInvalid = this._fieldControl?.invalid;
  _touched = this._fieldControl?.touched;
  _dirty = this._fieldControl?.dirty;
  _spartanInvalid = computed(() => this.forceInvalid() || this._fieldControl?.spartanInvalid(), ...ngDevMode ? [{
    debugName: "_spartanInvalid"
  }] : []);
  /** @nocollapse */
  static \u0275fac = function BrnInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrnInput)();
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BrnInput,
    selectors: [["", "brnInput", ""]],
    hostVars: 6,
    hostBindings: function BrnInput_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id());
        \u0275\u0275attribute("aria-invalid", (ctx._ariaInvalid == null ? null : ctx._ariaInvalid()) ? "true" : null)("data-invalid", (ctx._ariaInvalid == null ? null : ctx._ariaInvalid()) ? "true" : null)("data-touched", (ctx._touched == null ? null : ctx._touched()) ? "true" : null)("data-dirty", (ctx._dirty == null ? null : ctx._dirty()) ? "true" : null)("data-matches-spartan-invalid", ctx._spartanInvalid() ? "true" : null);
      }
    },
    inputs: {
      id: [1, "id"],
      forceInvalid: [1, "forceInvalid"]
    },
    features: [\u0275\u0275ProvidersFeature([provideBrnLabelable(_BrnInput)]), \u0275\u0275HostDirectivesFeature([BrnFieldControl])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnInput, [{
    type: Directive,
    args: [{
      selector: "[brnInput]",
      providers: [provideBrnLabelable(BrnInput)],
      hostDirectives: [BrnFieldControl],
      host: {
        "[id]": "id()",
        "[attr.aria-invalid]": '_ariaInvalid?.() ? "true" : null',
        "[attr.data-invalid]": '_ariaInvalid?.() ? "true" : null',
        "[attr.data-touched]": '_touched?.() ? "true" : null',
        "[attr.data-dirty]": '_dirty?.() ? "true" : null',
        "[attr.data-matches-spartan-invalid]": '_spartanInvalid() ? "true" : null'
      }
    }]
  }], null, {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    forceInvalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "forceInvalid",
        required: false
      }]
    }]
  });
})();

// libs/ui/input/src/lib/hlm-input.ts
var HlmInput = class _HlmInput {
  constructor() {
    classes(() => "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 data-[matches-spartan-invalid=true]:ring-destructive/20 dark:data-[matches-spartan-invalid=true]:ring-destructive/40 data-[matches-spartan-invalid=true]:border-destructive dark:data-[matches-spartan-invalid=true]:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 data-[matches-spartan-invalid=true]:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50");
  }
  static \u0275fac = function HlmInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmInput, selectors: [["", "hlmInput", ""]], features: [\u0275\u0275HostDirectivesFeature([{ directive: BrnInput, inputs: ["id", "id", "forceInvalid", "forceInvalid"] }, BrnFieldControlDescribedBy])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmInput, [{
    type: Directive,
    args: [{
      selector: "[hlmInput]",
      hostDirectives: [
        { directive: BrnInput, inputs: ["id", "forceInvalid"] },
        BrnFieldControlDescribedBy
      ]
    }]
  }], () => [], null);
})();

// src/app/pages/login/login.page.ts
var _forTrack0 = ($index, $item) => $item.value;
function LoginPage_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function LoginPage_For_32_Template_button_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.role.set(r_r2.value));
    });
    \u0275\u0275element(1, "ng-icon", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("variant", ctx_r2.role() === r_r2.value ? "primary" : "secondary");
    \u0275\u0275advance();
    \u0275\u0275property("name", r_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r2.label, " ");
  }
}
function LoginPage_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
var LoginPage = class _LoginPage {
  auth = inject(AuthStore);
  router = inject(Router);
  username = signal("", ...ngDevMode ? [{ debugName: "username" }] : (
    /* istanbul ignore next */
    []
  ));
  password = signal("", ...ngDevMode ? [{ debugName: "password" }] : (
    /* istanbul ignore next */
    []
  ));
  role = signal("teller", ...ngDevMode ? [{ debugName: "role" }] : (
    /* istanbul ignore next */
    []
  ));
  serviceType = signal("cashier", ...ngDevMode ? [{ debugName: "serviceType" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  roles = [
    { value: "teller", label: "Teller", icon: "lucideUser" },
    { value: "admin", label: "Administrator", icon: "lucideLock" }
  ];
  submit() {
    if (!this.username().trim()) {
      this.error.set("Enter your username to continue.");
      return;
    }
    this.auth.login({
      username: this.username().trim(),
      role: this.role(),
      serviceType: this.serviceType()
    });
    this.router.navigateByUrl("/teller");
  }
  static \u0275fac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["lpu-login"]], decls: 50, vars: 3, consts: [[1, "grid", "min-h-dvh", "lg:grid-cols-2"], [1, "bg-lpu-maroon", "text-primary-foreground", "relative", "hidden", "flex-col", "justify-between", "p-12", "lg:flex"], [1, "flex", "items-center", "gap-3"], ["src", "favicon.svg", "alt", "LPU", 1, "size-12", "rounded-xl", "bg-white/95", "p-1"], [1, "text-sm", "font-semibold", "tracking-wide", "uppercase"], [1, "space-y-4"], [1, "text-4xl", "font-bold", "leading-tight"], [1, "flex", "gap-3", "text-sm"], ["routerLink", "/customer", 1, "hover:bg-lpu-gold", "hover:text-lpu-maroon", "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-white/20", "px-3", "py-2", "transition-colors"], ["name", "lucideTicket", 1, "text-base"], ["routerLink", "/display", 1, "hover:bg-lpu-gold", "hover:text-lpu-maroon", "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-white/20", "px-3", "py-2", "transition-colors"], ["name", "lucideMonitor", 1, "text-base"], [1, "flex", "items-center", "justify-center", "p-6", "sm:p-12", "lg:p-16"], [1, "w-full", "max-w-md", "space-y-8", 3, "ngSubmit"], [1, "space-y-2"], [1, "flex", "items-center", "gap-3", "lg:hidden"], ["src", "favicon.svg", "alt", "LPU", 1, "size-10"], [1, "text-lpu-maroon", "text-lg", "font-semibold"], [1, "text-lpu-maroon", "text-4xl", "font-bold", "tracking-tight"], [1, "space-y-3"], ["hlmLabel", "", 1, "text-lg"], [1, "grid", "grid-cols-2", "gap-4"], ["lpuBtn", "", "type", "button", 1, "h-12", "gap-2", "text-base", 3, "variant"], ["hlmLabel", "", "for", "username", 1, "text-lg"], ["hlmInput", "", "id", "username", "name", "username", "placeholder", "e.g. jdcruz", "autocomplete", "username", 1, "h-14", "w-full", "px-4", "text-lg", 3, "ngModelChange", "ngModel"], ["hlmLabel", "", "for", "password", 1, "text-lg"], ["hlmInput", "", "id", "password", "type", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "h-14", "w-full", "px-4", "text-lg", 3, "ngModelChange", "ngModel"], [1, "text-destructive", "text-base"], ["lpuBtn", "", "type", "submit", "size", "lg", 1, "h-14", "w-full", "text-lg"], ["name", "lucideLogIn", 1, "text-xl"], [1, "flex", "justify-between", "gap-3", "lg:hidden"], ["routerLink", "/customer", 1, "text-lpu-maroon", "text-base", "underline-offset-4", "hover:underline"], ["routerLink", "/display", 1, "text-lpu-maroon", "text-base", "underline-offset-4", "hover:underline"], ["lpuBtn", "", "type", "button", 1, "h-12", "gap-2", "text-base", 3, "click", "variant"], [1, "text-lg", 3, "name"]], template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275text(5, "Queue Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "h1", 6);
      \u0275\u0275text(8, "Learn Different.");
      \u0275\u0275element(9, "br");
      \u0275\u0275text(10, "Live Different");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "a", 8);
      \u0275\u0275element(13, "ng-icon", 9);
      \u0275\u0275text(14, " Customer Kiosk ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 10);
      \u0275\u0275element(16, "ng-icon", 11);
      \u0275\u0275text(17, " Display Board ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "main", 12)(19, "form", 13);
      \u0275\u0275listener("ngSubmit", function LoginPage_Template_form_ngSubmit_19_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 15);
      \u0275\u0275element(22, "img", 16);
      \u0275\u0275elementStart(23, "span", 17);
      \u0275\u0275text(24, "Queue Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "h2", 18);
      \u0275\u0275text(26, "Sign In");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 19)(28, "span", 20);
      \u0275\u0275text(29, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 21);
      \u0275\u0275repeaterCreate(31, LoginPage_For_32_Template, 3, 3, "button", 22, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 19)(34, "label", 23);
      \u0275\u0275text(35, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 19)(38, "label", 25);
      \u0275\u0275text(39, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(41, LoginPage_Conditional_41_Template, 2, 1, "p", 27);
      \u0275\u0275elementStart(42, "button", 28);
      \u0275\u0275element(43, "ng-icon", 29);
      \u0275\u0275text(44, " Sign in ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 30)(46, "a", 31);
      \u0275\u0275text(47, " Customer Kiosk ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 32);
      \u0275\u0275text(49, " Display Board ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(31);
      \u0275\u0275repeater(ctx.roles);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 41 : -1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, NgIcon, HlmInput, HlmLabel, LpuButton], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{
      selector: "lpu-login",
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
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
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
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/login/login.page.ts", lineNumber: 130 });
})();
export {
  LoginPage
};
//# sourceMappingURL=chunk-UAZ2BI3L.mjs.map
