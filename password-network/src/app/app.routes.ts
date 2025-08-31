import { Routes } from '@angular/router';
import { Home } from './views/home/home';

export const routes: Routes = [
  { path: '', component: Home },           // Rota raiz → Home
  { path: '**', redirectTo: '' }           // Qualquer outra rota redireciona para Home
];

