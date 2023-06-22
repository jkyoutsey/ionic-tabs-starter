import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
        children: [
          {
            path: 'home',
            loadComponent: () =>
              import('../tab1-home/tab1-home.component').then(
                (m) => m.Tab1HomeComponent
              ),
          },
          {
            path: 'child1',
            loadComponent: () =>
              import('../child1/child1.component').then(
                (m) => m.Child1Component
              ),
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'prefix',
          },
        ],
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/products/home',
        pathMatch: 'prefix',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
