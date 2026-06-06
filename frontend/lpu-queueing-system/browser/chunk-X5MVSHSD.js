import {
  DefaultValueAccessor,
  FormsModule,
  HlmLabel,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-W35VZIMM.js";
import {
  LpuButton
} from "./chunk-BBXTOAOJ.js";
import {
  QueueStore,
  REQUESTS,
  SERVICE_LABEL
} from "./chunk-6HZLNQN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  Input,
  NgIcon,
  Output,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4FH5JZJS.js";

// src/app/shared/on-screen-keyboard.ts
var _forTrack0 = ($index, $item) => $item.token;
function OnScreenKeyboard_Conditional_2_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 4);
    \u0275\u0275domListener("click", function OnScreenKeyboard_Conditional_2_For_1_For_2_Template_button_click_0_listener() {
      const k_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.press(k_r3.token));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const k_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r3.keyClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.display(k_r3), " ");
  }
}
function OnScreenKeyboard_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, OnScreenKeyboard_Conditional_2_For_1_For_2_Template, 2, 3, "button", 6, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r5);
  }
}
function OnScreenKeyboard_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, OnScreenKeyboard_Conditional_2_For_1_Template, 3, 0, "div", 3, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementStart(2, "div", 3)(3, "button", 4);
    \u0275\u0275domListener("click", function OnScreenKeyboard_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleShift());
    });
    \u0275\u0275text(4, " Shift ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 4);
    \u0275\u0275domListener("click", function OnScreenKeyboard_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.press("-"));
    });
    \u0275\u0275text(6, "-");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 5);
    \u0275\u0275domListener("click", function OnScreenKeyboard_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.press("SPACE"));
    });
    \u0275\u0275text(8, " Space ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "button", 4);
    \u0275\u0275domListener("click", function OnScreenKeyboard_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.press("BACKSPACE"));
    });
    \u0275\u0275text(10, " \u232B ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "button", 4);
    \u0275\u0275domListener("click", function OnScreenKeyboard_Conditional_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.press("DONE"));
    });
    \u0275\u0275text(12, "Done");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.rows);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.actionClass(ctx_r3.shift()));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.keyClass());
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r3.actionClass(false));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.actionClass(false));
  }
}
function OnScreenKeyboard_Conditional_3_For_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u232B ");
  }
}
function OnScreenKeyboard_Conditional_3_For_2_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const k_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", k_r8.token, " ");
  }
}
function OnScreenKeyboard_Conditional_3_For_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 4);
    \u0275\u0275domListener("click", function OnScreenKeyboard_Conditional_3_For_2_For_1_Template_button_click_0_listener() {
      const k_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.press(k_r8.token));
    });
    \u0275\u0275conditionalCreate(1, OnScreenKeyboard_Conditional_3_For_2_For_1_Conditional_1_Template, 1, 0)(2, OnScreenKeyboard_Conditional_3_For_2_For_1_Conditional_2_Template, 1, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const k_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r3.numpadKeyClass());
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r8.token === "BACKSPACE" ? 1 : 2);
  }
}
function OnScreenKeyboard_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OnScreenKeyboard_Conditional_3_For_2_For_1_Template, 3, 3, "button", 6, _forTrack0);
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275repeater(row_r9);
  }
}
function OnScreenKeyboard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, OnScreenKeyboard_Conditional_3_For_2_Template, 2, 0, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementStart(3, "button", 7);
    \u0275\u0275domListener("click", function OnScreenKeyboard_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.press("DONE"));
    });
    \u0275\u0275text(4, " Done ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.numpadRows);
  }
}
var OnScreenKeyboard = class _OnScreenKeyboard {
  key = output();
  layout = input("default", ...ngDevMode ? [{ debugName: "layout" }] : (
    /* istanbul ignore next */
    []
  ));
  shift = signal(false, ...ngDevMode ? [{ debugName: "shift" }] : (
    /* istanbul ignore next */
    []
  ));
  rows = [
    "1234567890".split("").map((c) => ({ token: c, letter: false })),
    "qwertyuiop".split("").map((c) => ({ token: c, letter: true })),
    "asdfghjkl".split("").map((c) => ({ token: c, letter: true })),
    "zxcvbnm".split("").map((c) => ({ token: c, letter: true }))
  ];
  numpadRows = [
    "123".split("").map((c) => ({ token: c })),
    "456".split("").map((c) => ({ token: c })),
    "789".split("").map((c) => ({ token: c })),
    [{ token: "-" }, { token: "0" }, { token: "BACKSPACE" }]
  ];
  display(k) {
    return k.letter && this.shift() ? k.token.toUpperCase() : k.token;
  }
  press(token) {
    if (token === "SPACE" || token === "BACKSPACE" || token === "DONE" || token === "-") {
      this.key.emit(token);
      return;
    }
    this.key.emit(this.shift() ? token.toUpperCase() : token);
  }
  toggleShift() {
    this.shift.set(!this.shift());
  }
  keyClass() {
    return "flex items-center justify-center w-[8.5vw] h-[8.5vw] max-w-[5.5rem] max-h-[5.5rem] rounded-lg border md:border-2 border-lpu-maroon bg-white text-2xl md:text-4xl font-semibold text-lpu-maroon shadow-sm transition-transform active:scale-95 active:bg-lpu-maroon active:text-white";
  }
  numpadKeyClass() {
    return "flex items-center justify-center aspect-square rounded-xl border md:border-2 border-lpu-maroon bg-white text-3xl md:text-4xl font-semibold text-lpu-maroon shadow-sm transition-transform active:scale-95 active:bg-lpu-maroon active:text-white";
  }
  actionClass(active) {
    const base = "flex flex-shrink-0 items-center justify-center h-[8.5vw] max-h-[5.5rem] rounded-lg border md:border-2 border-lpu-maroon px-4 md:px-6 text-lg md:text-2xl font-semibold shadow-sm transition-colors active:scale-95 active:bg-lpu-maroon active:text-white";
    return active ? `${base} bg-lpu-maroon text-white` : `${base} bg-white text-lpu-maroon`;
  }
  static \u0275fac = function OnScreenKeyboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OnScreenKeyboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnScreenKeyboard, selectors: [["lpu-keyboard"]], inputs: { layout: [1, "layout"] }, outputs: { key: "key" }, decls: 4, vars: 1, consts: [[1, "w-full", "border-t", "bg-white", "p-2", "pb-6", "md:p-6", "md:pb-10", "shadow-[0_-12px_40px_rgba(0,0,0,0.12)]"], [1, "mx-auto", "flex", "w-full", "max-w-6xl", "flex-col", "gap-1", "sm:gap-2", "md:gap-3"], [1, "mx-auto", "grid", "w-full", "max-w-xs", "grid-cols-3", "gap-2", "md:gap-3"], [1, "flex", "w-full", "justify-center", "gap-1", "sm:gap-2", "md:gap-3"], ["type", "button", 3, "click"], ["type", "button", 1, "border-lpu-maroon", "text-lpu-maroon", "flex", "h-[8.5vw]", "max-h-22", "flex-1", "items-center", "justify-center", "rounded-lg", "border", "md:border-2", "bg-white", "text-xl", "font-semibold", "shadow-sm", "active:bg-lpu-maroon", "active:text-white", "md:text-2xl", 3, "click"], ["type", "button", 3, "class"], ["type", "button", 1, "col-span-3", "flex", "h-16", "md:h-20", "items-center", "justify-center", "rounded-xl", "border", "md:border-2", "border-lpu-maroon", "bg-white", "text-2xl", "font-semibold", "text-lpu-maroon", "shadow-sm", "transition-transform", "active:scale-95", "active:bg-lpu-maroon", "active:text-white", 3, "click"]], template: function OnScreenKeyboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, OnScreenKeyboard_Conditional_2_Template, 13, 8)(3, OnScreenKeyboard_Conditional_3_Template, 5, 0, "div", 2);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.layout() === "default" ? 2 : 3);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OnScreenKeyboard, [{
    type: Component,
    args: [{
      selector: "lpu-keyboard",
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
  `
    }]
  }], null, { key: [{ type: Output, args: ["key"] }], layout: [{ type: Input, args: [{ isSignal: true, alias: "layout", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnScreenKeyboard, { className: "OnScreenKeyboard", filePath: "src/app/shared/on-screen-keyboard.ts", lineNumber: 72 });
})();

// src/app/pages/customer/customer.page.ts
var _forTrack02 = ($index, $item) => $item.value;
function CustomerPage_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function CustomerPage_For_10_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectService(s_r2.value));
    });
    \u0275\u0275element(1, "ng-icon", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("variant", ctx_r2.serviceType() === s_r2.value ? "primary" : "secondary");
    \u0275\u0275advance();
    \u0275\u0275property("name", s_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.label);
  }
}
function CustomerPage_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275property("value", r_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4);
  }
}
function CustomerPage_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "section", 29)(2, "div", 30)(3, "div", 31);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementStart(5, "div", 33)(6, "p", 34);
    \u0275\u0275text(7, " Lyceum of the Philippines ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 36)(11, "div")(12, "p", 37);
    \u0275\u0275text(13, "Your Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "dl", 39)(17, "dt", 40);
    \u0275\u0275text(18, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dt", 40);
    \u0275\u0275text(22, "Student ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd", 41);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dt", 40);
    \u0275\u0275text(26, "Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd", 41);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dt", 40);
    \u0275\u0275text(30, "Issued");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd", 41);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "p", 42);
    \u0275\u0275text(35, " Please wait for your number on the display board. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 43)(37, "button", 44);
    \u0275\u0275listener("click", function CustomerPage_Conditional_38_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reset());
    });
    \u0275\u0275element(38, "ng-icon", 45);
    \u0275\u0275text(39, " New ticket ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r6 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r2.serviceLabel(t_r6.serviceType), " Queue Ticket");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r6.number, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r6.name || "Walk-in");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6.studentId || "Not provided");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6.request);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 6, t_r6.createdAt, "short"));
  }
}
function CustomerPage_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "lpu-keyboard", 46);
    \u0275\u0275listener("key", function CustomerPage_Conditional_39_Template_lpu_keyboard_key_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.type($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("layout", ctx_r2.activeField() === "studentId" ? "numpad" : "default");
  }
}
var CustomerPage = class _CustomerPage {
  store = inject(QueueStore);
  serviceType = signal("cashier", ...ngDevMode ? [{ debugName: "serviceType" }] : (
    /* istanbul ignore next */
    []
  ));
  name = signal("", ...ngDevMode ? [{ debugName: "name" }] : (
    /* istanbul ignore next */
    []
  ));
  studentId = signal("", ...ngDevMode ? [{ debugName: "studentId" }] : (
    /* istanbul ignore next */
    []
  ));
  request = signal("", ...ngDevMode ? [{ debugName: "request" }] : (
    /* istanbul ignore next */
    []
  ));
  rfidTapped = signal(false, ...ngDevMode ? [{ debugName: "rfidTapped" }] : (
    /* istanbul ignore next */
    []
  ));
  ticket = signal(null, ...ngDevMode ? [{ debugName: "ticket" }] : (
    /* istanbul ignore next */
    []
  ));
  activeField = signal(null, ...ngDevMode ? [{ debugName: "activeField" }] : (
    /* istanbul ignore next */
    []
  ));
  resetTimer;
  keyboardOpen = computed(() => this.activeField() !== null && this.ticket() === null, ...ngDevMode ? [{ debugName: "keyboardOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  requestOptions = computed(() => REQUESTS[this.serviceType()], ...ngDevMode ? [{ debugName: "requestOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  isValid = computed(() => this.name().trim().length > 0 && this.studentId().trim().length > 0 && this.request() !== "", ...ngDevMode ? [{ debugName: "isValid" }] : (
    /* istanbul ignore next */
    []
  ));
  services = [
    {
      value: "cashier",
      label: "Cashier",
      icon: "lucideCreditCard"
    },
    {
      value: "registrar",
      label: "Registrar",
      icon: "lucideFileText"
    }
  ];
  serviceLabel(t) {
    return SERVICE_LABEL[t];
  }
  selectService(t) {
    this.serviceType.set(t);
    this.request.set("");
  }
  focusField(field) {
    this.activeField.set(field);
  }
  fieldClass(field) {
    const base = "flex h-14 w-full items-center rounded-xl border-2 bg-background px-4 text-xl text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground md:h-16 md:px-5 md:text-2xl";
    return this.activeField() === field ? `${base} border-lpu-maroon ring-lpu-maroon/30 ring-[3px]` : `${base} border-input`;
  }
  /** Apply a keyboard token to the active text field. */
  type(token) {
    const field = this.activeField();
    if (!field)
      return;
    if (token === "DONE") {
      if (field === "name") {
        this.activeField.set("studentId");
        if (typeof document !== "undefined")
          document.getElementById("sid")?.focus();
      } else {
        this.activeField.set(null);
        if (typeof document !== "undefined")
          document.getElementById("request")?.focus();
      }
      return;
    }
    const sig = field === "name" ? this.name : this.studentId;
    if (token === "BACKSPACE")
      sig.set(sig().slice(0, -1));
    else if (token === "SPACE")
      sig.set(sig() + " ");
    else
      sig.set(sig() + token);
  }
  tapRfid() {
    this.rfidTapped.set(true);
    this.activeField.set(null);
    if (!this.name())
      this.name.set("Juan Dela Cruz");
    if (!this.studentId())
      this.studentId.set("2021-00123");
  }
  generate() {
    this.activeField.set(null);
    const t = this.store.createTicket({
      serviceType: this.serviceType(),
      name: this.name(),
      studentId: this.studentId(),
      request: this.request()
    });
    this.ticket.set(t);
    setTimeout(() => this.print(), 100);
    this.resetTimer = setTimeout(() => this.reset(), 1e4);
  }
  print() {
    if (typeof window !== "undefined")
      window.print();
  }
  reset() {
    if (this.resetTimer)
      clearTimeout(this.resetTimer);
    this.ticket.set(null);
    this.name.set("");
    this.studentId.set("");
    this.rfidTapped.set(false);
    this.activeField.set(null);
    this.request.set("");
  }
  static \u0275fac = function CustomerPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerPage, selectors: [["lpu-customer"]], hostAttrs: [1, "bg-muted/30", "flex", "h-dvh", "flex-col", "overflow-hidden", "print:block", "print:h-auto", "print:overflow-visible", "print:bg-transparent"], decls: 40, vars: 15, consts: [[1, "flex-1", "overflow-y-auto", "px-10", "py-10"], [1, "m-auto", "w-full", "max-w-4xl", "space-y-8", "md:space-y-10", "print:hidden"], [1, "space-y-2"], [1, "text-3xl", "md:text-4xl", "font-bold", "tracking-tight", "text-lpu-maroon"], [1, "space-y-3", "md:space-y-4"], ["hlmLabel", "", 1, "text-2xl", "md:text-3xl", "font-bold"], [1, "grid", "grid-cols-2", "gap-4", "md:gap-6"], ["lpuBtn", "", "type", "button", 1, "h-auto", "flex-col", "gap-2", "rounded-2xl", "py-6", "md:gap-3", "md:py-8", 3, "variant"], ["hlmLabel", "", "for", "name", 1, "text-2xl", "md:text-3xl", "font-bold"], ["id", "name", "type", "text", 3, "ngModelChange", "focus", "ngModel", "placeholder"], ["hlmLabel", "", "for", "sid", 1, "text-2xl", "md:text-3xl", "font-bold"], ["id", "sid", "type", "text", 3, "ngModelChange", "focus", "ngModel", "placeholder"], ["hlmLabel", "", "for", "request", 1, "text-2xl", "md:text-3xl", "font-bold"], [1, "relative"], ["id", "request", 1, "border-input", "bg-background", "focus-visible:border-ring", "focus-visible:ring-ring/50", "h-14", "w-full", "appearance-none", "rounded-xl", "border-2", "px-4", "pr-12", "text-xl", "shadow-sm", "outline-none", "focus-visible:ring-[3px]", "md:h-16", "md:px-5", "md:text-2xl", 3, "ngModelChange", "focus", "ngModel"], ["value", "", "disabled", "", "hidden", ""], [1, "text-foreground", 3, "value"], ["name", "lucideChevronDown", 1, "text-muted-foreground", "pointer-events-none", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-2xl", "md:right-5", "md:text-3xl"], ["type", "button", 1, "border-input", "hover:border-lpu-gold", "flex", "w-full", "items-center", "gap-4", "rounded-xl", "border-2", "border-dashed", "bg-background", "p-4", "text-left", "transition-colors", "md:p-6", 3, "click"], [1, "bg-lpu-gold/20", "text-lpu-maroon", "grid", "size-12", "place-items-center", "rounded-xl", "md:size-16"], ["name", "lucideNfc", 1, "text-3xl", "md:text-4xl"], [1, "block", "text-xl", "font-medium", "md:text-2xl"], ["lpuBtn", "", "size", "lg", 1, "h-16", "w-full", "text-2xl", "md:h-20", "md:text-3xl", "rounded-xl", 3, "click", "disabled"], ["name", "lucideTicket", 1, "text-3xl", "md:text-4xl"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-background/80", "p-3", "md:p-4", "backdrop-blur-sm", "print:absolute", "print:inset-0", "print:block", "print:bg-transparent", "print:p-0"], [3, "layout"], ["lpuBtn", "", "type", "button", 1, "h-auto", "flex-col", "gap-2", "rounded-2xl", "py-6", "md:gap-3", "md:py-8", 3, "click", "variant"], [1, "text-5xl", "md:text-6xl", 3, "name"], [1, "text-2xl", "font-semibold"], [1, "w-full", "max-w-[94vw]", "sm:max-w-5xl"], [1, "overflow-hidden", "rounded-[2.5rem]", "border-2", "bg-card", "shadow-2xl", "print:border-none", "print:shadow-none"], [1, "bg-lpu-maroon", "text-primary-foreground", "flex", "items-center", "gap-6", "px-10", "py-8"], ["src", "favicon.svg", "alt", "LPU", 1, "size-16", "rounded-xl", "bg-white/95", "p-2"], [1, "text-left"], [1, "text-sm", "uppercase", "tracking-widest", "opacity-80"], [1, "text-3xl", "font-semibold"], [1, "space-y-8", "px-10", "py-12", "text-center"], [1, "text-muted-foreground", "text-lg", "uppercase", "tracking-widest"], [1, "text-lpu-maroon", "text-[10rem]", "font-black", "tracking-tight", "leading-none"], [1, "mx-auto", "grid", "max-w-lg", "grid-cols-3", "gap-y-5", "text-left", "text-2xl"], [1, "text-muted-foreground"], [1, "col-span-2", "font-medium"], [1, "text-muted-foreground", "border-t-2", "border-dashed", "pt-8", "text-xl"], [1, "mt-8", "print:hidden"], ["lpuBtn", "", "size", "lg", 1, "h-24", "w-full", "rounded-2xl", "text-3xl", 3, "click"], ["name", "lucideTicket", 1, "text-4xl"], [3, "key", "layout"]], template: function CustomerPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, " What do you need today? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7, "Service type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275repeaterCreate(9, CustomerPage_For_10_Template, 4, 3, "button", 7, _forTrack02);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
      \u0275\u0275text(13, "Full name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275listener("ngModelChange", function CustomerPage_Template_input_ngModelChange_14_listener($event) {
        return ctx.name.set($event);
      })("focus", function CustomerPage_Template_input_focus_14_listener() {
        return ctx.focusField("name");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 4)(16, "label", 10);
      \u0275\u0275text(17, "Student ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 11);
      \u0275\u0275listener("ngModelChange", function CustomerPage_Template_input_ngModelChange_18_listener($event) {
        return ctx.studentId.set($event.replace(/[^0-9-]/g, ""));
      })("focus", function CustomerPage_Template_input_focus_18_listener() {
        return ctx.focusField("studentId");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 4)(20, "label", 12);
      \u0275\u0275text(21, "Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13)(23, "select", 14);
      \u0275\u0275listener("ngModelChange", function CustomerPage_Template_select_ngModelChange_23_listener($event) {
        return ctx.request.set($event);
      })("focus", function CustomerPage_Template_select_focus_23_listener() {
        return ctx.activeField.set(null);
      });
      \u0275\u0275elementStart(24, "option", 15);
      \u0275\u0275text(25, "Select a request");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(26, CustomerPage_For_27_Template, 2, 2, "option", 16, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "ng-icon", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "button", 18);
      \u0275\u0275listener("click", function CustomerPage_Template_button_click_29_listener() {
        return ctx.tapRfid();
      });
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275element(31, "ng-icon", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span")(33, "span", 21);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "button", 22);
      \u0275\u0275listener("click", function CustomerPage_Template_button_click_35_listener() {
        return ctx.generate();
      });
      \u0275\u0275element(36, "ng-icon", 23);
      \u0275\u0275text(37, " Submit ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(38, CustomerPage_Conditional_38_Template, 40, 9, "div", 24);
      \u0275\u0275conditionalCreate(39, CustomerPage_Conditional_39_Template, 1, 1, "lpu-keyboard", 25);
    }
    if (rf & 2) {
      let tmp_12_0;
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.services);
      \u0275\u0275advance(5);
      \u0275\u0275classMap(ctx.fieldClass("name"));
      \u0275\u0275property("ngModel", ctx.name())("placeholder", ctx.activeField() === "name" ? "" : "Enter full name");
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.fieldClass("studentId"));
      \u0275\u0275property("ngModel", ctx.studentId())("placeholder", ctx.activeField() === "studentId" ? "" : "Enter student ID");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("text-muted-foreground", !ctx.request());
      \u0275\u0275property("ngModel", ctx.request());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.requestOptions());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.rfidTapped() ? "RFID detected" : "Tap RFID card", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isValid());
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_12_0 = ctx.ticket()) ? 38 : -1, tmp_12_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.keyboardOpen() ? 39 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, NgIcon, HlmLabel, LpuButton, OnScreenKeyboard, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerPage, [{
    type: Component,
    args: [{
      selector: "lpu-customer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [FormsModule, DatePipe, NgIcon, HlmLabel, LpuButton, OnScreenKeyboard],
      host: {
        class: "bg-muted/30 flex h-dvh flex-col overflow-hidden print:block print:h-auto print:overflow-visible print:bg-transparent"
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
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerPage, { className: "CustomerPage", filePath: "src/app/pages/customer/customer.page.ts", lineNumber: 192 });
})();
export {
  CustomerPage
};
//# sourceMappingURL=chunk-X5MVSHSD.js.map
