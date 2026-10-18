import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
