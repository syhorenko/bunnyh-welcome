import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [{ id: 'todoshido' }];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
