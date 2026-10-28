import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Favorites } from './pages/favorites/favorites';
import { PokemonInfo } from './pages/pokemon-info/pokemon-info';

export const routes: Routes = [
    {
        path: 'search',
        component: Home
    },
    {
        path: 'favorites',
        component: Favorites
    },
    {
        path: 'pokemon/:name/:redirectUrl',
        component: PokemonInfo
    },
    {
        path: 'about',
        component: About
    },
    {
        path: '**',
        redirectTo: 'search'
    }
];
