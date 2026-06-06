import './polyfills.server.mjs';
import {
  AuthStore,
  Router,
  RouterLink
} from "./chunk-JDLJP62J.mjs";
import {
  LpuButton,
  classes,
  cva
} from "./chunk-CSM2SHFB.mjs";
import {
  QueueStore,
  SERVICE_LABEL
} from "./chunk-LGLLNDIQ.mjs";
import {
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  Directive,
  InjectionToken,
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
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BESZRXX3.mjs";
import "./chunk-T2KOBY73.mjs";

// libs/ui/badge/src/lib/hlm-badge.ts
var badgeVariants = cva("h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&>ng-icon]:text-[calc(var(--spacing)*3)] group/badge focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-[3px] [&>ng-icon]:pointer-events-none", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
      secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
      destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
      outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
      ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
      link: "text-primary underline-offset-4 hover:underline"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var HlmBadge = class _HlmBadge {
  variant = input("default", ...ngDevMode ? [{ debugName: "variant" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    classes(() => badgeVariants({ variant: this.variant() }));
  }
  static \u0275fac = function HlmBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmBadge)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmBadge, selectors: [["", "hlmBadge", ""], ["hlm-badge"]], hostAttrs: ["data-slot", "badge"], hostVars: 1, hostBindings: function HlmBadge_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-variant", ctx.variant());
    }
  }, inputs: { variant: [1, "variant"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmBadge, [{
    type: Directive,
    args: [{
      selector: "[hlmBadge],hlm-badge",
      host: {
        "data-slot": "badge",
        "[attr.data-variant]": "variant()"
      }
    }]
  }], () => [], { variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }] });
})();

// libs/ui/table/src/lib/hlm-table.ts
var HlmTableContainer = class _HlmTableContainer {
  constructor() {
    classes(() => "relative w-full overflow-x-auto");
  }
  static \u0275fac = function HlmTableContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmTableContainer)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmTableContainer, selectors: [["div", "hlmTableContainer", ""]], hostAttrs: ["data-slot", "table-container"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmTableContainer, [{
    type: Directive,
    args: [{
      selector: "div[hlmTableContainer]",
      host: { "data-slot": "table-container" }
    }]
  }], () => [], null);
})();
var HlmTable = class _HlmTable {
  constructor() {
    classes(() => "w-full caption-bottom text-sm");
  }
  static \u0275fac = function HlmTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmTable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmTable, selectors: [["table", "hlmTable", ""]], hostAttrs: ["data-slot", "table"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmTable, [{
    type: Directive,
    args: [{
      selector: "table[hlmTable]",
      host: { "data-slot": "table" }
    }]
  }], () => [], null);
})();
var HlmTHead = class _HlmTHead {
  constructor() {
    classes(() => "[&_tr]:border-b");
  }
  static \u0275fac = function HlmTHead_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmTHead)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmTHead, selectors: [["thead", "hlmTHead", ""], ["thead", "hlmTableHeader", ""]], hostAttrs: ["data-slot", "table-header"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmTHead, [{
    type: Directive,
    args: [{
      selector: "thead[hlmTHead],thead[hlmTableHeader]",
      host: { "data-slot": "table-header" }
    }]
  }], () => [], null);
})();
var HlmTBody = class _HlmTBody {
  constructor() {
    classes(() => "[&_tr:last-child]:border-0");
  }
  static \u0275fac = function HlmTBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmTBody)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmTBody, selectors: [["tbody", "hlmTBody", ""], ["tbody", "hlmTableBody", ""]], hostAttrs: ["data-slot", "table-body"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmTBody, [{
    type: Directive,
    args: [{
      selector: "tbody[hlmTBody],tbody[hlmTableBody]",
      host: { "data-slot": "table-body" }
    }]
  }], () => [], null);
})();
var HlmTFoot = class _HlmTFoot {
  constructor() {
    classes(() => "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0");
  }
  static \u0275fac = function HlmTFoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmTFoot)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmTFoot, selectors: [["tfoot", "hlmTFoot", ""], ["tfoot", "hlmTableFooter", ""]], hostAttrs: ["data-slot", "table-footer"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmTFoot, [{
    type: Directive,
    args: [{
      selector: "tfoot[hlmTFoot],tfoot[hlmTableFooter]",
      host: { "data-slot": "table-footer" }
    }]
  }], () => [], null);
})();
var HlmTr = class _HlmTr {
  constructor() {
    classes(() => "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors has-aria-expanded:bg-muted/50");
  }
  static \u0275fac = function HlmTr_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmTr)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmTr, selectors: [["tr", "hlmTr", ""], ["tr", "hlmTableRow", ""]], hostAttrs: ["data-slot", "table-row"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmTr, [{
    type: Directive,
    args: [{
      selector: "tr[hlmTr],tr[hlmTableRow]",
      host: { "data-slot": "table-row" }
    }]
  }], () => [], null);
})();
var HlmTh = class _HlmTh {
  constructor() {
    classes(() => "text-foreground h-10 px-2 text-start align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pe-0");
  }
  static \u0275fac = function HlmTh_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmTh)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmTh, selectors: [["th", "hlmTh", ""], ["th", "hlmTableHead", ""]], hostAttrs: ["data-slot", "table-head"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmTh, [{
    type: Directive,
    args: [{
      selector: "th[hlmTh],th[hlmTableHead]",
      host: { "data-slot": "table-head" }
    }]
  }], () => [], null);
})();
var HlmTd = class _HlmTd {
  constructor() {
    classes(() => "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pe-0");
  }
  static \u0275fac = function HlmTd_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmTd)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmTd, selectors: [["td", "hlmTd", ""], ["td", "hlmTableCell", ""]], hostAttrs: ["data-slot", "table-cell"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmTd, [{
    type: Directive,
    args: [{
      selector: "td[hlmTd],td[hlmTableCell]",
      host: { "data-slot": "table-cell" }
    }]
  }], () => [], null);
})();
var HlmCaption = class _HlmCaption {
  constructor() {
    classes(() => "text-muted-foreground mt-4 text-sm");
  }
  static \u0275fac = function HlmCaption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmCaption)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmCaption, selectors: [["caption", "hlmCaption", ""], ["caption", "hlmTableCaption", ""]], hostAttrs: ["data-slot", "table-caption"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmCaption, [{
    type: Directive,
    args: [{
      selector: "caption[hlmCaption],caption[hlmTableCaption]",
      host: { "data-slot": "table-caption" }
    }]
  }], () => [], null);
})();

// libs/ui/table/src/index.ts
var HlmTableImports = [
  HlmCaption,
  HlmTableContainer,
  HlmTable,
  HlmTBody,
  HlmTd,
  HlmTFoot,
  HlmTh,
  HlmTHead,
  HlmTr
];

// node_modules/@spartan-ng/brain/fesm2022/spartan-ng-brain-separator.mjs
var defaultConfig = {
  orientation: "horizontal"
};
var BrnSeparatorConfigToken = new InjectionToken("BrnSeparatorConfig");
function injectBrnSeparatorConfig() {
  return inject(BrnSeparatorConfigToken, {
    optional: true
  }) ?? defaultConfig;
}
var BrnSeparator = class _BrnSeparator {
  _config = injectBrnSeparatorConfig();
  /** Orientation of the separator. */
  orientation = input(this._config.orientation, ...ngDevMode ? [{
    debugName: "orientation"
  }] : []);
  /** Whether the separator is decorative. */
  decorative = input(true, ...ngDevMode ? [{
    debugName: "decorative",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  _role = computed(() => this.decorative() ? "none" : "separator", ...ngDevMode ? [{
    debugName: "_role"
  }] : []);
  _ariaOrientation = computed(() => this.decorative() ? void 0 : this.orientation() === "vertical" ? "vertical" : void 0, ...ngDevMode ? [{
    debugName: "_ariaOrientation"
  }] : []);
  /** @nocollapse */
  static \u0275fac = function BrnSeparator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrnSeparator)();
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BrnSeparator,
    selectors: [["", "brnSeparator", ""], ["brn-separator"]],
    hostVars: 3,
    hostBindings: function BrnSeparator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._role())("aria-orientation", ctx._ariaOrientation())("data-orientation", ctx.orientation());
      }
    },
    inputs: {
      orientation: [1, "orientation"],
      decorative: [1, "decorative"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnSeparator, [{
    type: Directive,
    args: [{
      selector: "[brnSeparator],brn-separator",
      host: {
        "[attr.role]": "_role()",
        "[attr.aria-orientation]": "_ariaOrientation()",
        "[attr.data-orientation]": "orientation()"
      }
    }]
  }], null, {
    orientation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "orientation",
        required: false
      }]
    }],
    decorative: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "decorative",
        required: false
      }]
    }]
  });
})();

// libs/ui/separator/src/lib/hlm-separator.ts
var hlmSeparatorClass = "inline-flex shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch";
var HlmSeparator = class _HlmSeparator {
  constructor() {
    classes(() => hlmSeparatorClass);
  }
  static \u0275fac = function HlmSeparator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HlmSeparator)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HlmSeparator, selectors: [["", "hlmSeparator", ""], ["hlm-separator"]], hostAttrs: ["data-slot", "separator"], features: [\u0275\u0275HostDirectivesFeature([{ directive: BrnSeparator, inputs: ["orientation", "orientation", "decorative", "decorative"] }])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HlmSeparator, [{
    type: Directive,
    args: [{
      selector: "[hlmSeparator],hlm-separator",
      hostDirectives: [{ directive: BrnSeparator, inputs: ["orientation", "decorative"] }],
      host: {
        "data-slot": "separator"
      }
    }]
  }], () => [], null);
})();

// src/app/pages/teller/teller.page.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function TellerPage_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function TellerPage_For_27_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setService(s_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.winChip(ctx_r2.serviceType() === s_r2.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2.label, " ");
  }
}
function TellerPage_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function TellerPage_For_32_Template_button_click_0_listener() {
      const w_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedWindowId.set(w_r5.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.winChip(ctx_r2.selectedWindowId() === w_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", w_r5.label, " ");
  }
}
function TellerPage_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div")(2, "p", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 50);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r6 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r6.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.name || "Walk-in");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", c_r6.studentId || "No ID", " \xB7 ", c_r6.request, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Called ", \u0275\u0275pipeBind2(10, 5, c_r6.calledAt, "shortTime"), " ");
  }
}
function TellerPage_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 51);
    \u0275\u0275text(2, "Idle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, "No active ticket. Call the next in queue.");
    \u0275\u0275elementEnd()();
  }
}
function TellerPage_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 53)(2, "p", 54);
    \u0275\u0275text(3, "Administrator tools");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 55);
    \u0275\u0275text(5, "Clear all tickets and counters.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function TellerPage_Conditional_58_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetAll());
    });
    \u0275\u0275element(7, "ng-icon", 56);
    \u0275\u0275text(8, " Reset queue ");
    \u0275\u0275elementEnd()();
  }
}
function TellerPage_Conditional_67_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 59)(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 64)(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r8.name || "Walk-in");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.studentId || "No ID");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.request);
  }
}
function TellerPage_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "table", 57)(2, "thead", 58)(3, "tr", 59)(4, "th", 60);
    \u0275\u0275text(5, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 61);
    \u0275\u0275text(7, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 61);
    \u0275\u0275text(9, "Request");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody", 62);
    \u0275\u0275repeaterCreate(11, TellerPage_Conditional_67_For_12_Template, 10, 4, "tr", 59, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r2.waiting());
  }
}
function TellerPage_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "ng-icon", 67);
    \u0275\u0275elementStart(2, "p", 52);
    \u0275\u0275text(3, "Queue is empty.");
    \u0275\u0275elementEnd()();
  }
}
function TellerPage_Conditional_76_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 59)(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 64)(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9.number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r9.name || "Walk-in");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9.studentId || "No ID");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9.request);
  }
}
function TellerPage_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "table", 57)(2, "thead", 58)(3, "tr", 59)(4, "th", 60);
    \u0275\u0275text(5, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 61);
    \u0275\u0275text(7, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 61);
    \u0275\u0275text(9, "Request");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody", 62);
    \u0275\u0275repeaterCreate(11, TellerPage_Conditional_76_For_12_Template, 10, 4, "tr", 59, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r2.served());
  }
}
function TellerPage_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "ng-icon", 68);
    \u0275\u0275elementStart(2, "p", 52);
    \u0275\u0275text(3, "No one served yet.");
    \u0275\u0275elementEnd()();
  }
}
var TellerPage = class _TellerPage {
  auth = inject(AuthStore);
  store = inject(QueueStore);
  router = inject(Router);
  session = this.auth.session;
  serviceType = signal(this.auth.session()?.serviceType ?? "cashier", ...ngDevMode ? [{ debugName: "serviceType" }] : (
    /* istanbul ignore next */
    []
  ));
  services = [
    { value: "cashier", label: "Cashier" },
    { value: "registrar", label: "Registrar" }
  ];
  setService(s) {
    this.serviceType.set(s);
    this.selectedWindowId.set("");
  }
  windows = computed(() => this.store.windows().filter((w) => w.serviceType === this.serviceType()), ...ngDevMode ? [{ debugName: "windows" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedWindowId = signal("", ...ngDevMode ? [{ debugName: "selectedWindowId" }] : (
    /* istanbul ignore next */
    []
  ));
  activeWindowId = computed(() => this.selectedWindowId() || this.windows()[0]?.id || "", ...ngDevMode ? [{ debugName: "activeWindowId" }] : (
    /* istanbul ignore next */
    []
  ));
  current = computed(() => {
    const id = this.activeWindowId();
    const w = this.store.windows().find((x) => x.id === id);
    return w?.currentTicketId ? this.store.tickets().find((t) => t.id === w.currentTicketId) ?? null : null;
  }, ...ngDevMode ? [{ debugName: "current" }] : (
    /* istanbul ignore next */
    []
  ));
  currentWindowLabel = computed(() => this.windows().find((w) => w.id === this.activeWindowId())?.label ?? "", ...ngDevMode ? [{ debugName: "currentWindowLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  waiting = computed(() => this.store.waiting().filter((t) => t.serviceType === this.serviceType()), ...ngDevMode ? [{ debugName: "waiting" }] : (
    /* istanbul ignore next */
    []
  ));
  served = computed(() => this.store.served().filter((t) => t.serviceType === this.serviceType()), ...ngDevMode ? [{ debugName: "served" }] : (
    /* istanbul ignore next */
    []
  ));
  serviceLabel() {
    return SERVICE_LABEL[this.serviceType()];
  }
  otherService() {
    return this.serviceType() === "cashier" ? "registrar" : "cashier";
  }
  winChip(active) {
    const base = "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors";
    return active ? `${base} border-lpu-maroon bg-lpu-maroon text-primary-foreground` : `${base} border-input bg-background hover:bg-accent/40`;
  }
  callNext() {
    this.store.callNext(this.activeWindowId());
  }
  recallCurrent() {
    this.store.recallCurrent(this.activeWindowId());
  }
  recallLast() {
    this.store.recallLast(this.activeWindowId());
  }
  complete() {
    this.store.complete(this.activeWindowId());
  }
  transfer() {
    this.store.transfer(this.activeWindowId(), this.otherService());
  }
  resetAll() {
    this.store.resetAll();
  }
  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }
  static \u0275fac = function TellerPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TellerPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TellerPage, selectors: [["lpu-teller"]], decls: 78, vars: 14, consts: [[1, "bg-muted/40", "min-h-dvh"], [1, "bg-lpu-maroon", "text-primary-foreground"], [1, "mx-auto", "flex", "max-w-6xl", "flex-wrap", "items-center", "justify-between", "gap-3", "px-5", "py-3"], [1, "flex", "items-center", "gap-3"], ["src", "favicon.svg", "alt", "LPU", 1, "size-10", "rounded-lg", "bg-white/95", "p-1"], [1, "text-sm", "font-semibold", "leading-none"], [1, "text-primary-foreground/70", "text-xs"], [1, "flex", "items-center", "gap-3", "text-sm"], [1, "text-primary-foreground/80", "hidden", "sm:inline"], [1, "bg-lpu-gold/90", "text-lpu-maroon", "ml-1", "rounded", "px-1.5", "py-0.5", "text-xs", "font-semibold", "uppercase"], ["routerLink", "/display", "target", "_blank", 1, "hover:bg-white/10", "inline-flex", "items-center", "gap-1.5", "rounded-md", "px-2", "py-1.5"], ["name", "lucideMonitor", 1, "text-base"], [1, "hover:bg-white/10", "inline-flex", "items-center", "gap-1.5", "rounded-md", "px-2", "py-1.5", 3, "click"], ["name", "lucideLogOut", 1, "text-base"], [1, "mx-auto", "grid", "max-w-6xl", "gap-6", "px-5", "py-6", "lg:grid-cols-[1.4fr_1fr]"], [1, "space-y-5"], [1, "flex", "items-center", "gap-2"], [1, "text-muted-foreground", "text-sm", "font-medium"], [3, "class"], [1, "rounded-2xl", "border", "bg-card", "p-6", "shadow-sm"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "text-muted-foreground", "text-sm", "font-semibold", "uppercase", "tracking-wide"], ["hlmBadge", "", 1, "bg-lpu-maroon"], [1, "flex", "flex-wrap", "items-end", "justify-between", "gap-4"], [1, "py-6", "text-center"], [1, "my-5"], [1, "grid", "grid-cols-2", "gap-3", "sm:grid-cols-3"], ["lpuBtn", "", "size", "lg", 1, "col-span-2", "sm:col-span-3", "h-12", "text-base", 3, "click"], ["name", "lucidePhone", 1, "text-lg"], ["lpuBtn", "", "variant", "secondary", 3, "click", "disabled"], ["name", "lucideBell", 1, "text-base"], ["lpuBtn", "", "variant", "secondary", 3, "click"], ["name", "lucideRotateCcw", 1, "text-base"], ["name", "lucideRepeat", 1, "text-base"], ["lpuBtn", "", "variant", "secondary", 1, "col-span-2", "sm:col-span-3", 3, "click", "disabled"], ["name", "lucideCheck", 1, "text-base"], [1, "flex", "items-center", "justify-between", "rounded-xl", "border", "border-dashed", "bg-card", "p-4"], [1, "space-y-6"], [1, "rounded-2xl", "border", "bg-card", "p-5", "shadow-sm"], [1, "mb-3", "flex", "items-center", "justify-between"], [1, "text-lpu-maroon", "flex", "items-center", "gap-2", "font-semibold"], ["name", "lucideListOrdered", 1, "text-lg"], ["hlmBadge", "", "variant", "secondary"], ["hlmTableContainer", "", 1, "max-h-112", "overflow-auto"], [1, "py-10", "text-center"], ["name", "lucideClock", 1, "text-lg"], [3, "click"], [1, "text-lpu-maroon", "text-6xl", "font-black", "tracking-tight"], [1, "mt-1", "text-lg", "font-semibold"], [1, "text-muted-foreground", "text-sm"], [1, "text-muted-foreground", "mt-1", "text-xs"], [1, "text-4xl", "font-black", "text-muted-foreground/40"], [1, "text-muted-foreground", "mt-2", "text-sm"], [1, "text-sm"], [1, "font-medium"], [1, "text-muted-foreground", "text-xs"], ["name", "lucideRefreshCw", 1, "text-base"], ["hlmTable", "", 1, "w-full"], ["hlmTHead", ""], ["hlmTr", ""], ["hlmTh", "", 1, "w-20"], ["hlmTh", ""], ["hlmTBody", ""], ["hlmTd", "", 1, "text-lpu-maroon", "font-bold"], ["hlmTd", ""], [1, "block", "font-medium"], ["hlmTd", "", 1, "text-muted-foreground", "text-sm"], ["name", "lucideUsers", 1, "text-muted-foreground/40", "mx-auto", "text-4xl"], ["name", "lucideClock", 1, "text-muted-foreground/40", "mx-auto", "text-4xl"]], template: function TellerPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "div")(6, "p", 5);
      \u0275\u0275text(7, "Teller Console");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "span", 8);
      \u0275\u0275text(12);
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "a", 10);
      \u0275\u0275element(16, "ng-icon", 11);
      \u0275\u0275text(17, " Board ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275listener("click", function TellerPage_Template_button_click_18_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(19, "ng-icon", 13);
      \u0275\u0275text(20, " Logout ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "main", 14)(22, "section", 15)(23, "div", 16)(24, "span", 17);
      \u0275\u0275text(25, "Service:");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(26, TellerPage_For_27_Template, 2, 3, "button", 18, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 16)(29, "span", 17);
      \u0275\u0275text(30, "Window:");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(31, TellerPage_For_32_Template, 2, 3, "button", 18, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 19)(34, "div", 20)(35, "h2", 21);
      \u0275\u0275text(36, " Now serving ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 22);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(39, TellerPage_Conditional_39_Template, 11, 8, "div", 23)(40, TellerPage_Conditional_40_Template, 5, 0, "div", 24);
      \u0275\u0275element(41, "hlm-separator", 25);
      \u0275\u0275elementStart(42, "div", 26)(43, "button", 27);
      \u0275\u0275listener("click", function TellerPage_Template_button_click_43_listener() {
        return ctx.callNext();
      });
      \u0275\u0275element(44, "ng-icon", 28);
      \u0275\u0275text(45, " Call next queue ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 29);
      \u0275\u0275listener("click", function TellerPage_Template_button_click_46_listener() {
        return ctx.recallCurrent();
      });
      \u0275\u0275element(47, "ng-icon", 30);
      \u0275\u0275text(48, " Recall ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 31);
      \u0275\u0275listener("click", function TellerPage_Template_button_click_49_listener() {
        return ctx.recallLast();
      });
      \u0275\u0275element(50, "ng-icon", 32);
      \u0275\u0275text(51, " Recall last ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 29);
      \u0275\u0275listener("click", function TellerPage_Template_button_click_52_listener() {
        return ctx.transfer();
      });
      \u0275\u0275element(53, "ng-icon", 33);
      \u0275\u0275text(54, " Transfer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 34);
      \u0275\u0275listener("click", function TellerPage_Template_button_click_55_listener() {
        return ctx.complete();
      });
      \u0275\u0275element(56, "ng-icon", 35);
      \u0275\u0275text(57, " Complete transaction ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(58, TellerPage_Conditional_58_Template, 9, 0, "div", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 37)(60, "section", 38)(61, "div", 39)(62, "h2", 40);
      \u0275\u0275element(63, "ng-icon", 41);
      \u0275\u0275text(64, " Waiting list ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 42);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(67, TellerPage_Conditional_67_Template, 13, 0, "div", 43)(68, TellerPage_Conditional_68_Template, 4, 0, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "section", 38)(70, "div", 39)(71, "h2", 40);
      \u0275\u0275element(72, "ng-icon", 45);
      \u0275\u0275text(73, " Last served ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 42);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(76, TellerPage_Conditional_76_Template, 13, 0, "div", 43)(77, TellerPage_Conditional_77_Template, 4, 0, "div", 44);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_6_0;
      let tmp_10_0;
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.serviceLabel(), " service");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx.session()) == null ? null : tmp_1_0.username, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx.session()) == null ? null : tmp_2_0.role, " ");
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.services);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.windows());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.serviceLabel(), " \xB7 ", ctx.currentWindowLabel());
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_6_0 = ctx.current()) ? 39 : 40, tmp_6_0);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", !ctx.current());
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !ctx.current());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.current());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(((tmp_10_0 = ctx.session()) == null ? null : tmp_10_0.role) === "admin" ? 58 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.waiting().length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.waiting().length ? 67 : 68);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.served().length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.served().length ? 76 : 77);
    }
  }, dependencies: [RouterLink, NgIcon, LpuButton, HlmBadge, HlmSeparator, HlmTableContainer, HlmTable, HlmTBody, HlmTd, HlmTh, HlmTHead, HlmTr, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TellerPage, [{
    type: Component,
    args: [{
      selector: "lpu-teller",
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
              <span hlmBadge class="bg-lpu-maroon">{{ serviceLabel() }} \xB7 {{ currentWindowLabel() }}</span>
            </div>

            @if (current(); as c) {
              <div class="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p class="text-lpu-maroon text-6xl font-black tracking-tight">{{ c.number }}</p>
                  <p class="mt-1 text-lg font-semibold">{{ c.name || 'Walk-in' }}</p>
                  <p class="text-muted-foreground text-sm">
                    {{ c.studentId || 'No ID' }} \xB7 {{ c.request }}
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
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TellerPage, { className: "TellerPage", filePath: "src/app/pages/teller/teller.page.ts", lineNumber: 226 });
})();
export {
  TellerPage
};
//# sourceMappingURL=chunk-ILPBKBDN.mjs.map
