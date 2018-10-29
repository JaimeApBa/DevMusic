import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Directivas
import { PluginsDirective } from './directivas/plugins.directive';

// Rutas
import { APP_ROUTES } from './app.routes';

// Servicios
import { PlaylistService } from './services/playlist.service';
import { TrackService } from './services/track.service';

// Componentes
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/login/register.component';
import { PlaylistComponent } from './pages/playlists/playlist.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { TracksComponent } from './pages/tracks/tracks.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    PlaylistComponent,
    HeaderComponent,
    TracksComponent,
    PluginsDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [
    PlaylistService,
    TrackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
