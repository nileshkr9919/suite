import { App } from './app';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'files',
    loadChildren: () => import('files/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('notifications/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'calender',
    loadChildren: () => import('calender/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'meet',
    loadChildren: () => import('meet/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'notes',
    loadChildren: () => import('notes/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: App,
  },
];
