

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/login/register.component';
import { PlaylistComponent } from './pages/playlists/playlist.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { PagesComponent } from './pages/pages.component';

// Componentes


const appRoutes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'tracks', component: TracksComponent},
            { path: 'playlist', component: PlaylistComponent}
        ]
    },
    { path: '**', component: LoginComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes );
