import { provideRouter, RouterConfig } from '@angular/router';
import {DrinksComponent} from './drinks';

const routes: RouterConfig = [
  {path:'drinks',component:DrinksComponent},
  {path: '',redirectTo: '/drinks',pathMatch: 'full'}
];

export const appRouterProviders = [
  provideRouter(routes)
];
