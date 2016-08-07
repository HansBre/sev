import {provideRouter, RouterConfig } from '@angular/router';
import {DrinksComponent} from './drinks';
import {AddComponent} from './add';

const routes: RouterConfig = [
  {path:'drinks',component:DrinksComponent},
<<<<<<< HEAD
  {path:'/add',component:AddComponent},
=======
  {path:'add',component:AddComponent},
>>>>>>> working
  {path: '',redirectTo: '/drinks',pathMatch: 'full'}
];

export const appRouterProviders = [
  provideRouter(routes)
];
