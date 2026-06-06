import {
  AuthStore,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  withComponentInputBinding,
  withEventReplay
} from "./chunk-T7K4C4NH.js";
import {
  Component,
  __spreadValues,
  inject,
  provideBrowserGlobalErrorListeners,
  provideIcons,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-4FH5JZJS.js";

// node_modules/@ng-icons/lucide/fesm2022/ng-icons-lucide.mjs
var lucideArrowRight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`;
var lucideBell = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>`;
var lucideBuilding2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>`;
var lucideCalendar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>`;
var lucideCheck = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M20 6 9 17l-5-5"></path></svg>`;
var lucideChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="m6 9 6 6 6-6"></path></svg>`;
var lucideClock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>`;
var lucideCreditCard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>`;
var lucideFileText = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`;
var lucideListOrdered = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M11 5h10"></path><path d="M11 12h10"></path><path d="M11 19h10"></path><path d="M4 4h1v5"></path><path d="M4 9h2"></path><path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"></path></svg>`;
var lucideLock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
var lucideLogIn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>`;
var lucideLogOut = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>`;
var lucideMegaphone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>`;
var lucideMonitor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>`;
var lucideNfc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"></path><path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"></path><path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"></path><path d="M16.37 2a20.16 20.16 0 0 1 0 20"></path></svg>`;
var lucidePhone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>`;
var lucidePrinter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg>`;
var lucideRefreshCw = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>`;
var lucideRepeat = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>`;
var lucideRotateCcw = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>`;
var lucideTicket = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>`;
var lucideUser = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
var lucideUsers = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>`;
var lucideVolume2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>`;
var lucideVolumeOff = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M16 9a5 5 0 0 1 .95 2.293"></path><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"></path><path d="m2 2 20 20"></path><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"></path><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"></path></svg>`;

// src/app/app.routes.ts
var tellerGuard = () => {
  const auth = inject(AuthStore);
  const router = inject(Router);
  return auth.isAuthenticated() ? true : router.createUrlTree(["/login"]);
};
var routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  __spreadValues({
    path: "login",
    title: "LPU Queue \xB7 Staff Login",
    loadComponent: () => import("./chunk-L6GD54IE.js").then((m) => m.LoginPage)
  }, false ? { \u0275entryName: "src/app/pages/login/login.page.ts" } : {}),
  __spreadValues({
    path: "teller",
    title: "LPU Queue \xB7 Teller",
    canActivate: [tellerGuard],
    loadComponent: () => import("./chunk-MFZJW7TY.js").then((m) => m.TellerPage)
  }, false ? { \u0275entryName: "src/app/pages/teller/teller.page.ts" } : {}),
  __spreadValues({
    path: "customer",
    title: "LPU Queue \xB7 Get a Number",
    loadComponent: () => import("./chunk-X5MVSHSD.js").then((m) => m.CustomerPage)
  }, false ? { \u0275entryName: "src/app/pages/customer/customer.page.ts" } : {}),
  __spreadValues({
    path: "display",
    title: "LPU Queue \xB7 Now Serving",
    loadComponent: () => import("./chunk-OZSRMVTB.js").then((m) => m.DisplayPage)
  }, false ? { \u0275entryName: "src/app/pages/display/display.page.ts" } : {}),
  { path: "**", redirectTo: "login" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
    provideIcons({
      lucideUser,
      lucideLogIn,
      lucideLogOut,
      lucidePrinter,
      lucideNfc,
      lucideTicket,
      lucideBell,
      lucidePhone,
      lucideCheck,
      lucideArrowRight,
      lucideClock,
      lucideVolume2,
      lucideVolumeOff,
      lucideUsers,
      lucideRepeat,
      lucideRotateCcw,
      lucideBuilding2,
      lucideCreditCard,
      lucideFileText,
      lucideChevronDown,
      lucideMegaphone,
      lucideMonitor,
      lucideListOrdered,
      lucideRefreshCw,
      lucideLock,
      lucideCalendar
    })
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      imports: [RouterOutlet],
      template: "<router-outlet />"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 9 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
