import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // Interactive kiosk/console app, render on the client, no prerender.
    path: '**',
    renderMode: RenderMode.Client
  }
];
