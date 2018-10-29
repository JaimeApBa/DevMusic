import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, URL_DATA } from '../config/config';

@Injectable()
export class PlaylistService {


  constructor(
    public http: HttpClient
  ) { }

  cargarTracksPlaylists () {
    const url  = URL_SERVICIOS + 'playlists/tracks' + URL_DATA + 'track_type=albumtrack&name=music';
console.log(url);
    return this.http.get(url);
  }

  ultimosPlaylists () {
    const url  = URL_SERVICIOS + 'playlists/tracks' + URL_DATA + 'track_type=albumtrack&name=music';

    return this.http.get(url);
  }

}
