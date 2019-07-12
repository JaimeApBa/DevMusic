import { URL_CONFIG } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, URL_DATA } from '../config/config';
import { map, catchError } from 'rxjs/operators';
import { Tracks } from '../models/tracks.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  track: Tracks[];
  constructor(
    public http: HttpClient
  ) { }

  cargarPopularTracks() {

    const url = URL_SERVICIOS + 'tracks' + URL_DATA + '&include=musicinfo+lyrics+licenses+stats&boost=popularity_month&limit=100';

    return this.http.get(url)
          .pipe( map( (resp: any) => {
              return resp.results;
          }),
          catchError ((err) => {
              return throwError(err);
          }));
  }

  cargarTracks( album_name: string ) {
    const url = URL_SERVICIOS + 'tracks' + URL_DATA + '&artist_name=' + album_name +
                '&include=musicinfo+lyrics+licenses+stats&order=album_name&limit=100';

    return this.http.get(url)
          .pipe( map( (resp: any) => {
              return resp.results;
          }),
          catchError ((err) => {
              return throwError(err);
          }));
  }

  similarTrack(id) {

  }

  downloadFile(id) {
    const url = URL_SERVICIOS + 'tracks/file' + URL_CONFIG + 'id=' + id;

    return window.open(url, '_self');
  }
  getInfoTrack(id) {
    const url = URL_SERVICIOS + 'tracks' + URL_DATA +
                'include=musicinfo+lyrics+licenses+stats&id=' + id;

    return this.http.get(url)
          .pipe( map( (resp: any) => {
              return resp.results;
          }),
          catchError ((err) => {
            console.log(err);
              return throwError(err);
          }));
  }

}
