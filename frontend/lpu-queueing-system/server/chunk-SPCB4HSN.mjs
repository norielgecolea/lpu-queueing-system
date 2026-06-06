import './polyfills.server.mjs';
import {
  QueueStore,
  SERVICE_LABEL
} from "./chunk-LGLLNDIQ.mjs";
import {
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  DestroyRef,
  NgIcon,
  NgTemplateOutlet,
  afterNextRender,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BESZRXX3.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/pages/display/display.page.ts
var _c0 = (a0) => ({ icon: "lucideCreditCard", title: "Cashier", waiting: a0 });
var _c1 = (a0) => ({ rows: a0 });
var _c2 = (a0) => ({ icon: "lucideFileText", title: "Registrar", waiting: a0 });
var _c3 = (a0) => ({ b: a0 });
var _forTrack0 = ($index, $item) => $item.windowId;
var _forTrack1 = ($index, $item) => $item.id;
function DisplayPage_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 25);
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    \u0275\u0275nextContext();
    const windowCard_r2 = \u0275\u0275reference(70);
    \u0275\u0275property("ngTemplateOutlet", windowCard_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, b_r1));
  }
}
function DisplayPage_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 25);
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    \u0275\u0275nextContext();
    const windowCard_r2 = \u0275\u0275reference(70);
    \u0275\u0275property("ngTemplateOutlet", windowCard_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, b_r3));
  }
}
function DisplayPage_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 42)(1, "h2", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275element(4, "ng-icon", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const title_r4 = ctx.title;
    const waiting_r5 = ctx.waiting;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(title_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", waiting_r5, " waiting ");
  }
}
function DisplayPage_ng_template_69_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 46);
  }
}
function DisplayPage_ng_template_69_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r6 = \u0275\u0275nextContext().b;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r6.name);
  }
}
function DisplayPage_ng_template_69_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1, "Available");
    \u0275\u0275elementEnd();
  }
}
function DisplayPage_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article");
    \u0275\u0275conditionalCreate(1, DisplayPage_ng_template_69_Conditional_1_Template, 1, 0, "div", 46);
    \u0275\u0275elementStart(2, "div", 47)(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 50)(7, "p", 51);
    \u0275\u0275text(8, " Now Serving ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, DisplayPage_ng_template_69_Conditional_11_Template, 2, 1, "p", 53)(12, DisplayPage_ng_template_69_Conditional_12_Template, 2, 0, "p", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r6 = ctx.b;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r6.cardClass(b_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r6.number ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", b_r6.windowLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(b_r6.number ? "bg-lpu-gold shadow-[0_0_0_4px_rgba(240,182,0,.25)]" : "bg-current opacity-25");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("animate-pop", ctx_r6.flashId() === b_r6.windowId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r6.number ?? "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r6.name ? 11 : 12);
  }
}
function DisplayPage_ng_template_71_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 61)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const \u0275$index_174_r9 = ctx.$index;
    \u0275\u0275classMap(\u0275$index_174_r9 === 0 ? "bg-lpu-gold/15 ring-1 ring-lpu-gold/40" : "bg-neutral-50 ring-1 ring-black/5");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275$index_174_r9 === 0 ? "text-lpu-maroon" : "text-neutral-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", c_r8.windowLabel, " \xB7 ", \u0275\u0275pipeBind2(5, 7, c_r8.calledAt, "h:mm a"), " ");
  }
}
function DisplayPage_ng_template_71_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 58);
    \u0275\u0275repeaterCreate(1, DisplayPage_ng_template_71_Conditional_4_For_2_Template, 6, 10, "li", 60, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rows_r10 = \u0275\u0275nextContext().rows;
    \u0275\u0275advance();
    \u0275\u0275repeater(rows_r10);
  }
}
function DisplayPage_ng_template_71_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1, "No calls yet");
    \u0275\u0275elementEnd();
  }
}
function DisplayPage_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "header", 56)(2, "h3", 57);
    \u0275\u0275text(3, "Latest Calls");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, DisplayPage_ng_template_71_Conditional_4_Template, 3, 0, "ul", 58)(5, DisplayPage_ng_template_71_Conditional_5_Template, 2, 0, "p", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rows_r10 = ctx.rows;
    \u0275\u0275advance(4);
    \u0275\u0275conditional(rows_r10.length ? 4 : 5);
  }
}
var DisplayPage = class _DisplayPage {
  store = inject(QueueStore);
  destroyRef = inject(DestroyRef);
  now = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "now" }] : (
    /* istanbul ignore next */
    []
  ));
  voiceOn = signal(true, ...ngDevMode ? [{ debugName: "voiceOn" }] : (
    /* istanbul ignore next */
    []
  ));
  flashId = signal(null, ...ngDevMode ? [{ debugName: "flashId" }] : (
    /* istanbul ignore next */
    []
  ));
  boards = computed(() => this.store.windows().map((w) => {
    const t = w.currentTicketId ? this.store.tickets().find((x) => x.id === w.currentTicketId) ?? null : null;
    return {
      windowId: w.id,
      service: w.serviceType,
      serviceLabel: SERVICE_LABEL[w.serviceType],
      windowLabel: w.label,
      number: t?.number ?? null,
      name: t?.name ?? "",
      request: t?.request ?? ""
    };
  }), ...ngDevMode ? [{ debugName: "boards" }] : (
    /* istanbul ignore next */
    []
  ));
  cashierWindows = computed(() => this.boards().filter((b) => b.service === "cashier"), ...ngDevMode ? [{ debugName: "cashierWindows" }] : (
    /* istanbul ignore next */
    []
  ));
  registrarWindows = computed(() => this.boards().filter((b) => b.service === "registrar"), ...ngDevMode ? [{ debugName: "registrarWindows" }] : (
    /* istanbul ignore next */
    []
  ));
  cashierCalls = computed(() => this.calls("cashier"), ...ngDevMode ? [{ debugName: "cashierCalls" }] : (
    /* istanbul ignore next */
    []
  ));
  registrarCalls = computed(() => this.calls("registrar"), ...ngDevMode ? [{ debugName: "registrarCalls" }] : (
    /* istanbul ignore next */
    []
  ));
  cashierWaiting = computed(() => this.store.waiting().filter((t) => t.serviceType === "cashier").length, ...ngDevMode ? [{ debugName: "cashierWaiting" }] : (
    /* istanbul ignore next */
    []
  ));
  registrarWaiting = computed(() => this.store.waiting().filter((t) => t.serviceType === "registrar").length, ...ngDevMode ? [{ debugName: "registrarWaiting" }] : (
    /* istanbul ignore next */
    []
  ));
  /** announceTick per window from the previous reaction, drives flash + voice. */
  ticks = /* @__PURE__ */ new Map();
  constructor() {
    effect(() => {
      const windows = this.store.windows();
      for (const w of windows) {
        const prev = this.ticks.get(w.id);
        this.ticks.set(w.id, w.announceTick);
        if (prev === void 0 || w.announceTick <= prev)
          continue;
        const board = this.boards().find((b) => b.windowId === w.id);
        if (!board?.number)
          continue;
        this.flash(w.id);
        this.announce(board);
      }
    });
    afterNextRender(() => {
      const id = setInterval(() => this.now.set(/* @__PURE__ */ new Date()), 1e3);
      this.destroyRef.onDestroy(() => clearInterval(id));
    });
  }
  toggleVoice() {
    this.voiceOn.set(!this.voiceOn());
  }
  cardClass(b) {
    const base = "group relative flex aspect-[16/10] flex-col overflow-hidden rounded-md border p-3.5 transition-all duration-500 ease-out";
    if (this.flashId() === b.windowId) {
      return `${base} border-lpu-gold/80 bg-gradient-to-br from-lpu-red to-lpu-maroon text-white scale-[1.04] ring-4 ring-lpu-gold/40 shadow-2xl shadow-lpu-gold/30`;
    }
    if (b.number) {
      return `${base} border-white/10 bg-gradient-to-br from-lpu-maroon to-lpu-red text-white shadow-lg shadow-black/40`;
    }
    return `${base} border-black/5 bg-white text-neutral-900 shadow-sm`;
  }
  calls(service) {
    const wmap = new Map(this.store.windows().map((w) => [w.id, w]));
    return this.store.tickets().filter((t) => t.serviceType === service && t.calledAt != null).sort((a, b) => (b.calledAt ?? 0) - (a.calledAt ?? 0)).slice(0, 8).map((t) => ({
      id: t.id,
      number: t.number,
      name: t.name || "\u2014",
      windowLabel: wmap.get(t.windowId ?? "")?.label ?? "",
      calledAt: t.calledAt
    }));
  }
  flash(windowId) {
    this.flashId.set(windowId);
    setTimeout(() => {
      if (this.flashId() === windowId)
        this.flashId.set(null);
    }, 4e3);
  }
  announce(board) {
    if (!this.voiceOn() || !board.number)
      return;
    if (typeof window === "undefined" || !("speechSynthesis" in window))
      return;
    const spoken = board.number.split("-").join(" ");
    const msg = new SpeechSynthesisUtterance(`Now serving, number ${spoken}, at ${board.serviceLabel} ${board.windowLabel}.`);
    msg.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  }
  static \u0275fac = function DisplayPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DisplayPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayPage, selectors: [["lpu-display"]], decls: 73, vars: 26, consts: [["serviceHeader", ""], ["windowCard", ""], ["callLog", ""], [1, "font-display", "relative", "isolate", "flex", "h-dvh", "flex-col", "gap-4", "overflow-hidden", "bg-[#f5f3ef]", "p-4", "text-neutral-900", "lg:gap-5", "lg:p-6"], ["aria-hidden", "true", 1, "pointer-events-none", "absolute", "inset-0", "-z-10", "overflow-hidden"], [1, "bg-lpu-maroon/12", "absolute", "-left-32", "-top-40", "size-[42rem]", "rounded-full", "blur-[140px]", "[animation:drift_22s_ease-in-out_infinite]"], [1, "bg-lpu-red/10", "absolute", "-bottom-48", "-right-24", "size-[40rem]", "rounded-full", "blur-[150px]", "[animation:drift_28s_ease-in-out_infinite_reverse]"], [1, "bg-lpu-gold/15", "absolute", "left-1/2", "top-1/3", "size-[26rem]", "-translate-x-1/2", "rounded-full", "blur-[160px]"], [1, "flex", "shrink-0", "items-center", "justify-between", "gap-4", "rounded-md", "border", "border-black/5", "bg-white", "px-5", "py-3", "shadow-sm", "lg:px-7"], [1, "flex", "items-center", "gap-3.5"], [1, "grid", "size-11", "place-items-center", "rounded-md", "bg-lpu-maroon/5", "ring-1", "ring-lpu-maroon/10"], ["src", "favicon.svg", "alt", "LPU", 1, "size-7"], [1, "leading-tight"], [1, "text-base", "font-extrabold", "tracking-tight", "lg:text-lg"], [1, "text-lpu-maroon", "text-[0.7rem]", "font-semibold", "uppercase", "tracking-[0.28em]"], [1, "flex", "items-center", "gap-4", "lg:gap-6"], [1, "hidden", "text-right", "sm:block"], [1, "text-2xl", "font-black", "tabular-nums", "leading-none", "lg:text-3xl"], [1, "mt-1", "flex", "items-center", "justify-end", "gap-1.5", "text-xs", "font-medium", "text-neutral-500"], ["name", "lucideCalendar", 1, "text-sm"], [1, "text-lpu-maroon", "grid", "size-11", "place-items-center", "rounded-md", "border", "border-black/5", "bg-white", "shadow-sm", "transition-colors", "hover:bg-lpu-maroon/10", 3, "click", "title"], [1, "text-2xl", 3, "name"], [1, "grid", "min-h-0", "flex-1", "grid-cols-1", "gap-4", "lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.9fr)_minmax(0,0.72fr)]", "lg:gap-5"], [1, "flex", "min-h-0", "min-w-0", "flex-col", "gap-4", "lg:gap-5"], [1, "flex", "flex-col", "gap-3"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "grid", "grid-cols-2", "gap-3", "lg:gap-4"], [1, "group", "relative", "min-h-0", "flex-1", "overflow-hidden", "rounded-md", "border", "border-black/5", "shadow-sm"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "poster", "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=70", 1, "size-full", "object-cover", "opacity-90", "contrast-110", "transition-transform", "duration-[1200ms]", "ease-out", "group-hover:scale-105"], ["src", "https://www.w3schools.com/html/mov_bbb.mp4", "type", "video/mp4"], [1, "absolute", "inset-0", "bg-linear-to-b", "from-black/35", "to-transparent"], [1, "absolute", "left-4", "top-4", "flex", "items-center", "gap-2", "rounded-md", "border", "border-white/15", "bg-black/70", "px-3.5", "py-1.5"], [1, "size-2", "animate-pulse", "rounded-full", "bg-lpu-gold"], [1, "text-[0.7rem]", "font-semibold", "uppercase", "tracking-[0.2em]", "text-white/90"], [1, "flex", "shrink-0", "flex-col", "gap-2.5", "overflow-hidden", "rounded-md", "border", "border-black/5", "bg-white", "px-5", "py-4", "shadow-sm"], [1, "flex", "items-center", "gap-2.5"], [1, "text-lpu-maroon", "grid", "size-8", "shrink-0", "place-items-center", "rounded-md", "bg-lpu-maroon/10"], ["name", "lucideMegaphone", 1, "text-base"], [1, "text-lpu-maroon", "text-base", "font-extrabold", "tracking-tight"], [1, "relative", "overflow-hidden", "border-t", "border-black/5", "pt-2.5"], [1, "marquee", "flex", "w-max", "gap-16", "whitespace-nowrap", "text-sm", "font-semibold", "text-neutral-700"], ["aria-hidden", "true"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "text-2xl", "font-black", "tracking-tight", "xl:text-3xl"], [1, "flex", "items-center", "gap-1.5", "rounded-md", "border", "border-black/5", "bg-white", "px-3", "py-1", "text-xs", "font-semibold", "text-neutral-600", "shadow-sm"], ["name", "lucideUsers", 1, "text-sm"], ["aria-hidden", "true", 1, "pointer-events-none", "absolute", "-right-10", "-top-10", "size-32", "rounded-full", "bg-lpu-gold/20", "blur-3xl"], [1, "relative", "flex", "items-center", "justify-between"], [1, "text-sm", "font-bold", "uppercase", "tracking-wide", "opacity-75"], [1, "size-2.5", "rounded-full"], [1, "relative", "flex", "flex-1", "flex-col", "items-center", "justify-center", "py-1", "text-center"], [1, "text-[0.6rem]", "font-semibold", "uppercase", "tracking-[0.25em]", "opacity-60"], [1, "w-full", "truncate", "text-center", "text-3xl", "font-black", "tabular-nums", "leading-none", "tracking-tight", "xl:text-4xl"], [1, "mt-1", "line-clamp-1", "text-xs", "font-medium", "opacity-80"], [1, "mt-1", "text-xs", "opacity-40"], [1, "flex", "min-h-0", "flex-1", "flex-col", "rounded-md", "border", "border-black/5", "bg-white", "p-5", "shadow-sm"], [1, "mb-3", "flex", "items-center"], [1, "text-base", "font-bold", "tracking-tight", "text-neutral-800"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-2", "overflow-hidden"], [1, "grid", "flex-1", "place-items-center", "text-sm", "text-neutral-400"], [1, "flex", "items-center", "justify-between", "gap-3", "rounded-md", "px-3", "py-2.5", "transition-colors", 3, "class"], [1, "flex", "items-center", "justify-between", "gap-3", "rounded-md", "px-3", "py-2.5", "transition-colors"], [1, "text-2xl", "font-black", "tabular-nums"], [1, "shrink-0", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-neutral-400"]], template: function DisplayPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 3)(1, "div", 4);
      \u0275\u0275element(2, "div", 5)(3, "div", 6)(4, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "header", 8)(6, "div", 9)(7, "span", 10);
      \u0275\u0275element(8, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 12)(10, "p", 13);
      \u0275\u0275text(11, " Lyceum of the Philippines University ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 14);
      \u0275\u0275text(13, " Service Queue Board ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 15)(15, "div", 16)(16, "p", 17);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 18);
      \u0275\u0275element(20, "ng-icon", 19);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 20);
      \u0275\u0275listener("click", function DisplayPage_Template_button_click_23_listener() {
        return ctx.toggleVoice();
      });
      \u0275\u0275element(24, "ng-icon", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 22)(26, "section", 23)(27, "div", 24);
      \u0275\u0275elementContainer(28, 25);
      \u0275\u0275elementStart(29, "div", 26);
      \u0275\u0275repeaterCreate(30, DisplayPage_For_31_Template, 1, 4, "ng-container", 25, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainer(32, 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "section", 23)(34, "div", 27)(35, "video", 28);
      \u0275\u0275element(36, "source", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "div", 30);
      \u0275\u0275elementStart(38, "div", 31);
      \u0275\u0275element(39, "span", 32);
      \u0275\u0275elementStart(40, "span", 33);
      \u0275\u0275text(41, "Campus Highlights");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 34)(43, "div", 35)(44, "span", 36);
      \u0275\u0275element(45, "ng-icon", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 38);
      \u0275\u0275text(47, " Welcome to LPU. Watch this board for your number. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 39)(49, "div", 40)(50, "span");
      \u0275\u0275text(51, "Please keep your queue ticket \u2014 numbers are called in order of arrival.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "Watch this screen and listen for your number to be announced.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "Welcome to Lyceum of the Philippines University.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 41);
      \u0275\u0275text(57, "Please keep your queue ticket. Numbers are called in order of arrival.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 41);
      \u0275\u0275text(59, "Watch this screen and listen for your number to be announced.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "section", 23)(61, "div", 24);
      \u0275\u0275elementContainer(62, 25);
      \u0275\u0275elementStart(63, "div", 26);
      \u0275\u0275repeaterCreate(64, DisplayPage_For_65_Template, 1, 4, "ng-container", 25, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainer(66, 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(67, DisplayPage_ng_template_67_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(69, DisplayPage_ng_template_69_Template, 13, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(71, DisplayPage_ng_template_71_Template, 6, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const serviceHeader_r11 = \u0275\u0275reference(68);
      const callLog_r12 = \u0275\u0275reference(72);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 12, ctx.now(), "h:mm:ss a"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 15, ctx.now(), "EEE, MMMM d, y"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("title", ctx.voiceOn() ? "Mute announcements" : "Unmute announcements");
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.voiceOn() ? "lucideVolume2" : "lucideVolumeOff");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", serviceHeader_r11)("ngTemplateOutletContext", \u0275\u0275pureFunction1(18, _c0, ctx.cashierWaiting()));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.cashierWindows());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", callLog_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(20, _c1, ctx.cashierCalls()));
      \u0275\u0275advance(30);
      \u0275\u0275property("ngTemplateOutlet", serviceHeader_r11)("ngTemplateOutletContext", \u0275\u0275pureFunction1(22, _c2, ctx.registrarWaiting()));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.registrarWindows());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", callLog_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(24, _c1, ctx.registrarCalls()));
    }
  }, dependencies: [NgIcon, NgTemplateOutlet, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.marquee[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_marquee 28s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_marquee {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.animate-pop[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pop 0.7s cubic-bezier(0.22, 1, 0.36, 1);\n}\n@keyframes _ngcontent-%COMP%_pop {\n  0% {\n    transform: scale(0.6);\n    filter: blur(8px);\n    opacity: 0;\n  }\n  60% {\n    transform: scale(1.08);\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_drift {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(4%, 6%) scale(1.08);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .marquee[_ngcontent-%COMP%], \n   .animate-pop[_ngcontent-%COMP%], \n   [class*=animation][_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n}\n/*# sourceMappingURL=display.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayPage, [{
    type: Component,
    args: [{ selector: "lpu-display", changeDetection: ChangeDetectionStrategy.OnPush, imports: [DatePipe, NgIcon, NgTemplateOutlet], template: `
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

      <!-- ============ NAV \xB7 floating glass pill ============ -->
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
        <!-- ===== LEFT \xB7 CASHIER ===== -->
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

        <!-- ===== MIDDLE \xB7 MEDIA + ANNOUNCEMENTS ===== -->
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
                <span>Please keep your queue ticket \u2014 numbers are called in order of arrival.</span>
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

        <!-- ===== RIGHT \xB7 REGISTRAR ===== -->
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
            {{ b.number ?? '\u2014' }}
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
                  {{ c.windowLabel }} \xB7 {{ c.calledAt | date: 'h:mm a' }}
                </span>
              </li>
            }
          </ul>
        } @else {
          <p class="grid flex-1 place-items-center text-sm text-neutral-400">No calls yet</p>
        }
      </div>
    </ng-template>
  `, styles: ["/* angular:styles/component:css;28ef698a24e54488b8e24ae08c382d8e34c7aa6b26fd2a7c8f2cca01044d3446;F:/SynologyDrive/Documents/Website Development/lpu-queueing-system/src/app/pages/display/display.page.ts */\n:host {\n  display: block;\n}\n.marquee {\n  animation: marquee 28s linear infinite;\n}\n@keyframes marquee {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.animate-pop {\n  animation: pop 0.7s cubic-bezier(0.22, 1, 0.36, 1);\n}\n@keyframes pop {\n  0% {\n    transform: scale(0.6);\n    filter: blur(8px);\n    opacity: 0;\n  }\n  60% {\n    transform: scale(1.08);\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes drift {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(4%, 6%) scale(1.08);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .marquee,\n  .animate-pop,\n  [class*=animation] {\n    animation: none !important;\n  }\n}\n/*# sourceMappingURL=display.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayPage, { className: "DisplayPage", filePath: "src/app/pages/display/display.page.ts", lineNumber: 355 });
})();
export {
  DisplayPage
};
//# sourceMappingURL=chunk-SPCB4HSN.mjs.map
