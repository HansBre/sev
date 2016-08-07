import {provideRouter, RouterConfig } from '@angular/router';
import {DrinksComponent} from './drinks';
import {AddComponent} from './add';

const routes: RouterConfig = [
  {path:'drinks',component:DrinksComponent},
  {path:'add',component:AddComponent},
  {path: '',redirectTo: '/drinks',pathMatch: 'full'}
];

export const appRouterProviders = [
  provideRouter(routes)
];
